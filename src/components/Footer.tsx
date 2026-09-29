import { Github, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
              <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                <span className="text-[#5F4DED]">Stylus</span>
                <span className="text-[#0F172A] italic">Up</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              A community-owned resource hub for developers building with Stylus on Arbitrum.
              Built by developers, for developers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/OffchainLabs/stylus-sdk-rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ecosystem & Projects */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Ecosystem</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/ecosystem" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Explore Directory
                </Link>
              </li>
              <li>
                <Link to="/ecosystem/submit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Submit a Project
                </Link>
              </li>
              <li>
                <a href="#use-cases" onClick={(e) => handleHashLink(e, 'use-cases')} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Project Spotlights
                </a>
              </li>
              <li>
                <a href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Official Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#get-started" onClick={(e) => handleHashLink(e, 'get-started')} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#learn" onClick={(e) => handleHashLink(e, 'learn')} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Learn & Tutorials
                </a>
              </li>
              <li>
                <a href="#build" onClick={(e) => handleHashLink(e, 'build')} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Build
                </a>
              </li>
              <li>
                <a href="#community" onClick={(e) => handleHashLink(e, 'community')} className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Community Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Stylus Developers Guild. Community-owned and maintained.
          </p>
          <div className="flex gap-6 text-sm">
          </div>
        </div>
      </div>
    </footer>
  );
}
