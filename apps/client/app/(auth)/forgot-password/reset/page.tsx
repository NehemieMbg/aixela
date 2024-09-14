import SubmitPrimary from '@/components/buttons/SubmitPrimary';
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import AuthenticationWrapper from '@/components/wrappers/AuthenticationWrapper';
import Link from 'next/link';

const ResetPassword = ({
  searchParams,
}: {
  searchParams: { updated: boolean };
}) => {
  if (searchParams.updated) {
    return (
      <AuthenticationWrapper
        title={'Password updated!'}
        subtitle={
          'Your password has been successfully updated. Please sign in to continue.'
        }
        showOauth={false}
        showRedirect={false}
      >
        <SubmitPrimary asChild>
          <Link href="/sign-in"> Continue </Link>
        </SubmitPrimary>
      </AuthenticationWrapper>
    );
  }

  return (
    <AuthenticationWrapper
      title={'Forgot your password?'}
      subtitle={
        'No worries! Enter your email to reset your password and get back to supporting the causes you love.'
      }
      redirectTitle="Remember your password?"
      redirectBtnLabel="Sign in"
      redirectLink="/sign-in"
      showOauth={false}
    >
      <ResetPasswordForm />
    </AuthenticationWrapper>
  );
};
export default ResetPassword;
