import { ReactNode } from 'react';
import { Button } from '../ui/button';

/**
 * The OAuth button component.
 * @param icon - The icon to display.
 * @param label - The label to display.
 * @param action - The action to perform.
 * @returns The OAuth button.
 */
const OauthBtn = ({
  icon,
  label,
  action,
}: {
  icon?: ReactNode;
  label?: string;
  action?: () => void;
}) => {
  return (
    <Button
      onClick={action}
      className="space-x-2.5 w-full bg-app-gray-100 text-app-gray-300"
    >
      <span>{icon}</span> <span>{label}</span>
    </Button>
  );
};
export default OauthBtn;
