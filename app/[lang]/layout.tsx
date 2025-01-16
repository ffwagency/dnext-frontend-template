import "../globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { FONTS } from "@/config";
import { getLanguage } from "@/utils";

export const metadata: Metadata = {
    title: "Dnext",
    description: "The best way to build Drupal headless website!",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function LanguageLayout(
    props: Readonly<{
        children: ReactNode;
        params: { lang: string };
    }>
) {
    const { lang } = await props.params;

    return (
        <html lang={getLanguage(lang)}>
            <body className={FONTS.className}>{props.children}</body>
        </html>
    );
}
