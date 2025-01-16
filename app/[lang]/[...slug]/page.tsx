import { drupal } from "lib/drupalClient";
import { notFound } from "next/navigation";
import React from "react";

import { NodeArticle, NodePage } from "@/components";
import { validateLocaleAndConstructPath } from "@/utils";

type ContentTypeMap = {
    [key: string]: {
        Component: React.FC<{ translatedPath: any; lang: string }>;
    };
};

export default async function Page(props: {
    params: Promise<{ lang: string; slug: string[] }>;
}): Promise<JSX.Element | null> {
    const { lang, slug } = await props.params;

    const path = validateLocaleAndConstructPath(lang, slug);
    const translatedPath = await drupal.translatePath(path);

    if (!translatedPath) {
        notFound();
    }

    const resourceType = translatedPath.jsonapi?.resourceName;
    if (!resourceType) {
        return <code>Missing resource name</code>;
    }

    const contentTypeMap: ContentTypeMap = {
        "node--article": { Component: NodeArticle },
        "node--page": { Component: NodePage },
    };

    const ContentComponent = contentTypeMap[resourceType]?.Component;

    if (!ContentComponent) {
        return <code>Unsupported resource type: {resourceType}</code>;
    }

    return (
        <section className="container mx-auto">
            <ContentComponent translatedPath={translatedPath} lang={lang} />
        </section>
    );
}
