'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { useAppDispatch } from '@/lib/hooks';
import { User } from '@/utils/types/temp';
import { ChangeEvent, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { UserRoundPen } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * AvatarForm component
 * @param user - The user object
 * @returns The AvatarForm component
 */
const AvatarForm = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleAvatarUpdate = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="relative rounded-full overflow-hidden group">
        <Label htmlFor="avatar" className="cursor-pointer">
          <Avatar className="size-20">
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>

          <div
            className={cn(
              'absolute top-0 left-0 right-0 bottom-0 size-full z-[10] flex items-center justify-center text-white bg-app-gray-300 bg-opacity-20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full overflow-hidden'
            )}
          >
            <UserRoundPen strokeWidth={1.4} />
          </div>
        </Label>

        <Input
          onChange={handleAvatarUpdate}
          id="avatar"
          type="file"
          className="hidden"
          accept="image/*"
        />
      </div>
      <button className="text-app-gray-900 text-sm font-medium py-2.5 px-3.5">
        Delete
      </button>
    </div>
  );
};
export default AvatarForm;
