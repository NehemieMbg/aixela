'use client';

import { closeCampaign } from '@/lib/features/campaign/CampaignSlice';
import ManageCampaignWrapper from '../wrappers/ManageCampaignWrapper';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import CampaignForm from '../forms/CampaignForm';

const NewCampaign = () => {
  const dispatch = useAppDispatch();
  const isCampaignOpen = useAppSelector((state) => state.campaign.isOpen);

  return (
    <ManageCampaignWrapper
      title="New campaign"
      isOpen={isCampaignOpen}
      closeCampaign={() => {
        dispatch(closeCampaign());
      }}
    >
      <CampaignForm />
    </ManageCampaignWrapper>
  );
};
export default NewCampaign;
