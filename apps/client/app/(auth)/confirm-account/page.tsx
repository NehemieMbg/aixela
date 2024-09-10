import ConfirmAccountForm from '@/components/forms/ConfirmAccountForm';

/**
 * ConfirmAccount component that verifies the account based on the search parameters.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.searchParams - The search parameters from the URL.
 * @param {string} params.searchParams.succeeded - A string indicating whether the account verification succeeded.
 * @returns {JSX.Element} - The ConfirmAccountForm component with the verification status.
 */
const ConfirmAccount = async ({
  searchParams,
}: {
  searchParams: { succeeded: string };
}) => {
  const isVerified = searchParams.succeeded === 'true';

  return <ConfirmAccountForm isVerified={isVerified} />;
};

export default ConfirmAccount;
