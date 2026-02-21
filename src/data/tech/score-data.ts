/**
 * TechStack Panorama - 模拟评分数据
 * 
 * 用于开发测试的模拟评分数据
 * 包含20个主流技术栈的多维度评分
 */

import type { TechScores } from './score-types'

/**
 * 技术评分数据映射表
 * key: 技术ID
 * value: 多维度评分数据
 */
export const techScoreData: Record<string, TechScores> = {
  // ===== Frontend Technologies =====
  react: {
    popularity: 95,
    maintenance: 92,
    ecosystem: 98,
    learningCurve: 75,
    enterpriseAdoption: 90,
    total: 91,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  vue: {
    popularity: 88,
    maintenance: 85,
    ecosystem: 90,
    learningCurve: 85,
    enterpriseAdoption: 75,
    total: 85,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  angular: {
    popularity: 82,
    maintenance: 88,
    ecosystem: 85,
    learningCurve: 60,
    enterpriseAdoption: 88,
    total: 82,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  svelte: {
    popularity: 75,
    maintenance: 80,
    ecosystem: 70,
    learningCurve: 90,
    enterpriseAdoption: 55,
    total: 75,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  'nextjs': {
    popularity: 92,
    maintenance: 90,
    ecosystem: 88,
    learningCurve: 70,
    enterpriseAdoption: 85,
    total: 88,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  tailwindcss: {
    popularity: 90,
    maintenance: 88,
    ecosystem: 82,
    learningCurve: 88,
    enterpriseAdoption: 78,
    total: 86,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  vite: {
    popularity: 85,
    maintenance: 88,
    ecosystem: 80,
    learningCurve: 92,
    enterpriseAdoption: 70,
    total: 84,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  typescript: {
    popularity: 94,
    maintenance: 95,
    ecosystem: 96,
    learningCurve: 72,
    enterpriseAdoption: 92,
    total: 91,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  astro: {
    popularity: 72,
    maintenance: 85,
    ecosystem: 65,
    learningCurve: 88,
    enterpriseAdoption: 50,
    total: 74,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Node.js Technologies =====
  nestjs: {
    popularity: 78,
    maintenance: 85,
    ecosystem: 82,
    learningCurve: 70,
    enterpriseAdoption: 75,
    total: 79,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  hono: {
    popularity: 68,
    maintenance: 88,
    ecosystem: 60,
    learningCurve: 90,
    enterpriseAdoption: 45,
    total: 72,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Python Technologies =====
  fastapi: {
    popularity: 82,
    maintenance: 88,
    ecosystem: 78,
    learningCurve: 85,
    enterpriseAdoption: 70,
    total: 81,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  django: {
    popularity: 88,
    maintenance: 85,
    ecosystem: 90,
    learningCurve: 75,
    enterpriseAdoption: 82,
    total: 85,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Go Technologies =====
  gin: {
    popularity: 85,
    maintenance: 82,
    ecosystem: 78,
    learningCurve: 88,
    enterpriseAdoption: 75,
    total: 82,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  'go-zero': {
    popularity: 72,
    maintenance: 80,
    ecosystem: 65,
    learningCurve: 75,
    enterpriseAdoption: 70,
    total: 73,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Java Technologies =====
  'spring-boot': {
    popularity: 92,
    maintenance: 90,
    ecosystem: 95,
    learningCurve: 65,
    enterpriseAdoption: 95,
    total: 89,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  quarkus: {
    popularity: 68,
    maintenance: 85,
    ecosystem: 65,
    learningCurve: 72,
    enterpriseAdoption: 60,
    total: 71,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Rust Technologies =====
  axum: {
    popularity: 65,
    maintenance: 88,
    ecosystem: 58,
    learningCurve: 55,
    enterpriseAdoption: 45,
    total: 66,
    lastCalculated: '2025-02-15T10:00:00Z'
  },
  'actix-web': {
    popularity: 62,
    maintenance: 82,
    ecosystem: 55,
    learningCurve: 58,
    enterpriseAdoption: 40,
    total: 63,
    lastCalculated: '2025-02-15T10:00:00Z'
  },

  // ===== Additional Frontend =====
  nuxtjs: {
    popularity: 75,
    maintenance: 82,
    ecosystem: 78,
    learningCurve: 82,
    enterpriseAdoption: 60,
    total: 77,
    lastCalculated: '2025-02-15T10:00:00Z'
  }
}

/**
 * 获取指定技术的评分数据
 * @param techId 技术ID
 * @returns 评分数据，如果不存在返回null
 */
export function getTechScore(techId: string): TechScores | null {
  return techScoreData[techId] ?? null
}

/**
 * 获取所有技术的评分数据
 * @returns 所有技术评分数据数组，包含技术ID
 */
export function getAllTechScores(): Array<{ id: string; scores: TechScores }> {
  return Object.entries(techScoreData).map(([id, scores]) => ({
    id,
    scores
  }))
}

/**
 * 可见性阈值（总分 >= 70时默认展示）
 */
const VISIBLE_THRESHOLD = 70

/**
 * 新兴技术阈值（总分 < 70 但维护活跃度 >= 60）
 */
const EMERGING_THRESHOLD = 60

/**
 * 获取可见技术的评分数据
 * 条件：总分 >= 70
 * @returns 可见技术评分数据数组
 */
export function getVisibleTechScores(): Array<{ id: string; scores: TechScores }> {
  return Object.entries(techScoreData)
    .filter(([, scores]) => scores.total >= VISIBLE_THRESHOLD)
    .map(([id, scores]) => ({ id, scores }))
    .sort((a, b) => b.scores.total - a.scores.total)
}

/**
 * 获取新兴技术的评分数据
 * 条件：总分 < 70 且 维护活跃度 >= 60
 * @returns 新兴技术评分数据数组
 */
export function getEmergingTechScores(): Array<{ id: string; scores: TechScores }> {
  return Object.entries(techScoreData)
    .filter(([, scores]) => scores.total < VISIBLE_THRESHOLD && scores.maintenance >= EMERGING_THRESHOLD)
    .map(([id, scores]) => ({ id, scores }))
    .sort((a, b) => b.scores.maintenance - a.scores.maintenance)
}
