'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHIPS = ['Treatments', 'Timings', 'Book a visit', 'Where are you located?'];

export default function DentistDemoPage() {
    const [locale, setLocale] = useState<'hi' | 'en'>('hi');
    const [msgs, setMsgs] = useState<Msg[]>([
        { role: 'assistant', content: 'नमस्ते! मैं The Dentist का assistant हूँ। दांतों से जुड़ा कोई सवाल हो, या visit book करनी हो — बताइए, मैं मदद करता हूँ।' },
    ]);
    const [input, setInput] = useState('');
    const [busy, setBusy] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msgs, busy]);

    async function send(text: string) {
        const clean = text.trim();
        if (!clean || busy) return;
        const next = [...msgs, { role: 'user', content: clean } as Msg];
        setMsgs(next);
        setInput('');
        setBusy(true);
        try {
            const r = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: next, locale, persona: 'dentist-demo' }),
            });
            const j = await r.json();
            setMsgs([...next, { role: 'assistant', content: j.reply || 'Maaf, phir se try kijiye. / Sorry, please try again.' }]);
        } catch {
            setMsgs([...next, { role: 'assistant', content: 'Network slow hai — ek baar phir bhejiye. / Network issue, please resend.' }]);
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
            <header className="bg-[#0B1F3A] text-white px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div>
                    <p className="font-extrabold text-lg leading-tight">The Dentist</p>
                    <p className="text-xs text-white/70">Khemnichak, Patna · AI receptionist demo by DIPC</p>
                </div>
                <div className="flex gap-1 bg-white/10 rounded-full p-1 text-xs font-bold">
                    <button onClick={() => setLocale('hi')} className={`px-3 py-1.5 rounded-full ${locale === 'hi' ? 'bg-white text-[#0B1F3A]' : 'text-white/70'}`}>हिंदी</button>
                    <button onClick={() => setLocale('en')} className={`px-3 py-1.5 rounded-full ${locale === 'en' ? 'bg-white text-[#0B1F3A]' : 'text-white/70'}`}>EN</button>
                </div>
            </header>

            <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6 flex flex-col gap-3">
                {msgs.map((m, i) => (
                    <div key={i} className={m.role === 'user' ? 'self-end bg-[#0B1F3A] text-white' : 'self-start bg-zinc-100 text-zinc-900 border border-zinc-200'} style={{ borderRadius: 18, padding: '10px 14px', maxWidth: '85%', whiteSpace: 'pre-wrap' }}>
                        {m.content}
                    </div>
                ))}
                {busy && <div className="self-start text-sm text-zinc-400">typing…</div>}
                <div ref={bottomRef} />
            </main>

            <div className="w-full max-w-2xl mx-auto px-4 pb-2 flex gap-2 overflow-x-auto">
                {CHIPS.map((c) => (
                    <button key={c} onClick={() => send(c)} disabled={busy} className="flex-none text-sm font-semibold border border-[#0B1F3A]/25 rounded-full px-4 py-2 hover:bg-[#0B1F3A] hover:text-white transition-colors disabled:opacity-50">
                        {c}
                    </button>
                ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="w-full max-w-2xl mx-auto px-4 pb-4 pt-2 flex gap-2 sticky bottom-0 bg-white/95 backdrop-blur py-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={locale === 'hi' ? 'Apna sawal likhiye…' : 'Type your question…'}
                    className="flex-1 border border-zinc-300 rounded-full px-4 py-3 text-[16px] focus:outline-none focus:border-[#0B1F3A]"
                />
                <button type="submit" disabled={busy} className="bg-[#0B1F3A] text-white font-bold rounded-full px-6 disabled:opacity-50">
                    {busy ? '…' : '➤'}
                </button>
            </form>

            <footer className="text-center text-xs text-zinc-400 pb-6 px-4">
                Demo receptionist built by <Link href="https://dipc.site" className="underline font-semibold">DIPC</Link> · admin@dipc.site · +91 70912 41322
            </footer>
        </div>
    );
}
