# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the BRC NIAID AI Codeathon 2025 (November 12-14, 2025 at Argonne National Laboratory). Built with Astro's blog template, adapted to display codeathon projects, teams, schedule, and resources.

## Key Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI commands
```

## Architecture

### Content-First Approach
This is a static site using Astro's Content Collections for type-safe content management. Content lives in markdown/MDX files, not a database.

**Key Concept**: `blog` collection → `projects` collection
- The blog template's "posts" are being repurposed as "project" entries
- Each codeathon project gets a markdown file in `src/content/blog/` (will be renamed to `projects/`)
- Frontmatter schema in `src/content.config.ts` defines required fields (title, description, dates, images)

### Directory Structure

```
src/
├── content/          # Content Collections (markdown/MDX files)
│   └── blog/         # Will become projects/ - each file is a project
├── pages/            # File-based routing
│   ├── index.astro   # Homepage
│   ├── blog/         # Will become projects/ - listing and detail pages
│   └── about.astro   # Can be repurposed for schedule/resources
├── layouts/          # Page layouts
│   └── BlogPost.astro # Will become ProjectPage.astro
├── components/       # Reusable Astro components
└── consts.ts         # Global site configuration (title, description)
```

### Content Collections Flow
1. Markdown files in `src/content/blog/` are loaded via glob pattern
2. Frontmatter is validated against zod schema in `content.config.ts`
3. Use `getCollection('blog')` to retrieve all entries with type safety
4. Each file automatically becomes a route via `[...slug].astro`

### Styling
Minimal CSS in `src/styles/global.css`. No CSS framework installed. Styles are intentionally minimal for easy customization.

## Content Management

### Adding a New Project
1. Create markdown file in `src/content/blog/` (e.g., `ai-helpdesk.md`)
2. Add required frontmatter:
```yaml
---
title: "Virtual BRC Helpdesk"
description: "AI-powered helpdesk for bioinformatics tasks"
pubDate: 2025-11-12
heroImage: "./project-image.jpg"
---
```
3. Write content in markdown
4. File automatically appears in listings and generates route

### Modifying Content Schema
Edit `src/content.config.ts` to add fields like:
- `team: z.array(z.string())` for team members
- `github: z.string().url()` for repository links
- `tags: z.array(z.string())` for project categories

## Project-Specific Patterns

### Adapting Blog → Projects
When renaming from blog to projects:
1. Rename `src/content/blog/` to `src/content/projects/`
2. Update collection name in `content.config.ts`: `const projects = defineCollection({...})`
3. Update `pages/blog/` directory to `pages/projects/`
4. Search/replace `getCollection('blog')` with `getCollection('projects')`

### GitHub Integration
For displaying repository stats (stars, last commit, etc.):
- Use GitHub API in page frontmatter or component
- Consider caching strategy (build-time fetch vs. client-side)
- Example: fetch in `getStaticPaths()` or Astro component frontmatter

### Pages to Create
- `/` - Event overview
- `/projects` - Project listings with filters
- `/projects/[slug]` - Individual project pages
- `/schedule` - Event timeline
- `/teams` - Participant directory
- `/resources` - BRC resources and documentation links

## Configuration Files

- `astro.config.mjs` - Astro configuration (site URL, integrations)
- `src/consts.ts` - Site title, description, event details
- `src/content.config.ts` - Content schema definitions
- `tsconfig.json` - TypeScript configuration

## Important Notes

- This is a STATIC site - no server-side runtime required
- Content changes require rebuild (no CMS, no database)
- Images in `src/assets/` are optimized automatically by Astro
- Images in `public/` are served as-is without optimization
- RSS feed at `/rss.xml` can be repurposed for project updates
