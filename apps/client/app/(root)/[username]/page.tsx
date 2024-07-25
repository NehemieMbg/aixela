import Campaigns from '@/components/sections/Campaigns';
import { campaigns, users } from '@/constants'; //* temp data
import { notFound } from 'next/navigation';

/**
 * The UserPage component
 * @param params - The params object
 * @returns The UserPage component
 */
const UserPage = async ({ params }: { params: { username: string } }) => {
  const userProfile = users.find((user) => user.username === params.username);

  if (!userProfile) {
    notFound();
  }

  const userCampaigns = campaigns.filter(
    (campaign) => campaign.creator.username === userProfile.username
  );

  return (
    <div className="p-side py-10 pt-2">
      <Campaigns campaigns={userCampaigns} isProfile={true} />
    </div>
  );
};
export default UserPage;
