import Campaigns from '@/components/sections/Campaigns';
import { campaigns, users } from '@/constants'; //* temp data
import { getUserAction } from '@/utils/actions/users/getUserAction';
import { notFound } from 'next/navigation';

const emptyUser = {
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
 * The UserPage component
 * @param params - The params object
 * @returns The UserPage component
 */
const UserPage = async ({ params }: { params: { username: string } }) => {
  try {
    //! This is a temporary added data: 'Down'
    // function should get the users campaigns directly from the server
    let profile = await getUserAction(params.username);

    profile = profile
      ? { ...emptyUser, ...profile }
      : users.find((u) => u.username === params.username) || null;

    const userCampaigns = campaigns.filter(
      (campaign) => campaign.creator.username === profile.username
    );
    //! This is a temporary added data: 'Up'

    // Render the UserProfileNavigation and children components
    return (
      <div className="p-side py-10 pt-2">
        <Campaigns campaigns={userCampaigns} isProfile={true} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    notFound();
  }
};
export default UserPage;
