import { defineCollection, z } from "astro:content";

/** Existing products (kept) */
const products = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    summary: z.string(),
    series: z.string().optional(),
    order: z.number().optional(),
    dimensions: z.string().optional(),
    price: z.string().optional(),
    materials: z.string().optional(),
    availability: z.string().optional(),
    lead_time: z.string().optional(),
  }),
});

/** Piece inside a series */
const pieceSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  cover: z.string(),
  images: z.array(z.string()).default([]),

  /** NEW: used to pick the shared spec block from the series (e.g. "lamp" | "tray" | "table" | "mirror") */
  type: z.string().optional(),

  // Optional per-piece overrides
  summary: z.string().optional(),
  dimensions: z.string().optional(),
  price: z.string().optional(),
  materials: z.string().optional(),
  availability: z.string().optional(),
  lead_time: z.string().optional(),
  order: z.number().optional(),
});

/** Series */
const series = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cover: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),

    /** NEW: reusable spec blocks for that series, keyed by piece.type */
    specs: z.record(z.string()).optional(),

    pieces: z.array(pieceSchema).default([]),
  }),
});

export const collections = { products, series };
