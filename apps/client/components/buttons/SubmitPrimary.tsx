import { ReactNode } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

/**
 *  A primary submit button with a blue background
 * @param children - The children to render
 * @returns The primary submit button
 */
const SubmitPrimary = ({
  children,
  className,
  asChild,
}: {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}) => {
  return (
    <Button
      type="submit"
      asChild={asChild}
      className={cn(
        'w-full bg-app-blue-primary hover:bg-app-blue-secondary hover:backdrop-brightness-75 text-white',
        {
          [`${className}`]: className,
        }
      )}
    >
      {children}
    </Button>
  );
};
export default SubmitPrimary;
