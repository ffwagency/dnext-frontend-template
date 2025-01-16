import { env } from "process";

import { getResource } from "@/next-drupal";
import { nodePageQuery } from "@/queries";

export const getNodePageData = async (id: string, lang: string) => {
    const nodePageData = await getResource(id, nodePageQuery, {
        locale: lang,
        defaultLocale: env.NEXT_PUBLIC_DEFAULT_LANGUAGE!,
    });

    return nodePageData;
};
