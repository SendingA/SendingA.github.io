# News Module - Modern Compact Design 📰

## 概述

这是一个现代化、简洁的新闻展示模块，默认以时间线形式展示新闻列表，通过点击日历图标按钮展开高级筛选功能，支持按月份和具体日期进行筛选。

## ✨ 主要特性

### 1. **简洁的默认视图**
- 默认展示最新的新闻列表，无大型日历占据空间
- 清爽的时间线布局
- 自动分页功能
- 响应式设计

### 2. **可折叠的日历筛选器**
- 默认隐藏，不占用页面空间
- 点击"Filter by Date"按钮展开日历
- 可以快速关闭日历筛选器
- 支持按月份和具体日期筛选

### 3. **智能筛选功能**
- **按月份筛选**：点击月份查看该月所有新闻
- **按日期筛选**：选择月份后，展开日期选择器，可精确到某一天
- **一键清除**：快速返回显示所有新闻
- 实时显示筛选状态和新闻数量

### 4. **首页简化展示**
- 首页只显示一个"View Full News Archive"按钮
- 点击跳转到完整的news页面
- 保持首页简洁美观

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

### 界面布局
1. **顶部筛选栏**（默认视图）
   - 左侧："Filter by Date"按钮（点击展开日历）
   - 右侧：筛选状态显示
   - 当有筛选时显示"Clear Filter"按钮

2. **可折叠日历区域**（点击展开）
   - 按年份分组的月份网格
   - 每个月份显示新闻数量
   - 选中月份后展开日期选择器
   - 可以精确选择某一天

3. **新闻时间线**（主内容区）
   - 左侧：圆形日期标记（日/月/年）
   - 右侧：新闻卡片内容
   - 底部：分页导航

### 配色方案
- 主色调：渐变紫色 (#667eea → #764ba2)
- 筛选栏：浅灰色背景 (#f8f9fa)
- 选中状态：绿色渐变 (#28a745 → #20c997)
- 卡片：白色 + 柔和阴影

### 交互效果
1. **日历按钮**
   - 点击展开/收起日历
   - 月份按钮选中变为绿色
   - 日期按钮hover和选中效果

2. **筛选状态**
   - 实时显示当前筛选的月份或日期
   - 新闻数量徽章显示可见新闻数
   - 一键清除所有筛选

3. **新闻卡片**
   - 悬停时上浮并加深阴影
   - 流畅的过渡动画

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

**首页只显示简洁的按钮**，点击跳转到完整news页面。

### 3. 使用筛选功能

**在 `/news` 页面：**

1. **查看所有新闻**
   - 默认视图显示最新的新闻列表
   - 通过分页浏览更多

2. **按月份筛选**
   - 点击"Filter by Date"按钮展开日历
   - 点击任意有新闻的月份（显示数量徽章）
   - 查看该月的所有新闻
   - 日期选择器会自动展开

3. **按具体日期筛选**
   - 在选中月份后，日期选择器会显示
   - 点击具体日期数字
   - 只显示该日期的新闻

4. **清除筛选**
   - 点击"Clear Filter"按钮
   - 或点击日历关闭按钮
   - 返回显示所有新闻

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

### 日历筛选系统
1. **默认隐藏** - 不占用页面空间，保持界面简洁
2. **一键展开** - 点击按钮即可显示完整日历
3. **月份筛选** - 快速查看某个月的所有新闻
4. **日期精确筛选** - 可以精确到某一天的新闻
5. **智能日期选择器** - 只显示有新闻的日期
6. **状态提示** - 实时显示当前筛选条件和新闻数量

### 用户体验优化
- **简洁首页** - 首页只有一个按钮，不显示大日历
- **快速访问** - 点击按钮跳转到完整news页面
- **清晰的视觉反馈** - 筛选状态一目了然
- **一键重置** - 快速清除所有筛选条件
- **流畅动画** - 所有交互都有平滑过渡效果

### 技术特点
- 客户端筛选，无需刷新页面
- 支持嵌套筛选（月份 → 日期）
- 自动隐藏没有新闻的日期
- 响应式设计，完美适配移动端

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
