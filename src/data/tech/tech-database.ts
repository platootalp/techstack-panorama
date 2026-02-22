/**
 * TechStack Panorama - 技术档案数据库
 * 
 * 完整的技术栈档案数据，包含深度内容和归档状态
 * 所有评分数据来源于 score-data.ts
 */

import type { TechDetail, TechDeepDive, ArchiveReason } from './types'
import { llmAlgorithmData, llmApplicationData } from './llm-data'

// ============================================
// 深度内容定义
// ============================================

const createDeepDive = (
  features: TechDeepDive['features'],
  resources: TechDeepDive['resources'],
  bestPractices: TechDeepDive['bestPractices'],
  comparisons: TechDeepDive['comparisons'],
  useCases: TechDeepDive['useCases']
): TechDeepDive => ({
  features,
  resources,
  bestPractices,
  comparisons,
  useCases
})

// React 深度内容
const reactDeepDive = createDeepDive(
  [
    { title: '组件化架构', description: 'React 采用组件化开发模式，将UI拆分为独立、可复用的组件。每个组件管理自己的状态，通过props进行数据传递，实现高内聚低耦合的代码结构。' },
    { title: '虚拟 DOM', description: '通过虚拟DOM机制，React 在内存中维护一个虚拟的DOM树，通过Diff算法计算最小变更集，批量更新真实DOM，大幅提升渲染性能。' },
    { title: 'Hooks API', description: 'Hooks 让函数组件拥有状态管理能力。useState、useEffect、useContext 等 Hook 提供了强大的功能，同时保持代码的简洁和可测试性。' },
    { title: '并发特性', description: 'React 18 引入并发渲染，允许React中断渲染过程以处理高优先级更新。Suspense、Transitions 等新特性提供更好的用户体验。' }
  ],
  [
    { type: 'official', title: 'React 官方文档', url: 'https://react.dev', description: '最权威的学习资源' },
    { type: 'tutorial', title: 'React 实战教程', url: 'https://react.dev/learn', description: '官方交互式学习路径' },
    { type: 'video', title: 'React Conf', url: 'https://www.youtube.com/reactconf', description: '最新技术动态' },
    { type: 'community', title: 'GitHub Discussions', url: 'https://github.com/reactjs/react.dev/discussions', description: '社区讨论' }
  ],
  [
    { category: '组件设计', items: ['保持组件单一职责', 'Props 向下传递，事件向上传递', '避免过深的组件嵌套', '合理使用 React.memo'] },
    { category: '状态管理', items: ['优先使用本地状态', '使用 Context 避免 Props Drilling', '考虑使用 Zustand/Jotai'] },
    { category: '性能优化', items: ['使用 React DevTools Profiler', '虚拟列表处理大数据', '代码分割和懒加载'] }
  ],
  [
    { techId: 'vue', techName: 'Vue.js', strengths: ['更灵活的模板语法', '学习曲线更平缓', '官方生态更完整'], weaknesses: ['TypeScript 支持不如 React', '大型企业级应用经验相对较少'], whenToChoose: '需要渐进式框架或团队前端经验不统一时' },
    { techId: 'angular', techName: 'Angular', strengths: ['完整的企业级框架', '依赖注入系统', '强类型优先'], weaknesses: ['学习曲线陡峭', '概念繁多复杂'], whenToChoose: '需要企业级完整解决方案时' }
  ],
  [
    { scenario: '大型单页应用(SPA)', description: 'React 的组件化和状态管理能力非常适合复杂的SPA开发', recommended: true },
    { scenario: '跨平台移动应用', description: '配合 React Native 开发 iOS/Android 应用', recommended: true },
    { scenario: '桌面应用', description: '配合 Electron 开发桌面应用', recommended: true },
    { scenario: '简单静态页面', description: '对于简单的营销页面，React 可能过于重量级', recommended: false }
  ]
)

// Vue 深度内容
const vueDeepDive = createDeepDive(
  [
    { title: '响应式系统', description: 'Vue 3 使用 Proxy 实现响应式，自动追踪依赖关系。当数据变化时，自动更新相关视图。' },
    { title: '组合式 API', description: 'Composition API 提供 setup() 函数和一组响应式API，让逻辑复用更加灵活。' },
    { title: '单文件组件(SFC)', description: '.vue 文件将模板、脚本、样式封装在一起，支持 scoped CSS、CSS Modules。' },
    { title: '指令系统', description: 'v-if、v-for、v-model 等内置指令简洁强大，同时支持自定义指令扩展功能。' }
  ],
  [
    { type: 'official', title: 'Vue.js 官方文档', url: 'https://vuejs.org', description: '中文支持优秀' },
    { type: 'tutorial', title: 'Vue Mastery', url: 'https://www.vuemastery.com', description: '高质量视频教程' },
    { type: 'book', title: 'Vue.js 设计与实现', url: 'https://book.vuejs.org', description: '深入理解 Vue 原理' }
  ],
  [
    { category: '项目结构', items: ['按功能组织文件', '提取可复用的 composables', '使用 Pinia 进行状态管理'] }
  ],
  [
    { techId: 'react', techName: 'React', strengths: ['更庞大的生态系统', 'React Native 跨平台', '更多企业采用'], weaknesses: ['需要额外学习 JSX', 'Hooks 规则较复杂'], whenToChoose: '需要最大生态系统或 React Native 时' }
  ],
  [
    { scenario: '渐进式项目升级', description: '可以从简单页面开始，逐步引入复杂功能', recommended: true },
    { scenario: '中小型项目', description: '开箱即用的体验非常适合中小型项目', recommended: true },
    { scenario: '企业级后台系统', description: '配合 Element Plus/Ant Design Vue 快速构建', recommended: true }
  ]
)


// Next.js 深度内容
const nextjsDeepDive = createDeepDive(
  [
    { title: '混合渲染模式', description: '支持 SSR、SSG、ISR、CSR 多种渲染策略，可按页面选择最优方案。App Router 提供 Server Components 支持。' },
    { title: '文件系统路由', description: '基于文件系统的路由约定，pages/index.tsx 自动映射到 /，pages/blog/[slug].tsx 处理动态路由。' },
    { title: 'API Routes', description: 'pages/api/* 自动成为 API 端点，可构建全栈应用。App Router 使用 Route Handlers。' },
    { title: '图像优化', description: '内置 Image 组件自动优化图片，支持懒加载、响应式图片、WebP 转换。' },
    { title: '中间件支持', description: 'Middleware 可以在请求到达页面之前执行逻辑，实现认证、重定向、A/B测试等功能。' }
  ],
  [
    { type: 'official', title: 'Next.js 文档', url: 'https://nextjs.org/docs', description: '详尽的官方文档' },
    { type: 'tutorial', title: 'Next.js Learn', url: 'https://nextjs.org/learn', description: '官方免费课程' },
    { type: 'community', title: 'Next.js Discord', url: 'https://nextjs.org/discord', description: '活跃的社区支持' }
  ],
  [
    { category: '渲染策略', items: ['内容稳定的页面使用 SSG', '用户特定内容使用 SSR', '高频更新的数据使用 ISR', '交互组件使用客户端渲染'] },
    { category: '性能优化', items: ['使用 next/image 优化图片', '动态导入 heavy 组件', '监控 Core Web Vitals'] }
  ],
  [
    { techId: 'nuxtjs', techName: 'Nuxt.js', strengths: ['Vue 生态系统', '更简单的配置', '优秀的模块系统'], weaknesses: ['社区规模较小', '第三方集成相对较少'], whenToChoose: '选择 Vue 作为前端框架时' },
    { techId: 'astro', techName: 'Astro', strengths: ['零 JavaScript 默认', '更好的性能', '支持多框架'], weaknesses: ['生态相对较新', '交互性需要岛屿架构'], whenToChoose: '需要内容优先的网站时' }
  ],
  [
    { scenario: '电商网站', description: 'SEO 友好，支持服务端渲染和静态生成', recommended: true },
    { scenario: '内容网站', description: '博客、文档站点，配合 ISR 实现实时更新', recommended: true },
    { scenario: '全栈应用', description: 'API Routes + 前端，一站式解决方案', recommended: true },
    { scenario: '纯静态展示页', description: '可以使用更轻量的方案如 Astro', recommended: false }
  ]
)

// TypeScript 深度内容
const typescriptDeepDive = createDeepDive(
  [
    { title: '静态类型检查', description: '在编译时捕获类型错误，避免运行时错误。IDE 提供智能提示和自动补全。' },
    { title: '高级类型系统', description: '支持泛型、联合类型、交叉类型、条件类型、映射类型等高级特性。' },
    { title: '类型推断', description: '强大的类型推断能力，在很多情况下无需显式注解类型，代码依然类型安全。' },
    { title: '装饰器支持', description: '实验性支持装饰器语法，常用于 Angular、NestJS 等框架。' }
  ],
  [
    { type: 'official', title: 'TypeScript 文档', url: 'https://www.typescriptlang.org', description: '官方手册' },
    { type: 'book', title: 'TypeScript 入门教程', url: 'https://ts.xcatliu.com', description: '中文入门教程' }
  ],
  [
    { category: '类型定义', items: ['优先使用 interface 定义对象类型', '使用 type 定义联合/交叉类型', '避免使用 any'] },
    { category: '项目配置', items: ['启用 strict 模式', '配置合理的 tsconfig.json', '使用绝对路径导入'] }
  ],
  [
    { techId: 'javascript', techName: 'JavaScript', strengths: ['无需编译', '更快的开发速度', '更低的入门门槛'], weaknesses: ['运行时错误难以发现', '重构困难', '大型项目维护成本高'], whenToChoose: '极小型项目或快速原型' }
  ],
  [
    { scenario: '大型前端项目', description: '团队协作、代码可维护性的最佳选择', recommended: true },
    { scenario: 'Node.js 后端', description: '类型安全的服务端开发', recommended: true },
    { scenario: '工具库开发', description: '为使用者提供类型定义', recommended: true },
    { scenario: '简单脚本', description: '可以使用 JavaScript 快速编写', recommended: false }
  ]
)

// Tailwind CSS 深度内容
const tailwindcssDeepDive = createDeepDive(
  [
    { title: '原子化 CSS', description: '提供大量实用类，直接在 HTML 中组合使用，无需编写自定义 CSS。' },
    { title: '响应式设计', description: '内置断点前缀（sm:, md:, lg: 等），轻松实现响应式布局。' },
    { title: '主题定制', description: '通过 tailwind.config.js 完全定制设计系统：颜色、字体、间距等。' },
    { title: 'JIT 引擎', description: 'Just-In-Time 编译器按需生成样式，开发速度快，产物体积小。' }
  ],
  [
    { type: 'official', title: 'Tailwind CSS 文档', url: 'https://tailwindcss.com', description: '完整的类名参考' },
    { type: 'tutorial', title: 'Tailwind Labs', url: 'https://www.youtube.com/tailwindlabs', description: '官方视频教程' }
  ],
  [
    { category: '类名管理', items: ['使用 @apply 提取重复模式', '配置自定义主题', '使用插件扩展功能'] },
    { category: '性能优化', items: ['启用 JIT 模式', '配置 content 路径', '使用 purgecss'] }
  ],
  [
    { techId: 'bootstrap', techName: 'Bootstrap', strengths: ['组件丰富', '文档完善', '上手简单'], weaknesses: ['样式难以定制', '所有站点看起来相似', '体积较大'], whenToChoose: '需要快速原型或简单后台时' }
  ],
  [
    { scenario: '现代 Web 应用', description: '快速构建自定义设计系统', recommended: true },
    { scenario: '设计系统实现', description: '与设计稿完美匹配', recommended: true },
    { scenario: '快速原型', description: '比传统 CSS 更快构建界面', recommended: true },
    { scenario: '小型静态页面', description: '传统 CSS 可能更简单', recommended: false }
  ]
)


// Vite 深度内容
const viteDeepDive = createDeepDive(
  [
    { title: '极速冷启动', description: '基于原生 ESM，无需打包，开发服务器启动速度极快。' },
    { title: '即时热更新', description: '精确的 HMR，模块更新速度快，保持应用状态不丢失。' },
    { title: '优化的构建', description: '使用 Rollup 进行生产构建，支持代码分割和 tree-shaking。' },
    { title: '丰富的插件生态', description: '兼容 Rollup 插件，官方提供 Vue、React、Svelte 等插件。' }
  ],
  [
    { type: 'official', title: 'Vite 文档', url: 'https://vitejs.dev', description: '中文文档优秀' },
    { type: 'community', title: 'Vite GitHub', url: 'https://github.com/vitejs/vite', description: '问题反馈和讨论' }
  ],
  [
    { category: '配置优化', items: ['配置 alias 路径别名', '优化依赖预构建', '配置环境变量'] },
    { category: '生产构建', items: ['配置 rollup 选项', '优化 chunk 分割', '开启 gzip/brotli 压缩'] }
  ],
  [
    { techId: 'webpack', techName: 'Webpack', strengths: ['生态系统最成熟', 'Loader/Plugin 丰富', '企业采用率高'], weaknesses: ['配置复杂', '构建速度慢', '学习曲线陡峭'], whenToChoose: '需要复杂构建流程或遗留项目时' }
  ],
  [
    { scenario: '现代前端项目', description: 'Vue、React 等新项目的最佳选择', recommended: true },
    { scenario: '快速原型开发', description: '几秒钟启动开发服务器', recommended: true },
    { scenario: '大型项目优化', description: '生产构建优化效果显著', recommended: true },
    { scenario: '遗留项目迁移', description: '可能需要大量配置调整', recommended: false }
  ]
)

// Angular 深度内容
const angularDeepDive = createDeepDive(
  [
    { title: '完整框架', description: '内置路由、表单、HTTP客户端、动画等，开箱即用。' },
    { title: '依赖注入', description: '强大的 DI 系统，便于测试和代码复用。' },
    { title: 'TypeScript 优先', description: '框架本身使用 TypeScript 编写，类型支持优秀。' },
    { title: 'RxJS 集成', description: '内置响应式编程支持，适合复杂的异步操作。' }
  ],
  [
    { type: 'official', title: 'Angular 文档', url: 'https://angular.io', description: '详尽的官方指南' },
    { type: 'tutorial', title: 'Angular University', url: 'https://angular-university.io', description: '高质量课程' }
  ],
  [
    { category: '架构设计', items: ['使用模块化组织代码', '智能组件和展示组件分离', '使用服务共享状态'] },
    { category: '性能优化', items: ['使用 OnPush 变更检测', '懒加载模块', '服务端渲染(Universal)'] }
  ],
  [
    { techId: 'react', techName: 'React', strengths: ['更灵活的生态系统', '更轻量', '更多第三方库'], weaknesses: ['需要自己选择路由/状态管理', '缺乏官方最佳实践'], whenToChoose: '需要灵活架构时' }
  ],
  [
    { scenario: '大型企业应用', description: '完整解决方案，规范性强', recommended: true },
    { scenario: '团队经验统一', description: '强约束确保代码质量', recommended: true },
    { scenario: '快速原型', description: '学习曲线陡峭，不适合快速开发', recommended: false },
    { scenario: '小型项目', description: '过于重量级', recommended: false }
  ]
)

// Astro 深度内容
const astroDeepDive = createDeepDive(
  [
    { title: '零 JS 默认', description: '页面默认不加载 JavaScript，只有在需要交互的组件才加载。' },
    { title: '岛屿架构', description: '将页面拆分为静态内容和交互式岛屿，优化性能。' },
    { title: '多框架支持', description: '可以在同一个项目中使用 React、Vue、Svelte 等组件。' },
    { title: '内容集合', description: '内置对 Markdown、MDX 的支持，适合内容网站。' }
  ],
  [
    { type: 'official', title: 'Astro 文档', url: 'https://docs.astro.build', description: '详尽的文档' },
    { type: 'community', title: 'Astro Discord', url: 'https://astro.build/chat', description: '友好的社区' }
  ],
  [
    { category: '性能优化', items: ['使用 Islands 架构', '优化图片加载', '预获取关键资源'] },
    { category: '内容管理', items: ['使用 Content Collections', '配置 MDX 支持', '集成 CMS'] }
  ],
  [
    { techId: 'nextjs', techName: 'Next.js', strengths: ['更大的生态系统', 'React 优先', '更多企业采用'], weaknesses: ['默认加载更多 JS', '学习曲线更陡'], whenToChoose: '需要丰富交互功能时' }
  ],
  [
    { scenario: '内容网站', description: '博客、文档、营销页面', recommended: true },
    { scenario: '性能敏感应用', description: 'Core Web Vitals 优秀', recommended: true },
    { scenario: '电商展示', description: '快速加载的商品页面', recommended: true },
    { scenario: '复杂 Web 应用', description: '需要大量客户端交互', recommended: false }
  ]
)

// NestJS 深度内容
const nestjsDeepDive = createDeepDive(
  [
    { title: '企业级架构', description: '受 Angular 启发，提供模块化、依赖注入、装饰器等特性。' },
    { title: 'TypeScript 优先', description: '原生支持 TypeScript，类型安全，开发体验好。' },
    { title: '丰富的生态', description: '官方支持 GraphQL、WebSocket、微服务、队列等。' },
    { title: '可扩展性', description: '基于 Express/Fastify，可自定义底层平台。' }
  ],
  [
    { type: 'official', title: 'NestJS 文档', url: 'https://docs.nestjs.com', description: '详尽的官方文档' },
    { type: 'tutorial', title: 'NestJS 中文文档', url: 'https://docs.nestjs.cn', description: '中文社区翻译' }
  ],
  [
    { category: '架构设计', items: ['使用模块化组织代码', '使用 DTO 进行数据验证', '使用拦截器/守卫实现横切关注点'] },
    { category: '性能优化', items: ['使用 Fastify 适配器', '启用缓存', '数据库连接池'] }
  ],
  [
    { techId: 'express', techName: 'Express', strengths: ['轻量简单', '生态系统最大', '学习曲线平缓'], weaknesses: ['缺乏架构约束', '容易写出混乱代码', 'TypeScript 支持需配置'], whenToChoose: '小型项目或快速原型时' }
  ],
  [
    { scenario: '企业级后端', description: '大型 Node.js 应用的首选', recommended: true },
    { scenario: 'API 服务', description: 'RESTful API 和 GraphQL API', recommended: true },
    { scenario: '微服务', description: '内置微服务支持', recommended: true },
    { scenario: '简单脚本', description: '过于重量级', recommended: false }
  ]
)


// FastAPI 深度内容
const fastapiDeepDive = createDeepDive(
  [
    { title: '高性能异步', description: '基于 Starlette 和 Pydantic，支持异步请求处理，性能优秀。' },
    { title: '自动 API 文档', description: '自动生成 OpenAPI 文档和 Swagger UI，无需额外配置。' },
    { title: '数据验证', description: '基于 Pydantic，自动进行请求/响应数据的验证和序列化。' },
    { title: '类型提示', description: '完全基于 Python 类型提示，IDE 支持友好。' }
  ],
  [
    { type: 'official', title: 'FastAPI 文档', url: 'https://fastapi.tiangolo.com', description: '优秀的中文文档' },
    { type: 'tutorial', title: 'FastAPI 教程', url: 'https://fastapi.tiangolo.com/tutorial/', description: '官方教程' }
  ],
  [
    { category: '项目结构', items: ['使用依赖注入系统', '合理组织路由', '使用后台任务处理耗时操作'] },
    { category: '生产部署', items: ['使用 Gunicorn + Uvicorn', '配置 Nginx 反向代理', '使用 Docker 部署'] }
  ],
  [
    { techId: 'django', techName: 'Django', strengths: ['功能最完整', 'admin 后台强大', '生态系统成熟'], weaknesses: ['性能相对较低', '同步为主', '学习曲线陡峭'], whenToChoose: '需要快速开发完整功能的后台时' }
  ],
  [
    { scenario: '高性能 API', description: '需要异步处理的现代 API 服务', recommended: true },
    { scenario: '机器学习服务', description: '与 ML 库集成方便', recommended: true },
    { scenario: '实时应用', description: '配合 WebSocket 处理实时数据', recommended: true },
    { scenario: '传统 CMS', description: 'Django 的 admin 更适合', recommended: false }
  ]
)

// Django 深度内容
const djangoDeepDive = createDeepDive(
  [
    { title: '全功能框架', description: '包含 ORM、admin、认证、表单等，开箱即用。' },
    { title: 'admin 后台', description: '自动生成强大的后台管理界面，节省开发时间。' },
    { title: '安全特性', description: '内置防护 CSRF、XSS、SQL 注入等安全威胁。' },
    { title: '生态系统', description: '丰富的第三方包，Django REST framework 等。' }
  ],
  [
    { type: 'official', title: 'Django 文档', url: 'https://docs.djangoproject.com', description: '详尽的官方文档' },
    { type: 'tutorial', title: 'Django Girls', url: 'https://tutorial.djangogirls.org', description: '适合初学者的教程' }
  ],
  [
    { category: '项目结构', items: ['使用 Django REST framework 构建 API', '配置 Celery 处理异步任务', '使用缓存框架'] },
    { category: '性能优化', items: ['使用 select_related/prefetch_related', '配置数据库索引', '使用 Redis 缓存'] }
  ],
  [
    { techId: 'fastapi', techName: 'FastAPI', strengths: ['性能更好', '异步支持', '类型提示'], weaknesses: ['生态相对较小', '缺乏 admin 后台'], whenToChoose: '需要高性能异步 API 时' }
  ],
  [
    { scenario: '内容管理系统', description: 'admin 后台强大，适合 CMS 开发', recommended: true },
    { scenario: '电商网站', description: '完整的用户、订单、支付管理', recommended: true },
    { scenario: '企业后台', description: '快速开发管理后台', recommended: true },
    { scenario: '高并发 API', description: 'FastAPI 更适合异步场景', recommended: false }
  ]
)

// Spring Boot 深度内容
const springBootDeepDive = createDeepDive(
  [
    { title: '自动配置', description: '根据类路径自动配置 Spring 应用，大幅减少样板代码。' },
    { title: '内嵌服务器', description: '内置 Tomcat/Jetty/Undertow，无需部署 WAR 文件。' },
    { title: 'Actuator 监控', description: '提供生产级监控和管理端点。' },
    { title: 'Spring 生态', description: '与 Spring Cloud、Spring Security 等无缝集成。' }
  ],
  [
    { type: 'official', title: 'Spring 文档', url: 'https://spring.io/guides', description: '官方指南' },
    { type: 'tutorial', title: 'Baeldung', url: 'https://www.baeldung.com', description: '高质量教程' }
  ],
  [
    { category: '架构设计', items: ['使用分层架构', '配置多环境', '使用 Spring Profiles'] },
    { category: '生产优化', items: ['配置连接池', '使用缓存', '配置健康检查'] }
  ],
  [
    { techId: 'quarkus', techName: 'Quarkus', strengths: ['启动更快', '内存占用低', '云原生'], weaknesses: ['生态较新', '企业采用率低'], whenToChoose: '云原生/Kubernetes 环境' }
  ],
  [
    { scenario: '企业级应用', description: 'Java 企业开发的标准选择', recommended: true },
    { scenario: '微服务架构', description: '配合 Spring Cloud 使用', recommended: true },
    { scenario: '传统单体应用', description: '适合大型单体项目', recommended: true },
    { scenario: 'Serverless', description: 'Quarkus 更适合冷启动场景', recommended: false }
  ]
)


// Svelte 深度内容
const svelteDeepDive = createDeepDive(
  [
    { title: '编译时优化', description: '在构建时将组件编译为高效的命令式代码，无虚拟DOM开销。' },
    { title: '真正的响应式', description: '使用赋值语句即可触发更新，无需 setState 或 ref。' },
    { title: '内置功能', description: '内置动画、过渡、存储等，无需额外库。' },
    { title: 'SvelteKit', description: '官方元框架，提供路由、服务端渲染等功能。' }
  ],
  [
    { type: 'official', title: 'Svelte 教程', url: 'https://svelte.dev/tutorial', description: '交互式学习' },
    { type: 'official', title: 'SvelteKit 文档', url: 'https://kit.svelte.dev', description: '元框架文档' }
  ],
  [
    { category: '性能优化', items: ['利用编译优化', '使用存储管理状态', '代码分割'] },
    { category: '开发体验', items: ['使用 VS Code 插件', '配置 ESLint', '使用 TypeScript'] }
  ],
  [
    { techId: 'react', techName: 'React', strengths: ['生态系统更大', '更多工作机会', '企业采用率高'], weaknesses: ['虚拟 DOM 开销', '需要更多样板代码'], whenToChoose: '需要稳定生态系统时' }
  ],
  [
    { scenario: '性能敏感应用', description: '编译优化带来更小的包体积', recommended: true },
    { scenario: '嵌入式组件', description: '可以作为 Web Components 使用', recommended: true },
    { scenario: '数据可视化', description: '流畅的动画和过渡效果', recommended: true },
    { scenario: '大型团队项目', description: '招聘和生态可能受限', recommended: false }
  ]
)

// Hono 深度内容
const honoDeepDive = createDeepDive(
  [
    { title: '极致轻量', description: '核心仅数KB，但功能完整，适合边缘计算。' },
    { title: '多平台支持', description: '支持 Cloudflare Workers、Deno、Bun、Node.js 等。' },
    { title: 'TypeScript 优先', description: '类型安全的路由定义，开发体验优秀。' },
    { title: '中间件系统', description: '类似 Express 的中间件，易于理解和使用。' }
  ],
  [
    { type: 'official', title: 'Hono 文档', url: 'https://hono.dev', description: '官方文档' },
    { type: 'community', title: 'Hono Discord', url: 'https://discord.gg/hono', description: '社区支持' }
  ],
  [
    { category: '性能优化', items: ['利用边缘计算', '最小化依赖', '使用缓存'] },
    { category: '部署', items: ['部署到 Cloudflare Workers', '使用 Deno Deploy', 'Docker 部署'] }
  ],
  [
    { techId: 'express', techName: 'Express', strengths: ['生态系统最成熟', '学习资源丰富', '企业采用率高'], weaknesses: ['TypeScript 支持需配置', '性能相对较低'], whenToChoose: '传统 Node.js 项目' }
  ],
  [
    { scenario: '边缘计算', description: 'Cloudflare Workers、Deno Deploy 等', recommended: true },
    { scenario: '无服务器函数', description: 'Vercel、Netlify Functions', recommended: true },
    { scenario: '高性能 API', description: '轻量级带来低延迟', recommended: true },
    { scenario: '复杂业务逻辑', description: 'NestJS 更适合', recommended: false }
  ]
)

// Gin 深度内容
const ginDeepDive = createDeepDive(
  [
    { title: '高性能', description: '基于 httprouter，路由性能优秀，内存占用低。' },
    { title: '中间件支持', description: '类似 Express 的中间件链，支持全局和路由级中间件。' },
    { title: 'JSON 验证', description: '内置请求解析和验证，支持 JSON、XML、表单等。' },
    { title: '错误管理', description: '方便的错误处理和恢复机制。' }
  ],
  [
    { type: 'official', title: 'Gin GitHub', url: 'https://github.com/gin-gonic/gin', description: '官方仓库和文档' },
    { type: 'tutorial', title: 'Gin 示例', url: 'https://github.com/gin-gonic/examples', description: '官方示例代码' }
  ],
  [
    { category: '项目结构', items: ['使用 MVC 分层', '使用中间件处理横切关注点', '配置优雅关机'] },
    { category: '性能优化', items: ['使用 sync.Pool 复用对象', '配置 pprof 分析', '优化 GC'] }
  ],
  [
    { techId: 'echo', techName: 'Echo', strengths: ['功能更丰富', '官方中间件更多', '文档更完善'], weaknesses: ['性能略低', '社区规模稍小'], whenToChoose: '需要更多内置功能时' }
  ],
  [
    { scenario: '高性能 API', description: 'Go 的高性能适合高并发 API', recommended: true },
    { scenario: '微服务', description: '轻量级适合微服务架构', recommended: true },
    { scenario: '企业级应用', description: 'Go-Zero 功能更完整', recommended: false }
  ]
)


// Nuxt.js 深度内容
const nuxtjsDeepDive = createDeepDive(
  [
    { title: '约定优于配置', description: '自动路由、自动导入，开发效率高。' },
    { title: '渲染模式', description: '支持 SSR、SSG、CSR，可按路由配置。' },
    { title: '模块生态', description: '丰富的 Nuxt 模块，快速集成各种功能。' },
    { title: 'Nitro 引擎', description: '新的服务端引擎，支持多种部署目标。' }
  ],
  [
    { type: 'official', title: 'Nuxt 文档', url: 'https://nuxt.com', description: 'Nuxt 3 文档' },
    { type: 'community', title: 'Nuxt 模块', url: 'https://nuxt.com/modules', description: '官方模块库' }
  ],
  [
    { category: '开发', items: ['使用组合式函数', '配置 TypeScript', '使用 Nuxt DevTools'] },
    { category: '部署', items: ['配置 Nitro 预设', '使用 Vercel/Netlify', 'Docker 部署'] }
  ],
  [
    { techId: 'nextjs', techName: 'Next.js', strengths: ['React 生态更大', 'Vercel 优先支持', '企业采用率高'], weaknesses: ['Vue 开发者需学习 React'], whenToChoose: '选择 React 作为框架时' }
  ],
  [
    { scenario: 'Vue 全栈应用', description: 'Vue 生态的 Next.js 替代品', recommended: true },
    { scenario: '内容网站', description: '配合 Nuxt Content 使用', recommended: true },
    { scenario: '电商平台', description: 'SEO 友好的电商方案', recommended: true },
    { scenario: '非 Vue 项目', description: '需要 Vue 作为基础', recommended: false }
  ]
)

// Go-Zero 深度内容
const goZeroDeepDive = createDeepDive(
  [
    { title: '微服务框架', description: '内置服务发现、负载均衡、熔断降级等微服务特性。' },
    { title: '代码生成', description: '通过 api 文件生成服务端代码，提高开发效率。' },
    { title: '高性能', description: '优化的 HTTP 和 RPC 性能，适合高并发场景。' },
    { title: '工具链', description: '提供 goctl 工具，快速生成项目和代码。' }
  ],
  [
    { type: 'official', title: 'Go-Zero 文档', url: 'https://go-zero.dev', description: '中文文档优秀' },
    { type: 'tutorial', title: 'Go-Zero 示例', url: 'https://github.com/zeromicro/zero-examples', description: '官方示例' }
  ],
  [
    { category: '微服务', items: ['使用 etcd 做服务发现', '配置熔断和限流', '链路追踪'] },
    { category: '性能', items: ['优化连接池', '使用缓存', '配置合理的超时'] }
  ],
  [
    { techId: 'gin', techName: 'Gin', strengths: ['更简单轻量', '学习曲线平缓', '社区更大'], weaknesses: ['缺乏微服务特性', '需自行实现服务治理'], whenToChoose: '单体应用或简单 API' }
  ],
  [
    { scenario: '微服务架构', description: '内置完整的微服务支持', recommended: true },
    { scenario: '高并发系统', description: '优化的性能和限流机制', recommended: true },
    { scenario: '快速开发', description: '代码生成提高效率', recommended: true },
    { scenario: '小型项目', description: 'Gin 更简单', recommended: false }
  ]
)

// Quarkus 深度内容
const quarkusDeepDive = createDeepDive(
  [
    { title: '云原生 Java', description: '为 Kubernetes 和 Serverless 优化的 Java 框架。' },
    { title: '快速启动', description: 'GraalVM 原生镜像支持，毫秒级启动。' },
    { title: '低内存', description: '优化的内存使用，适合容器环境。' },
    { title: '开发模式', description: '实时重载，开发体验优秀。' }
  ],
  [
    { type: 'official', title: 'Quarkus 文档', url: 'https://quarkus.io/guides', description: '官方指南' },
    { type: 'community', title: 'Quarkus GitHub', url: 'https://github.com/quarkusio/quarkus', description: '源代码' }
  ],
  [
    { category: '云原生', items: ['配置 Kubernetes 扩展', '使用 GraalVM 构建原生镜像', '配置健康检查'] },
    { category: '性能', items: ['使用 Mutiny 响应式编程', '配置连接池', '启用缓存'] }
  ],
  [
    { techId: 'spring-boot', techName: 'Spring Boot', strengths: ['生态系统最成熟', '企业采用率最高', '学习资源丰富'], weaknesses: ['启动较慢', '内存占用较高'], whenToChoose: '传统企业应用' }
  ],
  [
    { scenario: 'Serverless', description: '快速启动适合函数计算', recommended: true },
    { scenario: 'Kubernetes', description: '云原生优化设计', recommended: true },
    { scenario: '微服务', description: '内置微服务支持', recommended: true },
    { scenario: '传统企业应用', description: 'Spring Boot 生态更成熟', recommended: false }
  ]
)

// ============================================
// 已归档技术（示例）
// ============================================

const axumDeepDive = createDeepDive(
  [
    { title: 'Tower 生态系统', description: '基于 Tower 构建，与 Rust 异步生态深度集成。' },
    { title: '类型安全路由', description: '利用 Rust 类型系统，编译时保证路由安全。' }
  ],
  [
    { type: 'official', title: 'Axum 文档', url: 'https://docs.rs/axum', description: 'API 文档' }
  ],
  [
    { category: '开发', items: ['使用 Tower Service', '配置中间件', '处理错误'] }
  ],
  [
    { techId: 'actix-web', techName: 'Actix-web', strengths: ['性能极高', '历史悠久'], weaknesses: ['维护者变动', '社区活跃度下降'], whenToChoose: 'Actix-web 目前更成熟' }
  ],
  [
    { scenario: 'Rust Web 开发', description: '目前被 Actix-web 替代中', recommended: false }
  ]
)


// ============================================
// 技术数据库
// ============================================

export const techDatabase: Record<string, TechDetail> = {
  // ===== Frontend Technologies =====
  react: {
    id: 'react',
    name: 'React',
    category: 'frontend',
    subcategory: '框架',
    description: '用于构建用户界面的 JavaScript 库，采用组件化和声明式编程范式',
    tagline: '组件化 UI 开发的标准',
    version: '18.3.1',
    pros: ['庞大的生态系统', 'React Native 跨平台', '强大的社区支持', 'Facebook 维护', '灵活性高'],
    cons: ['学习曲线较陡', '需要额外学习 JSX', 'Hooks 规则限制', '状态管理方案选择困难'],
    bestFor: ['大型单页应用', '跨平台移动应用', '复杂交互界面', '企业级项目'],
    notFor: ['简单静态页面', 'SEO 优先的轻量网站'],
    learningCurve: 'intermediate',
    ecosystemScore: 98,
    popularity: { githubStars: 228000, npmDownloads: 22000000 },
    companyUsers: ['Facebook', 'Instagram', 'Netflix', 'Airbnb', 'Uber'],
    createdYear: 2013,
    maintainedBy: 'Meta (Facebook)',
    officialUrl: 'https://react.dev',
    githubUrl: 'https://github.com/facebook/react',
    documentationUrl: 'https://react.dev',
    alternatives: ['vue', 'angular', 'svelte'],
    scores: {
      popularity: 95, maintenance: 92, ecosystem: 98, learningCurve: 75, enterpriseAdoption: 90,
      total: 91, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: reactDeepDive
  },

  vue: {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    subcategory: '框架',
    description: '渐进式 JavaScript 框架，易于上手，灵活性高',
    tagline: '渐进式 JavaScript 框架',
    version: '3.4.21',
    pros: ['学习曲线平缓', '模板语法直观', '优秀的官方生态', '中文文档优秀', '性能优秀'],
    cons: ['企业采用率较低', '大型项目经验相对较少', 'TypeScript 支持不如 React'],
    bestFor: ['中小型项目', '渐进式升级', '快速原型开发', '后台管理系统'],
    notFor: ['超大型企业应用', '需要最多工作机会'],
    learningCurve: 'beginner',
    ecosystemScore: 90,
    popularity: { githubStars: 207000 },
    companyUsers: ['Alibaba', 'Xiaomi', 'Bilibili', 'GitLab', 'Nintendo'],
    createdYear: 2014,
    maintainedBy: 'Evan You',
    officialUrl: 'https://vuejs.org',
    githubUrl: 'https://github.com/vuejs/core',
    documentationUrl: 'https://vuejs.org',
    alternatives: ['react', 'angular', 'svelte'],
    scores: {
      popularity: 88, maintenance: 85, ecosystem: 90, learningCurve: 85, enterpriseAdoption: 75,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: vueDeepDive
  },

  angular: {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    subcategory: '框架',
    description: 'Google 开发的企业级前端框架，提供完整的解决方案',
    tagline: '企业级前端开发平台',
    version: '17.2.0',
    pros: ['完整的企业级框架', 'TypeScript 优先', '依赖注入系统', '强大的 CLI 工具', '长期支持'],
    cons: ['学习曲线陡峭', '概念繁多复杂', '样板代码较多', '灵活性较低'],
    bestFor: ['大型企业应用', '团队规模较大', '需要强约束的项目', '长期维护项目'],
    notFor: ['快速原型开发', '小型项目', '灵活度要求高的项目'],
    learningCurve: 'advanced',
    ecosystemScore: 85,
    popularity: { githubStars: 96000 },
    companyUsers: ['Google', 'Microsoft', 'Forbes', 'PayPal', 'Samsung'],
    createdYear: 2016,
    maintainedBy: 'Google',
    officialUrl: 'https://angular.io',
    githubUrl: 'https://github.com/angular/angular',
    documentationUrl: 'https://angular.io/docs',
    alternatives: ['react', 'vue'],
    scores: {
      popularity: 82, maintenance: 88, ecosystem: 85, learningCurve: 60, enterpriseAdoption: 88,
      total: 82, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: angularDeepDive
  },

  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    subcategory: '元框架',
    description: '基于 React 的全栈框架，支持 SSR、SSG、ISR 等多种渲染模式',
    tagline: 'React 全栈框架',
    version: '14.2.0',
    pros: ['多种渲染模式', '优秀的开发体验', 'Vercel 生态', '自动路由', '图像优化'],
    cons: ['Vercel 锁定风险', '学习成本较高', 'App Router 迁移成本'],
    bestFor: ['SEO 友好网站', '全栈应用', '电商平台', '内容网站'],
    notFor: ['纯静态展示页', '简单 SPA'],
    learningCurve: 'intermediate',
    ecosystemScore: 88,
    popularity: { githubStars: 123000 },
    companyUsers: ['Netflix', 'Uber', 'Starbucks', 'TikTok', 'Nike'],
    createdYear: 2016,
    maintainedBy: 'Vercel',
    officialUrl: 'https://nextjs.org',
    githubUrl: 'https://github.com/vercel/next.js',
    documentationUrl: 'https://nextjs.org/docs',
    alternatives: ['nuxtjs', 'astro', 'remix'],
    scores: {
      popularity: 92, maintenance: 90, ecosystem: 88, learningCurve: 70, enterpriseAdoption: 85,
      total: 88, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: nextjsDeepDive
  },

  svelte: {
    id: 'svelte',
    name: 'Svelte',
    category: 'frontend',
    subcategory: '框架',
    description: '编译时优化的前端框架，无虚拟 DOM，包体积小',
    tagline: '控制论增强的 Web 应用',
    version: '4.2.12',
    pros: ['编译时优化', '无虚拟 DOM 开销', '包体积小', '真正的响应式', '内置动画'],
    cons: ['生态系统较小', '工作机会较少', '大型项目验证不足'],
    bestFor: ['性能敏感应用', '嵌入式组件', '数据可视化', '小型项目'],
    notFor: ['超大型应用', '团队规模较大'],
    learningCurve: 'beginner',
    ecosystemScore: 70,
    popularity: { githubStars: 80000 },
    companyUsers: ['The New York Times', 'Spotify', 'Apple'],
    createdYear: 2016,
    maintainedBy: 'Rich Harris (Vercel)',
    officialUrl: 'https://svelte.dev',
    githubUrl: 'https://github.com/sveltejs/svelte',
    documentationUrl: 'https://svelte.dev/docs',
    alternatives: ['react', 'vue', 'solidjs'],
    scores: {
      popularity: 75, maintenance: 80, ecosystem: 70, learningCurve: 90, enterpriseAdoption: 55,
      total: 75, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: svelteDeepDive
  },


  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    subcategory: '语言',
    description: 'JavaScript 的超集，提供静态类型检查和现代语言特性',
    tagline: '带类型的 JavaScript',
    version: '5.3.3',
    pros: ['静态类型检查', '优秀的 IDE 支持', '强大的类型系统', '渐进式采用', '大型项目必备'],
    cons: ['需要编译步骤', '初期配置复杂', '学习曲线存在', '第三方库类型定义不完整'],
    bestFor: ['大型前端项目', 'Node.js 后端', '工具库开发', '团队协作'],
    notFor: ['简单脚本', '快速原型', '极小型项目'],
    learningCurve: 'intermediate',
    ecosystemScore: 96,
    popularity: { githubStars: 101000, npmDownloads: 50000000 },
    companyUsers: ['Microsoft', 'Google', 'Slack', 'Asana', 'Shopify'],
    createdYear: 2012,
    maintainedBy: 'Microsoft',
    officialUrl: 'https://www.typescriptlang.org',
    githubUrl: 'https://github.com/microsoft/TypeScript',
    documentationUrl: 'https://www.typescriptlang.org/docs',
    alternatives: ['javascript', 'flow', 'reason'],
    scores: {
      popularity: 94, maintenance: 95, ecosystem: 96, learningCurve: 72, enterpriseAdoption: 92,
      total: 91, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: typescriptDeepDive
  },

  tailwindcss: {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    subcategory: '样式方案',
    description: '实用优先的 CSS 框架，通过组合原子类构建界面',
    tagline: '无需离开 HTML 即可构建现代网站',
    version: '3.4.1',
    pros: ['开发速度快', '包体积小', '高度可定制', '无需命名困难', '响应式友好'],
    cons: ['HTML 类名冗长', '学习曲线存在', '可复用性挑战', '设计系统约束'],
    bestFor: ['现代 Web 应用', '快速原型开发', '设计系统实现', '响应式设计'],
    notFor: ['极小型项目', '复杂自定义动画'],
    learningCurve: 'intermediate',
    ecosystemScore: 82,
    popularity: { githubStars: 82000 },
    companyUsers: ['Vercel', 'GitHub', 'Netflix', 'Shopify', 'Loom'],
    createdYear: 2017,
    maintainedBy: 'Tailwind Labs',
    officialUrl: 'https://tailwindcss.com',
    githubUrl: 'https://github.com/tailwindlabs/tailwindcss',
    documentationUrl: 'https://tailwindcss.com/docs',
    alternatives: ['bootstrap', 'chakra-ui', 'emotion'],
    scores: {
      popularity: 90, maintenance: 88, ecosystem: 82, learningCurve: 88, enterpriseAdoption: 78,
      total: 86, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: tailwindcssDeepDive
  },

  vite: {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    subcategory: '构建工具',
    description: '下一代前端构建工具，极速冷启动和热更新',
    tagline: '下一代前端工具链',
    version: '5.1.4',
    pros: ['极速冷启动', '即时热更新', '优化的生产构建', '丰富的插件生态', 'TypeScript 支持'],
    cons: ['生态不如 Webpack 成熟', '某些高级配置需自定义', '大型项目可能需要调优'],
    bestFor: ['现代前端项目', '快速原型开发', 'Vue/React 项目', '库开发'],
    notFor: ['遗留 Webpack 项目', '需要复杂自定义构建'],
    learningCurve: 'beginner',
    ecosystemScore: 80,
    popularity: { githubStars: 68000 },
    companyUsers: ['Vue', 'Svelte', 'Nuxt', 'VitePress'],
    createdYear: 2020,
    maintainedBy: 'Evan You',
    officialUrl: 'https://vitejs.dev',
    githubUrl: 'https://github.com/vitejs/vite',
    documentationUrl: 'https://vitejs.dev/guide',
    alternatives: ['webpack', 'parcel', 'esbuild'],
    scores: {
      popularity: 85, maintenance: 88, ecosystem: 80, learningCurve: 92, enterpriseAdoption: 70,
      total: 84, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: viteDeepDive
  },

  astro: {
    id: 'astro',
    name: 'Astro',
    category: 'frontend',
    subcategory: '元框架',
    description: '内容驱动的网站构建工具，零 JavaScript 默认',
    tagline: '内容驱动，极速网站',
    version: '4.4.0',
    pros: ['零 JS 默认', '岛屿架构', '多框架支持', '性能优秀', '内容优先'],
    cons: ['生态相对较新', '交互性需特殊处理', '企业采用率低'],
    bestFor: ['内容网站', '博客', '文档站点', '营销页面'],
    notFor: ['复杂 Web 应用', '高交互性需求'],
    learningCurve: 'beginner',
    ecosystemScore: 65,
    popularity: { githubStars: 43000 },
    companyUsers: ['The Guardian', 'NordVPN', 'Trivago'],
    createdYear: 2021,
    maintainedBy: 'Astro Team',
    officialUrl: 'https://astro.build',
    githubUrl: 'https://github.com/withastro/astro',
    documentationUrl: 'https://docs.astro.build',
    alternatives: ['nextjs', 'gatsby', 'eleventy'],
    scores: {
      popularity: 72, maintenance: 85, ecosystem: 65, learningCurve: 88, enterpriseAdoption: 50,
      total: 74, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: astroDeepDive
  },

  nuxtjs: {
    id: 'nuxtjs',
    name: 'Nuxt.js',
    category: 'frontend',
    subcategory: '元框架',
    description: '基于 Vue 的直观 Web 框架，支持 SSR 和 SSG',
    tagline: '直观的 Vue 框架',
    version: '3.10.3',
    pros: ['Vue 生态集成', '约定优于配置', 'Nitro 引擎', '自动导入', '丰富的模块'],
    cons: ['Vue 生态限制', '企业采用率较低', 'Next.js 竞争'],
    bestFor: ['Vue 全栈应用', '内容网站', '电商平台'],
    notFor: ['非 Vue 项目', 'React 团队'],
    learningCurve: 'intermediate',
    ecosystemScore: 78,
    popularity: { githubStars: 53000 },
    companyUsers: ['GitLab', 'Upwork', 'Ecosia'],
    createdYear: 2016,
    maintainedBy: 'Nuxt Labs',
    officialUrl: 'https://nuxt.com',
    githubUrl: 'https://github.com/nuxt/nuxt',
    documentationUrl: 'https://nuxt.com/docs',
    alternatives: ['nextjs', 'vue', 'remix'],
    scores: {
      popularity: 75, maintenance: 82, ecosystem: 78, learningCurve: 82, enterpriseAdoption: 60,
      total: 77, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: nuxtjsDeepDive
  },


  // ===== Frontend: State Management =====
  zustand: {
    id: 'zustand',
    name: 'Zustand',
    category: 'frontend',
    subcategory: '状态管理',
    description: '轻量、简单、强大的 React 状态管理库，基于 Hooks',
    tagline: '极简的 React 状态管理',
    version: '4.5.0',
    pros: ['极简 API', '无样板代码', 'TypeScript 支持好', '体积小巧', '易于学习'],
    cons: ['生态相对较小', '复杂场景需自行组合', '调试工具不如 Redux'],
    bestFor: ['中小型项目', '快速原型', '简单状态管理', '现代 React 项目'],
    notFor: ['复杂时间旅行调试', '需要严格架构约束'],
    learningCurve: 'beginner',
    ecosystemScore: 75,
    popularity: { githubStars: 42000, npmDownloads: 1200000 },
    companyUsers: ['Vercel', 'GitHub', 'Linear', 'Arc'],
    createdYear: 2019,
    maintainedBy: 'Poimandres',
    officialUrl: 'https://zustand-demo.pmnd.rs',
    githubUrl: 'https://github.com/pmndrs/zustand',
    documentationUrl: 'https://docs.pmnd.rs/zustand',
    alternatives: ['redux', 'jotai', 'recoil', 'mobx'],
    scores: {
      popularity: 82, maintenance: 85, ecosystem: 75, learningCurve: 92, enterpriseAdoption: 70,
      total: 82, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '极简 API', description: '仅需创建一个 store，无需 Provider 包裹，直接通过 hooks 访问状态。' },
        { title: '无样板代码', description: '不需要写 actions、reducers，直接修改状态即可。' },
        { title: '优秀的 TypeScript 支持', description: '类型推断完善，无需额外类型定义。' }
      ],
      [
        { type: 'official', title: 'Zustand 文档', url: 'https://docs.pmnd.rs/zustand', description: '官方文档' },
        { type: 'community', title: 'Zustand GitHub', url: 'https://github.com/pmndrs/zustand', description: '源代码' }
      ],
      [
        { category: '最佳实践', items: ['按功能拆分 store', '使用中间件持久化', '结合 Immer 处理复杂更新'] }
      ],
      [
        { techId: 'redux', techName: 'Redux', strengths: ['调试工具强大', '时间旅行', '生态系统成熟'], weaknesses: ['样板代码多', '学习曲线陡峭'], whenToChoose: '需要强大调试能力或团队已熟悉 Redux' }
      ],
      [
        { scenario: 'React 状态管理', description: '现代 React 项目的首选状态管理方案', recommended: true },
        { scenario: '跨组件通信', description: '比 Context 更简洁的跨组件状态共享', recommended: true }
      ]
    )
  },

  // ===== Frontend: UI Component Libraries =====
  shadcn: {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: 'frontend',
    subcategory: 'UI组件库',
    description: '设计精美、可复用的组件集合，基于 Radix UI 和 Tailwind CSS',
    tagline: '可复用、可定制的组件库',
    version: '2.0.0',
    pros: ['无样式锁定', '完全可定制', '基于 Radix UI', 'Tailwind 集成', '代码可复制'],
    cons: ['需要配置 Tailwind', '组件需手动安装', '无 npm 包直接安装'],
    bestFor: ['需要自定义设计系统', '现代 React 项目', 'Tailwind 项目'],
    notFor: ['快速原型', '不想配置样式'],
    learningCurve: 'intermediate',
    ecosystemScore: 80,
    popularity: { githubStars: 65000 },
    companyUsers: ['Vercel', 'Linear', 'Clerk'],
    createdYear: 2023,
    maintainedBy: 'shadcn',
    officialUrl: 'https://ui.shadcn.com',
    githubUrl: 'https://github.com/shadcn-ui/ui',
    documentationUrl: 'https://ui.shadcn.com/docs',
    alternatives: ['mui', 'antd', 'chakra-ui'],
    scores: {
      popularity: 88, maintenance: 90, ecosystem: 80, learningCurve: 80, enterpriseAdoption: 75,
      total: 84, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '无样式锁定', description: '组件代码直接复制到项目中，完全拥有和控制样式。' },
        { title: 'Radix UI 基础', description: '基于 Radix UI 的无障碍组件，确保可访问性。' },
        { title: 'Tailwind 集成', description: '与 Tailwind CSS 深度集成，样式一致性强。' }
      ],
      [
        { type: 'official', title: 'shadcn/ui 文档', url: 'https://ui.shadcn.com/docs', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 CLI 安装组件', '自定义主题变量', '配合 Tailwind 使用'] }
      ],
      [
        { techId: 'mui', techName: 'MUI', strengths: ['组件丰富', '文档完善', '企业采用率高'], weaknesses: ['样式难以覆盖', '包体积大'], whenToChoose: '需要开箱即用的 Material Design' }
      ],
      [
        { scenario: '设计系统构建', description: '基于 shadcn 构建自定义设计系统', recommended: true },
        { scenario: '管理后台', description: '快速构建美观的管理界面', recommended: true }
      ]
    )
  },

  antd: {
    id: 'antd',
    name: 'Ant Design',
    category: 'frontend',
    subcategory: 'UI组件库',
    description: '企业级 UI 设计语言和 React 组件库，由阿里巴巴出品',
    tagline: '企业级 UI 设计语言',
    version: '5.15.0',
    pros: ['企业级组件丰富', '设计规范完善', '中文文档优秀', '生态系统成熟', 'TypeScript 支持'],
    cons: ['包体积较大', '样式定制复杂', '设计偏向中后台'],
    bestFor: ['企业后台系统', '中后台管理', '需要完整设计规范'],
    notFor: ['C端消费者应用', '追求极小包体积'],
    learningCurve: 'intermediate',
    ecosystemScore: 88,
    popularity: { githubStars: 91000 },
    companyUsers: ['Alibaba', 'Tencent', 'Baidu', 'Meituan'],
    createdYear: 2015,
    maintainedBy: 'Ant Group',
    officialUrl: 'https://ant.design',
    githubUrl: 'https://github.com/ant-design/ant-design',
    documentationUrl: 'https://ant.design/docs/react/introduce',
    alternatives: ['mui', 'shadcn', 'chakra-ui'],
    scores: {
      popularity: 90, maintenance: 88, ecosystem: 88, learningCurve: 78, enterpriseAdoption: 92,
      total: 87, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '企业级组件', description: '提供 60+ 高质量组件，覆盖中后台常见场景。' },
        { title: '设计规范', description: '完整的设计语言和规范，确保产品一致性。' },
        { title: 'ProComponents', description: '基于 Ant Design 的高级组件库，进一步提升开发效率。' }
      ],
      [
        { type: 'official', title: 'Ant Design 文档', url: 'https://ant.design', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 ConfigProvider 配置主题', '按需加载组件', '配合 ProComponents 使用'] }
      ],
      [
        { techId: 'mui', techName: 'MUI', strengths: ['Material Design', 'React Native 支持'], weaknesses: ['中后台组件较少'], whenToChoose: '需要 Material Design 或跨平台' }
      ],
      [
        { scenario: '中后台管理系统', description: '企业级后台开发的首选', recommended: true },
        { scenario: '数据密集型应用', description: '表格、表单等组件功能强大', recommended: true }
      ]
    )
  },

  // ===== Frontend: Testing Tools =====
  vitest: {
    id: 'vitest',
    name: 'Vitest',
    category: 'frontend',
    subcategory: '测试工具',
    description: '由 Vite 提供支持的极速单元测试框架',
    tagline: '下一代测试框架',
    version: '1.3.0',
    pros: ['极速执行', 'Vite 集成', 'Jest 兼容', 'TypeScript 原生支持', 'HMR 支持'],
    cons: ['生态相对较新', '某些 Jest 插件不兼容', '企业采用率增长中'],
    bestFor: ['Vite 项目', '现代前端项目', '需要快速测试反馈'],
    notFor: ['遗留 Webpack 项目', '深度依赖 Jest 生态'],
    learningCurve: 'beginner',
    ecosystemScore: 75,
    popularity: { githubStars: 12000 },
    companyUsers: ['Vite', 'Nuxt', 'Svelte'],
    createdYear: 2021,
    maintainedBy: 'Vitest Team',
    officialUrl: 'https://vitest.dev',
    githubUrl: 'https://github.com/vitest-dev/vitest',
    documentationUrl: 'https://vitest.dev/guide',
    alternatives: ['jest', 'mocha', 'jasmine'],
    scores: {
      popularity: 78, maintenance: 88, ecosystem: 75, learningCurve: 90, enterpriseAdoption: 65,
      total: 80, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '极速执行', description: '利用 Vite 的极速 HMR，测试执行速度极快。' },
        { title: 'Jest 兼容', description: 'API 设计兼容 Jest，迁移成本低。' },
        { title: 'TypeScript 原生', description: '无需额外配置，原生支持 TypeScript。' }
      ],
      [
        { type: 'official', title: 'Vitest 文档', url: 'https://vitest.dev', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['配置 Vite 别名', '使用 coverage 插件', '配合 Testing Library'] }
      ],
      [
        { techId: 'jest', techName: 'Jest', strengths: ['生态最成熟', '企业采用率高', 'Snapshot 测试'], weaknesses: ['速度较慢', '配置复杂'], whenToChoose: '团队已熟悉 Jest 或需要完整生态' }
      ],
      [
        { scenario: 'Vite 项目测试', description: 'Vite 项目的最佳测试伴侣', recommended: true },
        { scenario: '快速反馈开发', description: '极速测试反馈提升开发体验', recommended: true }
      ]
    )
  },

  playwright: {
    id: 'playwright',
    name: 'Playwright',
    category: 'frontend',
    subcategory: '测试工具',
    description: 'Microsoft 出品的现代 Web 测试和自动化框架',
    tagline: '可靠的端到端测试',
    version: '1.42.0',
    pros: ['多浏览器支持', '自动等待', '强大的调试工具', '并行执行', 'Trace Viewer'],
    cons: ['学习曲线存在', '资源占用较高', '测试编写时间较长'],
    bestFor: ['端到端测试', '跨浏览器测试', '关键业务路径测试'],
    notFor: ['简单静态页面', '单元测试'],
    learningCurve: 'intermediate',
    ecosystemScore: 82,
    popularity: { githubStars: 60000 },
    companyUsers: ['Microsoft', 'Google', 'Adobe', 'Slack'],
    createdYear: 2020,
    maintainedBy: 'Microsoft',
    officialUrl: 'https://playwright.dev',
    githubUrl: 'https://github.com/microsoft/playwright',
    documentationUrl: 'https://playwright.dev/docs',
    alternatives: ['cypress', 'selenium', 'puppeteer'],
    scores: {
      popularity: 88, maintenance: 92, ecosystem: 82, learningCurve: 75, enterpriseAdoption: 85,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '多浏览器支持', description: 'Chromium、Firefox、WebKit 一键测试。' },
        { title: '自动等待', description: '智能等待元素，减少 flaky 测试。' },
        { title: 'Trace Viewer', description: '详细的测试执行追踪，便于调试。' }
      ],
      [
        { type: 'official', title: 'Playwright 文档', url: 'https://playwright.dev', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 Codegen 生成测试', '配置并行执行', '使用 Trace Viewer 调试'] }
      ],
      [
        { techId: 'cypress', techName: 'Cypress', strengths: ['实时重载', '调试体验好', '社区成熟'], weaknesses: ['仅支持 Chromium 家族', '并行测试需付费'], whenToChoose: '团队偏好 Cypress 或需要实时调试' }
      ],
      [
        { scenario: '关键业务测试', description: '确保核心用户流程正常', recommended: true },
        { scenario: '跨浏览器兼容性', description: '验证多浏览器表现一致', recommended: true }
      ]
    )
  },

  // ===== Frontend: Package Manager & Data Fetching =====
  pnpm: {
    id: 'pnpm',
    name: 'pnpm',
    category: 'frontend',
    subcategory: '包管理器',
    description: '快速、节省磁盘空间的包管理器',
    tagline: '高效的包管理器',
    version: '8.15.0',
    pros: ['节省磁盘空间', '安装速度快', '严格依赖管理', 'Monorepo 支持好'],
    cons: ['某些工具兼容性问题', '学习成本', '迁移成本'],
    bestFor: ['大型项目', 'Monorepo', '磁盘空间有限'],
    notFor: ['小型项目', '简单脚本'],
    learningCurve: 'beginner',
    ecosystemScore: 78,
    popularity: { githubStars: 28000 },
    companyUsers: ['Vercel', 'Vue', 'Nuxt'],
    createdYear: 2017,
    maintainedBy: 'pnpm Team',
    officialUrl: 'https://pnpm.io',
    githubUrl: 'https://github.com/pnpm/pnpm',
    documentationUrl: 'https://pnpm.io/motivation',
    alternatives: ['npm', 'yarn', 'bun'],
    scores: {
      popularity: 85, maintenance: 88, ecosystem: 78, learningCurve: 90, enterpriseAdoption: 75,
      total: 84, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '内容可寻址存储', description: '所有包文件存储在全局存储中，通过硬链接引用，大幅节省磁盘空间。' },
        { title: '严格依赖管理', description: '默认不允许访问未声明的依赖，避免幽灵依赖问题。' }
      ],
      [
        { type: 'official', title: 'pnpm 文档', url: 'https://pnpm.io', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 workspace 管理 Monorepo', '配置 .npmrc 优化设置', '配合 Corepack 使用'] }
      ],
      [
        { techId: 'npm', techName: 'npm', strengths: ['Node.js 内置', '生态最成熟'], weaknesses: ['磁盘占用大', '安装速度慢'], whenToChoose: '不想安装额外工具' }
      ],
      [
        { scenario: 'Monorepo 项目', description: 'workspace 功能强大，适合多包管理', recommended: true },
        { scenario: '节省磁盘空间', description: '全局存储机制节省大量空间', recommended: true }
      ]
    )
  },

  tanstackquery: {
    id: 'tanstackquery',
    name: 'TanStack Query',
    category: 'frontend',
    subcategory: '数据请求',
    description: '强大的异步状态管理库，用于处理服务端状态',
    tagline: '服务端状态管理神器',
    version: '5.20.0',
    pros: ['自动缓存', '自动重试', '乐观更新', '无限滚动支持', 'DevTools'],
    cons: ['学习曲线存在', '概念较多', '需要理解缓存策略'],
    bestFor: ['服务端状态管理', 'REST API', 'GraphQL', '复杂数据交互'],
    notFor: ['简单静态页面', '客户端状态管理'],
    learningCurve: 'intermediate',
    ecosystemScore: 85,
    popularity: { githubStars: 42000 },
    companyUsers: ['Vercel', 'Netflix', 'Uber'],
    createdYear: 2019,
    maintainedBy: 'TanStack',
    officialUrl: 'https://tanstack.com/query',
    githubUrl: 'https://github.com/TanStack/query',
    documentationUrl: 'https://tanstack.com/query/latest',
    alternatives: ['swr', 'rtk-query', 'apollo-client'],
    scores: {
      popularity: 88, maintenance: 90, ecosystem: 85, learningCurve: 78, enterpriseAdoption: 80,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '自动缓存', description: '智能的缓存机制，自动去重和失效处理。' },
        { title: '乐观更新', description: '先更新 UI 再发送请求，提升用户体验。' },
        { title: '无限滚动', description: '内置无限滚动支持，简化分页逻辑。' }
      ],
      [
        { type: 'official', title: 'TanStack Query 文档', url: 'https://tanstack.com/query', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['合理设置 staleTime', '使用 prefetch 预加载', '配合 Suspense 使用'] }
      ],
      [
        { techId: 'swr', techName: 'SWR', strengths: ['更轻量', 'Vercel 出品', '简单'], weaknesses: ['功能较少', '生态较小'], whenToChoose: '需要轻量级方案' }
      ],
      [
        { scenario: '服务端状态管理', description: '管理服务端数据的最佳选择', recommended: true },
        { scenario: '复杂数据交互', description: '缓存、重试、乐观更新一站式解决', recommended: true }
      ]
    )
  },

  // ===== Node.js Core Technologies =====
  express: {
    id: 'express',
    name: 'Express',
    category: 'backend',
    subcategory: 'Web框架',
    description: '快速、开放、极简的 Node.js Web 框架',
    tagline: 'Node.js 最流行的 Web 框架',
    version: '4.18.2',
    pros: ['极简灵活', '生态最丰富', '学习曲线平缓', '中间件机制', '社区活跃'],
    cons: ['缺乏内置功能', '回调地狱', '需要手动配置', '性能非最优'],
    bestFor: ['REST API', '中小型应用', '微服务', '快速原型'],
    notFor: ['大型复杂应用', '需要严格架构的项目'],
    learningCurve: 'beginner',
    ecosystemScore: 95,
    popularity: { githubStars: 64000, npmDownloads: 28000000 },
    companyUsers: ['Uber', 'IBM', 'Twitter', 'Stack Overflow'],
    createdYear: 2010,
    maintainedBy: 'OpenJS Foundation',
    officialUrl: 'https://expressjs.com',
    githubUrl: 'https://github.com/expressjs/express',
    documentationUrl: 'https://expressjs.com/en/api.html',
    alternatives: ['fastify', 'koa', 'nestjs'],
    scores: {
      popularity: 95, maintenance: 80, ecosystem: 95, learningCurve: 90, enterpriseAdoption: 85,
      total: 91, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '中间件架构', description: '基于中间件的请求处理流程，灵活可扩展。' },
        { title: '路由系统', description: '强大的路由定义，支持参数、正则、链式调用。' },
        { title: '模板引擎', description: '支持多种模板引擎，快速渲染 HTML。' }
      ],
      [
        { type: 'official', title: 'Express 文档', url: 'https://expressjs.com', description: '官方文档和指南' },
        { type: 'community', title: 'Express 中文文档', url: 'https://expressjs.com/zh-cn/', description: '中文官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用路由模块化组织代码', '统一错误处理中间件', '使用 helmet 增强安全'] }
      ],
      [
        { techId: 'fastify', techName: 'Fastify', strengths: ['性能更好', '内置 JSON Schema', 'TypeScript 友好'], weaknesses: ['生态较小', '学习曲线稍陡'], whenToChoose: '需要高性能时' }
      ],
      [
        { scenario: '快速原型开发', description: '快速搭建 API 服务', recommended: true },
        { scenario: '中小型 Web 应用', description: '灵活轻量的 Web 后端', recommended: true }
      ]
    )
  },

  fastify: {
    id: 'fastify',
    name: 'Fastify',
    category: 'backend',
    subcategory: 'Web框架',
    description: '快速、低开销的 Node.js Web 框架',
    tagline: 'Node.js 最快的 Web 框架之一',
    version: '4.26.0',
    pros: ['极高性能', '低开销', '内置 JSON Schema', 'TypeScript 优先', '插件系统'],
    cons: ['生态相对较小', '学习曲线较陡', '部分中间件需适配'],
    bestFor: ['高性能 API', '微服务', 'Serverless', '实时应用'],
    notFor: ['简单 CRUD', '需要丰富开箱即用功能'],
    learningCurve: 'intermediate',
    ecosystemScore: 75,
    popularity: { githubStars: 30000, npmDownloads: 1200000 },
    companyUsers: ['NearForm', 'Platformatic', 'Mia-Platform'],
    createdYear: 2016,
    maintainedBy: 'Fastify Team',
    officialUrl: 'https://fastify.dev',
    githubUrl: 'https://github.com/fastify/fastify',
    documentationUrl: 'https://fastify.dev/docs',
    alternatives: ['express', 'nestjs', 'hono'],
    scores: {
      popularity: 75, maintenance: 90, ecosystem: 75, learningCurve: 80, enterpriseAdoption: 65,
      total: 78, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: 'Schema 验证', description: '内置 JSON Schema 验证，提升性能和可靠性。' },
        { title: '钩子系统', description: '丰富的生命周期钩子，精细控制请求流程。' },
        { title: '插件架构', description: '强大的插件系统，支持嵌套和封装。' }
      ],
      [
        { type: 'official', title: 'Fastify 文档', url: 'https://fastify.dev/docs', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 schema 定义路由', '善用插件封装功能', '使用 fastify-cli 初始化项目'] }
      ],
      [
        { techId: 'express', techName: 'Express', strengths: ['生态丰富', '学习曲线平缓', '社区活跃'], weaknesses: ['性能较低', '缺乏现代特性'], whenToChoose: '快速开发、生态优先' }
      ],
      [
        { scenario: '高性能 API 服务', description: '需要处理大量并发请求', recommended: true },
        { scenario: '微服务架构', description: '轻量、快速的服务节点', recommended: true }
      ]
    )
  },

  prisma: {
    id: 'prisma',
    name: 'Prisma',
    category: 'backend',
    subcategory: 'ORM',
    description: '下一代 Node.js 和 TypeScript ORM',
    tagline: '现代数据库工具包',
    version: '5.9.0',
    pros: ['类型安全', '自动迁移', '可视化数据', '强大的查询引擎', '优秀的 DX'],
    cons: ['不支持所有数据库特性', '迁移有时复杂', '运行时体积较大'],
    bestFor: ['TypeScript 项目', '需要类型安全', '现代 Node.js 应用'],
    notFor: ['复杂 SQL', '遗留数据库', '极端性能要求'],
    learningCurve: 'intermediate',
    ecosystemScore: 85,
    popularity: { githubStars: 37000, npmDownloads: 3500000 },
    companyUsers: ['Vercel', 'Netlify', 'Rakuten', 'Tryg'],
    createdYear: 2019,
    maintainedBy: 'Prisma',
    officialUrl: 'https://prisma.io',
    githubUrl: 'https://github.com/prisma/prisma',
    documentationUrl: 'https://prisma.io/docs',
    alternatives: ['typeorm', 'sequelize', 'drizzle'],
    scores: {
      popularity: 85, maintenance: 92, ecosystem: 85, learningCurve: 80, enterpriseAdoption: 80,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: 'Prisma Schema', description: '声明式数据模型定义，支持关系、枚举、默认值。' },
        { title: '类型安全查询', description: '完全类型化的查询 API，编译时捕获错误。' },
        { title: 'Prisma Studio', description: '可视化数据库管理工具，方便数据查看和编辑。' }
      ],
      [
        { type: 'official', title: 'Prisma 文档', url: 'https://prisma.io/docs', description: '官方文档' },
        { type: 'official', title: 'Prisma Examples', url: 'https://github.com/prisma/prisma-examples', description: '官方示例' }
      ],
      [
        { category: '最佳实践', items: ['使用 migrate dev 管理开发迁移', '定期使用 db pull 同步数据库', '使用 Prisma Client 扩展自定义逻辑'] }
      ],
      [
        { techId: 'typeorm', techName: 'TypeORM', strengths: ['支持 Active Record', '功能丰富', '装饰器语法'], weaknesses: ['维护较慢', 'TypeScript 支持问题'], whenToChoose: '需要复杂关系映射' }
      ],
      [
        { scenario: '现代 TypeScript 后端', description: '类型安全的 Node.js 应用', recommended: true },
        { scenario: '快速 API 开发', description: '配合 tRPC 或 GraphQL 使用', recommended: true }
      ]
    )
  },

  // ===== Backend Technologies =====
  nestjs: {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    subcategory: 'Web框架',
    description: '用于构建高效、可扩展的 Node.js 服务器端应用程序的框架',
    tagline: '渐进式 Node.js 框架',
    version: '10.3.0',
    pros: ['企业级架构', 'TypeScript 优先', '依赖注入', '丰富的生态', '可扩展性强'],
    cons: ['学习曲线较陡', '概念较多', '样板代码', '性能不如轻量框架'],
    bestFor: ['企业级后端', 'API 服务', '微服务架构', '复杂业务逻辑'],
    notFor: ['简单脚本', 'Serverless 函数'],
    learningCurve: 'intermediate',
    ecosystemScore: 82,
    popularity: { githubStars: 65000 },
    companyUsers: ['Adidas', 'Capgemini', 'Decathlon', 'Sanofi'],
    createdYear: 2017,
    maintainedBy: 'Kamil Myśliwiec',
    officialUrl: 'https://nestjs.com',
    githubUrl: 'https://github.com/nestjs/nest',
    documentationUrl: 'https://docs.nestjs.com',
    alternatives: ['express', 'fastify', 'hono'],
    scores: {
      popularity: 78, maintenance: 85, ecosystem: 82, learningCurve: 70, enterpriseAdoption: 75,
      total: 79, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: nestjsDeepDive
  },

  hono: {
    id: 'hono',
    name: 'Hono',
    category: 'backend',
    subcategory: 'Web框架',
    description: '轻量、快速的 Web 框架，支持多种 JavaScript 运行时',
    tagline: '极速、轻量的 Web 框架',
    version: '4.0.0',
    pros: ['极致轻量', '多平台支持', 'TypeScript 优先', '性能优秀', '边缘计算友好'],
    cons: ['生态相对较新', '企业采用率低', '功能相对简单'],
    bestFor: ['边缘计算', 'Serverless 函数', '高性能 API', '轻量服务'],
    notFor: ['复杂业务逻辑', '企业级应用'],
    learningCurve: 'beginner',
    ecosystemScore: 60,
    popularity: { githubStars: 12000 },
    companyUsers: ['Cloudflare', 'Vercel'],
    createdYear: 2022,
    maintainedBy: 'Yusuke Wada',
    officialUrl: 'https://hono.dev',
    githubUrl: 'https://github.com/honojs/hono',
    documentationUrl: 'https://hono.dev',
    alternatives: ['express', 'fastify', 'nestjs'],
    scores: {
      popularity: 68, maintenance: 88, ecosystem: 60, learningCurve: 90, enterpriseAdoption: 45,
      total: 72, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: honoDeepDive
  },

  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    subcategory: 'Web框架',
    description: '高性能的 Python Web 框架，基于 Starlette 和 Pydantic',
    tagline: '高性能、易学、快速编码',
    version: '0.109.0',
    pros: ['高性能异步', '自动 API 文档', '数据验证', '类型提示', '现代 Python'],
    cons: ['生态相对较小', '异步学习曲线', '生产部署需配置'],
    bestFor: ['高性能 API', '机器学习服务', '数据科学', '微服务'],
    notFor: ['传统 CMS', '需要 admin 后台'],
    learningCurve: 'intermediate',
    ecosystemScore: 78,
    popularity: { githubStars: 75000 },
    companyUsers: ['Netflix', 'Uber', 'Microsoft', 'Explosion AI'],
    createdYear: 2018,
    maintainedBy: 'Sebastián Ramírez',
    officialUrl: 'https://fastapi.tiangolo.com',
    githubUrl: 'https://github.com/tiangolo/fastapi',
    documentationUrl: 'https://fastapi.tiangolo.com',
    alternatives: ['django', 'flask', 'tornado'],
    scores: {
      popularity: 82, maintenance: 88, ecosystem: 78, learningCurve: 85, enterpriseAdoption: 70,
      total: 81, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: fastapiDeepDive
  },

  django: {
    id: 'django',
    name: 'Django',
    category: 'backend',
    subcategory: 'Web框架',
    description: 'Python 的高级 Web 框架，鼓励快速开发和简洁实用的设计',
    tagline: '有完美主义截止日期的 Web 框架',
    version: '5.0.0',
    pros: ['功能完整', 'admin 后台强大', '安全可靠', '生态系统成熟', '文档优秀'],
    cons: ['同步为主', '学习曲线陡峭', '灵活性较低', '性能相对较低'],
    bestFor: ['内容管理系统', '电商网站', '企业后台', '快速开发'],
    notFor: ['高并发 API', '实时应用'],
    learningCurve: 'advanced',
    ecosystemScore: 90,
    popularity: { githubStars: 79000 },
    companyUsers: ['Instagram', 'Pinterest', 'Mozilla', 'NASA', 'National Geographic'],
    createdYear: 2005,
    maintainedBy: 'Django Software Foundation',
    officialUrl: 'https://www.djangoproject.com',
    githubUrl: 'https://github.com/django/django',
    documentationUrl: 'https://docs.djangoproject.com',
    alternatives: ['fastapi', 'flask', 'tornado'],
    scores: {
      popularity: 88, maintenance: 85, ecosystem: 90, learningCurve: 75, enterpriseAdoption: 82,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: djangoDeepDive
  },

  // ===== Python Core Technologies =====
  flask: {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    subcategory: 'Web框架',
    description: '轻量级的 Python Web 框架，简洁而灵活',
    tagline: 'Python 微框架的代表',
    version: '3.0.0',
    pros: ['极简灵活', '易于学习', '扩展丰富', '文档优秀', '社区活跃'],
    cons: ['缺少内置功能', '需要手动配置', '大型项目需自行架构'],
    bestFor: ['小型应用', 'API 服务', '微服务', '原型开发'],
    notFor: ['大型复杂应用', '需要完整 admin 后台'],
    learningCurve: 'beginner',
    ecosystemScore: 85,
    popularity: { githubStars: 66000 },
    companyUsers: ['Pinterest', 'LinkedIn', 'Netflix', 'Reddit'],
    createdYear: 2010,
    maintainedBy: 'Pallets Projects',
    officialUrl: 'https://flask.palletsprojects.com',
    githubUrl: 'https://github.com/pallets/flask',
    documentationUrl: 'https://flask.palletsprojects.com/en/3.0.x/',
    alternatives: ['django', 'fastapi', 'tornado'],
    scores: {
      popularity: 85, maintenance: 85, ecosystem: 85, learningCurve: 90, enterpriseAdoption: 80,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '极简核心', description: '核心功能精简，通过扩展实现所需功能。' },
        { title: 'Jinja2 模板', description: '强大的模板引擎，支持模板继承和宏。' },
        { title: 'Werkzeug WSGI', description: '基于 Werkzeug，提供强大的请求处理功能。' }
      ],
      [
        { type: 'official', title: 'Flask 文档', url: 'https://flask.palletsprojects.com', description: '官方文档' },
        { type: 'tutorial', title: 'Flask Mega-Tutorial', url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world', description: '经典教程' }
      ],
      [
        { category: '最佳实践', items: ['使用应用工厂模式', '使用蓝图组织路由', '使用 Flask-SQLAlchemy 处理数据库'] }
      ],
      [
        { techId: 'fastapi', techName: 'FastAPI', strengths: ['性能更好', '异步支持', '自动文档'], weaknesses: ['生态较小', '学习曲线'], whenToChoose: '需要高性能 API' }
      ],
      [
        { scenario: '小型 Web 应用', description: '快速开发轻量级应用', recommended: true },
        { scenario: 'RESTful API', description: '构建灵活的 API 服务', recommended: true }
      ]
    )
  },

  sqlalchemy: {
    id: 'sqlalchemy',
    name: 'SQLAlchemy',
    category: 'backend',
    subcategory: 'ORM',
    description: 'Python 的 SQL 工具包和 ORM 框架',
    tagline: 'Python 最强大的数据库工具',
    version: '2.0.25',
    pros: ['功能强大', '灵活性高', '支持多种数据库', 'SQL 表达式语言', '成熟稳定'],
    cons: ['学习曲线陡峭', '文档复杂', '配置较繁琐'],
    bestFor: ['复杂数据库操作', '企业级应用', '需要精细控制 SQL'],
    notFor: ['简单 CRUD', '快速原型'],
    learningCurve: 'advanced',
    ecosystemScore: 90,
    popularity: { githubStars: 8000 },
    companyUsers: ['Reddit', 'Uber', 'Netflix', 'Dropbox'],
    createdYear: 2006,
    maintainedBy: 'Mike Bayer',
    officialUrl: 'https://www.sqlalchemy.org',
    githubUrl: 'https://github.com/sqlalchemy/sqlalchemy',
    documentationUrl: 'https://docs.sqlalchemy.org',
    alternatives: ['django-orm', 'tortoise-orm', 'peewee'],
    scores: {
      popularity: 88, maintenance: 90, ecosystem: 90, learningCurve: 70, enterpriseAdoption: 88,
      total: 86, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: 'Core 和 ORM', description: '提供 SQL 表达式语言(Core)和对象关系映射(ORM)两层 API。' },
        { title: '连接池', description: '内置高性能连接池，支持多种连接池策略。' },
        { title: '事务管理', description: '强大的事务和会话管理，支持嵌套事务。' }
      ],
      [
        { type: 'official', title: 'SQLAlchemy 文档', url: 'https://docs.sqlalchemy.org', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 2.0 风格的查询 API', '合理使用连接池', '使用 Alembic 管理迁移'] }
      ],
      [
        { techId: 'django-orm', techName: 'Django ORM', strengths: ['开箱即用', 'admin 集成', '迁移自动'], weaknesses: ['灵活性较低', '仅 Django 可用'], whenToChoose: '使用 Django 框架时' }
      ],
      [
        { scenario: '复杂数据模型', description: '处理复杂关系和查询', recommended: true },
        { scenario: '企业级后端', description: '需要精细控制数据库操作', recommended: true }
      ]
    )
  },

  // ===== Go Core Technologies =====
  echo: {
    id: 'echo',
    name: 'Echo',
    category: 'backend',
    subcategory: 'Web框架',
    description: '高性能、极简的 Go Web 框架',
    tagline: 'Go 的高性能极简框架',
    version: '4.11.4',
    pros: ['性能极高', '路由强大', '中间件丰富', '文档优秀', '易于测试'],
    cons: ['功能相对简单', '缺乏内置 ORM', '社区比 Gin 小'],
    bestFor: ['REST API', '微服务', '高性能服务', '云原生应用'],
    notFor: ['复杂业务逻辑', '需要完整 ORM'],
    learningCurve: 'beginner',
    ecosystemScore: 75,
    popularity: { githubStars: 28000 },
    companyUsers: ['Google', 'Netflix', 'Uber', 'Twitter'],
    createdYear: 2015,
    maintainedBy: 'LabStack',
    officialUrl: 'https://echo.labstack.com',
    githubUrl: 'https://github.com/labstack/echo',
    documentationUrl: 'https://echo.labstack.com/guide',
    alternatives: ['gin', 'fiber', 'go-zero'],
    scores: {
      popularity: 80, maintenance: 85, ecosystem: 75, learningCurve: 90, enterpriseAdoption: 75,
      total: 82, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '路由系统', description: '支持路径参数、查询参数、路由组和中间件链。' },
        { title: '数据绑定', description: '自动将请求数据绑定到 Go 结构体。' },
        { title: '中间件', description: '丰富的内置中间件和易于扩展的自定义中间件。' }
      ],
      [
        { type: 'official', title: 'Echo 文档', url: 'https://echo.labstack.com', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用路由组组织 API', '自定义错误处理', '合理使用中间件链'] }
      ],
      [
        { techId: 'gin', techName: 'Gin', strengths: ['社区更大', '中间件丰富', '生态成熟'], weaknesses: ['路由稍弱'], whenToChoose: '需要丰富生态支持' }
      ],
      [
        { scenario: '高性能 API', description: '需要极致性能的服务', recommended: true },
        { scenario: '微服务架构', description: '轻量、快速的服务节点', recommended: true }
      ]
    )
  },

  gorm: {
    id: 'gorm',
    name: 'GORM',
    category: 'backend',
    subcategory: 'ORM',
    description: 'Go 语言的优秀 ORM 库',
    tagline: 'Go 开发者喜爱的 ORM',
    version: '1.25.6',
    pros: ['功能完整', '文档优秀', '社区活跃', '支持多种数据库', '易于使用'],
    cons: ['性能不如原生 SQL', '复杂查询受限', '反射性能开销'],
    bestFor: ['快速开发', '标准 CRUD 操作', '多数据库支持'],
    notFor: ['极致性能要求', '复杂 SQL 查询'],
    learningCurve: 'intermediate',
    ecosystemScore: 85,
    popularity: { githubStars: 35000 },
    companyUsers: ['Bilibili', 'ByteDance', 'Alibaba'],
    createdYear: 2013,
    maintainedBy: 'Jinzhu',
    officialUrl: 'https://gorm.io',
    githubUrl: 'https://github.com/go-gorm/gorm',
    documentationUrl: 'https://gorm.io/docs',
    alternatives: ['ent', 'bun', 'sqlx'],
    scores: {
      popularity: 85, maintenance: 88, ecosystem: 85, learningCurve: 82, enterpriseAdoption: 80,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '全功能 ORM', description: '支持关联、预加载、事务、迁移等完整功能。' },
        { title: 'Hooks 系统', description: '支持 Before/After Create/Update/Delete 等钩子。' },
        { title: '迁移工具', description: '内置 AutoMigrate 和独立的迁移工具。' }
      ],
      [
        { type: 'official', title: 'GORM 文档', url: 'https://gorm.io', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用结构体标签定义模型', '合理使用 Preload 避免 N+1', '使用事务保证数据一致性'] }
      ],
      [
        { techId: 'ent', techName: 'Ent', strengths: ['类型安全', 'Facebook 出品', '代码生成'], weaknesses: ['学习曲线', '生态较小'], whenToChoose: '需要强类型安全' }
      ],
      [
        { scenario: 'Go Web 开发', description: '配合 Gin/Echo 使用', recommended: true },
        { scenario: '多数据库项目', description: '需要支持多种数据库', recommended: true }
      ]
    )
  },

  gin: {
    id: 'gin',
    name: 'Gin',
    category: 'backend',
    subcategory: 'Web框架',
    description: 'Go 语言编写的 HTTP Web 框架，性能优秀',
    tagline: 'Go 最快的全功能 Web 框架',
    version: '1.9.1',
    pros: ['性能优秀', '内存占用低', '中间件支持', '错误恢复', '验证和绑定'],
    cons: ['功能相对简单', '缺乏内置 ORM', '企业级特性需自行实现'],
    bestFor: ['高性能 API', '微服务', '轻量服务', '高并发应用'],
    notFor: ['复杂业务逻辑', '需要完整 ORM'],
    learningCurve: 'beginner',
    ecosystemScore: 78,
    popularity: { githubStars: 78000 },
    companyUsers: ['Uber', 'Netflix', 'Alibaba', 'Riot Games'],
    createdYear: 2014,
    maintainedBy: 'Gin Team',
    officialUrl: 'https://gin-gonic.com',
    githubUrl: 'https://github.com/gin-gonic/gin',
    documentationUrl: 'https://gin-gonic.com/docs',
    alternatives: ['echo', 'fiber', 'go-zero'],
    scores: {
      popularity: 85, maintenance: 82, ecosystem: 78, learningCurve: 88, enterpriseAdoption: 75,
      total: 82, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: ginDeepDive
  },

  'go-zero': {
    id: 'go-zero',
    name: 'Go-Zero',
    category: 'backend',
    subcategory: '微服务框架',
    description: 'Go 语言的微服务框架，提供完整的微服务解决方案',
    tagline: '云原生 Go 微服务框架',
    version: '1.6.0',
    pros: ['微服务完整方案', '代码生成', '高性能', '服务治理', '中文文档优秀'],
    cons: ['生态相对较新', '学习曲线存在', '企业采用率增长中'],
    bestFor: ['微服务架构', '高并发系统', '云原生应用', '快速开发'],
    notFor: ['单体应用', '小型项目'],
    learningCurve: 'intermediate',
    ecosystemScore: 65,
    popularity: { githubStars: 28000 },
    companyUsers: ['Tencent', 'Bilibili', 'Xiaohongshu'],
    createdYear: 2020,
    maintainedBy: 'Kevin Wan (tal-tech)',
    officialUrl: 'https://go-zero.dev',
    githubUrl: 'https://github.com/zeromicro/go-zero',
    documentationUrl: 'https://go-zero.dev',
    alternatives: ['gin', 'go-micro', 'kratos'],
    scores: {
      popularity: 72, maintenance: 80, ecosystem: 65, learningCurve: 75, enterpriseAdoption: 70,
      total: 73, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: goZeroDeepDive
  },

  'spring-boot': {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'backend',
    subcategory: 'Web框架',
    description: '基于 Spring 的 Java 框架，简化 Spring 应用初始搭建和开发过程',
    tagline: '约定优于配置的 Java 框架',
    version: '3.2.0',
    pros: ['企业级生态', '自动配置', '监控完善', '安全性强', '社区成熟'],
    cons: ['启动较慢', '内存占用高', '配置复杂', '学习曲线陡峭'],
    bestFor: ['企业级应用', '微服务架构', '传统单体应用', '银行金融'],
    notFor: ['Serverless', '快速启动场景'],
    learningCurve: 'advanced',
    ecosystemScore: 95,
    popularity: { githubStars: 74000 },
    companyUsers: ['Netflix', 'Amazon', 'Google', 'Alibaba', 'Huawei'],
    createdYear: 2014,
    maintainedBy: 'VMware (Pivotal)',
    officialUrl: 'https://spring.io/projects/spring-boot',
    githubUrl: 'https://github.com/spring-projects/spring-boot',
    documentationUrl: 'https://docs.spring.io/spring-boot',
    alternatives: ['quarkus', 'micronaut', 'jakarta-ee'],
    scores: {
      popularity: 92, maintenance: 90, ecosystem: 95, learningCurve: 65, enterpriseAdoption: 95,
      total: 89, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: springBootDeepDive
  },

  quarkus: {
    id: 'quarkus',
    name: 'Quarkus',
    category: 'backend',
    subcategory: 'Web框架',
    description: '为 Kubernetes 和 Serverless 优化的 Java 框架',
    tagline: '为云原生而生的 Java',
    version: '3.7.0',
    pros: ['快速启动', '低内存', 'GraalVM 支持', '开发模式', '云原生'],
    cons: ['生态较新', '学习资源较少', '企业采用率较低'],
    bestFor: ['Serverless', 'Kubernetes', '微服务', '云原生'],
    notFor: ['传统企业应用', '需要成熟生态'],
    learningCurve: 'intermediate',
    ecosystemScore: 65,
    popularity: { githubStars: 13000 },
    companyUsers: ['Red Hat', 'Deutsche Telekom'],
    createdYear: 2019,
    maintainedBy: 'Red Hat',
    officialUrl: 'https://quarkus.io',
    githubUrl: 'https://github.com/quarkusio/quarkus',
    documentationUrl: 'https://quarkus.io/guides',
    alternatives: ['spring-boot', 'micronaut', 'helidon'],
    scores: {
      popularity: 68, maintenance: 85, ecosystem: 65, learningCurve: 72, enterpriseAdoption: 60,
      total: 71, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: quarkusDeepDive
  },

  // ===== Java Core Technologies =====
  'mybatis-plus': {
    id: 'mybatis-plus',
    name: 'MyBatis-Plus',
    category: 'backend',
    subcategory: 'ORM',
    description: 'MyBatis 的增强工具，简化 CRUD 操作',
    tagline: '为简化开发而生',
    version: '3.5.5',
    pros: ['零配置 CRUD', '代码生成器', '分页插件', '性能优秀', '中文文档'],
    cons: ['依赖 MyBatis', '复杂查询仍需 SQL', 'Spring 生态绑定'],
    bestFor: ['快速开发', '标准 CRUD 应用', 'Spring Boot 项目'],
    notFor: ['非 Spring 项目', '复杂报表查询'],
    learningCurve: 'intermediate',
    ecosystemScore: 80,
    popularity: { githubStars: 16000 },
    companyUsers: ['阿里巴巴', '美团', '京东', '小米'],
    createdYear: 2016,
    maintainedBy: 'Baomidou',
    officialUrl: 'https://baomidou.com',
    githubUrl: 'https://github.com/baomidou/mybatis-plus',
    documentationUrl: 'https://baomidou.com/pages/24112f',
    alternatives: ['mybatis', 'hibernate', 'spring-data-jpa'],
    scores: {
      popularity: 82, maintenance: 88, ecosystem: 80, learningCurve: 85, enterpriseAdoption: 85,
      total: 85, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '通用 CRUD', description: '内置 BaseMapper 提供常用 CRUD 方法，无需手写 SQL。' },
        { title: '条件构造器', description: 'Wrapper 链式 API 构建复杂查询条件。' },
        { title: '代码生成', description: '根据数据库表自动生成 Entity、Mapper、Service、Controller。' }
      ],
      [
        { type: 'official', title: 'MyBatis-Plus 文档', url: 'https://baomidou.com', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 Lambda 查询避免硬编码', '合理使用分页插件', '结合代码生成器提高效率'] }
      ],
      [
        { techId: 'mybatis', techName: 'MyBatis', strengths: ['更灵活', '原生 SQL 控制'], weaknesses: ['需要手写 SQL', '开发效率较低'], whenToChoose: '需要精细 SQL 控制' }
      ],
      [
        { scenario: 'Spring Boot 后端', description: '快速开发 Java 后端服务', recommended: true },
        { scenario: '管理后台系统', description: '大量 CRUD 操作的后台', recommended: true }
      ]
    )
  },

  'spring-security': {
    id: 'spring-security',
    name: 'Spring Security',
    category: 'backend',
    subcategory: '安全框架',
    description: '强大的 Spring 安全框架，提供认证和授权功能',
    tagline: '保护 Spring 应用的标准',
    version: '6.2.1',
    pros: ['功能全面', '高度可定制', 'OAuth2 支持', '与 Spring 集成', '企业级安全'],
    cons: ['配置复杂', '学习曲线陡峭', '概念较多', '文档分散'],
    bestFor: ['企业级应用', '需要复杂权限控制', 'OAuth2/OIDC', '微服务安全'],
    notFor: ['简单应用', '快速原型'],
    learningCurve: 'advanced',
    ecosystemScore: 92,
    popularity: { githubStars: 8500 },
    companyUsers: ['阿里巴巴', '腾讯', '京东', '各大银行'],
    createdYear: 2003,
    maintainedBy: 'Spring Team',
    officialUrl: 'https://spring.io/projects/spring-security',
    githubUrl: 'https://github.com/spring-projects/spring-security',
    documentationUrl: 'https://docs.spring.io/spring-security/reference',
    alternatives: ['apache-shiro', 'sa-token', 'jwt'],
    scores: {
      popularity: 88, maintenance: 90, ecosystem: 92, learningCurve: 70, enterpriseAdoption: 95,
      total: 88, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '认证与授权', description: '提供完整的认证和授权机制，支持多种认证方式。' },
        { title: '过滤器链', description: '基于过滤器的安全处理链，可高度定制。' },
        { title: '方法级安全', description: '支持注解控制方法级别的权限。' }
      ],
      [
        { type: 'official', title: 'Spring Security 文档', url: 'https://docs.spring.io/spring-security/reference', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 SecurityFilterChain 配置', '自定义 UserDetailsService', '合理使用 @PreAuthorize'] }
      ],
      [
        { techId: 'apache-shiro', techName: 'Apache Shiro', strengths: ['更简单', '独立使用'], weaknesses: ['功能较少', '更新较慢'], whenToChoose: '非 Spring 项目或简单安全需求' }
      ],
      [
        { scenario: '企业级应用安全', description: '复杂的权限控制需求', recommended: true },
        { scenario: 'OAuth2 集成', description: '第三方登录和授权', recommended: true }
      ]
    )
  },

  // ===== Rust Core Technologies =====
  seaorm: {
    id: 'seaorm',
    name: 'SeaORM',
    category: 'backend',
    subcategory: 'ORM',
    description: 'Rust 的异步 ORM，专为现代 Rust 设计',
    tagline: 'Rust 的异步 ORM 框架',
    version: '0.12.0',
    pros: ['完全异步', '类型安全', '代码生成', '多数据库支持', '活跃维护'],
    cons: ['生态相对较小', '编译时间较长', '学习曲线存在', '企业采用率低'],
    bestFor: ['Rust 异步应用', '需要类型安全', '现代 Rust 项目'],
    notFor: ['简单脚本', '快速原型', '团队无 Rust 经验'],
    learningCurve: 'advanced',
    ecosystemScore: 65,
    popularity: { githubStars: 6000 },
    companyUsers: ['Starfish Finance', 'Rust 开源项目'],
    createdYear: 2021,
    maintainedBy: 'SeaQL Team',
    officialUrl: 'https://www.sea-ql.org/SeaORM',
    githubUrl: 'https://github.com/SeaQL/sea-orm',
    documentationUrl: 'https://www.sea-ql.org/SeaORM/docs',
    alternatives: ['diesel', 'sqlx', 'tokio-postgres'],
    scores: {
      popularity: 70, maintenance: 88, ecosystem: 65, learningCurve: 65, enterpriseAdoption: 50,
      total: 72, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '异步优先', description: '基于 async/await 设计，完美集成 Tokio 运行时。' },
        { title: '实体生成', description: '从数据库模式自动生成 Rust 实体代码。' },
        { title: '关系映射', description: '支持一对一、一对多、多对多关系。' }
      ],
      [
        { type: 'official', title: 'SeaORM 文档', url: 'https://www.sea-ql.org/SeaORM/docs', description: '官方文档' }
      ],
      [
        { category: '最佳实践', items: ['使用 sea-orm-cli 生成实体', '合理使用连接池', '配合迁移工具使用'] }
      ],
      [
        { techId: 'diesel', techName: 'Diesel', strengths: ['编译时查询检查', '同步设计', '更成熟'], weaknesses: ['不支持异步', '学习曲线陡峭'], whenToChoose: '同步 Rust 应用' }
      ],
      [
        { scenario: 'Rust Web 后端', description: '配合 Axum/Actix-web 使用', recommended: true },
        { scenario: '异步数据处理', description: '需要高性能异步数据库操作', recommended: true }
      ]
    )
  },

  tokio: {
    id: 'tokio',
    name: 'Tokio',
    category: 'backend',
    subcategory: '异步运行时',
    description: 'Rust 的异步运行时，提供 I/O、定时器、多任务等功能',
    tagline: 'Rust 异步编程的基石',
    version: '1.35.0',
    pros: ['高性能异步', '多线程调度', '丰富的生态', '生产验证', '内存安全'],
    cons: ['学习曲线陡峭', '调试困难', '生态分散', '编译时间久'],
    bestFor: ['高性能网络服务', '异步应用', '实时系统', '微服务'],
    notFor: ['简单脚本', 'CPU 密集型任务', '团队无 Rust 经验'],
    learningCurve: 'advanced',
    ecosystemScore: 80,
    popularity: { githubStars: 25000 },
    companyUsers: ['Discord', 'Fly.io', 'AWS (部分服务)'],
    createdYear: 2016,
    maintainedBy: 'Tokio Team',
    officialUrl: 'https://tokio.rs',
    githubUrl: 'https://github.com/tokio-rs/tokio',
    documentationUrl: 'https://docs.rs/tokio',
    alternatives: ['async-std', 'smol', 'may'],
    scores: {
      popularity: 85, maintenance: 92, ecosystem: 80, learningCurve: 60, enterpriseAdoption: 70,
      total: 80, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'active',
    deepDive: createDeepDive(
      [
        { title: '多线程调度', description: '工作窃取调度器，高效利用多核 CPU。' },
        { title: '异步 I/O', description: '基于 epoll/kqueue/IOCP 的高性能异步 I/O。' },
        { title: '超时与间隔', description: '内置定时器功能，支持超时和周期性任务。' }
      ],
      [
        { type: 'official', title: 'Tokio 文档', url: 'https://tokio.rs/tokio/tutorial', description: '官方教程' }
      ],
      [
        { category: '最佳实践', items: ['使用 tokio::spawn 创建任务', '合理使用通道进行通信', '避免阻塞运行时'] }
      ],
      [
        { techId: 'async-std', techName: 'async-std', strengths: ['标准库风格 API', '更简单'], weaknesses: ['生态较小', '企业采用率低'], whenToChoose: '偏好标准库风格的团队' }
      ],
      [
        { scenario: '高性能网络服务', description: '需要处理大量并发连接', recommended: true },
        { scenario: '实时通信', description: 'WebSocket、聊天服务等', recommended: true }
      ]
    )
  },

  // ===== Archived Technologies =====
  axum: {
    id: 'axum',
    name: 'Axum',
    category: 'backend',
    subcategory: 'Web框架',
    description: 'Rust 的异步 Web 框架，基于 Tokio 和 Tower',
    tagline: '符合人体工程学的模块化 Rust Web 框架',
    version: '0.7.0',
    pros: ['Tower 生态集成', '类型安全', '异步性能', '内存安全'],
    cons: ['生态系统较小', 'Rust 学习曲线', '企业采用率低', '社区活跃度下降'],
    bestFor: ['Rust 微服务', '学习 Rust Web'],
    notFor: ['生产环境', '快速开发'],
    learningCurve: 'advanced',
    ecosystemScore: 58,
    popularity: { githubStars: 17000 },
    companyUsers: [],
    createdYear: 2021,
    maintainedBy: 'Tokio Team',
    officialUrl: 'https://docs.rs/axum',
    githubUrl: 'https://github.com/tokio-rs/axum',
    documentationUrl: 'https://docs.rs/axum',
    alternatives: ['actix-web', 'rocket', 'warp'],
    scores: {
      popularity: 65, maintenance: 88, ecosystem: 58, learningCurve: 55, enterpriseAdoption: 45,
      total: 66, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'archived',
    archiveReason: 'low_popularity',
    archiveNote: '目前 Rust Web 开发中，Actix-web 更加成熟且社区活跃，Axum 虽由 Tokio 团队维护但采用率较低。',
    archivedAt: '2025-02-21T00:00:00Z',
    replacedBy: 'actix-web',
    deepDive: axumDeepDive
  },

  'actix-web': {
    id: 'actix-web',
    name: 'Actix-web',
    category: 'backend',
    subcategory: 'Web框架',
    description: 'Rust 的高性能 Web 框架，基于 Actix actor 系统',
    tagline: '极快的 Rust Web 框架',
    version: '4.5.0',
    pros: ['性能极高', '功能丰富', '中间件系统', '历史悠久'],
    cons: ['维护者变动历史', '生态系统较小', 'Rust 学习曲线', '企业采用率低'],
    bestFor: ['极致性能', '学习 Rust Web'],
    notFor: ['生产环境', '快速开发', '团队规模较大'],
    learningCurve: 'advanced',
    ecosystemScore: 55,
    popularity: { githubStars: 21000 },
    companyUsers: ['Brave', 'Microsoft (部分项目)'],
    createdYear: 2017,
    maintainedBy: 'Actix Team',
    officialUrl: 'https://actix.rs',
    githubUrl: 'https://github.com/actix/actix-web',
    documentationUrl: 'https://actix.rs/docs',
    alternatives: ['axum', 'rocket', 'warp'],
    scores: {
      popularity: 62, maintenance: 82, ecosystem: 55, learningCurve: 58, enterpriseAdoption: 40,
      total: 63, lastCalculated: '2025-02-15T10:00:00Z'
    },
    status: 'archived',
    archiveReason: 'low_popularity',
    archiveNote: 'Rust Web 框架目前主流采用率都较低，更适合特定性能场景。整体 Rust Web 开发生态尚不成熟。',
    archivedAt: '2025-02-21T00:00:00Z',
    deepDive: axumDeepDive
  },

  // ===== LLM算法 Technologies =====
  ...llmAlgorithmData,

  // ===== LLM应用 Technologies =====
  ...llmApplicationData,
}

// ============================================
// 数据访问函数
// ============================================

/** 获取所有技术 */
export function getAllTech(): TechDetail[] {
  return Object.values(techDatabase)
}

/** 根据 ID 获取技术详情 */
export function getTechById(id: string): TechDetail | undefined {
  return techDatabase[id]
}

/** 获取所有活跃技术（非归档） */
export function getActiveTech(): TechDetail[] {
  return Object.values(techDatabase).filter(tech => tech.status === 'active')
}

/** 获取所有归档技术 */
export function getArchivedTech(): TechDetail[] {
  return Object.values(techDatabase).filter(tech => tech.status === 'archived')
}

/** 根据分类获取技术 */
export function getTechByCategory(category: TechDetail['category']): TechDetail[] {
  return Object.values(techDatabase).filter(tech => 
    tech.category === category && tech.status === 'active'
  )
}

/** 根据子分类获取技术 */
export function getTechBySubcategory(subcategory: string): TechDetail[] {
  return Object.values(techDatabase).filter(tech => 
    tech.subcategory === subcategory && tech.status === 'active'
  )
}

/** 搜索技术 */
export function searchTech(query: string): TechDetail[] {
  const lowerQuery = query.toLowerCase()
  return Object.values(techDatabase).filter(tech => 
    tech.name.toLowerCase().includes(lowerQuery) ||
    tech.description.toLowerCase().includes(lowerQuery) ||
    tech.subcategory.toLowerCase().includes(lowerQuery)
  )
}

/** 获取分类列表 */
export function getCategories(): string[] {
  return [...new Set(Object.values(techDatabase).map(tech => tech.category))]
}

/** 获取子分类列表 */
export function getSubcategories(): string[] {
  return [...new Set(Object.values(techDatabase).map(tech => tech.subcategory))]
}

/** 按评分排序获取技术 */
export function getTechByScore(sortBy: 'popularity' | 'maintenance' | 'ecosystem' | 'learningCurve' | 'enterpriseAdoption' | 'total' = 'total', limit?: number): TechDetail[] {
  const sorted = Object.values(techDatabase)
    .filter(tech => tech.status === 'active')
    .sort((a, b) => (b.scores[sortBy] as number) - (a.scores[sortBy] as number))
  
  return limit ? sorted.slice(0, limit) : sorted
}

/** 获取推荐技术（评分前 N） */
export function getRecommendedTech(limit: number = 6): TechDetail[] {
  return getTechByScore('total', limit)
}

/** 获取归档原因文本 */
export function getArchiveReasonText(reason: ArchiveReason): string {
  const reasonMap: Record<ArchiveReason, string> = {
    low_popularity: '流行度较低',
    deprecated: '已停止维护',
    replaced: '被更好的技术替代',
    niche_use_case: '仅适用于特定场景'
  }
  return reasonMap[reason] || '其他原因'
}

// 默认导出
export default techDatabase
