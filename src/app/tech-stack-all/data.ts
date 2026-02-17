// 技术栈数据 - 从 page.tsx 分离出来，减少组件渲染负担
// 这些数据是静态的，不需要在每次渲染时重新创建

export interface TechItem {
  category: string
  tech: string
  popular: string
  description: string
}

// 简化的数据 - 前端
export const frontendData: TechItem[] = [
  { category: '框架', tech: 'React / Vue 3 / Angular / Svelte / Solid.js', popular: 'React 18 / Vue 3', description: '构建用户界面的核心框架' },
  { category: '元框架', tech: 'Next.js / Nuxt.js / SvelteKit / Remix / Astro / Fresh', popular: 'Next.js 15', description: '提供SSR/SSG/ISR等全栈能力' },
  { category: '语言', tech: 'TypeScript / JavaScript / ReScript / PureScript', popular: 'TypeScript 5.x', description: '类型安全的开发体验' },
  { category: '样式方案', tech: 'Tailwind CSS / CSS-in-JS / SCSS / CSS Modules / UnoCSS', popular: 'Tailwind CSS', description: '原子化CSS成为主流趋势' },
  { category: '状态管理', tech: 'Zustand / Pinia / Jotai / Redux Toolkit / MobX', popular: 'Zustand / Pinia', description: '轻量化与原子化状态管理' },
  { category: '构建工具', tech: 'Vite / Turbopack / Webpack / esbuild / Rspack', popular: 'Vite / Turbopack', description: '极速开发与构建体验' },
  { category: 'UI组件库', tech: 'shadcn/ui / Radix UI / Ant Design / MUI / Chakra UI', popular: 'shadcn/ui', description: '无样式/可定制组件受青睐' },
  { category: '测试工具', tech: 'Vitest / Jest / Playwright / Cypress / Testing Library', popular: 'Vitest + Playwright', description: '单元测试+E2E测试组合' },
]

// 后端 - Node.js
export const nodejsData: TechItem[] = [
  { category: 'Web框架', tech: 'NestJS / Express / Fastify / Hono / Koa / Elysia', popular: 'NestJS / Hono', description: '企业级与轻量级并存' },
  { category: 'ORM', tech: 'Prisma / Drizzle ORM / TypeORM / Mongoose / Sequelize', popular: 'Prisma / Drizzle', description: '类型安全的数据库操作' },
  { category: '验证', tech: 'Zod / Joi / Yup / TypeBox / Valibot', popular: 'Zod', description: '运行时类型验证' },
  { category: '认证授权', tech: 'NextAuth.js / Passport.js / Clerk / Auth.js / Lucia', popular: 'NextAuth / Clerk', description: '身份认证解决方案' },
  { category: '实时通信', tech: 'Socket.io / ws / Pusher / Ably / PartyKit', popular: 'Socket.io', description: 'WebSocket实时通信' },
  { category: '任务队列', tech: 'BullMQ / Agenda / Bee-Queue / Temporal', popular: 'BullMQ', description: '后台任务与工作流' },
]

// 后端 - Python
export const pythonData: TechItem[] = [
  { category: 'Web框架', tech: 'FastAPI / Django / Flask / Starlette / Sanic', popular: 'FastAPI', description: '异步高性能API开发' },
  { category: 'ORM', tech: 'SQLAlchemy / Django ORM / Tortoise ORM / Peewee', popular: 'SQLAlchemy', description: '强大的ORM框架' },
  { category: '验证', tech: 'Pydantic / Marshmallow / Cerberus / attrs', popular: 'Pydantic', description: '数据验证与序列化' },
  { category: '认证授权', tech: 'FastAPI Users / Django Auth / Authlib / PyJWT', popular: 'FastAPI Users', description: '身份认证方案' },
  { category: '异步', tech: 'asyncio / uvicorn / gunicorn / hypercorn', popular: 'uvicorn + uvloop', description: '异步运行时服务器' },
  { category: '任务队列', tech: 'Celery / Dramatiq / RQ / Huey / Taskiq', popular: 'Celery', description: '分布式任务队列' },
]

// 后端 - Go
export const goData: TechItem[] = [
  { category: 'Web框架', tech: 'Gin / Echo / Fiber / Chi / Go-Zero / Kratos', popular: 'Gin / Go-Zero', description: '高性能微服务框架' },
  { category: 'ORM', tech: 'GORM / Ent / sqlx / Bun / sqlc', popular: 'GORM / Ent', description: 'Go数据库操作' },
  { category: '验证', tech: 'validator / go-playground/validator', popular: 'go-playground/validator', description: '结构体验证' },
  { category: '认证授权', tech: 'golang-jwt / go-oauth2 / casbin / goth', popular: 'golang-jwt + casbin', description: 'JWT与权限控制' },
  { category: '微服务', tech: 'gRPC / Go-Micro / Kit / Kratos / Dubbo-go', popular: 'gRPC / Go-Zero', description: '微服务通信协议' },
  { category: '并发', tech: 'Goroutine / Channel / errgroup / ants', popular: 'Goroutine + Channel', description: '原生并发支持' },
]

// 后端 - Java
export const javaData: TechItem[] = [
  { category: 'Web框架', tech: 'Spring Boot / Quarkus / Micronaut / Vert.x', popular: 'Spring Boot 3', description: '企业级应用首选' },
  { category: 'ORM', tech: 'Spring Data JPA / MyBatis / MyBatis-Plus / JOOQ', popular: 'MyBatis-Plus / JPA', description: '数据库持久层' },
  { category: '验证', tech: 'Hibernate Validator / Spring Validation', popular: 'Spring Validation', description: '数据验证框架' },
  { category: '认证授权', tech: 'Spring Security / Apache Shiro / JWT / OAuth2', popular: 'Spring Security', description: '企业级安全框架' },
  { category: '微服务', tech: 'Spring Cloud / Dubbo / gRPC-Java / Istio', popular: 'Spring Cloud', description: '微服务架构支持' },
  { category: '构建工具', tech: 'Maven / Gradle / Bazel', popular: 'Gradle', description: '项目构建与依赖管理' },
]

// 后端 - Rust
export const rustData: TechItem[] = [
  { category: 'Web框架', tech: 'Axum / Actix-web / Rocket / Warp / Poem / Salvo', popular: 'Axum', description: '高性能异步Web框架' },
  { category: 'ORM', tech: 'Diesel / SeaORM / SQLx', popular: 'SeaORM / SQLx', description: '类型安全的数据库操作' },
  { category: '验证', tech: 'validator / garde / schemars', popular: 'validator / garde', description: '数据验证库' },
  { category: '认证授权', tech: 'jsonwebtoken / oxide-auth / casbin-rs', popular: 'jsonwebtoken', description: 'JWT与OAuth实现' },
  { category: '异步运行时', tech: 'Tokio / async-std / smol', popular: 'Tokio', description: 'Rust异步运行时' },
  { category: '序列化', tech: 'Serde / serde_json / bincode', popular: 'Serde', description: '数据序列化框架' },
]

// 基础设施
export const infrastructureData: TechItem[] = [
  { category: '关系型数据库', tech: 'PostgreSQL / MySQL / MariaDB / SQLite / TiDB', popular: 'PostgreSQL', description: '关系型数据库选择' },
  { category: 'NoSQL数据库', tech: 'MongoDB / DynamoDB / Cassandra / Couchbase', popular: 'MongoDB / DynamoDB', description: '文档/列式数据库' },
  { category: '缓存', tech: 'Redis / Memcached / Dragonfly / KeyDB', popular: 'Redis / Dragonfly', description: '高性能缓存方案' },
  { category: '消息队列', tech: 'Kafka / RabbitMQ / Redis Streams / NATS / Pulsar', popular: 'Kafka / NATS', description: '异步消息处理' },
  { category: '搜索引擎', tech: 'Elasticsearch / Meilisearch / Typesense / Algolia', popular: 'Elasticsearch', description: '全文搜索服务' },
  { category: '容器编排', tech: 'Docker / Kubernetes / Docker Compose / Podman', popular: 'Docker + K8s', description: '云原生部署标配' },
]

// AI 核心
export const aiCoreData: TechItem[] = [
  { category: '深度学习框架', tech: 'PyTorch / TensorFlow / JAX / PaddlePaddle', popular: 'PyTorch 2.x', description: '研究与应用的主流选择' },
  { category: '大语言模型', tech: 'GPT-4o / Claude 3.5 / Gemini / Llama 3 / Qwen', popular: 'GPT-4o / Claude 3.5', description: '闭源与开源模型并存' },
  { category: '多模态模型', tech: 'GPT-4V / Gemini / Claude Vision / LLaVA / Qwen-VL', popular: 'GPT-4V / Gemini', description: '图像+文本理解' },
  { category: '图像生成', tech: 'Stable Diffusion / DALL-E 3 / Midjourney / FLUX', popular: 'SDXL / FLUX', description: '文生图模型' },
  { category: '语音识别', tech: 'Whisper / Google Speech / Azure Speech', popular: 'Whisper', description: 'ASR语音转文字' },
  { category: '代码模型', tech: 'GitHub Copilot / CodeLlama / DeepSeek Coder', popular: 'Copilot / DeepSeek', description: '代码生成模型' },
]

// AI LLM应用
export const aiLLMData: TechItem[] = [
  { category: 'LLM SDK', tech: 'OpenAI SDK / Anthropic SDK / Google AI SDK / LangChain', popular: '官方SDK', description: '直接调用更简洁高效' },
  { category: 'RAG框架', tech: 'LlamaIndex / LangChain / Haystack / DSPy', popular: 'LlamaIndex / DSPy', description: '检索增强生成' },
  { category: 'Agent框架', tech: 'LangGraph / CrewAI / AutoGen / Dify / MemGPT', popular: 'LangGraph / Dify', description: '多智能体协作开发' },
  { category: 'Prompt管理', tech: 'Promptflow / LangSmith / Weights & Biases', popular: 'LangSmith', description: 'Prompt版本管理' },
  { category: '记忆管理', tech: 'Mem0 / Letta / LangMem / MemGPT', popular: 'Mem0', description: 'LLM长期记忆' },
  { category: '模型路由', tech: 'LiteLLM / OpenRouter / Together AI', popular: 'LiteLLM', description: '统一模型调用网关' },
]

// AI 基础设施
export const aiInfraData: TechItem[] = [
  { category: '向量数据库', tech: 'Pinecone / Milvus / Weaviate / Qdrant / Chroma', popular: 'Milvus / Qdrant', description: '向量存储与检索' },
  { category: '模型部署', tech: 'vLLM / TensorRT-LLM / TGI / Ollama / llama.cpp', popular: 'vLLM / Ollama', description: '高效推理服务' },
  { category: '推理优化', tech: 'Flash Attention / PagedAttention / KV Cache优化', popular: 'Flash Attention', description: '推理速度优化' },
  { category: '模型量化', tech: 'GPTQ / AWQ / GGUF / bitsandbytes', popular: 'AWQ / GGUF', description: '模型压缩与加速' },
  { category: 'Embedding模型', tech: 'OpenAI Embedding / BGE / Cohere / Voyage', popular: 'text-embedding-3', description: '文本向量化模型' },
  { category: 'GPU云服务', tech: 'AWS / GCP / Azure / Lambda Labs / Modal', popular: 'AWS / Modal', description: 'GPU计算资源' },
]

// AI 训练
export const aiTrainData: TechItem[] = [
  { category: '模型微调', tech: 'LoRA / QLoRA / PEFT / DPO / PPO / SFT', popular: 'LoRA / QLoRA', description: '参数高效微调' },
  { category: '训练框架', tech: 'PyTorch FSDP / DeepSpeed / Megatron-LM', popular: 'DeepSpeed / FSDP', description: '分布式训练框架' },
  { category: '数据处理', tech: 'Hugging Face Datasets / Pandas / Polars', popular: 'HF Datasets', description: '训练数据准备与标注' },
  { category: '分布式训练', tech: 'CUDA / NCCL / torchrun / DeepSpeed ZeRO', popular: 'FSDP + DeepSpeed', description: '多GPU/多节点训练' },
  { category: '强化学习', tech: 'RLHF / PPO / DPO / KTO / ORPO', popular: 'DPO / PPO', description: '人类反馈强化学习' },
  { category: '模型合并', tech: 'Mergekit / TIES / DARE / SLERP', popular: 'Mergekit', description: '多模型合并技术' },
]

// AI 评估
export const aiEvalData: TechItem[] = [
  { category: '模型评估', tech: 'lm-eval-harness / OpenAI Evals / Ragas', popular: 'lm-eval + Ragas', description: '模型能力评测' },
  { category: '基准测试', tech: 'MMLU / HumanEval / GSM8K / MT-Bench', popular: 'MMLU / MT-Bench', description: '标准化能力测试' },
  { category: '安全评估', tech: 'LLM Guard / Garak / Red Team Testing', popular: 'LLM Guard', description: '安全性与合规评估' },
  { category: '质量监控', tech: 'LangSmith / Arize / Phoenix / W&B', popular: 'LangSmith / Arize', description: 'LLM应用监控' },
  { category: '幻觉检测', tech: 'HaluEval / FactScore / SelfCheckGPT', popular: 'FactScore', description: '模型幻觉评估' },
]

// AI 工具
export const aiToolsData: TechItem[] = [
  { category: '开发平台', tech: 'Hugging Face / Gradio / Streamlit / Chainlit', popular: 'Hugging Face', description: '模型托管与快速原型' },
  { category: 'AI编程工具', tech: 'Cursor / GitHub Copilot / Claude Code / Windsurf', popular: 'Cursor + Claude', description: 'AI辅助开发新范式' },
  { category: 'Notebook', tech: 'Jupyter / Google Colab / Kaggle / Marimo', popular: 'Jupyter / Colab', description: '交互式开发环境' },
  { category: '实验管理', tech: 'MLflow / Weights & Biases / Neptune', popular: 'W&B / MLflow', description: '实验追踪与版本管理' },
  { category: '数据标注', tech: 'Label Studio / Doccano / Prodigy / CVAT', popular: 'Label Studio', description: '数据标注平台' },
  { category: '模型转换', tech: 'ONNX / TensorRT / OpenVINO / CoreML', popular: 'ONNX / TensorRT', description: '模型格式转换' },
]
