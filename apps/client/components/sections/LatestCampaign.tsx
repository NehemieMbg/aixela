import { campaigns } from '@/constants';
import ProgressBar from '../reusables/ProgressBar';
import Link from 'next/link';

const LatestCampaign = ({ closeMenu }: { closeMenu: () => void }) => {
  const latest = campaigns[0];

  return (
    <>
      {latest && (
        <div className="max-w-[530px] w-full space-y-1">
          <div className="text-xs font-semibold text-app-gray-300">Latest</div>

          <div className="space-y-3">
            <Link href={`/campaigns/${latest.id}`} onClick={closeMenu}>
              <h2 className="font-medium">{latest.title}</h2>

              <ProgressBar
                current={latest.currentAmount}
                target={latest.targetAmount}
                color="primary"
                showProgress={false}
              />
            </Link>

            <p className="text-sm">{latest.subtitle}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default LatestCampaign;
