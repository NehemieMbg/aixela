import { User } from '@/utils/types/temp';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import { campaigns } from '@/constants';
import SubscribeBtn from '../buttons/SubscribeBtn';
import ProfileNavigation from './ProfileNavigation';

const UserProfileNavigation = ({ user }: { user: User }) => {
  const userCampaigns = campaigns.filter(
    (campaign) => campaign.creator.username === user.username
  );

  return (
    <div className="p-side py-10 md:py-[60px] space-y-[60px]">
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
              <div className="flex items-center gap-1 text-sm font-medium">
                <span>@{user.username}</span>
                <span> • </span>
                <span>
                  {user.subscribers?.length} subscriber
                  {user?.subscribers!.length > 1 ? 's' : ''}
                </span>
                <span> • </span>
                <span>
                  {userCampaigns.length} campaign
                  {userCampaigns.length > 1 ? 's' : ''}
                </span>
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
          className="max-md:hidden"
        />
        <SubscribeBtn
          btnType="large"
          isSubscribe={false}
          isOwner={false}
          className="md:hidden"
        />
      </div>

      <ProfileNavigation user={user} />
    </div>
  );
};
export default UserProfileNavigation;
