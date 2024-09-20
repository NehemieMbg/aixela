import { IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateUserEmailDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Password should be at least 6 characters long',
  })
  password: string;
}
