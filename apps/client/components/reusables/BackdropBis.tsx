import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const BackdropBis = ({
  isActive,
  zIndex = 80,
}: {
  isActive: boolean;
  zIndex?: number;
}) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scrollBis');
    } else {
      document.body.classList.remove('no-scrollBis');
    }

    return () => {
      document.body.classList.remove('no-scrollBis');
    };
  }, [isActive]);

  return (
    <div
      className={cn(
        'fixed top-0 right-0 bottom-0 left-0 bg-app-gray-900 bg-opacity-20 backdrop-blur-[4px] transition-opacity duration-500 ease-in-out',
        {
          'opacity-0 pointer-events-none': !isActive,
          'opacity-100 pointer-events-auto': isActive,
        }
      )}
      style={{ zIndex: zIndex }}
    />
  );
};

export default BackdropBis;
