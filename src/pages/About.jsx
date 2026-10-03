import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Brain, Globe, Shield, ArrowRight, Code2, Database, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function FadeInSection({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  const benefitIcons = [Zap, Globe, Shield, Leaf];
  const benefitColors = ['green', 'blue', 'purple', 'teal'];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            {a.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            {a.title} <span className="text-green-400">{a.titleHighlight}</span>
          </h1>
          <p className="text-green-100/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {a.description}
          </p>
        </div>

        {/* What is plant disease classification */}
        <FadeInSection>
          <div className="glass rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-white text-xl font-bold">{a.whatIsTitle}</h2>
            </div>
            <div className="space-y-4 text-green-100/70 leading-relaxed">
              <p>{a.whatIsP1}</p>
              <p>{a.whatIsP2}</p>
            </div>
          </div>
        </FadeInSection>

        {/* Benefits */}
        <FadeInSection delay={100}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">{a.whyItMatters}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {a.benefits.map(({ title, desc }, i) => {
              const Icon = benefitIcons[i];
              const color = benefitColors[i];
              return (
                <div key={title} className="glass rounded-2xl p-6 border border-white/5 card-hover">
                  <div className={`w-10 h-10 rounded-xl bg-${color}-500/20 border border-${color}-500/30 flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 text-${color}-400`} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-green-100/60 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={200}>
          <div className="glass rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-white text-xl font-bold">{a.techStackTitle}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {a.techStack.map(({ emoji, name, desc }) => (
                <div key={name} className="text-center p-4 rounded-xl bg-white/3 border border-white/5 hover:border-green-500/20 transition-colors">
                  <div className="text-2xl mb-2">{emoji}</div>
                  <p className="text-white text-sm font-semibold">{name}</p>
                  <p className="text-green-100/50 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Model Info */}
        <FadeInSection delay={300}>
          <div className="glass rounded-3xl p-8 border border-green-500/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Database className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-white text-xl font-bold">{a.aiModelTitle}</h2>
            </div>
            <div className="space-y-4 text-green-100/70 leading-relaxed text-sm">
              <p>
                {a.aiModelP1a} <strong className="text-white">{a.aiModelHF}</strong> {a.aiModelP1b}
                <strong className="text-green-400"> {a.aiModelAuthor}</strong>{a.aiModelP1c} <strong className="text-white">{a.aiModelDataset}</strong> {a.aiModelP1d}
              </p>
              <p>
                {a.aiModelP2a} <strong className="text-white">{a.aiModelClasses}</strong> {a.aiModelP2b}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-yellow-300 text-xs font-semibold mb-1">{a.disclaimer}</p>
                <p className="text-yellow-100/70 text-xs">{a.disclaimerText}</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={400}>
          <div className="text-center glass rounded-3xl p-10 border border-green-500/20">
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-white text-2xl font-bold mb-3">{a.ctaTitle}</h2>
            <p className="text-green-100/60 mb-6 max-w-md mx-auto">
              {a.ctaDesc}
            </p>
            <Link
              to="/classify"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all duration-200 glow-green"
            >
              {a.ctaButton} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
