import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import StoreProvider from '@/providers/StoreProvider';
import { user } from '@/constants';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider user={user}>
      <div className="main-layout w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </StoreProvider>
  );
};
export default layout;
