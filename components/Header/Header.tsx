import MainMenu from "components/MainMenu/MainMenu";
import Link from "next/link";
import type { MenuItem } from "types/menu";

interface HeaderProps {
    menuItems: MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
    return (
        <header className="bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-white">
                            Dnext
                        </Link>
                    </div>
                    <nav className="grow">
                        <MainMenu items={menuItems} />
                    </nav>
                </div>
            </div>
        </header>
    );
};
