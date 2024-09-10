import Footer from '@/components/navigations/Footer';
import Navbar from '@/components/navigations/Navbar';
import Search from '@/components/reusables/Search';

import { ReactNode } from 'react';

/**
 * Layout component
 * @param children the children components
 * @returns the layout component
 */
const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-layout w-full">
      <Navbar />
      <Search />

      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};
export default layout;
