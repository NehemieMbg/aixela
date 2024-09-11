'use server';

import { getErrorMessage } from '@/utils/functions';
import server from '@/utils/server/server';
import { AuthResponse } from '@/utils/types/authentication';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface SignInRequest {
  email: string;
  password: string;
}

// Error messages for the sign in action
const errorMessages = {
  email: ['Wrong credentials'],
};

/**
 * Sign in with credentials
 * @param request the sign in request
 * @throws error if sign in fails
 *
 */
export const credentialSignInAction = async (request: SignInRequest) => {
  const body = {
    username: request.email,
    password: request.password,
  };

  try {
    const { data }: { data: AuthResponse } = await server.post(
      '/auth/sign-in',
      body
    );

    // Set the access token in a cookie
    cookies().set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // Cookie expiration: 1 day
    });

    redirect('/');
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

export const googleSignInAction = async () => {
  redirect(`${process.env.SERVER_URL}/auth/google-redirect`);
};
