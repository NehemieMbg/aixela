import VideoPlayer from '@/components/reusables/VideoPlayer';
import { campaigns } from '@/constants'; //* temp fake data

const Campaign = ({ params }: { params: { campaignId: string } }) => {
  const { campaignId } = params;
  const campaign = campaigns.find((c) => c.id === Number(campaignId)); //* temp

  console.log(campaign);

  return (
    <div className="bg-red-50 min-h-screen">
      <VideoPlayer videoUrl={campaign?.thumbnailUrl!} alt={campaign?.title!} />
    </div>
  );
};
export default Campaign;
