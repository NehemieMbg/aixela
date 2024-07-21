import Link from 'next/link';
import Aixela from '../logo/Aixela';
import { Button } from '../ui/button';
import SearchBar from './SearchBar';
import { cn } from '@/lib/utils';
import Backdrop from '../reusables/Backdrop';

/**
 * Navbar component
 * @returns the navbar component
 */
const Navbar = () => {
  const hasNotification = !false;

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-[100] w-full navbar-grid p-side py-3.5 items-center bg-white bg-opacity-95 backdrop-blur-sm'
        )}
      >
        <div>
          <Aixela className="text-base font-medium uppercase" />
        </div>

        <div className="justify-self-center w-full">{/* <SearchBar /> */}</div>

        <div className="justify-self-end lg:space-x-6 text-sm font-medium">
          <Button className="relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md">
            <span>Search</span>
          </Button>

          <Link href={'/'} className="transparent-btn max-xl:hidden">
            Campaigns
          </Link>

          <Link href={'/account'} className="transparent-btn max-xl:hidden">
            Account
          </Link>

          <Button className="relative space-x-1 h-max bg-inherit hover:bg-app-gray-100 px-2.5 py-1.5 transition-colors duration-200 rounded-md">
            <span>Menu</span>
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
        </div>
      </nav>

      {/* <div className="fixed top-0 z-[99] w-full h-[564px] bg-white rounded-b-xl">
        t
      </div>

      <Backdrop /> */}
    </>
  );
};

export default Navbar;
