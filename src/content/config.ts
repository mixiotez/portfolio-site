import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    imageUrl: z.string(),
    title: z.string(),
    technologies: z.array(z.string()),
    demoUrl: z.string().optional(),
    repoUrl: z.string(),
    additionalLink: z
      .object({
        url: z.string(),
        label: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };
