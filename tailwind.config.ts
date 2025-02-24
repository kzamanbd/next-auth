import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import colors, { indigo as primary } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';


const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                dark: {
                    ...colors.slate,
                    DEFAULT: '#1F2937'
                },
                light: '#F5F8FA',
                primary: {
                    ...primary,
                    DEFAULT: primary[500]
                },
                info: {
                    ...colors.indigo,
                    DEFAULT: colors.indigo[500]
                },
                danger: {
                    ...colors.rose,
                    DEFAULT: colors.rose[500]
                },
                success: {
                    ...colors.emerald,
                    DEFAULT: colors.emerald[500]
                },
                warning: {
                    ...colors.amber,
                    DEFAULT: colors.amber[500]
                },
                secondary: {
                    ...colors.gray,
                    DEFAULT: colors.gray[400]
                }
            },
            height: {
                sidebar: 'calc(100vh - 70px)'
            },
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [forms]
};
export default config;
