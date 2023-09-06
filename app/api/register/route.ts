import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
	const { name, email, password } = await req.json();

	try {
		// check user already exists
		const existUser = await prisma.user.findMany({
			where: {
				OR: [{ email }]
			}
		});

		if (existUser.length > 0) {
			return NextResponse.redirect('/register');
		}

		const user = await prisma.user.create({
			data: {
				name,
				email,
				password
			}
		});

		return NextResponse.redirect('/login');
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				error: 'Something went wrong'
			},
			{ status: 500 }
		);
	}
}
