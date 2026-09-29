import { Zap, Shield, Code2, Sparkles, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EcosystemStats } from './EcosystemStats';

const features = [
  {
    icon: Code2,
    title: 'One Chain, Many Languages',
    description: 'Build in Rust, C, C++, and more. Anything that compiles to WASM.'
  },
  {
    icon: Zap,
    title: 'No Rust, No Problem',
    description: 'Import existing Rust modules into your Solidity contracts seamlessly.'
  },
  {
    icon: Shield,
    title: 'Safer by Design',
    description: 'Build safer with affordability, reentrancy detection by the Rust SDK.'
  },
  {
    icon: Sparkles,
    title: 'Full EVM Compatibility',
    description: 'Go beyond Solidity and seamlessly interoperate with EVM contracts.'
  }
];

interface HeroSectionProps {
  onSearchClick?: () => void;
}

export function HeroSection({ onSearchClick }: HeroSectionProps) {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-gradient-to-br from-[#5F4DED] via-[#6B5CE7] to-[#7B68EE]"
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-7">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Stylus Community Hub
            </div>

            <h1 className="text-5xl lg:text-7xl tracking-tight font-['Outfit'] font-bold leading-tight">
              <span className="text-white">Do more,</span>{' '}
              <span className="text-white/90 block flex items-center justify-center lg:justify-start gap-3">
                with <img src="/images/StylusDiamond.svg" alt="Stylus" className="h-[0.8em] inline-block" /> Stylus.
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Build with Rust and C, on any Arbitrum chain.
            </p>

            {/* Fake Search Bar - Triggers Search Modal */}
            <button
              onClick={onSearchClick}
              className="w-full max-w-xl mx-auto lg:mx-0 mt-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all group cursor-pointer shadow-lg"
            >
              <Search className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
              <span className="flex-1 text-left text-white/60 group-hover:text-white/80 transition-colors font-medium">
                Search packages, tools, docs...
              </span>
              <kbd className="px-3 py-1.5 text-sm font-semibold text-white/80 bg-white/10 border border-white/30 rounded-lg group-hover:bg-white/20 transition-all">
                ⌘K
              </kbd>
            </button>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white text-[#5F4DED] font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Read Docs
              </a>
              <a
                href="#build"
                className="px-6 py-3 rounded-lg bg-transparent text-white font-medium border-2 border-white/50 hover:bg-white/10 transition-all"
              >
                Start Building
              </a>
              <Link
                to="/ecosystem"
                className="px-6 py-3 rounded-lg bg-white/15 text-white font-medium border-2 border-white/30 hover:bg-white/25 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                🌐 Explore Ecosystem
              </Link>
            </div>
          </div>

          {/* Right side - Character illustration */}
          <div className="hidden lg:flex relative justify-end order-2">
            <img
              src="/images/IsolatedApu.svg"
              alt="StylusUp Community Characters"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Chainlink-style stats and logos banner */}
      <EcosystemStats />

      {/* Features grid - Below the hero */}
      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#5F4DED] hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5F4DED]/0 to-[#7B68EE]/0 group-hover:from-[#5F4DED]/5 group-hover:to-[#7B68EE]/5 rounded-xl transition-all" />
                <div className="relative">
                  <feature.icon className="w-8 h-8 text-[#5F4DED] mb-4" />
                  <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
