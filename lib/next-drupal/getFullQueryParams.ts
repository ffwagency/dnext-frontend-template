import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import relationships from "out/relationships.json";
import type AllSchemas from "out/schema";

import buildIncludes from "./buildIncludes";

function getFullQueryParams(resourceType: keyof AllSchemas, maxDepth = 2) {
    const params = new DrupalJsonApiParams();
    const includes = buildIncludes(resourceType, relationships, maxDepth);

    params.addInclude(includes);

    return params;
}

export default getFullQueryParams;
