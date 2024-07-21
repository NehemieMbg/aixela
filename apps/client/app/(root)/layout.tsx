import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-layout w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default layout;
