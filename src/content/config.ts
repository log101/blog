import { z, defineCollection } from "astro:content";

export const CATEGORIES = ["fikir", "teknik", "edebiyat", "ansiklopedi"];

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    date: z.date(),
    category: z.enum(["fikir", "teknik", "edebiyat", "ansiklopedi"]),
    subcategory: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
