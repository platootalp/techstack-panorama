'use client'

import { memo } from 'react'

interface TechItem {
  category: string
  tech: string
  popular: string
  description: string
}

interface TechTableProps {
  data: TechItem[]
  title: string
  icon?: string
}

// 使用 React.memo 优化表格渲染，避免不必要的重渲染
export const TechTable = memo(function TechTable({ data, title, icon }: TechTableProps) {
  return (
    <div className="mb-8">
      {title && (
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
          {icon && <span className="text-xl">{icon}</span>}
          <span>{title}</span>
        </h3>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 w-28 whitespace-nowrap">
                分类
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                主流技术
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 w-36 whitespace-nowrap">
                热门推荐
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 w-40">
                说明
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <TechTableRow key={index} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})

// 单独提取行组件并 memo 化，减少每行的重渲染
const TechTableRow = memo(function TechTableRow({ row }: { row: TechItem }) {
  return (
    <tr className="hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors">
      <td className="px-4 py-2.5 font-medium text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 whitespace-nowrap text-sm">
        {row.category}
      </td>
      <td className="px-4 py-2.5 text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
        <div className="flex flex-wrap gap-1">
          {row.tech.split(' / ').map((tech, i) => (
            <TechTag key={i} tech={tech} />
          ))}
        </div>
      </td>
      <td className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-700">
        <span className="inline-block px-2.5 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold whitespace-nowrap">
          {row.popular}
        </span>
      </td>
      <td className="px-4 py-2.5 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700 text-xs">
        {row.description}
      </td>
    </tr>
  )
})

// 技术标签组件 - memo 化
const TechTag = memo(function TechTag({ tech }: { tech: string }) {
  return (
    <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-600 rounded text-xs text-gray-700 dark:text-gray-200">
      {tech}
    </span>
  )
})
