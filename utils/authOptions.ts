import prisma from '@/utils/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),

	pages: {
		signIn: '/'
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Username', type: 'text', placeholder: 'example@gmail.com' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				// Add logic here to look up the user from the credentials supplied

				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials?.email }
				});

				if (!user) {
					return null;
				}

				// compare password
				const match = await bcrypt.compare(credentials.password, user.password);

				if (!match) {
					return null;
				}

				return {
					id: `${user.id}`,
					name: user.name,
					email: user.email
				};
			}
		})
	]
};
