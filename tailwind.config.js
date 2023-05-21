const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                hand: ["Corinthia"],
                arslan: ["Arslan", "Sans-serif"],
                hazelnuts: ["Hazelnuts", "Sans-serif"],
                dream_avenue: ["Dream Avenue"],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
