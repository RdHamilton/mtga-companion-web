export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <span
          className="text-lg font-extrabold text-[#1E293B] tracking-tight"
          style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Ray Hamilton Engineering
        </span>
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-[#475569] hover:text-[#4F46E5] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-[#475569] hover:text-[#4F46E5] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[#475569] hover:text-[#4F46E5] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
