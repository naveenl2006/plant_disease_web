import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, TrendingUp, Zap, ChevronDown, Scan, Database, Globe } from 'lucide-react';

const LEAF_EMOJIS = ['🌿', '🍃', '🌱', '☘️', '🌾', '🍀'];

function FloatingLeaf({ style, emoji }) {
  return (
    <div
      className="absolute pointer-events-none select-none text-2xl opacity-0"
      style={{
        ...style,
        animation: `particle ${style.duration}s linear ${style.delay}s infinite`,
      }}
    >
      {emoji}
    </div>
  );
}

function StatCard({ icon: Icon, value, label, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 text-center card-hover transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-green-100/60 text-sm">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 card-hover border border-white/5 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 mb-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-green-100/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  const [leaves, setLeaves] = useState([]);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 8,
      emoji: LEAF_EMOJIS[Math.floor(Math.random() * LEAF_EMOJIS.length)],
    }));
    setLeaves(generated);
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero / Splash Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-forest-950/80 to-black/90" />
          {/* Radial glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" style={{animationDelay:'2s'}} />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay:'4s'}} />
        </div>

        {/* Floating leaves */}
        {leaves.map((leaf) => (
          <FloatingLeaf
            key={leaf.id}
            emoji={leaf.emoji}
            style={{ left: leaf.left, bottom: '-10%', duration: leaf.duration, delay: leaf.delay }}
          />
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 text-green-400 text-sm font-medium mb-8 transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI-Powered Plant Disease Detection
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Title */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Plant Disease
            <br />
            <span className="gradient-text">Classifier</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-green-100/70 max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Upload a photo of your plant and get instant AI-powered disease diagnosis with
            expert treatment recommendations — helping farmers protect crops and increase yield.
          </p>

          {/* Mini benefit pills */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {['Early Detection', 'Higher Yield', 'Less Crop Loss', 'Expert Treatment'].map((b) => (
              <span key={b} className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300/80 text-xs font-medium">
                ✓ {b}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/classify"
              className="btn-shine group flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-base rounded-2xl transition-all duration-200 glow-green shadow-xl shadow-green-500/25"
            >
              <Scan className="w-5 h-5" />
              Get Started — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 glass border border-white/10 hover:border-green-500/30 text-white font-semibold text-base rounded-2xl transition-all duration-200 hover:bg-white/5"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#benefits"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-400/60 hover:text-green-400 transition-colors animate-bounce-gentle"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Use Plant<span className="text-green-400">AI</span>?
            </h2>
            <p className="text-green-100/60 max-w-xl mx-auto">
              Early detection saves crops. Our AI model analyzes plant images in seconds and provides actionable treatment advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <StatCard icon={Leaf} value="38+" label="Plant Diseases Detected" delay={0} />
            <StatCard icon={Zap} value="<3s" label="Analysis Time" delay={100} />
            <StatCard icon={TrendingUp} value="95%+" label="Accuracy Rate" delay={200} />
            <StatCard icon={Shield} value="100%" label="Free to Use" delay={300} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              icon={Zap}
              title="Early Disease Detection"
              description="Identify plant diseases at early stages before they spread, giving you time to act and save your crop from significant damage."
              delay={0}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Increase Crop Yield"
              description="Timely treatment based on accurate diagnosis helps maintain healthy plants, leading to better quality produce and higher yields per acre."
              delay={100}
            />
            <FeatureCard
              icon={Shield}
              title="Reduce Crop Loss"
              description="Minimize financial losses by treating the right disease with the right product — avoid guesswork that wastes money and time."
              delay={200}
            />
            <FeatureCard
              icon={Database}
              title="Expert Treatment Advice"
              description="Get specific fertilizer recommendations, dosage, frequency, and best time to apply — tailored to the detected disease."
              delay={300}
            />
            <FeatureCard
              icon={Scan}
              title="Multiple Input Methods"
              description="Upload a photo, capture with your camera, or use live video detection. Works on mobile phones right in the field."
              delay={400}
            />
            <FeatureCard
              icon={Globe}
              title="Works Anywhere"
              description="Fully browser-based with no app installation needed. Works on any device with a camera — perfect for field use."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/30 to-black/30" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It <span className="text-green-400">Works</span>
            </h2>
            <p className="text-green-100/60">Three simple steps to diagnose your plant</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-green-500/40 via-green-400/60 to-green-500/40" />

            {[
              {
                step: '01',
                icon: '📸',
                title: 'Upload Image',
                desc: 'Take a photo or upload an image of your plant leaf showing symptoms.',
              },
              {
                step: '02',
                icon: '🧠',
                title: 'AI Analysis',
                desc: 'Our deep learning model analyzes the image using a trained disease classifier.',
              },
              {
                step: '03',
                icon: '💊',
                title: 'Get Treatment',
                desc: 'Receive detailed disease info, causes, and precise treatment recommendations.',
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl glass border border-green-500/30 flex items-center justify-center text-3xl shadow-lg shadow-green-500/10">
                  {icon}
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black text-xs font-bold">
                  {step.replace('0', '')}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-green-100/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/classify"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl transition-all duration-200 glow-green"
            >
              Try It Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Crops Preview */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Supported <span className="text-green-400">Plants</span>
          </h2>
          <p className="text-green-100/60 mb-8 text-sm">Detects diseases across Chrysanthemum and Jasmine — with 6 disease classes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { emoji: '🌸', name: 'Chrysanthemum — Bacterial Leaf Spot' },
              { emoji: '🌸', name: 'Chrysanthemum — Septoria Leaf Spot' },
              { emoji: '✅', name: 'Chrysanthemum — Healthy' },
              { emoji: '🌼', name: 'Jasmine — Rust' },
              { emoji: '🌼', name: 'Jasmine — Multiple Diseases' },
              { emoji: '✅', name: 'Jasmine — Healthy' },
            ].map(({ emoji, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 hover:border-green-500/30 transition-colors cursor-default card-hover"
              >
                <span className="text-xl">{emoji}</span>
                <span className="text-green-100/80 text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
