# HACKING.md — Contributing to StylusUp

Welcome! StylusUp is fully community-driven. Here's how you can contribute.

---

## Adding a Project to the Ecosystem Directory

Projects are stored in a single JSON file:

```
public/projects.json
```

To add your project:

1. **Fork** this repository on GitHub
2. **Edit** `public/projects.json` — add a new object to the array
3. **Add your logo** (optional) to `public/images/projects/<your-project-id>.svg`
4. **Open a Pull Request** against `main` with the title:
   `feat: add [Your Project Name] to ecosystem`

A maintainer will review, approve, and merge. Vercel will redeploy automatically.

---

## JSON Schema

Each project entry in `public/projects.json` must follow this shape:

```json
{
  "id": "your-project-id",
  "name": "Your Project Name",
  "tagline": "One-liner shown on the card (max 80 chars)",
  "description": "Longer description for the project detail page.",
  "url": "https://yourproject.xyz",
  "docsUrl": "https://docs.yourproject.xyz",
  "githubUrl": "https://github.com/org/repo",
  "logo": "/images/projects/your-project-id.svg",
  "categories": ["DeFi"],
  "language": ["Rust"],
  "fundingSource": "Stylus Sprint",
  "status": "live",
  "tags": ["defi", "amm", "rust"],
  "highlights": [
    "Key feature or metric #1",
    "Key feature or metric #2"
  ],
  "stylusUsage": "Explain which parts of the project use Stylus and why.",
  "socials": {
    "twitter": "https://x.com/yourproject",
    "discord": "https://discord.gg/yourserver",
    "telegram": "https://t.me/yourgroup"
  }
}
```

### Field Reference

| Field          | Required | Type                    | Description |
|----------------|----------|-------------------------|-------------|
| `id`           | ✅       | `string`                | URL slug. Lowercase + hyphens only. Must be **unique**. e.g. `scaffold-stylus` |
| `name`         | ✅       | `string`                | Full display name |
| `tagline`      | ✅       | `string` (≤80 chars)    | Short one-liner shown on the project card |
| `description`  | ✅       | `string`                | Full description shown on the detail page |
| `url`          | ✅       | `string` (URL)          | Primary project link (website, GitHub, etc.) |
| `docsUrl`      |          | `string` (URL)          | Documentation link |
| `githubUrl`    |          | `string` (URL)          | GitHub repository |
| `logo`         |          | `string` (path)         | Path to logo in `/public/images/projects/`. Added in same PR. |
| `categories`   | ✅       | `string[]`              | At least one: `DeFi`, `Infrastructure`, `Dev Tools`, `Gaming & NFTs`, `Cryptography`, `Bridges & Oracles` |
| `language`     | ✅       | `string[]`              | One or more: `Rust`, `Move`, `C/C++` |
| `fundingSource`|          | `string`                | One of: `Stylus Sprint`, `D.A.O Program`, `Community`, `None` |
| `status`       | ✅       | `"live"` \| `"building"` \| `"shutdown"`| `live` = deployed and usable; `building` = in progress; `shutdown` = no longer active |
| `tags`         | ✅       | `string[]`              | Lowercase search tags e.g. `["defi", "amm", "rust"]` |
| `highlights`   |          | `string[]` (max 5)      | Bullet points on the detail page. Key features or metrics. |
| `stylusUsage`  |          | `string`                | How and why the project uses Stylus |
| `socials`      |          | `object`                | Optional `twitter`, `discord`, `telegram` URLs |

---

## Adding Resources / Learning Content

Landing page resource cards live in `src/components/ResourceGrid.tsx`. To add:
- A tutorial, event, or tool card, open a PR editing that file directly.
- Follow the existing card structure (icon, title, description, links).

---

## Local Development

```bash
npm install
npm run dev
```

The dev server will start on `http://localhost:5173` (or similar).

> **Note:** `public/projects.json` is fetched at runtime and also powers spotlight search. Edits to it are immediately visible during dev without a rebuild.

---

## Project Structure

```
public/
  projects.json        ← Ecosystem project data (edit this to add projects)
  images/projects/     ← Project logos

src/
  components/          ← All React components
  data/
    ecosystemData.ts   ← TypeScript types only (data is in public/projects.json)
    projectSearch.ts   ← Search helpers derived from public/projects.json
  hooks/
    useProjects.ts     ← Hook that fetches and caches projects.json
```

---

## Code of Conduct

Be respectful. Contributions are reviewed on merit. Spam or self-promotional PRs without genuine Stylus integration will be closed.
