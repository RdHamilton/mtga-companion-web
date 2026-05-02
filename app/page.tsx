export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">Ray Hamilton Engineering</span>
          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Ray Hamilton Engineering, LLC
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Building modern software solutions. Specializing in desktop and web applications,
            tooling, and developer experiences.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ray Hamilton Engineering, LLC is a software development company focused on crafting
            high-quality applications for desktop and web platforms. From concept to deployment,
            we build tools that developers and end-users love.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-semibold mb-2">MTGA Companion</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A desktop companion app for Magic: The Gathering Arena — tracking match history,
                drafts, deck performance, and metagame insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-gray-400 text-lg">
            Interested in working together?{" "}
            <a
              href="mailto:ray.hamilton@stablekernel.com"
              className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Ray Hamilton Engineering, LLC. All rights reserved.
      </footer>
    </div>
  );
}
