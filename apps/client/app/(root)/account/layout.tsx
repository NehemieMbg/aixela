import AccountNavigation from '@/components/navigations/AccountNavigation';
import { ReactNode } from 'react';

/**
 * AccountLayout
 * @param children - The children of the layout to be rendered
 * @returns The layout for the account page
 */
const AccountLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative md:account-navigation-grid p-side py-10 md:py-16 h-full max-md:space-y-10">
      <AccountNavigation />

      <div className="">{children}</div>
    </div>
  );
};
export default AccountLayout;
