import { cn } from '@/lib/utils';
import { toReadableNumber } from '@/utils/functions';
import { Campaign } from '@/utils/types/temp';
import Link from 'next/link';
import SubmitPrimary from '../buttons/SubmitPrimary';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

/**
 * Campaign Info section
 * @param campaign - The campaign object
 * @returns The campaign info section
 */
const CampaignInfo = ({ campaign }: { campaign: Campaign }) => {
  return (
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

        {campaign.contributors.map((contributor) => {
          const avatarUrl = contributor.user.avatarUrl;
          const fullName = contributor.user.fullName;
          const username = contributor.user.username;
          const contribution = contributor.amount;
          const isSubscribed = false; //* not same variable name

          return (
            <div
              key={username}
              className="flex items-center justify-between gap-10"
            >
              <Link href={`/${username}`} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={avatarUrl} className="size-12" />
                  <AvatarFallback>
                    <Skeleton />
                  </AvatarFallback>
                </Avatar>

                <div className="text-sm font-medium whitespace-nowrap">
                  <span className="font-semibold">{fullName}</span> {' · '} $
                  {toReadableNumber(contribution)}
                </div>
              </Link>
            </div>
          );
        })}

        <div className="flex items-center justify-center pt-6">
          <button className="text-xs text-app-gray-300 font-medium hover:underline">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};
export default CampaignInfo;
