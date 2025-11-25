# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project uses the App Router architecture and is configured for a Spanish-language portfolio for "Mateo Álvarez - Dev JR".

## Commands

**Development:**
- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

**Layout Structure:**
The application uses a single-page layout defined in `src/app/layout.tsx` with all main sections rendered directly in the root layout:
- Header (sticky navigation)
- IntroSection
- Me
- Projects
- Experience
- Contact

The main `page.tsx` is minimal - the actual content lives in the layout file and imported components.

**Component Organization:**
- All components are located in `src/app/components/`
- Mix of `.js` and `.jsx` files (not consistent TypeScript adoption)
- Components use Tailwind CSS for styling
- Spanish language content throughout

**Styling:**
- Tailwind CSS with custom theme colors
- Global background color: `#f8f4e9` (cream)
- Custom font setup with Geist Sans and Geist Mono
- Path aliases configured: `@/*` maps to `./src/*`

**Key Dependencies:**
- `react-icons` for icon components
- `react-typed` for typewriter effects
- Next.js App Router with TypeScript support

**File Extensions:**
Note the inconsistent file extensions - some components use `.js`, others `.jsx`, while the main app files use `.tsx`. When editing components, match the existing file extension.