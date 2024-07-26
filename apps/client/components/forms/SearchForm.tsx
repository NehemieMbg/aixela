'use client';

import { SearchIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { users, campaigns } from '@/constants';
import { Campaign, User } from '@/utils/types/temp';
import { cn } from '@/lib/utils';

const SearchForm = ({ isSearchOpen }: { isSearchOpen: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const [searchResults, setSearchResults] = useState({
    users: [] as User[],
    campaigns: [] as Campaign[],
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 0.5 seconds debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      const performSearch = (searchQuery: string) => {
        // Implement your search logic here

        console.log('Searching for:', searchForQuery(searchQuery));

        console.log('Searching for:', searchQuery);
      };

      // Call your search function here
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }

    if (!isSearchOpen) {
      // Clear the query when the search form is closed
      setQuery('');
    }
  }, [isSearchOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Function to search for a user or a campaign
  const searchForQuery = (query: string) => {
    // Check for user by fullName or username
    const userResults = users.filter(
      (user) =>
        user.fullName.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );

    // Check for campaign by title
    const campaignResults = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(query.toLowerCase())
    );

    return { users: userResults, campaigns: campaignResults };
  };

  return (
    <div className="w-full space-y-1">
      <div className="flex items-center gap-4 pl-2.5">
        <SearchIcon size={20} className="inline-block " strokeWidth={2} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search a campaign or a user"
          className="bg-inherit w-full outline-none h-10 placeholder:text-app-gray-300 placeholder:font-normal font-medium"
          ref={inputRef}
        />
      </div>

      <div
        className={cn('h-[0.1px] w-full bg-app-gray-900', {
          hidden:
            searchResults.campaigns.length === 0 ||
            searchResults.users.length === 0,
        })}
      />

      <div></div>
    </div>
  );
};

export default SearchForm;
