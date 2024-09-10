'use client';

import { ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SubmitPrimary from '../buttons/SubmitPrimary';
import { initiateConfirmRequestAction } from '@/utils/actions/authentication/initiateConfirmRequestAction';
import { cn } from '@/lib/utils';

const ConfirmAccountForm = ({ isVerified }: { isVerified: boolean }) => {
  const router = useRouter();

  const verifiedTitle = 'Account Verified';
  const verifiedContent =
    'Congratulations! Your account has been successfully verified. You can now access all the features of our platform.';

  const unverifiedTitle = 'Invalid Request';
  const unverifiedContent =
    'It seems like your request is invalid or has expired. Please click the button below to resend the verification email and try again.';

  const handleSubmit = async () => {
    if (isVerified) {
      router.push('/');
    } else {
      await initiateConfirmRequestAction();
    }
  };

  return (
    <div className="max-w-[360px] w-full space-y-8">
      <div
        className={cn(' bg-opacity-50 w-max p-2 rounded-md', {
          'bg-app-blue-primary bg-opacity-10 text-app-blue-primary': isVerified,
          'bg-red-500 bg-opacity-10 text-red-500': !isVerified,
        })}
      >
        <ShieldCheck size={20} strokeWidth={1.8} />
      </div>

      <div className="space-y-2.5">
        <h1 className="text-2xl">
          {isVerified ? verifiedTitle : unverifiedTitle}
        </h1>

        <p className="text-sm">
          {isVerified ? verifiedContent : unverifiedContent}
        </p>
      </div>

      <SubmitPrimary onClick={handleSubmit}>
        {isVerified ? 'Continue' : 'Resend Verification Email'}
      </SubmitPrimary>
    </div>
  );
};
export default ConfirmAccountForm;
