// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const boolean = () =>
    z
        .union([z.literal("true"), z.literal("false")])
        .transform((val) => val === "true");
const jsonString = () =>
    z
        .string()
        .refine(
            (val) => {
                try {
                    JSON.parse(val);
                    return true;
                } catch {
                    return false;
                }
            },
            { message: "Invalid JSON string" }
        )
        .transform(JSON.parse)
        .pipe(z.record(z.string(), z.any()));
/*
 * Serverside Environment variables, not available on the client.
 * Will throw if you access these variables on the client.
 */
const server = {
    NEXT_IMAGE_DOMAIN: z.string(),
    DRUPAL_REVALIDATE_SECRET: z.string(),
    DRUPAL_CLIENT_ID: z.string(),
    DRUPAL_CLIENT_SECRET: z.string(),
    DRUPAL_CLIENT_DEBUG: boolean().default(false),
    NEXT_GENERATE_FILES: boolean().default(false),
};

/*
 * Environment variables available on the client (and server).
 *
 * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
 */
const client = {
    NEXT_PUBLIC_DRUPAL_BASE_URL: z.string().url(),
    NEXT_PUBLIC_DEFAULT_LANGUAGE: z.string(),
};

const config = createEnv({
    server,
    client,

    /*
     * Due to how Next.js bundles environment variables on Edge and Client,
     * we need to manually destructure them to make sure all are included in bundle.
     *
     * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
     */
    runtimeEnv: {
        // --- Server ---
        NEXT_IMAGE_DOMAIN: process.env.NEXT_IMAGE_DOMAIN,
        DRUPAL_REVALIDATE_SECRET: process.env.DRUPAL_REVALIDATE_SECRET,
        DRUPAL_CLIENT_ID: process.env.DRUPAL_CLIENT_ID,
        DRUPAL_CLIENT_SECRET: process.env.DRUPAL_CLIENT_SECRET,
        DRUPAL_CLIENT_DEBUG: process.env.DRUPAL_CLIENT_DEBUG,
        NEXT_GENERATE_FILES: process.env.NEXT_GENERATE_FILES,

        // --- Client ---
        NEXT_PUBLIC_DRUPAL_BASE_URL: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
        NEXT_PUBLIC_DEFAULT_LANGUAGE: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    },
});

export { server, client };
export default config;
