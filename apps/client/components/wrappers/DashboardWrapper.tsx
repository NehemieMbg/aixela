import { ReactNode } from 'react';

const DashboardWrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative space-y-10 h-full">
      <div className="space-y-2">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm font-medium text-app-gray-highlight-3">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
};
export default DashboardWrapper;
