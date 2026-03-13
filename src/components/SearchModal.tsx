import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { buildProjectSearchItems } from '../data/projectSearch';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { projects: ecosystemProjects } = useProjects();
    const searchItems = useMemo(
        () => buildProjectSearchItems(ecosystemProjects),
        [ecosystemProjects]
    );

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(searchItems.flatMap((item) => item.categories)))],
        [searchItems]
    );

    const filteredResults = useMemo(() => {
        const categoryFiltered = selectedCategory === 'All'
            ? searchItems
            : searchItems.filter((item) => item.categories.includes(selectedCategory));

        if (!query.trim()) {
            return categoryFiltered;
        }

        const lowerQuery = query.toLowerCase();
        return categoryFiltered.filter((item) =>
            item.name.toLowerCase().includes(lowerQuery) ||
            item.tagline.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
            item.categories.some((category) => category.toLowerCase().includes(lowerQuery))
        );
    }, [query, searchItems, selectedCategory]);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query, selectedCategory, searchItems]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex(prev =>
                        prev < filteredResults.length - 1 ? prev + 1 : prev
                    );
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
                    break;
                case 'Enter':
                    e.preventDefault();
                    const item = filteredResults[selectedIndex];
                    if (item) {
                        navigate(`/ecosystem/${item.id}`);
                        onClose();
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    onClose();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredResults, navigate, onClose, selectedIndex]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for packages, tools, and resources..."
                        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
                    />
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Category Filters */}
                <div className="flex gap-2 px-4 py-3 border-b border-gray-200 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                ? 'bg-[#5F4DED] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto">
                    {filteredResults.length === 0 ? (
                        <div className="py-12 text-center text-gray-400">
                            No results found for "{query}"
                        </div>
                    ) : (
                        filteredResults.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`flex items-start gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 ${index === selectedIndex ? 'bg-gray-50' : ''}`}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5F4DED]/10 to-[#7B68EE]/10 border border-[#5F4DED]/20 flex items-center justify-center flex-shrink-0 mt-1 cursor-pointer"
                                        onClick={() => {
                                            navigate(`/ecosystem/${item.id}`);
                                            onClose();
                                        }}
                                    >
                                        <Icon className="w-5 h-5 text-[#5F4DED]" />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="flex-1 min-w-0 cursor-pointer"
                                        onClick={() => {
                                            navigate(`/ecosystem/${item.id}`);
                                            onClose();
                                        }}
                                    >
                                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Tags & Actions */}
                                    <div className="flex flex-col items-end gap-2 shrink-0">
                                        <span className="text-xs px-2 py-0.5 rounded-md bg-[#FF1F8F]/10 text-[#FF1F8F] border border-[#FF1F8F]/20 whitespace-nowrap">
                                            {item.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/ecosystem/${item.id}`);
                                                    onClose();
                                                }}
                                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-purple-50 text-[#5F4DED] text-xs font-semibold hover:bg-purple-100 transition-colors"
                                                title="View Ecosystem Page"
                                            >
                                                Project Page <ArrowRight className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(item.url, '_blank');
                                                    onClose();
                                                }}
                                                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-xs font-semibold transition-colors"
                                                title="Open External Link"
                                            >
                                                Website <ExternalLink className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer Hints */}
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex gap-4">
                        <span><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded">↑↓</kbd> Navigate</span>
                        <span><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded">Enter</kbd> Open</span>
                        <span><kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded">Esc</kbd> Close</span>
                    </div>
                    <span>{filteredResults.length} results</span>
                </div>
            </div>
        </div>
    );
}
