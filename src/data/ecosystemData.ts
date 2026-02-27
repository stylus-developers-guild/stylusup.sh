// ─────────────────────────────────────────────────────────────────────────────
// EcosystemProject type definitions
// The data itself lives in /public/projects.json — edit that file to add
// or update projects (see HACKING.md for contribution instructions).
// ─────────────────────────────────────────────────────────────────────────────

export interface EcosystemProject {
    id: string;               // URL slug, e.g. 'scaffold-stylus'
    name: string;
    tagline: string;          // short one-liner shown on card
    description: string;      // longer "About" text for detail page
    url: string;              // project website
    docsUrl?: string;
    githubUrl?: string;
    logo?: string;            // path to logo in /public/images/projects/
    categories: string[];     // at least one required
    language: string[];       // Rust | Move | C/C++
    fundingSource?: 'Stylus Sprint' | 'D.A.O Program' | 'Community' | 'None';
    status: 'live' | 'building';
    tags: string[];
    highlights?: string[];    // up to 5 bullet points for detail page
    stylusUsage?: string;     // "How does this project use Stylus?"
    socials?: {
        twitter?: string;
        discord?: string;
        telegram?: string;
    };
}

export const CATEGORIES = [
    'DeFi',
    'Infrastructure',
    'Dev Tools',
    'Gaming & NFTs',
    'Cryptography',
    'Bridges & Oracles',
] as const;

export const LANGUAGES = ['Rust', 'Move', 'C/C++', 'AssemblyScript'] as const;

export const FUNDING_SOURCES = [
    'Stylus Sprint',
    'D.A.O Program',
    'Community',
    'None',
] as const;
