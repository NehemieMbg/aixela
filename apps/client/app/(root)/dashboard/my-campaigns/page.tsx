import DashboardWrapper from '@/components/wrappers/DashboardWrapper';
import { columns } from './columns';
import { DataTable } from './data-table';
import { campaigns } from '@/constants';
import { Campaign } from '@/utils/types/temp';
import NewCampaign from '@/components/sections/NewCampaign';

async function getData(): Promise<Campaign[]> {
  // Fetch data from your API here.
  return campaigns;
}

const MyCampaignsPage = async () => {
  const data = await getData();

  return (
    <>
      <DashboardWrapper
        title="My Campaigns"
        description="Manage and monitor the status of all your campaigns."
      >
        <DataTable columns={columns} data={data} />
      </DashboardWrapper>

      <NewCampaign />
    </>
  );
};
export default MyCampaignsPage;
