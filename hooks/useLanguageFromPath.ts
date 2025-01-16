import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useLanguageStore } from "./useLanguageStore";

export const useLanguageFromPath = () => {
    const pathName = usePathname();
    const setLocale = useLanguageStore((state) => state.setLocale);

    useEffect(() => {
        const matchLocaleFromPath = () => {
            const path = pathName.split("/")[1];
            const possibleLocale = path || "en";

            setLocale(possibleLocale);
        };

        matchLocaleFromPath();
    }, [pathName, setLocale]);
};
