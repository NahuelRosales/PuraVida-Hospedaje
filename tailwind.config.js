/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3B7AA7",
                primaryHover: "#4f84ab",
                primaryFocus: "#2a71a3",
                secondary: "#8CBCD1",
                action: "#302DC4",
                text: "#173144",
                instagram: "#e4405f",
                facebook: "#3b5999",
            },
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
        },
    },
    plugins: [],
};
