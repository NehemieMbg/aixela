import { useAppSelector } from '@/lib/hooks';
import { AvatarFallback } from '@radix-ui/react-avatar';
import LatestCampaign from '../sections/LatestCampaign';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

/**
 * User Menu Info component
 * @param closeMenu - the function to close the menu
 * @returns the user menu info component
 */
const UserMenuInfo = ({ closeMenu }: { closeMenu: () => void }) => {
  const user = useAppSelector((state) => state.user);
  const isUserLoggedIn = !!user;

  return (
    <div className={cn('space-y-10 lg:space-y-20 col-start-1 col-end-3', {})}>
      <div
        className={cn('space-y-12', {
          hidden: !isUserLoggedIn,
        })}
      >
        <Link
          href={`/${user.username}`}
          className="flex items-center gap-3 w-max"
        >
          <Avatar className="size-12">
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-none">
              {user.fullName}
            </h3>
            <p className="text-sm text-app-gray-highlight-3 leading-none">
              {user.email}
            </p>
          </div>
        </Link>

        {/* //? Latest Campaign */}
        <LatestCampaign />
      </div>

      <Button
        asChild
        className="h-10 px-4 text-white bg-app-blue-primary hover:bg-app-blue-secondary font-light max-lg:hidden"
      >
        <Link
          href={'/campaigns/new'}
          className={cn('', {
            hidden: !isUserLoggedIn,
          })}
        >
          Create Campaign
        </Link>
      </Button>

      <Link
        href={'/campaigns/new'}
        onClick={closeMenu}
        className={cn(
          'transparent-btn block w-max text-sm font-medium lg:hidden',
          {
            hidden: !isUserLoggedIn,
          }
        )}
      >
        Create
      </Link>
    </div>
  );
};
export default UserMenuInfo;
