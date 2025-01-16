import type { FC } from "react";
import React from "react";

export interface TagsProps {
    items: {
        id: string;
        name: string;
    }[];
}

export const Tags: FC<TagsProps> = ({ items }) => {
    return (
        <div className="container-narrow my-16 flex items-center rounded bg-lightest-grey p-8">
            <div className="text-xl text-grey">Tags:</div>
            <div className="flex flex-wrap gap-2 px-5">
                {items.map((tag, i) => {
                    return (
                        <span
                            key={tag.id}
                            className="cursor-pointer rounded-full text-xl text-primary-light"
                        >
                            {tag.name}
                            {i < items.length - 1 && ", "}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
