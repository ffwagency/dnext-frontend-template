"use server";

import { getAccessToken } from "next-drupal";
import type { WebFormData } from "types/webForm";

import { env } from "@/config";

export const submitWebForm = async (formData: WebFormData, formId: string) => {
    const token = await getAccessToken();
    const url = new URL(
        `${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`
    );

    await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify({
            ...formData,
            webform_id: formId,
        }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access_token}`,
        },
    });
};
