'use server';

import { passwordSchema } from '@/utils/schemas/AccountSchema';
import server from '@/utils/server/server';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';
import { z } from 'zod';

interface Body extends z.infer<typeof passwordSchema> {}

export const updatePasswordAction = async (values: Body) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse = await server.put(
      '/users/me/password',
      {
        password: values.password,
        newPassword: values.newPassword,
      },
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
