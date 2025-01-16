import { getLanguage } from "./getLanguage";
import { handleJsonApiError } from "./handleJsonApiError";
import { removeInternalLinkPrefix } from "./removeInternalLinkPrefix";
import { validateLocaleAndConstructPath } from "./validateLocaleAndConstructPath";

export {
    getLanguage,
    handleJsonApiError,
    removeInternalLinkPrefix,
    validateLocaleAndConstructPath,
};

export { type Metatag } from "./metadata/handleTag";
export { default as parseMetadata } from "./metadata/parseMetadata";
