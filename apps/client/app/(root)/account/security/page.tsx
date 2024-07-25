import AccountForm from '@/components/forms/AccountForm';
import EmailForm from '@/components/forms/EmailForm';
import PasswordForm from '@/components/forms/PasswordForm';
import AccountWrapper from '@/components/wrappers/AccountWrapper';

const SecurityPage = () => {
  return (
    <AccountWrapper title="Security">
      <div className="space-y-8 max-w-[664px]">
        <h3 className="text-lg font-medium">Public Information</h3>

        <EmailForm />
      </div>

      <div className="space-y-8 max-w-[664px]">
        <h3 className="text-lg font-medium">Public Information</h3>

        <PasswordForm />
      </div>
    </AccountWrapper>
  );
};
export default SecurityPage;
