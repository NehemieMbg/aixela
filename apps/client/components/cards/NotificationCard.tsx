import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

/**
 * Notification card component
 * @param avatarUrl - the URL of the avatar
 * @param date - the date of the notification
 * @param showDate - weather to show the date or not
 * @param children - the children of the notification
 * @returns the notification card component
 */
const NotificationCard = ({
  avatarUrl,
  date,
  showDate,
  children,
}: {
  avatarUrl?: string;
  date?: number;
  showDate: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between w-full gap-5 px-4 py-3 bg-inherit hover:bg-app-gray-100 rounded-lg transition-colors duration-200 cursor-default">
      <div className="flex items-center gap-4">
        <Avatar className="size-10">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>
            <Skeleton />
          </AvatarFallback>
        </Avatar>

        {children}
      </div>

      <div
        className={cn('text-xs text-gray-500', {
          hidden: !showDate,
        })}
      >
        {date}d
      </div>
    </div>
  );
};
export default NotificationCard;
