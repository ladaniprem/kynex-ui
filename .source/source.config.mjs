// source.config.ts
import {
  defineCollections,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineCollections({
  type: "doc",
  dir: "content/docs",
  schema: frontmatterSchema.extend({
    toc: z.boolean().optional(),
    full: z.boolean().optional()
  })
});
var meta = defineCollections({
  type: "meta",
  dir: "content/docs",
  schema: metaSchema
  // zod schema to validate JSON data
});
export {
  docs,
  meta
};
