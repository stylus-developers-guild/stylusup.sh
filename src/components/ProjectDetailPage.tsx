import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Twitter, MessageCircle, Send } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { SubmitProjectCTA } from './SubmitProjectCTA';
import { Footer } from './Footer';

interface ProjectDetailPageProps {
    projectId: string;
}

function LogoPlaceholder({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();
    const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
    return (
        <div
            style={{ background: `hsl(${hue}, 60%, 55%)` }}
            className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
        >
            {initials}
        </div>
    );
}

export function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
    const navigate = useNavigate();
    const { projects, loading } = useProjects();
    const project = projects.find((p) => p.id === projectId);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-[#5F4DED] border-t-transparent animate-spin" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-[#F8F7FF] flex flex-col items-center justify-center gap-4">
                <p className="text-2xl font-bold text-gray-700">Project not found</p>
                <Link to="/ecosystem" className="text-[#5F4DED] hover:underline">
                    ← Back to Ecosystem
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F7FF]">
            {/* Back nav */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
                <button
                    onClick={() => navigate('/ecosystem')}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#5F4DED] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Ecosystem
                </button>
            </div>

            {/* Hero banner — dual logo */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#5F4DED] via-[#7B5CF0] to-[#4338CA] mx-6 lg:mx-8 mt-4 rounded-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
                <div className="relative z-10 flex items-center justify-center gap-8 py-14 px-8">
                    <div className="flex items-center gap-3">
                        {project.logo ? (
                            <img src={project.logo} alt={project.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" />
                        ) : (
                            <div
                                style={{
                                    background: `hsl(${project.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 360}, 60%, 75%)`,
                                }}
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-white/20"
                            >
                                {project.name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()}
                            </div>
                        )}
                        <span className="text-white text-2xl font-bold">{project.name}</span>
                    </div>

                    <div className="w-px h-12 bg-white/30" />

                    <div className="flex items-center gap-3">
                        <img src="/logo.svg" alt="StylusUp" className="w-10 h-10" />
                        <span className="text-white/80 text-xl" style={{ fontFamily: "'Unica77 LL', sans-serif" }}>
                            <span className="text-white font-semibold">Stylus</span>
                            <span className="italic">Up</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* ── LEFT SIDEBAR — ID card ── */}
                    <aside className="lg:w-72 xl:w-80 flex-shrink-0">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20 flex flex-col gap-5">
                            {/* Logo + name */}
                            <div className="flex flex-col items-center text-center gap-3 pb-4 border-b border-gray-100">
                                {project.logo ? (
                                    <img src={project.logo} alt={project.name} className="w-20 h-20 rounded-full object-cover border border-gray-100" />
                                ) : (
                                    <LogoPlaceholder name={project.name} />
                                )}
                                <div>
                                    <h2 className="font-bold text-[#0F172A] text-lg">{project.name}</h2>
                                    <p className="text-sm text-gray-400 mt-0.5">{project.tagline}</p>
                                </div>
                            </div>

                            {/* Metadata rows */}
                            <dl className="flex flex-col gap-3 text-sm">
                                {/* Status */}
                                <div className="flex items-start justify-between">
                                    <dt className="text-gray-400 font-medium">Status</dt>
                                    <dd>
                                        {project.status === 'live' ? (
                                            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                LIVE
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-amber-500 font-semibold">
                                                <span className="w-2 h-2 rounded-full bg-amber-400" />
                                                BUILDING
                                            </span>
                                        )}
                                    </dd>
                                </div>

                                {/* Category */}
                                <div className="flex items-start justify-between gap-2">
                                    <dt className="text-gray-400 font-medium flex-shrink-0">Category</dt>
                                    <dd className="flex flex-wrap gap-1 justify-end">
                                        {project.categories.map((c) => (
                                            <span key={c} className="text-[10px] font-semibold uppercase tracking-wide text-[#5F4DED] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                                                {c}
                                            </span>
                                        ))}
                                    </dd>
                                </div>

                                {/* Language */}
                                <div className="flex items-start justify-between gap-2">
                                    <dt className="text-gray-400 font-medium flex-shrink-0">Language</dt>
                                    <dd className="flex flex-wrap gap-1 justify-end">
                                        {project.language.map((l) => (
                                            <span key={l} className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                                                {l}
                                            </span>
                                        ))}
                                    </dd>
                                </div>

                                {/* Funding */}
                                {project.fundingSource && project.fundingSource !== 'None' && (
                                    <div className="flex items-start justify-between gap-2">
                                        <dt className="text-gray-400 font-medium flex-shrink-0">Funding</dt>
                                        <dd className="text-right font-medium text-gray-700">{project.fundingSource}</dd>
                                    </div>
                                )}
                            </dl>

                            {/* Social links */}
                            {project.socials && (
                                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                    {project.socials.twitter && (
                                        <a href={project.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.socials.discord && (
                                        <a href={project.socials.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors">
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.socials.telegram && (
                                        <a href={project.socials.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#26A5E4] transition-colors">
                                            <Send className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* CTA buttons */}
                            <div className="flex flex-col gap-2 pt-1">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#5F4DED] hover:text-[#5F4DED] transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Website
                                </a>
                                {project.docsUrl && (
                                    <a
                                        href={project.docsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#5F4DED] hover:text-[#5F4DED] transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Docs
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#5F4DED] hover:text-[#5F4DED] transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* ── RIGHT COLUMN — content ── */}
                    <div className="flex-1 min-w-0 flex flex-col gap-6">

                        {/* About the project */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">About {project.name}</h2>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>

                            {/* Key highlights */}
                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="mt-5 flex flex-col gap-2">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-[#5F4DED]">✓</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* How it uses Stylus */}
                        {project.stylusUsage && (
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                                <h2 className="text-xl font-bold text-[#0F172A] mb-4">
                                    How {project.name} uses Stylus
                                </h2>
                                <p className="text-gray-600 leading-relaxed">{project.stylusUsage}</p>
                            </div>
                        )}

                        {/* About Stylus (boilerplate) */}
                        <div className="bg-gradient-to-br from-[#5F4DED]/5 to-purple-50 rounded-2xl border border-purple-100 p-8">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">About Arbitrum Stylus</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Arbitrum Stylus is a next-generation execution environment that lets developers write
                                smart contracts in Rust, C, C++, Move, and other languages that compile to
                                WebAssembly (WASM). Stylus contracts run on any Arbitrum chain and are fully
                                interoperable with existing EVM/Solidity contracts — while achieving dramatically
                                lower gas costs for compute-intensive operations.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                Learn more at{' '}
                                <a
                                    href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#5F4DED] hover:underline font-medium"
                                >
                                    docs.arbitrum.io/stylus
                                </a>
                                .
                            </p>
                        </div>

                        {/* Accuracy notice */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700">
                            <span className="text-lg">ℹ️</span>
                            Does this information seem accurate? If not, you can{' '}
                            <a
                                href="https://github.com/stylus-developers-guild/stylusup.sh/issues/new"
                                className="font-medium underline hover:text-blue-900"
                            >
                                request a change here
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>

            <SubmitProjectCTA />
            <Footer />
        </div>
    );
}
