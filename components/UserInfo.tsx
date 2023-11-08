"use client";

import { signOut, useSession } from "next-auth/react";

const UserInfo = () => {
	const { data: session } = useSession();

	const signOutHandler = () => {
		signOut();
	};

	return (
		<div className="card">
			<pre className="pre-auth">
				<span>Status:</span> Authenticated
			</pre>
			<pre className="pre-auth">
				<span>Data:</span> {JSON.stringify(session)}
			</pre>
			<button onClick={signOutHandler} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
				Sign Out
			</button>
		</div>
	);
};

export default UserInfo;
