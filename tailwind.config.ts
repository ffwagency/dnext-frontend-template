import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "var(--color-primary)",
            "primary-light": "var(--color-primary-light)",
            "primary-lightest": "var(--color-primary-lightest)",
            dark: "var(--color-dark)",
            grey: "var(--color-grey)",
            "light-grey": "var(--color-light-grey)",
            "lightest-grey": "var(--color-lightest-grey)",
            light: "var(--color-light)",
            red: "var(--color-red)",
            gold: "var(--color-gold)",
            green: "var(--color-green)",
            transparent: "transparent",
        },
        screens: {
            xs: "480px",
            md: "768px",
            lg: "1140px",
            xl: "1440px",
            "lg-max": { max: "1139px" },
        },
        extend: {
            boxShadow: {
                default: "10px 10px 50px 3px rgba(39, 92, 141, 0.10)",
            },
            fontFamily: {
                sans: ["Intermarche", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
