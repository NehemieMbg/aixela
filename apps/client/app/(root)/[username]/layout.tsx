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
    // Fetch user data
    let profile = await getUserAction(params.username);

    //! This is a temporary added data: 'Down'
    profile = profile
      ? { ...emptyUser, ...profile }
      : users.find((u) => u.username === params.username) || null;
    //! This is a temporary added data: 'Up'

    // If user is not found, call notFound()
    if (!profile) {
      notFound();
    }

    // Render the UserProfileNavigation and children components
    return (
      <div>
        <UserProfileNavigation user={profile} />
        {children}
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    notFound();
  }
};

export default UserLayout;
