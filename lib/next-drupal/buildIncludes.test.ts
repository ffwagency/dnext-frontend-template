import buildIncludes, { type RelationshipsType } from "./buildIncludes";

const relationships = {
    "block--block": {},
    "block_content--basic": {
        block_content_type: ["block_content_type--block_content_type"],
        revision_user: ["user--user"],
    },
    "block_content_type--block_content_type": {},
    "user--user": {
        roles: ["user_role--user_role"],
        user_picture: [],
    },
    "user_role--user_role": {},
    "comment--comment": {
        comment_type: ["comment_type--comment_type"],
        uid: ["user--user"],
        pid: ["comment--comment"],
        entity_id: [],
    },
    "comment_type--comment_type": {},
} as const satisfies RelationshipsType;

describe("buildIncludes", () => {
    it("should be a function", () => {
        expect(buildIncludes).toBeInstanceOf(Function);
    });

    it("should return empty array when no relationships", () => {
        const expected: string[] = [];
        const actual = buildIncludes("block--block", relationships);

        expect(actual).toEqual(expected);
    });

    it("should return relationships in 1-level tree", () => {
        const expected: string[] = ["roles", "user_picture"];
        const actual = buildIncludes("user--user", relationships);

        expect(actual).toEqual(expected);
    });

    it("should return relationships in 2-level tree", () => {
        const expected: string[] = [
            "block_content_type",
            "revision_user",
            "revision_user.roles",
            "revision_user.user_picture",
        ];
        const actual = buildIncludes("block_content--basic", relationships);

        expect(actual).toEqual(expected);
    });

    it("should be ok with circular deps", () => {
        const expected: string[] = [
            "comment_type",
            "uid",
            "uid.roles",
            "uid.user_picture",
            "pid",
            "pid.comment_type",
            "pid.uid",
            "pid.pid",
            "pid.entity_id",
            "entity_id",
        ];
        const actual = buildIncludes("comment--comment", relationships, 2);

        expect(actual).toEqual(expected);
    });
});
