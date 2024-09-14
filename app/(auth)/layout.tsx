import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type Props = {
    children: any;
};

const GuestLayout = async ({ children }: Props) => {
    const session = await getServerSession(authOptions);

    if (session) {
        return redirect('/dashboard');
    }
    return children;
};

export default GuestLayout;
