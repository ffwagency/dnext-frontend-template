import { disableDraftMode } from "next-drupal/draft";

export function GET() {
    return disableDraftMode();
}
