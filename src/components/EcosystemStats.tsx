import { Info } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

// Assuming we have these logos or will add them later.
// For now, we will use text/placeholders that look clean if logos are missing.
const PROMINENT_PROJECTS = [
    { name: 'Arbitrum', logo: '/images/projects/arbitrum.svg' },
    { name: 'Superposition', logo: '/images/projects/superposition.svg' },
    { name: 'Robinhood', logo: '/images/projects/robinhood.svg' },
    { name: 'Fairblock', logo: '/images/projects/fairblock.svg' },
    { name: 'Renegade', logo: '/images/projects/renegade.svg' },
    { name: 'RedStone', logo: '/images/projects/redstone.svg' },
    { name: 'Syndicate', logo: '/images/projects/syndicate.svg' },
];

export function EcosystemStats() {
    const { projects } = useProjects();
    const totalProjects = projects.length;

    return (
        <div className="w-full">
            {/* Top dark banner - Stats */}
            <div className="bg-[#0A071A] text-white py-4 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-2 text-sm tracking-wide font-medium relative group">
                    <span className="text-white/60 uppercase">There are</span>
                    <span className="text-xl font-bold">{totalProjects}</span>
                    <span className="text-white/60 uppercase">Projects in the Stylus Ecosystem</span>
                    <div className="relative flex items-center justify-center cursor-help">
                        <Info className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors ml-1" />

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white text-gray-900 text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                            Total integrations, tooling, and live applications in the Stylus ecosystem.
                            <div className="text-[10px] text-gray-500 mt-1">Updated in real-time</div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom white banner - Scrolling Logos */}
            <div className="bg-white py-6 md:py-8 border-b border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">

                    <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap md:shrink-0 text-center md:text-left">
                        Prominent Projects<br />Leveraging Stylus
                    </div>

                    {/* Logo Carousel Container */}
                    <div className="relative w-full overflow-hidden mask-edges">
                        <div className="flex items-center gap-12 whitespace-nowrap animate-scroll hover:pause">
                            {/* Double mapping for seamless infinite loop */}
                            {[...PROMINENT_PROJECTS, ...PROMINENT_PROJECTS].map((project, i) => (
                                <div key={i} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all font-['Outfit'] font-extrabold text-xl text-gray-800 shrink-0">
                                    {/* Fallback to text if logo fails, otherwise show fake SVG or text */}
                                    {project.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
