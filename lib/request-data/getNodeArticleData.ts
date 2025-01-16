import { env } from "process";

import { getResource } from "@/next-drupal";
import { nodeArticleQuery } from "@/queries";

export const getNodeArticleData = async (id: string, lang: string) => {
    const nodeArticleData = await getResource(id, nodeArticleQuery, {
        locale: lang,
        defaultLocale: env.NEXT_PUBLIC_DEFAULT_LANGUAGE!,
    });

    return nodeArticleData;
};
