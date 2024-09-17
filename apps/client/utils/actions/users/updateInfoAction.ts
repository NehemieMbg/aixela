'use server';

import { accountSchema } from '@/utils/schemas/AccountSchema';
import server from '@/utils/server/server';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';
import { z } from 'zod';

interface Body extends z.infer<typeof accountSchema> {}

export const updateInfoAction = async (values: Body) => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return undefined;

  try {
    const response: AxiosResponse = await server.put(
      '/users/me/update-info',
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    return undefined;
  }
};
