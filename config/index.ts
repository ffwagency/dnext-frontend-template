import localFont from "next/font/local";

import type { Languages } from "./types";
import env from "./env";

export const LANGUAGES: Languages = {
    defaultLocale: env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    locales: {
        en: {
            name: "English",
            path: "/en",
            langcode: "en",
        },
        de: {
            name: "Germany",
            path: "/de",
            langcode: "de",
        },
        fr: {
            name: "French",
            path: "/fr",
            langcode: "fr",
        },
    },
};

export const FONTS = localFont({
    src: [
        {
            path: "../public/fonts/intermarche/INTERMARCHE-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/intermarche/INTERMARCHE-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/intermarche/INTERMARCHE-Demi.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/intermarche/INTERMARCHE-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

export * from "./env";
export { env };
