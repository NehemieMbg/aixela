'use server';

import server from '@/utils/server/server';
import { AxiosError, AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

export const getSubscriptionsAction = async (username: string) => {
  try {
    const accessToken = cookies().get('accessToken')?.value;

    if (!accessToken) throw new Error('Access token not found');

    const response: AxiosResponse = await server.get(
      `/subscriptions/${username}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return {
      status: 'success',
      data: response.data,
    };
  } catch (error: AxiosError | any) {
    return {
      status: 'error',
      data: error.response?.data || error.message,
    };
  }
};

export const getFollowersAction = async (username: string) => {
  try {
    const accessToken = cookies().get('accessToken')?.value;

    const response: AxiosResponse = await server.get(
      `/subscriptions/${username}/followers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken || ''}`,
        },
      }
    );

    return {
      status: 'success',
      data: response.data,
    };
  } catch (error: AxiosError | any) {
    return {
      status: 'error',
      data: error.response?.data || error.message,
    };
  }
};

export const getFollowingsAction = async (username: string) => {
  try {
    const accessToken = cookies().get('accessToken')?.value;

    const response: AxiosResponse = await server.get(
      `/subscriptions/${username}/followings`,
      {
        headers: {
          Authorization: `Bearer ${accessToken || ''}`,
        },
      }
    );

    return {
      status: 'success',
      data: response.data,
    };
  } catch (error: AxiosError | any) {
    return {
      status: 'error',
      data: error.response?.data || error.message,
    };
  }
};
