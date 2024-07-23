'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';

/**
 * A bookmark button
 * @returns The bookmark button
 */
const BookmarkBtn = () => {
  const isSaved = false;
  const [tempIsSaved, tempSetIsSaved] = useState(isSaved);

  const handleBookmark = () => {
    tempSetIsSaved((prev) => !prev);
  };

  return (
    <Button
      type="submit"
      onClick={handleBookmark}
      className={cn(
        'hover:backdrop-brightness-75 p-0 px-1 size-[36px] font-medium text-xs rounded-lg bg-app-gray-100 text-app-gray-highlight-3 hover:bg-app-gray-200 transition-all duration-300',
        {}
      )}
    >
      {!tempIsSaved ? ( //! to be replaced with isSubscribed
        <Bookmark className="size-4" strokeWidth={2} />
      ) : (
        <Bookmark className="size-4 fill-inherit" />
      )}
    </Button>
  );
};
export default BookmarkBtn;
