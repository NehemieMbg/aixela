import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../users/password.service';
import { AuthDto } from './dto/auth.dto';
import { User } from '../users/entities/user.entity';
import { EmailService } from '../email/email.service';
import * as process from 'node:process';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
    private readonly passwordService: PasswordService,
  ) {}

  /**
   * Registers a new user.
   * @param body - The user data.
   * @returns A promise that resolves to the user info and access token.
   * @throws BadRequestException if the user already exists.
   */
  async signup(body: CreateUserDto): Promise<AuthDto> {
    const user: User | null = await this.userService.createUser(body);

    if (!user) {
      throw new BadRequestException('User already exists');
    }

    const confirmationToken: string = await this.generateToken(
      user.id,
      user.username,
      '1h',
    );

    // send email to user with token to confirm email, expires in 1 hour
    await this.emailService.signUpEmail(
      body.username,
      body.fullName,
      `${process.env.SERVER_URL}/auth/confirm-email?token=${confirmationToken}`,
    );

    const accessToken: string = await this.generateToken(
      user.id,
      user.username,
    );

    return {
      id: user.id,
      username: user.username,
      accessToken,
    };
  }

  /**
   * Sends a confirmation email to the user.
   * @param username - The username of the user.
   * @returns A promise that resolves to a message indicating the status of the request.
   * @throws BadRequestException if the user does not exist.
   * @throws BadRequestException if the user's email is already confirmed.
   * @returns A promise that resolves to a message indicating the status of the request.
   */
  async getConfirmToken(username: string): Promise<string> {
    const user: User | null = await this.userService.findOne(username);

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    if (user.isConfirmed) {
      throw new BadRequestException('Email is already confirmed');
    }

    const confirmationToken: string = await this.generateToken(
      user.id,
      user.username,
      '1h',
    );

    // send email to user with token to confirm email, expires in 1 hour
    await this.emailService.accountConfirmationEmail(
      user.username,
      user.fullName,
      `${process.env.SERVER_URL}/auth/confirm-email?token=${confirmationToken}`,
    );

    return 'Email confirmation token sent';
  }

  /**
   * Signs in a user.
   * @param user - The user information.
   * @returns A promise that resolves to the user info and access token.
   */
  async signIn(user: User): Promise<AuthDto> {
    const accessToken: string = await this.generateToken(
      user.id,
      user.username,
    );

    return {
      id: user.id,
      username: user.username,
      accessToken,
    };
  }

  /**
   * Confirms a user's email address.
   * @param token - The confirmation token.
   * @returns A promise that resolves to true if the email is confirmed.
   */
  async confirmEmail(token: string): Promise<boolean> {
    if (!token) {
      throw new BadRequestException('Invalid token');
    }

    let user: User | null;

    try {
      const { username } = await this.jwtService.verifyAsync(token);

      console.log(username);

      user = await this.userService.findOne(username);

      user.isConfirmed = true;
      await this.userService.saveUser(user);

      return user.isConfirmed;
    } catch (error) {
      return false;
    }
  }

  /**
   * Validates a user attempting to sign in.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A promise that resolves to the user object if validation is successful, or null if not.
   */
  async validateUser(username: string, password: string): Promise<User | null> {
    const user: User | null = await this.userService.findOne(username);

    if (!user || !user.password) return null;

    if (user && (await this.passwordService.compare(password, user.password))) {
      return user;
    }

    return null;
  }

  /**
   * Sign in a user using Google OAuth and create a new user if they don't exist.
   * @param request - The request object containing user information.
   * @returns A promise that resolves to the user info and access token.
   */
  async googleSignIn(request): Promise<any> {
    if (!request.user) {
      return null;
    }

    const { email: username } = request.user;
    let user: User | null = await this.userService.findOne(username);

    if (!user) {
      user = await this.userService.createUserOauth(request.user);
    }

    return this.signIn(user);
  }

  /**
   * Sends a password reset email to the user.
   * @param email - The email address of the user requesting the password reset.
   * @returns A promise that resolves to a message indicating the status of the request.
   * @throws BadRequestException if the user does not exist.
   */
  async requestPasswordReset(email: string): Promise<{ message: string }> {
    const user: User | null = await this.userService.findOne(email);

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const resetToken: string = await this.generateToken(
      user.id,
      user.username,
      '1h',
    );

    user.resetPasswordToken = await this.passwordService.encode(resetToken);
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour from now
    await this.userService.saveUser(user);

    const resetUrl: string = `${process.env.FRONTEND_URL}/password/reset?token=${resetToken}`;

    await this.emailService.resetPasswordEmail(email, resetUrl);

    return { message: 'Password reset request has been accepted' };
  }

  /**
   * Reset a user's password.
   * @param username - The username of the user.
   * @param newPassword - The new password.
   * @param resetToken - The reset token.
   * @throws BadRequestException if the reset token is invalid or expired.
   * @returns A promise that resolves to a message indicating whether the password was reset successfully.
   */
  async resetPassword(
    username: string,
    newPassword: string,
    resetToken: string,
  ): Promise<{ message: string }> {
    const user: User | null = await this.userService.findOne(username);

    // if no token created in db
    if (!user.resetPasswordExpires) {
      throw new BadRequestException('Invalid reset token');
    }

    // check if too late to initiate password reset
    if (user.resetPasswordExpires < new Date()) {
      throw new BadRequestException('Reset token has expired');
    }

    // compare the current token with the on stored in db
    if (
      !(await this.passwordService.compare(resetToken, user.resetPasswordToken))
    ) {
      throw new BadRequestException('Invalid reset token');
    }

    user.password = await this.passwordService.encode(newPassword);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await this.userService.saveUser(user);

    return { message: 'Password successfully updated' };
  }

  async getCurrentUser(username: string) {
    return await this.userService.findOne(username);
  }

  /**
   * Generate a JWT token.
   * @param id - The user id.
   * @param username - The username of the user.
   * @param expireIn - Optional expiration time for the token.
   * @returns A promise that resolves to the generated token.
   */
  async generateToken(
    id: number,
    username: string,
    expireIn?: string,
  ): Promise<string> {
    const payload = { sub: id, username: username };
    const options = { expiresIn: expireIn || '1d' };
    return await this.jwtService.signAsync(payload, options);
  }
}
