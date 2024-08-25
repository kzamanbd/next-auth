import { authOptions } from '@/utils/authOptions';
import LoginForm from './LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Login'
};

const Login = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/dashboard');
    }
    return <LoginForm />;
};

export default Login;
