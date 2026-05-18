interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "VaultMTG",
    description:
      "A desktop companion app for Magic: The Gathering Arena — real-time draft pick recommendations, match history tracking, deck performance analytics, and metagame insights.",
    tags: ["Go", "React", "TypeScript", "SQLite", "Electron"],
    href: "https://vaultmtg.app",
    featured: true,
  },
  {
    name: "rhamiltoneng.com",
    description:
      "Personal engineering portfolio — statically exported Next.js site hosted on AWS S3 + CloudFront, showcasing products and services.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-3xl font-extrabold text-[#1E293B] mb-12"
          style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => {
            const card = (
              <div
                key={project.name}
                className="group relative rounded-lg border border-[#E2E8F0] bg-white p-6 transition-all hover:shadow-md hover:border-[#6366F1]"
              >
                {project.featured && (
                  <span className="mb-3 inline-block rounded-full bg-[#4F46E5] px-3 py-0.5 text-xs font-semibold text-white tracking-wide">
                    Featured
                  </span>
                )}
                <h3
                  className="text-lg font-bold text-[#1E293B] mb-3"
                  style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {project.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Visit ${project.name}`}
              >
                {card}
              </a>
            ) : (
              <div key={project.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
