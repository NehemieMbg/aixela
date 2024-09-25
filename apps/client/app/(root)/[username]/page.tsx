import Campaigns from '@/components/sections/Campaigns';
import { campaigns } from '@/constants'; //* temp data
import { notFound } from 'next/navigation';

/**
 * The UserPage component
 * @param params - The params object
 * @returns The UserPage component
 */
const UserPage = async ({ params }: { params: { username: string } }) => {
  try {
    // get user campaigns from username with server action

    return (
      <div className="p-side py-10 pt-2">
        <Campaigns campaigns={campaigns} isProfile={true} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    notFound();
  }
};
export default UserPage;
