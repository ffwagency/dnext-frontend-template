import type { FC } from "react";
import React from "react";

export interface TitleProps {
    text: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
    return <h1 className="my-16 text-6xl font-bold tracking-wide">{text}</h1>;
};
