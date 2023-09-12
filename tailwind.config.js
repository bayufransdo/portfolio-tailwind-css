/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#14b8a6",
                secondary: "#64748b",
                dark: "#0f172a",
                whiteBlur: "rgba(255,255,255,0.6)",
                darkBlur: "rgba(15, 23, 42, 0.6)",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },
    plugins: [],
};
