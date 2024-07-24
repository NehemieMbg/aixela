import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import Link from 'next/link';

/**
 * Notification card component
 * @param avatarUrl - the URL of the avatar
 * @param date - the date of the notification
 * @param showDate - weather to show the date or not
 * @param children - the children of the notification
 * @returns the notification card component
 */
const BackersCard = ({
  avatarUrl,
  date,
  showDate,
  children,
  profileUrl,
}: {
  profileUrl?: string;
  avatarUrl?: string;
  date?: number;
  showDate: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between w-full gap-5 px-4 py-3 bg-inherit hover:bg-app-gray-100 rounded-lg transition-colors duration-200 cursor-default">
      <div className="flex items-center gap-4 w-full">
        <Link href={profileUrl!}>
          <Avatar className="size-10">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        </Link>

        {children}
      </div>
    </div>
  );
};
export default BackersCard;
