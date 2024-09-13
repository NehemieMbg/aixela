import PasswordResetRequestForm from '@/components/forms/PasswordResetRequestForm';
import AuthenticationWrapper from '@/components/wrappers/AuthenticationWrapper';

const ForgetPassword = ({
  searchParams,
}: {
  searchParams: { sent: boolean };
}) => {
  const isSent = searchParams.sent;

  return (
    <AuthenticationWrapper
      title={!isSent ? 'Forgot your password?' : 'Check your inbox!'}
      subtitle={
        !isSent
          ? 'No worries! Enter your email to reset your password and get back to supporting the causes you love.'
          : "We've sent a password reset link to your email. Check your inbox and follow the steps."
      }
      redirectTitle="Remember your password?"
      redirectBtnLabel="Sign in"
      redirectLink="/sign-in"
      showOauth={false}
    >
      {!isSent && <PasswordResetRequestForm />}
    </AuthenticationWrapper>
  );
};
export default ForgetPassword;
