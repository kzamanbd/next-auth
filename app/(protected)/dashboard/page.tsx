import UserInfo from '@/components/UserInfo';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export const metadata = {
    title: 'Dashboard'
};

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <h3 className="text-xl font-bold">Authentication Overview</h3>
            <p className="text-sm mb-4">See all available authentication & session information below.</p>
            <pre className="pre-auth">
                <span>Status:</span> Authenticated
            </pre>

            <h4>Server Session</h4>

            <pre className="pre-auth">{JSON.stringify(session)}</pre>

            <h4>Client Session</h4>

            <UserInfo />
        </div>
    );
};

export default Dashboard;
