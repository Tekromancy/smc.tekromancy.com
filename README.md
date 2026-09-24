# smc.tekromancy.com

Official static website and blog for **Silent Mode Control** & **Silent Mode Control Pro** by [Tekromancy](https://tekromancy.com), hosted at **[https://smc.tekromancy.com](https://smc.tekromancy.com)**.

This repository hosts the marketing website, documentation, release blog posts, and authoritative on-device Privacy Policy for Silent Mode Control, separated from the native Android app codebase.

---

## Architecture & Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling:** Tailwind CSS v4 & custom design tokens (`@silentmodecontrol/tokens`) matching the Tekromancy OLED dark theme
- **Content:** Astro Content Collections (Markdown/MDX)
- **Package Manager:** pnpm monorepo (pnpm workspace)
- **Deployment:** GitHub Actions + GitHub Pages (`apps/site/dist` -> `smc.tekromancy.com`)

## Workspace Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow deploying to GitHub Pages
├── PRIVACY_POLICY.md         # Authoritative Privacy Policy source file
├── pnpm-workspace.yaml       # pnpm workspace definition
├── package.json              # Monorepo root scripts
├── packages/
│   └── tokens/               # Shared branding, color, and mode tokens (@silentmodecontrol/tokens)
└── apps/
    └── site/                 # Astro static web application
        ├── astro.config.mjs  # Astro configuration (smc.tekromancy.com)
        ├── public/           # Static assets (CNAME, favicon, synced PRIVACY_POLICY.md)
        └── src/
            ├── layouts/      # Base layouts & header/footer
            ├── pages/        # Routes: /, /blog, /privacy
            └── content/blog/ # Markdown blog articles & product announcements
```

## Getting Started

### Prerequisites

- Node.js 22+
- [pnpm](https://pnpm.io/) 12.5+

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start local Astro dev server (http://localhost:4321)
pnpm dev

# Build production static bundle (outputs to apps/site/dist/)
pnpm build

# Preview production build locally
pnpm preview
```

## Continuous Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, copies `PRIVACY_POLICY.md` into static assets, builds the static Astro site, and deploys directly to GitHub Pages at `smc.tekromancy.com`.

## License

MIT License. See [LICENSE](LICENSE) for details.
