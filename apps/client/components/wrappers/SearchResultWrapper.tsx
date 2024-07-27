import { cn } from '@/lib/utils';
import { Campaign, User } from '@/utils/types/temp';

/**
 * Search result wrapper
 * @param title the title of the search result
 * @param searchResults the search results
 * @param children the children components
 * @returns the search result wrapper
 */
const SearchResultWrapper = ({
  title,
  searchResults,
  children,
}: {
  title: string;
  searchResults: User[] | Campaign[];
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn('px-1 ', {
        hidden: searchResults.length === 0,
      })}
    >
      <h3 className="font-bold text-xs text-app-gray-300 py-2 px-3">{title}</h3>

      {children}
    </div>
  );
};
export default SearchResultWrapper;
