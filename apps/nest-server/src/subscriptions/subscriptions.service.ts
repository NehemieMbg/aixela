import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Subscriptions } from './subscriptions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscriptions)
    private readonly subscriptionRepository: Repository<Subscriptions>,
    private readonly usersService: UsersService,
  ) {}

  async getFollowers(profileName: string) {
    const followers = await this.subscriptionRepository.find({
      where: { following: { profileName } },
      relations: ['follower'],
      select: {
        follower: {
          id: true,
          fullName: true,
          username: true,
          profileName: true,
          avatarUrl: true,
          title: true,
          location: true,
        },
      },
    });

    return followers.map((follower) => follower.follower);
  }

  async getFollowing(profileName: string) {
    const followings = await this.subscriptionRepository.find({
      where: { follower: { profileName } },
      relations: ['following'],
      select: {
        following: {
          id: true,
          fullName: true,
          username: true,
          profileName: true,
          avatarUrl: true,
          title: true,
          location: true,
        },
      },
    });

    return followings.map((following) => following.following);
  }

  async getSubscriptions(profileName: string) {
    const profile: User =
      await this.usersService.findOneByProfileName(profileName);

    if (!profile) {
      throw new BadRequestException('User not found');
    }

    const following = await this.getFollowing(profileName);

    const followers = await this.getFollowers(profileName);

    return { followers, following };
  }

  async subscribe(userId: number, profileName: string) {
    const user: User =
      await this.usersService.findOneByProfileName(profileName);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const existingSubscription: Subscriptions =
      await this.subscriptionRepository.findOne({
        where: {
          follower: { id: userId },
          following: { id: user.id },
        },
      });

    if (!existingSubscription) {
      const subscription = this.subscriptionRepository.create({
        follower: { id: userId } as User,
        following: user,
      });

      await this.subscriptionRepository.save(subscription);
      return 'Subscription successful';
    } else {
      await this.subscriptionRepository.remove(existingSubscription);
      return 'un-subscription successful';
    }
  }

  async getFollowersAsAuth(username: string, profileName: string) {
    // const user: User | null = await this.usersService.findOne(username);
    //
    // // if (user) {
    // //   const followers: Subscriptions[] = await this.getFollowers(profileName);
    // //
    // //   return this.getCommonFollowers(user.username, followers);
    // // }

    return this.getFollowers(profileName);
  }

  private async getCommonFollowers(
    userUsername: string,
    followers: Subscriptions[],
  ) {
    const userFollowing = await this.getFollowing(userUsername);

    return followers.map((follower: Subscriptions) => {
      return {
        ...follower,
        isFollowing: false,
      };
    });
  }
}
