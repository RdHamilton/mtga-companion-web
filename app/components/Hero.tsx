export default function Hero() {
  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold text-[#1E293B] leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Ray Hamilton
            </h1>
            <p className="text-lg font-medium text-[#475569] leading-relaxed mb-10">
              Engineering products that work — and teams that ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#6366F1] active:bg-[#3730A3] transition-colors"
              >
                Work with me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-[#4F46E5] bg-transparent px-6 py-3 text-sm font-semibold text-[#4F46E5] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] transition-colors"
              >
                View projects
              </a>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-[#E2E8F0] flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-6xl md:text-8xl font-extrabold text-[#94A3B8] select-none"
                style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
              >
                RH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
