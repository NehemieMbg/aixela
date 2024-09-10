import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import Search from '@/components/reusables/Search';
import { user as tempUser } from '@/constants';
import StoreProvider from '@/providers/StoreProvider';
import { getCurrentUserAction } from '@/utils/actions/authentication/getUserAction';
import { User } from '@/utils/types/temp';
import { ReactNode } from 'react';

/**
 * Layout component
 * @param children the children components
 * @returns the layout component
 */
const layout = async ({ children }: { children: ReactNode }) => {
  let user = (await getCurrentUserAction()) || tempUser; // ! tempUser is a temporary code to be removed

  // ! Temporary code to be removed
  if (user) {
    user = { ...tempUser, ...user };
  }

  return (
    // ! Temporary code: Type to be adjusted
    <StoreProvider user={user as User | undefined}>
      <div className="main-layout w-full">
        <Navbar />
        <Search />

        <div className="relative">{children}</div>

        <Footer />
      </div>
    </StoreProvider>
  );
};
export default layout;
