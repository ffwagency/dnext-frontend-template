import { NextDrupal } from "next-drupal";

import { env } from "@/config";

export const drupal = new NextDrupal(env.NEXT_PUBLIC_DRUPAL_BASE_URL, {
    auth: {
        clientId: env.DRUPAL_CLIENT_ID,
        clientSecret: env.DRUPAL_CLIENT_SECRET,
    },
    debug: env.DRUPAL_CLIENT_DEBUG,
    withAuth: true,
});
