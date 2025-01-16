import { drupal } from "lib/drupalClient";
import type { NextRequest } from "next/server";
import { enableDraftMode } from "next-drupal/draft";

export async function GET(request: NextRequest): Promise<Response> {
    return enableDraftMode(request, drupal);
}
