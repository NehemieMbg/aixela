'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { setUser } from '@/lib/features/user/userSlice';
import { User } from '@/utils/types/temp';

/**
 * Store provider
 * @param user the user
 * @param children the children components
 * @returns the store provider
 */
export default function StoreProvider({
  user,
  children,
}: {
  user?: User;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Initialize the store if it doesn't exist
    storeRef.current = makeStore();
  }

  // Update the user in the store
  storeRef.current.dispatch(setUser(user || null));

  return <Provider store={storeRef.current}>{children}</Provider>;
}
