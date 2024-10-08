import BookmarkBtn from '@/components/buttons/BookmarkBtn';
import DownloadBtn from '@/components/buttons/DownloadBtn';
import SubscribeBtn from '@/components/buttons/SubscribeBtn';
import HeroImage from '@/components/reusables/HeroImage';
import ProgressBar from '@/components/reusables/ProgressBar';
import VideoPlayer from '@/components/reusables/VideoPlayer';
import CampaignDescription from '@/components/sections/CampaignDescription';
import CampaignHeader from '@/components/sections/CampaignHeader';
import CampaignInfo from '@/components/sections/CampaignInfo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { campaigns } from '@/constants'; //* temp fake data
import { toReadableNumber } from '@/utils/functions';
import Link from 'next/link';

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
      <CampaignHeader title={campaign?.title!} campaignId={campaign?.id!} />

      <div className="min-h-screen w-full pb-[160px]">
        <HeroImage imageUrl={campaign?.thumbnailUrl!} alt={campaign?.title!} />

        <div className="flex items-center">
          <div className="campaign-grid mx-auto max-lg:flex-col">
            <div className="p-side py-10 space-y-10 max-w-[900px] w-full">
              {/* //? TITLE, SUBTITLE & USER INFO */}
              <div className="space-y-8">
                {/* //? Campaign Title */}
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-3xl font-semibold">{campaign?.title}</h1>
                  <BookmarkBtn />
                </div>

                {/* //? Campaign Subtitle */}
                <p className="text-sm">{campaign?.subtitle}</p>

                {/* //? Video Player */}
                <VideoPlayer
                  thumbnailUrl={campaign?.thumbnailUrl!}
                  videoUrl={
                    'https://www.youtube.com/embed/uvsyIlKhVlQ?si=HKjPN-JhV2J2JJ3i'
                  }
                />

                {/* //? Progress Bar */}
                <div className="space-y-2">
                  <ProgressBar
                    color="primary"
                    showProgress={false}
                    current={campaign?.currentAmount!}
                    target={campaign?.targetAmount!}
                  />

                  <div className="font-medium text-sm">
                    ${toReadableNumber(campaign?.currentAmount!)} raised from $
                    {toReadableNumber(campaign?.targetAmount!)}
                  </div>
                </div>

                {/* //? User Info */}
                <div className="space-y-2 mb-10">
                  <div className="flex items-center gap-4">
                    <Link href={`/${campaign?.creator.username}`}>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={campaign?.creator.avatarUrl}
                            className="size-12"
                          />
                          <AvatarFallback>
                            <Skeleton />
                          </AvatarFallback>
                        </Avatar>

                        <p className="size-max font-medium">
                          {campaign?.creator.fullName}
                        </p>
                      </div>
                    </Link>

                    <SubscribeBtn
                      isSubscribe={false}
                      isOwner={false}
                      btnType="medium"
                    />
                  </div>
                </div>
              </div>

              {/* //? Campaign Description */}
              <CampaignDescription />

              <DownloadBtn
                documentUrl={campaign?.documentUrl!}
                campaignTitle={campaign?.title!}
              />
            </div>

            <CampaignInfo campaign={campaign!} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Campaign;
