import { FooterBottom } from "components/Footer/FooterBottom";
import { FooterTop } from "components/Footer/FooterTop";
import { drupal } from "lib/drupalClient";
import React from "react";
import type { MenuItem } from "types/menu";
import { transformMenuItems } from "utils/menuTransform";

interface FooterProps {
    lang: string;
}

export const Footer: React.FC<FooterProps> = async ({ lang }) => {
    const { items } = await drupal.getMenu("footer", {
        defaultLocale: "en-US",
        locale: lang,
    });

    const transformedItems: MenuItem[] = transformMenuItems(items);

    return (
        <footer className="bg-dark text-light">
            <div className="container mx-auto px-4">
                <FooterTop menuItems={transformedItems} />
                <FooterBottom />
            </div>
        </footer>
    );
};
