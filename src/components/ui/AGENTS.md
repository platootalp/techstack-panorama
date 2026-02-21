# AGENTS.md - UI Components

**Generated:** 2026-02-21
**Parent:** ../AGENTS.md

## OVERVIEW

shadcn/ui component library - 48 Radix UI-based components with Tailwind styling. Uses `new-york` style variant.

## STRUCTURE

All 48 components are flat in this directory. No subdirectories.

## WHERE TO LOOK

| Task | Approach |
|------|----------|
| Add new component | `npx shadcn add <component>` - Don't create manually |
| Modify existing | Extend via props/wrappers, never edit source |
| Find component | Look for Radix primitive name (e.g., `dialog.tsx` for Dialog) |

## CONVENTIONS

### Component Pattern
```typescript
// 1. 'use client' directive (all UI components are client components)
"use client"

// 2. Import Radix primitive
import * as DialogPrimitive from "@radix-ui/react-dialog"

// 3. Define variants with cva
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground...",
        destructive: "bg-destructive text-white...",
        outline: "border bg-background shadow-xs...",
        secondary: "bg-secondary text-secondary-foreground...",
        ghost: "hover:bg-accent hover:text-accent-foreground...",
        link: "text-primary underline-offset-4 hover:underline...",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// 4. Use cn() for class merging
className={cn(buttonVariants({ variant, size, className }))}

// 5. Add data-slot attribute
data-slot="button"
```

### Key Patterns

- **cva (class-variance-authority)**: For component variants
- **cn() utility**: From `@/lib/utils` for conditional classes
- **data-slot attributes**: For styling hooks
- **Radix primitives**: Base functionality from `@radix-ui/*`
- **Forward refs**: All components use `React.forwardRef`

### Naming

- File: lowercase with hyphens (e.g., `alert-dialog.tsx`)
- Component: PascalCase matching file (e.g., `AlertDialog`)
- Exports: Named exports for component + variants

## ANTI-PATTERNS

- **NEVER modify shadcn/ui source directly** - Use `npx shadcn add` to update
- **Don't add custom logic here** - Create wrapper components in parent directory
- **Don't change CSS variable names** - Use globals.css for theme changes
- **Don't remove 'use client'** - All UI components need this directive

## NOTES

- Components auto-generated via shadcn CLI
- Style: `new-york` (from components.json)
- Base color: `neutral`
- All components support dark mode via CSS variables
