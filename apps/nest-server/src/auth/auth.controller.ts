import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Serialize } from '../users/interceptors/serialize.interceptor';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';
import { RequestPasswordResetDto } from './dto/request-password-reset.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as process from 'node:process';
import { ConfirmEmailDto } from './dto/confirm-email.dto';

// import { Response } from 'express'; // Ensure this import is present

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user.
   * @param body - The user data for registration.
   * @returns A promise that resolves to the authenticated user data transfer object.
   */
  @Post('/sign-up')
  @Serialize(AuthDto)
  async register(@Body() body: CreateUserDto): Promise<AuthDto> {
    return this.authService.signup(body);
  }

  /**
   * Login a user.
   * @param request - The request object containing user information.
   * @returns A promise that resolves to the authenticated user data transfer object.
   */
  @Post('/sign-in')
  @UseGuards(LocalAuthGuard)
  async login(@Request() request): Promise<AuthDto> {
    return this.authService.signIn(request.user);
  }

  /**
   * Confirm the user's email address.
   * @param query - The query object containing the email confirmation token.
   * @param response - The response object used to redirect the user.
   * @returns Redirects the user to the frontend URL with the confirmation result.
   */
  @Get('/confirm-email')
  async confirmEmail(@Query() query: ConfirmEmailDto, @Response() response) {
    const isConfirmed: boolean = await this.authService.confirmEmail(
      query.token,
    );

    response.redirect(
      `${process.env.FRONTEND_URL}/confirm-account?succeeded=${isConfirmed}`,
    );
  }

  /**
   * Get the email confirmation token for the current user.
   * @param request - The request object containing user information.
   * @returns The email confirmation token.
   */
  @Get('/confirm-email-token')
  @UseGuards(JwtAuthGuard)
  getConfirmToken(@Request() request) {
    return this.authService.getConfirmToken(request.user.username);
  }

  /**
   * Get the current user profile.
   * @param request - The request object containing user information.
   * @returns The current authenticated user.
   */
  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() request) {
    return request.user;
  }

  /**
   * Initiates the Google OAuth2 login flow
   */
  @Get('/google/sign-in')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {}

  /**
   * Callback for the Google OAuth2 login flow.
   * @param request - The request object containing user information.
   * @returns The authenticated user data.
   */
  @Get('/google-redirect')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Request() request, @Response() response) {
    const signedInObject = await this.authService.googleSignIn(request);

    response.redirect(
      `${process.env.FRONTEND_URL}/auth/callback?token=${signedInObject.accessToken}`,
    );
  }

  /**
   * Request a password reset.
   * @param body - The request body containing the email.
   * @returns A promise that resolves to a message indicating the result of the request.
   */
  @Post('/request-password-reset')
  async requestPasswordReset(
    @Body() body: RequestPasswordResetDto,
  ): Promise<{ message: string }> {
    return await this.authService.requestPasswordReset(body.email);
  }

  /**
   * Reset the user's password.
   * @param request - The request object containing user information.
   * @param body - The request body containing the new password and reset token.
   * @returns A promise that resolves to a message indicating the result of the password reset.
   */
  @Post('/reset-password')
  @UseGuards(JwtAuthGuard)
  async resetPassword(
    @Request() request,
    @Body() body: ResetPasswordDto,
  ): Promise<{ message: string }> {
    return await this.authService.resetPassword(
      request.user.username,
      body.newPassword,
      body.resetToken,
    );
  }
}
