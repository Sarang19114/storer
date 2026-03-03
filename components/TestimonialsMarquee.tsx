"use client";

const testimonials = [
  {
    name: "Tejas",
    initials: "T",
    bg: "#2563eb", // blue-600 — explicit hex for guaranteed contrast
    quote:
      "Finally a storage app that doesn't feel like it was built in 2010. Clean, fast, and just works.",
  },
  {
    name: "Akshat",
    initials: "A",
    bg: "#7c3aed", // violet-600
    quote:
      "The OTP login is super smooth. I feel way more confident sharing files with clients through Storer.",
  },
  {
    name: "Yash",
    initials: "Y",
    bg: "#4338ca", // indigo-700
    quote:
      "Drag and drop actually works flawlessly. Uploaded an entire project folder in under a minute.",
  },
  {
    name: "Ruqayya",
    initials: "R",
    bg: "#db2777", // pink-600 — explicit hex
    quote:
      "Love how organized everything is. Documents, images, media — all neatly separated automatically.",
  },
  {
    name: "Naina",
    initials: "N",
    bg: "#e11d48", // rose-600
    quote:
      "The sharing links with expiry dates are a lifesaver. No more worrying about who still has access.",
  },
  {
    name: "Janvi",
    initials: "J",
    bg: "#059669", // emerald-600
    quote:
      "Storage metrics dashboard is so satisfying. I actually know where all my space is going now.",
  },
  {
    name: "Sarang",
    initials: "S",
    bg: "#d97706", // amber-600
    quote:
      "Switched from Google Drive and haven't looked back. The UI is miles ahead and search is instant.",
  },
  {
    name: "Samyak",
    initials: "S",
    bg: "#0891b2", // cyan-600
    quote:
      "Storer handles my RAW photo files like a champ. Upload speeds are genuinely impressive.",
  },
];

// Duplicate so the marquee loops seamlessly
const doubled = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  return (
    <section className="py-24 overflow-hidden">
      {/* keyframes injected inline so no globals.css edit needed */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold">Loved by creators and teams</h2>
      </div>

      {/* Fade edges */}
      <div
        className="marquee-wrap relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex gap-5 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-72 shrink-0 bg-white border border-slate-200 card-shadow p-5 rounded-2xl flex flex-col gap-4
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full flex items-center justify-center shrink-0 font-black text-base text-white select-none"
                  style={{ backgroundColor: t.bg }}
                >
                  {t.initials}
                </div>
                <p className="font-bold text-slate-900">{t.name}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
