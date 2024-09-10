import Aixela from '@/components/logo/Aixela';
import { getCurrentUserAction } from '@/utils/actions/authentication/getUserAction';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * The layout component.
 * @param children The children components.
 * @returns The layout component.
 */
const layout = async ({ children }: { children: ReactNode }) => {
  // redirect to home if user is already logged in
  const user = await getCurrentUserAction();

  if (user) {
    redirect('/');
  }

  return (
    <div className="p-6 md:p-8 lg:p-10 w-full h-screen">
      <Aixela className="max-lg:hidden" />

      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};
export default layout;
