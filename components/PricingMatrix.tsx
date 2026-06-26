"use client";
import { useState } from "react";

type Cycle = "monthly" | "annual";
type Currency = "USD" | "EUR" | "INR";

const pricingMatrix = {
  monthly: {
    USD: { free: 0, pro: 4.99 },
    EUR: { free: 0, pro: 4.49 },
    INR: { free: 0, pro: 399 },
  },
  annual: {
    USD: { free: 0, pro: 59.99 },
    EUR: { free: 0, pro: 53.99 },
    INR: { free: 0, pro: 4799 },
  },
};

const currencySymbols = { USD: "$", EUR: "€", INR: "₹" } as const;

export default function PricingMatrix() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [isAnnual, setIsAnnual] = useState(false);

  const cycle = isAnnual ? "annual" : "monthly";
  const currentPrice = pricingMatrix[cycle][currency].pro;
  const currentSymbol = currencySymbols[currency];
  const billingLabel = isAnnual ? "/yr" : "/mo";

  return (
    <section id="pricing" className="scroll-mt-24 border-t border-nocturnal bg-oceanic px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.35em] text-mystic">Pricing</p>
          <h2 className="font-mono text-4xl text-arctic sm:text-5xl">Choose your flow</h2>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 rounded-[999px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 py-3 shadow-[0_0_35px_rgba(255,255,255,0.04)] backdrop-blur-xl">
          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value as Currency)}
            className="cursor-pointer rounded-full border border-forsythia/20 bg-[#071019] px-4 py-2.5 font-mono text-sm text-forsythia outline-none transition-all duration-300 hover:border-saffron/60 hover:bg-[#0A131B] hover:shadow-[0_0_20px_rgba(255,153,50,0.16)] focus:border-saffron focus:ring-2 focus:ring-forsythia/20"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>

          <label className="flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-[#0B141A]/90 px-4 py-2.5 font-mono text-sm text-mystic shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300 hover:border-forsythia/30 hover:bg-[#101821] hover:shadow-[0_0_18px_rgba(255,153,50,0.12)]">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 19V9" strokeLinecap="round" />
                <path d="M12 19V5" strokeLinecap="round" />
                <path d="M19 19v-7" strokeLinecap="round" />
              </svg>
              Monthly
            </span>
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={(event) => setIsAnnual(event.target.checked)}
              className="relative h-6 w-12 appearance-none rounded-full bg-nocturnal transition-all duration-300 checked:bg-saffron before:absolute before:left-1 before:top-1 before:h-4 before:w-4 before:rounded-full before:bg-arctic before:shadow-[0_0_10px_rgba(255,255,255,0.2)] before:transition-transform before:duration-300 checked:before:translate-x-6"
            />
            <span className="flex items-center gap-2">
              Annual <span className="text-xs text-saffron">(save more)</span>
            </span>
          </label>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.01))] p-8 shadow-[0_0_35px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/30 hover:shadow-[0_0_50px_rgba(255,153,50,0.12)]">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 p-2.5 text-forsythia">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                </svg>
              </span>
              <h3 className="font-mono text-2xl text-arctic">Free</h3>
            </div>
            <p className="mb-6 font-mono text-5xl font-bold leading-none text-mystic sm:text-6xl">Free</p>
            <ul className="mb-8 space-y-3 font-sans text-mystic opacity-90">
              <li>✓ track_back default AI</li>
              <li>✓ Full access to core features</li>
              <li>✓ Local storage</li>
            </ul>
            <button className="w-full rounded-full border border-white/10 py-3.5 font-mono text-arctic transition duration-300 hover:-translate-y-0.5 hover:bg-nocturnal">Get Started</button>
          </div>

          <div className="relative rounded-[2rem] border border-saffron/40 bg-[linear-gradient(135deg,_rgba(255,153,50,0.16),_rgba(255,153,50,0.04))] p-8 shadow-[0_0_45px_rgba(255,153,50,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/60 hover:shadow-[0_0_65px_rgba(255,153,50,0.2)]">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-saffron px-4 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-oceanic">Pro</div>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-forsythia/20 bg-forsythia/10 p-2.5 text-forsythia">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
              </span>
              <h3 className="font-mono text-2xl text-forsythia">Custom AI</h3>
            </div>
            <div className="mb-6 flex items-baseline font-mono text-5xl font-bold leading-none text-arctic sm:text-6xl">
              <span>{`${currentSymbol}${currentPrice}`}</span>
              <span className="ml-2 text-sm font-medium text-mystic">{billingLabel}</span>
            </div>
            <p className="mb-6 text-sm leading-7 text-mystic">
              Unlock advanced organization, custom prompts, and premium AI workflows for your notes.
            </p>
            <ul className="mb-8 space-y-3 font-sans text-mystic">
              <li>✓ Add your custom API Keys (OpenAI, Anthropic)</li>
              <li>✓ Free cloud storage & sync</li>
              <li>✓ Priority node processing</li>
            </ul>
            <button className="w-full rounded-full bg-forsythia py-3.5 font-mono font-bold text-oceanic transition duration-300 hover:-translate-y-0.5 hover:bg-saffron">Upgrade to Pro</button>
          </div>
        </div>
      </div>
    </section>
  );
}