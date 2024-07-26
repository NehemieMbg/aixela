import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { CommandIcon } from 'lucide-react';

const SearchBtn = ({
  className,
  isCampaignPage,
  isMenuOpen,
  isContributePage,
}: {
  className?: string;
  isCampaignPage: boolean;
  isMenuOpen: boolean;
  isContributePage: boolean;
}) => {
  return (
    <Button
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
