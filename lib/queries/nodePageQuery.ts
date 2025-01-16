import type {
    NextDrupalQuery,
    NextDrupalResponse,
} from "lib/next-drupal/nextDrupalTypes";

export const nodePageQuery = {
    type: "node--page",
    fields: ["body", "title", "created"],
    include: {
        field_basic_page_image: {
            type: "media--image",
            include: {
                field_media_image: {
                    type: "file--file",
                    fields: ["image_style_uri"],
                },
            },
        },
        uid: {
            type: "user--user",
            fields: ["display_name"],
        },
    },
} satisfies NextDrupalQuery<"node--page">;

export type NodePageType = NextDrupalResponse<
    "node--page",
    typeof nodePageQuery
>;
