# 网站样式与中英文内容维护

英文网站保持原有路径 `/`，中文网站位于 `/zh/`。导航栏中的 `EN / 中文` 可切换当前页面的语言；首页切换时保留正在浏览的区块。没有对应译文的页面会链接到目标语言首页。

## 内容

- 英文正文保留原内容；标题前的装饰图标已移除，首页与论文归档页补充了简短描述。首页还补充了经历与论文区块的锚点 ID。
- 中文页面与英文页面放在同一目录，在文件名中加入 `.zh`：例如 `index.md` 对应 `index.zh.md`，`_index.md` 对应 `_index.zh.md`。
- 首页区块配置在 `content/_index.md` 和 `content/_index.zh.md`；个人简介在 `content/authors/admin/`。
- 个人档案页位于 `/profile/` 和 `/zh/profile/`，集中展示个人链接、研究兴趣、教育经历与技能。页面配置在 `content/profile/`，内容仍读取对应语言的 `content/authors/admin/`，无需重复维护。
- 新增动态、项目或论文时，同时添加对应的中文文件，并保持两份文件的日期、链接、作者、DOI 等事实信息一致。
- 论文正式英文题名、作者姓名、引用资料和示例代码保留原文；说明、摘要及界面文本已翻译。
- 中英文共享照片、项目图片、简历与其他附件，无需重复上传。
- 界面短文本在 `i18n/en.yaml` 和 `i18n/zh.yaml`，导航配置在 `config/_default/menus.yaml` 和 `config/_default/languages.yaml`。
- 顶部导航暂时隐藏仍为示例内容的文章、演讲和朋友入口，页面文件继续保留。完成内容后，在上述两份导航配置中取消对应条目的注释即可恢复。

使用 Hugo 的[按文件名组织译文机制](https://gohugo.io/content-management/multilingual/#translation-by-file-name)，页面由 Hugo 直接生成；不依赖浏览器翻译服务。新增内容后需要重新构建，两种语言不会自动互译。

## 样式与交互

- 统一样式：`assets/css/site.css`。文件顶部的 CSS 变量控制背景、文字、边框与重点色；`body.dark` 定义深色模式。
- 朋友页面的基础样式：`assets/css/friends.css`。
- 语言切换、动态分页、日期筛选和相册操作：`assets/js/site.js`。
- 自定义模板放在 `layouts/`，无需修改 `modules/` 中的主题源码。
- 动态在服务器生成，分页只是浏览器增强；禁用 JavaScript 时仍可浏览全部动态和切换语言。

## 本地预览与构建

继续使用部署流程中的 **Hugo Extended 0.124.1**，并安装 Go 以解析主题依赖。

```powershell
hugo server --bind 127.0.0.1 --baseURL http://localhost:1313/
```

预览地址：英文 `http://localhost:1313/`，中文 `http://localhost:1313/zh/`。

```powershell
hugo --minify --baseURL https://sendinga.github.io/
```

生成结果在 `public/`。现有 GitHub Pages 工作流会在推送 `main` 后构建并发布两种语言。
