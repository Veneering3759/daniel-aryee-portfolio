import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-tight">Daniel Aryee</div>

          <nav className="flex items-center gap-4 text-sm text-zinc-300">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm text-zinc-400">Full-Stack Developer</p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Building clean, production-ready web applications.
        </h1>

        <p className="mt-5 max-w-2xl text-zinc-300">
          I’m <span className="text-white font-medium">Daniel Aryee</span> — I build full-stack apps with React, Node.js, and MongoDB,
          focusing on responsive UI, solid APIs, and deployment-ready workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Veneering3759"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Selected work — built end-to-end and deployed.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Project Card */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">LeadManager CRM</h3>
                <p className="mt-1 text-sm text-zinc-300">
                  Full-stack CRM to manage leads, update statuses, and convert to clients.
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                Full-Stack
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
              {["React", "Tailwind", "Node.js", "Express", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
              href="/projects/leadmanager-crm" 
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
              >
                Case Study
                </Link>

              <a
                href="https://crm-dashboard-navy.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Veneering3759/leadmanager-crm"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          I’m a full-stack developer focused on building modern, responsive web apps.
          I enjoy turning product requirements into clean UI, reliable APIs, and deployed systems.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-zinc-300">
          Email:{" "}
          <a className="underline hover:text-white" href="mailto:tnix9826@tutamail.com">
            tnix9826@tutamail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} Daniel Aryee. Built with Next.js.
        </div>
      </footer>
    </main>
  );
}
