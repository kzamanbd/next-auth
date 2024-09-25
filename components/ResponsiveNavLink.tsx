'use client';

import Link, { LinkProps } from 'next/link';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: LinkProps & { active?: boolean; children: React.ReactNode; className?: string; method?: string }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-primary-400 text-primary-700 bg-primary-50 focus:text-primary-800 focus:bg-primary-100 focus:border-primary-700'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}>
            {children}
        </Link>
    );
}
