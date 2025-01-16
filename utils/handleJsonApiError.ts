import { notFound } from "next/navigation";
import type { JsonApiErrors } from "next-drupal";

export function handleJsonApiError(error: JsonApiErrors): void {
    if ((error.statusCode as unknown) === "404") {
        notFound();
    }

    throw error;
}
