'use client'

import { cn } from '@/lib/utils'

interface ThemeGradientProps {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan'
}

const gradientVariants = {
  blue: 'from-blue-500 via-blue-600 to-indigo-600',
  purple: 'from-purple-500 via-purple-600 to-pink-600',
  green: 'from-emerald-400 via-emerald-500 to-teal-500',
  orange: 'from-orange-400 via-amber-500 to-yellow-500',
  pink: 'from-pink-400 via-rose-500 to-red-500',
  cyan: 'from-cyan-400 via-sky-500 to-blue-500',
}

export function ThemeGradient({
  children,
  className,
  variant = 'purple',
}: ThemeGradientProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradientVariants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

interface ThemePageTitleProps {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan'
}

export function ThemePageTitle({
  children,
  className,
  variant = 'purple',
}: ThemePageTitleProps) {
  return (
    <h1
      className={cn(
        'text-4xl md:text-5xl font-bold mb-4',
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradientVariants[variant],
        className
      )}
    >
      {children}
    </h1>
  )
}

interface ThemePageContainerProps {
  children: React.ReactNode
  className?: string
}

export function ThemePageContainer({ children, className }: ThemePageContainerProps) {
  return (
    <div
      className={cn(
        'min-h-screen',
        'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
        'dark:from-slate-900 dark:via-purple-950 dark:to-slate-900',
        className
      )}
    >
      {children}
    </div>
  )
}
