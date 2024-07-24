'use client';

import HeroImage from '@/components/reusables/HeroImage';

import { useState } from 'react';
import ContributeForm from '@/components/forms/ContributeForm';
import ProgressBar from '@/components/reusables/ProgressBar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { campaigns } from '@/constants';
import { toReadableNumber } from '@/utils/functions';
import Link from 'next/link';
import VideoModal from '@/components/wrappers/VideoModal';
import VideoPlayer from '@/components/reusables/VideoPlayer';

/**
 * Contribute page
 * @param params - The campaign ID
 * @returns the contribute page
 */
const Contribute = ({ params }: { params: { campaignId: string } }) => {
  const { campaignId } = params;
  const campaign = campaigns.find(
    (campaign) => campaign.id === Number(campaignId)
  );

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="contribute-grid md:h-screen w-screen">
        {/* Image */}
        <HeroImage
          imageUrl={campaign?.thumbnailUrl!}
          alt={campaign?.title!}
          className="h-full w-full max-md:pt-12"
        />

        {/* Right Side */}
        <div className="px-4 md:px-6 lg:px-8 2xl:px-10 pb-10  pt-10 md:pt-[120px] space-y-20 overflow-hidden overflow-y-scroll customScroll">
          <div className="space-y-9">
            <h1 className="text-3xl font-semibold">{campaign?.title}</h1>

            <div className="space-y-5">
              <Link
                href={`/${campaign?.creator.username}`}
                className="flex items-center gap-3 w-max"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <Skeleton />
                  </AvatarFallback>
                </Avatar>

                <p className="font-semibold text-sm">
                  {campaign?.creator.fullName}
                </p>
              </Link>

              <p className="text-sm">{campaign?.subtitle}</p>

              <ProgressBar
                current={campaign?.currentAmount!}
                target={campaign?.targetAmount!}
                color="primary"
                showProgress={false}
              />

              <div className="font-medium text-sm">
                ${toReadableNumber(campaign?.currentAmount!)} raised from $
                {toReadableNumber(campaign?.targetAmount!)}
              </div>

              <Button
                onClick={() => setIsPreviewOpen(true)}
                className="px-4 h-8 font-normal"
              >
                Watch video
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Contribute</h2>
            <ContributeForm campaignId={campaign?.id!} />
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isPreviewOpen}
        closeModal={() => setIsPreviewOpen(false)}
      >
        <div>
          <VideoPlayer
            thumbnailUrl={campaign?.thumbnailUrl!}
            videoUrl={'https://youtu.be/uvsyIlKhVlQ?si=DmeJZ8NzFMAOEnq9'} //! to be changed
          />
        </div>
      </VideoModal>
    </>
  );
};
export default Contribute;
