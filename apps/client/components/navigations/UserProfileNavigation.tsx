'use client';

import { campaigns } from '@/constants';
import { User } from '@/utils/types/temp';
import Link from 'next/link';
import { useState } from 'react';
import SubscribeBtn from '../buttons/SubscribeBtn';
import SubscribedTo from '../sections/SubscribedTo';
import Subscribers from '../sections/Subscribers';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import ProfileNavigation from './ProfileNavigation';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks';

/**
 * The UserProfileNavigation component
 * @param user - The user object
 * @returns
 */
const UserProfileNavigation = ({ user }: { user: User }) => {
  const connectedUser = useAppSelector((state) => state.user);
  const isOwner = connectedUser?.username === user.username;

  const [isSubscribersOpen, setIsSubscribersOpen] = useState(false);
  const [isSubscribedToOpen, setIsSubscribedToOpen] = useState(false);

  const userCampaigns = campaigns.filter(
    (campaign) => campaign.creator.username === user.username
  );

  return (
    <>
      <div className="p-side pt-10 pb-6 md:pt-[60px] space-y-8 md:space-y-[60px]">
        <div className="flex max-md:flex-col justify-between gap-10">
          <div className="flex max-md:flex-col md:items-center gap-7">
            <Avatar className="size-[80px] md:size-[120px]">
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback>
                <Skeleton />
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <p className="text-2xl font-medium">{user.fullName}</p>

              <div className="space-y-1">
                <div className="flex max-md:flex-col md:items-center gap-1 text-sm font-medium">
                  <span>@{user.username}</span>

                  <span className="max-md:hidden"> • </span>

                  <div className="space-x-1">
                    <span
                      onClick={() => setIsSubscribersOpen(true)}
                      className="cursor-pointer"
                    >
                      {user.subscribers?.length} subscriber
                      {user?.subscribers!.length > 1 ? 's' : ''}
                    </span>

                    <span> • </span>

                    <span
                      onClick={() => setIsSubscribedToOpen(true)}
                      className="cursor-pointer"
                    >
                      {user.subscribedTo?.length} Subscribed
                    </span>

                    <span> • </span>

                    <Link href={`/${user.username}`}>
                      {userCampaigns.length} campaign
                      {userCampaigns.length > 1 ? 's' : ''}
                    </Link>
                  </div>
                </div>

                <div className="text-sm text-app-gray-highlight-3">
                  {user.title}
                </div>
                <div className="text-sm">{user.location}</div>
              </div>
            </div>
          </div>

          <SubscribeBtn
            btnType="medium"
            isSubscribe={false}
            isOwner={false}
            className={cn('max-md:hidden', {
              hidden: isOwner,
            })}
          />

          <SubscribeBtn
            btnType="large"
            isSubscribe={false}
            isOwner={false}
            className={cn('md:hidden', {
              hidden: isOwner,
            })}
          />
        </div>

        <ProfileNavigation user={user} />
      </div>

      <Subscribers
        isOpen={isSubscribersOpen}
        subscribers={user.subscribers!}
        subscribedTo={user.subscribedTo!}
        closeSubscription={() => setIsSubscribersOpen(false)}
      />

      <SubscribedTo
        isOpen={isSubscribedToOpen}
        subscribers={user.subscribedTo!}
        subscribedTo={user.subscribers!}
        closeSubscription={() => setIsSubscribedToOpen(false)}
      />
    </>
  );
};
export default UserProfileNavigation;
