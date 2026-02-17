import { Suspense } from 'react'
import { 
  frontendData, 
  nodejsData, 
  pythonData, 
  goData, 
  javaData, 
  rustData, 
  infrastructureData,
  aiCoreData,
  aiLLMData,
  aiInfraData,
  aiTrainData,
  aiEvalData,
  aiToolsData
} from './data'
import { TechTable } from './tech-table'

// 加载骨架屏组件
function TableSkeleton() {
  return (
    <div className="mb-8 animate-pulse">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 w-64"></div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="h-48 bg-gray-100 dark:bg-gray-800"></div>
      </div>
    </div>
  )
}

// 统计数据卡片
function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className={`text-3xl font-bold mb-1 ${color}`}>{value}</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">{label}</div>
    </div>
  )
}

// 页面头部
function PageHeader() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          2025 主流技术栈全景图
        </span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
        前端 · 后端 · AI 开发技术对比，助您全面了解当前技术生态
      </p>
    </div>
  )
}

// 统计卡片区域
function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      <StatCard value="20+" label="前端技术领域" color="text-blue-600 dark:text-blue-400" />
      <StatCard value="5" label="后端语言生态" color="text-purple-600 dark:text-purple-400" />
      <StatCard value="40+" label="AI 技术领域" color="text-pink-600 dark:text-pink-400" />
      <StatCard value="20+" label="基础设施组件" color="text-green-600 dark:text-green-400" />
    </div>
  )
}

// 前端技术栈区域
function FrontendSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent flex items-center gap-2">
        <span className="text-2xl">🖥️</span> 前端技术栈 (Frontend)
      </h2>
      <TechTable data={frontendData} title="" />
    </div>
  )
}

// 后端技术栈区域
function BackendSection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
        <span className="text-2xl">⚙️</span> 后端技术栈 (Backend)
      </h2>

      <TechTable data={nodejsData} title="Node.js / TypeScript 生态" icon="🟢" />
      <TechTable data={pythonData} title="Python 生态" icon="🐍" />
      <TechTable data={goData} title="Go 生态" icon="🐹" />
      <TechTable data={javaData} title="Java 生态" icon="☕" />
      <TechTable data={rustData} title="Rust 生态" icon="🦀" />
      <TechTable data={infrastructureData} title="基础设施与通用组件" icon="🏗️" />
    </div>
  )
}

// AI 技术栈区域
function AISection() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent flex items-center gap-2">
        <span className="text-2xl">🤖</span> AI 开发技术栈 (AI Development)
      </h2>

      <TechTable data={aiCoreData} title="核心模型" icon="🧠" />
      <TechTable data={aiLLMData} title="LLM 应用开发" icon="💬" />
      <TechTable data={aiInfraData} title="推理与部署" icon="🚀" />
      <TechTable data={aiTrainData} title="训练与微调" icon="🔬" />
      <TechTable data={aiEvalData} title="评估与监控" icon="📊" />
      <TechTable data={aiToolsData} title="开发工具与平台" icon="🛠️" />
    </div>
  )
}

// 页脚
function PageFooter() {
  return (
    <div className="text-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        💡 提示：技术选型需根据项目需求、团队经验和生态成熟度综合考量
      </p>
    </div>
  )
}

// 主页面 - Server Component
export default function TechStackAllPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 头部 - 优先渲染 */}
        <PageHeader />
        
        {/* 统计卡片 */}
        <StatsSection />

        {/* 前端技术栈 - 首屏内容 */}
        <FrontendSection />

        {/* 后端技术栈 - 带骨架屏延迟加载 */}
        <Suspense fallback={<TableSkeleton />}>
          <BackendSection />
        </Suspense>

        {/* AI 技术栈 - 带骨架屏延迟加载 */}
        <Suspense fallback={<TableSkeleton />}>
          <AISection />
        </Suspense>

        {/* 页脚 */}
        <PageFooter />
      </div>
    </div>
  )
}
