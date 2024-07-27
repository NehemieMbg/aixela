import { ReactNode } from 'react';

/**
 * Dashboard layout component
 * @param children - the children components
 * @returns the dashboard layout component
 */
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
export default DashboardLayout;
