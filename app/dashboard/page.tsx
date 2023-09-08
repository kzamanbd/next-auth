import UserInfo from '@/components/UserInfo';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export const metadata = {
	title: 'Dashboard'
};

const Dashboard = async () => {
	const session = await getServerSession(authOptions);

	console.log(session);

	return (
		<div>
			<h2 className="text-2xl">Server Session</h2>
			<div>{JSON.stringify(session)}</div>

			<h2 className="text-2xl">Client Session</h2>

			<UserInfo />
		</div>
	);
};

export default Dashboard;
