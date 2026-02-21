export interface TechItem {
  category: string
  tech: string
  popular: string
  description: string
}

export const pythonData: TechItem[] = [
  { category: 'Web框架', tech: 'FastAPI / Django / Flask / Starlette / Sanic / Quart / Tornado / Aiohttp', popular: 'FastAPI', description: '异步高性能API开发' },
  { category: 'ORM', tech: 'SQLAlchemy / Django ORM / Tortoise ORM / Prisma Python / Peewee / Pony ORM', popular: 'SQLAlchemy', description: '强大的ORM框架' },
  { category: '验证', tech: 'Pydantic / Marshmallow / Cerberus / attrs / Dataclasses', popular: 'Pydantic', description: '数据验证与序列化' },
  { category: '认证授权', tech: 'FastAPI Users / Django Auth / Authlib / PyJWT / Passlib / python-oauth2', popular: 'FastAPI Users / Authlib', description: '身份认证方案' },
  { category: '异步', tech: 'asyncio / uvicorn / gunicorn / hypercorn / uvloop', popular: 'uvicorn + uvloop', description: '异步运行时服务器' },
  { category: '任务队列', tech: 'Celery / Dramatiq / RQ (Redis Queue) / Huey / Taskiq', popular: 'Celery', description: '分布式任务队列' },
  { category: '爬虫', tech: 'Scrapy / httpx / BeautifulSoup / Playwright Python / Selenium / Parsel', popular: 'Scrapy / httpx', description: '数据采集与爬虫' },
  { category: '数据处理', tech: 'Pandas / NumPy / Polars / Vaex / DuckDB', popular: 'Pandas / Polars', description: '数据分析与处理' },
  { category: '缓存', tech: 'Redis-py / aiocache / cachetools / Memcached', popular: 'Redis-py / aiocache', description: '缓存客户端' },
  { category: '邮件服务', tech: 'FastAPI Mail / Django Mail / SendGrid Python / yagmail', popular: 'FastAPI Mail', description: '邮件发送' },
  { category: '日志', tech: 'structlog / Loguru / logging / ELK Stack', popular: 'structlog / Loguru', description: '结构化日志' },
  { category: '测试', tech: 'pytest / unittest / hypothesis / locust / factory_boy / faker', popular: 'pytest', description: 'Python测试生态' },
  { category: '文档生成', tech: 'FastAPI Swagger / MkDocs / Sphinx / Redoc', popular: 'FastAPI Swagger', description: '自动API文档' },
  { category: 'CLI工具', tech: 'Click / Typer / Argparse / Rich / Fire', popular: 'Typer + Rich', description: '命令行工具开发' },
  { category: '部署运行', tech: 'Gunicorn + Uvicorn / Docker / Systemd / Supervisor', popular: 'Gunicorn + Uvicorn', description: '生产环境部署' },
]

export const goData: TechItem[] = [
  { category: 'Web框架', tech: 'Gin / Echo / Fiber / Chi / Go-Zero / Kratos / Hertz / Encore / Buffalo', popular: 'Gin / Go-Zero', description: '高性能微服务框架' },
  { category: 'ORM', tech: 'GORM / Ent / sqlx / Bun / sqlc / goquery', popular: 'GORM / Ent', description: 'Go数据库操作' },
  { category: '验证', tech: 'validator / go-playground/validator / ozzo-validation', popular: 'go-playground/validator', description: '结构体验证' },
  { category: '认证授权', tech: 'golang-jwt / go-oauth2 / casbin / goth / authboss', popular: 'golang-jwt + casbin', description: 'JWT与权限控制' },
  { category: '微服务', tech: 'gRPC / Go-Micro / Kit / Goa / Kratos / Dubbo-go', popular: 'gRPC / Go-Zero', description: '微服务通信协议' },
  { category: '并发', tech: 'Goroutine / Channel / errgroup / sync包 / ants(协程池)', popular: 'Goroutine + Channel', description: '原生并发支持' },
  { category: '配置', tech: 'Viper / envconfig / koanf / cleanenv', popular: 'Viper', description: '配置管理' },
  { category: '缓存', tech: 'go-redis / ristretto / bigcache / go-cache / groupcache', popular: 'go-redis + ristretto', description: 'Go缓存方案' },
  { category: '日志', tech: 'zap / logrus / zerolog / slog(Go 1.21+) / lumberjack', popular: 'zap / slog', description: '高性能日志' },
  { category: '测试', tech: 'go test / Testify / Ginkgo / mockery / go-sqlmock / testcontainers-go', popular: 'go test + Testify', description: 'Go测试生态' },
  { category: '文档生成', tech: 'Swag / go-swagger / OpenAPI / Hertz Swagger', popular: 'Swag / go-swagger', description: 'API文档生成' },
  { category: 'CLI工具', tech: 'Cobra / urfave/cli / Kong / mow.cli', popular: 'Cobra', description: '命令行工具开发' },
  { category: '服务发现', tech: 'Consul / Etcd / Nacos / Zookeeper', popular: 'Consul / Etcd', description: '服务注册与发现' },
  { category: '消息队列', tech: 'sarama(Kafka) / RocketMQ Client / NATS.go / RabbitMQ Go', popular: 'sarama / NATS', description: '消息队列客户端' },
  { category: '部署运行', tech: 'Docker / Kubernetes / Systemd / Supervisor', popular: 'Docker + K8s', description: '生产环境部署' },
]

export const javaData: TechItem[] = [
  { category: 'Web框架', tech: 'Spring Boot / Quarkus / Micronaut / Vert.x / Ktor / Play Framework', popular: 'Spring Boot 3', description: '企业级应用首选' },
  { category: 'ORM', tech: 'Spring Data JPA / MyBatis / MyBatis-Plus / JOOQ / Hibernate / QueryDSL', popular: 'MyBatis-Plus / JPA', description: '数据库持久层' },
  { category: '验证', tech: 'Hibernate Validator / Spring Validation / Jakarta Validation', popular: 'Spring Validation', description: '数据验证框架' },
  { category: '认证授权', tech: 'Spring Security / Apache Shiro / JWT / OAuth2 / Keycloak', popular: 'Spring Security', description: '企业级安全框架' },
  { category: '微服务', tech: 'Spring Cloud / Dubbo / gRPC-Java / Service Mesh (Istio)', popular: 'Spring Cloud', description: '微服务架构支持' },
  { category: '构建工具', tech: 'Maven / Gradle / Bazel', popular: 'Gradle', description: '项目构建与依赖管理' },
  { category: '缓存', tech: 'Spring Cache + Redis / Caffeine / Ehcache / Hazelcast', popular: 'Redis + Caffeine', description: '多级缓存方案' },
  { category: '日志', tech: 'SLF4J + Logback / Log4j2 / Java Util Logging', popular: 'SLF4J + Logback', description: '日志框架门面' },
  { category: '测试', tech: 'JUnit 5 / Mockito / TestContainers / WireMock / AssertJ / RestAssured', popular: 'JUnit 5 + Mockito', description: 'Java测试生态' },
  { category: '文档生成', tech: 'SpringDoc / Swagger / OpenAPI / Knife4j', popular: 'SpringDoc', description: 'API文档生成' },
  { category: '任务调度', tech: 'Spring Scheduler / Quartz / XXL-Job / Elastic-Job', popular: 'XXL-Job', description: '分布式任务调度' },
  { category: '消息队列', tech: 'Spring Kafka / RocketMQ Spring / RabbitMQ / ActiveMQ', popular: 'Spring Kafka', description: '消息中间件' },
  { category: '搜索', tech: 'Spring Data Elasticsearch / Hibernate Search / Solr', popular: 'Elasticsearch', description: '全文搜索引擎' },
  { category: 'CLI工具', tech: 'Picocli / JCommander / Apache Commons CLI', popular: 'Picocli', description: '命令行工具开发' },
  { category: '部署运行', tech: 'Docker / Kubernetes / JAR / WAR / GraalVM Native', popular: 'Docker + K8s', description: '生产环境部署' },
]

export const rustData: TechItem[] = [
  { category: 'Web框架', tech: 'Axum / Actix-web / Rocket / Warp / Poem / Salvo / Tide', popular: 'Axum', description: '高性能异步Web框架' },
  { category: 'ORM', tech: 'Diesel / SeaORM / SQLx / Rustorm / Corm', popular: 'SeaORM / SQLx', description: '类型安全的数据库操作' },
  { category: '验证', tech: 'validator / garde / schemars', popular: 'validator / garde', description: '数据验证库' },
  { category: '认证授权', tech: 'jsonwebtoken / oxide-auth / casbin-rs / oauth2', popular: 'jsonwebtoken', description: 'JWT与OAuth实现' },
  { category: '异步运行时', tech: 'Tokio / async-std / smol', popular: 'Tokio', description: 'Rust异步运行时' },
  { category: '序列化', tech: 'Serde / serde_json / bincode / rkyv', popular: 'Serde', description: '数据序列化框架' },
  { category: 'HTTP客户端', tech: 'reqwest / hyper / surf / ureq', popular: 'reqwest / hyper', description: 'HTTP请求客户端' },
  { category: '缓存', tech: 'moka / cached / redis-rs', popular: 'redis-rs + moka', description: '缓存库' },
  { category: '日志', tech: 'tracing / log / slog / env_logger', popular: 'tracing', description: '结构化日志追踪' },
  { category: '测试', tech: '内置test / mockall / proptest / quickcheck / tokio-test', popular: '内置 + mockall', description: 'Rust测试生态' },
  { category: 'CLI工具', tech: 'clap / structopt / argh / pico-args', popular: 'clap', description: '命令行参数解析' },
  { category: '错误处理', tech: 'thiserror / anyhow / eyre / color-eyre', popular: 'thiserror + anyhow', description: '错误处理库' },
  { category: '并发', tech: 'rayon / crossbeam / parking_lot / dashmap', popular: 'rayon + crossbeam', description: '并发原语与数据结构' },
  { category: '消息队列', tech: 'lapin (RabbitMQ) / rdkafka / async-nats', popular: 'rdkafka', description: '消息队列客户端' },
  { category: '部署运行', tech: 'Docker / Systemd / Native Binary', popular: 'Native Binary', description: '单文件部署' },
]
