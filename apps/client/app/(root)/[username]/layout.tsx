import UserProfileNavigation from '@/components/navigations/UserProfileNavigation';
import { users } from '@/constants'; //* temp data
import { getSubscriptionsAction } from '@/utils/actions/subscribe/getSubscriptionsAction';
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

// Define the props type for UserLayout
interface UserLayoutProps {
  params: { username: string };
  children: ReactNode;
}

/**
 * The UserLayout component
 * @param {UserLayoutProps} props - The props object containing params and children
 * @returns {JSX.Element} - The UserLayout component
 */
const UserLayout = async ({
  params,
  children,
}: UserLayoutProps): Promise<JSX.Element> => {
  try {
    const profile = await getUserAction(params.username);

    if (!profile) {
      notFound();
    }

    console.log(profile);

    return (
      <div>
        <UserProfileNavigation profile={profile!} />
        {children}
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default UserLayout;
