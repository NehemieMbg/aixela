'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Campaign } from '@/utils/types/temp';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { set } from 'zod';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import ProgressBar from '../reusables/ProgressBar';

/**
 * Campaign card component
 * @param campaign - Data of the campaign to display
 * @returns the campaign card component
 */
const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="space-y-3">
      <AspectRatio asChild ratio={1.45}>
        <Link
          href={`/campaigns/${campaign.id}`}
          className="relative overflow-hidden rounded-lg size-full group"
        >
          <Skeleton
            className={cn('size-full absolute z-[-2]', {
              hidden: isLoaded,
            })}
          />

          <Image
            src={campaign.thumbnailUrl}
            alt={campaign.title}
            height={1668}
            width={1060}
            placeholder="blur"
            loading="lazy"
            blurDataURL={campaign.thumbnailUrl}
            onLoad={() => setIsLoaded(true)}
            className={cn(
              'object-cover size-full absolute z-[-2] sm:group-hover:scale-110 transition-transform duration-300',
              {
                invisible: !isLoaded,
              }
            )}
          />

          {/* //? Shadow bg: to help reveal the text */}
          <div
            className={cn(
              'absolute z-[-1] bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-65',
              {
                invisible: !isLoaded,
              }
            )}
          />

          <div className="flex items-end w-full h-full text-white p-square ">
            <ProgressBar
              current={campaign.currentAmount}
              target={campaign.targetAmount}
              color="clear"
            />
          </div>
        </Link>
      </AspectRatio>

      <div className="w-full space-y-2">
        <div className="w-full text-sm leading-tight font-medium text-app-gray-900 space-x-1">
          <Link
            href={`/campaigns/${campaign.id}`}
            className="font-semibold inline-block"
          >
            {campaign.title}
          </Link>{' '}
          <span>· </span>
          <span className="">{campaign.subtitle}</span>
        </div>

        <div className="text-sm text-app-gray-900">
          by{' '}
          <Link href={`/${campaign.creator.username}`} className="font-medium">
            {campaign.creator.fullName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
