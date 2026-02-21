# TechStack Panorama 改进实施计划

**生成日期:** 2026-02-21  
**分析范围:** 前端架构、数据层、非功能特性、工程化/DX  
**计划状态:** 待执行

---

## 执行摘要

本次改进计划基于对 TechStack Panorama 系统的深度分析，识别出 **4个严重问题**、**3个中等问题** 和 **5个轻微问题**。计划分为 **5个阶段**，共 **12个具体任务**，预计可显著提升代码质量、测试覆盖率和 SEO 表现。

### 关键指标改进预期

| 指标 | 当前状态 | 目标状态 | 改进幅度 |
|------|----------|----------|----------|
| 代码重复率 | ~40% (4页面重复组件) | <5% | -35% |
| 测试覆盖率 | 0% | >60% | +60% |
| SEO 完整性 | 20% | 90% | +70% |
| CI/CD 自动化 | 0% | 100% | +100% |
| Lighthouse 性能 | ~75 | >90 | +15 |

---

## 问题分级汇总

### Critical (严重) - 需立即处理

1. **代码重复严重** - TechCard 组件在 4 个页面重复实现
   - 文件: src/app/frontend/page.tsx, backend/page.tsx, ai-stack/page.tsx, infrastructure/page.tsx
   - 影响: 维护困难，修改需改4处，易遗漏

2. **测试覆盖率 - 严重缺失**
   - 状态: 零测试，无测试框架
   - 影响: 无法验证功能正确性，重构风险高

3. **SEO 配置薄弱**
   - 缺失: robots.txt, sitemap.xml, Open Graph, Twitter Cards, JSON-LD
   - 影响: 搜索引擎收录困难，社交分享效果差

### Major (中等) - 计划内处理

4. **CI/CD 缺失**
   - 缺失: GitHub Actions 工作流
   - 影响: 手动部署，无自动化测试验证

5. **客户端组件过度使用**
   - 文件: 4 个主要页面全部标记 'use client'
   - 影响: 失去 SSR 优势，首屏加载慢

6. **类型定义分散**
   - 问题: TechItem/TechCategory 类型在页面中重复定义
   - 影响: 类型不一致风险

### Minor (轻微) - 优化项

7. **页面文件过大** - backend/page.tsx 1,195 行
8. **依赖可更新** - 部分依赖有安全更新
9. **无错误边界** - 缺少全局错误处理
10. **无性能监控** - 缺少 Core Web Vitals 追踪
11. **文档不完整** - 缺少架构决策记录

---

## 实施计划详情

### Phase 1: 提取共享组件 (消除代码重复)

**目标:** 消除 4 个页面的组件重复，将代码重复率从 40% 降至 5% 以下

#### Task 1: 添加共享类型到 types.ts

**文件:** src/data/tech/types.ts  
**预计时间:** 2-3 分钟  
**优先级:** P0

**操作内容:** 在现有类型基础上添加 TechItem 和 TechCategory 类型

**验证步骤:**
```bash
bun run tsc --noEmit
echo "Type check passed"
```

**提交命令:**
```bash
git add src/data/tech/types.ts
git commit -m "feat(types): add TechItem and TechCategory shared types"
```

---

#### Task 2: 创建 TechCategoryCard 共享组件

**文件:** src/components/tech/TechCategoryCard.tsx  
**预计时间:** 5-8 分钟  
**优先级:** P0

**操作内容:** 创建可复用的技术类别卡片组件

**验证步骤:**
```bash
bun run tsc --noEmit
bun run lint src/components/tech/TechCategoryCard.tsx
```

**提交命令:**
```bash
git add src/components/tech/TechCategoryCard.tsx
git commit -m "feat(components): add TechCategoryCard shared component"
```

---

#### Task 3: 创建 tech 组件索引文件

**文件:** src/components/tech/index.ts  
**预计时间:** 1 分钟  
**优先级:** P0

**操作内容:** 导出 TechCategoryCard

**提交命令:**
```bash
git add src/components/tech/index.ts
git commit -m "chore(components): add tech components index"
```

---

#### Task 4-7: 重构各页面使用共享组件

**文件:** 
- src/app/frontend/page.tsx
- src/app/backend/page.tsx  
- src/app/ai-stack/page.tsx
- src/app/infrastructure/page.tsx

**预计时间:** 每个 5-8 分钟  
**优先级:** P0

**操作内容:** 替换原有重复的 TechCard 组件实现，使用共享组件

**验证步骤:**
```bash
bun run tsc --noEmit
bun run dev
# 验证各页面正常渲染
```

---

### Phase 2: 添加测试框架

**目标:** 建立测试基础设施，实现 >60% 测试覆盖率

#### Task 8: 安装 Vitest 和测试依赖

**文件:** package.json  
**预计时间:** 3-5 分钟  
**优先级:** P1

**操作内容:**
```bash
bun add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```

**验证步骤:**
```bash
bun vitest --version
```

---

#### Task 9: 配置 Vitest

**文件:** vitest.config.ts (新建)  
**预计时间:** 3-5 分钟  
**优先级:** P1

**操作内容:** 创建 Vitest 配置文件

**验证步骤:**
```bash
bun vitest --run
```

---

### Phase 3: 配置 CI/CD

**目标:** 建立 GitHub Actions 自动化工作流

#### Task 10: 创建 GitHub Actions 工作流

**文件:** .github/workflows/ci.yml (新建)  
**预计时间:** 5-8 分钟  
**优先级:** P1

**操作内容:** 创建 CI/CD 工作流，包含类型检查、构建、测试

---

### Phase 4: SEO 配置

**目标:** 提升 SEO 完整性至 90%

#### Task 11: 添加 SEO 基础配置

**文件:**
- public/robots.txt (新建)
- src/app/sitemap.ts (新建)
- src/app/layout.tsx (修改)

**预计时间:** 8-10 分钟  
**优先级:** P1

**操作内容:**
1. 创建 robots.txt
2. 创建 sitemap.ts
3. 增强 layout.tsx 的 metadata

---

### Phase 5: 清理优化

**目标:** 代码质量最终优化

#### Task 12: 添加测试示例和清理

**文件:**
- src/components/tech/TechCategoryCard.test.tsx (新建)
- src/lib/scoring/calculator.test.ts (新建)

**预计时间:** 10-15 分钟  
**优先级:** P2

**操作内容:**
1. 为 TechCategoryCard 添加组件测试
2. 为评分计算器添加单元测试
3. 清理未使用的代码

---

## 执行选项

完成以上计划后，你可以选择以下执行方式：

### Option 1: Subagent-Driven (推荐)
在本会话中，我将为每个任务创建专门的子代理并行执行。适合希望快速完成所有改进。

### Option 2: Parallel Session  
在独立会话中使用 executing-plans 技能执行。适合希望分阶段review每个改进。

---

**计划文档已生成，等待执行指令。**
