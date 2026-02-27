<div align="center">
  <img src="public/logo.svg" alt="StylusUp Logo" width="80" />
  <h1>StylusUp</h1>
  <p><strong>The community hub for developers building on Arbitrum Stylus.</strong></p>
  <p>
    <a href="https://stylusup.sh">Live Site</a> ·
    <a href="https://stylusup.sh/ecosystem">Ecosystem Directory</a> ·
    <a href="HACKING.md">Contribute a Project</a>
  </p>
  <br />
  <img src="StylusUpOpengraphV2.png" alt="StylusUp Screenshot" width="700" />
</div>

---

## About

**StylusUp** is a community-owned resource hub and ecosystem explorer for [Arbitrum Stylus](https://docs.arbitrum.io/stylus/stylus-gentle-introduction) — the execution environment that lets developers write smart contracts in Rust, C, C++, and other languages that compile to WebAssembly.

It brings together:

- 🗺 **Ecosystem Directory** — A searchable, filterable directory of projects, tools, SDKs, and protocols built with Stylus
- 📚 **Learning Resources** — Curated guides, tutorials, and videos for new and experienced builders
- ⚡ **Spotlight Search** — `⌘K` spotlight-style search across the entire catalog
- 🔗 **Community Hub** — Links to grants, DAOs, GitHub, Discord, and socials

The project data is **entirely community-maintained** via Pull Requests — no backend, no database.

---

## Features

| Feature | Details |
|---|---|
| Ecosystem Directory | Filter by category, language, funding source, and status |
| Project Detail Pages | Per-project pages with description, Stylus integration, highlights, and links |
| Spotlight Search | `⌘K` / `Ctrl+K` fuzzy search across all projects and resources |
| Submit a Project | PR-based contribution flow (edit `public/projects.json`) |
| Page Transitions | Smooth CSS fade-in transitions between routes |
| Fully Responsive | Mobile-first, works on all screen sizes |

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploy on push to `main`)

---

## Getting Started

```bash
# 1. Clone the repo
git clone github.com/stylus-developers-guild/stylusup.sh
cd stylusup.sh

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be running at `http://localhost:3000`.

> **Note:** Project data is loaded at runtime from `public/projects.json`. No environment variables are needed.

---

## Project Structure

```
/
├── public/
│   ├── projects.json          ← Ecosystem project data (edit this to add projects)
│   └── images/projects/       ← Project logos
├── src/
│   ├── components/            ← All page and UI components
│   ├── data/
│   │   ├── ecosystemData.ts   ← TypeScript types for projects
│   │   └── searchData.ts      ← Spotlight search index
│   └── hooks/
│       └── useProjects.ts     ← Hook that fetches & caches projects.json
├── HACKING.md                 ← Contributor guide
└── vite.config.ts
```

---

## Contributing

Projects are added via Pull Request — no accounts or forms needed.

1. Fork this repo
2. Add your project to `public/projects.json` (see the JSON template in [HACKING.md](HACKING.md))
3. Optionally add a logo to `public/images/projects/<your-id>.svg`
4. Open a PR — maintainers will review and merge

See [HACKING.md](HACKING.md) for the full schema and contributor guide.

---

## Deploying Your Own Instance

This is a standard Vite + React app. To deploy to Vercel:

```bash
npm run build          # Outputs to /build
```

Or just connect the repo to [Vercel](https://vercel.com) for automatic deploys on every push.

---

## License

MIT — see [LICENSE](LICENSE) for details. Built and maintained by the Stylus community.

---

<div align="center">
  <sub>Built with ❤️ for the Stylus ecosystem · <a href="https://stylusup.sh">stylusup.sh</a></sub>
</div>
