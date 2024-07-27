import { progressToPercent } from '@/utils/functions';
import { Campaign } from '@/utils/types/temp';
import Link from 'next/link';

/**
 * Campaign search card
 * @param campaign the campaign object
 * @param onClick the function to run when the card is clicked
 * @returns the campaign search card
 */
const CampaignSearchCard = ({
  campaign,
  onClick,
}: {
  campaign: Campaign;
  onClick: () => void;
}) => {
  return (
    <Link
      href={`/campaigns/${campaign.id}`}
      onClick={onClick}
      className="flex items-center gap-4 justify-between hover:bg-app-gray-250 px-3 py-3 rounded-lg transition-colors duration-200"
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <div className="font-semibold">{campaign.title}</div>
        <div className="text-app-gray-highlight-3">
          by {campaign.creator.fullName}
        </div>
      </div>

      <div className="text-xs font-medium">
        {progressToPercent(campaign.currentAmount, campaign.targetAmount)}%
      </div>
    </Link>
  );
};
export default CampaignSearchCard;
