import type { FC } from "react";
import React from "react";

export interface MetaInfoProps {
    name: string;
    date: number;
}

export const MetaInfo: FC<MetaInfoProps> = ({ name, date }) => {
    return (
        <div className="my-16 text-light-grey">
            By{" "}
            <span className="cursor-pointer font-bold text-primary-light hover:text-primary-lightest">
                {name}
            </span>{" "}
            | {new Date(date).toLocaleDateString()}
        </div>
    );
};
