export default function SocialProof() {
  const names = ["Amazon", "Google", "Perplexity", "ChatGPT", "Claude"];

  return (
    <section className="border-y border-nocturnal/70 bg-oceanic/80 py-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.35em] text-forsythia">
          Trusted by pioneers
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {names.map((name) => (
            <span
              key={name}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.2em] text-mystic/85 shadow-[0_0_24px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-forsythia/40 hover:bg-forsythia/10 hover:text-arctic"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}