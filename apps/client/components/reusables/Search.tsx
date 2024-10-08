'use client';

import useClickOutside from '@/hooks/useClickOutside';
import Backdrop from './Backdrop';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useRef } from 'react';
import { closeSearch, openSearch } from '@/lib/features/search/SearchSlice';
import { cn } from '@/lib/utils';
import SearchForm from '../forms/SearchForm';

/**
 * Search component
 * @returns the search component
 */
const Search = () => {
  const dispatch = useAppDispatch();
  const isSearchOpen = useAppSelector((state) => state.search.isOpen);

  const searchRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(searchRef, () => {
    dispatch(closeSearch());
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        if (!isSearchOpen) {
          dispatch(openSearch());
        }
      } else if (event.key === 'Escape' && isSearchOpen) {
        dispatch(closeSearch());
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen, dispatch]);

  return (
    <>
      <Backdrop isActive={isSearchOpen} zIndex={300} />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 left-0 z-[310] flex md:pt-10 lg:pt-[160px] justify-center md:p-side',
          {
            hidden: !isSearchOpen,
          }
        )}
      >
        <div
          ref={searchRef}
          className="md:max-w-[600px] w-full h-max p-1 bg-white bg-opacity-95 backdrop-blur-md md:rounded-lg shadow-sm "
        >
          <SearchForm isSearchOpen={isSearchOpen} />
        </div>
      </div>
    </>
  );
};
export default Search;
