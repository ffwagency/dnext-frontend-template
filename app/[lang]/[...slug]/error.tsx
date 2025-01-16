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
        <div className="bg-gray-100 my-9 flex flex-col items-center justify-center text-center">
            <div className="notfound-404 mb-8">
                <h1 className="text-gray-800 text-6xl font-bold">
                    Something went wrong!
                </h1>
            </div>
            <p className="text-gray-600 mt-4">{error.message}</p>
            <button
                type="button"
                className="menu-link button--primary mx-auto mt-5 block border-b border-b-transparent px-2 py-1 text-lg font-bold text-light hover:border-b-primary"
                onClick={reset}
            >
                Try again
            </button>
        </div>
    );
}
