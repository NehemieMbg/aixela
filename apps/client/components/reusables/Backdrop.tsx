'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const Backdrop = ({ zIndex = 80 }: { zIndex?: number }) => {
  useEffect(() => {
    // Add the no-scroll class to the body when the component is mounted
    document.body.classList.add('no-scroll');

    // Clean up by removing the no-scroll class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 right-0 bottom-0 left-0 bg-app-gray-900 bg-opacity-20 backdrop-blur-[4px]'
      )}
      style={{ zIndex: zIndex }}
    />
  );
};

export default Backdrop;
