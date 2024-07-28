'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dashboardNavLinks } from '@/constants';

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-[104px]">
      {dashboardNavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              'block text-sm font-medium text-app-gray-300 w-full md:pr-3.5  py-2.5 hover:text-app-gray-950 transition-colors duration-200 rounded-md max-md:w-max',
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
  );
};
export default DashboardSidebar;
