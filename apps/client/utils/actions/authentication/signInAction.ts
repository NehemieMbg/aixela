'use server';

import server from '@/utils/server/server';

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  id: number;
  username: string;
  accessToken: string;
}

/**
 * Sign in with credentials
 * @param request the sign in request
 * @throws error if sign in fails
 * @returns the sign in response
 */
export const credentialSignInAction = async (
  request: SignInRequest
): Promise<SignInResponse> => {
  const body = {
    username: request.email,
    password: request.password,
  };

  try {
    const { data } = await server.post('/auth/sign-in', body);
    return data;
  } catch (error) {
    throw new Error('Failed to sign in');
  }
};

export const googleSignInAction = async () => {
  try {
    const { data } = await server.get('/auth/google/sign-in');
    return data;
  } catch (error) {
    throw new Error('Failed to sign in with Google');
  }
};
