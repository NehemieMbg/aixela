import SignUpForm from '@/components/forms/SignUpForm';
import AuthenticationWrapper from '@/components/wrappers/AuthenticationWrapper';

/**
 * This is the SignUp page to register a new user to the application.
 * @returns The SignUp page.
 */
const SignUp = () => {
  return (
    <AuthenticationWrapper
      title="Join the Movement!"
      subtitle="Sign up to start making a difference and support the causes that matter to you."
      redirectTitle="Already have an account ?"
      redirectBtnLabel="Sign In"
      redirectLink="/sign-in"
    >
      <SignUpForm />
    </AuthenticationWrapper>
  );
};
export default SignUp;
