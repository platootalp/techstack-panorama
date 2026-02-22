'use client'

import { cn } from '@/lib/utils'

interface ThemeBadgeProps {
  popularity: 'high' | 'medium' | 'rising'
  className?: string
}

const popularityConfig = {
  high: {
    label: '主流',
    className: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30',
  },
  medium: {
    label: '常用',
    className: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30',
  },
  rising: {
    label: '新星',
    className: 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/15 dark:text-purple-400 dark:border-purple-500/30',
  },
}

export function ThemeBadge({ popularity, className }: ThemeBadgeProps) {
  const config = popularityConfig[popularity]

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  )
}

interface ThemeTagProps {
  children: React.ReactNode
  className?: string
}

export function ThemeTag({ children, className }: ThemeTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium',
        'bg-slate-100 text-slate-700 border border-slate-200',
        'dark:bg-white/5 dark:text-slate-200 dark:border-white/10',
        'hover:bg-slate-200 dark:hover:bg-white/10',
        'transition-colors',
        className
      )}
    >
      {children}
    </span>
  )
}
