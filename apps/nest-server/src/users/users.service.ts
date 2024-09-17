import { Injectable, NotFoundException } from '@nestjs/common';
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
import SendData = ManagedUpload.SendData;
import * as sharp from 'sharp'; // Correct ES module import

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordService: PasswordService,
    private readonly uploadsService: UploadsService,
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

    const user: User = await this.userRepository.create(
      new User(
        body.fullName,
        body.username,
        await this.passwordService.encode(body.password),
      ),
    );
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

    const user: User = await this.userRepository.create(
      new User(body.firstName, body.lastName, body.email),
    );
    user.isConfirmed = true;

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

  async updateInfo(username: string, body: UpdateUserInfoDto) {
    const user: User = await this.findOne(username);

    if (!user) throw new NotFoundException('User not found');

    user.fullName = body.fullName;
    user.location = body.location;
    user.title = body.title;

    await this.userRepository.save(user);
    return user;
  }
}
