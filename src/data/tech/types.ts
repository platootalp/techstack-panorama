import type { TechScores } from './score-types'

export interface TechDetail {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'ai' | 'infrastructure'
  subcategory: string
  description: string
  tagline: string
  version: string
  pros: string[]
  cons: string[]
  bestFor: string[]
  notFor: string[]
  learningCurve: 'beginner' | 'intermediate' | 'advanced'
  ecosystemScore: number
  popularity: {
    githubStars: number
    npmDownloads?: number
  }
  companyUsers: string[]
  createdYear: number
  maintainedBy: string
  officialUrl: string
  githubUrl: string
  documentationUrl: string
  alternatives: string[]
  
  // ===== 新增：评分相关字段 =====
  /** 多维度评分数据 */
  scores: TechScores
  
  /** 是否可见（总分 >= 70） */
  isVisible: boolean
  
  /** 是否为新兴技术（总分 < 70 但维护活跃度 >= 60） */
  isEmerging: boolean
}

export interface TechCollection {
  [key: string]: TechDetail
}
