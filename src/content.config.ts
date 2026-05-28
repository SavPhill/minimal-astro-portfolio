import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Define the Talks Collection
const talksCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    // Added fields specific to your speaking engagements
    event: z.string().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts: postsCollection,
  talks: talksCollection, // Register the talks here
};