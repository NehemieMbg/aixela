'use server';

import server from '@/utils/server/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Initiates a request to confirm the email address of the user.
 *
 * @returns {Promise<void>} - The result of the confirmation request.
 */
export const initiateConfirmRequestAction = async (): Promise<void> => {
  const accessToken = cookies().get('accessToken');

  if (!accessToken) return redirect('/sign-in');

  try {
    await server.get('/auth/confirm-email-token', {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });
  } catch (error) {
    return redirect('/sign-in');
  }
};
