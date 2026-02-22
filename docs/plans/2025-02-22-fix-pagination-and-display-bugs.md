# Pagination & Display Bugs 修复计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 修复 techstack-panorama 项目中的分页和显示相关 bugs，确保分页在数据变化时正确重置，并修复颜色不一致等显示问题。

**Architecture:** 通过增强 usePagination hook 来自动处理数据变化时的页码调整，同时在页面级别添加必要的 useEffect 来监听筛选条件变化。显示问题通过修正颜色映射和组件渲染逻辑来解决。

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui

---

## Bug 清单

| Bug ID | 严重程度 | 文件 | 描述 |
|--------|----------|------|------|
| BUG-1 | **Critical** | `src/hooks/use-pagination.ts` | 数据变化时页码不自动调整 |
| BUG-2 | **Critical** | `src/app/tech-stack/page.tsx` | 筛选时不重置分页 |
| BUG-3 | **High** | `src/components/tech/TechCategoryCard.tsx` | 颜色不一致 (rising=blue vs purple) |
| BUG-4 | Medium | `src/app/tech-stack/archived/page.tsx` | 缺少分页功能 |
| BUG-5 | Medium | `src/app/backend/page.tsx` | 重复的 category IDs |

---

## Task 1: 修复 usePagination Hook (BUG-1)

**Files:**
- Modify: `src/hooks/use-pagination.ts:1-92`

**Step 1: 添加 useEffect 导入**

```typescript
// Line 3: Change from
import { useState, useMemo, useCallback } from 'react'
// To:
import { useState, useMemo, useCallback, useEffect } from 'react'
```

**Step 2: 在 hook 内部添加数据变化监听**

在 Line 42 (const totalPages = ...) 之后添加:

```typescript
  // Auto-adjust current page when data changes
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [totalPages, currentPage])
```

**Step 3: 验证修复**

Run: `bun run build`
Expected: Build successful with no TypeScript errors

**Step 4: Commit**

```bash
git add src/hooks/use-pagination.ts
git commit -m "fix: auto-adjust page when data changes in usePagination hook

- Add useEffect to reset page when totalPages changes
- Prevents users from being stuck on invalid pages when filtering"
```

---

## Task 2: 修复 tech-stack 页面筛选分页问题 (BUG-2)

**Files:**
- Modify: `src/app/tech-stack/page.tsx:1-102`

**Step 1: 添加 useEffect 导入**

```typescript
// Line 3: Change from
import { useState, useMemo } from 'react'
// To:
import { useState, useMemo, useEffect } from 'react'
```

**Step 2: 在 usePagination 之后添加筛选监听**

在 Line 102 (after usePagination destructuring) 添加:

```typescript
  // Reset pagination when filters change
  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedCategory, selectedSubcategory, sortBy, setPage])
```

**Step 3: 验证修复**

Run: `bun run build`
Expected: Build successful

**Step 4: Commit**

```bash
git add src/app/tech-stack/page.tsx
git commit -m "fix: reset pagination when filters change in tech-stack page

- Add useEffect to reset page when search/category/subcategory/sort changes
- Prevents blank pages when filtered results have fewer pages"
```

---

## Task 3: 修复 TechCategoryCard 颜色不一致 (BUG-3)

**Files:**
- Modify: `src/components/tech/TechCategoryCard.tsx:16-27`

**Step 1: 修复颜色映射**

```typescript
// Lines 16-27: Change the color mapping
const popularityColors = {
  high: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  rising: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border-purple-200 dark:border-purple-800', // Changed from blue to purple
}
```

**Step 2: 验证修复**

Check that the colors match the legend in frontend/backend pages:
- high → emerald (green) ✓
- medium → amber (yellow) ✓
- rising → purple (not blue) ✓

**Step 3: Commit**

```bash
git add src/components/tech/TechCategoryCard.tsx
git commit -m "fix: correct popularity badge colors to match legend

- Change rising color from blue to purple
- Match legend colors: high=emerald, medium=amber, rising=purple"
```

---

## Task 4: 为 archived 页面添加分页 (BUG-4)

**Files:**
- Modify: `src/app/tech-stack/archived/page.tsx:1-291`

**Step 1: 添加必要的导入**

```typescript
// After line 3, add:
import { usePagination } from '@/hooks/use-pagination'
import { PaginationControl } from '@/components/ui/pagination-control'
```

**Step 2: 在组件内部添加分页逻辑**

在 Line 52 (after `const archivedTech = getArchivedTech()`) 添加:

```typescript
  const {
    currentData,
    currentPage,
    pageSize,
    totalPages,
    totalItems,
    pageSizeOptions,
    setPage,
    setPageSize,
  } = usePagination(filteredTech, { initialPageSize: 12 })
```

**Step 3: 添加筛选变化监听**

在 usePagination 之后添加:

```typescript
  // Reset pagination when filters change
  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedReason, setPage])
```

**Step 4: 替换 filteredTech.map 为 currentData.map**

在 Line 158 (原 filteredTech.map) 改为:

```typescript
        {/* Archived Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((tech) => (
            <ArchivedTechCard key={tech.id} tech={tech} />
          ))}
        </div>
```

**Step 5: 更新结果显示文本**

在 Line 153 改为:

```typescript
        {/* Results Count */}
        <div className="mb-4 text-gray-600 dark:text-gray-400">
          找到 <span className="font-bold text-gray-600">{totalItems}</span> 个归档技术
          {totalPages > 1 && (
            <span className="text-sm text-gray-400 ml-2">
              (第 {currentPage} / {totalPages} 页)
            </span>
          )}
        </div>
```

**Step 6: 在空状态后添加分页组件**

在 Line 174 (after empty state closing parenthesis) 添加:

```typescript
        {/* Pagination */}
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          pageSizeOptions={pageSizeOptions}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          className="mt-8"
        />
```

**Step 7: 验证修复**

Run: `bun run build`
Expected: Build successful

**Step 8: Commit**

```bash
git add src/app/tech-stack/archived/page.tsx
git commit -m "feat: add pagination to archived tech page

- Add usePagination hook for client-side pagination
- Reset page when search or archive reason filter changes
- Show pagination controls at bottom of page"
```

---

## Task 5: 修复 backend 页面重复的 Category IDs (BUG-5)

**Files:**
- Modify: `src/app/backend/page.tsx`

**Step 1: 分析当前问题**

Each language tab uses identical category IDs (framework, orm, database, etc.), which can cause React key conflicts when switching tabs.

**Step 2: 添加语言前缀到 category IDs**

For each language category array (pythonCategories, goCategories, javaCategories, rustCategories, nodejsCategories), prefix the id with language code:

Example for pythonCategories (lines ~50-150):
```typescript
// Change from:
{ id: 'framework', name: 'Web框架', ... }
// To:
{ id: 'python-framework', name: 'Web框架', ... }
```

Do this for all categories in all 5 language arrays.

**Step 3: 验证修复**

Run: `bun run build`
Expected: Build successful

**Step 4: Commit**

```bash
git add src/app/backend/page.tsx
git commit -m "fix: unique category IDs across backend language tabs

- Prefix category IDs with language code (python-, go-, java-, rust-, nodejs-)
- Prevent React key conflicts when switching tabs
- Ensure proper component re-mounting per tab"
```

---

## Task 6: 最终构建验证

**Step 1: 运行完整构建**

```bash
bun run build
```

Expected: 
- Build successful
- No TypeScript errors
- No ESLint errors

**Step 2: 运行 Lint 检查**

```bash
bun run lint
```

Expected: No linting errors

**Step 3: 创建总结 Commit**

```bash
git log --oneline -10
```

Verify all commits are present and properly formatted.

---

## Testing Checklist

### Pagination Tests
- [ ] usePagination hook auto-adjusts when data.length changes
- [ ] tech-stack page resets page when searching
- [ ] tech-stack page resets page when changing category
- [ ] tech-stack page resets page when changing subcategory
- [ ] tech-stack page resets page when changing sort
- [ ] archived page has working pagination
- [ ] backend tabs switch correctly with unique IDs

### Display Tests
- [ ] TechCategoryCard shows correct colors (high=green, medium=amber, rising=purple)
- [ ] Colors match legend on all pages
- [ ] No console warnings about duplicate keys

---

## Rollback Plan

If any issues occur:

```bash
# View recent commits
git log --oneline -10

# Rollback specific commit
git revert <commit-hash>

# Or reset to before changes
git reset --hard HEAD~5  # Adjust number as needed
```

---

## Notes

- All changes are backward compatible
- No database migrations needed
- No API changes
- Focus on client-side state management fixes
