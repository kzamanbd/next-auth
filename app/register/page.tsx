'use client';

import ApplicationLogo from '@/app/components/shared/ApplicationLogo';
import LoadingSpinner from '@/app/components/shared/LoadingSpinner';
import OtherLoginOption from '@/app/components/shared/OtherLoginOption';
import Link from 'next/link';

import { useState } from 'react';

export default function Register() {
	// local state
	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [registerError, setRegisterError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Password does not match');
			return;
		}
	};

	return (
		<div className="bg-light-gray dark:bg-dark-secondary dark:text-gray-300">
			<div className="flex min-h-screen items-center justify-center p-6">
				<div className="login-bg">
					<div className="rounded-md bg-white p-8 shadow-md">
						<div className="my-4 flex items-center justify-center space-x-2">
							<span className="h-12 w-12">
								<ApplicationLogo />
							</span>
							<span className="dark--text text-3xl font-semibold">RTK Chat</span>
						</div>
						<p className="text-xs text-center text-gray-600">
							Please sign-in to your account and start the adventure
						</p>

						<OtherLoginOption />

						<form className="mt-4" onSubmit={handleSubmit}>
							{registerError && <div className="text-red-500 text-center">{registerError}</div>}
							<label className="block">
								<span className="form-label">Name</span>
								<input
									type="text"
									name="fullName"
									className="form-input"
									placeholder="Name"
									value={fullName}
									required
									onChange={(e) => setFullName(e.target.value)}
								/>
							</label>

							<label className="block mt-3">
								<span className="form-label">Email</span>
								<input
									type="email"
									name="email"
									className="form-input"
									placeholder="Email Address"
									value={username}
									required
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>

							<label className="mt-3 block">
								<span className="form-label">Password</span>
								<input
									type="password"
									name="password"
									className="form-input"
									placeholder="********"
									value={password}
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>

							<label className="mt-3 block">
								<span className="form-label">Confirm Password</span>
								<input
									type="password"
									name="password"
									className="form-input"
									placeholder="********"
									value={confirmPassword}
									required
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</label>

							<div className="mt-6">
								<button type="submit" className="btn btn-primary flex w-full" disabled={isLoading}>
									<span className="mr-2">Sign up</span>
									<LoadingSpinner isLoading={isLoading} />
								</button>
							</div>
						</form>
						<p className="dark--text mt-4">
							Already have an account?
							<Link href="/login" className="text-primary ml-2">
								Sign in here
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
