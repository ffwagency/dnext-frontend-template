import type { FC } from "react";
import React from "react";

import { getWebFormData } from "@/lib";

import { WebForm } from "./WebForm";

export interface WebFormWrapperProps {
    id: string;
}

export const WebFormWrapper: FC<WebFormWrapperProps> = async ({ id }) => {
    const webFormData = await getWebFormData(id);
    return <WebForm formElements={webFormData} formId={id} />;
};
