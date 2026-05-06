export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
        <span>
          &copy; {year} Ray Hamilton Engineering, LLC. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/RdHamilton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4F46E5] transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ray-hamilton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4F46E5] transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
