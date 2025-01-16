import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

import { LANGUAGES } from "@/config";
import { getNotFoundPage } from "@/lib";

async function NotFoundPage(): Promise<JSX.Element | undefined> {
    const localeCookie =
        (await cookies()).get("NEXT_LOCALE")?.value ?? LANGUAGES.defaultLocale;
    const data = await getNotFoundPage(localeCookie);

    return (
        <section className="bg-gray-100 my-9 flex flex-col items-center justify-center text-center">
            {data && data?.pictureUrl && (
                <Image
                    className="text-center"
                    loading="eager"
                    src={data.pictureUrl}
                    width="400"
                    height="400"
                    alt="Not found image"
                    priority
                    sizes="(max-width: 425px) 20vw,(max-width: 768px) 40vw, (max-width: 1200px) 30w, 33vw"
                    placeholder="blur"
                    blurDataURL="./default-blur.webp"
                />
            )}

            <div className="mb-8">
                <h1 className="text-gray-800 text-6xl font-bold">
                    {data?.title}
                </h1>
            </div>
            {data && data.text && (
                <p
                    className="text-gray-600 mt-4"
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(data.text),
                    }}
                />
            )}
            {data && data.linkUrl && (
                <Link
                    href={data?.linkUrl}
                    className="menu-link button--primary mx-auto mt-5 block border-b border-b-transparent px-2 py-1 text-lg font-bold text-light"
                >
                    {data?.linkText}
                </Link>
            )}
        </section>
    );
}

export default NotFoundPage;
