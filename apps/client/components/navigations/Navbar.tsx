'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import Aixela from '../logo/Aixela';
import Backdrop from '../reusables/Backdrop';
import { Button } from '../ui/button';
import Menu from './Menu';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import { openNotification } from '@/lib/features/Navigation/NotificationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

/**
 * Navbar component
 * @returns the navbar component
 */
const Navbar = () => {
  const hasNotification = !false;

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isUserLoggedIn = !!user;

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useClickOutside(navContainerRef, () => {
    setIsMenuOpen(false);
  });

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div ref={navContainerRef} className="sticky top-0 z-[100] min-h-16">
        <nav
          className={cn(
            'absolute z-[110] w-full navbar-grid p-side py-3.5 items-center bg-white transition-colors duration-200',
            {
              'backdrop-blur-sm bg-opacity-95': !isMenuOpen,
            }
          )}
        >
          <div>
            <Aixela className="text-base font-medium uppercase" />
          </div>

          <div className="justify-self-center w-full">
            {/* <SearchBar /> */}
          </div>

          <div className="justify-self-end lg:space-x-6 text-sm font-medium">
            <Button className="relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md">
              <span>Search</span>
            </Button>

            <Link href={'/'} className="transparent-btn max-xl:hidden">
              Campaigns
            </Link>

            <Button
              onClick={() => dispatch(openNotification())}
              className="relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md"
            >
              <span>Notifications</span>
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
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md"
            >
              <span>{!isMenuOpen ? 'Menu' : 'Close'}</span>
            </Button>
          </div>
        </nav>

        <Menu isOpen={isMenuOpen} closeMenu={handleCloseMenu} />
      </div>

      <Backdrop isActive={isMenuOpen} />
    </>
  );
};

export default Navbar;
