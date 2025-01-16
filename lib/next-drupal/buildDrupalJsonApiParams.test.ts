import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import buildDrupalJsonApiParams from "./buildDrupalJsonApiParams";
import type { NextDrupalQuery } from "./nextDrupalTypes";

describe("buildDrupalJsonApiParams", () => {
    it("paragraph--call_to_action_buttons", () => {
        const query = {
            type: "paragraph--call_to_action_buttons",
            include: {
                field_link_or_file: [
                    {
                        type: "paragraph--cta_button",
                        fields: ["field_cta_link"],
                        include: {
                            field_file: {
                                type: "file--file",
                            },
                        },
                    },
                ],
            },
        } satisfies NextDrupalQuery<"paragraph--call_to_action_buttons">;

        const expected = new DrupalJsonApiParams()
            .addInclude(["field_link_or_file.field_file"])
            .addFields("paragraph--call_to_action_buttons", [
                "field_link_or_file",
            ])
            .addFields("paragraph--cta_button", [
                "field_cta_link",
                "field_file",
            ])
            .addFields("file--file", []);

        const actual = buildDrupalJsonApiParams(query);

        expect(actual.getQueryObject()).toEqual(expected.getQueryObject());
    });

    it("paragraph--banner", () => {
        const query = {
            type: "paragraph--banner",
            include: {
                field_image: {
                    type: "media--image",
                    include: {
                        field_media_image: {
                            type: "file--file",
                        },
                    },
                },
            },
        } satisfies NextDrupalQuery<"paragraph--banner">;

        const expected = new DrupalJsonApiParams()
            .addFields("paragraph--banner", ["field_image"])
            .addFields("media--image", ["field_media_image"])
            .addFields("file--file", [])
            .addInclude(["field_image.field_media_image"]);

        const actual = buildDrupalJsonApiParams(query);

        expect(actual.getQueryObject()).toEqual(expected.getQueryObject());
    });

    it("paragraph--hero", () => {
        const query = {
            type: "paragraph--hero",
            fields: ["field_title"],
            include: {
                field_image: {
                    type: "media--image",
                    include: {
                        field_media_image: {
                            type: "file--file",
                        },
                    },
                },
            },
        } satisfies NextDrupalQuery<"paragraph--hero">;

        const expected = new DrupalJsonApiParams()
            .addFields("paragraph--hero", ["field_title", "field_image"])
            .addFields("media--image", ["field_media_image"])
            .addFields("file--file", [])
            .addInclude(["field_image.field_media_image"]);

        const actual = buildDrupalJsonApiParams(query);

        expect(actual.getQueryObject()).toEqual(expected.getQueryObject());
    });

    it("paragraph--hero_v2", () => {
        const query = {
            type: "paragraph--hero_v2",
            include: {
                field_img: {
                    type: "file--file",
                },
            },
        } satisfies NextDrupalQuery<"paragraph--hero_v2">;

        const expected = new DrupalJsonApiParams()
            .addFields("paragraph--hero_v2", ["field_img"])
            .addFields("file--file", [])
            .addInclude(["field_img"]);

        const actual = buildDrupalJsonApiParams(query);

        expect(actual.getQueryObject()).toEqual(expected.getQueryObject());
    });

    it("paragraph--offer_info", () => {
        const query = {
            type: "paragraph--offer_info",
        } satisfies NextDrupalQuery<"paragraph--offer_info">;

        const expected = new DrupalJsonApiParams().addFields(
            "paragraph--offer_info",
            []
        );

        const actual = buildDrupalJsonApiParams(query);

        expect(actual.getQueryObject()).toEqual(expected.getQueryObject());
    });
});
