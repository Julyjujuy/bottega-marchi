import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cover: z.string(),         // e.g. "/images/A1.jpg"
    images: z.array(z.string()).min(1),
    summary: z.string().max(240),
  }),
});

export const collections = { products };
