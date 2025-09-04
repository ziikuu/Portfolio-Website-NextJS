# AGENTS.md - Portfolio NextJS Project

## Commands
- **Dev**: `npm run dev` (with Turbopack)
- **Build**: `npm run build` (with Turbopack)  
- **Start**: `npm start`
- **Lint**: `npm run lint`
- **Type Check**: `npx tsc --noEmit`

## Architecture
- Next.js 15 app router with TypeScript and Tailwind CSS v4
- Structure: `/app` (routes), `/components` (organized by feature), `/styles` (typography), `/public` (assets)
- Uses React 19, Motion for animations, react-icons for icons

## Code Style
- TypeScript strict mode enabled
- Path alias: `@/*` maps to project root
- Component structure: PascalCase for components, camelCase for variables/functions
- CSS: Tailwind classes with responsive design patterns (sm:, lg:, xl:)
- Typography: Fluid scaling with clamp() for responsive text
- Color scheme: `#151419` (dark), `#F9FAF9` (light), backdrop-blur effects
- Fonts: IBM Plex Sans (body), DM Mono (mono), Google Fonts integration
- State management: React hooks (useState) with proper typing
- Import order: React, external libs, internal components with `@/` prefix
