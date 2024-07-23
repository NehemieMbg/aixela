import useClickOutside from '@/hooks/useClickOutside';
import { closeNotification } from '@/lib/features/Navigation/NotificationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useRef } from 'react';

// Temp data
import { notificationData } from '@/constants/notificationTemp';
import NotificationCard from '../cards/NotificationCard';
import NotificationWrapper from '../wrappers/NotificationWrapper';

/**
 * Notifications component
 * @param isOpen - the state of the notification
 * @param closeNotification - the function to close the notification
 * @returns the notifications component
 */
const Notifications = () => {
  const notifications = notificationData.notifications;
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.notification.isOpen);

  useClickOutside(notificationRef, () => dispatch(closeNotification()));

  // Scroll to top when the notification panel is opened
  useEffect(() => {
    if (isOpen && notificationRef.current) {
      notificationRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <NotificationWrapper
      title="Notifications"
      isOpen={isOpen}
      closeNotification={() => dispatch(closeNotification())}
    >
      {notifications.map((notification) => {
        const date = new Date(notification.createdDate).getDate();

        const isBackerNotification =
          notification.notificationType === 'backers';

        const message = isBackerNotification ? (
          <div className="text-sm">
            <span className="font-semibold">{notification.user.fullName}</span>{' '}
            backed your campaign with $
            <span className="font-semibold">{50}</span>
          </div>
        ) : (
          <div className="text-sm">
            <span className="font-semibold">{notification.user.fullName}</span>{' '}
            subscribed to support your causes
          </div>
        );

        return (
          <NotificationCard
            key={notification.id}
            date={date}
            showDate
            avatarUrl={'https://github.com/shadcn.png'}
          >
            {message}
          </NotificationCard>
        );
      })}
    </NotificationWrapper>
  );
};
export default Notifications;
