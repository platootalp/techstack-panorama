'use client'

import { TechCard } from './TechCard'
import type { TechDetail } from '@/data/tech/types'

interface TechGridProps {
  technologies: TechDetail[]
  showEmerging?: boolean
}

export function TechGrid({ technologies, showEmerging = false }: TechGridProps) {
  const visibleTechs = technologies.filter(tech => 
    tech.isVisible || (showEmerging && tech.isEmerging)
  )
  
  return (
    <div className="tech-grid">
      {visibleTechs.map(tech => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </div>
  )
}
