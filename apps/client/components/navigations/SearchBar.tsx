import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="lg:max-w-[400px] lg:w-full size-8  lg:h-9 mx-auto overflow-hidden">
      <button className="flex items-center justify-center gap-1 bg-app-gray-250 h-full w-full outline-none rounded-full lg:px-10 text-sm hover:bg-app-gray-highlight-2 transition-colors duration-200 space-x-2">
        <Search className="size-3.5 lg:size-4" strokeWidth={2} />
        <span className="max-lg:hidden">Search a campaign or a creator</span>
      </button>
    </div>
  );
};
export default SearchBar;
