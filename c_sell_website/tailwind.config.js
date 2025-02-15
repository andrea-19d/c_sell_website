/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                blackOps: ["Black Ops One", "cursive"], 
                exo: ["Exo", "sans-serif"], 
            },
        },
    },
    plugins: [],
};
    