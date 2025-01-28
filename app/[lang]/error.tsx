"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}): JSX.Element {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="max-w-screen-sm mx-auto text-center">
                    <h1 className="text-blue-600 dark:text-blue-500 mb-4 text-4xl font-extrabold tracking-tight lg:text-9xl">
                        Error
                    </h1>
                    <p className="text-gray-900 dark:text-white mb-4 text-2xl font-bold tracking-tight md:text-4xl">
                        {error.message}
                    </p>
                    <button
                        type="button"
                        className="text-white bg-red-600 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
                        onClick={reset}
                    >
                        Try again
                    </button>
                </div>
            </div>
        </section>
    );
}
