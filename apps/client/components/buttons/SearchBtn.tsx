import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { CommandIcon } from 'lucide-react';

/**
 * Search button component
 * @param className the class name
 * @param isCampaignPage whether the page is a campaign page
 * @param isMenuOpen whether the menu is open
 * @param isContributePage whether the page is a contribute page
 * @returns the search button component
 */
const SearchBtn = ({
  className,
  isCampaignPage,
  isMenuOpen,
  isContributePage,
  onClick,
}: {
  className?: string;
  isCampaignPage: boolean;
  isMenuOpen: boolean;
  isContributePage: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-2 h-max bg-inherit px-2.5 py-1.5 transition-colors duration-200 rounded-md text-inherit whitespace-nowrap',
        {
          [`${className}`]: className,
          'hover:bg-app-gray-100': !isCampaignPage,
          'backdrop-opacity-20 hover:bg-app-gray-900 hover:bg-opacity-35':
            isCampaignPage && !isMenuOpen && !isContributePage,
        }
      )}
    >
      <span>Search</span>
      <div className="flex items-center gap-0.5 text-app-gray-highlight-3 max-lg:hidden">
        <CommandIcon size={14} className="inline-block" strokeWidth={2} />
        <span className="text-sm font-medium">K</span>
      </div>
    </Button>
  );
};
export default SearchBtn;
