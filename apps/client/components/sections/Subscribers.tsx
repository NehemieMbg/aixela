'use client';

import Link from 'next/link';
import SubscribeBtn from '../buttons/SubscribeBtn';
import UserSubscribeCard from '../cards/UserSubscribeCard';
import NotificationWrapper from '../wrappers/NotificationWrapper';
import { Subscriber } from '@/utils/types/temp';

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
  subscribers,
  subscribedTo,
}: {
  isOpen: boolean;
  closeSubscription: () => void;
  subscribers: Subscriber[];
  subscribedTo: Subscriber[];
}) => {
  return (
    <NotificationWrapper
      title="Subscribers"
      isOpen={isOpen}
      closeNotification={closeSubscription}
    >
      <div>
        {subscribers.map((subscriber) => {
          const { avatarUrl, fullName, username } = subscriber.user;
          const isSubscribed = !!subscribedTo.find(
            (sub) => sub.user.username === username
          ); // Check if the user is subscribed to the subscriber

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
                      <span>@{subscriber.user.username}</span>
                    </div>
                  </div>

                  <SubscribeBtn
                    isSubscribe={isSubscribed}
                    isOwner={false}
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
