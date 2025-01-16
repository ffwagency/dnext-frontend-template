import type { FC } from "react";

import { getPageMetadata } from "@/lib";

type Props = {
    locale: string;
    path: string;
};

const SchemaOrg: FC<Props> = async ({ locale, path }) => {
    const { schemaOrg } = await getPageMetadata(locale, path);
    const jsonLd =
        schemaOrg.length > 0
            ? {
                  "@context": "https://schema.org",
                  "@graph": schemaOrg,
              }
            : undefined;

    return (
        jsonLd && (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd, null, 2),
                }}
            />
        )
    );
};

export default SchemaOrg;
