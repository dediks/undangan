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
            boxShadow: {
                "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
                "t-md": "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "t-lg": "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                "t-xl": "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
                "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                hand: ["Corinthia"],
                arslan: ["Arslan", "Sans-serif"],
                hazelnuts: ["Hazelnuts", "Sans-serif"],
                dream_avenue: ["Dream Avenue"],
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0.0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10.0deg)" },
                    "60%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
            },
            animation: {
                "waving-hand": "wave 2s linear infinite",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
