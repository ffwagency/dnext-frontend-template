import { DrupalJsonApiParams } from "drupal-jsonapi-params";

const params = new DrupalJsonApiParams()
    .addInclude(["field_link_or_file", "field_link_or_file.field_file"])
    .addFields("paragraph--call_to_action_buttons", ["field_link_or_file"])
    .addFields("field_link_or_file", ["field_cta_link", "field_file"]);

export default params;
