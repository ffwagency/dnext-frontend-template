import { DrupalJsonApiParams } from "drupal-jsonapi-params";

const params = new DrupalJsonApiParams()
    .addFields("paragraph--hero", ["field_title", "field_image"])
    .addInclude(["field_image.field_media_image"]);

export default params;
