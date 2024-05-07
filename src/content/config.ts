import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    date: z.date(),
    category: z.enum(["Kitap İncelemesi", "Teknik Yazı", "Öykü"]),
  }),
});

export const collections = {
  blog: blogCollection,
};
