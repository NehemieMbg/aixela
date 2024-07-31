import DashboardBreadCrumb from '@/components/navigations/DashboardBreadCrumb';
import DashboardSidebar from '@/components/navigations/DashboardSidebar';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

/**
 * Dashboard layout component
 * @param children - the children components
 * @returns the dashboard layout component
 */
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        'relative h-full xl:dashboard-navigation-grid xl:p-side py-10 bg-app-gray-100 max-xl:space-y-5'
      )}
    >
      <div className="relative w-full max-xl:p-side">
        <DashboardSidebar />
      </div>

      <div className="p-side p-axis xl:rounded-2xl bg-white xl:border border-app-gray-250 xl:shadow-sm h-full ">
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
