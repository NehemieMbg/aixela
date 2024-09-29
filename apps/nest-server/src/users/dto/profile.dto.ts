import { Expose, Transform } from 'class-transformer';
import { User } from '../entities/user.entity';

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
  @Transform(({ obj }: { obj: User }) =>
    obj.followers ? obj.followers.length : 0,
  )
  followers: number;

  @Expose()
  @Transform(({ obj }: { obj: User }) =>
    obj.following ? obj.following.length : 0,
  )
  following: number;

  @Expose()
  title: string;

  @Expose()
  location: string;
}
