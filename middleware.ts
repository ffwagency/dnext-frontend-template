import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getLanguage } from "./utils";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const locale = getLanguage(pathname.split("/")[1]);

    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", locale);

    return response;
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
