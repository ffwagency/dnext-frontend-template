import { drupal } from "lib/drupalClient";
import { draftMode } from "next/headers";
import { JsonApiErrors } from "next-drupal";
import { handleJsonApiError } from "utils";
import { env } from "@/config";
import { cache } from "react";

const getDrupalNode = async (locale: string, path: string) => {
    try {
        const draftNode = await draftMode();

        const node = await drupal.getResourceByPath(path, {
            params: {
                resourceVersion: draftNode.isEnabled ?? "draft",
            },
            locale,
            defaultLocale: env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
        });

        if (draftNode.isEnabled && node.status === false) {
            draftNode.disable();
        }

        return node;
    } catch (error) {
        if (error instanceof JsonApiErrors) {
            handleJsonApiError(error);
        }

        throw error;
    }
};

export const getPageData = cache(getDrupalNode);
