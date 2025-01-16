import { DrupalJsonApiParams } from "drupal-jsonapi-params";

const params = new DrupalJsonApiParams().addInclude([
    "field_image.field_media_image",
]);

export default params;
