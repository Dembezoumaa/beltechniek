import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  // Als iemand binnenkomt ZONDER www, stuur ze naar MET www
  if (hostname === 'beltechniekbv.nl') {
    return NextResponse.redirect(`https://www.beltechniekbv.nl${url.pathname}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match alle paden behalve voor:
     * - api routes
     * - static files (css, js, images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}