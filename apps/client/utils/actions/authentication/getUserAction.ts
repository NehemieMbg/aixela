'use server';

import server from '@/utils/server/server';
import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';

interface User {
  userId: number;
  fullName: string;
  email: string;
}

interface Response {
  userId: number;
  fullName: string;
  username: string;
}

/**
 * Retrieves the user information using the access token stored in cookies.
 *
 * @returns {Promise<User | null>} - The user information if the access token is valid, otherwise null.
 */
export const getCurrentUserAction = async (): Promise<User | undefined> => {
  const accessToken = cookies().get('accessToken');

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse<Response> = await server.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    // server returns email as username
    return {
      userId: response.data.userId,
      fullName: response.data.fullName,
      email: response.data.username,
    };
  } catch (error) {
    return undefined;
  }
};
