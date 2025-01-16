import type { FC } from "react";
import React from "react";

export interface DescriptionProps {
    text: string;
}

export const Description: FC<DescriptionProps> = ({ text }) => {
    return (
        <div className="prose prose-lg container-narrow my-16 text-xl tracking-wide text-grey">
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};
