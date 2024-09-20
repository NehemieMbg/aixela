import UserProfileNavigation from '@/components/navigations/UserProfileNavigation';
import { users } from '@/constants'; //* temp data
import { getUserAction } from '@/utils/actions/users/getUserAction';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type UserLinks = {
  website?: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
};

type Subscriber = {
  userId: number;
  subscribedDate: string;
  user: User;
};

type User = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  avatarUrl?: string;
  title?: string;
  location?: string;
  links: UserLinks;
  subscribers: Subscriber[];
  subscribedTo: Subscriber[];
};

const emptyUser: User = {
  id: 0,
  fullName: '',
  username: '',
  email: '',
  avatarUrl: '',
  title: '',
  location: '',
  links: {
    website: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
  },
  subscribers: [],
  subscribedTo: [],
};

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
  let userProfile: User | null;
  const user = await getUserAction(params.username);

  //! temp data
  if (user) {
    userProfile = { ...emptyUser, ...user };
    console.log('user:', user);
  } else {
    userProfile =
      users.find((user) => user.username === params.username) || (null as User);
  }

  if (!userProfile) {
    notFound();
  }

  console.log('userProfile:', userProfile);

  return (
    <div>
      <UserProfileNavigation user={userProfile} />
      {children}
    </div>
  );
};
export default UserLayout;
