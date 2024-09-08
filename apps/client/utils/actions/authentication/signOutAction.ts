'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Sign out the user by deleting the access token cookie.
 */
const signOutAction = async () => {
  cookies().delete('accessToken');
  redirect('/sign-in');
};

export default signOutAction;
