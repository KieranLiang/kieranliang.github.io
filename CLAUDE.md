# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Product Manager portfolio website (AI产品经理个人网站) built with React and TypeScript. Features an Eastern Scholar's Studio aesthetic (「素笺」) with custom parchment/ink/indigo/gold color palette. Deployed to GitHub Pages via GitHub Actions.

## Common Commands

```bash
# Development - starts Vite dev server with hot reload
pnpm dev

# Production build - builds client with Vite
pnpm build

# Preview production build locally
pnpm preview

# Type check without emitting
pnpm check

# Format code with Prettier
pnpm format
```

## Architecture

### Project Structure
- `client/` - React SPA frontend
  - `client/src/pages/` - Page components (Home, Blog, BlogPost, NotFound)
  - `client/src/components/` - Custom components (Navbar, Footer, ScrollReveal, etc.)
  - `client/src/components/ui/` - shadcn UI primitives (button, card, tooltip, etc.)
  - `client/src/lib/` - Data and utilities (data.ts, posts.ts, utils.ts)
  - `client/src/contexts/` - React contexts (ThemeContext)
- `content/posts/` - Markdown blog posts (auto-loaded via Vite glob import)

### Path Aliases
- `@/` → `./client/src/*`

### Key Technologies
- **Build**: Vite 7
- **Frontend**: React 19, TypeScript 5.6
- **Routing**: wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with `@theme inline` CSS variables
- **UI Components**: shadcn/ui (minimal set)
- **Animation**: framer-motion
- **Blog**: Markdown files parsed at build time via Vite glob import
- **Icons**: lucide-react

### Design System (index.css)
Custom Eastern aesthetic color palette:
- `--color-parchment` - Warm off-white background
- `--color-ink` - Deep text color
- `--color-indigo` - Primary accent
- `--color-gold` - Secondary accent

Fonts: LXGW WenKai (Chinese), DM Sans/Serif Display (English), Noto Sans SC

### Routing
Client-side routing via wouter in `client/src/App.tsx`:
- `/` - Home page
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/404` - Not found

### Deployment
GitHub Pages via GitHub Actions artifact deployment. Workflow builds with Vite and uploads `dist/public` as a Pages artifact.

## File Conventions

- Components use PascalCase filenames (e.g., `ErrorBoundary.tsx`)
- React hooks have `.ts` extension, components have `.tsx`
- UI components in `client/src/components/ui/` are from shadcn
- Custom components in `client/src/components/`
- Page components in `client/src/pages/`
- Data/constants in `client/src/lib/data.ts`
- Blog posts in `content/posts/*.md` with YAML frontmatter

## Code Style

Prettier configuration (see .prettierrc):
- Semicolons enabled
- Double quotes
- 2-space indentation
- No tabs
- 80 character print width
