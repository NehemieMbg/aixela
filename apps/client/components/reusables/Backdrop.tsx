import { useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * Backdrop component
 * @param isActive - boolean to determine if the backdrop is active
 * @param zIndex - z-index of the backdrop
 * @returns the backdrop component
 */
const Backdrop = ({
  isActive,
  zIndex = 80,
  className,
}: {
  isActive: boolean;
  zIndex?: number;
  className?: string;
}) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isActive]);

  return (
    <div
      className={cn(
        'fixed top-0 right-0 bottom-0 left-0 bg-app-gray-900 bg-opacity-20 backdrop-blur-[4px] transition-opacity duration-500 ease-in-out',
        {
          'opacity-0 pointer-events-none': !isActive,
          'opacity-100 pointer-events-auto': isActive,
          [`${className}`]: className,
        }
      )}
      style={{ zIndex: zIndex }}
    />
  );
};

export default Backdrop;
