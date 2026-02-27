import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ExternalLink, Github, Search, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();

    const scrollToTarget = () => {
      // Small delay to allow mobile menu to close and page to render if routed
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80; // Height of sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, mobileMenuOpen ? 300 : 100);
    };

    if (location.pathname !== '/') {
      navigate('/');
      scrollToTarget();
    } else {
      scrollToTarget();
    }
  };

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearchClick?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearchClick]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
              <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                <span className="text-[#5F4DED]">Stylus</span>
                <span className="text-[#0F172A] italic">Up</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">

              {/* Build Dropdown (Experienced Builders) */}
              <div className="relative group py-4">
                <button className="flex items-center gap-1 text-gray-600 group-hover:text-[#5F4DED] transition-colors font-medium">
                  Build <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full mt-0 left-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 flex flex-col translate-y-2 group-hover:translate-y-0">
                  <a href="#build" onClick={(e) => handleNavClick(e, 'build')} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium">Platform Overview</a>
                  <a href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium flex justify-between items-center">
                    Official Docs <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://github.com/OffchainLabs/stylus-sdk-rs/" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium flex justify-between items-center">
                    Rust SDK <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <div className="border-t border-gray-100 my-1 mx-2"></div>
                  <a href="https://github.com/OffchainLabs/awesome-stylus" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs text-gray-500 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors flex justify-between items-center">
                    Awesome Stylus Tools <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </div>

              {/* Learn Dropdown (New Builders) */}
              <div className="relative group py-4">
                <button className="flex items-center gap-1 text-gray-600 group-hover:text-[#5F4DED] transition-colors font-medium">
                  Learn <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full mt-0 left-0 w-64 bg-white border border-gray-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 flex flex-col translate-y-2 group-hover:translate-y-0">
                  <a href="#get-started" onClick={(e) => handleNavClick(e, 'get-started')} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium">Getting Started Guide</a>
                  <a href="#learn" onClick={(e) => handleNavClick(e, 'learn')} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium">Educational Materials</a>
                  <a href="https://github.com/OffchainLabs/stylus-by-example" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium flex justify-between items-center">
                    Stylus by Example <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                </div>
              </div>

              {/* Ecosystem Dropdown (Delegates/Investors/All) */}
              <div className="relative group py-4">
                <button
                  onClick={() => { navigate('/ecosystem'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1 text-gray-600 group-hover:text-[#5F4DED] transition-colors font-medium"
                >
                  Ecosystem <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full mt-0 left-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 flex flex-col translate-y-2 group-hover:translate-y-0">
                  <Link to="/ecosystem" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium">Explore Directory</Link>
                  <a href="#use-cases" onClick={(e) => handleNavClick(e, 'use-cases')} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium">Project Spotlights</a>
                  <Link to="/ecosystem/submit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#5F4DED] transition-colors font-medium flex justify-between items-center text-purple-600">
                    Submit a Project <span className="text-[10px] font-bold bg-purple-100 px-1.5 py-0.5 rounded text-purple-600">NEW</span>
                  </Link>
                </div>
              </div>

              <a
                href="#community"
                onClick={(e) => handleNavClick(e, 'community')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors font-medium"
              >
                Community
              </a>
              <button
                onClick={onSearchClick}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs bg-white border border-gray-300 rounded">⌘K</kbd>
              </button>
              <a
                href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                Docs
              </a>
            </nav>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onSearchClick}
                className="p-2 text-gray-600 hover:text-[#5F4DED] transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-900 hover:text-[#5F4DED] transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Light background */}
          <div className="absolute inset-0 bg-white" />

          {/* Menu content */}
          <div className="relative h-full flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link
                to="/"
                onClick={() => { closeMobileMenu(); window.scrollTo(0, 0); }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
                <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                  <span className="text-[#5F4DED]">Stylus</span>
                  <span className="text-[#0F172A] italic">Up</span>
                </span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-900 hover:text-[#5F4DED] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col px-6 py-12 gap-6">
              <a
                href="#get-started"
                onClick={(e) => handleNavClick(e, 'get-started')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Get Started
              </a>
              <a
                href="#use-cases"
                onClick={(e) => handleNavClick(e, 'use-cases')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#learn"
                onClick={(e) => handleNavClick(e, 'learn')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Learn
              </a>
              <a
                href="#build"
                onClick={(e) => handleNavClick(e, 'build')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Build
              </a>
              <a
                href="#community"
                onClick={(e) => handleNavClick(e, 'community')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Community
              </a>
              <Link
                to="/ecosystem"
                onClick={() => { closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors font-medium"
              >
                Ecosystem
              </Link>

              <div className="pt-6 border-t border-gray-200">
                <a
                  href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl text-gray-900 hover:text-[#5F4DED] transition-colors"
                  onClick={closeMobileMenu}
                >
                  Docs
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/OffchainLabs/stylus-sdk-rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-[#5F4DED] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/arbitrum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-[#5F4DED] transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tap to close hint */}

          </div>
        </div>
      )}
    </>
  );
}
