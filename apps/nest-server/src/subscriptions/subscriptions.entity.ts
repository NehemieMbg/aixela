import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Entity()
export class Subscriptions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user: User) => user.followers)
  follower: User;

  @ManyToOne(() => User, (user: User) => user.following)
  following: User;
}
