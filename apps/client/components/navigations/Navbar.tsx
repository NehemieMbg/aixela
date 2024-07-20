import Link from 'next/link';
import Aixela from '../logo/Aixela';
import { Button } from '../ui/button';
import SearchBar from './SearchBar';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const hasNotification = !false;

  return (
    <nav className="navbar-grid p-side py-4 items-center">
      <div>
        <Aixela className="text-base font-medium uppercase" />
      </div>

      <div className="justify-self-center w-full">
        <SearchBar />
      </div>

      <div className="justify-self-end lg:space-x-8 text-sm font-medium">
        <Link href={'/'} className="transparent-btn max-xl:hidden">
          Campaigns
        </Link>

        <Link href={'/account'} className="transparent-btn max-xl:hidden">
          Account
        </Link>

        <Button className="relative space-x-1 h-max bg-inherit hover:bg-app-gray-250 px-2.5 py-1.5 transition-colors duration-200 rounded-md">
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
  );
};

export default Navbar;
