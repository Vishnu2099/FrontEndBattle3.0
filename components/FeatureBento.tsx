"use client";
import { useEffect, useRef, useState } from "react";

const features = [
  { title: "Contextual Sorting", desc: "AI instantly routes each thought into the right branch, keeping your notes sorted without clutter.", icon: "cube" },
  { title: "Action Extraction", desc: "Long note dumps become clear next steps, reminders, and priorities in moments.", icon: "spark" },
  { title: "Custom Prompting", desc: "Shape the output to match your workflow with a notebook style that feels natural and clean.", icon: "cog" },
  { title: "Seamless Search", desc: "Find the idea you meant, not just the exact words you typed, with instant recall.", icon: "search" }
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "cube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 7l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11v10" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v4" strokeLinecap="round" />
          <path d="M12 17v4" strokeLinecap="round" />
          <path d="M3 12h4" strokeLinecap="round" />
          <path d="M17 12h4" strokeLinecap="round" />
          <path d="M6.5 6.5l2.5 2.5" strokeLinecap="round" />
          <path d="M15 15l2.5 2.5" strokeLinecap="round" />
          <path d="M6.5 17.5l2.5-2.5" strokeLinecap="round" />
          <path d="M15 9l2.5-2.5" strokeLinecap="round" />
        </svg>
      );
    case "cog":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v2" strokeLinecap="round" />
          <path d="M12 19v2" strokeLinecap="round" />
          <path d="M4.93 4.93l1.41 1.41" strokeLinecap="round" />
          <path d="M17.66 17.66l1.41 1.41" strokeLinecap="round" />
          <path d="M3 12h2" strokeLinecap="round" />
          <path d="M19 12h2" strokeLinecap="round" />
          <path d="M4.93 19.07l1.41-1.41" strokeLinecap="round" />
          <path d="M17.66 6.34l1.41-1.41" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.35-4.35" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function FeatureBento() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="bg-oceanic px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-mystic">Introducing tree notes</p>
          <h2 className="text-5xl font-mono leading-tight text-forsythia drop-shadow-[0_0_24px_rgba(255,153,50,0.25)] sm:text-6xl lg:text-7xl">
            No more clutter.<br />No more endless lists.
          </h2>
        </div>

        <div className={`relative ${isMobile ? 'space-y-4' : 'grid gap-6 md:grid-cols-[1.3fr_0.7fr]'} `}>
          <div className="rounded-[2rem] border border-forsythia/30 bg-[radial-gradient(circle_at_top_left,_rgba(255,153,50,0.22),_transparent_44%)] p-8 shadow-[0_0_80px_rgba(255,153,50,0.16)] sm:p-10 lg:p-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-forsythia/20 bg-forsythia/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.3em] text-forsythia">
                Tree structure
              </span>
            </div>
            <div className="ml-2 flex items-start gap-4 border-l border-forsythia/20 pl-6">
              <div className="mt-1 h-3 w-3 rounded-full bg-forsythia" />
              <div>
                <h3 className="mb-2 font-mono text-2xl text-arctic">Every note grows into a clear branch</h3>
                <p className="max-w-2xl font-sans text-base leading-8 text-mystic">
                  Start with a single thought and let AI turn it into a clean, structured outline that feels lighter than a traditional list.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-[#05080c]/80 px-5 py-5 text-sm text-mystic transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/30 hover:bg-[#071018] hover:shadow-[0_0_24px_rgba(255,153,50,0.12)] sm:px-6 lg:py-6">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
                      <div className="absolute bottom-2 h-12 w-px bg-forsythia/70" />
                      <div className="mind-map-branch absolute bottom-2 h-12 w-px bg-forsythia/70" />
                      <div className="mind-map-branch absolute bottom-3 left-5 h-7 w-px rotate-[35deg] bg-forsythia/60" />
                      <div className="mind-map-branch absolute bottom-3 right-5 h-7 w-px -rotate-[35deg] bg-forsythia/60" />
                      <div className="tree-node h-3.5 w-3.5 rounded-full bg-saffron shadow-[0_0_14px_rgba(255,153,50,0.7)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-forsythia">Mind map view</p>
                    <p className="mt-1 text-base leading-7 text-mystic">A living mind-map that grows from one idea into connected branches in real time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1'}`}>
            {features.map((feat, i) => (
              <div
                key={i}
                className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/40 hover:shadow-[0_0_24px_rgba(255,153,50,0.12)] ${activeIndex === i ? "border-forsythia/40 bg-nocturnal/90" : "border-white/10 bg-nocturnal/80"}`}
                onMouseEnter={() => { if (!isMobile) setActiveIndex(i); }}
                onMouseLeave={() => { if (!isMobile) setActiveIndex(null); }}
              >
                {isMobile ? (
                  <>
                    <button
                      className="accordion-btn flex w-full items-center justify-between py-2 text-left font-mono text-lg text-forsythia focus:outline-none"
                      onClick={() => toggleAccordion(i)}
                      aria-expanded={activeIndex === i}
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-full border border-forsythia/20 bg-forsythia/10 p-2">
                          <FeatureIcon type={feat.icon} />
                        </span>
                        {feat.title}
                      </span>
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-mystic" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className={`accordion-content ${activeIndex === i ? "open" : ""}`}>
                      <div className="accordion-inner pt-2 font-sans text-mystic">{feat.desc}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full border border-forsythia/20 bg-forsythia/10 p-2 text-forsythia">
                        <FeatureIcon type={feat.icon} />
                      </span>
                      <h3 className="font-mono text-lg text-forsythia">{feat.title}</h3>
                    </div>
                    <p className="font-sans text-sm leading-7 text-mystic">{feat.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}