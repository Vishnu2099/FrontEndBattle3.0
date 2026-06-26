"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const finalText = "Organize your chaos with track_back AI.";

  useEffect(() => {
    let index = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const interval = setInterval(() => {
      const nextIndex = Math.min(index + 1, finalText.length);
      const nextText = finalText
        .split("")
        .map((character, charIndex) => {
          if (charIndex < nextIndex) return character;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(nextText);
      index = nextIndex;

      if (index >= finalText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center animate-scan sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,153,50,0.16), transparent 20%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '100% 100%, 100% 100%, 34px 34px, 34px 34px' }}></div>
      <div className="hero-orb pointer-events-none absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-forsythia/20 blur-3xl"></div>
      <div className="hero-orb pointer-events-none absolute bottom-[12%] right-[8%] h-56 w-56 rounded-full bg-saffron/20 blur-3xl" style={{ animationDelay: '1.5s' }}></div>

      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-forsythia/30 bg-forsythia/10 px-4 py-2 text-[0.65rem] font-mono uppercase tracking-[0.35em] text-forsythia transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/50 hover:bg-forsythia/15 hover:shadow-[0_0_20px_rgba(255,153,50,0.16)]">
          <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M11 4a7 7 0 1 0 7 7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Instantly organizes messy notes</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-4xl leading-[1.05] text-forsythia sm:text-5xl lg:text-7xl">
          <span className="block font-mono">
            {displayText}
            <span className="typing-cursor ml-1 align-middle text-forsythia/80">|</span>
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-8 text-mystic sm:text-lg md:text-xl">
          Open your notepad, drop in messy thoughts or meeting notes, and let AI turn them into organized summaries, action lists, and tidy folders in seconds.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 bg-forsythia px-8 py-4 font-mono font-bold text-oceanic transition-all duration-300 hover:-translate-y-1 hover:bg-saffron hover:shadow-[0_0_24px_rgba(255,153,50,0.22)]">
            <span>Start Typing</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="flex items-center justify-center gap-2 border border-nocturnal px-8 py-4 font-mono text-arctic transition-all duration-300 hover:-translate-y-1 hover:bg-nocturnal hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>View Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
}