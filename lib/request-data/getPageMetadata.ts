import { getPageData } from "lib/request-data/getPageData";
import { cache } from "react";

import { type Metatag, parseMetadata } from "@/utils";

async function getPageMetadata(locale: string, path: string) {
    const pageData = await getPageData(locale, path);
    const metatags = pageData?.metatag as Metatag[];

    return parseMetadata(metatags);
}

export default cache(getPageMetadata);
