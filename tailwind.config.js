/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,tsx}",
        "./src/**/**/*.{vue,js,ts,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'false',
    plugins:
        [
            require('@tailwindcss/forms'),
            require('preline/plugin')
        ]
}

