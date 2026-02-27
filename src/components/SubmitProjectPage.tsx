import { Link } from 'react-router-dom';
import { ArrowLeft, GitPullRequest, FileJson, GitBranch, CheckCircle, ExternalLink } from 'lucide-react';
import { Footer } from './Footer';

const GITHUB_REPO = 'https://github.com/stylus-developers-guild/stylusup.sh';
const PROJECTS_JSON_PATH = 'public/projects.json';

const JSON_TEMPLATE = `{
  "id": "your-project-id",
  "name": "Your Project Name",
  "tagline": "One-liner shown on the card (max 80 chars)",
  "description": "Longer description for the project detail page. Explain what it does, who it's for, and the problem it solves.",
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
  "stylusUsage": "Explain which parts of the project use Stylus, what language, and the benefit (e.g. gas savings).",
  "socials": {
    "twitter": "https://x.com/yourproject",
    "discord": "https://discord.gg/yourserver",
    "telegram": "https://t.me/yourgroup"
  }
}`;

const FIELD_DOCS = [
    { field: 'id', required: true, type: 'string', desc: 'URL slug. Lowercase, hyphens only. Must be unique. e.g. scaffold-stylus' },
    { field: 'name', required: true, type: 'string', desc: 'Full display name of the project.' },
    { field: 'tagline', required: true, type: 'string (≤80 chars)', desc: 'Short one-liner shown on the project card.' },
    { field: 'description', required: true, type: 'string', desc: 'Full paragraph description for the detail page.' },
    { field: 'url', required: true, type: 'string (URL)', desc: 'Project website or primary link.' },
    { field: 'docsUrl', required: false, type: 'string (URL)', desc: 'Link to documentation, if available.' },
    { field: 'githubUrl', required: false, type: 'string (URL)', desc: 'GitHub repository URL.' },
    { field: 'logo', required: false, type: 'string (path)', desc: 'Path to logo in /public/images/projects/. Add the file in the same PR.' },
    { field: 'categories', required: true, type: 'string[]', desc: 'At least one of: DeFi, Infrastructure, Dev Tools, Gaming & NFTs, Cryptography, Bridges & Oracles.' },
    { field: 'language', required: true, type: 'string[]', desc: 'One or more of: Rust, Move, C/C++.' },
    { field: 'fundingSource', required: false, type: 'string', desc: 'One of: Stylus Sprint, D.A.O Program, Community, None.' },
    { field: 'status', required: true, type: '"live" | "building"', desc: '"live" if deployed and usable, "building" if in progress.' },
    { field: 'tags', required: true, type: 'string[]', desc: 'Lowercase keyword tags for search, e.g. ["defi", "amm", "rust"].' },
    { field: 'highlights', required: false, type: 'string[] (max 5)', desc: 'Bullet points shown on the detail page. Key features, metrics, or differentiators.' },
    { field: 'stylusUsage', required: false, type: 'string', desc: 'How this project uses Stylus — which contracts, language, and why.' },
    { field: 'socials', required: false, type: 'object', desc: 'Optional twitter, discord, and/or telegram URLs.' },
];

const STEPS = [
    {
        icon: GitBranch,
        title: 'Fork the repository',
        desc: 'Fork the StylusUp GitHub repository to your own account.',
    },
    {
        icon: FileJson,
        title: `Edit '${PROJECTS_JSON_PATH}'`,
        desc: 'Add your project object to the array. Use the JSON template below. Ensure the id is unique.',
    },
    {
        icon: CheckCircle,
        title: 'Add your logo (optional)',
        desc: 'Drop a .svg or .png logo into public/images/projects/<your-project-id>.svg and set the logo field.',
    },
    {
        icon: GitPullRequest,
        title: 'Open a Pull Request',
        desc: 'Submit a PR against the main branch with a clear title like "feat: add [Your Project Name] to ecosystem". A maintainer will review and merge.',
    },
];

export function SubmitProjectPage() {
    return (
        <div className="min-h-screen bg-[#F8F7FF]">
            {/* Mini header */}
            <div className="bg-white border-b border-gray-100 px-6 lg:px-8 py-4 flex items-center gap-4">
                <Link to="/ecosystem" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#5F4DED] transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Ecosystem
                </Link>
                <div className="w-px h-4 bg-gray-200" />
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="StylusUp" className="h-7 w-7" />
                    <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-lg font-normal">
                        <span className="text-[#5F4DED]">Stylus</span>
                        <span className="text-[#0F172A] italic">Up</span>
                    </span>
                </Link>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-14">

                {/* Hero */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold uppercase tracking-widest text-[#5F4DED] mb-4">
                        Open Contributions
                    </div>
                    <h1 className="text-4xl font-bold text-[#0F172A] mb-4 font-['Outfit']">
                        List your project on StylusUp
                    </h1>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                        The ecosystem directory is community-maintained. Projects are added via a simple GitHub Pull Request — no account needed, no form to fill out.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid gap-5 mb-12">
                    {STEPS.map((step, i) => (
                        <div key={i} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 text-[#5F4DED]" />
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Step {i + 1}</div>
                                <h3 className="font-bold text-[#0F172A] mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA button */}
                <div className="flex justify-center mb-16">
                    <a
                        href={`${GITHUB_REPO}/blob/main/${PROJECTS_JSON_PATH}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white font-semibold hover:opacity-90 transition-opacity shadow-md text-base"
                    >
                        <GitPullRequest className="w-5 h-5" />
                        Open a PR on GitHub
                        <ExternalLink className="w-4 h-4 opacity-70" />
                    </a>
                </div>

                {/* JSON Template */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-[#0F172A] mb-2">JSON Template</h2>
                    <p className="text-sm text-gray-500 mb-4">Copy this into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#5F4DED]">{PROJECTS_JSON_PATH}</code> and fill in your details.</p>
                    <div className="bg-[#0F172A] rounded-2xl overflow-auto p-6">
                        <pre className="text-sm text-green-300 leading-relaxed font-mono whitespace-pre">{JSON_TEMPLATE}</pre>
                    </div>
                </div>

                {/* Field Reference Table */}
                <div className="mb-16">
                    <h2 className="text-xl font-bold text-[#0F172A] mb-4">Field Reference</h2>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400">Field</th>
                                    <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400 hidden sm:table-cell">Type</th>
                                    <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400">
                                        <span className="text-red-400">*</span> Req
                                    </th>
                                    <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {FIELD_DOCS.map((f, i) => (
                                    <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                                        <td className="px-5 py-3 font-mono text-[#5F4DED] font-semibold whitespace-nowrap">{f.field}</td>
                                        <td className="px-5 py-3 text-gray-400 hidden sm:table-cell whitespace-nowrap">{f.type}</td>
                                        <td className="px-5 py-3 text-center">
                                            {f.required ? <span className="text-red-400 font-bold">✓</span> : <span className="text-gray-300">—</span>}
                                        </td>
                                        <td className="px-5 py-3 text-gray-600">{f.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Full docs link */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-purple-50 border border-purple-100">
                    <div className="text-2xl">📖</div>
                    <div>
                        <p className="font-semibold text-[#0F172A] mb-0.5">Full contributor guide</p>
                        <p className="text-sm text-gray-500">
                            See{' '}
                            <a
                                href={`${GITHUB_REPO}/blob/main/HACKING.md`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5F4DED] hover:underline font-medium"
                            >
                                HACKING.md
                            </a>{' '}
                            in the repo for full contribution instructions, including how to add new landing page sections or resource cards.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
