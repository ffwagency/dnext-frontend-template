import type { Metadata } from "next";

export type Metatag = {
    tag: string;
    attributes: Record<string, unknown>;
};

export type SchemaOrg = Record<string, Record<string, unknown>>;

export type ExtendedMetadata = {
    metadata: Metadata;
    schemaOrg: SchemaOrg;
};

function handleTag({ metadata, schemaOrg }: ExtendedMetadata, tag: Metatag) {
    if (isSchemaOrgTag(tag)) {
        schemaOrg[tag.attributes.group] = {
            ...schemaOrg[tag.attributes.group],
            [tag.attributes.name]: tag.attributes.content,
        };
        return;
    }

    if (isOpenGraphTag(tag)) {
        const property = tag.attributes.property.substring(3);
        metadata.openGraph = {
            ...metadata.openGraph,
            [property]: tag.attributes.content,
        };
        return;
    }

    if (isTwitterTag(tag)) {
        const name = tag.attributes.name.substring(8);
        metadata.twitter = {
            ...metadata.twitter,
            [name]: tag.attributes.content,
        };
        return;
    }

    if (isKnownMetadataTag(tag)) {
        metadata[tag.attributes.name] = tag.attributes.content;
        return;
    }

    if (
        tag.tag === "link" &&
        tag.attributes.rel === "canonical" &&
        typeof tag.attributes.href === "string"
    ) {
        metadata.alternates = {
            ...metadata.alternates,
            canonical: tag.attributes.href,
        };

        return;
    }
}

/**
 * Several type guards used as helper to improve typesafety and readability
 */

// Whitelist of Metadata properties.
// @TODO expand the list
const knownNextMetadataProps = ["title", "description"] as const;

function isKnownMetadataTag(tag: Metatag): tag is Metatag & {
    tag: "meta";
    attributes: {
        content: string;
        name: (typeof knownNextMetadataProps)[number];
    };
} {
    return (
        tag.tag === "meta" &&
        typeof tag.attributes.content === "string" &&
        typeof tag.attributes.name === "string" &&
        (knownNextMetadataProps as unknown as string[]).includes(
            tag.attributes.name
        )
    );
}

function isSchemaOrgTag(tag: Metatag): tag is Metatag & {
    tag: "meta";
    attributes: {
        content: number | boolean | string | object;
        group: string;
        name: string;
        schema_metatag: true;
    };
} {
    return (
        tag.tag === "meta" &&
        typeof tag.attributes.content !== "undefined" &&
        Boolean(tag.attributes.schema_metatag) &&
        typeof tag.attributes.group === "string" &&
        typeof tag.attributes.name === "string"
    );
}

function isOpenGraphTag(tag: Metatag): tag is Metatag & {
    tag: "meta";
    attributes: {
        property: string;
        content: string;
    };
} {
    return (
        tag.tag === "meta" &&
        typeof tag.attributes.content === "string" &&
        (tag.attributes.property as string)?.startsWith("og:")
    );
}

function isTwitterTag(tag: Metatag): tag is Metatag & {
    tag: "meta";
    attributes: {
        name: string;
        content: string;
    };
} {
    return (
        tag.tag === "meta" &&
        typeof tag.attributes.content === "string" &&
        (tag.attributes.name as string)?.startsWith("twitter:")
    );
}

export default handleTag;
