import { users } from '@/constants'; //* temp data
import { notFound } from 'next/navigation';

const UserPage = async ({ params }: { params: { username: string } }) => {
  const userProfile = users.find((user) => user.username === params.username);
  if (!userProfile) {
    notFound();
  }

  return <div>UserPage</div>;
};
export default UserPage;
