import { Campaign } from '@/utils/types/temp';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import SubscribeBtn from '../buttons/SubscribeBtn';
import BookmarkBtn from '../buttons/BookmarkBtn';
import ProgressBar from '../reusables/ProgressBar';
import { toReadableNumber } from '@/utils/functions';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import SubmitPrimary from '../buttons/SubmitPrimary';

const CampaignInfo = ({ campaign }: { campaign: Campaign }) => {
  const creator = campaign.creator;

  return (
    <div className="h-full xl:max-w-[518px] w-full p-side py-10 max-xl:pb-[160px] xl:bg-app-gray-100 space-y-16">
      {/* //? User Info */}
      <div className="space-y-2">
        <span className="text-app-gray-300 text-xs font-medium">Creator</span>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={creator.avatarUrl} className="size-12" />
              <AvatarFallback>
                <Skeleton />
              </AvatarFallback>
            </Avatar>

            <p className="size-max font-medium">{creator.fullName}</p>
          </div>

          <SubscribeBtn isSubscribe={false} isOwner={false} btnType="medium" />
        </div>
      </div>

      {/* //? Campaign Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="font-semibold text-xl">{campaign.title}</h3>
          {/* <p>{campaign.subtitle}</p> */}

          <BookmarkBtn />
        </div>

        <div className="space-y-2">
          <ProgressBar
            color="primary"
            showProgress={false}
            current={campaign.currentAmount}
            target={campaign.targetAmount}
          />

          <div className="font-medium text-sm">
            ${toReadableNumber(campaign.currentAmount)} raised from $
            {toReadableNumber(campaign.targetAmount)}
          </div>
        </div>
      </div>

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

              <SubscribeBtn
                isSubscribe={isSubscribed}
                isOwner={false}
                btnType="small"
              />
            </div>
          );
        })}

        <div className="flex justify-end w-full">
          <button className="ml-auto text-sm text-app-gray-300 font-medium text-right hover:underline">
            View all
          </button>
        </div>
      </div>

      <SubmitPrimary asChild>
        <Link href="/contribute">Contribute</Link>
      </SubmitPrimary>
    </div>
  );
};
export default CampaignInfo;
