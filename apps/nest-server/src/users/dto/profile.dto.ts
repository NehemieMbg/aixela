import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

/**
 * Data Transfer Object for the user profile.
 */
export class ProfileDto {
  @Expose()
  id: number;

  @Expose()
  fullName: string;

  @Expose()
  @Transform(({ obj }: { obj: User }) => obj.profileName)
  username: string;

  @Expose()
  avatarUrl: string;

  @Expose()
  title: string;

  @Expose()
  location: string;
}
