import Campaigns from '@/components/sections/Campaigns';
import { campaigns, users } from '@/constants'; //* temp data

/**
 * The SavedPage component
 * @param params - The params object
 * @returns The SavedPage component
 */
const SavedPage = async ({ params }: { params: { username: string } }) => {
  const userProfile = users.find((user) => user.username === params.username); //* temp data

  const userCampaigns = campaigns.filter(
    (campaign) => campaign.creator.username === userProfile?.username!
  );

  return (
    <div className="p-side py-10 pt-2">
      <Campaigns campaigns={campaigns} />
    </div>
  );
};
export default SavedPage;
