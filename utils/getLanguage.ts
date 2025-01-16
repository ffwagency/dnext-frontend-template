import { LANGUAGES } from "@/config";

export const getLanguage = (language: string): string => {
    const availableLanguages = Object.keys(LANGUAGES.locales);

    if (availableLanguages.includes(language)) {
        return language;
    }

    return LANGUAGES.defaultLocale;
};
