import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/classify', label: t.nav.classification },
    { to: '/about', label: t.nav.about },
  ];

  const isActive = (path) => location.pathname === path;
  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg shadow-black/20' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-200">
              <Leaf className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Plant<span className="text-green-400">AI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(to)
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'text-green-100/70 hover:text-green-300 hover:bg-white/5'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side: Language Selector + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-green-100/70 hover:text-green-300 hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-green-500/20"
              >
                <Globe className="w-4 h-4 text-green-400" />
                <span>{currentLang?.flag} {currentLang?.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-40 glass-dark border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors duration-150 ${lang === l.code
                          ? 'bg-green-500/20 text-green-400 font-medium'
                          : 'text-green-100/70 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && <span className="ml-auto text-green-400 text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/classify"
              className="btn-shine px-5 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              {t.nav.analyzePlant}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-green-100/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="glass-dark border-t border-white/10 px-4 py-3 space-y-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(to)
                  ? 'bg-green-500/20 text-green-400'
                  : 'text-green-100/70 hover:text-white hover:bg-white/5'
                }`}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-2 pb-1 border-t border-white/10 mt-2">
            <p className="text-green-400/60 text-xs uppercase tracking-wider px-4 mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Language
            </p>
            <div className="flex gap-2 px-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsOpen(false); }}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${lang === l.code
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'text-green-100/60 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/classify"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-2.5 bg-green-500 text-black font-semibold text-sm rounded-lg text-center"
          >
            {t.nav.analyzePlant}
          </Link>
        </div>
      </div>
    </nav>
  );
}
