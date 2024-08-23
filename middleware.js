import { NextResponse, NextRequest } from 'next/server';

export function middleware(NextRequest) {
  const { pathname } = NextRequest.nextUrl;
  const isProtected = pathname.startsWith('/dashboard');
  const isAuthenticated = NextRequest.cookies.get('authenticated');

  if (isProtected && !isAuthenticated) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', NextRequest.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};