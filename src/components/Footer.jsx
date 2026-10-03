import { Link } from 'react-router-dom';
import { Leaf, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/classify', label: t.nav.classification },
    { to: '/about', label: t.nav.about },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-white font-bold text-lg">Plant<span className="text-green-400">AI</span></span>
            </div>
            <p className="text-green-100/50 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{t.footer.navigation}</h3>
            <div className="space-y-2">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-green-100/50 hover:text-green-400 text-sm transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{t.footer.poweredBy}</h3>
            <div className="space-y-2 text-sm text-green-100/50">
              <p>🤗 Hugging Face Spaces</p>
              <p>🧠 Deep Learning Vision Model</p>
              <p>⚛️ React + Vite</p>
              <p>🎨 Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-100/40 text-sm flex items-center gap-1.5">
            {t.footer.builtWith} <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> {t.footer.forFarmers}
          </p>
          <p className="text-green-100/40 text-sm">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
