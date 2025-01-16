// List of tags taken from an actual JSON:API response
const metatag = [
    {
        tag: "meta",
        attributes: {
            name: "title",
            content: "home | drupal-next",
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "description",
            content: "test home",
        },
    },
    {
        tag: "link",
        attributes: {
            rel: "canonical",
            href: "http://localhost:3000/en/home",
        },
    },
    {
        tag: "meta",
        attributes: {
            property: "og:title",
            content: "OpenGraph Title: home",
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "twitter:card",
            content: "summary",
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "twitter:description",
            content: "Twitter Description: home",
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "twitter:title",
            content: "Twitter Card Title: home",
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "@type",
            content: "Article",
            group: "schema_article",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "headline",
            content: "Schema.Org: Article Headline",
            group: "schema_article",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "name",
            content: "Schema.Org: Article name",
            group: "schema_article",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "about",
            content: "Schema.Org: Article about",
            group: "schema_article",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "image",
            content: {
                "@type": "ImageObject",
                representativeOfPage: "False",
                url: "http://example.org/Article/image.jpg",
                width: "100",
                height: "200",
            },
            group: "schema_article",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "@type",
            content: "WebSite",
            group: "schema_web_site",
            schema_metatag: true,
        },
    },
    {
        tag: "meta",
        attributes: {
            name: "name",
            content: "Headless Drupal (website name)",
            group: "schema_web_site",
            schema_metatag: true,
        },
    },
];

export default metatag;
