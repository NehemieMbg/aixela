import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Subscriptions } from '../../subscriptions/subscriptions.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  profileName: string;

  @Column({ nullable: true })
  newEmail: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  avatarKey: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true }) // for oauth
  password: string;

  @OneToMany(
    () => Subscriptions,
    (subscribers: Subscriptions) => subscribers.follower,
  )
  followers: Subscriptions[];

  @OneToMany(
    () => Subscriptions,
    (subscribers: Subscriptions) => subscribers.following,
  )
  following: Subscriptions[];

  @Column({ nullable: true })
  emailUpdateCode?: string;

  @Column({ nullable: true })
  emailUpdateCodeExpires?: Date;

  @Column({ nullable: true })
  resetPasswordToken?: string;

  @Column({ nullable: true })
  resetPasswordExpires?: Date;

  @Column({ default: false })
  isConfirmed?: boolean;

  constructor(fullName: string, username: string, password?: string) {
    this.fullName = fullName;
    this.username = username;
    this.password = password;
  }
}
