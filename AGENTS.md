# AGENTS.md - TechStack Panorama

**Generated:** 2026-02-21
**Commit:** (auto-generated)
**Branch:** main

Guidelines for agentic coding agents working in this repository.

## OVERVIEW

TechStack Panorama (技术栈全景图) - A modern full-stack tech stack visualization platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Uses shadcn/ui component library with 48 components.

## STRUCTURE

```
./
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components (48 total)
│   │   └── *.tsx        # App-specific components
│   ├── data/            # Static data and types
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── editor/              # LeetCode editor module (separate)
└── docs/                # Documentation and plans
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add/Modify UI components | `src/components/ui/` | shadcn/ui components |
| Add new page | `src/app/[route]/page.tsx` | Follow existing patterns |
| Add tech data | `src/data/tech/` | See types.ts for schema |
| Custom hooks | `src/hooks/` | Use kebab-case naming |
| Utilities | `src/lib/` | Shared helper functions |
| LeetCode content | `editor/cn/` | Separate module |

## COMMANDS

```bash
# Development (runs on port 3888)
bun run dev

# Build for production (outputs standalone to .next/standalone/)
bun run build

# Start production server
bun start

# Lint code with ESLint
bun run lint

# Database operations (Prisma)
bun run db:push      # Push schema changes
bun run db:generate  # Generate Prisma client
bun run db:migrate   # Run migrations
bun run db:reset     # Reset database
```

**Note**: No test framework is currently configured.

## CONVENTIONS

### Imports & Path Aliases
- Use `@/*` alias for imports from `src/` (configured in tsconfig.json)
- Import order: React/Next → External libs → Internal components → Types
- Example: `import { Button } from '@/components/ui/button'`

### Component Structure
- **Server Components** (default): No directive needed, use for static content
- **Client Components**: Add `'use client'` at the top for interactive components
- Use `memo()` for expensive components that receive stable props
- Use `displayName` on memoized components for debugging

### Naming Conventions
- **Components**: PascalCase (e.g., `TechCard.tsx`, `Sidebar.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `use-mobile.ts`, `use-toast.ts`)
- **Utils**: camelCase (e.g., `utils.ts`, `db.ts`)
- **Types/Interfaces**: PascalCase, prefer interfaces over type aliases
- **Files**: kebab-case for non-component files (e.g., `error-boundary.tsx`)

### Styling (Tailwind CSS)
- Use Tailwind utility classes exclusively
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Colors: Use CSS variables (e.g., `bg-primary`, `text-foreground`)
- Dark mode: Use `dark:` prefix for dark-specific styles
- Gradient theme: Blue-Purple-Pink gradients for visual accents

### TypeScript
- Strict mode enabled but `noImplicitAny: false`
- Always define prop interfaces explicitly
- Use `React.ComponentProps<"element">` for HTML element extensions
- Prefer explicit return types on exported functions

### Error Handling
- Use Error Boundary for React component errors (see `error-boundary.tsx`)
- Wrap async operations in try-catch with user-friendly error messages
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe access

### shadcn/ui Patterns
- Components are in `/src/components/ui/`
- Use `cva` (class-variance-authority) for component variants
- Extend components via props, not by modifying source
- Import Radix primitives via shadcn components

### Data Patterns
- Static data: Define in page files or `/src/data/tech/`
- Types: Define in `/src/data/tech/types.ts`
- Use Chinese for UI text, English for code/comments

## ANTI-PATTERNS (THIS PROJECT)

- **Never modify shadcn/ui source directly** - Extend via props instead
- **No test framework configured** - Don't add tests without setting up framework first
- **No custom ESLint/Prettier configs** - Uses defaults only
- **Don't use `as any` or `@ts-ignore`** - Fix types properly
- **Avoid empty catch blocks** - Always handle errors meaningfully

## Dependencies to Know

- **UI**: @radix-ui/*, lucide-react, framer-motion
- **State**: zustand, @tanstack/react-query
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Database**: prisma, @prisma/client
- **Auth**: next-auth
- **i18n**: next-intl

## ESLint Configuration

Uses `eslint-config-next` with Next.js recommended rules. Run `bun run lint` before committing.
