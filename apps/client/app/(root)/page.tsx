import Campaigns from '@/components/sections/Campaigns';
import { campaigns } from '@/constants';

/**
 * Home Page
 * @returns the home page component
 */
export default function Home() {
  return (
    <div className="p-side py-10">
      <Campaigns campaigns={campaigns} />
    </div>
  );
}
