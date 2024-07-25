import { ReactNode } from 'react';

/**
 * AccountWrapper component
 * @param  title - The title to be displayed
 * @param  children - The children of the layout to be rendered
 * @returns The layout for the account page
 */
const AccountWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-medium">{title}</h1>

      <div className="space-y-20">{children}</div>
    </div>
  );
};
export default AccountWrapper;
