import Aixela from '@/components/logo/Aixela';
import { ReactNode } from 'react';

/**
 * The layout component.
 * @param children The children components.
 * @returns The layout component.
 */
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 md:p-8 lg:p-10 w-full h-screen">
      <Aixela className="max-lg:hidden" />

      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};
export default layout;
