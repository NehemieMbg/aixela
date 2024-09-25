'use client';

import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Profile } from '@/utils/types/user';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import SubscribeBtn from '../buttons/SubscribeBtn';
import SubscribedTo from '../sections/SubscribedTo';
import Subscribers from '../sections/Subscribers';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import ProfileNavigation from './ProfileNavigation';

/**
 * The UserProfileNavigation component
 * @param user - The user object
 * @returns
 */
const UserProfileNavigation = ({ profile }: { profile: Profile }) => {
  const params = useParams() as { username: string };

  const user = useAppSelector((state) => state.user);
  const isOwner = user?.username === profile.username;

  const [isSubscribersOpen, setIsSubscribersOpen] = useState(false);
  const [isSubscribedToOpen, setIsSubscribedToOpen] = useState(false);

  const userCampaigns = [];
  // const userCampaigns = campaigns.filter(
  //   (campaign) => campaign.creator.username === profile.username
  // );

  return (
    <>
      <div className="p-side pt-10 pb-6 md:pt-[60px] space-y-8 md:space-y-[60px]">
        <div className="flex max-md:flex-col justify-between gap-10">
          <div className="flex max-md:flex-col md:items-center gap-7">
            <Avatar className="size-[80px] md:size-[120px]">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>
                <Skeleton />
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <p className="text-2xl font-medium">{profile.fullName}</p>

              <div className="space-y-1">
                <div className="flex max-md:flex-col md:items-center gap-1 text-sm font-medium">
                  <span>@{profile.username}</span>

                  <span className="max-md:hidden"> • </span>

                  <div className="space-x-1">
                    <span
                      onClick={() => setIsSubscribersOpen(true)}
                      className="cursor-pointer"
                    >
                      {profile.followers} subscriber
                      {profile.followers > 1 ? 's' : ''}
                    </span>

                    <span> • </span>

                    <span
                      onClick={() => setIsSubscribedToOpen(true)}
                      className="cursor-pointer"
                    >
                      {profile.following} Subscribed
                    </span>

                    <span> • </span>

                    <Link href={`/${profile.username}`}>
                      {userCampaigns.length} campaign
                      {userCampaigns.length > 1 ? 's' : ''}
                    </Link>
                  </div>
                </div>

                <div className="text-sm text-app-gray-highlight-3">
                  {profile.title}
                </div>
                <div className="text-sm">{profile.location}</div>
              </div>
            </div>
          </div>

          <SubscribeBtn
            btnType="medium"
            isSubscribe={false}
            isOwner={false}
            profileUsername={params.username}
            className={cn('max-md:hidden', {
              hidden: isOwner,
            })}
          />

          <SubscribeBtn
            btnType="large"
            isSubscribe={false}
            isOwner={false}
            profileUsername={params.username}
            className={cn('md:hidden', {
              hidden: isOwner,
            })}
          />
        </div>

        <ProfileNavigation profile={profile} />
      </div>

      <Subscribers
        isOpen={isSubscribersOpen}
        username={params.username}
        closeSubscription={() => setIsSubscribersOpen(false)}
      />

      <SubscribedTo
        isOpen={isSubscribedToOpen}
        username={params.username}
        closeSubscription={() => setIsSubscribedToOpen(false)}
      />
    </>
  );
};
export default UserProfileNavigation;
