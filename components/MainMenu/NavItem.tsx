import DropdownMenu from "components/MainMenu/DropdownMenu";
import Link from "next/link";
import type { MenuItem } from "types/menu";

interface NavItemProps {
    item: MenuItem;
    currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ item, currentPath }) => {
    const isActive =
        currentPath === item.url ||
        item.items?.some((subItem) => currentPath === subItem.url);

    return (
        <li className="group relative">
            <Link
                href={item.url}
                className={`block border-b-4 p-4 text-base font-medium transition-colors duration-200 ${
                    isActive
                        ? "border-primary text-primary"
                        : "text-gray-700 border-transparent hover:border-primary hover:text-primary"
                }`}
            >
                {item.title}
            </Link>
            {item.items && item.items.length > 0 && (
                <DropdownMenu items={item.items} currentPath={currentPath} />
            )}
        </li>
    );
};

export default NavItem;
