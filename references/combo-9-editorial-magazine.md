# Combo 9 — 编辑杂志（Editorial Magazine）

## 1. 设计理念 / 角色定义

高端品牌故事与编辑叙事：大号衬线标题、极细大写副标题、强留白（≥40%）、“出血大图 + 文字叠加”的杂志版面。每页像一本印刷精良的刊物，而不是网页。

**角色**：一位为品牌故事做版面的杂志美术总监。相信空白是内容，字体是图像，网格是节奏。

**适用场景**：品牌发布会、设计作品集、高端产品故事、创始人演讲、时尚/生活方式内容。

---

## 2. 风格约束（必须 / 禁止）

**必须**：
- 使用 3.1 节给出的编辑杂志色板。
- Display 使用 `Tiempos Headline` 或 `Oranienbaum`；Body 使用 `Satoshi`。
- 留白占每页 ≥40%。
- 引入 12 列专栏网格：标题占 7 列，正文占 5 列。
- 每页 1 张主图 + 1 句引言 + 1 段说明；或 1 个超大标题 + 1 段副文。
- 使用 `references/textures.css` 中的 `--texture-paper`。
- 使用 `references/layout-catalog.md` 中的 L01–L09 布局，并标注 `data-layout`。
- hero 页启用 WebGL fluid 背景（通过 `html-template.md` 的 WebGLBackground）。
- 使用统一排版类：`.kicker`、`.h-hero`、`.h-xl`、`.lead`、`.body`、`.meta-row`、`.big-num`、`.frame-img`、`.chrome`、`.foot`。

**禁止**：
- 纯 RGB 主色、高饱和渐变背景。
- Inter / Space Grotesk / Nunito / Orbitron 作为 Display 默认。
- 全居中 hero 布局、复制式卡片网格。
- 少于 40% 留白的拥挤版面。
- 临时发明新 class 名（优先用 `viewport-base.css` 已定义类）。

---

## 3. 色彩系统

### 3.1 编辑杂志色板

```css
:root {
  --editorial-bg:        #F7F5F0;
  --editorial-paper:     #FAF8F3;
  --editorial-ink:       #1C1C1C;
  --editorial-warm-gray: #8C8279;
  --editorial-accent:    #9A3B3B;   /* 深酒红 */

  /* Map to unified tokens */
  --bg-primary:   var(--editorial-bg);
  --bg-secondary: var(--editorial-paper);
  --text-primary: var(--editorial-ink);
  --text-secondary: var(--editorial-warm-gray);
  --accent:       var(--editorial-accent);
  --accent-on:    var(--editorial-paper);
}
```

### 3.2 主题类映射

| 主题类 | 背景 | 文字 | 用途 |
|--------|------|------|------|
| `hero light` | `--editorial-bg` + WebGL light | `--editorial-ink` | 封面/幕封/收尾 |
| `hero dark` | `--editorial-ink` + WebGL dark | `--editorial-paper` | 深色封面/大引用 |
| `light` | `--editorial-bg` | `--editorial-ink` | 数据/图文 |
| `dark` | `--editorial-ink` | `--editorial-paper` | 故事/引用/呼吸 |

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Tiempos Headline** | Pangram Pangram | `'Oranienbaum', 'Noto Serif SC', serif` |
| Body | **Satoshi** | Fontshare | `'DM Sans', 'Noto Sans SC', sans-serif` |
| Pull Quote | **Noto Serif SC** | Google Fonts | `'Oranienbaum', serif` |
| 中文正文 | **Noto Sans SC** | Google Fonts | `system-ui, sans-serif` |

```html
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Tiempos Headline', 'Oranienbaum', 'Noto Serif SC', serif;
  --font-body:    'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
  --font-quote:   'Noto Serif SC', 'Oranienbaum', serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

---

## 5. 布局模式

所有布局来自 `references/layout-catalog.md`，并标注 `data-layout`。

### 标题页（L01 Hero Cover）

- 顶部 `.chrome`：日期 + Vol 编号。
- 中间：`.kicker` + `.h-hero` + `.h-sub` + `.lead` + `.meta-row`。
- 底部 `.foot`：副说明 + 年份。
- 40% 留白，WebGL fluid 背景透出。

### 章节幕封（L02 Section Divider）

- `.kicker` + `.h-xl` + `.lead` + `.hairline.line-extend`。
- 通常使用 `hero light` 或 `hero dark`。

### 数据大字报（L03 Big Numbers）

- `.kicker` + `.big-num` + `.lead`。
- 使用 `data-animate="data"` 配方。

### 左文右图（L04 Quote + Image）

- 左侧 7 列：`.h-xl` + `.body`。
- 右侧 5 列：`.frame-img.r-16x10`。
- 使用 `data-animate="directional"`。

### 图片网格（L05 Image Grid）

- 顶部：`.kicker` + `.h-xl`。
- 中部：统一高度 `.frame-img.h-24` 网格。
- 底部：`.body` 说明。

### 流程页（L06 Pipeline）

- `.kicker` + `.h-xl` + 4 列步骤。
- 使用 `data-animate="pipeline"`。

### 大引用页（L07 Big Quote）

- `dark` 背景优先。
- `.h-xl` 级别 blockquote + `.meta-row` 来源。
- 使用 `data-animate="quote"`。

### 对比页（L08 Before/After）

- 两列布局，中间 hairline 分隔。
- 使用 `data-animate="directional"`。

### 收尾页（L09 Closing）

- `.chrome` + `.h-hero` + `.lead` + `.foot`。
- 使用 `hero dark` 或 `hero light`。

---

## 6. CSS 效果库

```css
/* 杂志纸背景与压印文字 */
.editorial-slide {
  background: var(--editorial-bg);
  color: var(--editorial-ink);
}

.letterpress {
  color: var(--editorial-ink);
  text-shadow: 0 1px 0 rgba(255,255,255,0.6), 0 -1px 0 rgba(0,0,0,0.15);
}

/* hairline 分隔线 */
.hairline {
  width: 100%; height: 1px;
  background: var(--editorial-warm-gray);
  opacity: 0.35;
}

/* 12 列专栏网格 */
.column-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 2vw, 2rem);
}
.span-7 { grid-column: span 7; }
.span-5 { grid-column: span 5; }

/* 出血图片容器 */
.bleed-image {
  width: 100%; height: 100%;
  object-fit: cover;
}

/* 引言样式 */
.pull-quote {
  font-family: var(--font-quote);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  line-height: 1.5;
  color: var(--editorial-accent);
  border-left: 1px solid var(--editorial-accent);
  padding-left: 1.5rem;
}

/* 真实扫描杂志纸纹理 */
.texture-overlay {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  opacity: 0.06; mix-blend-mode: multiply;
  background-image: var(--texture-paper);
  background-size: 200px 200px;
}

/* Hero slides transparent for WebGL */
.slide.hero {
  background: transparent;
}

.slide.hero.light,
.slide.light {
  color: var(--editorial-ink);
}

.slide.hero.dark,
.slide.dark {
  background: var(--editorial-ink);
  color: var(--editorial-paper);
}
```

---

## 7. 动画建议

| 元素 | 效果 | 时长 | 触发 |
|---|---|---|---|
| 主标题 | 从下方 30px 淡入 | 700 ms | 进入 |
| 副标题 | 从下方 20px 淡入 | 500 ms | 延迟 120 ms |
| hairline | 宽度从 0 到 100% | 600 ms | 进入 |
| 图片 | 轻微 scale(1.02→1) + 淡入 | 600 ms | 进入 |
| 正文 | 依次淡入 | 350 ms | 交错 80 ms |

使用 `data-animate` 配方：

- `hero`：封面/幕封
- `cascade`：正文页
- `quote`：大引用页
- `directional`：左文右图/对比页
- `data`：数据页
- `pipeline`：流程页

```css
@keyframes line-extend {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.line-extend { transform-origin: left; }
.slide.visible .line-extend { animation: line-extend 0.6s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .reveal, .line-extend, [data-anim] { animation: none; opacity: 1; transform: none; }
}
```

---

## 8. 完整 HTML 示例

```html
<!DOCTYPE html>
<html lang="zh" data-deck="horizontal">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editorial Magazine — 一人公司</title>
  <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --editorial-bg:        #F7F5F0;
      --editorial-paper:     #FAF8F3;
      --editorial-ink:       #1C1C1C;
      --editorial-warm-gray: #8C8279;
      --editorial-accent:    #9A3B3B;

      --bg-primary:   var(--editorial-bg);
      --bg-secondary: var(--editorial-paper);
      --text-primary: var(--editorial-ink);
      --text-secondary: var(--editorial-warm-gray);
      --accent:       var(--editorial-accent);
      --accent-on:    var(--editorial-paper);

      --font-display: 'Tiempos Headline', 'Oranienbaum', 'Noto Serif SC', serif;
      --font-body:    'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
      --font-mono:    'JetBrains Mono', monospace;

      --texture-paper: url('data:image/png;base64,REPLACE_WITH_TEXTURE_BASE64');
    }

    /* --- PASTE viewport-base.css CONTENTS HERE --- */

    body {
      font-family: var(--font-body);
      background: var(--editorial-bg);
      color: var(--editorial-ink);
    }

    .slide.hero.light,
    .slide.light {
      background: var(--editorial-bg);
      color: var(--editorial-ink);
    }

    .slide.hero.dark,
    .slide.dark {
      background: var(--editorial-ink);
      color: var(--editorial-paper);
    }

    .letterpress {
      text-shadow: 0 1px 0 rgba(255,255,255,0.6), 0 -1px 0 rgba(0,0,0,0.12);
    }

    .pull-quote {
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 2vw, 1.6rem);
      line-height: 1.6;
      color: var(--editorial-accent);
      border-left: 1px solid var(--editorial-accent);
      padding-left: 1.5rem;
    }

    /* ... paste html-template.md animation recipe CSS here ... */
  </style>
</head>
<body>
  <canvas id="bg-dark" class="bg" aria-hidden="true"></canvas>
  <canvas id="bg-light" class="bg" aria-hidden="true"></canvas>

  <div id="deck">
    <section class="slide hero light" data-layout="L01" data-animate="hero">
      <div class="texture-overlay" aria-hidden="true"></div>
      <div class="chrome">
        <div>A Talk · 2026.04.22</div>
        <div>Vol.01</div>
      </div>
      <div class="slide-content mixed-text">
        <div class="kicker" data-anim>封面故事 · Cover Story</div>
        <h1 class="h-hero letterpress" data-anim>一人公司</h1>
        <h2 class="h-sub" data-anim>被 AI 折叠的组织</h2>
        <p class="lead" style="max-width:60vw;" data-anim>
          一个 AI 创作者 —— 在 64 天里做了 11 万行代码、在 9 个平台上持续输出。
        </p>
        <div class="meta-row" data-anim>
          <span>Editorial</span><span>·</span><span>Magazine</span>
        </div>
      </div>
      <div class="foot">
        <div>一场关于 AI · 组织 · 个体的分享</div>
        <div>— 2026 —</div>
      </div>
    </section>

    <section class="slide light" data-layout="L03" data-animate="data">
      <div class="texture-overlay" aria-hidden="true"></div>
      <div class="slide-content mixed-text">
        <div class="kicker" data-anim>数据 Data</div>
        <div class="big-num" data-anim data-anim-type="number">64</div>
        <p class="lead" data-anim>天完成 11 万行代码，覆盖 9 个内容平台。</p>
      </div>
    </section>

    <section class="slide dark" data-layout="L07" data-animate="quote">
      <div class="texture-overlay" aria-hidden="true"></div>
      <div class="slide-content mixed-text">
        <div class="kicker" data-anim>Quote</div>
        <blockquote class="h-xl" style="font-family:var(--font-display);" data-anim>
          "AI 不会替代人，但会用 AI 的人会替代不会用的人。"
        </blockquote>
        <div class="meta-row" data-anim>
          <span>—</span><span>歸藏</span><span>·</span><span>一人公司</span>
        </div>
      </div>
    </section>
  </div>

  <script>
    /* --- PASTE html-template.md SlidePresentation + WebGLBackground JS here --- */
  </script>
</body>
</html>
```

---

## 9. 生图提示词库

| 场景 | 提示词 |
|---|---|
| 封面 | editorial magazine cover, large serif headline, tiny all-caps kicker, 40% white space, warm cream paper, single accent image, hairline separators |
| 内页 | 12-column editorial grid, pull quote in oxblood, generous margins, muted cream and charcoal, letterpress shadow on headline |
| 纹理 | scanned magazine paper texture, subtle fiber, warm cream tone, seamless tile, 6% opacity |

---

## 10. 代表案例与参考来源

- **The New York Times Magazine** — 大号衬线标题与强留白的典范。
- **Port Magazine / Cereal Magazine** — 高端品牌故事与出血图片的运用。
- **Pangram Pangram “Editorial New”** — Display 字体参考。
- **歸藏 “一人公司：被 AI 折叠的组织” 分享（2026-04-22）** — Guizang 电子杂志风横向 PPT 参考。
