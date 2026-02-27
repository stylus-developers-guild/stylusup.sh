import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CommunityBanner() {
    return (
        <section
            id="community"
            className="relative w-full min-h-[500px] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
            style={{
                backgroundImage: 'url(/images/StylusUpCommunityCard.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto w-full">
                <div className="space-y-4 mb-12">
                    <div className="flex justify-center mb-6">
                        <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-['Outfit'] tracking-tight">
                        Join the Stylus Community
                    </h2>
                    <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
                        Contribute to the ecosystem. Share your projects, write tutorials, or help others get started.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="https://github.com/OffchainLabs/awesome-stylus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-[#5F4DED] font-semibold rounded-[8px] hover:bg-gray-100 transition-colors w-full sm:w-auto text-[15px]"
                        >
                            Contribute on GitHub
                        </a>
                        <Link
                            to="/ecosystem/submit"
                            onClick={() => window.scrollTo(0, 0)}
                            className="px-8 py-3 bg-[#5F4DED] border border-white text-white font-semibold rounded-[8px] hover:bg-[#4C3DCD] transition-colors w-full sm:w-auto backdrop-blur-sm text-[15px] inline-block"
                        >
                            Submit your project
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-12" />

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                    <div className="space-y-1">
                        <div className="text-4xl font-light font-['Outfit']">500+</div>
                        <div className="text-sm text-white/80 font-normal">Developers</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-4xl font-light font-['Outfit']">30+</div>
                        <div className="text-sm text-white/80 font-normal">Projects</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-4xl font-light font-['Outfit']">50+</div>
                        <div className="text-sm text-white/80 font-normal">Resources</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-4xl font-light font-['Outfit']">5+</div>
                        <div className="text-sm text-white/80 font-normal">Languages</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
