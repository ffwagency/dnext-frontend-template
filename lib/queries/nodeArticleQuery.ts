import type {
    NextDrupalQuery,
    NextDrupalResponse,
} from "lib/next-drupal/nextDrupalTypes";

export const nodeArticleQuery = {
    type: "node--article",
    fields: ["body", "title", "created"],
    include: {
        field_image: {
            type: "file--file",
            fields: ["image_style_uri"],
        },
        uid: {
            type: "user--user",
            fields: ["display_name"],
        },
        field_tags: [
            {
                type: "taxonomy_term--tags",
                fields: ["name"],
            },
        ],
    },
} satisfies NextDrupalQuery<"node--article">;

export type NodeArticleType = NextDrupalResponse<
    "node--article",
    typeof nodeArticleQuery
>;
