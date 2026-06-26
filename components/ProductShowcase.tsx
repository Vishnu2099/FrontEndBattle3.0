"use client";
import { useEffect, useMemo, useState } from "react";

const noteSamples = [
  "Meeting recap: align launch plan with product and design.",
  "Reminder: buy groceries, call the dentist, and review the proposal.",
  "Idea: turn today’s thoughts into a clean action list before dinner.",
];

const organizedNotes = [
  "Launch checklist",
  "Personal errands",
  "Creative ideas",
];

export default function ProductShowcase() {
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSample = useMemo(() => noteSamples[activeIndex], [activeIndex]);

  useEffect(() => {
    let index = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const interval = setInterval(() => {
      const nextIndex = Math.min(index + 1, currentSample.length);
      const nextText = currentSample
        .split("")
        .map((character, characterIndex) => {
          if (characterIndex < nextIndex) return character;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(nextText);
      index = nextIndex;

      if (index >= currentSample.length) {
        clearInterval(interval);
        window.setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % noteSamples.length);
        }, 900);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [currentSample]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="product-showcase" className="flex justify-center bg-oceanic px-6 py-20">
      <div className="flex h-[620px] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-nocturnal bg-[#0B141A] shadow-2xl md:flex-row">
        <div className="w-full overflow-y-auto border-r border-nocturnal bg-oceanic/50 p-6 md:w-1/3">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h3 className="mb-1 text-sm uppercase tracking-widest text-forsythia">track_back / Folders</h3>
              <p className="text-xs text-mystic">AI turns messy notes into clear actions</p>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-full border border-forsythia/20 bg-forsythia/10 px-3 py-2 text-xs font-mono text-forsythia transition duration-300 hover:-translate-y-0.5 hover:bg-forsythia/20"
              aria-label="Copy project link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <span>{copied ? "Copied" : "Copy link"}</span>
            </button>
          </div>

          <div className="space-y-4">
            {organizedNotes.map((folder, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded border border-nocturnal/50 bg-nocturnal p-4 transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/50 hover:shadow-[0_0_20px_rgba(255,153,50,0.1)]"
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="mb-1 font-mono text-sm text-arctic transition-colors group-hover:text-forsythia">{folder}</h4>
                    <p className="text-xs font-sans text-mystic">AI Summary: 3 clear action points ready.</p>
                  </div>
                  <button className="rounded-full border border-white/10 p-1.5 text-mystic transition hover:text-forsythia" aria-label={`Dismiss ${folder}`}>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-mystic">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="14" y="4" width="6" height="6" rx="1" />
                    <rect x="4" y="14" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" />
                  </svg>
                  <span>Structured in 1.2s</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full flex-col p-8 md:w-2/3">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-widest text-mystic opacity-50">Open your notepad</h3>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-mystic transition-all duration-300 hover:-translate-y-0.5 hover:border-forsythia/30 hover:bg-forsythia/10 hover:text-arctic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
                </svg>
                smart
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-mystic transition-all duration-300 hover:-translate-y-0.5 hover:border-forsythia/30 hover:bg-forsythia/10 hover:text-arctic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
                live
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#05080C]/80 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.35em] text-forsythia">Notebook input</p>
            <div className="min-h-[240px] whitespace-pre-wrap break-words font-mono text-lg leading-8 text-arctic">
              <span className="text-forsythia">&gt;</span> {displayText}
              <span className="typing-cursor ml-1 align-middle text-forsythia/80">|</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mystic">
            <span>Every note becomes a tidy summary with AI.</span>
            <span className="rounded-full bg-saffron px-3 py-1 font-mono text-xs font-bold text-oceanic">AI Organizing</span>
          </div>
        </div>
      </div>
    </section>
  );
}