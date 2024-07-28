'use client';

import { SearchIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { campaigns, users } from '@/constants';
import { closeSearch } from '@/lib/features/search/SearchSlice';
import { useAppDispatch } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Campaign, User } from '@/utils/types/temp';
import CampaignSearchCard from '../cards/CampaignSearchCard';
import UserSearchCard from '../cards/UserSearchCard';
import Separator from '../reusables/Separator';
import SearchResultWrapper from '../wrappers/SearchResultWrapper';

/**
 * Search form
 * @param isSearchOpen whether the search form is open
 * @returns the search form
 */
const SearchForm = ({ isSearchOpen }: { isSearchOpen: boolean }) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const [searchResults, setSearchResults] = useState({
    users: [] as User[],
    campaigns: [] as Campaign[],
  });

  //? Debounce the query to prevent too many API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 0.5 seconds debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  //? Perform the search when the debounced query changes
  useEffect(() => {
    //? If the debounced query is not empty, perform the search
    if (debouncedQuery) {
      const performSearch = (searchQuery: string) => {
        // Implement your search logic here

        setSearchResults(searchForQuery(searchQuery));
      };

      // Call your search function here
      performSearch(debouncedQuery);
    }

    //? If the debounced query is empty, clear the search results
    if (!debouncedQuery) {
      setSearchResults({ users: [], campaigns: [] });
    }
  }, [debouncedQuery]);

  //? Focus on the input when the search form is opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }

    if (!isSearchOpen) {
      // Clear the query when the search form is closed
      setQuery('');
    }
  }, [isSearchOpen]);

  //? Handle the input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //? Function to search for a user or a campaign
  const searchForQuery = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();

    //? Check for user by fullName or username
    const userResults = users.filter((user) => {
      const matchesFullName = user.fullName
        .toLowerCase()
        .includes(lowerCaseQuery);
      const matchesUsername = user.username
        .toLowerCase()
        .includes(lowerCaseQuery);

      return matchesFullName || matchesUsername;
    });

    //? Check for campaign by title
    const campaignResults = campaigns.filter((campaign) => {
      const matchesTitle = campaign.title
        .toLowerCase()
        .includes(lowerCaseQuery);

      return matchesTitle;
    });

    return { users: userResults, campaigns: campaignResults };
  };

  return (
    <div className="w-full">
      {/* //? Search Input */}
      <div className="flex items-center gap-4 px-5">
        <SearchIcon size={20} className="inline-block " strokeWidth={2.4} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search a campaign or a user"
          className="bg-inherit w-full outline-none h-10 placeholder:text-app-gray-900 placeholder:font-medium font-medium"
          ref={inputRef}
        />
      </div>

      {/* //? Separator */}
      <div
        className={cn('w-full', {
          hidden:
            searchResults.users.length === 0 &&
            searchResults.campaigns.length === 0,
        })}
      >
        <Separator />
      </div>

      {/* //? Search Results */}
      <div
        className={cn(
          'py-2 space-y-3 max-h-[240px] md:max-h-[448px] overflow-hidden overflow-y-auto customScroll',
          {
            hidden:
              searchResults.users.length === 0 &&
              searchResults.campaigns.length === 0,
          }
        )}
      >
        <SearchResultWrapper title="Users" searchResults={searchResults.users}>
          {searchResults.users.map((user) => {
            return (
              <UserSearchCard
                key={user.username}
                user={user}
                onClick={() => dispatch(closeSearch())}
              />
            );
          })}
        </SearchResultWrapper>

        {/* //? Separator */}
        <div
          className={cn('w-full', {
            hidden:
              (searchResults.users.length > 0 &&
                searchResults.campaigns.length === 0) ||
              (searchResults.campaigns.length > 0 &&
                searchResults.users.length === 0),
          })}
        >
          <Separator />
        </div>

        <SearchResultWrapper
          title="Campaigns"
          searchResults={searchResults.campaigns}
        >
          {searchResults.campaigns.map((campaign) => {
            return (
              <CampaignSearchCard
                key={campaign.id}
                campaign={campaign}
                onClick={() => dispatch(closeSearch())}
              />
            );
          })}
        </SearchResultWrapper>
      </div>
    </div>
  );
};

export default SearchForm;
