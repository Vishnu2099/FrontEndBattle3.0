"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureBento from "@/components/FeatureBento";
import PricingMatrix from "@/components/PricingMatrix";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-oceanic selection:bg-forsythia selection:text-oceanic">
      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#02070b] transition-opacity duration-300" aria-live="polite" aria-busy={isLoading}>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-forsythia">
              Loading track_back
            </p>
            <div className="mt-4 h-1 w-28 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-forsythia" />
            </div>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#031018]/80 px-3 py-3 backdrop-blur-xl sm:px-5 lg:px-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <a href="#top" className="font-mono text-xl font-bold tracking-tighter text-forsythia drop-shadow-[0_0_16px_rgba(255,153,50,0.45)]">
              track_back.
            </a>

            <div className="ml-auto flex flex-1 items-center justify-end gap-2">
              <nav aria-label="Primary navigation" className="hidden gap-6 font-mono text-sm text-arctic md:flex md:items-center">
                <a href="#product-showcase" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forsythia/10 hover:text-forsythia hover:shadow-[0_0_16px_rgba(255,153,50,0.14)]">Features</a>
                <a href="#pricing" className="rounded-full px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forsythia/10 hover:text-forsythia hover:shadow-[0_0_16px_rgba(255,153,50,0.14)]">Pricing</a>
              </nav>
              <div className="hidden flex-wrap items-center justify-end gap-2 lg:flex">
                {['Docs', 'Search', 'Inbox', 'Projects'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-forsythia/20 bg-forsythia/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-forsythia transition-all duration-300 hover:-translate-y-0.5 hover:border-forsythia/40 hover:bg-forsythia/15 hover:shadow-[0_0_16px_rgba(255,153,50,0.16)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div id="top">
          <Hero />
          <SocialProof />
          <ProductShowcase />
          <FeatureBento />
          <PricingMatrix />
        </div>

        <footer className="border-t border-white/10 bg-black px-6 py-14 text-center font-mono text-xs text-mystic sm:text-sm">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-3">
            <p className="rounded-full border border-forsythia/20 bg-forsythia/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-forsythia">
              track_back AI
            </p>
            <p className="max-w-2xl leading-7 text-mystic/80">
              Built for notes that deserve a sharper ending and a calmer way to move forward.
            </p>
            <p className="text-arctic">
              © 2026 <span className="font-semibold text-forsythia">track_back AI</span>. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}