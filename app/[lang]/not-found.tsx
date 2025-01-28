import Link from "next/link";

async function NotFoundPage(): Promise<JSX.Element | undefined> {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="max-w-screen-sm mx-auto text-center">
                    <h1 className="text-blue-600 dark:text-blue-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                        404
                    </h1>
                    <p className="text-gray-900 dark:text-white mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Something's missing.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg font-light">
                        Sorry, we can't find that page. You'll find lots to
                        explore on the home page.{" "}
                    </p>
                    <Link
                        href="/"
                        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
