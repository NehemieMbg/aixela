import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import StoreProvider from '@/providers/StoreProvider';
import { user } from '@/constants';
import { ReactNode } from 'react';
import Search from '@/components/reusables/Search';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider user={user}>
      <div className="main-layout w-full">
        <Navbar />
        <Search />

        <div>{children}</div>

        <Footer />
      </div>
    </StoreProvider>
  );
};
export default layout;
