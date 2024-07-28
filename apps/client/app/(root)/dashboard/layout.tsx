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
        'relative h-full dashboard-navigation-grid p-side py-10 bg-app-gray-100'
      )}
    >
      <div className="relative w-full">
        <DashboardSidebar />
      </div>
      <div className="p-side p-axis rounded-2xl bg-white border border-app-gray-250 shadow-sm">
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
