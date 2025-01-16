import { server, client } from "./env.mjs";
import { z, TypeOf } from "zod";

// Re-exporting default
// eslint-disable-next-line no-restricted-exports
export { default, server, client } from "./env.mjs";

const s = z.object(server);
const c = z.object(client);

export type ServerConfig = TypeOf<typeof s>;
export type ClientConfig = TypeOf<typeof c>;
