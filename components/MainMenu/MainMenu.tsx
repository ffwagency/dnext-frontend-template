"use client";

import NavItem from "components/MainMenu/NavItem";
import { usePathname } from "next/navigation";
import type { MenuItem } from "types/menu";

interface MainMenuProps {
    items: MenuItem[];
}

const MainMenu: React.FC<MainMenuProps> = ({ items }) => {
    const pathname = usePathname();

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4">
                <ul className="flex items-center justify-center">
                    {items.map((item) => (
                        <NavItem
                            key={item.url}
                            item={item}
                            currentPath={pathname}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default MainMenu;
