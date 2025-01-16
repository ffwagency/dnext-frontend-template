import parseMetadata from "./parseMetadata";
import metatagMock from "./mocks/metatag.mock";

describe("parseMetadata", () => {
    it("should be a function", () => {
        expect(parseMetadata).toBeInstanceOf(Function);
    });

    it("should parse list of tags", () => {
        const { metadata, schemaOrg } = parseMetadata(metatagMock);

        expect(metadata).toEqual({
            title: "home | drupal-next",
            description: "test home",
            alternates: { canonical: "http://localhost:3000/en/home" },
            openGraph: { title: "OpenGraph Title: home" },
            twitter: {
                card: "summary",
                description: "Twitter Description: home",
                title: "Twitter Card Title: home",
            },
        });
        expect(schemaOrg).toEqual([
            {
                "@type": "Article",
                headline: "Schema.Org: Article Headline",
                name: "Schema.Org: Article name",
                about: "Schema.Org: Article about",
                image: {
                    "@type": "ImageObject",
                    representativeOfPage: "False",
                    url: "http://example.org/Article/image.jpg",
                    width: "100",
                    height: "200",
                },
            },
            { "@type": "WebSite", name: "Headless Drupal (website name)" },
        ]);
    });

    it("should handle missing tags gracefully", () => {
        const { metadata, schemaOrg } = parseMetadata(undefined);
        expect(metadata).toEqual({});
        expect(schemaOrg).toEqual([]);
    });
});
