import { DrupalJsonApiParams } from "drupal-jsonapi-params";

const params = new DrupalJsonApiParams()
    .addInclude([
        "field_products",
        "field_products.field_image.field_media_image",
    ])
    .addFields("field_image", ["media--image"]);

export default params;
