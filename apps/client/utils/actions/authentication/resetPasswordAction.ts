'use server';

import server from '@/utils/server/server';
import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';
import { CurrentUser } from '@/utils/types/authentication';

/**
 * Resets the user's password.
 *
 * @param password - The new password.
 * @returns {Promise<string>} - The message from the server.
 */
export const resetPasswordAction = async (
  password: string
): Promise<string | void> => {
  const resetToken = cookies().get('resetToken');

  if (!resetToken?.value) {
    throw new Error('Reset token not found');
  }

  try {
    await server.put(
      '/auth/reset-password',
      {
        resetToken: resetToken.value,
        newPassword: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resetToken.value}`,
        },
      }
    );

    cookies().delete('resetToken');
  } catch (error: any) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
