'use server';

import { emailSchema } from '@/utils/schemas/AccountSchema';
import { confirmEmailSchema } from '@/utils/schemas/confirmEmailSchema';
import server from '@/utils/server/server';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';
import { z } from 'zod';

interface Body extends z.infer<typeof confirmEmailSchema> {}

export const confirmEmailAction = async (body: Body) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse = await server.post(
      '/users/me/email/confirm',
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(response.data);
    return {
      status: 'success',
      message: response.data.message,
    };
  } catch (error: any) {
    console.log(error.response.data);
    return {
      status: 'error',
      message: error.response.data.message,
    };
  }
};
