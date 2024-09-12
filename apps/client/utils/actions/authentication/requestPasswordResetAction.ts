'use server';

import server from '@/utils/server/server';
import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';
import { CurrentUser } from '@/utils/types/authentication';

/**
 * Requests a password reset for the user.
 *
 * @param email - The email of the user.
 * @returns {Promise<string>} - The message from the server.
 */
export const requestPasswordResetAction = async (
  email: string
): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await server.post(
      '/auth/request-password-reset',
      {
        email,
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
