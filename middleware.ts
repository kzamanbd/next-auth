import { withAuth } from 'next-auth/middleware';

export const config = {
    matcher: ['/dashboard']
};

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
    callbacks: {
        authorized({ token }) {
            // Return true if the user is allowed to access the page
            return !!token;
        }
    }
});
