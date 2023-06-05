import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                offWhite: 'hsl(36, 100%, 99%)', 
                softOrange: 'hsl(35, 77%, 62%)',
                softRed: 'hsl(5, 85%, 63%)',
                grayishBlue: 'hsl(233, 8%, 79%)',
                DGB: 'hsl(236, 13%, 42%)',
                VDB: 'hsl(240, 100%, 5%)',
            },
            screens: {
            'Laptop': '1440px',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
