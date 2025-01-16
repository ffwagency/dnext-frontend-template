import type AllSchemas from "./schema";

type AttributeNames<T extends keyof AllSchemas> = {
    [A in T]: keyof NonNullable<AllSchemas[A]["attributes"]>;
}[T];

export type RelationshipNames<T extends keyof AllSchemas> = {
    [R in T]: AllSchemas[R] extends { relationships?: unknown }
        ? keyof NonNullable<AllSchemas[R]["relationships"]>
        : never;
}[T];

type Relationships<T extends keyof AllSchemas> = {
    [R in T]: AllSchemas[R] extends { relationships?: unknown }
        ? NonNullable<AllSchemas[R]["relationships"]>
        : never;
}[T];

type Relation<
    T extends keyof AllSchemas,
    R extends RelationshipNames<T>,
> = NonNullable<Relationships<T>[R]>;

type RelationData<T extends keyof AllSchemas, R extends RelationshipNames<T>> =
    Relation<T, R> extends { data?: unknown }
        ? NonNullable<Relation<T, R>["data"]>
        : never;

type AsKeyOfAllSchemas<T extends string> = T extends keyof AllSchemas
    ? T
    : never;

type RelationshipTypeName<
    T extends keyof AllSchemas,
    K extends RelationshipNames<T>,
> = {
    [TT in T]: {
        [KK in K]: AsKeyOfAllSchemas<
            RelationData<TT, KK> extends { type: keyof AllSchemas }
                ? RelationData<TT, KK>["type"]
                : RelationData<TT, KK> extends Array<{ type: keyof AllSchemas }>
                  ? RelationData<TT, KK>[number]["type"]
                  : never
        >;
    }[K];
}[T];

export type IncludeType<T extends keyof AllSchemas> = {
    [K in RelationshipNames<T>]?: RelationData<T, K> extends Array<unknown>
        ? Array<
              {
                  [TT in RelationshipTypeName<T, K>]: NextDrupalQuery<TT>;
              }[RelationshipTypeName<T, K>]
          >
        : NextDrupalQuery<RelationshipTypeName<T, K>>;
};

export type NextDrupalQuery<T extends keyof AllSchemas> = {
    type: T;
    include?: IncludeType<T>;
    fields?: AttributeNames<T>[];
};

type Narrow<INPUT> = INPUT extends []
    ? []
    : INPUT extends object
      ? { [KEY in keyof INPUT]: Narrow<INPUT[KEY]> }
      : INPUT extends string | number | boolean | bigint
        ? INPUT
        : never;

export type NextDrupalResponse<
    T extends keyof AllSchemas,
    Q extends NextDrupalQuery<T>,
> = {
    [F in Narrow<Q["fields"]>[number] &
        keyof NonNullable<AllSchemas[T]["attributes"]>]: NonNullable<
        AllSchemas[T]["attributes"]
    >[F];
} & {
    [R in keyof Q["include"] &
        RelationshipNames<Q["type"]>]: Q["include"][R] extends Array<infer EL>
        ? EL extends { type: keyof AllSchemas }
            ? Array<
                  {
                      [TYPE in EL["type"]]: EL extends NextDrupalQuery<TYPE>
                          ? NextDrupalResponse<TYPE, EL>
                          : never;
                  }[EL["type"]]
              >
            : never
        : Q["include"][R] extends { type: keyof AllSchemas }
          ? NextDrupalResponse<Q["include"][R]["type"], Q["include"][R]>
          : never;
} & {
    type: T;
    id: string;
};
