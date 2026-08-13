# NIAID-BRCs AI Codeathon 2.0

**September 16-18, 2026 · Argonne National Laboratory, Lemont, IL**

Three days of building AI-driven tools and workflows for infectious disease
research, hosted by the NIAID Bioinformatics Resource Centers — BV-BRC, BRC
Analytics, and the Pathogen Data Network. Applications for 2026 are closed;
participants have been selected and project teams are being finalized.

|                  |                                                       |
| ---------------- | ----------------------------------------------------- |
| **Website**      | https://niaid-brc-codeathons.github.io/               |
| **Projects**     | https://niaid-brc-codeathons.github.io/projects/      |
| **Schedule**     | https://niaid-brc-codeathons.github.io/schedule/      |
| **2025 archive** | https://niaid-brc-codeathons.github.io/projects/2025/ |

Each of the eleven 2026 projects has its own repository in this organization,
seeded with the project pitch. Those pitches are **starting points, not plans** —
teams develop them into project charters ahead of the event.

This repository holds the website itself. Everything below is about building and
editing that site.

---

Built with [Astro](https://astro.build/), a modern static site generator.

## 🚀 Project Structure

```text
├── public/              # Static assets (fonts, favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/
│   │   └── projects/    # Project proposals as Markdown files (all years, flat)
│   │       └── themes/  # 2025 theme write-ups, not part of the collection
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes (file-based routing)
│   │   ├── index.astro  # Homepage
│   │   ├── schedule.astro # Event schedule
│   │   ├── report.astro # 2025 event report
│   │   └── projects/
│   │       ├── index.astro     # Current-year listing
│   │       ├── 2025.astro      # Archive listing
│   │       └── [...slug].astro # Detail page per project
│   └── consts.ts        # Site configuration
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📝 Adding Project Content

Project files all live flat in `src/content/projects/` regardless of year — the
`year` field is what splits them, so a project's URL never changes when a new
codeathon comes around.

To add a project:

1. Create `src/content/projects/my-project.md`
2. Fill in the frontmatter:
   ```yaml
   ---
   title: "Your Project Title"
   description: "One or two sentences, shown on the listing page"
   year: 2026
   order: 12 # position in the listing; current-year projects sort by this
   tags: ["AI", "Bioinformatics"]
   github: "https://github.com/NIAID-BRC-Codeathons/my-project"
   proposal: "https://..." # optional, adds a "Full proposal" button
   video: "https://..." # optional, added after the event
   ---
   ```
3. Write the body — current-year proposals use Goal / Three-Day MVP / Evaluation
4. The project appears on `/projects` (or `/projects/2025` for `year: 2025`) and gets its own page automatically

Each project also gets a repository of the same name in the
[NIAID-BRC-Codeathons](https://github.com/NIAID-BRC-Codeathons) organization.

## 🗓️ Rolling over to a new codeathon

1. Update the event constants in `src/consts.ts` (dates, location, deadline, `APPLICATIONS_OPEN`)
2. Add the new project files with the new `year`
3. Point `/projects` at the new year and add an archive page for the outgoing one, following `src/pages/projects/2025.astro`
4. Add the archive to the `NAV` list in `src/components/Header.astro`

## 🌐 Deployment

This site is configured to deploy to GitHub Pages at `https://niaid-brc-codeathons.github.io/`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
