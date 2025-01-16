import Link from "next/link";
import React from "react";

import type { MenuItem } from "../../types/menu";

interface DropdownMenuProps {
    items: MenuItem[];
    currentPath: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, currentPath }) => {
    return (
        <div className="absolute left-1/2 z-10 hidden w-max -translate-x-1/2 group-hover:block">
            <div className="bg-white h-4" />
            <div className="relative">
                <div className="absolute left-1/2 top-[-0.3rem] size-0 -translate-x-1/2 border-x-[6px] border-b-[6px] border-x-transparent border-b-primary" />
                <div className="h-1 bg-primary" />
            </div>
            <ul className="bg-white py-2 shadow-lg">
                {items.map((item) => (
                    <li key={item.url}>
                        <Link
                            href={item.url}
                            className={`block whitespace-nowrap px-4 py-2 transition-colors duration-200 ${
                                currentPath === item.url
                                    ? "bg-blue-50 text-primary"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-primary"
                            }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
