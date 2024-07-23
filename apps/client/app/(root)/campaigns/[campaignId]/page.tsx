import HeroImage from '@/components/reusables/HeroImage';
import VideoPlayer from '@/components/reusables/VideoPlayer';
import CampaignHeader from '@/components/sections/CampaignHeader';
import CampaignDescription from '@/components/sections/CampaignDescription';
import { campaigns } from '@/constants'; //* temp fake data
import CampaignInfo from '@/components/sections/CampaignInfo';

/**
 * Campaign page
 * @param params - The object containing the campaignId
 * @return the campaign page
 */
const Campaign = ({ params }: { params: { campaignId: string } }) => {
  const { campaignId } = params;
  const campaign = campaigns.find((c) => c.id === Number(campaignId)); //* temp

  return (
    <>
      <CampaignHeader title={campaign?.title!} />

      <div className="min-h-screen">
        <HeroImage imageUrl={campaign?.thumbnailUrl!} alt={campaign?.title!} />

        <div className="flex max-lg:flex-col">
          <div className="p-side py-10 space-y-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold">{campaign?.title}</h1>
              <p className="text-sm">{campaign?.subtitle}</p>
            </div>

            <VideoPlayer
              thumbnailUrl={campaign?.thumbnailUrl!}
              videoUrl={
                'https://www.youtube.com/embed/uvsyIlKhVlQ?si=HKjPN-JhV2J2JJ3i'
              }
            />
            <CampaignDescription />
          </div>

          <CampaignInfo campaign={campaign!} />
        </div>
      </div>
    </>
  );
};
export default Campaign;
