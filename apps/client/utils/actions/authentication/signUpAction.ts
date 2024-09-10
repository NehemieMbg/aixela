'use server';

import { getErrorMessage } from '@/utils/functions';
import server from '@/utils/server/server';
import { AuthResponse } from '@/utils/types/authentication';
import { cookies } from 'next/headers';

interface SignUpDto {
  fullName: string;
  email: string;
  password: string;
}

// Error messages for the sign up action
const errorMessages = {
  email: ['User already exists'],
};

/**
 * Sign in with credentials
 * @param request the sign in request
 * @throws error if sign in fails
 *
 */
export const signUpAction = async (request: SignUpDto) => {
  const body = {
    fullName: request.fullName,
    username: request.email,
    password: request.password,
  };

  try {
    const { data }: { data: AuthResponse } = await server.post(
      '/auth/sign-up',
      body
    );

    // Set the access token in a cookie
    cookies().set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // Cookie expiration: 1 day
    });
  } catch (error: any) {
    const errorObject = error.response?.data as {
      message: string;
      statusCode: number;
      error: string;
    };

    return {
      email: getErrorMessage(errorObject?.message, errorMessages.email),
    };
  }
};
