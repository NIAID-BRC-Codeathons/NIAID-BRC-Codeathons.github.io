# BRC NIAID AI Codeathon 2025 Website

Website for the BRC NIAID AI Codeathon 2025, November 12-14, 2025 at Argonne National Laboratory.

**Live Site:** https://niaid-brc-codeathons.github.io/

Built with [Astro](https://astro.build/), a modern static site generator.

## 🚀 Project Structure

```text
├── public/              # Static assets (fonts, favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/
│   │   └── projects/    # Project proposals as Markdown files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (file-based routing)
│   │   ├── index.astro  # Homepage
│   │   ├── schedule.astro # Event schedule
│   │   └── projects/    # Project listing and detail pages
│   └── consts.ts        # Site configuration
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Adding Project Content

To add a new project proposal:

1. Copy `src/content/projects/your-project-here.md` to a new file (e.g., `my-project.md`)
2. Edit the frontmatter with your project details:
   ```yaml
   ---
   title: 'Your Project Title'
   description: 'Brief description'
   tags: ['AI', 'Bioinformatics']
   ---
   ```
3. Fill in the project sections following the template structure
4. The project will automatically appear on the projects page

The template includes all recommended sections for a complete project proposal.

## 🌐 Deployment

This site is configured to deploy to GitHub Pages at `https://niaid-brc-codeathons.github.io/`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
