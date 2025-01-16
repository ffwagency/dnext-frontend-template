import Image from "next/image";
import type { FC } from "react";
import React from "react";

export type BaseImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
};

export const BaseImage: FC<BaseImageProps> = ({
    src,
    alt = "Decorative image",
    width = 500,
    height = 500,
    priority = false,
    className = "my-16 h-auto w-full rounded-lg shadow-lg",
}: BaseImageProps) => {
    return (
        <div className="relative" role="img" aria-label={alt}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className={className}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                loading={priority ? "eager" : "lazy"}
            />
        </div>
    );
};
