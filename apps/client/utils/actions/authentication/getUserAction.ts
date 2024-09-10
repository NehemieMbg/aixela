'use server';

import server from '@/utils/server/server';
import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';
import { CurrentUser } from '@/utils/types/authentication';

/**
 * Retrieves the current user information using the access token stored in cookies.
 *
 * @returns {Promise<User | null>} - The user information if the access token is valid, otherwise null.
 */
export const getCurrentUserAction = async (): Promise<
  CurrentUser | undefined
> => {
  const accessToken = cookies().get('accessToken');

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse<CurrentUser> = await server.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    // server returns email as username
    return response.data;
  } catch (error) {
    return undefined;
  }
};
