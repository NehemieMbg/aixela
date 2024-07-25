import AccountForm from '@/components/forms/AccountForm';
import AccountWrapper from '@/components/wrappers/AccountWrapper';

const AccountPage = () => {
  return (
    <AccountWrapper title="Account information">
      <div className="space-y-10 max-w-[664px]">
        <h3 className="text-lg font-medium">Public Information</h3>

        <div>Change avatar</div>

        <AccountForm />
      </div>
    </AccountWrapper>
  );
};
export default AccountPage;
