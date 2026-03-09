import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    dish: z.string(),
    cuisine: z.string(),
    date: z.coerce.date().optional(),
    portions: z.number(),
    calories: z.number().default(0),
    protein: z.number().default(0),
    carbs: z.number().default(0),
    fat: z.number().default(0),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { recipes };
