import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordService } from './password.service';
import { GoogleAuthDto } from '../auth/dto/google-auth.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UploadsService } from '../uploads/uploads.service';
import { Buffer } from 'buffer';
import { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import * as sharp from 'sharp';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { EmailService } from '../email/email.service';
import SendData = ManagedUpload.SendData;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordService: PasswordService,
    private readonly uploadsService: UploadsService,
    private readonly emailService: EmailService,
  ) {}

  /**
   * Creates a new user.
   * @param body - The user data.
   * @returns A promise that resolves to the created user, or null if the user already exists.
   */
  async createUser(body: CreateUserDto): Promise<User | null> {
    const existingUser: User | null = await this.findOne(body.username);

    if (existingUser) {
      return null;
    }

    const user: User = this.userRepository.create(
      new User(
        body.fullName,
        body.username,
        await this.passwordService.encode(body.password),
      ),
    );

    user.profileName = body.fullName.replace(/\s/g, '').toLowerCase();
    await this.userRepository.save(user);

    return user;
  }

  /**
   * Creates a new user using OAuth.
   * @param body - The user data from the OAuth provider.
   * @returns A promise that resolves to the created user, or null if the user already exists.
   */
  async createUserOauth(body: GoogleAuthDto): Promise<User | null> {
    const existingUser: User | null = await this.findOne(body.email);

    if (existingUser) {
      return null;
    }

    const fullName: string = `${body.firstName} ${body.lastName}`;
    const user: User = this.userRepository.create(
      new User(fullName, body.email),
    );

    user.isConfirmed = true;
    user.profileName = fullName.replace(/\s/g, '').toLowerCase();
    await this.userRepository.save(user);

    return user;
  }

  /**
   * Finds a user by their username.
   * @param username - The username of the user to find.
   * @returns A promise that resolves to the user object if found, or null if not found.
   */
  async findOne(username: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }

  /**
   * Updates the avatar of a user.
   * @param username - The username of the user whose avatar is to be updated.
   * @param avatar - The new avatar file.
   * @returns A promise that resolves to the new avatar URL.
   * @throws NotFoundException if the user is not found.
   */
  async updateAvatar(username: string, avatar: Express.Multer.File) {
    const user: User = await this.findOne(username);

    if (!user) throw new NotFoundException('User not found');

    if (user.avatarKey) {
      try {
        await this.uploadsService.deleteFile(user.avatarKey);
      } finally {
        user.avatarUrl = null;
        user.avatarKey = null;
      }
    }

    // Compress the image using sharp
    const compressedImageBuffer = await sharp(avatar.buffer)
      .resize(200, 200) // Resize to 200x200 (optional, adjust size as needed)
      .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
      .toBuffer();

    const uploadResult: SendData = await this.uploadsService.uploadFile(
      avatar.originalname,
      compressedImageBuffer as Buffer,
    );

    user.avatarUrl = uploadResult.Location;
    user.avatarKey = uploadResult.Key;

    await this.userRepository.save(user);

    return user.avatarUrl;
  }

  /**
   * Deletes the avatar of a user.
   * @param username - The username of the user whose avatar is to be deleted.
   * @returns A promise that resolves to a success message or a message indicating no avatar exists.
   * @throws NotFoundException if the user is not found.
   * @throws Error if the deletion fails.
   */
  async deleteAvatar(username: string) {
    const user: User = await this.findOne(username);

    if (!user) throw new NotFoundException('User not found');

    if (user.avatarKey) {
      try {
        await this.uploadsService.deleteFile(user.avatarKey);

        user.avatarUrl = null;
        user.avatarKey = null;
        await this.userRepository.save(user);

        return 'Avatar successfully deleted';
      } catch (error) {
        throw new Error(`Failed to delete avatar: ${error.message}`);
      }
    }

    return 'User has no avatar';
  }

  /**
   * Saves the given user to the database.
   * @param user - The user object to be saved.
   * @returns A promise that resolves to the updated user.
   */
  async saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Updates the user's information.
   * @param username - The username of the user to update.
   * @param body - The new user information.
   * @returns The updated user.
   * @throws NotFoundException if the user is not found.
   */
  async updateInfo(username: string, body: UpdateUserInfoDto) {
    const user: User = await this.findOne(username);

    if (!user) throw new NotFoundException('User not found');

    user.fullName = body.fullName;
    user.location = body.location;
    user.title = body.title;

    await this.userRepository.save(user);
    return user;
  }

  /**
   * Updates the user's email address.
   * @param username - The username of the user to update.
   * @param body - The new email information.
   * @returns A message indicating the new email is set and needs confirmation.
   * @throws NotFoundException if the user is not found.
   * @throws BadRequestException if the password is invalid or the email is already in use.
   */
  async updateEmail(username: string, body: UpdateUserEmailDto) {
    const user: User | null = await this.findOne(username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!(await this.passwordService.compare(body.password, user.password))) {
      throw new BadRequestException('Invalid password');
    }

    if (await this.findOne(body.email)) {
      throw new BadRequestException('Email already in use');
    }

    // generate a random code & encrypt it
    const code: number = this.generateRandomCode();

    user.newEmail = body.email;
    user.emailUpdateCode = await this.passwordService.encode(String(code));
    user.emailUpdateCodeExpires = new Date(Date.now() + 1000 * 60 * 15); // 15 minutes
    await this.userRepository.save(user);

    // send confirmation email to user.newEmail
    await this.emailService.updateEmailConfirmationEmail(
      body.email, // send to the new email
      user.fullName,
      String(code),
    );

    return 'New email set. Please confirm the new email address.';
  }

  /**
   * Confirms the user's new email address using a confirmation code.
   * @param username - The username of the user to confirm.
   * @param code - The confirmation code.
   * @returns A message indicating the email was updated successfully.
   * @throws NotFoundException if the user is not found.
   * @throws BadRequestException if the code is expired or invalid.
   */
  async confirmEmail(username: string, code: string) {
    const user: User | null = await this.findOne(username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // check if code timed out
    if (
      user.emailUpdateCodeExpires &&
      user.emailUpdateCodeExpires < new Date()
    ) {
      throw new BadRequestException('Code expired');
    }

    // compare the code
    if (!(await this.passwordService.compare(code, user.emailUpdateCode))) {
      throw new BadRequestException('Invalid code');
    }

    user.username = user.newEmail;
    user.newEmail = null;
    user.emailUpdateCode = null;
    user.emailUpdateCodeExpires = null;
    await this.userRepository.save(user);

    return 'Email updated successfully';
  }

  /**
   * Updates the user's password.
   * @param username - The username of the user to update.
   * @param body - The new password information.
   * @returns A message indicating the password was updated successfully.
   * @throws NotFoundException if the user is not found.
   * @throws BadRequestException if the current password is invalid.
   */
  async updatePassword(username: string, body: UpdateUserPasswordDto) {
    const user: User | null = await this.findOne(username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!(await this.passwordService.compare(body.password, user.password))) {
      throw new BadRequestException('Invalid password');
    }

    user.password = await this.passwordService.encode(body.newPassword);
    await this.userRepository.save(user);

    return 'Password updated successfully';
  }

  /**
   * Gets the user's profile.
   * @param username - The username of the user to get the profile for.
   * @returns The user profile.
   */
  getProfile(username: string) {
    return this.userRepository.findOne({
      where: { profileName: username },
    });
  }

  private generateRandomCode(): number {
    // generate 5 length random number
    return Math.floor(100000 + Math.random() * 900000);
  }
}
