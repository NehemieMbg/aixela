'use client';

import useClickOutside from '@/hooks/useClickOutside';
import { openNotification } from '@/lib/features/Navigation/NotificationSlice';
import { openSearch } from '@/lib/features/search/SearchSlice';
import { useAppDispatch } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SearchBtn from '../buttons/SearchBtn';
import Aixela from '../logo/Aixela';
import Backdrop from '../reusables/Backdrop';
import { Button } from '../ui/button';
import Menu from './Menu';

/**
 * Navbar component
 * @returns the navbar component
 */
const Navbar = () => {
  const hasNotification = !false;

  const pathname = usePathname();
  const isCampaignPage = pathname.includes('/campaigns');
  const isContributePage = pathname.includes('/contribute');
  const isDashboardPage = pathname.includes('/dashboard');

  const dispatch = useAppDispatch();

  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is past 100vh
      setIsScrolledPast(window.scrollY > window.innerHeight);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {/* //? Gradient Linear Shadow */}
      <div
        className={cn('absolute z-[99] top-0 right-0 left-0 h-[23vh]', {
          hidden:
            isMenuOpen || !isCampaignPage || isScrolledPast || isContributePage,
        })}
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0))',
        }}
      />

      <div
        ref={navContainerRef}
        className={cn('top-0 z-[100] min-h-[60px] w-full', {
          sticky: !isCampaignPage,
          absolute: isCampaignPage,
        })}
      >
        <nav
          className={cn(
            'absolute z-[110] w-full navbar-grid p-side py-3.5 items-center transition-colors duration-200',
            {
              'backdrop-blur-sm bg-opacity-95': !isMenuOpen,
              'text-white bg-transparent':
                isCampaignPage && !isMenuOpen && !isContributePage,

              'bg-white': !isCampaignPage || isMenuOpen || isContributePage,
              'bg-app-gray-100': isDashboardPage && !isMenuOpen,
            }
          )}
        >
          {/* //? Logo & Searchbar
           */}
          <div className="h-3 w-max">
            <Aixela
              className="text-base font-medium uppercase"
              dark={!isCampaignPage || isMenuOpen || isContributePage}
            />
          </div>

          <div className="w-full"></div>

          <div className="justify-self-end flex items-center lg:gap-6  text-sm font-medium">
            <SearchBtn
              onClick={() => dispatch(openSearch())}
              isCampaignPage={isCampaignPage}
              isMenuOpen={isMenuOpen}
              isContributePage={isContributePage}
            />

            <Link
              href={'/'}
              onClick={() => setIsMenuOpen((prev) => (prev ? false : prev))} //? Close menu on click
              className={cn('transparent-btn max-lg:hidden', {
                'hover:bg-app-gray-100': !isCampaignPage,
                'backdrop-opacity-20 hover:bg-app-gray-900 hover:bg-opacity-35':
                  isCampaignPage && !isMenuOpen && !isContributePage,
              })}
            >
              Campaigns
            </Link>

            <Button
              onClick={() => dispatch(openNotification())}
              className={cn(
                'relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md text-inherit',
                {
                  'hover:bg-app-gray-100': !isCampaignPage,
                  'backdrop-opacity-20 hover:bg-app-gray-900 hover:bg-opacity-35':
                    isCampaignPage && !isMenuOpen && !isContributePage,
                }
              )}
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
              className={cn(
                'relative h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md text-inherit text-sm font-medium',
                {
                  'hover:bg-app-gray-100': !isCampaignPage,
                  'backdrop-opacity-20 hover:bg-app-gray-900 hover:bg-opacity-35':
                    isCampaignPage && !isMenuOpen && !isContributePage,
                }
              )}
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
