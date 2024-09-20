import { IsString, MinLength } from 'class-validator';

export class UpdateUserPasswordDto {
  @IsString()
  password: string;

  @IsString()
  @MinLength(6, {
    message: 'Password should be at least 6 characters long',
  })
  newPassword: string;
}
