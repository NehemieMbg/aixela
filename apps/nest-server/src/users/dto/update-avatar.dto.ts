import { IsNotEmpty } from 'class-validator';

export class UpdateAvatarDto {
  @IsNotEmpty({ message: 'Avatar file is required' })
  file: Express.Multer.File;
}
