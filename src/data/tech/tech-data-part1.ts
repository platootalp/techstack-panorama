// Tech Stack Data - Part 1: Frontend & Node.js
export interface TechItem {
  category: string
  tech: string
  popular: string
  description: string
}

export const frontendData: TechItem[] = [
  { category: '框架', tech: 'React / Vue 3 / Angular / Svelte / Solid.js', popular: 'React 18 / Vue 3', description: '构建用户界面的核心框架' },
  { category: '元框架', tech: 'Next.js / Nuxt.js / SvelteKit / Remix / Astro / Fresh', popular: 'Next.js 15', description: '提供SSR/SSG/ISR等全栈能力' },
  { category: '语言', tech: 'TypeScript / JavaScript / ReScript / PureScript', popular: 'TypeScript 5.x', description: '类型安全的开发体验' },
  { category: '样式方案', tech: 'Tailwind CSS / CSS-in-JS (Emotion/styled) / SCSS / CSS Modules / UnoCSS', popular: 'Tailwind CSS', description: '原子化CSS成为主流趋势' },
  { category: '状态管理', tech: 'Zustand / Pinia / Jotai / Recoil / Redux Toolkit / MobX / XState', popular: 'Zustand / Pinia', description: '轻量化与原子化状态管理' },
  { category: '构建工具', tech: 'Vite / Turbopack / Webpack / Rollup / esbuild / Rspack', popular: 'Vite / Turbopack', description: '极速开发与构建体验' },
  { category: 'UI组件库', tech: 'shadcn/ui / Radix UI / Ant Design / MUI / Chakra UI / Arco Design', popular: 'shadcn/ui', description: '无样式/可定制组件受青睐' },
  { category: '测试工具', tech: 'Vitest / Jest / Playwright / Cypress / Testing Library / Storybook', popular: 'Vitest + Playwright', description: '单元测试+E2E测试组合' },
  { category: '代码格式化', tech: 'Prettier / Biome / dprint', popular: 'Prettier / Biome', description: '统一代码风格，Biome更快' },
  { category: '代码检查', tech: 'ESLint / Biome / Oxlint / Stylelint / Markdownlint', popular: 'ESLint + Biome', description: '代码质量与规范检查' },
  { category: 'Git工具', tech: 'Husky / lint-staged / Commitlint / Git Hooks / Semantic Release', popular: 'Husky + lint-staged', description: 'Git工作流自动化' },
  { category: '包管理器', tech: 'pnpm / Bun / yarn / npm', popular: 'pnpm / Bun', description: '高效依赖管理' },
  { category: '性能优化', tech: 'Lighthouse / Web Vitals / Bundle Analyzer / React Profiler / Lazy Loading', popular: 'Web Vitals', description: '性能监控与优化指标' },
  { category: '可视化', tech: 'ECharts / D3.js / Three.js / Recharts / Vis.js / Chart.js', popular: 'ECharts / D3.js', description: '数据可视化图表库' },
  { category: '表单处理', tech: 'React Hook Form / Formik / Zod / Yup / VeeValidate', popular: 'React Hook Form + Zod', description: '表单验证与状态管理' },
  { category: '动画库', tech: 'Framer Motion / GSAP / Lottie / React Spring / Motion One', popular: 'Framer Motion', description: '流畅的UI动画效果' },
  { category: '数据请求', tech: 'TanStack Query / SWR / Axios / ky / tRPC / React Router', popular: 'TanStack Query', description: '服务端状态管理' },
  { category: '桌面/移动端', tech: 'Electron / Tauri / React Native / Flutter / Capacitor', popular: 'Tauri / React Native', description: '跨平台应用开发' },
  { category: '国际化', tech: 'next-intl / i18next / FormatJS / vue-i18n', popular: 'next-intl', description: '多语言支持方案' },
  { category: '无障碍', tech: 'Radix UI / Reach UI / ARIA / axe-core', popular: 'Radix UI + axe', description: '符合WCAG标准的组件' },
]

export const nodejsData: TechItem[] = [
  { category: 'Web框架', tech: 'NestJS / Express / Fastify / Hono / Koa / Elysia / Nest / Strapi', popular: 'NestJS / Hono', description: '企业级与轻量级并存' },
  { category: 'ORM/数据库', tech: 'Prisma / Drizzle ORM / TypeORM / MikroORM / Mongoose / Sequelize / Kysely', popular: 'Prisma / Drizzle', description: '类型安全的数据库操作' },
  { category: '验证', tech: 'Zod / class-validator / Joi / Yup / TypeBox / Valibot / Ajv', popular: 'Zod', description: '运行时类型验证' },
  { category: '认证授权', tech: 'NextAuth.js / Passport.js / Jose / Lucia / Clerk / Auth.js / Auth0 / SuperTokens', popular: 'NextAuth / Clerk', description: '身份认证解决方案' },
  { category: '实时通信', tech: 'Socket.io / ws / uWebSockets.js / Pusher / Ably / PartyKit', popular: 'Socket.io / PartyKit', description: 'WebSocket实时通信' },
  { category: '任务队列', tech: 'BullMQ / Agenda / Bee-Queue / Graphile Worker / Temporal', popular: 'BullMQ / Temporal', description: '后台任务与工作流' },
  { category: '缓存', tech: 'Redis / Keyv / cache-manager / node-cache', popular: 'Redis', description: '数据缓存方案' },
  { category: '文件存储', tech: 'AWS S3 SDK / MinIO / Uploadthing / Uppy / formidable / Multer', popular: 'AWS S3 / Uploadthing', description: '文件上传与存储' },
  { category: '邮件服务', tech: 'Nodemailer / Resend / SendGrid / Postmark / React Email', popular: 'Resend / Nodemailer', description: '邮件发送服务' },
  { category: '日志', tech: 'Pino / Winston / Bunyan / log4js / Datadog Logs', popular: 'Pino', description: '高性能日志记录' },
  { category: '测试', tech: 'Jest / Vitest / Supertest / Node-tap / TestContainers', popular: 'Vitest', description: '单元与集成测试' },
  { category: '文档生成', tech: 'Swagger / OpenAPI / TypeDoc / Tsoa / NestJS Swagger', popular: 'Swagger / OpenAPI', description: 'API文档自动生成' },
  { category: '安全', tech: 'Helmet / cors / bcrypt / argon2 / jsonwebtoken / rate-limiter-flexible', popular: 'Helmet + bcrypt', description: 'Web安全防护' },
  { category: 'CLI工具', tech: 'Commander / Yargs / Inquirer / Oclif / Citty', popular: 'Commander / Inquirer', description: '命令行工具开发' },
  { category: '进程管理', tech: 'PM2 / Docker / Systemd / Nginx / Caddy', popular: 'PM2 / Docker', description: '进程守护与部署' },
]
