import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Menu, Terminal, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jerome Jose | Senior Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Jerome Jose, a London-based senior software engineer specialising in .NET 10, Azure, Dynamics 365, React, and scalable cloud systems.",
      },
      { property: "og:title", content: "Jerome Jose | Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "10+ years building reliable cloud, CRM, payments, data, and healthcare platforms with .NET, Azure, and React.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    dates: "2026 — present",
    role: "CRM Software Engineer",
    company: "Pantheon",
    location: "London, UK",
    accent: "cyan",
    summary:
      "Designing enterprise Dynamics 365 and Power Platform solutions for private equity and investment operations, with secure Azure integrations and production-grade observability.",
    tags: ["C#", ".NET 10", "Dynamics 365", "Azure", "Dataverse"],
  },
  {
    dates: "2022 — Apr 2026",
    role: "Senior Software Engineer",
    company: "Moonpig Group",
    location: "London, UK",
    accent: "green",
    summary:
      "Modernised customer service, voucher, and payment systems into cloud-native services, cutting handling time by 33% across multi-brand operations.",
    tags: [".NET 8", "Azure Functions", "Service Bus", "React", "Terraform"],
  },
  {
    dates: "2021 — 2022",
    role: "Software Developer",
    company: "HESA",
    location: "UK",
    accent: "amber",
    summary:
      "Built secure national-scale data platforms, APIs, and React interfaces supporting higher-education reporting, validation, and audit workflows.",
    tags: ["C#", "Azure", "React", "SQL", "RBAC"],
  },
  {
    dates: "2016 — 2021",
    role: "Software Engineer",
    company: "Hospital Information Systems",
    location: "Saudi Arabia · Dubai · Cairo",
    accent: "violet",
    summary:
      "Delivered clinical, operational, and financial systems across three countries, including EMR/LIS integrations, migrations, and production rollouts.",
    tags: ["C#", ".NET", "SQL Server", "HIS", "EMR / LIS"],
  },
  {
    dates: "2014 — 2016",
    role: "Software Developer",
    company: "NuWorks Interactive Labs",
    location: "Manila, PH",
    accent: "cyan",
    summary:
      "Built high-traffic commerce and advertising platforms, improving application performance by 45% through API optimisation, caching, and backend tuning.",
    tags: ["Laravel", "CodeIgniter", "Angular", "APIs"],
  },
  {
    dates: "2011 — 2014",
    role: "System Analyst Programmer",
    company: "PhilWeb Corporation",
    location: "Manila, PH",
    accent: "green",
    summary:
      "Developed CMS and operations platforms supporting gaming operations across more than 100 branches nationwide.",
    tags: ["C#", "ASP.NET", "SQL", "CMS"],
  },
] as const;

const projects = [
  {
    path: "~/work/ai-automation",
    title: "AI-Powered Automation Suite",
    text: "Built chatbot workflows for voucher reprints, resends, and payment lookups, plus an AI document-processing service that removed repetitive supplier onboarding work.",
    result: "70% less manual parsing",
    tags: ["AI", ".NET 10", "Azure", "Document processing"],
    accent: "cyan",
  },
  {
    path: "~/work/dynamics-migration",
    title: "Dynamics 365 Service Modernisation",
    text: "Led the migration of legacy voucher, refund, exchange, and reprint workflows into Dynamics 365 Customer Service across multiple retail brands.",
    result: "33% service efficiency gain",
    tags: ["Dynamics 365", "Dataverse", "Power Apps", "Logic Apps"],
    accent: "green",
  },
  {
    path: "~/work/payments",
    title: "Finance Reconciliation & Refunds",
    text: "Engineered high-throughput booking and refund pipelines across Checkout.com, PayPal, and Klarna, turning finance processes measured in hours into minutes.",
    result: "Handled 70% of transactions",
    tags: [".NET 10", "Azure Functions", "Payments", "Event-driven"],
    accent: "amber",
  },
  {
    path: "~/work/public-data",
    title: "Issue Management System",
    text: "Developed a microservices platform that tracks and resolves university data inconsistencies, with secure role-based access and operational dashboards.",
    result: "National public-data workflows",
    tags: ["C#", "Microservices", "React", "RBAC", "SQL Server"],
    accent: "violet",
  },
  {
    path: "~/work/healthcare",
    title: "Hospital Information System",
    text: "Delivered full-scale patient, scheduling, billing, and reporting systems with EMR, laboratory, and medical workflow integrations in culturally diverse clinical environments.",
    result: "Deployed across 3 countries",
    tags: ["C#", "Azure", "SQL Server", "HIS / EMR / LIS"],
    accent: "cyan",
  },
  {
    path: "~/work/hardware-integration",
    title: "Driving Reaction Test System",
    text: "Created a C#/ASP.NET application connected to custom physical-input hardware for real-time driving reaction tests, automated scoring, and performance analysis.",
    result: "Software + hardware delivery",
    tags: ["C#", "ASP.NET", "Hardware I/O", "Real-time testing"],
    accent: "green",
  },
] as const;

const industries = [
  "Healthcare + hardware",
  "Retail + e-commerce",
  "Private equity + finance",
  "Public-sector data",
  "Gaming operations",
  "Online sales + payments",
  "Interactive marketing",
  "Financial CRM",
  "AI automation",
] as const;

const skillGroups = [
  ["languages", "c#", "typescript", "sql", "python"],
  ["frameworks", ".net-10", "asp.net-core", "web-api", "ef-core", "react"],
  ["architecture", "microservices", "clean-architecture", "event-driven", "serverless"],
  ["cloud", "azure-functions", "app-services", "service-bus", "event-grid"],
  ["data", "sql-server", "cosmos-db", "dataverse", "query-tuning"],
  ["apis", "rest", "api-management", "oauth2 / jwt", "grpc"],
  ["devops", "azure-devops", "terraform", "docker", "ci-cd"],
  ["observability", "app-insights", "opentelemetry", "serilog"],
  ["platforms", "dynamics-365", "dataverse", "power-platform"],
  ["testing", "xunit", "tdd", "cypress", "sonarcloud"],
  ["ai", "llm-integration", "rag", "prompt-engineering", "ai-automation"],
] as const;

const wins = [
  {
    icon: "🏅",
    label: "Employee of the Month",
    title: "Moonpig Group",
    detail: "Feb 2024 — recognised for delivery & impact",
  },
  {
    icon: "🏆",
    label: "Team of the Year",
    title: "Moonpig — Nominee",
    detail: "For cross-brand platform modernisation",
  },
  {
    icon: "🌟",
    label: "Employee of the Year",
    title: "NuWorks Interactive Labs",
    detail: "2015 — technical contribution & delivery excellence",
  },
  {
    icon: "📉",
    label: "Reliability win",
    title: "70% fewer deployment failures",
    detail: "Terraform modules + Azure DevOps CI/CD",
  },
] as const;

function SectionHeading({ command, title }: { command: string; title: string }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="font-mono text-sm text-green">$</span>
      <div>
        <p className="font-mono text-[11px] text-muted-foreground">{command}</p>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      </div>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "work" },
  { href: "#wins", label: "wins" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector<HTMLElement>(href)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 transition-colors hover:bg-card hover:text-cyan ${
      active === href ? "bg-card text-cyan" : "text-subtle"
    }`;

  return (
    <div className="portfolio-shell min-h-screen overflow-hidden bg-background font-sans text-foreground selection:bg-cyan/30">
      <div className="portfolio-ambience" aria-hidden="true" />
      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 pt-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Jerome Jose, back to top">
          <span className="grid size-9 place-items-center rounded-lg border border-green/30 bg-green/10 font-mono text-sm font-bold text-green">
            JJ
          </span>
          <span className="font-mono text-xs text-muted-foreground">~/jerome-jose</span>
        </a>
        <nav className="flex items-center gap-1 font-mono text-xs" aria-label="Main navigation">
          <div className="hidden items-center gap-1 sm:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={linkClass(href)}
                aria-current={active === href ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-md bg-cyan px-3 py-2 font-bold text-background transition-opacity hover:opacity-85"
          >
            contact
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-cyan/50 hover:text-cyan sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </nav>
        {menuOpen && (
          <div
            id="mobile-nav"
            className="absolute inset-x-4 top-full mt-2 rounded-lg border border-border bg-card/95 p-2 shadow-terminal backdrop-blur sm:hidden"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm transition-colors hover:bg-background hover:text-cyan ${
                  active === href ? "text-cyan" : "text-subtle"
                }`}
              >
                <span className="text-green">$</span> {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:pt-24">
          <p className="mb-4 font-mono text-sm text-green">$ whoami</p>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.88] text-foreground">
            Jerome <span className="text-cyan">Jose</span>
            <span className="terminal-caret" aria-hidden="true" />
          </h1>
          <p className="mt-7 max-w-3xl font-mono text-base leading-relaxed text-subtle sm:text-lg">
            Senior Software Engineer <span className="text-muted-foreground">·</span> London{" "}
            <span className="text-muted-foreground">·</span> 10+ years shipping reliable .NET, Azure
            &amp; React systems at scale
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 font-mono text-sm font-bold text-background transition-opacity hover:opacity-85"
            >
              <ArrowDown className="size-4" aria-hidden="true" /> view experience
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-20">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-terminal">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
              <span className="size-3 rounded-full bg-signal-red" />
              <span className="size-3 rounded-full bg-amber" />
              <span className="size-3 rounded-full bg-green" />
              <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                jerome@london: ~/portfolio — zsh
              </span>
            </div>
            <div className="grid md:grid-cols-5">
              <div className="border-b border-border p-6 sm:p-8 md:col-span-3 md:border-b-0 md:border-r">
                <p className="mb-3 font-mono text-sm text-cyan">$ cat about.md</p>
                <p className="max-w-2xl text-sm leading-7 text-subtle sm:text-base">
                  I design and support reliable software in complex environments. Currently at{" "}
                  <strong className="font-semibold text-foreground">Pantheon</strong>, a global
                  private equity firm, I build enterprise CRM solutions using Dynamics 365, Power
                  Platform, .NET 10, and Azure—turning complex investment workflows into
                  maintainable, production-ready systems.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-subtle sm:text-base">
                  My career spans the{" "}
                  <strong className="font-semibold text-foreground">
                    UK, Philippines, Saudi Arabia, UAE, and Egypt
                  </strong>
                  , including hospital deployments across three countries. Working with
                  multicultural teams has taught me to adapt quickly—from clinical software
                  connected to physical hardware to public data, retail, gaming, e-commerce, private
                  equity investment operations, and AI-enabled automation.
                </p>
                <p className="mb-3 mt-6 font-mono text-sm text-green">$ ls ./stack</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    ".NET 10",
                    "Azure",
                    "Dynamics 365",
                    "Power Platform",
                    "React",
                    "TypeScript",
                    "SQL",
                    "Terraform",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className={`skill-pill accent-${["cyan", "green", "amber", "violet"][index % 4]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8 md:col-span-2">
                <p className="mb-5 font-mono text-sm text-cyan">$ stats --verified</p>
                <dl className="space-y-5">
                  <div>
                    <dt className="font-mono text-3xl font-bold text-green">10+</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      years in software engineering
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-3xl font-bold text-cyan">33%</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      customer-service efficiency gain
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-3xl font-bold text-amber">45%</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      application performance improvement
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-3xl font-bold text-violet">3</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      countries with hospital systems delivered
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-20">
          <SectionHeading command="cat experience.log" title="Experience" />
          <div className="relative pl-6 sm:pl-8">
            <span className="absolute bottom-3 left-[7px] top-3 w-px bg-border" />
            {experience.map((job) => (
              <article key={`${job.company}-${job.dates}`} className="relative pb-9 last:pb-0">
                <span className={`timeline-dot bg-${job.accent}`} />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                  <span className={`font-mono text-sm text-${job.accent}`}>{job.company}</span>
                  <span className="font-mono text-xs text-muted-foreground sm:ml-auto">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <MapPin className="size-3" />
                  {job.location}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-subtle">{job.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-card px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-20">
          <SectionHeading command="ls ./selected-work" title="Selected work" />
          <div className="mb-6 border-y border-border py-4 sm:py-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="min-w-0 font-mono text-xs font-bold uppercase text-green">
                $ domains --range
              </p>
              <span className="shrink-0 font-mono text-[10px] text-muted-foreground sm:hidden">
                swipe →
              </span>
            </div>
            <div className="-mx-5 mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {industries.map((industry, index) => (
                <span
                  key={industry}
                  className={`skill-pill shrink-0 snap-start whitespace-nowrap accent-${["cyan", "green", "amber", "violet"][index % 4]}`}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`project-card project-${project.accent} flex min-w-0 flex-col`}
              >
                <p
                  className={`mb-2 truncate font-mono text-[11px] text-${project.accent} sm:mb-3 sm:text-xs`}
                >
                  {project.path}
                </p>
                <h3 className="text-base font-bold leading-6 text-foreground sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-subtle sm:text-sm sm:leading-6">
                  {project.text}
                </p>
                <p
                  className={`mt-3 font-mono text-[11px] font-bold leading-5 text-${project.accent} sm:mt-4 sm:text-xs`}
                >
                  → {project.result}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-20">
          <SectionHeading command="skills --list" title="Technical toolkit" />
          <div className="overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-[13px] leading-7 sm:p-7 sm:text-sm">
            <p>
              <span className="text-green">jerome@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-cyan">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground">tree skills/</span>
            </p>
            <p className="mt-2 text-foreground">skills/</p>
            {skillGroups.map(([group, ...skills], index) => (
              <p key={group} className="whitespace-nowrap">
                <span className="text-green">
                  {index === skillGroups.length - 1 ? "└── " : "├── "}
                </span>
                <span className="font-semibold text-green">{group}/</span>
                <span className="text-subtle">
                  {"\u00A0\u00A0\u00A0"}
                  {skills.join("    ")}
                </span>
              </p>
            ))}
            <p className="mt-2">
              <span className="text-green">jerome@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-cyan">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="terminal-caret text-green">▊</span>
            </p>
          </div>
        </section>

        <section id="wins" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-20">
          <SectionHeading command="cat achievements.log" title="Recent wins" />
          <div className="grid gap-4 sm:grid-cols-2">
            {wins.map((win) => (
              <article
                key={win.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-green/40 sm:p-6"
              >
                <span className="text-2xl" aria-hidden="true">
                  {win.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold uppercase text-green">{win.label}</p>
                  <h3 className="mt-1 text-base font-bold text-foreground sm:text-lg">
                    {win.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{win.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-5 pb-16">
          <div className="rounded-xl border border-border bg-card p-7 text-center sm:p-10">
            <p className="mb-3 font-mono text-sm text-green">$ ./contact.sh</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Let’s build something reliable.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-subtle">
              Open to conversations about senior engineering roles, cloud platforms, and complex
              systems worth simplifying.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:mrjeromejose@gmail.com"
                className="contact-link bg-cyan text-background"
              >
                <Mail className="size-4" /> email
              </a>
              <a
                href="https://www.linkedin.com/in/jeromefloresjose/"
                target="_blank"
                rel="noreferrer"
                className="contact-link border border-border bg-background text-foreground hover:border-green/50 hover:text-green"
              >
                <Linkedin className="size-4" /> linkedin
              </a>
              <a
                href="https://github.com/web-jeromejose"
                target="_blank"
                rel="noreferrer"
                className="contact-link border border-border bg-background text-foreground hover:border-amber/50 hover:text-amber"
              >
                <Github className="size-4" /> github
              </a>
            </div>
          </div>
          <footer className="mt-8 flex flex-col items-center justify-between gap-3 font-mono text-xs text-muted-foreground sm:flex-row">
            <span className="flex items-center gap-2">
              <Terminal className="size-4 text-green" /> jerome@london:~${" "}
              <span className="footer-caret">_</span>
            </span>
            <span>© 2026 Jerome Jose</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
