export type RelationshipsType = Record<string, Record<string, string[]>>;

function buildIncludes(
    resourceType: string,
    relationships: RelationshipsType,
    maxDepth?: number
) {
    function buildIncludesInner(resourceTypeInner: string, path: string[]) {
        const relationship = relationships[resourceTypeInner];
        const directRelationships = Object.keys(relationship);
        const expanded: string[] = [];

        for (const relationshipName of directRelationships) {
            const subPath = [...path, relationshipName];

            expanded.push(subPath.join("."));

            if (!maxDepth || subPath.length < maxDepth) {
                for (const subResourcetype of relationship[relationshipName]) {
                    expanded.push(
                        ...buildIncludesInner(subResourcetype, subPath)
                    );
                }
            }
        }

        return expanded;
    }

    return buildIncludesInner(resourceType, []);
}

export default buildIncludes;
