import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const primary = colors.indigo;
const colorConfig = {
    dark: {
        ...colors.slate,
        DEFAULT: '#1F2937'
    },
    white: {
        DEFAULT: '#FFFFFF',
        light: '#E0E6ED'
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
};

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: colorConfig,
            height: {
                sidebar: 'calc(100vh - 70px)'
            },
            fontFamily: {
                sans: ['Inter, Helvetica, "sans-serif"', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [forms, typography, aspectRatio]
};
export default config;
