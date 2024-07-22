import Backdrop from '../reusables/Backdrop';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { closeNotification } from '@/lib/features/Navigation/NotificationSlice';
import { use, useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import { cn } from '@/lib/utils';
import { ArrowLeft, MoveLeft } from 'lucide-react';

/**
 * Notifications component
 * @param isOpen - the state of the notification
 * @param closeNotification - the function to close the notification
 * @returns the notifications component
 */
const Notifications = () => {
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.notification.isOpen);

  useClickOutside(notificationRef, () => dispatch(closeNotification()));

  return (
    <>
      <Backdrop isActive={isOpen} zIndex={200} />

      <div
        ref={notificationRef}
        className={cn(
          'fixed z-[210] max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 md:right-2.5 md:top-2.5 md:bottom-2.5 md:max-w-[512px] w-full bg-white md:rounded-lg transition-transform duration-300 ease-in-out overflow-hidden',
          {
            'translate-x-[110%]': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <div className="sticky top-0 flex justify-between items-center px-4 py-4 pr-6 bg-white backdrop-opacity-95">
          <button
            onClick={() => dispatch(closeNotification())}
            className="transparent-btn flex items-center gap-2"
          >
            <MoveLeft className="" />
            <span className="text-sm">Return</span>
          </button>

          <h3 className="text-lg">Notifications</h3>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Notifications;
