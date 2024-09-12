import PasswordResetRequestForm from '@/components/forms/PasswordResetRequestForm';
import AuthenticationWrapper from '@/components/wrappers/AuthenticationWrapper';

const ForgetPassword = () => {
  return (
    <AuthenticationWrapper
      title="Forgot your password?"
      subtitle="No worries! Enter your email to reset your password and get back to supporting the causes you love."
      redirectTitle="Remember your password?"
      redirectBtnLabel="Sign in"
      redirectLink="/sign-in"
      showOauth={false}
    >
      <PasswordResetRequestForm />
    </AuthenticationWrapper>
  );
};
export default ForgetPassword;
