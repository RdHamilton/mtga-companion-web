import {
  CodeBracketIcon,
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: CodeBracketIcon,
    title: "Full-Stack Product Engineering",
    description:
      "End-to-end product development with Go backends, React frontends, and cloud infrastructure. From architecture to deployment — built to scale.",
  },
  {
    icon: UserGroupIcon,
    title: "Technical Leadership",
    description:
      "Hands-on tech lead and engineering manager experience. Mentoring teams, setting standards, and driving delivery without losing velocity.",
  },
  {
    icon: SparklesIcon,
    title: "AI-Powered Products",
    description:
      "Integrating LLMs and ML-driven recommendations into real products. From prototype to production with measurable user impact.",
  },
  {
    icon: LightBulbIcon,
    title: "Startup Consulting",
    description:
      "Technical co-founder perspective for early-stage teams. Architecture reviews, hiring strategies, and pragmatic roadmap guidance.",
  },
];

export default function Services() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-3xl font-extrabold text-[#1E293B] mb-12"
          style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
        >
          What I Do
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isOdd = idx % 2 === 0;
            return (
              <div
                key={service.title}
                className={`rounded-lg p-8 ${isOdd ? "bg-white border border-[#E2E8F0]" : "bg-[#F1F5F9]"}`}
              >
                <Icon
                  className="mb-4 text-[#4F46E5]"
                  style={{ width: 28, height: 28 }}
                  aria-hidden="true"
                />
                <h3
                  className="text-lg font-bold text-[#1E293B] mb-3"
                  style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
