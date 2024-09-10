import { Expose } from 'class-transformer';

/**
 * User Data Transfer Object
 */
export class UserDto {
  @Expose()
  id: number;

  @Expose()
  fullName: string;

  @Expose()
  username: string;
}
