import { IsEmail, IsString, MinLength } from 'class-validator';

/**
 * Data transfer object for creating a new user
 */
export class CreateUserDto {
  @IsString({
    message: 'Name is required',
  })
  fullName: string;

  @IsEmail()
  username: string;

  @IsString({
    message: 'Password is required',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password: string;
}
