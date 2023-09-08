'use client';

import { signOut, useSession } from 'next-auth/react';

const UserInfo = () => {
	const { data: session } = useSession();

	const signOutHandler = () => {
		signOut();
	};

	return (
		<>
			<div>{JSON.stringify(session)}</div>
			<button onClick={signOutHandler} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
				Sign Out
			</button>
		</>
	);
};

export default UserInfo;
