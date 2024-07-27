import { redirect } from 'next/navigation';

/**
 * Dashboard Page component
 * @returns the dashboard page component
 */
const DashboardPage = () => {
  return redirect('/dashboard/my-campaigns'); // Redirect to my-campaigns page
};
export default DashboardPage;
