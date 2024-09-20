'use server';

import server from '@/utils/server/server';
import { AxiosResponse } from 'axios';

export const getUserAction = async (username: string) => {
  if (!username) return undefined;

  try {
    const response: AxiosResponse = await server.get(`/users/${username}`);

    return response.data;
  } catch (error: any) {
    return undefined;
  }
};
