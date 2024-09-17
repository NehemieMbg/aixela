import { IsOptional, IsString } from 'class-validator';

export class UpdateUserInfoDto {
  @IsString()
  fullName: string;

  @IsString()
  location: string;

  @IsString()
  @IsOptional()
  title: string;
}
