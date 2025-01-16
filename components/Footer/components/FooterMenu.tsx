import Link from "next/link";
import React from "react";
import type { MenuItem } from "types/menu";

interface FooterMenuProps {
    links: MenuItem[];
}

export const FooterMenu: React.FC<FooterMenuProps> = ({ links }) => {
    return (
        <nav className="mt-6" aria-labelledby="footer-menu" role="navigation">
            <ul className="flex flex-col space-y-2">
                {links.map((link) => (
                    <li key={link.id} className="footer-menu-link">
                        <Link
                            href={link.url}
                            className="inline-block text-sm text-light-grey transition-colors"
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
