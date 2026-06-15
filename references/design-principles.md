# Design Principles

SlideCraft 的通用设计铁律。所有风格组合、HTML 输出和修改必须遵守。

---

## 1. 升级后的 8 条设计铁律

1. **字体优先** — 每个组合必须使用 1 个高度个性的 Display 字体 + 1 个可读 Body 字体。禁止默认使用 Inter、Space Grotesk、Nunito、Orbitron 作为 Display。
2. **色彩降调** — 禁止纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。所有主色必须带灰度或颜料感。
3. **真实纹理** — 用真实扫描纹理 PNG（内联 data-uri）替代 SVG `feTurbulence` 噪点。
4. **焦点控制** — 每页幻灯片只允许 1 个视觉锚点；标题与正文字号比 ≥ 5:1。
5. **动画克制** — 默认动画幅度降低 50%，持续时长控制在 200–600 ms；所有动画必须提供 `prefers-reduced-motion` 降级。
6. **中文优化** — 中文标题避免过大负 letter-spacing；中西文混排自动增加 `0.125em` 间距（使用 `.mixed-text` 类）。
7. **去网页化** — 版式必须符合幻灯片叙事逻辑，而非营销落地页布局。
8. **零依赖保留** — 所有 CSS/JS 必须内联，不引入外部构建工具或 npm 依赖；字体仅通过 Fontshare / Google Fonts CDN 引入。

---

## 2. Guizang 升级新增 6 条原则

受 `guizang-ppt-skill` 启发，为 SlideCraft 引入横向翻页、WebGL 背景、杂志级元数据与统一排版层级后，新增以下原则：

1. **横向可选** — 默认保持纵向 `scroll-snap`，横向翻页通过 `data-deck="horizontal"` 显式开启，不要默认改变现有生成物。
2. **WebGL 受控** — WebGL 背景只在 hero 页透出；一屏最多一个 active canvas；低功耗模式彻底停止 RAF。
3. **统一排版层级** — 所有 combo 共享 `.kicker`、`.h-hero`、`.h-xl`、`.lead`、`.body`、`.meta-row`、`.big-num`、`.frame-img` 等类，禁止随意发明新类名。
4. **杂志级元数据** — Hero/杂志风格页面使用 `.chrome`（顶部元数据）+ `.foot`（底部页码/说明），普通内容页不强求。
5. **主题节奏** — 每页必须带 `light` / `dark` / `hero light` / `hero dark` 之一；禁止连续 3 页同主题；每 3–4 页插入 1 个 hero 页。
6. **布局目录优先** — 优先从 `references/layout-catalog.md` 选用标准布局（L01–L09）并标注 `data-layout`，不随意发明结构。

---

## 3. 禁止默认使用的"AI 感"元素

**字体**: Inter、Roboto、Arial、system fonts 作为 Display；Space Grotesk / Nunito / Orbitron 作为默认 Display。

**颜色**: `#6366f1`（泛用靛蓝）、高饱和紫/粉渐变铺满背景、纯 RGB 主色。

**布局**: 全部居中、通用 hero 区、复制粘贴式卡片网格、无焦点堆砌。

**质感**: SVG `feTurbulence` 噪点动画、无限循环闪烁、大面积持续抖动。

---

## 4. 创意诠释原则

- 创造性地诠释上下文，做出真正为演示主题设计的意外选择。
- 在明暗主题、不同字体、不同美学之间变化；避免收敛到常见选择。
- 每个风格组合必须像"定制品牌模板"，而非"换色 PPT"。

---

## 5. 字体使用规范

| 层级 | 要求 | 来源 |
|---|---|---|
| Display | 高辨识度、个性强烈 | Fontshare 或 Google Fonts |
| Body | 可读性优先，可与 Display 同族但字重更低 | Fontshare 或 Google Fonts |
| Data / Code | 等宽 | JetBrains Mono 等 |
| 中文正文 | 无衬线优先，字号 ≥ 18 px | Noto Sans SC |
| 中文标题（高端品牌） | 衬线可用，字重 600–700，避免 200 | Noto Serif SC |

**Fontshare 国内降级策略**：所有 Fontshare 字体必须提供 Google Fonts 降级（例如 Clash Display → Anton，Satoshi → DM Sans / Sora）。

---

## 6. 色彩使用规范

- 主色必须降调（带灰度/颜料感）。
- 每页最多 3 种颜色：主色 60%、辅色 30%、点缀 10%。
- 撞色仅用于视觉锚点和关键数据，不得铺满背景或正文。
- 深色背景使用低饱和暖黑/冷黑，避免纯 `#000000`。

---

## 7. 纹理与质感规范

- 所有纹理以内联 PNG data-uri 形式存在，零外部依赖。
- 推荐纹理类型：concrete、paper、grain、leather、washi、film、canvas。
- 纹理层通常使用 `mix-blend-mode: multiply` 或 `overlay`，透明度 0.04–0.10。
- 玻璃质感使用"磨砂亚克力"：渐变背景 + `backdrop-filter: blur() saturate()` + 顶部高光边框 + 内阴影。

---

## 8. 动画与交互规范

- 入场动画 200–600 ms，使用 `cubic-bezier(0.16, 1, 0.3, 1)` 或 `cubic-bezier(0.4, 0, 0.2, 1)`。
- 避免无限循环动画；装饰性循环动画（如漂浮光斑）周期应 ≥ 8 s 且极低幅度。
- 触发一次的效果不重复播放。
- 必须为 `prefers-reduced-motion: reduce` 提供无动画/低动画降级。
- 提供 `B` 键手动低功耗模式，停止 WebGL/动画并把内容 reveal 到最终态。

---

## 9. 幻灯片叙事规范

- 每页 1 个核心信息；标题页 = 1 主标题 + 1 副标题。
- 内容页：4–6 个要点或 3 个卡片。
- 图片页：1 张主图 + 最多 1 句说明。
- 避免在单页内同时展示图表、列表、引用和多个装饰元素。

---

## 10. 视口适配规范

- 每页 `.slide` 必须 `height: 100vh; height: 100dvh; overflow: hidden;`。
- 所有尺寸使用 `clamp()`，不使用固定 px/rem。
- 内容容器使用 `fitSlideContent()` 自动检测溢出并缩放。
- 图片优先使用 `.frame-img.r-*` 标准比例系统，保持 `max-height` 约束。

---

## 11. 风格隔离原则

- Guizang 风格元素（WebGL、杂志 chrome、衬线大字）主要留给 Editorial Magazine、Neo-Minimalism、Wabi-Sabi 等留白风格。
- Neo-Brutalism、Retro-Futurism、Memphis 等风格不要强行加 WebGL 或杂志 chrome。
- 不同 combo 可覆盖共享 token，但不得污染其他 combo 的默认视觉。

---

*来源：SlideCraft SKILL.md + Falcon-Obsidian-Black-Widow 设计系统升级方案 + Guizang 横向翻页网页 PPT 经验*
