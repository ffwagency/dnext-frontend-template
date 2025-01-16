import { Footer } from "components/Footer/Footer";
import { drupal } from "lib/drupalClient";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { transformMenuItems } from "utils/menuTransform";

import { Header, SchemaOrg } from "@/components";
import { getPageMetadata } from "@/lib";
import { validateLocaleAndConstructPath } from "@/utils";

export async function generateMetadata(
    props: Readonly<{
        params: { lang: string; slug: string[] };
    }>
): Promise<Metadata> {
    const { lang, slug } = await props.params;

    const path = validateLocaleAndConstructPath(lang, slug);
    const { metadata } = await getPageMetadata(lang, path);

    return metadata;
}

export default async function PageLayout(
    props: Readonly<{
        children: ReactNode;
        params: { lang: string; slug: string[] };
    }>
) {
    const { lang, slug } = await props.params;

    const path = validateLocaleAndConstructPath(lang, slug);
    const { items } = await drupal.getMenu("main", {
        defaultLocale: "en-US",
        locale: lang,
    });

    const transformedItems = transformMenuItems(items);

    return (
        <>
            <SchemaOrg locale={lang} path={path} />
            <Header menuItems={transformedItems} />
            <main className="flex-auto" role="main">
                {props.children}
            </main>
            <Footer lang={lang} />
        </>
    );
}
