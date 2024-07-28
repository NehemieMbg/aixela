import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import StoreProvider from '@/providers/StoreProvider';
import { user } from '@/constants';
import { ReactNode } from 'react';
import Search from '@/components/reusables/Search';

/**
 * Layout component
 * @param children the children components
 * @returns the layout component
 */
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider user={user}>
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
