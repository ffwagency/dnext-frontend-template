import type { JsonApiOptions } from "next-drupal";

import { drupal } from "../drupalClient";
import buildDrupalJsonApiParams from "./buildDrupalJsonApiParams";
import type { NextDrupalQuery, NextDrupalResponse } from "./nextDrupalTypes";
import type AllSchemas from "./schema";

export type MapperType<R, T> = (response: R) => T;

export async function getResource<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
>(
    id: string,
    query: Q & { type: T },
    options?: JsonApiOptions & { mapper?: undefined }
): Promise<NextDrupalResponse<T, Q>>;
export async function getResource<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
    MR,
>(
    id: string,
    query: Q & { type: T },
    options?: JsonApiOptions & {
        mapper: MapperType<NextDrupalResponse<T, Q>, MR>;
    }
): Promise<MR>;

export async function getResource<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
    MR,
>(
    id: string,
    query: Q & { type: T },
    options?: JsonApiOptions & {
        mapper?: MapperType<NextDrupalResponse<T, Q>, MR>;
    }
) {
    const apiParams = buildDrupalJsonApiParams(query);
    const { mapper, ...stdOptions } = options ?? {};
    const response = (await drupal.getResource(query.type, id, {
        ...stdOptions,
        params: {
            ...stdOptions.params,
            ...apiParams.getQueryObject(),
        },
    })) as unknown as NextDrupalResponse<T, Q>;

    if (mapper) {
        return mapper(response);
    }

    return response;
}

export async function getResourceByPath<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
>(
    id: string,
    query: Q & { type: T },
    options?: JsonApiOptions & { mapper?: undefined }
): Promise<NextDrupalResponse<T, Q>>;
export async function getResourceByPath<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
    MR,
>(
    id: string,
    query: Q & { type: T },
    options?: JsonApiOptions & {
        mapper: MapperType<NextDrupalResponse<T, Q>, MR>;
    }
): Promise<MR>;

export async function getResourceByPath<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
    MR,
>(
    path: string,
    query: Q & { type: T },
    options?: JsonApiOptions & {
        mapper?: MapperType<NextDrupalResponse<T, Q>, MR>;
    }
) {
    const apiParams = buildDrupalJsonApiParams(query);
    const { mapper, ...stdOptions } = options ?? {};
    const response = (await drupal.getResourceByPath(path, {
        ...stdOptions,
        params: {
            ...stdOptions.params,
            ...apiParams.getQueryObject(),
        },
    })) as unknown as NextDrupalResponse<T, Q>;

    if (mapper) {
        return mapper(response);
    }

    return response;
}
