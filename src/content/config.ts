import { z, defineCollection } from "astro:content";

export const CATEGORIES = ["fikir", "teknik", "edebiyat", "ansiklopedi"];

const blogPostSchema = z.object({
  title: z.string(),
  tags: z.optional(z.array(z.string())),
  summary: z.string(),
  date: z.date(),
  category: z.enum(["fikir", "teknik", "edebiyat", "ansiklopedi"]),
  subcategory: z.string(),
});

const bookReviewSchema = blogPostSchema.extend({
  bookAuthor: z.string(),
  publisher: z.string(),
  bookLanguage: z.string(),
  bookGenre: z.string(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: blogPostSchema,
});

const bookReviewCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    bookReviewSchema.extend({
      bookCover: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  bookReview: bookReviewCollection,
};
