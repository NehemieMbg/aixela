import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is an OAuth callback
  if (request.nextUrl.pathname.startsWith('/auth/callback')) {
    const token = request.nextUrl.searchParams.get('token');

    // If token exists, create a new response and set the cookie
    if (token) {
      const response = NextResponse.redirect(new URL('/', request.url)); // Redirect to home page

      // Set the token in a cookie
      response.cookies.set('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // Cookie expiration: 1 day
      });

      return response;
    }
  }

  return NextResponse.next(); // Continue with the request if no token
}
