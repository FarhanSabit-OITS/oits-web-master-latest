<div align="center">

<br />

<!-- LOGO -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="300" height="100">
  <rect width="120" height="40" rx="8" fill="#020617"/>
  <path d="M15 12 L22 20 L15 28 M28 28 L42 28" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <text x="50" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#f1f5f9" letter-spacing="1">OITS DHAKA</text>
</svg>

# OITS Dhaka — Modern Software Solutions

**Enterprise-grade web presence for OITS International Technology Solutions.**  
Built with React 19, TypeScript, Vite 6, and Tailwind CSS 4.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Routes & Pages](#-routes--pages)
- [Key Components](#-key-components)
- [Theming](#-theming)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

---

## 🌐 Overview

OITS Dhaka is a fully responsive, dark-mode-first corporate website for **OITS International Technology Solutions** — a global software engineering company headquartered in Dhaka, Bangladesh with offices in Singapore, Kuala Lumpur, and London.

**Key Features:**
- 🎨 **Dark AI / Developer aesthetic** — inspired by leading SaaS platforms (torouter.ai, web-to-mcp.com, maxun.dev)
- 🤖 **AI Assistant** — Powered by Google Gemini API (`@google/genai`)
- 📱 **Fully responsive** — mobile-first design across all breakpoints
- ⚡ **Performance optimised** — LCP image preloading, lazy loading, Vite-powered HMR
- ♿ **Accessible** — semantic HTML5, ARIA labels, keyboard navigation
- 🌙 **Light / Dark mode** — persists to `localStorage`, respects `prefers-color-scheme`
- 🗺️ **Multi-page routing** — React Router v7 with dedicated pages
- 📊 **Interactive charts** — Recharts-powered tech stack visualisations

---

## 🛠 Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | React | ^19.2.3 |
| **Language** | TypeScript | ~5.8.2 |
| **Build Tool** | Vite | ^6.2.0 |
| **Styling** | Tailwind CSS | ^4.3.0 |
| **Routing** | React Router DOM | ^7.11.0 |
| **AI SDK** | Google GenAI | ^1.34.0 |
| **Icons** | Lucide React | ^0.562.0 |
| **Animation** | Motion (Framer) | ^12.40.0 |
| **Charts** | Recharts | ^3.8.1 |
| **CSS PostCSS** | Autoprefixer | ^10.5.0 |

---

## 📁 Project Structure

```
oits-web-master-latest/
├── components/              # All React UI components
│   ├── Header.tsx           # Glassmorphic sticky navigation
│   ├── Hero.tsx             # Full-screen hero with animated headline
│   ├── Marquee.tsx          # Scrolling tech partner ticker
│   ├── Services.tsx         # Service offerings with glass cards
│   ├── Process.tsx          # 5-step workflow with CTA banner
│   ├── Portfolio.tsx        # Filterable project showcase
│   ├── About.tsx            # Company overview, stats & offices
│   ├── Testimonials.tsx     # Client testimonials slider
│   ├── Contact.tsx          # Multi-field contact form
│   ├── Footer.tsx           # Editorial footer with newsletter
│   ├── AiAssistant.tsx      # Gemini-powered chat widget
│   ├── TechDetailModal.tsx  # Tech stack detail modal
│   ├── TechStackChart.tsx   # Recharts visualisation
│   ├── ProcessTimeline.tsx  # Interactive process timeline
│   ├── FeaturedCarousel.tsx # Featured projects carousel
│   └── ui/                  # Shared primitive UI components
│
├── pages/                   # Route-level page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── PortfolioPage.tsx
│   ├── ServicesPage.tsx
│   └── WorkflowPage.tsx
│
├── App.tsx                  # Root app, routing, theme logic
├── index.tsx                # React DOM entry point
├── index.html               # HTML shell with meta, fonts, preloads
├── index.css                # Global styles & Tailwind utilities
├── constants.ts             # Site-wide data (services, portfolio, etc.)
├── types.ts                 # Shared TypeScript types & enums
├── tailwind.config.js       # Tailwind v4 config with neon glow extensions
├── vite.config.ts           # Vite config (port 3000, env vars, aliases)
├── tsconfig.json            # TypeScript compiler options
├── postcss.config.js        # PostCSS with Tailwind + Autoprefixer
└── package.json             # Dependencies & npm scripts
```

---

## ✅ Prerequisites

Ensure the following are installed on your machine before proceeding:

| Tool | Minimum Version | Check Command |
|---|---|---|
| **Node.js** | v18.0.0+ (v20 LTS recommended) | `node --version` |
| **npm** | v9.0.0+ | `npm --version` |
| **Git** | Any recent version | `git --version` |

> **Recommended:** Use [Node.js v20 LTS](https://nodejs.org/) for maximum compatibility with all dependencies.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/FarhanSabit-OITS/oits-web-master-latest.git
cd oits-web-master-latest
```

### 2. Install Dependencies

```bash
npm install
```

This installs all dependencies listed in `package.json`, including React, Vite, Tailwind, and the Google GenAI SDK.

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Windows PowerShell
New-Item -Path ".env.local" -ItemType File

# macOS / Linux
touch .env.local
```

Add your Gemini API key (see [Environment Variables](#-environment-variables) section below):

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

The dev server supports **Hot Module Replacement (HMR)** — changes to any file will instantly reflect in the browser without a full reload.

---

## 🔑 Environment Variables

The project uses a `.env.local` file (git-ignored) for secrets. Vite exposes these to the application at build time.

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Google Gemini API key for the AI Assistant widget |

### How to Get a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with a Google account
3. Click **"Get API Key"** → **"Create API key"**
4. Copy the key and paste it into `.env.local`

> ⚠️ **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

Without a valid `GEMINI_API_KEY`, the AI Assistant chat widget will not function. All other parts of the site will work normally.

---

## 📜 Available Scripts

Run all scripts from the project root directory:

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Starts Vite dev server on `http://localhost:3000` with HMR |
| **Type Check** | `npm run lint` | Runs `tsc --noEmit` — checks TypeScript types without building |
| **Build** | `npm run build` | Compiles & bundles for production into the `dist/` folder |
| **Preview** | `npm run preview` | Serves the production `dist/` build locally for pre-deploy testing |

### Typical Development Workflow

```bash
# Step 1: Install (only needed once or after pulling changes)
npm install

# Step 2: Start dev server
npm run dev

# Step 3: Before committing — type check
npm run lint

# Step 4: Build for production
npm run build

# Step 5: Preview production build locally
npm run preview
```

---

## 🗺 Routes & Pages

The app uses **React Router v7** with a shared `Layout` wrapper (Header + Footer + AI Assistant).

| Path | Component | Description |
|---|---|---|
| `/` | `HomeSections` | Full landing page (Hero → Marquee → Services → Process → Portfolio → About → Testimonials → Contact) |
| `/services` | `ServicesPage` | Dedicated services listing page |
| `/portfolio` | `PortfolioPage` | Dedicated portfolio / case studies page |
| `/about` | `AboutPage` | Dedicated about page |
| `/contact` | `ContactPage` | Dedicated contact form page |
| `/workflow` | `WorkflowPage` | Development workflow / process page |

---

## 🧩 Key Components

| Component | Purpose |
|---|---|
| `Header.tsx` | Sticky glassmorphic navbar with light/dark toggle and "Get a Quote" CTA |
| `Hero.tsx` | Animated headline with gradient text, neon CTA buttons, and floating stat cards |
| `Services.tsx` | Service cards with icon wells, hover glows, and tech category filtering |
| `Process.tsx` | 5-step development lifecycle with animated step cards and CTA scheduling banner |
| `Portfolio.tsx` | Filterable project grid with tech tags and case study modal |
| `About.tsx` | Company mission, core values checklist, animated stats, and global offices grid |
| `Testimonials.tsx` | Client testimonials with glassmorphic cards |
| `Contact.tsx` | Full contact form with validation, info cards, and social links |
| `Footer.tsx` | Editorial multi-column footer with newsletter subscription and compliance links |
| `AiAssistant.tsx` | Floating Gemini-powered chat widget for visitor queries |
| `TechDetailModal.tsx` | Detailed modal for individual tech stack entries with metrics |

---

## 🎨 Theming

The site supports **light** and **dark** modes managed through Tailwind's `dark:` variant.

**How it works:**
- On first load, the theme respects the OS preference (`prefers-color-scheme`)
- User can toggle via the moon/sun icon in the Header
- Choice is persisted to `localStorage` under the key `"theme"`
- The `dark` class is toggled on `<html>` to activate dark styles globally

**Dark mode design tokens (as applied):**

| Token | Value | Usage |
|---|---|---|
| Base background | `slate-950` (`#020617`) | Section backgrounds |
| Card background | `slate-900/50` | Glassmorphic cards |
| Border | `slate-700/50` | Card borders |
| Accent | `sky-400` / `sky-500` | Icons, glows, CTAs |
| Heading gradient | `from-white to-slate-400` | Large headings |
| Muted text | `slate-400` | Descriptions, labels |

---

## 🏗 Building for Production

```bash
npm run build
```

This runs `vite build` and outputs optimised assets to the `dist/` folder:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js     # Bundled JS (code-split)
│   └── index-[hash].css    # Purged CSS
```

**To preview the production build locally before deploying:**

```bash
npm run preview
# Serves at http://localhost:4173
```

---

## 🚢 Deployment

The `dist/` folder is a static site and can be deployed to any static hosting provider.

### Option A — Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow the prompts)
vercel

# Set env var in Vercel dashboard or via CLI:
vercel env add GEMINI_API_KEY
```

> In the Vercel project settings, set the **Output Directory** to `dist` and the **Build Command** to `npm run build`.

### Option B — Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Add `GEMINI_API_KEY` under **Site Settings → Environment Variables** in the Netlify dashboard.

### Option C — GitHub Pages

```bash
npm run build
# Push the dist/ folder to the gh-pages branch using gh-pages package:
npm install -g gh-pages
gh-pages -d dist
```

> ⚠️ GitHub Pages doesn't natively support client-side routing. Add a `public/404.html` redirect workaround or use a different host.

### Option D — Self-Hosted / VPS (Nginx)

```bash
# Build
npm run build

# Copy dist to your server's web root
scp -r dist/ user@your-server:/var/www/oits-dhaka/

# Nginx config example (handle SPA routing):
```

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/oits-dhaka;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔧 Troubleshooting

### `npm install` fails or hangs

```bash
# Clear npm cache and retry
npm cache clean --force
npm install
```

### Port 3000 already in use

Change the port in `vite.config.ts`:
```ts
server: {
  port: 3001, // Change to any free port
}
```
Or kill the process using the port:
```powershell
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### AI Assistant not responding

- Verify `GEMINI_API_KEY` is set in `.env.local`
- Ensure the key has access to the Gemini API in [Google AI Studio](https://aistudio.google.com/)
- Check the browser console for API error messages

### TypeScript errors on `npm run lint`

```bash
# Run type check to see all errors with detail
npx tsc --noEmit
```

### Dark mode not persisting after refresh

Ensure `localStorage` is not blocked by your browser's privacy settings. The theme key is stored as `"theme"` with value `"dark"` or `"light"`.

### Blank page after `npm run build`

Ensure the `base` path in `vite.config.ts` matches your deployment path. If deployed to a subdirectory (e.g., `yourdomain.com/app/`), add:
```ts
base: '/app/',
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is **proprietary** and owned by OITS International Technology Solutions. All rights reserved. Unauthorised reproduction or distribution is prohibited.

---

<div align="center">

Made with ❤️ by the **OITS Engineering Team**  
Dhaka · Singapore · Kuala Lumpur · London

</div>
