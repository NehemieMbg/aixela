import Navbar from '@/components/navigations/Navbar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};
export default layout;
