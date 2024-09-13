import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

/**
 * Data Transfer Object for the current user.
 */
export class CurrentUserDto {
  @Expose()
  id: number;

  @Expose()
  fullName: string;

  // Transform the username to email
  @Expose()
  @Transform(({ obj }: { obj: User }) => obj.username)
  email: string;

  @Expose()
  avatarUrl: string;

  @Expose()
  title: string;

  @Expose()
  location: string;

  @Expose()
  isConfirmed: boolean;
}
