import Image from "next/image";
import Link from "next/link";

const DEMO_URL = "https://crm-dashboard-navy.vercel.app/";
const GITHUB_URL = "https://github.com/Veneering3759/leadmanager-crm";

export default function LeadManagerCaseStudy() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold tracking-tight hover:text-white">
            Daniel Aryee
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white hover:bg-white/5"
            >
              Live Demo
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-sm text-zinc-400">Case Study</p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          LeadManager CRM
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-300">
          A full-stack CRM built to manage inbound leads, track their lifecycle, and convert
          qualified leads into clients — with production-ready UI patterns and a clean REST API.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-300">
          {["React (Vite)", "Tailwind", "Node.js", "Express", "MongoDB Atlas", "Render", "Vercel"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Frontend</p>
            <p className="mt-2 font-medium">React + Tailwind UI</p>
            <p className="mt-2 text-sm text-zinc-300">
              Compact tables, inline status updates, modals, responsive layout.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Backend</p>
            <p className="mt-2 font-medium">REST API + MongoDB</p>
            <p className="mt-2 text-sm text-zinc-300">
              Express routes for leads and clients with Mongoose models.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-zinc-400">Deployment</p>
            <p className="mt-2 font-medium">Vercel + Render</p>
            <p className="mt-2 text-sm text-zinc-300">
              Render cold starts on first request; fast after warm-up.
            </p>
          </div>
        </div>
      </section>
     <section className="mx-auto max-w-5xl px-4 pb-16">
  <h2 className="text-2xl font-semibold tracking-tight">Screenshots</h2>
  <p className="mt-2 text-sm text-zinc-400">
    Selected views highlighting the user flow, UI design, and core CRM functionality.
  </p>

  <div className="mt-6 grid gap-4">
    {/* Landing */}
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <Image
        src="/projects/leadmanager/landingpage.png"
        alt="LeadManager CRM landing page"
        width={1600}
        height={900}
        className="h-auto w-full"
        priority
      />
    </div>

    {/* Main app views */}
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src="/projects/leadmanager/leads.png"
          alt="LeadManager CRM leads table"
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src="/projects/leadmanager/lead-details.png"
          alt="LeadManager CRM lead details modal"
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:col-span-2">
        <Image
          src="/projects/leadmanager/clients.png"
          alt="LeadManager CRM clients table"
          width={1200}
          height={800}
          className="h-auto w-full"
        />
      </div>
    </div>
  </div>
</section>



      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left: main story */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold tracking-tight">Problem</h2>
              <p className="mt-3 text-zinc-300">
                Small teams often manage leads in spreadsheets or inboxes. That approach makes it easy
                to lose follow-ups, misplace context, and operate without a clear lead pipeline.
              </p>

              <h2 className="mt-8 text-xl font-semibold tracking-tight">Solution</h2>
              <p className="mt-3 text-zinc-300">
                LeadManager CRM centralizes lead capture, introduces a status workflow, and provides
                a structured conversion process from lead → client, backed by a REST API and database.
              </p>

              <h2 className="mt-8 text-xl font-semibold tracking-tight">Key Features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                <li>Create leads with required validation</li>
                <li>Search and filter leads quickly</li>
                <li>Status workflow: New → Contacted → Qualified → Closed</li>
                <li>Convert leads into clients (read-only client list)</li>
                <li>Delete confirmation modal to prevent accidental actions</li>
                <li>Responsive table layout (no horizontal scrolling)</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold tracking-tight">What I focused on</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                <li>Production UI patterns (modals, inline editing, badges)</li>
                <li>Clean REST routes and predictable responses</li>
                <li>Centralized API helper for frontend requests</li>
                <li>Deployment-ready setup with environment variables</li>
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold tracking-tight">Interview highlight</h2>
              <p className="mt-3 text-zinc-300">
                “This is a full-stack CRM I built to demonstrate production-ready UI patterns like
                confirmation modals, error handling, state-driven layouts, and clean REST API design.”
              </p>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold tracking-tight">Outcome</h2>
            <p className="mt-3 text-zinc-300">
                Built and deployed a full-stack CRM to demonstrate production-ready UI patterns, clean REST API design,
                and cloud deployment workflows in an interview-ready format.
                </p>
                </div>

          </div>

          {/* Right: quick facts */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a className="underline hover:text-white" href={DEMO_URL} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a className="underline hover:text-white" href={GITHUB_URL} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">API Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li><span className="text-zinc-200">POST</span> /api/leads</li>
                <li><span className="text-zinc-200">GET</span> /api/leads</li>
                <li><span className="text-zinc-200">PATCH</span> /api/leads/:id/status</li>
                <li><span className="text-zinc-200">DELETE</span> /api/leads/:id</li>
                <li><span className="text-zinc-200">POST</span> /api/leads/:id/convert</li>
                <li><span className="text-zinc-200">GET</span> /api/clients</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Notes</h3>
              <p className="mt-3 text-sm text-zinc-300">
                First request may be slower due to Render cold start. Subsequent requests are fast.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} Daniel Aryee. Built with Next.js.
        </div>
      </footer>
    </main>
  );
}
