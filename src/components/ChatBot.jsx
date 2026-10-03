import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Leaf, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ──────────────────────────────────────────────────────────────────────────────
// Cloudflare Workers AI — calls go through /api/cf-ai (Vercel serverless fn).
// Credentials are kept server-side; never exposed to the browser.
// ──────────────────────────────────────────────────────────────────────────────
const CF_MODEL = '@cf/meta/llama-3.1-8b-instruct';

const SYSTEM_PROMPT = `You are PlantAI Assistant — a friendly, concise plant-disease expert chatbot embedded on the PlantAI website.
The site classifies Chrysanthemum and Jasmine leaf diseases (Bacterial Leaf Spot, Septoria Leaf Spot, Rust, Multiple Diseases) using a CNN model hosted on Hugging Face Spaces.
Only answer questions about: plant diseases, plant care, how to use the classifier, treatment advice, fertilizers, and agriculture.
If the question is unrelated to plants or agriculture, politely say so and redirect the conversation.
Keep answers short (2–4 sentences). Use bullet points when listing steps or treatments.`;

async function askCloudflareAI(messages) {
    // /api/cf-ai → Vercel serverless function that proxies to Cloudflare AI
    const url = '/api/cf-ai';
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: CF_MODEL,
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
            ],
        }),
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Cloudflare AI error ${res.status}: ${err}`);
    }

    const data = await res.json();
    // Workers AI returns { result: { response: "..." }, ... }
    return data?.result?.response ?? 'Sorry, I could not generate a response.';
}

// ──────────────────────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────────────────────
export default function ChatBot() {
    const { t } = useLanguage();
    const cb = t.chatbot;

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Show welcome message when panel first opens
    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages([{ role: 'assistant', content: cb.welcome }]);
        }
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-scroll to latest message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    // Focus input when opened
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    async function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;

        const userMsg = { role: 'user', content: text };
        const next = [...messages, userMsg];
        setMessages(next);
        setInput('');
        setLoading(true);

        try {
            // Send only role+content to the API (exclude system — it's prepended inside askCloudflareAI)
            const history = next.map(({ role, content }) => ({ role, content }));
            const reply = await askCloudflareAI(history);
            setMessages([...next, { role: 'assistant', content: reply }]);
        } catch (e) {
            console.error(e);
            setMessages([...next, {
                role: 'assistant',
                content: cb.error || 'Sorry, something went wrong. Please try again.',
            }]);
        } finally {
            setLoading(false);
        }
    }

    function handleKey(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <>
            {/* ── Floating Action Button ── */}
            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Open chat"
                className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-green-500 hover:bg-green-400
          shadow-xl shadow-green-500/40
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 active:scale-95
          ${open ? 'rotate-90 bg-green-600' : ''}
        `}
                style={{ boxShadow: '0 0 24px rgba(34,197,94,0.5)' }}
            >
                {open
                    ? <X className="w-6 h-6 text-black" />
                    : <MessageCircle className="w-6 h-6 text-black" />}
            </button>

            {/* ── Notification badge (pulse dot when closed) ── */}
            {!open && (
                <span className="fixed bottom-[4.75rem] right-6 z-50 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a1f0a] animate-pulse" />
            )}

            {/* ── Chat Panel ── */}
            <div
                className={`
          fixed bottom-24 right-6 z-50
          w-[370px] max-w-[calc(100vw-1.5rem)]
          flex flex-col
          rounded-2xl overflow-hidden
          border border-green-500/20
          transition-all duration-300 origin-bottom-right
          ${open
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'}
        `}
                style={{
                    background: 'rgba(10, 31, 10, 0.92)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(34,197,94,0.08)',
                    maxHeight: 'calc(100vh - 8rem)',
                }}
            >
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-green-500/15 bg-green-500/5 shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm leading-tight">{cb.title}</p>
                        <p className="text-green-400/70 text-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                            {cb.online}
                        </p>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                        <X className="w-4 h-4 text-green-100/60" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            {msg.role === 'assistant' && (
                                <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Bot className="w-3.5 h-3.5 text-green-400" />
                                </div>
                            )}
                            <div
                                className={`
                  max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                  ${msg.role === 'user'
                                        ? 'bg-green-500 text-black font-medium rounded-tr-none'
                                        : 'bg-white/5 border border-white/8 text-green-100/90 rounded-tl-none'}
                `}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {loading && (
                        <div className="flex gap-2">
                            <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Bot className="w-3.5 h-3.5 text-green-400" />
                            </div>
                            <div className="bg-white/5 border border-white/8 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                {[0, 0.2, 0.4].map((delay, i) => (
                                    <span
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-green-400"
                                        style={{ animation: `bounce 1s ${delay}s infinite` }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input row */}
                <div className="px-3 py-3 border-t border-green-500/15 bg-black/20 shrink-0">
                    <div className="flex gap-2 items-end">
                        <textarea
                            ref={inputRef}
                            rows={1}
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                e.target.style.height = 'auto';
                                e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
                            }}
                            onKeyDown={handleKey}
                            placeholder={cb.placeholder}
                            disabled={loading}
                            className={`
                flex-1 resize-none rounded-xl px-3 py-2.5
                bg-white/5 border border-white/10
                text-white text-sm placeholder-green-100/30
                focus:outline-none focus:border-green-500/40 focus:bg-white/8
                transition-colors duration-200
                disabled:opacity-50
                min-h-[42px] max-h-[100px]
              `}
                            style={{ scrollbarWidth: 'none' }}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || loading}
                            className={`
                w-[42px] h-[42px] rounded-xl shrink-0
                flex items-center justify-center
                transition-all duration-200
                ${input.trim() && !loading
                                    ? 'bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-500/30 hover:scale-105 active:scale-95'
                                    : 'bg-white/5 text-green-100/30 cursor-not-allowed'}
              `}
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-green-100/20 text-[10px] text-center mt-2">{cb.powered}</p>
                </div>
            </div>

            {/* Bounce keyframe (for typing dots) */}
            <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
        </>
    );
}
