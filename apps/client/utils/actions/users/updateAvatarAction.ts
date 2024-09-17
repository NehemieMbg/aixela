'use server';

import server from '@/utils/server/server';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

/**
 * Updates the user's avatar.
 *
 * @param {FormData} formData - The form data containing the avatar image file.
 * @returns {Promise<any>} - The response data from the server or undefined if an error occurs.
 */
export const updateAvatarAction = async (formData: FormData) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse = await server.put(
      '/users/me/avatar',
      formData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    return undefined;
  }
};

/**
 * Deletes the user's avatar.
 *
 * @returns {Promise<any>} - The response data from the server or undefined if an error occurs.
 */
export const deleteAvatarAction = async () => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse = await server.delete('/users/me/avatar', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
    return undefined;
  }
};
