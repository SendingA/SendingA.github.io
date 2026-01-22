# News Module - Modern Design 📰

## 概述

这是一个现代化、美观的新闻展示模块，为你的个人网站提供了优雅的新闻时间线和日历筛选功能。

## ✨ 主要特性

### 1. **现代化的日历筛选器**
- 按年份和月份组织的可视化日历
- 实时显示每个月的新闻数量
- 点击月份即可快速筛选查看该月的新闻
- 渐变色按钮和流畅的悬停效果
- 响应式设计，适配各种设备

### 2. **精美的新闻时间线**
- 卡片式设计，带有优雅的阴影和悬停效果
- 左侧显示日期标记，右侧显示新闻内容
- 自动分页功能，默认显示5条最新新闻
- 标签系统，方便分类查看
- 平滑的动画效果

### 3. **分页功能**
- 自动分页，避免页面过长
- 美观的分页导航
- 可在配置中自定义每页显示的新闻数量

## 📁 文件结构

```
layouts/
├── section/
│   └── news.html                    # 新闻列表页面布局
├── shortcodes/
│   └── news_month_filter.html       # 首页日历筛选器组件
└── partials/
    └── custom_head.html             # 自定义CSS引入

assets/
└── css/
    └── custom-news.css              # 新闻模块自定义样式

content/
└── news/
    ├── _index.md                    # 新闻页面配置
    ├── 2024-03-23-jhu-visiting-researcher.md
    └── 2025-08-16-msu-phd.md
```

## 🎨 设计特点

### 配色方案
- 主色调：渐变紫色 (#667eea → #764ba2)
- 辅助色：白色卡片 + 柔和阴影
- 悬停效果：提升变换 + 阴影加深

### 交互效果
1. **日历月份按钮**
   - 默认：白色背景 + 灰色边框
   - 有新闻：渐变紫色 + 新闻数量徽章
   - 悬停：提升动画 + 阴影效果
   - 选中：绿色渐变高亮

2. **新闻卡片**
   - 悬停时上浮并加深阴影
   - 标题链接变色
   - "阅读更多"按钮带箭头动画

3. **时间线**
   - 左侧圆形日期标记
   - 垂直渐变线连接各新闻
   - 淡入动画，带延迟效果

## 🚀 使用方法

### 1. 添加新闻

在 `content/news/` 目录下创建新的markdown文件：

```markdown
---
title: 你的新闻标题
date: 2025-01-22
summary: 简短的摘要描述
authors: [admin]
tags: [Experience, Milestone, Award]
---

这里是新闻的详细内容...
```

### 2. 在首页显示新闻模块

已在 `content/_index.md` 中配置：

```yaml
- block: collection
  id: news
  content:
    title: 📰 Latest News & Updates
    subtitle: 'Stay updated with my recent activities and milestones'
    text: |-
      {{< news_month_filter >}}
    count: 5  # 首页显示的新闻数量
    filters:
      folders:
        - news
    order: desc
  design:
    view: compact
    columns: '1'
```

### 3. 独立新闻页面

访问 `/news` 路径即可查看完整的新闻列表页面，包含：
- 交互式日历筛选器
- 完整的新闻时间线
- 分页导航

### 4. 自定义配置

#### 修改分页数量

编辑 `content/news/_index.md`：

```yaml
---
title: 📰 News & Updates
type: page
summary: 你的描述
paginate: 10  # 每页显示的新闻数量，默认为 Hugo 配置中的值
---
```

或在 `config/_default/hugo.yaml` 中设置全局分页：

```yaml
paginate: 8
```

#### 修改配色方案

编辑 `assets/css/custom-news.css` 中的 CSS 变量：

```css
body {
  --news-primary-color: #667eea;     /* 主色调 */
  --news-secondary-color: #764ba2;   /* 辅助色 */
  --news-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### 修改首页显示数量

编辑 `content/_index.md` 中的 news block：

```yaml
count: 5  # 修改为你想要的数量
```

## 📱 响应式设计

- **桌面端** (>768px)：日历显示12列月份，新闻采用左右布局
- **平板端** (768px)：日历显示4列月份
- **手机端** (<576px)：日历显示3列月份，新闻卡片堆叠显示

## 🎯 功能亮点

### 日历筛选
1. 点击任意月份按钮，页面会只显示该月的新闻
2. 再次点击同一月份按钮，或点击"Show All News"，恢复显示全部
3. 月份按钮上的数字徽章显示该月有多少条新闻
4. 没有新闻的月份显示为灰色禁用状态

### 标签系统
- 每条新闻可以添加多个标签
- 标签显示为彩色徽章
- 可用于分类：Experience, Milestone, Award, Publication 等

### 自动动画
- 新闻卡片淡入动画
- 错开延迟，让页面加载更生动
- 流畅的悬停和点击效果

## 🔧 故障排除

### CSS样式未生效

确保 `layouts/partials/custom_head.html` 文件存在，内容为：

```html
<link rel="stylesheet" href="{{ "css/custom-news.css" | relURL }}" />
```

### 日历筛选器不显示

检查 `content/_index.md` 中是否包含：

```yaml
text: |-
  {{< news_month_filter >}}
```

### 分页不工作

在 `config/_default/hugo.yaml` 中添加：

```yaml
paginate: 6  # 或其他数字
```

## 🎨 自定义建议

### 更改主题色为蓝色
```css
--news-primary-color: #3b82f6;
--news-secondary-color: #2563eb;
--news-gradient: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
```

### 更改为绿色
```css
--news-primary-color: #10b981;
--news-secondary-color: #059669;
--news-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

### 更改为橙色
```css
--news-primary-color: #f59e0b;
--news-secondary-color: #d97706;
--news-gradient: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
```

## 📝 最佳实践

1. **新闻标题**：保持简洁，20-50字为宜
2. **摘要**：1-2句话概括要点
3. **标签**：不超过3个，使用统一的标签体系
4. **日期格式**：使用 YAML 格式 `YYYY-MM-DD`
5. **定期更新**：保持新闻的时效性

## 🌟 未来改进

可以考虑的功能扩展：
- [ ] 添加搜索功能
- [ ] 按标签筛选
- [ ] RSS订阅
- [ ] 社交媒体分享按钮
- [ ] 新闻归档页面

---

享受你的现代化新闻模块！如有问题，请随时修改样式和配置。
