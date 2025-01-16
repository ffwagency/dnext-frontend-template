import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import type { NextDrupalQuery, RelationshipNames } from "@/next-drupal";

import type AllSchemas from "./schema";

function buildDrupalJsonApiParams<T extends keyof AllSchemas>(
    query: NextDrupalQuery<T>
): DrupalJsonApiParams {
    const params = new DrupalJsonApiParams();

    buildDrupalJsonApiParamsInner(query, [], params);

    return params;
}

function buildDrupalJsonApiParamsInner<T extends keyof AllSchemas>(
    query: NextDrupalQuery<T>,
    path: string[],
    params: DrupalJsonApiParams
) {
    const fieldsToAdd: string[] = [];

    if (query.fields) {
        fieldsToAdd.push(...(query.fields as string[]));
    }
    if (query.include) {
        for (const field in query.include) {
            const f: RelationshipNames<T> = field as any;
            fieldsToAdd.push(field);
            const qif = query.include[f] as any;
            if (Array.isArray(qif)) {
                for (const q of qif) {
                    buildDrupalJsonApiParamsInner<any>(
                        q,
                        [...path, field],
                        params
                    );
                }
            } else {
                buildDrupalJsonApiParamsInner<any>(
                    qif,
                    [...path, field],
                    params
                );
            }
        }
    } else if (path.length > 0) {
        params.addInclude([path.join(".")]);
    }

    if (query.fields && query.fields.length > 0) {
        params.addFields(query.type, fieldsToAdd);
    }
}

export default buildDrupalJsonApiParams;
