# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Product Manager portfolio website (AI产品经理个人网站) built with React, Express, and TypeScript. Features an Eastern Scholar's Studio aesthetic (「素笺」) with custom parchment/ink/indigo/gold color palette.

## Common Commands

```bash
# Development - starts Vite dev server with hot reload
pnpm dev

# Production build - builds client and bundles server with esbuild
pnpm build

# Start production server - serves static files from dist/public
pnpm start

# Type check without emitting
pnpm check

# Format code with Prettier
pnpm format
```

## Architecture

### Monorepo Structure
- `client/` - React SPA frontend
- `server/` - Express.js production server
- `shared/` - Shared constants/types between client and server
- `patches/` - pnpm patches for dependencies

### Path Aliases
- `@/` → `./client/src/*`
- `@shared/` → `./shared/*`

### Key Technologies
- **Build**: Vite 7 with custom plugins, esbuild for server bundling
- **Frontend**: React 19, TypeScript 5.6
- **Routing**: wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with `@theme inline` CSS variables
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation**: framer-motion
- **Forms**: react-hook-form with zod validation
- **Icons**: lucide-react

### Custom Vite Plugins
The vite.config.ts includes custom plugins:
- `vitePluginManusRuntime` - Manus integration
- `vitePluginManusDebugCollector` - Browser console/network logging to `.manus-logs/`

### Design System (index.css)
Custom Eastern aesthetic color palette:
- `--color-parchment` - Warm off-white background (#F8F6F0)
- `--color-ink` - Deep text color (#1C1C1E)
- `--color-indigo` - Primary accent (#2D5A7B)
- `--color-gold` - Secondary accent (#B8860B)

Fonts: LXGW WenKai (Chinese), DM Sans/Serif Display (English), Noto Sans SC

### Environment Variables
- `VITE_OAUTH_PORTAL_URL` - OAuth portal base URL
- `VITE_APP_ID` - OAuth app identifier
- `VITE_ANALYTICS_ENDPOINT` - Umami analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Umami website ID

### Routing
Client-side routing via wouter in `client/src/App.tsx`:
- `/` - Home page
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/404` - Not found

Server serves `index.html` for all routes (SPA fallback).

## File Conventions

- Components use kebab-case filenames (e.g., `error-boundary.tsx`)
- React hooks have `.ts` extension, components have `.tsx`
- UI components in `client/src/components/ui/` are from shadcn
- Custom components in `client/src/components/`
- Page components in `client/src/pages/`
- Data/constants in `client/src/lib/data.ts`

## Code Style

Prettier configuration (see .prettierrc):
- Semicolons enabled
- Double quotes
- 2-space indentation
- No tabs
- 80 character print width
