/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
    ],
    safelist: [
        // widths
        'w-full',
        'w-screen',
        'w-auto',
        'max-w-none',
        'max-w-full',
        'max-w-7xl',

        // heights
        'h-auto',
        'h-full',
        'h-screen',
        'h-min',
        'h-max',
        'min-h-screen',
        'max-h-screen',

        // spacing
        'px-4',
        'py-4',
        'py-8',
        'py-12',
        'mx-auto',

        // grid
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
        'grid-rows-1',
        'grid-rows-2',
        'grid-rows-3',
        'gap-0',
        'gap-1',
        'gap-2',
        'gap-3',
        'gap-4',
        'gap-5',
        'gap-6',
        'gap-8',

        // flex
        'flex',
        'flex-row',
        'flex-col',
        'flex-wrap',
        'justify-center',
        'items-center',

        // visibility
        'hidden',
        'md:hidden',
        'lg:hidden',

        // backgrounds
        'bg-cover',
        'bg-center',
        'bg-no-repeat',
        'bg-gray-100',
        'dark:bg-gray-900',

        // borders & rounding
        'rounded',
        'rounded-t',
        'rounded-b',
        'border',
        'border-gray-200',
        'shadow',
        'shadow-lg',

        // cursors
        'cursor-pointer',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [],
};
