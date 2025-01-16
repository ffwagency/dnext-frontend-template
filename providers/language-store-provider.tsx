"use client";

import { createContext, type ReactNode, useEffect, useRef } from "react";
import { type StoreApi } from "zustand";

import { LANGUAGES } from "@/config";

import type { LanguageStore, Translation } from "../stores/language-store";
import { createLanguageStore } from "../stores/language-store";

export const LanguageStoreContext =
    createContext<StoreApi<LanguageStore> | null>(null);

export interface LanguageStoreProviderProps {
    children: ReactNode;
    translations?: Translation[];
    initialLocale?: string;
}

export const languageStore = createLanguageStore({
    locale: LANGUAGES.defaultLocale,
    locales: Object.keys(LANGUAGES.locales),
    translations: [],
});

export const LanguageStoreProvider = ({
    children,
    translations,
    initialLocale,
}: LanguageStoreProviderProps): any => {
    const storeRef = useRef<StoreApi<LanguageStore>>();
    if (!storeRef.current) {
        storeRef.current = languageStore;
    }

    useEffect(() => {
        storeRef.current?.getState().setTranslations(translations ?? []);
        storeRef.current
            ?.getState()
            .setLocale(initialLocale ?? LANGUAGES.defaultLocale);
    }, [translations, initialLocale]);

    return (
        <LanguageStoreContext.Provider value={storeRef.current}>
            {children}
        </LanguageStoreContext.Provider>
    );
};
