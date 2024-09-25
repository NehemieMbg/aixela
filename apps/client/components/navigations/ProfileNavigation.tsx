'use client';

import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Profile } from '@/utils/types/user';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * The ProfileNavigation component
 * @param profile - The profile object
 * @returns The ProfileNavigation component
 */
const ProfileNavigation = ({ profile }: { profile: Profile }) => {
  const pathname = usePathname();
  const pathArray = pathname.split('/');
  const pathArrayLength = pathArray.length;
  const lastPath = pathArray[pathArrayLength - 1];

  const isCampaign = lastPath === profile.username;
  const isContribution = lastPath === 'contribution';
  const isSaved = lastPath === 'saved';

  const connectedUser = useAppSelector((state) => state.user);
  const isOwner =
    !!connectedUser && connectedUser.username === profile.username;

  return (
    <ul className="flex items-center gap-10 text-sm">
      <li>
        <Link
          href={`/${profile.username}`}
          className={cn(
            'text-app-gray-300 font-medium hover:text-app-gray-950 transition-colors duration-200',
            {
              'text-app-gray-950 font-semibold': isCampaign,
            }
          )}
        >
          Campaigns
        </Link>
      </li>

      <li>
        <Link
          href={`/${profile.username}/contribution`}
          className={cn(
            'text-app-gray-300 font-medium hover:text-app-gray-950 transition-colors duration-200',
            {
              'text-app-gray-950 font-semibold': isContribution,
            }
          )}
        >
          Contributed
        </Link>
      </li>

      <li
        className={cn('', {
          hidden: !isOwner,
        })}
      >
        <Link
          href={`/${profile.username}/saved`}
          className={cn(
            'text-app-gray-300 font-medium hover:text-app-gray-950 transition-colors duration-200',
            {
              'text-app-gray-950 font-semibold': isSaved,
            }
          )}
        >
          Saved
        </Link>
      </li>
    </ul>
  );
};
export default ProfileNavigation;
