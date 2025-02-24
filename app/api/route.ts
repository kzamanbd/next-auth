import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            {
                status: 401,
                success: false,
                message: 'unauthenticated'
            },
            {
                status: 401
            }
        );
    }

    return NextResponse.json({ authenticated: !!session });
}
