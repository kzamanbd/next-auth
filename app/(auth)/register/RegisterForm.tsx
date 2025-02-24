'use client';

import ApplicationLogo from '@/components/shared/ApplicationLogo';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import OtherLoginOption from '@/components/shared/OtherLoginOption';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export const RegisterForm = () => {
    // local state
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post('/api/register', {
                name: fullName,
                email: username,
                password: password
            });
            setSuccessMessage(response.data.message);
            setIsLoading(false);
            // reset form
            setFullName('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setRegisterError('Something went wrong');
            setIsLoading(false);
        }
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
                            <p className="text-default text-3xl font-semibold">
                                Next <span className="text-primary">Auth</span>
                            </p>
                        </div>
                        <div className="my-3">
                            <p className="text-xs text-gray-600">
                                Please sign-in to your account and start the adventure
                            </p>
                        </div>

                        <OtherLoginOption />

                        <form className="mt-4" onSubmit={handleSubmit}>
                            {registerError && <div className="text-red-500 text-center">{registerError}</div>}
                            {successMessage && <div className="text-green-500 text-center">{successMessage}</div>}
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
                        <p className="text-default mt-4">
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
};

export default RegisterForm;
