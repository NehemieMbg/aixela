import UserProfileNavigation from '@/components/navigations/UserProfileNavigation';
import { users } from '@/constants'; //* temp data
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * The UserLayout component
 * @param params - The params object
 * @param children - The children component
 * @returns The UserLayout component
 */
const UserLayout = async ({
  params,
  children,
}: {
  params: { username: string };
  children: ReactNode;
}) => {
  const userProfile = users.find((user) => user.username === params.username);

  if (!userProfile) {
    notFound();
  }

  return (
    <div>
      <UserProfileNavigation user={userProfile} />
      {children}
    </div>
  );
};
export default UserLayout;
