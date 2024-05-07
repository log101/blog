import { z, defineCollection } from "astro:content";

export const CATEGORIES = {
  fikir: "Fikir",
  teknik: "Teknik",
  edebiyat: "Babür'ün Serüvenleri",
  ansiklopedi: "Ansiklopedi",
};

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
