import SignInForm from '@/components/forms/SignInForm';
import AuthenticationWrapper from '@/components/wrappers/AuthenticationWrapper';

/**
 * This is the SignIn page to login the user to the application.
 * @returns The SignIn page.
 */
const SignIn = () => {
  return (
    <AuthenticationWrapper
      title="Welcome back!"
      subtitle="Sign in to continue making a difference and supporting the causes you love."
      redirectTitle="Don't have an account?"
      redirectBtnLabel="Sign up"
      redirectLink="/sign-up"
    >
      <SignInForm />
    </AuthenticationWrapper>
  );
};
export default SignIn;
