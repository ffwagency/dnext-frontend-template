import "server-only";

import { cache } from "react";
import { removeInternalLinkPrefix } from "utils";

import { env } from "@/config";

import { getResourceByPath } from "../next-drupal/getDrupalData";
import type { NextDrupalQuery } from "../next-drupal/nextDrupalTypes";

const ErrorPageQuery = {
    type: "node--error_page",
    fields: ["title", "body", "field_link"],
    include: {
        field_media: {
            type: "media--image",
            include: {
                field_media_image: {
                    type: "file--file",
                    fields: ["uri"],
                },
            },
        },
    },
} satisfies NextDrupalQuery<"node--error_page">;

async function getNotFound(locale: string) {
    const data = await getResourceByPath("404-page", ErrorPageQuery, {
        locale,
        defaultLocale: env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
        mapper: (response) => {
            return {
                title: response.title,
                text: response.body?.value,
                linkUrl: removeInternalLinkPrefix(response.field_link?.uri),
                linkText: response.field_link?.title,
                pictureUrl: response.field_media.field_media_image.uri?.url,
            };
        },
    });

    return data;
}

export const getNotFoundPage = cache(getNotFound);
