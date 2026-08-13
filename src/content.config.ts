import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory, excluding themes subfolder.
	loader: glob({ base: "./src/content/projects", pattern: "*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Which codeathon this project belongs to. Drives the /projects
			// (current year) vs /projects/2025 (archive) split.
			year: z.number(),
			// Sort position within a year; 2026 projects follow the proposal
			// deck numbering rather than alphabetical order.
			order: z.number().optional(),
			heroImage: image().optional(),
			team: z.array(z.string()).optional(),
			github: z.string().url().optional(),
			video: z.string().url().optional(),
			proposal: z.string().url().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { projects };
