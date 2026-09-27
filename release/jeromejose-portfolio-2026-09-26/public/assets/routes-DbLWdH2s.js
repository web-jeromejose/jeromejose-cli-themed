import { n as e, r as t, t as n } from "./index-CpgRcmYS.js";
var r = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  c = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  l = t(e()),
  u = (0, l.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
      },
      f,
    ) =>
      (0, l.createElement)(
        `svg`,
        {
          ref: f,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
          className: r(`lucide`, a),
          ...(!o && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [...u.map(([e, t]) => (0, l.createElement)(e, t)), ...(Array.isArray(o) ? o : [o])],
      ),
  ),
  d = (e, t) => {
    let n = (0, l.forwardRef)(({ className: n, ...a }, s) =>
      (0, l.createElement)(u, {
        ref: s,
        iconNode: t,
        className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
        ...a,
      }),
    );
    return ((n.displayName = o(e)), n);
  },
  f = d(`arrow-down`, [
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `m19 12-7 7-7-7`, key: `1idqje` }],
  ]),
  p = d(`github`, [
    [
      `path`,
      {
        d: `M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,
        key: `tonef`,
      },
    ],
    [`path`, { d: `M9 18c-4.51 2-5-2-7-2`, key: `9comsn` }],
  ]),
  m = d(`linkedin`, [
    [
      `path`,
      {
        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
        key: `c2jq9f`,
      },
    ],
    [`rect`, { width: `4`, height: `12`, x: `2`, y: `9`, key: `mk3on5` }],
    [`circle`, { cx: `4`, cy: `4`, r: `2`, key: `bt5ra8` }],
  ]),
  h = d(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [`rect`, { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` }],
  ]),
  g = d(`map-pin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  _ = d(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  v = d(`terminal`, [
    [`path`, { d: `M12 19h8`, key: `baeox8` }],
    [`path`, { d: `m4 17 6-6-6-6`, key: `1yngyt` }],
  ]),
  y = d(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  b = n(),
  x = [
    {
      dates: `2026 — present`,
      role: `CRM Software Engineer`,
      company: `Pantheon`,
      location: `London, UK`,
      accent: `cyan`,
      summary: `Designing enterprise Dynamics 365 and Power Platform solutions for private equity and investment operations, with secure Azure integrations and production-grade observability.`,
      tags: [`C#`, `.NET 10`, `Dynamics 365`, `Azure`, `Dataverse`],
    },
    {
      dates: `2022 — Apr 2026`,
      role: `Senior Software Engineer`,
      company: `Moonpig Group`,
      location: `London, UK`,
      accent: `green`,
      summary: `Modernised customer service, voucher, and payment systems into cloud-native services, cutting handling time by 33% across multi-brand operations.`,
      tags: [`.NET 8`, `Azure Functions`, `Service Bus`, `React`, `Terraform`],
    },
    {
      dates: `2021 — 2022`,
      role: `Software Developer`,
      company: `HESA`,
      location: `UK`,
      accent: `amber`,
      summary: `Built secure national-scale data platforms, APIs, and React interfaces supporting higher-education reporting, validation, and audit workflows.`,
      tags: [`C#`, `Azure`, `React`, `SQL`, `RBAC`],
    },
    {
      dates: `2016 — 2021`,
      role: `Software Engineer`,
      company: `Hospital Information Systems`,
      location: `Saudi Arabia · Dubai · Cairo`,
      accent: `violet`,
      summary: `Delivered clinical, operational, and financial systems across three countries, including EMR/LIS integrations, migrations, and production rollouts.`,
      tags: [`C#`, `.NET`, `SQL Server`, `HIS`, `EMR / LIS`],
    },
    {
      dates: `2014 — 2016`,
      role: `Software Developer`,
      company: `NuWorks Interactive Labs`,
      location: `Manila, PH`,
      accent: `cyan`,
      summary: `Built high-traffic commerce and advertising platforms, improving application performance by 45% through API optimisation, caching, and backend tuning.`,
      tags: [`Laravel`, `CodeIgniter`, `Angular`, `APIs`],
    },
    {
      dates: `2011 — 2014`,
      role: `System Analyst Programmer`,
      company: `PhilWeb Corporation`,
      location: `Manila, PH`,
      accent: `green`,
      summary: `Developed CMS and operations platforms supporting gaming operations across more than 100 branches nationwide.`,
      tags: [`C#`, `ASP.NET`, `SQL`, `CMS`],
    },
  ],
  S = [
    {
      path: `~/work/ai-automation`,
      title: `AI-Powered Automation Suite`,
      text: `Built chatbot workflows for voucher reprints, resends, and payment lookups, plus an AI document-processing service that removed repetitive supplier onboarding work.`,
      result: `70% less manual parsing`,
      tags: [`AI`, `.NET 10`, `Azure`, `Document processing`],
      accent: `cyan`,
    },
    {
      path: `~/work/dynamics-migration`,
      title: `Dynamics 365 Service Modernisation`,
      text: `Led the migration of legacy voucher, refund, exchange, and reprint workflows into Dynamics 365 Customer Service across multiple retail brands.`,
      result: `33% service efficiency gain`,
      tags: [`Dynamics 365`, `Dataverse`, `Power Apps`, `Logic Apps`],
      accent: `green`,
    },
    {
      path: `~/work/payments`,
      title: `Finance Reconciliation & Refunds`,
      text: `Engineered high-throughput booking and refund pipelines across Checkout.com, PayPal, and Klarna, turning finance processes measured in hours into minutes.`,
      result: `Handled 70% of transactions`,
      tags: [`.NET 10`, `Azure Functions`, `Payments`, `Event-driven`],
      accent: `amber`,
    },
    {
      path: `~/work/public-data`,
      title: `Issue Management System`,
      text: `Developed a microservices platform that tracks and resolves university data inconsistencies, with secure role-based access and operational dashboards.`,
      result: `National public-data workflows`,
      tags: [`C#`, `Microservices`, `React`, `RBAC`, `SQL Server`],
      accent: `violet`,
    },
    {
      path: `~/work/healthcare`,
      title: `Hospital Information System`,
      text: `Delivered full-scale patient, scheduling, billing, and reporting systems with EMR, laboratory, and medical workflow integrations in culturally diverse clinical environments.`,
      result: `Deployed across 3 countries`,
      tags: [`C#`, `Azure`, `SQL Server`, `HIS / EMR / LIS`],
      accent: `cyan`,
    },
    {
      path: `~/work/hardware-integration`,
      title: `Driving Reaction Test System`,
      text: `Created a C#/ASP.NET application connected to custom physical-input hardware for real-time driving reaction tests, automated scoring, and performance analysis.`,
      result: `Software + hardware delivery`,
      tags: [`C#`, `ASP.NET`, `Hardware I/O`, `Real-time testing`],
      accent: `green`,
    },
  ],
  C = [
    `Healthcare + hardware`,
    `Retail + e-commerce`,
    `Private equity + finance`,
    `Public-sector data`,
    `Gaming operations`,
    `Online sales + payments`,
    `Interactive marketing`,
    `Financial CRM`,
    `AI automation`,
  ],
  w = [
    [`languages`, `c#`, `typescript`, `sql`, `python`],
    [`frameworks`, `.net-10`, `asp.net-core`, `web-api`, `ef-core`, `react`],
    [`architecture`, `microservices`, `clean-architecture`, `event-driven`, `serverless`],
    [`cloud`, `azure-functions`, `app-services`, `service-bus`, `event-grid`],
    [`data`, `sql-server`, `cosmos-db`, `dataverse`, `query-tuning`],
    [`apis`, `rest`, `api-management`, `oauth2 / jwt`, `grpc`],
    [`devops`, `azure-devops`, `terraform`, `docker`, `ci-cd`],
    [`observability`, `app-insights`, `opentelemetry`, `serilog`],
    [`platforms`, `dynamics-365`, `dataverse`, `power-platform`],
    [`testing`, `xunit`, `tdd`, `cypress`, `sonarcloud`],
    [`ai`, `llm-integration`, `rag`, `prompt-engineering`, `ai-automation`],
  ],
  T = [
    {
      icon: `🏅`,
      label: `Employee of the Month`,
      title: `Moonpig Group`,
      detail: `Feb 2024 — recognised for delivery & impact`,
    },
    {
      icon: `🏆`,
      label: `Team of the Year`,
      title: `Moonpig — Nominee`,
      detail: `For cross-brand platform modernisation`,
    },
    {
      icon: `🌟`,
      label: `Employee of the Year`,
      title: `NuWorks Interactive Labs`,
      detail: `2015 — technical contribution & delivery excellence`,
    },
    {
      icon: `📉`,
      label: `Reliability win`,
      title: `70% fewer deployment failures`,
      detail: `Terraform modules + Azure DevOps CI/CD`,
    },
  ];
function E({ command: e, title: t }) {
  return (0, b.jsxs)(`div`, {
    className: `mb-7 flex items-center gap-3`,
    children: [
      (0, b.jsx)(`span`, { className: `font-mono text-sm text-green`, children: `$` }),
      (0, b.jsxs)(`div`, {
        children: [
          (0, b.jsx)(`p`, {
            className: `font-mono text-[11px] text-muted-foreground`,
            children: e,
          }),
          (0, b.jsx)(`h2`, {
            className: `text-2xl font-bold text-foreground sm:text-3xl`,
            children: t,
          }),
        ],
      }),
      (0, b.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
    ],
  });
}
var D = [
  { href: `#about`, label: `about` },
  { href: `#experience`, label: `experience` },
  { href: `#projects`, label: `work` },
  { href: `#wins`, label: `wins` },
];
function O() {
  let [e, t] = (0, l.useState)(``);
  return (
    (0, l.useEffect)(() => {
      let e = D.map(({ href: e }) => document.querySelector(e)).filter((e) => !!e);
      if (e.length === 0) return;
      let n = new IntersectionObserver(
        (e) => {
          for (let n of e) n.isIntersecting && t(`#${n.target.id}`);
        },
        { rootMargin: `-40% 0px -55% 0px` },
      );
      return (e.forEach((e) => n.observe(e)), () => n.disconnect());
    }, []),
    e
  );
}
function k() {
  let [e, t] = (0, l.useState)(!1),
    n = O(),
    r = (e) =>
      `rounded-md px-3 py-2 transition-colors hover:bg-card hover:text-cyan ${n === e ? `bg-card text-cyan` : `text-subtle`}`;
  return (0, b.jsxs)(`div`, {
    className: `portfolio-shell min-h-screen overflow-hidden bg-background font-sans text-foreground selection:bg-cyan/30`,
    children: [
      (0, b.jsx)(`div`, { className: `portfolio-ambience`, "aria-hidden": `true` }),
      (0, b.jsxs)(`header`, {
        className: `relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 pt-6`,
        children: [
          (0, b.jsxs)(`a`, {
            href: `#top`,
            className: `flex items-center gap-3`,
            "aria-label": `Jerome Jose, back to top`,
            children: [
              (0, b.jsx)(`span`, {
                className: `grid size-9 place-items-center rounded-lg border border-green/30 bg-green/10 font-mono text-sm font-bold text-green`,
                children: `JJ`,
              }),
              (0, b.jsx)(`span`, {
                className: `font-mono text-xs text-muted-foreground`,
                children: `~/jerome-jose`,
              }),
            ],
          }),
          (0, b.jsxs)(`nav`, {
            className: `flex items-center gap-1 font-mono text-xs`,
            "aria-label": `Main navigation`,
            children: [
              (0, b.jsx)(`div`, {
                className: `hidden items-center gap-1 sm:flex`,
                children: D.map(({ href: e, label: t }) =>
                  (0, b.jsx)(
                    `a`,
                    {
                      href: e,
                      className: r(e),
                      "aria-current": n === e ? `true` : void 0,
                      children: t,
                    },
                    e,
                  ),
                ),
              }),
              (0, b.jsx)(`a`, {
                href: `#contact`,
                className: `rounded-md bg-cyan px-3 py-2 font-bold text-background transition-opacity hover:opacity-85`,
                children: `contact`,
              }),
              (0, b.jsx)(`button`, {
                type: `button`,
                className: `grid size-9 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-cyan/50 hover:text-cyan sm:hidden`,
                "aria-expanded": e,
                "aria-controls": `mobile-nav`,
                "aria-label": e ? `Close menu` : `Open menu`,
                onClick: () => t((e) => !e),
                children: e
                  ? (0, b.jsx)(y, { className: `size-4`, "aria-hidden": `true` })
                  : (0, b.jsx)(_, { className: `size-4`, "aria-hidden": `true` }),
              }),
            ],
          }),
          e &&
            (0, b.jsx)(`div`, {
              id: `mobile-nav`,
              className: `absolute inset-x-4 top-full mt-2 rounded-lg border border-border bg-card/95 p-2 shadow-terminal backdrop-blur sm:hidden`,
              children: D.map(({ href: e, label: r }) =>
                (0, b.jsxs)(
                  `a`,
                  {
                    href: e,
                    onClick: () => t(!1),
                    className: `flex items-center gap-2 rounded-md px-3 py-3 font-mono text-sm transition-colors hover:bg-background hover:text-cyan ${n === e ? `text-cyan` : `text-subtle`}`,
                    children: [
                      (0, b.jsx)(`span`, { className: `text-green`, children: `$` }),
                      ` `,
                      r,
                    ],
                  },
                  e,
                ),
              ),
            }),
        ],
      }),
      (0, b.jsxs)(`main`, {
        id: `top`,
        className: `relative z-10`,
        children: [
          (0, b.jsxs)(`section`, {
            className: `mx-auto max-w-6xl px-5 pb-10 pt-16 sm:pt-24`,
            children: [
              (0, b.jsx)(`p`, {
                className: `mb-4 font-mono text-sm text-green`,
                children: `$ whoami`,
              }),
              (0, b.jsxs)(`h1`, {
                className: `text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.88] text-foreground`,
                children: [
                  `Jerome `,
                  (0, b.jsx)(`span`, { className: `text-cyan`, children: `Jose` }),
                  (0, b.jsx)(`span`, { className: `terminal-caret`, "aria-hidden": `true` }),
                ],
              }),
              (0, b.jsxs)(`p`, {
                className: `mt-7 max-w-3xl font-mono text-base leading-relaxed text-subtle sm:text-lg`,
                children: [
                  `Senior Software Engineer `,
                  (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `·` }),
                  ` London`,
                  ` `,
                  (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `·` }),
                  ` 10+ years shipping reliable .NET, Azure & React systems at scale`,
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `mt-8 flex flex-wrap gap-3`,
                children: (0, b.jsxs)(`a`, {
                  href: `#experience`,
                  className: `inline-flex items-center gap-2 rounded-lg bg-green px-5 py-3 font-mono text-sm font-bold text-background transition-opacity hover:opacity-85`,
                  children: [
                    (0, b.jsx)(f, { className: `size-4`, "aria-hidden": `true` }),
                    ` view experience`,
                  ],
                }),
              }),
            ],
          }),
          (0, b.jsx)(`section`, {
            id: `about`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-20`,
            children: (0, b.jsxs)(`div`, {
              className: `overflow-hidden rounded-xl border border-border bg-card shadow-terminal`,
              children: [
                (0, b.jsxs)(`div`, {
                  className: `flex items-center gap-2 border-b border-border bg-surface px-4 py-3`,
                  children: [
                    (0, b.jsx)(`span`, { className: `size-3 rounded-full bg-signal-red` }),
                    (0, b.jsx)(`span`, { className: `size-3 rounded-full bg-amber` }),
                    (0, b.jsx)(`span`, { className: `size-3 rounded-full bg-green` }),
                    (0, b.jsx)(`span`, {
                      className: `ml-3 truncate font-mono text-xs text-muted-foreground`,
                      children: `jerome@london: ~/portfolio — zsh`,
                    }),
                  ],
                }),
                (0, b.jsxs)(`div`, {
                  className: `grid md:grid-cols-5`,
                  children: [
                    (0, b.jsxs)(`div`, {
                      className: `border-b border-border p-6 sm:p-8 md:col-span-3 md:border-b-0 md:border-r`,
                      children: [
                        (0, b.jsx)(`p`, {
                          className: `mb-3 font-mono text-sm text-cyan`,
                          children: `$ cat about.md`,
                        }),
                        (0, b.jsxs)(`p`, {
                          className: `max-w-2xl text-sm leading-7 text-subtle sm:text-base`,
                          children: [
                            `I design and support reliable software in complex environments. Currently at`,
                            ` `,
                            (0, b.jsx)(`strong`, {
                              className: `font-semibold text-foreground`,
                              children: `Pantheon`,
                            }),
                            `, a global private equity firm, I build enterprise CRM solutions using Dynamics 365, Power Platform, .NET 10, and Azure—turning complex investment workflows into maintainable, production-ready systems.`,
                          ],
                        }),
                        (0, b.jsxs)(`p`, {
                          className: `mt-4 max-w-2xl text-sm leading-7 text-subtle sm:text-base`,
                          children: [
                            `My career spans the`,
                            ` `,
                            (0, b.jsx)(`strong`, {
                              className: `font-semibold text-foreground`,
                              children: `UK, Philippines, Saudi Arabia, UAE, and Egypt`,
                            }),
                            `, including hospital deployments across three countries. Working with multicultural teams has taught me to adapt quickly—from clinical software connected to physical hardware to public data, retail, gaming, e-commerce, private equity investment operations, and AI-enabled automation.`,
                          ],
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mb-3 mt-6 font-mono text-sm text-green`,
                          children: `$ ls ./stack`,
                        }),
                        (0, b.jsx)(`div`, {
                          className: `flex flex-wrap gap-2`,
                          children: [
                            `C#`,
                            `.NET 10`,
                            `Azure`,
                            `Dynamics 365`,
                            `Power Platform`,
                            `React`,
                            `TypeScript`,
                            `SQL`,
                            `Terraform`,
                          ].map((e, t) =>
                            (0, b.jsx)(
                              `span`,
                              {
                                className: `skill-pill accent-${[`cyan`, `green`, `amber`, `violet`][t % 4]}`,
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `p-6 sm:p-8 md:col-span-2`,
                      children: [
                        (0, b.jsx)(`p`, {
                          className: `mb-5 font-mono text-sm text-cyan`,
                          children: `$ stats --verified`,
                        }),
                        (0, b.jsxs)(`dl`, {
                          className: `space-y-5`,
                          children: [
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(`dt`, {
                                  className: `font-mono text-3xl font-bold text-green`,
                                  children: `10+`,
                                }),
                                (0, b.jsx)(`dd`, {
                                  className: `mt-1 text-sm text-muted-foreground`,
                                  children: `years in software engineering`,
                                }),
                              ],
                            }),
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(`dt`, {
                                  className: `font-mono text-3xl font-bold text-cyan`,
                                  children: `33%`,
                                }),
                                (0, b.jsx)(`dd`, {
                                  className: `mt-1 text-sm text-muted-foreground`,
                                  children: `customer-service efficiency gain`,
                                }),
                              ],
                            }),
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(`dt`, {
                                  className: `font-mono text-3xl font-bold text-amber`,
                                  children: `45%`,
                                }),
                                (0, b.jsx)(`dd`, {
                                  className: `mt-1 text-sm text-muted-foreground`,
                                  children: `application performance improvement`,
                                }),
                              ],
                            }),
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(`dt`, {
                                  className: `font-mono text-3xl font-bold text-violet`,
                                  children: `3`,
                                }),
                                (0, b.jsx)(`dd`, {
                                  className: `mt-1 text-sm text-muted-foreground`,
                                  children: `countries with hospital systems delivered`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, b.jsxs)(`section`, {
            id: `experience`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-20`,
            children: [
              (0, b.jsx)(E, { command: `cat experience.log`, title: `Experience` }),
              (0, b.jsxs)(`div`, {
                className: `relative pl-6 sm:pl-8`,
                children: [
                  (0, b.jsx)(`span`, {
                    className: `absolute bottom-3 left-[7px] top-3 w-px bg-border`,
                  }),
                  x.map((e) =>
                    (0, b.jsxs)(
                      `article`,
                      {
                        className: `relative pb-9 last:pb-0`,
                        children: [
                          (0, b.jsx)(`span`, { className: `timeline-dot bg-${e.accent}` }),
                          (0, b.jsxs)(`div`, {
                            className: `flex flex-wrap items-baseline gap-x-3 gap-y-1`,
                            children: [
                              (0, b.jsx)(`h3`, {
                                className: `text-lg font-bold text-foreground`,
                                children: e.role,
                              }),
                              (0, b.jsx)(`span`, {
                                className: `font-mono text-sm text-${e.accent}`,
                                children: e.company,
                              }),
                              (0, b.jsx)(`span`, {
                                className: `font-mono text-xs text-muted-foreground sm:ml-auto`,
                                children: e.dates,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(`p`, {
                            className: `mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground`,
                            children: [(0, b.jsx)(g, { className: `size-3` }), e.location],
                          }),
                          (0, b.jsx)(`p`, {
                            className: `mt-3 max-w-3xl text-sm leading-6 text-subtle`,
                            children: e.summary,
                          }),
                          (0, b.jsx)(`div`, {
                            className: `mt-3 flex flex-wrap gap-2`,
                            children: e.tags.map((e) =>
                              (0, b.jsx)(
                                `span`,
                                {
                                  className: `rounded border border-border bg-card px-2 py-1 font-mono text-[11px] text-muted-foreground`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      },
                      `${e.company}-${e.dates}`,
                    ),
                  ),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`section`, {
            id: `projects`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-20`,
            children: [
              (0, b.jsx)(E, { command: `ls ./selected-work`, title: `Selected work` }),
              (0, b.jsxs)(`div`, {
                className: `mb-6 border-y border-border py-4 sm:py-5`,
                children: [
                  (0, b.jsxs)(`div`, {
                    className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3`,
                    children: [
                      (0, b.jsx)(`p`, {
                        className: `min-w-0 font-mono text-xs font-bold uppercase text-green`,
                        children: `$ domains --range`,
                      }),
                      (0, b.jsx)(`span`, {
                        className: `shrink-0 font-mono text-[10px] text-muted-foreground sm:hidden`,
                        children: `swipe →`,
                      }),
                    ],
                  }),
                  (0, b.jsx)(`div`, {
                    className: `-mx-5 mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0`,
                    children: C.map((e, t) =>
                      (0, b.jsx)(
                        `span`,
                        {
                          className: `skill-pill shrink-0 snap-start whitespace-nowrap accent-${[`cyan`, `green`, `amber`, `violet`][t % 4]}`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, b.jsx)(`div`, {
                className: `grid gap-4 sm:grid-cols-2`,
                children: S.map((e) =>
                  (0, b.jsxs)(
                    `article`,
                    {
                      className: `project-card project-${e.accent} flex min-w-0 flex-col`,
                      children: [
                        (0, b.jsx)(`p`, {
                          className: `mb-2 truncate font-mono text-[11px] text-${e.accent} sm:mb-3 sm:text-xs`,
                          children: e.path,
                        }),
                        (0, b.jsx)(`h3`, {
                          className: `text-base font-bold leading-6 text-foreground sm:text-lg`,
                          children: e.title,
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mt-2 text-[13px] leading-5 text-subtle sm:text-sm sm:leading-6`,
                          children: e.text,
                        }),
                        (0, b.jsxs)(`p`, {
                          className: `mt-3 font-mono text-[11px] font-bold leading-5 text-${e.accent} sm:mt-4 sm:text-xs`,
                          children: [`→ `, e.result],
                        }),
                        (0, b.jsx)(`div`, {
                          className: `mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2`,
                          children: e.tags.map((e) =>
                            (0, b.jsx)(
                              `span`,
                              {
                                className: `rounded bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground sm:text-[11px]`,
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(`section`, {
            id: `skills`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-20`,
            children: [
              (0, b.jsx)(E, { command: `skills --list`, title: `Technical toolkit` }),
              (0, b.jsxs)(`div`, {
                className: `overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-[13px] leading-7 sm:p-7 sm:text-sm`,
                children: [
                  (0, b.jsxs)(`p`, {
                    children: [
                      (0, b.jsx)(`span`, { className: `text-green`, children: `jerome@portfolio` }),
                      (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `:` }),
                      (0, b.jsx)(`span`, { className: `text-cyan`, children: `~` }),
                      (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `$ ` }),
                      (0, b.jsx)(`span`, {
                        className: `text-foreground`,
                        children: `tree skills/`,
                      }),
                    ],
                  }),
                  (0, b.jsx)(`p`, { className: `mt-2 text-foreground`, children: `skills/` }),
                  w.map(([e, ...t], n) =>
                    (0, b.jsxs)(
                      `p`,
                      {
                        className: `whitespace-nowrap`,
                        children: [
                          (0, b.jsx)(`span`, {
                            className: `text-green`,
                            children: n === w.length - 1 ? `└── ` : `├── `,
                          }),
                          (0, b.jsxs)(`span`, {
                            className: `font-semibold text-green`,
                            children: [e, `/`],
                          }),
                          (0, b.jsxs)(`span`, {
                            className: `text-subtle`,
                            children: [`\xA0\xA0\xA0`, t.join(`    `)],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                  (0, b.jsxs)(`p`, {
                    className: `mt-2`,
                    children: [
                      (0, b.jsx)(`span`, { className: `text-green`, children: `jerome@portfolio` }),
                      (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `:` }),
                      (0, b.jsx)(`span`, { className: `text-cyan`, children: `~` }),
                      (0, b.jsx)(`span`, { className: `text-muted-foreground`, children: `$ ` }),
                      (0, b.jsx)(`span`, { className: `terminal-caret text-green`, children: `▊` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(`section`, {
            id: `wins`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-20`,
            children: [
              (0, b.jsx)(E, { command: `cat achievements.log`, title: `Recent wins` }),
              (0, b.jsx)(`div`, {
                className: `grid gap-4 sm:grid-cols-2`,
                children: T.map((e) =>
                  (0, b.jsxs)(
                    `article`,
                    {
                      className: `flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-green/40 sm:p-6`,
                      children: [
                        (0, b.jsx)(`span`, {
                          className: `text-2xl`,
                          "aria-hidden": `true`,
                          children: e.icon,
                        }),
                        (0, b.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, b.jsx)(`p`, {
                              className: `font-mono text-xs font-bold uppercase text-green`,
                              children: e.label,
                            }),
                            (0, b.jsx)(`h3`, {
                              className: `mt-1 text-base font-bold text-foreground sm:text-lg`,
                              children: e.title,
                            }),
                            (0, b.jsx)(`p`, {
                              className: `mt-1 text-sm leading-6 text-muted-foreground`,
                              children: e.detail,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(`section`, {
            id: `contact`,
            className: `mx-auto max-w-6xl scroll-mt-8 px-5 pb-16`,
            children: [
              (0, b.jsxs)(`div`, {
                className: `rounded-xl border border-border bg-card p-7 text-center sm:p-10`,
                children: [
                  (0, b.jsx)(`p`, {
                    className: `mb-3 font-mono text-sm text-green`,
                    children: `$ ./contact.sh`,
                  }),
                  (0, b.jsx)(`h2`, {
                    className: `text-3xl font-bold text-foreground sm:text-4xl`,
                    children: `Let’s build something reliable.`,
                  }),
                  (0, b.jsx)(`p`, {
                    className: `mx-auto mt-3 max-w-xl text-subtle`,
                    children: `Open to conversations about senior engineering roles, cloud platforms, and complex systems worth simplifying.`,
                  }),
                  (0, b.jsxs)(`div`, {
                    className: `mt-7 flex flex-wrap justify-center gap-3`,
                    children: [
                      (0, b.jsxs)(`a`, {
                        href: `mailto:mrjeromejose@gmail.com`,
                        className: `contact-link bg-cyan text-background`,
                        children: [(0, b.jsx)(h, { className: `size-4` }), ` email`],
                      }),
                      (0, b.jsxs)(`a`, {
                        href: `https://www.linkedin.com/in/jeromefloresjose/`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `contact-link border border-border bg-background text-foreground hover:border-green/50 hover:text-green`,
                        children: [(0, b.jsx)(m, { className: `size-4` }), ` linkedin`],
                      }),
                      (0, b.jsxs)(`a`, {
                        href: `https://github.com/web-jeromejose`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `contact-link border border-border bg-background text-foreground hover:border-amber/50 hover:text-amber`,
                        children: [(0, b.jsx)(p, { className: `size-4` }), ` github`],
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)(`footer`, {
                className: `mt-8 flex flex-col items-center justify-between gap-3 font-mono text-xs text-muted-foreground sm:flex-row`,
                children: [
                  (0, b.jsxs)(`span`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, b.jsx)(v, { className: `size-4 text-green` }),
                      ` jerome@london:~$`,
                      ` `,
                      (0, b.jsx)(`span`, { className: `footer-caret`, children: `_` }),
                    ],
                  }),
                  (0, b.jsx)(`span`, { children: `© 2026 Jerome Jose` }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { k as component };
