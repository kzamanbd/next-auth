import 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            name: string;
            email: string;
            image: string;
            username: string;
            createdAt: string;
            updatedAt: string;
        };
    }
}
