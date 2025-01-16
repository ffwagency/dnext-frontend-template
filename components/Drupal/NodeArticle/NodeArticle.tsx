import { BaseImage } from "components/BaseImage/BaseImage";
import { Description } from "components/Description/Description";
import { MetaInfo } from "components/MetaInfo/MetaInfo";
import { Tags } from "components/Tags/Tags";
import { Title } from "components/Title/Title";
import type { DrupalTranslatedPath } from "next-drupal";
import type { FC } from "react";
import React from "react";

import { getNodeArticleData } from "../../../lib/request-data/getNodeArticleData";

export interface NodeArticleProps {
    translatedPath: DrupalTranslatedPath;
    lang: string;
}

export const NodeArticle: FC<NodeArticleProps> = async ({
    translatedPath,
    lang,
}) => {
    const pageData = await getNodeArticleData(translatedPath.entity.uuid, lang);

    return (
        <>
            {pageData.title && <Title text={pageData.title} />}
            {pageData.uid.display_name && pageData.created && (
                <MetaInfo
                    name={pageData.uid.display_name as unknown as string}
                    date={pageData.created}
                />
            )}
            {pageData.field_image.image_style_uri?.webp && (
                <BaseImage
                    src={pageData?.field_image.image_style_uri?.webp as string}
                />
            )}
            {pageData.body?.value && (
                <Description text={pageData.body?.value} />
            )}
            {pageData.field_tags?.length > 0 && (
                <Tags items={pageData.field_tags} />
            )}
        </>
    );
};
