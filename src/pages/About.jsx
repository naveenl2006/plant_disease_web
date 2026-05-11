import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Brain, Globe, Shield, ArrowRight, Code2, Database, Zap } from 'lucide-react';

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
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            About PlantAI
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Helping Farmers with <span className="text-green-400">AI</span>
          </h1>
          <p className="text-green-100/60 text-lg max-w-2xl mx-auto leading-relaxed">
            PlantAI is a free, browser-based plant disease detection tool powered by a deep learning model
            trained on thousands of plant disease images. Our mission is to make agricultural expertise
            accessible to every farmer, anywhere in the world.
          </p>
        </div>

        {/* What is plant disease classification */}
        <FadeInSection>
          <div className="glass rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-white text-xl font-bold">What is Plant Disease Classification?</h2>
            </div>
            <div className="space-y-4 text-green-100/70 leading-relaxed">
              <p>
                Plant disease classification is the process of automatically identifying diseases in plants
                from images using computer vision and machine learning. Traditional diagnosis requires a trained
                agronomist physically examining the plant — which is expensive, slow, and not always accessible
                to small-scale farmers.
              </p>
              <p>
                With deep learning, a trained neural network can analyze a photo of a plant leaf and identify
                the disease (or confirm healthy status) within seconds — with accuracy comparable to expert
                agronomists in controlled conditions.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Benefits */}
        <FadeInSection delay={100}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why It Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                color: 'green',
                title: 'Early Detection Saves Crops',
                desc: 'Plant diseases can spread from a few infected plants to an entire field within days. Early detection allows targeted treatment before widespread damage occurs, saving 40–80% of what would otherwise be lost.',
              },
              {
                icon: Globe,
                color: 'blue',
                title: 'Higher Yield for Farmers',
                desc: 'Untreated plant diseases reduce global crop yield by 20–40% annually. Timely disease management directly translates to more food and income for farming families.',
              },
              {
                icon: Shield,
                color: 'purple',
                title: 'Reduces Crop Loss',
                desc: 'Knowing the exact disease enables targeted treatment rather than blanket pesticide use, reducing chemical costs, environmental impact, and resistance development.',
              },
              {
                icon: Leaf,
                color: 'teal',
                title: 'Sustainable Agriculture',
                desc: 'Precision agriculture enabled by AI helps farmers apply exactly the right treatment at the right time — reducing overuse of chemicals and protecting soil health for future seasons.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 border border-white/5 card-hover">
                <div className={`w-10 h-10 rounded-xl bg-${color}-500/20 border border-${color}-500/30 flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 text-${color}-400`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-green-100/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Tech Stack */}
        <FadeInSection delay={200}>
          <div className="glass rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-white text-xl font-bold">Technology Stack</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { emoji: '⚛️', name: 'React.js', desc: 'UI Framework' },
                { emoji: '🎨', name: 'Tailwind CSS', desc: 'Styling' },
                { emoji: '🤗', name: 'Hugging Face', desc: 'AI Model Host' },
                { emoji: '🔗', name: 'Axios', desc: 'API Calls' },
                { emoji: '📷', name: 'WebRTC', desc: 'Camera API' },
                { emoji: '⚡', name: 'Vite', desc: 'Build Tool' },
                { emoji: '🧠', name: 'CNN Model', desc: 'Deep Learning' },
                { emoji: '🌐', name: 'Gradio API', desc: 'HF Spaces' },
              ].map(({ emoji, name, desc }) => (
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
              <h2 className="text-white text-xl font-bold">About the AI Model</h2>
            </div>
            <div className="space-y-4 text-green-100/70 leading-relaxed text-sm">
              <p>
                The disease classification model is hosted on <strong className="text-white">Hugging Face Spaces</strong> by
                <strong className="text-green-400"> Naveen2916</strong>. It uses a Convolutional Neural Network (CNN)
                trained on the <strong className="text-white">PlantVillage dataset</strong> — a publicly available benchmark
                dataset containing over 54,000 images of healthy and diseased plant leaves.
              </p>
              <p>
                The model can identify <strong className="text-white">38+ classes</strong> of plant diseases across
                multiple crops including Apple, Corn, Tomato, Potato, Rice, Wheat, Grape, and more.
                It provides confidence scores for each prediction, allowing you to assess reliability.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-yellow-300 text-xs font-semibold mb-1">⚠️ Disclaimer</p>
                <p className="text-yellow-100/70 text-xs">
                  This tool is intended as a decision-support aid, not a replacement for professional
                  agricultural advice. For critical crop decisions, please consult a certified agronomist
                  or your local agricultural extension office.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={400}>
          <div className="text-center glass rounded-3xl p-10 border border-green-500/20">
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-white text-2xl font-bold mb-3">Ready to Protect Your Crops?</h2>
            <p className="text-green-100/60 mb-6 max-w-md mx-auto">
              Use our free AI classifier to detect plant diseases instantly and get expert treatment recommendations.
            </p>
            <Link
              to="/classify"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all duration-200 glow-green"
            >
              Start Analyzing <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
