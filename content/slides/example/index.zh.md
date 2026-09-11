---
title: 幻灯片
summary: 介绍如何使用 Hugo Blox Builder 的幻灯片功能。
authors: []
tags: []
categories: []
date: '2019-02-05T00:00:00Z'
slides:
  theme: black
  highlight_style: dracula
---
# 使用 Hugo Blox Builder 和 Markdown 创建幻灯片

[Hugo Blox Builder](https://hugoblox.com/) | [文档](https://docs.hugoblox.com/content/slides/)

---

## 功能

- 高效地使用 Markdown 编写幻灯片
- 三合一：创建、演示和发布幻灯片
- 支持演讲者备注
- 适合移动设备的幻灯片

---

## 操作

- 下一页： `Right Arrow` or `Space`
- 上一页： `Left Arrow`
- 开始： `Home`
- 结束： `End`
- 概览： `Esc`
- 演讲者备注： `S`
- 全屏： `F`
- 缩放： `Alt + Click`
- [导出 PDF](https://revealjs.com/pdf-export/)

---

## 代码高亮

行内代码： `variable`

代码块：

```python
porridge = "blueberry"
if porridge == "blueberry":
    print("Eating...")
```

---

## 数学公式

行内公式： $x + y = z$

公式块：

$$
f\left( x \right) = \;\frac{{2\left( {x + 4} \right)\left( {x - 4} \right)}}{{\left( {x + 4} \right)\left( {x + 1} \right)}}
$$

---

## 分步显示

让内容逐步出现

```
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} **Two** {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

按 `Space` 播放！

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} **Two** {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}

---

分步显示支持两个可选参数：

- `class`：使用自定义样式（需在 CSS 中定义）
- `weight`：设置内容的出现顺序

---

## 演讲者备注

为演示添加演讲者备注

```markdown
{{%/* speaker_note */%}}

- 只有演讲者可以阅读这些备注
- 按 `S` 键查看
  {{%/* /speaker_note */%}}
```

按 `S` 键查看演讲者备注！

{{< speaker_note >}}

- 只有演讲者可以阅读这些备注
- 按 `S` 键查看
  {{< /speaker_note >}}

---

## 主题

- black: 黑色背景、白色文字、蓝色链接（默认）
- white: 白色背景、黑色文字、蓝色链接
- league: 灰色背景、白色文字、蓝色链接
- beige: 米色背景、深色文字、棕色链接
- sky: 蓝色背景、细深色文字、蓝色链接

---

- night: 黑色背景、粗白色文字、橙色链接
- serif: 卡布奇诺色背景、灰色文字、棕色链接
- simple: 白色背景、黑色文字、蓝色链接
- solarized: 奶油色背景、深绿色文字、蓝色链接

---

{{< slide background-image="/media/boards.jpg" >}}

## 自定义幻灯片

定制幻灯片样式与背景

```markdown
{{</* slide background-image="/media/boards.jpg" */>}}
{{</* slide background-color="#0000FF" */>}}
{{</* slide class="my-style" */>}}
```

---

## 自定义 CSS 示例

将标题设为海军蓝色。

创建 `assets/css/reveal_custom.css`，内容如下：

```css
.reveal section h1,
.reveal section h2,
.reveal section h3 {
  color: navy;
}
```

---

# 有问题？

[提问](https://discord.gg/z8wNYzb)

[文档](https://docs.hugoblox.com/content/slides/)
