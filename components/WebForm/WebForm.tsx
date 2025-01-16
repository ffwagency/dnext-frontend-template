"use client";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import type { FC } from "react";
import React from "react";
import type { WebFormData } from "types/webForm";

import { submitWebForm } from "@/actions";

export interface WebFormProps {
    formId: string;
    formElements: any;
}

export const WebForm: FC<WebFormProps> = ({ formElements, formId }) => {
    return (
        <div className="schema-form container-narrow my-16">
            <Form
                schema={formElements.schema}
                uiSchema={formElements.ui}
                validator={validator}
                onSubmit={({ formData }) => {
                    submitWebForm(formData as WebFormData, formId).catch(
                        (error) => {
                            console.error("Form submission error:", error);
                        }
                    );
                }}
            />
        </div>
    );
};

export default WebForm;
