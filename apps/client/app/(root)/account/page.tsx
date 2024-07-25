import AccountForm from '@/components/forms/AccountForm';
import AvatarForm from '@/components/forms/AvatarForm';
import AccountWrapper from '@/components/wrappers/AccountWrapper';
import { user } from '@/constants';

const AccountPage = () => {
  return (
    <AccountWrapper title="Account information">
      <div className="space-y-10 max-w-[664px]">
        <h3 className="text-lg font-medium">Public Information</h3>

        <AvatarForm user={user} />

        <AccountForm />
      </div>
    </AccountWrapper>
  );
};
export default AccountPage;
