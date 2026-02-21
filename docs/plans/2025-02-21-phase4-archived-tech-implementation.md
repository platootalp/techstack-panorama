# Phase 4: 归档技术展示区域实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 创建归档技术展示区域，包含归档列表页、归档技术卡片、原因过滤器和导航链接

**Architecture:** 复用现有技术栈列表页的设计模式，创建独立的归档区页面。使用灰色主题区分归档技术与活跃技术，通过 Badge 组件展示归档原因，提供替代技术链接。

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui (Badge, Card, Select, Tabs, Input, Button)

---

## 前置依赖

- Phase 1 完成: `types.ts` 已定义 `TechStatus`, `ArchiveReason` 类型
- Phase 1 完成: `tech-database.ts` 已包含 `getArchivedTech()`, `getArchiveReasonText()` 函数
- Phase 2 完成: `/tech-stack` 列表页已实现搜索、筛选、排序功能
- Phase 2 完成: `ScoreBadge` 组件已存在
- Phase 3 完成: `/tech-stack/[id]` 详情页已支持显示归档状态

---

## 任务分解

### Task 1: 创建归档技术卡片组件

**Files:**
- Create: `src/components/tech/ArchivedTechCard.tsx`

**Step 1: 创建组件文件**

创建 `src/components/tech/ArchivedTechCard.tsx`，包含：
- 灰色主题样式（区别于活跃技术的彩色主题）
- 归档徽章（红色 destructive 变体）
- 归档原因显示
- 替代技术链接（如果有 replacedBy 字段）
- 评分和查看详情按钮

**Step 2: 验证组件编译**

Run: `bun run build 2>&1 | head -50`
Expected: 无 TypeScript 错误

**Step 3: Commit**

```bash
git add src/components/tech/ArchivedTechCard.tsx
git commit -m "feat: add ArchivedTechCard component for archived technologies"
```

**成功验证标准:**
- [ ] 组件文件成功创建
- [ ] TypeScript 编译无错误
- [ ] 组件正确导入 Badge, Button, ScoreBadge
- [ ] 正确显示归档原因（使用 getArchiveReasonText）
- [ ] 正确显示替代技术链接

---

### Task 2: 创建归档区主页面

**Files:**
- Create: `src/app/tech-stack/archived/page.tsx`

**Step 1: 创建页面目录**

```bash
mkdir -p src/app/tech-stack/archived
```

**Step 2: 编写页面组件**

页面应包含：
- 返回技术列表的导航链接
- 页面标题和描述（灰色主题）
- 统计卡片（归档总数、各原因数量等）
- 归档原因说明区域
- 搜索框（按名称、描述搜索）
- 归档原因筛选器（下拉选择）
- 归档技术卡片网格列表
- 空状态提示
- 底部警告提示

**Step 3: 验证页面编译**

Run: `bun run build 2>&1 | head -50`
Expected: 无 TypeScript 错误

**Step 4: Commit**

```bash
git add src/app/tech-stack/archived/page.tsx
git commit -m "feat: add archived tech page with filtering and search"
```

**成功验证标准:**
- [ ] 页面文件成功创建
- [ ] 页面可以通过 `/tech-stack/archived` 访问
- [ ] 搜索功能正常工作
- [ ] 归档原因筛选器正常工作
- [ ] 正确显示归档技术列表
- [ ] 空状态正确显示

---

### Task 3: 在主列表页添加归档区链接

**Files:**
- Modify: `src/app/tech-stack/page.tsx`

**Step 1: 在页面头部添加归档区入口**

在搜索区域上方或统计卡片下方添加：
- 归档区链接按钮
- 显示归档技术数量
- 使用 Archive 图标

**Step 2: 验证修改**

Run: `bun run build 2>&1 | head -50`
Expected: 无 TypeScript 错误

**Step 3: Commit**

```bash
git add src/app/tech-stack/page.tsx
git commit -m "feat: add link to archived tech page in main list"
```

**成功验证标准:**
- [ ] 主列表页显示归档区入口
- [ ] 点击链接正确跳转到归档页
- [ ] 显示归档技术数量

---

### Task 4: 更新详情页归档信息展示

**Files:**
- Modify: `src/app/tech-stack/[id]/page.tsx`

**Step 1: 增强归档信息展示**

在现有归档徽章基础上，添加：
- 归档原因详细说明
- 归档日期显示
- 替代技术推荐卡片（如果有 replacedBy）
- 归档说明文本（archiveNote）

**Step 2: 验证修改**

Run: `bun run build 2>&1 | head -50`
Expected: 无 TypeScript 错误

**Step 3: Commit**

```bash
git add src/app/tech-stack/[id]/page.tsx
git commit -m "feat: enhance archived tech info display in detail page"
```

**成功验证标准:**
- [ ] 详情页正确显示归档原因
- [ ] 显示归档日期
- [ ] 显示归档说明
- [ ] 替代技术链接可点击

---

### Task 5: 运行完整构建验证

**Step 1: 运行生产构建**

```bash
bun run build
```

**Step 2: 运行 lint 检查**

```bash
bun run lint
```

**Step 3: 启动开发服务器验证**

```bash
bun run dev &
sleep 5
curl -s http://localhost:3888/tech-stack/archived | head -20
```

**成功验证标准:**
- [ ] 构建成功无错误
- [ ] lint 检查通过
- [ ] 页面可以正常访问

---

## 依赖关系和执行顺序

```
Task 1 (ArchivedTechCard组件)
    |
    v
Task 2 (归档区主页面) --> Task 3 (主列表添加链接)
    |                         |
    v                         v
Task 4 (详情页增强) <--------+
    |
    v
Task 5 (完整构建验证)
```

**执行顺序说明:**
1. **Task 1** 必须先完成，因为 Task 2 依赖 ArchivedTechCard 组件
2. **Task 2 和 Task 3** 可以并行执行（无依赖关系）
3. **Task 4** 可以在 Task 2 完成后执行
4. **Task 5** 必须在所有代码修改完成后执行

---

## 每个任务的成功验证标准汇总

### Task 1: 归档技术卡片组件
- 文件位置: `src/components/tech/ArchivedTechCard.tsx`
- 验证命令: `bun run build`
- 预期结果: 无 TypeScript 错误
- 功能验证:
  - [ ] 灰色主题样式正确
  - [ ] 归档徽章显示正常
  - [ ] 归档原因文本正确
  - [ ] 替代技术链接可点击

### Task 2: 归档区主页面
- 文件位置: `src/app/tech-stack/archived/page.tsx`
- 验证命令: `bun run build && curl http://localhost:3888/tech-stack/archived`
- 预期结果: 页面正常渲染
- 功能验证:
  - [ ] 搜索功能过滤正确
  - [ ] 原因筛选器工作正常
  - [ ] 统计卡片数据正确
  - [ ] 空状态显示正确

### Task 3: 主列表页链接
- 文件位置: `src/app/tech-stack/page.tsx`
- 验证命令: 浏览器访问 `/tech-stack`
- 预期结果: 显示归档区入口链接
- 功能验证:
  - [ ] 链接样式正确
  - [ ] 点击跳转正常
  - [ ] 数量显示正确

### Task 4: 详情页增强
- 文件位置: `src/app/tech-stack/[id]/page.tsx`
- 验证命令: 浏览器访问 `/tech-stack/axum`
- 预期结果: 显示完整归档信息
- 功能验证:
  - [ ] 归档原因显示
  - [ ] 归档日期显示
  - [ ] 替代技术推荐

### Task 5: 完整验证
- 验证命令: `bun run build && bun run lint`
- 预期结果: 全部通过

---

## 设计规范参考

### 颜色主题
- 归档技术使用灰色系：`bg-gray-50`, `border-gray-200`
- 归档徽章使用：`variant="destructive"`
- 替代技术推荐使用：`bg-blue-50`, `text-blue-600`

### 布局规范
- 页面最大宽度：`max-w-7xl`
- 卡片网格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 间距：`gap-6`

### 图标使用
- 归档：`Archive` (lucide-react)
- 替代：`RefreshCw`
- 警告：`AlertTriangle`
- 搜索：`Search`
- 筛选：`Filter`

---

## 数据结构参考

### ArchiveReason 类型
```typescript
type ArchiveReason = 
  | 'low_popularity'      // 流行度过低
  | 'deprecated'          // 已弃用/停止维护
  | 'replaced'            // 被更好的技术替代
  | 'niche_use_case'      // 仅适用于特定场景
```

### 归档技术示例 (axum)
```typescript
{
  id: 'axum',
  name: 'Axum',
  status: 'archived',
  archiveReason: 'low_popularity',
  archiveNote: '目前 Rust Web 开发中，Actix-web 更加成熟...',
  archivedAt: '2025-02-21T00:00:00Z',
  replacedBy: 'actix-web',
  // ... 其他字段
}
```

---

## 执行选项

**Plan complete and saved to `docs/plans/2025-02-21-phase4-archived-tech-implementation.md`. Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**
