# TechStack Panorama 技术栈重构 PRD

**版本**: v1.0  
**日期**: 2025-02-21  
**状态**: 已确认

---

## 1. 产品概述

### 1.1 背景
当前技术栈全景图包含500+技术，信息过载且缺乏深度。

### 1.2 目标
重构为精简+深度的技术栈平台：
- 精简: 只展示主流技术（评分≥60），归档低热度技术
- 深度: 每个技术提供完整档案（特性、资源、对比、场景）
- 可发现: 归档技术仍可搜索查看

### 1.3 核心原则
- YAGNI: 去掉使用率极低的技术
- 深度优先: 保留技术必须有完整分析
- 归档而非删除: 低热度技术移到归档区

---

## 2. 功能需求

### 2.1 技术档案系统
每个技术包含完整档案：

**基础信息**
- ID、名称、分类、标签
- 描述、标语、版本
- 官方链接、GitHub、文档

**多维度评分（0-100）**
- 流行度（30%）
- 维护活跃度（25%）
- 社区生态（20%）
- 学习曲线（15%）
- 企业采用（10%）

**深度内容**
- 核心特性详解
- 学习资源
- 最佳实践
- 竞品对比
- 适用场景

### 2.2 归档机制
**自动归档**
- 总分 < 60 → 自动标记为 archived
- 归档技术不在主流列表展示
- 保留所有数据

**归档区功能**
- 查看所有归档技术
- 显示归档原因和时间
- 搜索归档技术

### 2.3 界面结构
- 技术栈列表页（/tech-stack）
- 技术详情页（/tech-stack/[id]）
- 归档区（/tech-stack?view=archived）

---

## 3. 数据模型

### 3.1 TechDetail 接口
```typescript
interface TechDetail {
  // 基础信息
  id: string
  name: string
  category: string
  description: string
  tagline: string
  
  // 状态管理
  status: 'active' | 'archived'
  archiveReason?: string
  archivedAt?: string
  
  // 评分数据
  scores: {
    popularity: number
    maintenance: number
    ecosystem: number
    learningCurve: number
    enterpriseAdoption: number
    total: number
  }
  
  // 深度内容
  deepDive: {
    coreFeatures: Feature[]
    learningResources: Resource[]
    bestPractices: string[]
    comparisons: Comparison[]
    useCases: UseCase
  }
}
```

---

## 4. 技术实现

### 4.1 文件结构
```
src/
├── app/tech-stack/
│   ├── page.tsx
│   └── [id]/page.tsx
├── components/tech/
│   ├── TechCard.tsx
│   ├── TechGrid.tsx
│   ├── ScoreBadge.tsx
│   └── TechDetailTabs.tsx
├── data/tech/
│   ├── types.ts
│   └── tech-database.ts
└── lib/scoring/
    ├── calculator.ts
    └── config.ts
```

### 4.2 归档逻辑
```typescript
// 自动归档
if (tech.scores.total < 60) {
  tech.status = 'archived'
  tech.archiveReason = 'low-score'
}

// 过滤展示
const activeTechs = techs.filter(t => t.status === 'active')
```

---

## 5. 实施计划

### 阶段一：数据重构
- [ ] 重构 TechDetail 类型
- [ ] 创建 tech-database.ts
- [ ] 实现归档逻辑

### 阶段二：列表页
- [ ] 创建技术栈列表页
- [ ] 实现 TechCard 组件
- [ ] 实现分类导航

### 阶段三：详情页
- [ ] 创建技术详情页
- [ ] 实现标签导航
- [ ] 填充深度内容

### 阶段四：归档区
- [ ] 实现归档区页面
- [ ] 添加归档原因显示
- [ ] 实现搜索功能

---

## 6. 验收标准

**功能验收**
- 评分 < 60 的技术自动归档
- 列表页只显示 active 技术
- 详情页包含完整档案
- 归档区可查看历史技术

**性能验收**
- 列表页加载 < 1s
- 详情页加载 < 500ms

**体验验收**
- 暗色主题兼容
- 响应式布局

---

*PRD 完成 - 等待实施确认*
