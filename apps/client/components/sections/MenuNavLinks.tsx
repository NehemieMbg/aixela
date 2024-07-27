'use client';

import { openNotification } from '@/lib/features/Navigation/NotificationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

/**
 * Menu Nav Links component
 * @param closeMenu -  the function to close the menu
 * @returns the menu nav links component
 */
const MenuNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const hasNotification = true;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isUserLoggedIn = !!user;

  const handleSignOut = () => {
    closeMenu();
  };

  return (
    <>
      <div className="space-y-1">
        <Link
          href={'/'}
          onClick={closeMenu}
          className="transparent-btn block w-max text-sm font-medium"
        >
          Campaigns
        </Link>

        <Link
          href={`/${user.username}/contribution`}
          onClick={closeMenu}
          className={cn('transparent-btn block w-max text-sm font-medium', {
            hidden: !isUserLoggedIn,
          })}
        >
          Saved & Contributed
        </Link>

        <Link
          href={'/account'}
          onClick={closeMenu}
          className={cn('transparent-btn block w-max text-sm font-medium', {
            hidden: !isUserLoggedIn,
          })}
        >
          Account
        </Link>

        <Link
          href={'/dashboard'}
          onClick={closeMenu}
          className={cn('transparent-btn block w-max text-sm font-medium', {
            hidden: !isUserLoggedIn,
          })}
        >
          Dashboard
        </Link>

        <Button
          onClick={() => dispatch(openNotification())}
          className={cn(
            'relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md',
            {
              hidden: !isUserLoggedIn,
            }
          )}
        >
          <span>Notification</span>
          <div
            className={cn(
              'absolute top-2 right-2 bg-red-500 size-1.5 rounded-full',
              {
                hidden: !hasNotification,
              }
            )}
          ></div>
          <div
            className={cn('bg-red-500 size-1.5 rounded-full invisible', {
              hidden: !hasNotification,
            })}
          ></div>
        </Button>

        <Button
          onClick={handleSignOut}
          className={cn(
            'block relative h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md',
            {
              hidden: !isUserLoggedIn,
            }
          )}
        >
          <span>Sign out</span>
        </Button>

        <Link
          href={'/sign-in'}
          onClick={closeMenu}
          className={cn('transparent-btn block w-max text-sm font-medium', {
            hidden: isUserLoggedIn,
          })}
        >
          Sign in
        </Link>

        <Link
          href={'/sign-up'}
          onClick={closeMenu}
          className={cn('transparent-btn block w-max text-sm font-medium', {
            hidden: isUserLoggedIn,
          })}
        >
          Sign up
        </Link>
      </div>
    </>
  );
};
export default MenuNavLinks;
