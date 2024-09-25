'use server';

import server from '@/utils/server/server';
import { Profile } from '@/utils/types/user';
import { AxiosResponse } from 'axios';

/**
 * The getUserAction function
 * @param username - The username
 * @returns The user object
 */
export const getUserAction = async (
  username: string
): Promise<Profile | null> => {
  if (!username) return null;

  try {
    const response: AxiosResponse = await server.get(`/users/${username}`);

    return response.data;
  } catch (error: any) {
    return null;
  }
};
