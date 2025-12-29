# Our Crazy Code

## Overview

Our Crazy Code is a Next.js 15 landing page for a coding education platform. The site is built as a modern, animated single-page application targeting students who want to learn coding and AI skills. The platform emphasizes being "built by a 15-year-old prodigy" and uses a polished, professional design with smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 15** with App Router for React-based server and client rendering
- **React 19** for UI components
- **TypeScript** for type safety (configured with relaxed strict mode)

### Styling Architecture
- **Tailwind CSS 3.4** for utility-first styling
- **Custom CSS variables** in globals.css for theming (background, foreground, primary, accent colors)
- **Custom fonts**: Inter (body) and Space Grotesk (headings) loaded via next/font/google
- Grid background pattern using CSS linear gradients

### Animation System
- **Framer Motion** for all animations including:
  - Scroll-based parallax effects (useScroll, useTransform)
  - Spring-based entrance animations
  - Viewport-triggered animations (useInView)
  - Hover state transitions

### Component Structure
- Uses App Router with `app/` directory structure
- Client-side rendering enabled via "use client" directive for interactive pages
- Root layout handles font loading and global metadata

### Design System
- Color scheme: Light mode with dark navigation bar
- Primary colors: Deep purple (#1F1B32, #313149) with indigo accents (#6366f1)
- Background: Light gray (#F9F9FB)

## External Dependencies

### UI Libraries
- **lucide-react**: Icon library for vector icons (CodeXml, ChevronRight, etc.)
- **clsx** and **tailwind-merge**: Utility functions for conditional class names

### Build Tools
- **PostCSS** with Autoprefixer for CSS processing
- **TypeScript** for development-time type checking

### No Backend/Database
This is currently a static frontend application with no:
- Database connections
- Authentication systems
- API routes
- External service integrations