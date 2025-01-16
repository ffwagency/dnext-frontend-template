import env from "./config/env.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname:
                    env.NEXT_IMAGE_DOMAIN || "headless-poc-drupal.lndo.site",
                port: "",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/en/homepage",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: "/sitemap.xml",
                    destination: `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/sitemap.xml`,
                },
                {
                    source: "/sitemaps/:path*",
                    destination: `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/sitemaps/:path*`,
                },
                {
                    source: "/robots.txt",
                    destination: `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/robots.txt`,
                },
                {
                    source: "/sites/:path*",
                    destination: `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/sites/:path*`,
                },
            ],
        };
    },
};

export default nextConfig;
