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

  // check for password reset request and set the token in a cookie
  if (request.nextUrl.pathname.startsWith('/password/reset')) {
    const resetToken = request.nextUrl.searchParams.get('token');

    if (!resetToken) {
      return NextResponse.redirect(new URL('/forgot-password', request.url));
    }

    const response = NextResponse.redirect(
      new URL('/forgot-password/reset', request.url)
    ); // Redirect to home page

    // Set the token in a cookie
    response.cookies.set('resetToken', resetToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  }

  return NextResponse.next(); // Continue with the request if no token
}
