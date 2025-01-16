export interface SitemapRewrite {
    source: string;
    destination: string;
}

export interface SitemapPaths {
    [key: string]: string;
}

export interface Locale {
    name: string;
    path: string;
    langcode: string;
}

export interface Languages {
    defaultLocale: string;
    locales: {
        [key: string]: Locale;
    };
}
