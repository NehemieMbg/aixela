import { User } from '@/utils/types/temp';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

/**
 * User search card
 * @param user the user object
 * @param onClick the function to run when the card is clicked
 * @returns the user search card
 */
const UserSearchCard = ({
  user,
  onClick,
}: {
  user: User;
  onClick: () => void;
}) => {
  return (
    <Link
      href={`/${user.username}`}
      onClick={onClick}
      className="flex items-center gap-4 hover:bg-app-gray-250 px-3 py-2 rounded-lg transition-colors duration-200"
    >
      <Avatar className="size-8 ">
        <AvatarImage src={user.avatarUrl} />
        <AvatarFallback>
          <Skeleton />
        </AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-2 text-sm font-medium">
        <div className="font-semibold">{user.fullName}</div>
        <div>•</div>
        <div className="text-app-gray-300">@{user.username}</div>
      </div>
    </Link>
  );
};
export default UserSearchCard;
