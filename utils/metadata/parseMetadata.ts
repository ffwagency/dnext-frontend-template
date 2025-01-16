import handleTag, { type ExtendedMetadata, type Metatag } from "./handleTag";

/**
 * Converts metatag elements received in JSON:API response into nextjs compliant
 * data structures.
 */
function parseMetadata(tags: Metatag[] | undefined) {
    const parsed: ExtendedMetadata = {
        metadata: {},
        schemaOrg: {},
    };

    if (tags) {
        for (const tag of tags) {
            handleTag(parsed, tag);
        }
    }

    return {
        metadata: parsed.metadata,
        schemaOrg: Object.values(parsed.schemaOrg),
    };
}

export default parseMetadata;
