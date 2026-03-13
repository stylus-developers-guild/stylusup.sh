import { CATEGORIES, FUNDING_SOURCES, LANGUAGES, EcosystemProject } from '../data/ecosystemData';
import { Search, X } from 'lucide-react';
import { getProjectStatusMeta } from '../data/projectStatus';

export interface FilterState {
    keyword: string;
    categories: string[];
    languages: string[];
    fundingSources: string[];
    status: 'all' | EcosystemProject['status'];
}

interface FilterSidebarProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    projects: EcosystemProject[];
}

function countByCategory(projects: EcosystemProject[], category: string) {
    return projects.filter((p) => p.categories.includes(category)).length;
}
function countByLanguage(projects: EcosystemProject[], language: string) {
    return projects.filter((p) => p.language.includes(language)).length;
}
function countByFunding(projects: EcosystemProject[], source: string) {
    return projects.filter((p) => p.fundingSource === source).length;
}

function PillButton({
    active,
    count,
    label,
    onClick,
}: {
    active: boolean;
    count: number;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${active
                    ? 'bg-[#5F4DED] text-white border-[#5F4DED] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#5F4DED] hover:text-[#5F4DED]'
                }`}
        >
            {label}
            <span
                className={`text-xs ${active ? 'text-purple-200' : 'text-gray-400'}`}
            >
                {count}
            </span>
        </button>
    );
}

export function FilterSidebar({ filters, onFilterChange, projects }: FilterSidebarProps) {
    const hasActiveFilters =
        filters.keyword ||
        filters.categories.length > 0 ||
        filters.languages.length > 0 ||
        filters.fundingSources.length > 0 ||
        filters.status !== 'all';

    function toggleItem(
        field: 'categories' | 'languages' | 'fundingSources',
        value: string
    ) {
        const current = filters[field];
        const next = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        onFilterChange({ ...filters, [field]: next });
    }

    function clearAll() {
        onFilterChange({
            keyword: '',
            categories: [],
            languages: [],
            fundingSources: [],
            status: 'all',
        });
    }

    return (
        <aside className="w-full flex flex-col gap-6">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by keyword"
                    value={filters.keyword}
                    onChange={(e) => onFilterChange({ ...filters, keyword: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5F4DED]/30 focus:border-[#5F4DED] transition-all bg-white"
                />
                {filters.keyword && (
                    <button
                        onClick={() => onFilterChange({ ...filters, keyword: '' })}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    onClick={clearAll}
                    className="flex items-center gap-1.5 text-sm text-[#5F4DED] hover:text-purple-800 font-medium transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                    Clear all filters
                </button>
            )}

            {/* Category */}
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Category
                </h3>
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <PillButton
                            key={cat}
                            label={cat}
                            count={countByCategory(projects, cat)}
                            active={filters.categories.includes(cat)}
                            onClick={() => toggleItem('categories', cat)}
                        />
                    ))}
                </div>
            </div>

            {/* Language */}
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Language
                </h3>
                <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((lang) => (
                        <PillButton
                            key={lang}
                            label={lang}
                            count={countByLanguage(projects, lang)}
                            active={filters.languages.includes(lang)}
                            onClick={() => toggleItem('languages', lang)}
                        />
                    ))}
                </div>
            </div>

            {/* Funding Source */}
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Funding Source
                </h3>
                <div className="flex flex-wrap gap-2">
                    {FUNDING_SOURCES.filter((f) => f !== 'None').map((src) => (
                        <PillButton
                            key={src}
                            label={src}
                            count={countByFunding(projects, src)}
                            active={filters.fundingSources.includes(src)}
                            onClick={() => toggleItem('fundingSources', src)}
                        />
                    ))}
                </div>
            </div>

            {/* Status */}
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Status
                </h3>
                <div className="flex gap-2">
                    {(['all', 'live', 'building', 'shutdown'] as const).map((s) => (
                        <button
                            key={s}
                            onClick={() => onFilterChange({ ...filters, status: s })}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${filters.status === s
                                    ? s === 'all'
                                        ? 'bg-[#5F4DED] text-white border-[#5F4DED]'
                                        : s === 'live'
                                            ? 'bg-emerald-500 text-white border-emerald-500'
                                            : s === 'building'
                                                ? 'bg-amber-400 text-white border-amber-400'
                                                : 'bg-slate-500 text-white border-slate-500'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {s === 'all'
                                ? 'All'
                                : `${s === 'live' ? '●' : s === 'building' ? '◐' : '■'} ${getProjectStatusMeta(s).filterLabel}`}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}
