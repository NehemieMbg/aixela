'use client';

import { cn } from '@/lib/utils';
import { toReadableNumber } from '@/utils/functions';
import { Campaign } from '@/utils/types/temp';
import Link from 'next/link';
import { useState } from 'react';
import SubmitPrimary from '../buttons/SubmitPrimary';
import SubscribeBtn from '../buttons/SubscribeBtn';
import BackersCard from '../cards/BackersCard';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import NotificationWrapper from '../wrappers/NotificationWrapper';

/**
 * Campaign Info section
 * @param campaign - The campaign object
 * @returns The campaign info section
 */
const CampaignInfo = ({ campaign }: { campaign: Campaign }) => {
  const [isBackersOpen, setIsBackersOpen] = useState(false);

  return (
    <>
      <div className="relative xl:w-[412px] p-side py-10 space-y-10">
        <SubmitPrimary asChild className="h-11 rounded-md font-normal">
          <Link href="/contribute">Contribute</Link>
        </SubmitPrimary>

        {/* //? Latest Backers */}
        <div className="space-y-5">
          <span
            className={cn('text-app-gray-300 text-xs font-medium', {
              hidden: campaign.contributors.length === 0,
            })}
          >
            Latest Backers
          </span>

          {campaign.contributors
            .slice(0, 5) // Get the top 5 contributors
            .map((contributor) => {
              const { avatarUrl, fullName, username } = contributor.user;
              const contribution = contributor.amount;
              const isSubscribed = false; // Adjust as needed

              return (
                <div
                  key={username}
                  className="flex items-center justify-between gap-10"
                >
                  <Link
                    href={`/${username}`}
                    className="flex items-center gap-4"
                  >
                    <Avatar>
                      <AvatarImage src={avatarUrl} className="size-12" />
                      <AvatarFallback>
                        <Skeleton />
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-sm font-medium whitespace-nowrap">
                      <span className="font-semibold">{fullName}</span> {' · '}{' '}
                      ${toReadableNumber(contribution)}
                    </div>
                  </Link>
                </div>
              );
            })}

          <div className="flex items-center justify-center pt-6">
            <button
              onClick={() => setIsBackersOpen(true)}
              className="text-xs text-app-gray-300 font-medium hover:underline"
            >
              View all
            </button>
          </div>
        </div>
      </div>

      <NotificationWrapper
        isOpen={isBackersOpen}
        closeNotification={() => setIsBackersOpen(false)}
        title="Backers"
      >
        {campaign.contributors
          .slice(0, 5) // Get the top 5 contributors
          .map((contributor) => {
            const { avatarUrl, fullName, username } = contributor.user;
            const contribution = contributor.amount;
            const isSubscribed = false; // Adjust as needed

            return (
              <div
                key={username}
                className="flex items-center justify-between gap-10 w-full"
              >
                <BackersCard
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
                        <span>Contributed $</span>
                        {toReadableNumber(contribution)}
                      </div>
                    </div>

                    <SubscribeBtn
                      isSubscribe={isSubscribed}
                      isOwner={false}
                      btnType="medium"
                    />
                  </div>
                </BackersCard>
              </div>
            );
          })}
      </NotificationWrapper>
    </>
  );
};
export default CampaignInfo;
