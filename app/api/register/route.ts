import prisma from '@/utils/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: any) {
    const { name, email, password } = await req.json();

    try {
        // check user already exists
        const existUser = await prisma.user.findMany({
            where: {
                OR: [{ email }]
            }
        });

        if (existUser.length > 0) {
            return NextResponse.json(
                {
                    message: 'User already exists'
                },
                { status: 400 }
            );
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return NextResponse.json({
            user,
            message: 'User created successfully'
        });
    } catch (error: any) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
