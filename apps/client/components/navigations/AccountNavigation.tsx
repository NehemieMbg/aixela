'use client';

import { accountNavLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Account navigation
 * @returns the account navigation
 */
const AccountNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="relative w-full h-max ">
      <div className="md:fixed max-md:flex gap-5">
        {accountNavLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                'block text-sm font-medium text-app-gray-300 w-full md:px-3.5 py-2.5 hover:text-app-gray-950 transition-colors duration-200 rounded-md max-md:w-max',
                {
                  'font-semibold text-app-gray-950': isActive,
                }
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default AccountNavigation;
