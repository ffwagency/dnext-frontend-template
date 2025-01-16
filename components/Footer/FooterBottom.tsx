import Image from "next/image";
import Link from "next/link";
import React from "react";

import drupalLogo from "../../public/drupal_logo.svg";

export const FooterBottom: React.FC = () => {
    return (
        <div className="border-t border-grey py-6">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 flex items-center space-x-2 md:mb-0">
                    <span className="text-sm text-light-grey">Powered by</span>
                    <Link
                        href="https://www.drupal.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                    >
                        <span className="font-semibold text-light">Drupal</span>
                        <Image
                            src={drupalLogo.src}
                            alt="Drupal Logo"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
                <div className="text-white mt-4 text-sm">
                    © {new Date().getFullYear()} JAKALA. All rights reserved.
                </div>
            </div>
        </div>
    );
};
