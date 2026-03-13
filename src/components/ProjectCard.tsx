import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { EcosystemProject } from '../data/ecosystemData';
import { getProjectStatusMeta } from '../data/projectStatus';

interface ProjectCardProps {
    project: EcosystemProject;
}

function LogoPlaceholder({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

    const hue = name
        .split('')
        .reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;

    return (
        <div
            style={{ background: `hsl(${hue}, 60%, 55%)` }}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
        >
            {initials}
        </div>
    );
}

export function ProjectCard({ project }: ProjectCardProps) {
    const statusMeta = getProjectStatusMeta(project.status);

    return (
        <Link
            to={`/ecosystem/${project.id}`}
            className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#5F4DED]/30 transition-all duration-200 overflow-hidden cursor-pointer"
        >
            {/* Status badge */}
            <div className="absolute top-4 right-4">
                <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusMeta.badgeClassName}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dotClassName}`} />
                    {statusMeta.label}
                </span>
            </div>

            {/* Card body */}
            <div className="p-6 flex-1 flex flex-col gap-3">
                {/* Logo + name */}
                <div className="flex items-center gap-3">
                    {project.logo ? (
                        <img
                            src={project.logo}
                            alt={project.name}
                            className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-gray-100"
                        />
                    ) : (
                        <LogoPlaceholder name={project.name} />
                    )}
                    <div className="min-w-0">
                        <h3 className="font-bold text-[#0F172A] text-base leading-tight truncate group-hover:text-[#5F4DED] transition-colors">
                            {project.name}
                        </h3>
                    </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-1">
                    {project.tagline}
                </p>

                {/* Category + language tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.categories.map((cat) => (
                        <span
                            key={cat}
                            className="text-[10px] font-semibold uppercase tracking-wide text-[#5F4DED] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100"
                        >
                            {cat}
                        </span>
                    ))}
                    {project.language.map((lang) => (
                        <span
                            key={lang}
                            className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover arrow indicator */}
            <div className="px-6 pb-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-[#5F4DED] font-medium flex items-center gap-1">
                    View project <ExternalLink className="w-3 h-3" />
                </span>
            </div>
        </Link>
    );
}
