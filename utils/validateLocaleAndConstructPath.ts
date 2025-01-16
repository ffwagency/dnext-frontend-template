import { notFound } from "next/navigation";

import { LANGUAGES } from "@/config";

export const validateLocaleAndConstructPath = (
    lang: string,
    slug: string[]
): string => {
    const path = `/${slug.join("/")}`;
    if (!LANGUAGES.locales[lang]) {
        notFound();
    }
    return path;
};
