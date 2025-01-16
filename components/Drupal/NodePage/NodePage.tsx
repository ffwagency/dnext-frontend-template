import { BaseImage } from "components/BaseImage/BaseImage";
import { Description } from "components/Description/Description";
import { MetaInfo } from "components/MetaInfo/MetaInfo";
import { Title } from "components/Title/Title";
import type { DrupalTranslatedPath } from "next-drupal";
import type { FC } from "react";
import React from "react";

import { getNodePageData } from "../../../lib/request-data/getNodePageData";

export interface NodePageProps {
    translatedPath: DrupalTranslatedPath;
    lang: string;
}

export const NodePage: FC<NodePageProps> = async ({ translatedPath, lang }) => {
    const pageData = await getNodePageData(translatedPath.entity.uuid, lang);

    return (
        <>
            {pageData.title && <Title text={pageData.title} />}
            {pageData.uid.display_name && pageData.created && (
                <MetaInfo
                    name={pageData.uid.display_name as unknown as string}
                    date={pageData.created}
                />
            )}
            {pageData.body?.value && (
                <Description text={pageData.body?.value} />
            )}
            {pageData.field_basic_page_image.field_media_image.image_style_uri
                ?.webp && (
                <BaseImage
                    src={
                        pageData.field_basic_page_image.field_media_image
                            .image_style_uri?.webp as string
                    }
                />
            )}
        </>
    );
};
