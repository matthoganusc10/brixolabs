# Brixo Labs Website

## Overview
Marketing website for Brixo Labs built with Next.js 16, React 19, Tailwind CSS v4, and Three.js for 3D effects.

## Architecture
- **Framework**: Next.js 16.1.1 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 with PostCSS
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Motion (Framer Motion) and Lenis smooth scrolling
- **Theming**: next-themes for dark/light mode

## Structure
```
app/           - Next.js App Router pages and layouts
components/    - React components (header, hero, features, footer, etc.)
  react-bits/  - Custom Three.js shader components (dither cursor effect)
lib/           - Utilities, config, metadata, motion helpers
public/        - Static assets (SVGs, images)
```

## Running
- Dev: `npm run dev` (port 5000)
- Build: `npm run build`
- Start: `npm run start` (port 5000)

## Key Notes
- Tailwind v4 source scanning is configured in `app/globals.css` to exclude `.local`, `.cache`, and `.agents` directories to avoid generating problematic CSS utilities from non-source files
- `next.config.ts` includes `allowedDevOrigins` for Replit's proxied preview pane
- WebGL/Three.js features require GPU-capable browsers (won't work in headless/preview environments)
- No environment variables or external API keys required
