import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

import { env } from "@/config";

async function handler(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const path = searchParams.get("path");
    const secret = searchParams.get("secret");

    if (secret !== env.DRUPAL_REVALIDATE_SECRET) {
        return new Response("Invalid secret.", { status: 401 });
    }

    if (!path) {
        return new Response("Invalid path.", { status: 400 });
    }

    try {
        revalidatePath(path);

        return new Response("Revalidated.");
    } catch (error) {
        return new Response((error as Error).message, { status: 500 });
    }
}

export { handler as GET, handler as POST };
