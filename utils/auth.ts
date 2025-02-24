import NextAuth from 'next-auth';
import { authOptions } from './authOptions';

export const { auth, handlers, signOut, signIn } = NextAuth(authOptions);