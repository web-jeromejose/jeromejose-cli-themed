# Jerome Jose portfolio release

This bundle is the production build generated from the project on 2026-09-26.

## Cloudflare deployment

1. Install Node.js and Wrangler.
2. Open a terminal in this release directory.
3. Run `npx wrangler login` once.
4. Run `npx wrangler deploy --config server/wrangler.json`.

The generated `server/wrangler.json` is configured for the Nitro Cloudflare module and serves the files in `public`.

## Node-compatible hosting

This is a server-rendered TanStack Start build. Upload the entire release directory and run:

```text
npm install
node server/index.mjs
```

Set the host and port using the hosting provider's normal environment settings. The exact start command may be exposed as `node server/index.mjs` or `npm start`, depending on the provider.

## Important

Do not upload only `public` to ordinary Apache/XAMPP hosting. This build does not include a static `index.html`; it requires the generated server runtime or a static-export change in the source project.
