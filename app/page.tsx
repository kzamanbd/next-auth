import Link from 'next/link';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Home = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        return redirect('/dashboard');
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <Link href="/login" className="btn btn-primary">
                Login
            </Link>
            <Link href="/register" className="btn btn-light">
                Register
            </Link>
        </div>
    );
};

export default Home;
