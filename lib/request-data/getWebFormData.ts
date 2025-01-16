"server-only";

import { getAccessToken } from "next-drupal";
import { cache } from "react";

import { env } from "@/config";

async function webFormData(formId: string) {
    const token = await getAccessToken();
    try {
        const webForm = await fetch(
            `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_jsonschema/${formId}`,
            {
                headers: {
                    Authorization: `Bearer ${token.access_token}`,
                },
            }
        );
        if (webForm) {
            return await webForm.json();
        }
    } catch (err) {
        throw new Error(`Error fetching data from Drupal: ${err}`);
    }

    return null;
}

export const getWebFormData = cache(webFormData);
