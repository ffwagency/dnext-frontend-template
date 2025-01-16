import { DrupalJsonApiParams } from "drupal-jsonapi-params";

const params = new DrupalJsonApiParams().addInclude(["field_img"]);

export default params;
