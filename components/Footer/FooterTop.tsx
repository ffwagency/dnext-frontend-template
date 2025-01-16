import Link from "next/link";
import React from "react";
import type { MenuItem } from "types/menu";

interface FooterTopProps {
    menuItems: MenuItem[];
}

export const FooterTop: React.FC<FooterTopProps> = ({ menuItems }) => {
    return (
        <nav className="py-8" aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-start gap-x-8 gap-y-4">
                {menuItems.map((item) => (
                    <li key={item.id} className="text-center">
                        <Link
                            href={item.url}
                            className="text-sm font-semibold text-light transition-colors"
                        >
                            {item.title}
                        </Link>
                        {item.items && item.items.length > 0 && (
                            <ul className="mt-2 space-y-2">
                                {item.items.map((subItem) => (
                                    <li key={subItem.id}>
                                        <Link
                                            href={subItem.url}
                                            className="text-xs text-light-grey transition-colors"
                                        >
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
