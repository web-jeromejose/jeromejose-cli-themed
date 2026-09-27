import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
  t as QueryClientProvider,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  c as HeadContent,
  d as Outlet,
  f as lazyRouteComponent,
  g as useRouter,
  h as Link,
  m as createRootRouteWithContext,
  p as createFileRoute,
  s as Scripts,
  u as createRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_d2Gx0Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Ba0u3Jc4.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var GA_MEASUREMENT_ID =
  {
    BASE_URL: "/",
    DEV: false,
    MODE: "production",
    PROD: true,
    SSR: true,
    TSS_DEV_SERVER: "false",
    TSS_DEV_SSR_STYLES_BASEPATH: "/",
    TSS_DEV_SSR_STYLES_ENABLED: "true",
    TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
    TSS_INLINE_CSS_ENABLED: "false",
    TSS_ROUTER_BASEPATH: "",
    TSS_SERVER_FN_BASE: "/_serverFn/",
  }["VITE_GA_MEASUREMENT_ID"] ?? "G-DZF4DKH3T8";
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Jerome Jose | Senior Software Engineer" },
      {
        name: "description",
        content: "Jerome Jose's software engineering portfolio.",
      },
      {
        name: "author",
        content: "Jerome Jose",
      },
      {
        property: "og:title",
        content: "Jerome Jose | Senior Software Engineer",
      },
      {
        property: "og:description",
        content: "Senior software engineer specialising in .NET, Azure, Dynamics 365, and React.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@Lovable",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
            dangerouslySetInnerHTML: {
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
console.log('Google tag manager loaded');
`,
            },
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
  });
}
var $$splitComponentImporter = () => import("./routes-DhIzvjNc.mjs");
var rootRouteChildren = {
  IndexRoute: createFileRoute("/")({
    head: () => ({
      meta: [
        { title: "Jerome Jose | Senior Software Engineer" },
        {
          name: "description",
          content:
            "Portfolio of Jerome Jose, a London-based senior software engineer specialising in .NET 10, Azure, Dynamics 365, React, and scalable cloud systems.",
        },
        {
          property: "og:title",
          content: "Jerome Jose | Senior Software Engineer",
        },
        {
          property: "og:description",
          content:
            "10+ years building reliable cloud, CRM, payments, data, and healthcare platforms with .NET, Azure, and React.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    }),
    component: lazyRouteComponent($$splitComponentImporter, "component"),
  }).update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$1,
  }),
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
