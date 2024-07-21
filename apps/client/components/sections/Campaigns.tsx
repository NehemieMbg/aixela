import { Campaign } from '@/utils/types/temp';
import CampaignCard from '../cards/CampaignCard';

/**
 * Campaigns section
 * @param campaigns - List of campaigns to display
 * @returns the campaigns section component
 */
const Campaigns = ({ campaigns }: { campaigns: Campaign[] }) => {
  return (
    <section className="grid xl:grid-cols-2 gap-4">
      {campaigns.map((campaign) => {
        return <CampaignCard key={campaign.id} campaign={campaign} />;
      })}
    </section>
  );
};
export default Campaigns;
