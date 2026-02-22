# 主题适配修复实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 修复首页、后端技术、AI开发和侧边栏页面的主题适配，使其支持亮色/暗色主题切换

**Architecture:** 使用 Tailwind CSS 的 `dark:` 修饰符和 `class` 策略，通过 next-themes 管理主题状态。所有页面使用统一的配色系统，亮色模式使用浅色背景（slate-50/blue-50），暗色模式使用深色背景（slate-900/purple-950）。

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3.4, next-themes

---

## 前置条件

- 主题系统已配置（globals.css 包含亮色/暗色变量）
- ThemeProvider 已集成到 layout.tsx
- Header 组件已创建并包含 ThemeToggle

---

## Task 1: 修复首页 (page.tsx) 主题适配

**Files:**
- Modify: `src/app/page.tsx`

**变更内容:**
将硬编码的暗色样式改为支持主题切换的样式：

1. **背景渐变** - Line 85:
   - 从: `bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
   - 改为: `bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900`

2. **卡片背景** - Line 103:
   - 从: `bg-gray-800/50 backdrop-blur-sm border border-gray-700`
   - 改为: `bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none`

3. **卡片标题** - Line 112:
   - 从: `text-white`
   - 改为: `text-gray-900 dark:text-white`

4. **描述文字** - Line 116:
   - 从: `text-gray-400`
   - 改为: `text-gray-600 dark:text-gray-400`

5. **标签样式** - Line 122:
   - 从: `bg-gray-700/50 text-gray-300`
   - 改为: `bg-gray-100 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300`

6. **统计卡片** - Lines 135-150:
   - 从: `bg-gray-800/30 border border-gray-700`
   - 改为: `bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700`

7. **统计数字下方的文字** - Lines 137, 141, 145, 149:
   - 从: `text-gray-400`
   - 改为: `text-gray-600 dark:text-gray-400`

8. **页脚文字** - Line 154:
   - 从: `text-gray-500`
   - 改为: `text-gray-600 dark:text-gray-500`

**验证步骤:**
1. 运行 `bun run dev`
2. 访问首页
3. 切换亮色/暗色主题，确认所有元素颜色正确变化

---

## Task 2: 修复后端技术页面 (backend/page.tsx) 主题适配

**Files:**
- Modify: `src/app/backend/page.tsx`

**变更内容:**

1. **页面背景** - Line 1044:
   - 从: `bg-gradient-to-b from-[#0f0f1a] via-[#1a0f2e] to-[#0f0f1a]`
   - 改为: `bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 dark:from-[#0f0f1a] dark:via-[#1a0f2e] dark:to-[#0f0f1a]`

2. **副标题文字** - Line 1049:
   - 从: `text-slate-400`
   - 改为: `text-slate-600 dark:text-slate-400`

3. **图例文字** - Line 1089:
   - 从: `text-slate-400`
   - 改为: `text-slate-600 dark:text-slate-400`

4. **页脚文字** - Line 1101:
   - 从: `text-slate-500`
   - 改为: `text-slate-600 dark:text-slate-500`

5. **标签按钮背景** - Line 1076:
   - 从: `background: activeTab === lang.id ? lang.gradient : 'transparent'`
   - 改为: 使用 CSS 类 `bg-gradient-to-r ${lang.gradient}` 仅在暗色模式下显示渐变，亮色模式下使用纯色背景

**验证步骤:**
1. 访问 `/backend`
2. 切换主题，确认背景、文字和按钮样式正确

---

## Task 3: 修复 AI 开发页面 (ai-stack/page.tsx) 主题适配

**Files:**
- Modify: `src/app/ai-stack/page.tsx`

**变更内容:**

1. **页面背景** - Lines 322-326:
   - 从: `style={{ background: 'linear-gradient(180deg, #0f0f1a...)' }}`
   - 改为: `className="bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 dark:from-[#0f0f1a] dark:via-[#1a0f2e] dark:to-[#0f0f1a]"`

2. **描述文字** - Line 346:
   - 从: `style={{ color: '#94a3b8' }}`
   - 改为: `className="text-slate-600 dark:text-slate-400"`

3. **标签容器背景** - Line 364:
   - 从: `style={{ background: '#ffffff08' }}`
   - 改为: `className="bg-white/50 dark:bg-white/[0.03]"`

4. **标签边框** - Line 366:
   - 从: `style={{ border: '1px solid #ffffff10' }}`
   - 改为: `className="border border-slate-200 dark:border-white/10"`

5. **非激活标签文字** - Lines 382, 411:
   - 从: `color: '#94a3b8'`
   - 改为: `className="text-slate-500 dark:text-slate-400"`

6. **图例背景** - Line 446:
   - 从: `background: '#ffffff08'`
   - 改为: `className="bg-white/50 dark:bg-white/[0.03]"`

7. **图例边框** - Line 448:
   - 从: `border: '1px solid #ffffff10'`
   - 改为: `className="border border-slate-200 dark:border-white/10"`

8. **图例文字** - Line 456:
   - 从: `color: '#94a3b8'`
   - 改为: `className="text-slate-600 dark:text-slate-400"`

9. **页脚背景** - Line 478:
   - 从: `background: '#ffffff05'`
   - 改为: `className="bg-slate-50 dark:bg-white/[0.03]"`

10. **页脚边框** - Line 480:
    - 从: `border: '1px solid #ffffff10'`
    - 改为: `className="border border-slate-200 dark:border-white/10"`

11. **页脚文字** - Line 485:
    - 从: `color: '#64748b'`
    - 改为: `className="text-slate-600 dark:text-slate-500"`

**验证步骤:**
1. 访问 `/ai-stack`
2. 切换主题，确认所有内联样式都被 Tailwind 类替换

---

## Task 4: 修复侧边栏 (sidebar.tsx) 主题适配

**Files:**
- Modify: `src/components/sidebar.tsx`

**变更内容:**

1. **侧边栏背景** - Line 73:
   - 从: `bg-gray-900 text-white`
   - 改为: `bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800`

2. **边框颜色** - Lines 77, 135:
   - 从: `border-gray-800`
   - 改为: `border-gray-200 dark:border-gray-800`

3. **导航链接默认状态** - Line 111:
   - 从: `text-zinc-400 hover:text-white hover:bg-white/10`
   - 改为: `text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10`

4. **导航链接激活状态** - Line 110:
   - 从: `bg-white/10 text-white`
   - 改为: `bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white`

5. **折叠按钮** - Line 92:
   - 从: `text-zinc-400 hover:text-white hover:bg-white/10`
   - 改为: `text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10`

6. **主题标签** - Line 137:
   - 从: `text-zinc-400`
   - 改为: `text-gray-500 dark:text-zinc-400`

7. **页脚文字** - Line 142:
   - 从: `text-zinc-500`
   - 改为: `text-gray-500 dark:text-zinc-500`

8. **移除 ThemeToggle** - 从侧边栏底部移除 ThemeToggle（已移到 Header）

**验证步骤:**
1. 观察侧边栏
2. 切换主题，确认背景、文字和边框颜色正确变化

---

## Task 5: 从侧边栏移除主题切换按钮

**Files:**
- Modify: `src/components/sidebar.tsx`

**变更内容:**
删除侧边栏底部的主题切换按钮相关代码：
- 移除 `import { ThemeToggle } from '@/components/theme-toggle'`
- 移除侧边栏底部的主题切换按钮 JSX

**验证步骤:**
1. 确认侧边栏不再显示主题切换按钮
2. 确认 Header 右上角显示主题切换按钮

---

## 最终验证

**运行命令:**
```bash
bunx tsc --noEmit
```

**预期结果:** 无 TypeScript 错误

**手动测试:**
1. 启动开发服务器: `bun run dev`
2. 访问以下页面并切换主题:
   - 首页 `/`
   - 后端 `/backend`
   - AI 开发 `/ai-stack`
3. 确认所有页面在亮色和暗色模式下都显示正常

---

## 提交信息

```bash
git add src/app/page.tsx src/app/backend/page.tsx src/app/ai-stack/page.tsx src/components/sidebar.tsx
git commit -m "fix: 修复首页、后端、AI页面和侧边栏的主题适配

- 添加亮色/暗色主题支持
- 使用 Tailwind dark: 修饰符
- 统一配色系统
- 移除侧边栏主题切换按钮（已移到 Header）"
```
