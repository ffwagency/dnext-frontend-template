import type { Metadata } from "next";
import handleTag, { type ExtendedMetadata, type SchemaOrg } from "./handleTag";

describe("handleTag", () => {
    let metadata: Metadata;
    let schemaOrg: SchemaOrg;

    beforeEach(() => {
        metadata = {};
        schemaOrg = {};
    });

    it("should be a function", () => {
        expect(handleTag).toBeInstanceOf(Function);
    });

    it("should handle title tag", () => {
        const tag = {
            tag: "meta",
            attributes: {
                name: "title",
                content: "home | drupal-next",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.title).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle description tag", () => {
        const tag = {
            tag: "meta",
            attributes: {
                name: "description",
                content: "test home",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.description).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle cannonical url tag", () => {
        const tag = {
            tag: "link",
            attributes: {
                rel: "canonical",
                href: "http://localhost:3000/en/home",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.alternates?.canonical).toBe(tag.attributes.href);
        expect(schemaOrg).toEqual({});
    });

    it("should handle og:title tags", () => {
        const tag = {
            tag: "meta",
            attributes: {
                property: "og:title",
                content: "OpenGraph Title: home",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.openGraph?.title).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle twitter:title tags", () => {
        const tag = {
            tag: "meta",
            attributes: {
                name: "twitter:title",
                content: "OpenGraph Title: home",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.twitter?.title).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle twitter:description tags", () => {
        const tag = {
            tag: "meta",
            attributes: {
                name: "twitter:description",
                content: "Twitter Description: home",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect(metadata.twitter?.description).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle twitter:card tags", () => {
        const tag = {
            tag: "meta",
            attributes: {
                name: "twitter:card",
                content: "summary",
            },
        };

        handleTag({ metadata, schemaOrg }, tag);

        expect((metadata.twitter as any)?.card).toBe(tag.attributes.content);
        expect(schemaOrg).toEqual({});
    });

    it("should handle schema.org tags", () => {
        const tags = [
            {
                tag: "meta",
                attributes: {
                    name: "@type",
                    content: "Type",
                    group: "group",
                    schema_metatag: true,
                },
            },
            {
                tag: "meta",
                attributes: {
                    name: "prop",
                    content: "value",
                    group: "group",
                    schema_metatag: true,
                },
            },
            {
                tag: "meta",
                attributes: {
                    name: "compositeProp",
                    content: {
                        composite: "Content",
                    },
                    group: "group",
                    schema_metatag: true,
                },
            },
            {
                tag: "meta",
                attributes: {
                    name: "non-schema.org",
                    content: "value",
                    group: "group",
                },
            },
            {
                tag: "meta",
                attributes: {
                    name: "prop",
                    content: "another-value",
                    group: "another_group",
                    schema_metatag: true,
                },
            },
        ];

        for (const tag of tags) {
            handleTag({ metadata, schemaOrg }, tag);
        }

        expect(schemaOrg).toEqual({
            group: {
                "@type": "Type",
                prop: "value",
                compositeProp: {
                    composite: "Content",
                },
            },
            another_group: {
                prop: "another-value",
            },
        });
        expect(metadata).toEqual({});
    });
});
