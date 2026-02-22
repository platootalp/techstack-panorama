'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ThemeCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function ThemeCard({ children, className, hover = true, onClick }: ThemeCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300 overflow-hidden',
        'bg-white dark:bg-slate-800/70',
        'border border-slate-200 dark:border-slate-700/50',
        'shadow-sm dark:shadow-none',
        hover && 'cursor-pointer hover:shadow-md dark:hover:shadow-[0_10px_25px_-5px_rgba(147,51,234,0.2)]',
        hover && 'hover:border-purple-300 dark:hover:border-purple-500/50',
        hover && 'hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

interface ThemeCardAccentProps {
  color: string
  className?: string
}

export function ThemeCardAccent({ color, className }: ThemeCardAccentProps) {
  return (
    <div
      className={cn('absolute top-0 left-0 right-0 h-[3px]', className)}
      style={{
        background: `linear-gradient(90deg, ${color}, ${color}80)`,
      }}
    />
  )
}
