export const removeInternalLinkPrefix = (uri?: string) => {
    return uri?.replace("internal:", "");
};
