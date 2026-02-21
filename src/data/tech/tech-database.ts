/**
 * TechStack Panorama - 技术档案数据库
 * 
 * 完整的技术栈档案数据，包含深度内容和归档状态
 * 所有评分数据来源于 score-data.ts
 */

import type { TechDetail, TechDeepDive, ArchiveReason } from './types'

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
  }
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
