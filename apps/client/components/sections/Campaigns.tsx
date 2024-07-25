import { Campaign } from '@/utils/types/temp';
import CampaignCard from '../cards/CampaignCard';

/**
 * Campaigns section
 * @param campaigns - List of campaigns to display
 * @param isProfile - If the creator should be displayed
 * @returns the campaigns section component
 */
const Campaigns = ({
  campaigns,
  isProfile,
}: {
  campaigns: Campaign[];
  isProfile?: boolean;
}) => {
  return (
    <section className="grid xl:grid-cols-2 gap-4">
      {campaigns.map((campaign) => {
        return (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            isProfile={isProfile}
          />
        );
      })}
    </section>
  );
};
export default Campaigns;
