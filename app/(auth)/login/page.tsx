'use client';

import ApplicationLogo from '@/components/shared/ApplicationLogo';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import OtherLoginOption from '@/components/shared/OtherLoginOption';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('kzamanbn@gmail.com');
    const [password, setPassword] = useState('password');
    const [loginError, setLoginError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('login');
        setIsLoading(true);

        const result = await signIn('credentials', {
            redirect: false,
            email: username,
            password: password
        });

        if (result?.error) {
            setLoginError(result.error);
        } else {
            setLoginError('');
            router.push('/dashboard');
        }

        console.log(result);
        setIsLoading(false);
    };

    return (
        <div className="bg-light dark:bg-dark-700 dark:text-gray-300">
            <div className="flex min-h-screen items-center justify-center p-6">
                <div className="login-bg">
                    <div className="rounded-md bg-white px-8 py-6 shadow-md">
                        <div className="my-4 flex items-center justify-center space-x-2">
                            <span className="h-12 w-12">
                                <ApplicationLogo />
                            </span>
                            <p className="dark--text text-3xl font-semibold">
                                Next <span className="text-primary">Auth</span>
                            </p>
                        </div>
                        <div className="my-3">
                            <p className="dark--text mb-2 text-2xl font-semibold">Welcome to NextAuth</p>
                            <p className="text-xs text-gray-600">
                                Please sign-in to your account and start the adventure
                            </p>
                        </div>

                        <OtherLoginOption />

                        <form className="mt-4" onSubmit={handleSubmit}>
                            {loginError && <div className="text-red-500 text-center">{loginError}</div>}
                            <label className="block">
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

                            <div className="mt-4 flex items-center justify-between">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="remember" className="form-checkbox" />
                                    <span className="dark--text mx-2 text-sm">Remember me</span>
                                </label>

                                <a
                                    className="block text-sm text-primary-600 hover:underline"
                                    href="/auth-forgot-password.html">
                                    Forgot your password?
                                </a>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="btn btn-primary flex w-full" disabled={isLoading}>
                                    <span className="mr-2">Sign in to your account</span>
                                    <LoadingSpinner isLoading={isLoading} />
                                </button>
                            </div>
                        </form>
                        <p className="dark--text mt-4">
                            Don’t have an account yet?
                            <Link href="/register" className="text-primary ml-2">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
