import { useContext } from "react";
import { useStore } from "zustand";

import { LanguageStoreContext } from "@/providers";
import type { LanguageStore } from "@/stores";

export const useLanguageStore = <T>(
    selector: (store: LanguageStore) => T
): T => {
    const languageStoreContext = useContext(LanguageStoreContext);
    if (!languageStoreContext) {
        throw new Error(
            `useLanguageStore must be used within LanguageStoreProvider`
        );
    }
    return useStore(languageStoreContext, selector);
};
