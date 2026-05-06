export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-12 text-center">
          <h2
            className="text-3xl font-extrabold text-[#1E293B] mb-4"
            style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Work with me
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl mx-auto">
            Looking for a product-focused engineer who can build, ship, and lead?
            Let&apos;s talk.
          </p>
          <a
            href="mailto:ray@rhamiltoneng.com"
            className="inline-flex items-center justify-center rounded-lg bg-[#4F46E5] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#6366F1] active:bg-[#3730A3] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
