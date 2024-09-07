import useClickOutside from '@/hooks/useClickOutside';
import { cn } from '@/lib/utils';
import { MoveLeft } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import BackdropBis from '../reusables/BackdropBis';

/**
 * Manage campaign wrapper component
 * @param isOpen - the state of the notification
 * @param closeCampaign - the function to close the notification
 * @param title - the title of the notification
 * @param children - the children of the notification
 * @returns the manage campaign wrapper component
 */
const ManageCampaignWrapper = ({
  title,
  isOpen,
  closeCampaign,
  children,
}: {
  title: string;
  isOpen: boolean;
  closeCampaign: () => void;
  children: React.ReactNode;
}) => {
  const notificationRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(notificationRef, () => closeCampaign());

  // Scroll to top when the notification panel is opened
  useEffect(() => {
    if (isOpen && notificationRef.current) {
      notificationRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      <BackdropBis isActive={isOpen} zIndex={200} />

      <div
        ref={notificationRef}
        className={cn(
          'fixed z-[210] max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 md:right-2.5 md:top-2.5 md:bottom-2.5 md:max-w-[648px] w-full bg-white md:rounded-lg transition-transform duration-300 ease-in-out overflow-hidden overflow-y-auto customScroll',
          {
            'translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <div className="sticky top-0 z-[10] flex justify-between items-center px-4 py-4 pr-6 bg-white backdrop-opacity-95">
          <button
            onClick={() => closeCampaign()}
            className="transparent-btn flex items-center gap-2"
          >
            <MoveLeft className="" />
            <span className="text-sm">Return</span>
          </button>

          <h3 className="text-lg font-medium">{title}</h3>
        </div>

        <div className="p-2 space-y-2">{children}</div>
      </div>
    </>
  );
};
export default ManageCampaignWrapper;
