'use client';

import { getFollowersAction } from '@/utils/actions/subscribe/getSubscriptionsAction';
import { Profile } from '@/utils/types/user';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SubscribeBtn from '../buttons/SubscribeBtn';
import UserSubscribeCard from '../cards/UserSubscribeCard';
import NotificationWrapper from '../wrappers/NotificationWrapper';

/**
 * The Subscribers component
 * @param isOpen - The boolean to check if the notification is open
 * @param closeSubscription - The function to close the notification
 * @param subscribers - The array of subscribers
 * @param subscribedTo - The array of subscribed users
 * @returns The Subscribers component
 */
const Subscribers = ({
  isOpen,
  closeSubscription,
  username,
}: {
  isOpen: boolean;
  closeSubscription: () => void;
  username: string;
}) => {
  const [followers, setFollowers] = useState<Profile[]>([]);
  // get the user's subscribers

  // get the user's following
  useEffect(() => {
    const getFollowers = async () => {
      const response = await getFollowersAction(username);

      if (response.status === 'success') {
        setFollowers(response.data);
      }
    };

    getFollowers();
  }, [username]);

  return (
    <NotificationWrapper
      title="Subscribers"
      isOpen={isOpen}
      closeNotification={closeSubscription}
    >
      <div>
        {followers.map((profile: Profile) => {
          const { avatarUrl, fullName, username } = profile;
          const isSubscribed = false; // if the user is subscribed to the subscriber

          return (
            <div
              key={username}
              className="flex items-center justify-between gap-10 w-full"
            >
              <UserSubscribeCard
                showDate={false}
                profileUrl={`/${username}`}
                avatarUrl={avatarUrl}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="font-semibold">
                    <Link
                      href={`/${username}`}
                      className="text-sm whitespace-nowrap"
                    >
                      {fullName}
                    </Link>

                    <div className="text-sm whitespace-nowrap text-app-gray-highlight-3 font-medium">
                      <span>@{username}</span>
                    </div>
                  </div>

                  <SubscribeBtn
                    isSubscribe={isSubscribed}
                    isOwner={false}
                    profileUsername={username}
                    btnType="medium"
                  />
                </div>
              </UserSubscribeCard>
            </div>
          );
        })}
      </div>
    </NotificationWrapper>
  );
};
export default Subscribers;
