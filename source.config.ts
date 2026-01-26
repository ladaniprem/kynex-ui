import {
    defineCollections,
    frontmatterSchema,
    metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineCollections({
    type: "doc",
    dir: "content/docs",
    schema: frontmatterSchema.extend({
        toc: z.boolean().optional(),
        full: z.boolean().optional(),
    }),
});

export const meta = defineCollections({
    type: "meta",
    dir: "content/docs",
    schema: metaSchema, // zod schema to validate JSON data
});
