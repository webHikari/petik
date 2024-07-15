/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            bold: ["Geist-Bold", "sans-serif"],
            medium: ["Geist-Medium", "sans-serif"],
            default: ["Geist-Regular", "sans-serif"],
        },
        theme: {
            colors: {
                transparent: "transparent",
                black: "#000",
                white: "#fff",
                gray: {
                    100: "#f7fafc",
                    900: "#1a202c",
                },
            },
        },
        extend: {},
    },
    plugins: [],
};
