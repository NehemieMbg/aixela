import HeroImage from '@/components/reusables/HeroImage';
import CampaignHeader from '@/components/sections/CampaignHeader';
import CampaignInfo from '@/components/sections/CampaignInfo';
import { campaigns } from '@/constants'; //* temp fake data

const Campaign = ({ params }: { params: { campaignId: string } }) => {
  const { campaignId } = params;
  const campaign = campaigns.find((c) => c.id === Number(campaignId)); //* temp

  return (
    <>
      <CampaignHeader title={campaign?.title!} />

      <div className="min-h-screen">
        <HeroImage imageUrl={campaign?.thumbnailUrl!} alt={campaign?.title!} />

        <div>
          <CampaignInfo />
        </div>
      </div>
    </>
  );
};
export default Campaign;
