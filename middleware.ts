// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import { authOptions } from './utils/authOptions';

const { auth } = NextAuth(authOptions);

export default auth((req: any) => {
    if (!req.auth) {
        const url = req.url.replace(req.nextUrl.pathname, '/');
        return Response.redirect(url);
    }
});

export const config = { matcher: ['/dashboard/:path*'] };
