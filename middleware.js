
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Allow access to the captcha page
  if (url.pathname === '/captcha.html' || url.pathname.startsWith('/_next') || url.pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  // If user has not solved captcha, redirect to captcha
  const hasPassed = req.cookies.get('captcha_passed');

  if (!hasPassed) {
    url.pathname = '/captcha.html';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
