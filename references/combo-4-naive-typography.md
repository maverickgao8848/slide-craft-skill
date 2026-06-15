# 组合4：天真实验 (Naive + Typography)

> 升级后风格：手绘感 · 离格排版 · 真诚不完美

---

## 1. 设计理念 / 角色定义

**天真实验风格专家**：融合 Naive Design 的“故意不完美”与 Experimental Typography 的“打破网格”。

- **视觉人格**：真诚、童趣、温暖、略带反完美的手工感。
- **核心信条**：让不完美自己说话；规则用来有意地打破；每处“粗糙”都应是深思熟虑的选择。
- **一页一锚点**：每页只允许 1 个主导视觉元素（大标题、贴纸组或一句引言），其余全部留白退后。

---

## 2. 风格约束（必须 / 禁止）

### 必须

- [x] 使用手绘/手作感视觉语言：不规则边框、轻微抖动线条、硬边阴影。
- [x] 色彩使用降调后的童真色板，禁止纯 RGB 主色。
- [x] 元素错位角度控制在 `±3°`，每页错位元素不超过 3 个。
- [x] 保留充足留白，避免“贴满”的廉价感。
- [x] 正文清晰可读；装饰性文字可以极端，正文必须克制。
- [x] 每页仅 1 个视觉锚点；标题:正文字号比 ≥ 5:1。
- [x] 中西文混排使用 `.mixed-text`，英文片段包在 `<span lang="en">` 内。
- [x] 动画时长 200–600 ms，单次触发，提供 `prefers-reduced-motion` 降级。
- [x] 引用 `textures.css` 中的真实纸纹理变量作为背景质感。

### 禁止

- [ ] Display 默认使用 Inter / Space Grotesk / Nunito / Orbitron。
- [ ] 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
- [ ] 复杂渐变、光泽高光、玻璃拟态、CSS filter（除 Rough 风 SVG filter 外）。
- [ ] 完美的几何对称与严格网格对齐。
- [ ] 持续无限抖动（wobble infinite）。
- [ ] 引入外部 Rough.js 脚本；手绘效果必须用原生 SVG filter / CSS 实现。
- [ ] 在 markdown 中内联 base64 纹理。

---

## 3. 色彩系统

```css
:root {
  --naive-cream: #F7F3E8;
  --naive-paper: #FDF8EC;
  --naive-sand: #EDE5D3;
  --naive-charcoal: #3A3631;
  --naive-coral: #E07A5F;
  --naive-mint: #81B29A;
  --naive-yellow: #F2CC8F;
  --naive-line: #3A3631;
}
```

- 背景 60%：`--naive-cream` / `--naive-paper`
- 文字/线条 30%：`--naive-charcoal`
- 点缀 10%：`--naive-coral` / `--naive-mint` / `--naive-yellow`

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Amatic SC** | Google Fonts | 'Caveat', cursive |
| Body / 副标题 | **Patrick Hand** | Google Fonts | 'Caveat', 'Noto Sans SC', cursive |
| 中文正文 | **Noto Sans SC** | Google Fonts | 'PingFang SC', 'Microsoft YaHei', sans-serif |
| 数据 | **JetBrains Mono** | Google Fonts | monospace |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Caveat:wght@400;700&family=Patrick+Hand&family=Noto+Sans+SC:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Amatic SC', 'Caveat', cursive;
  --font-body: 'Patrick Hand', 'Caveat', 'Noto Sans SC', 'PingFang SC', cursive;
  --font-mono: 'JetBrains Mono', monospace;
}

.mixed-text [lang="en"] {
  margin-inline: 0.125em;
}
```

---

## 5. 布局模式

```
┌────────────────────────────────────────┐
│                                        │
│     ╭────────────────────╮             │
│     │  倾斜大标题（锚点） │ ← ±3°      │
│     ╰────────────────────╯             │
│                                        │
│   ┌────────┐   ┌────────┐             │
│   │ 贴纸1  │   │ 贴纸2  │  ← 错位     │
│   │ -2°    │   │ 1°     │             │
│   └────────┘   └────────┘             │
│                                        │
│        大面积奶油留白                  │
│                                        │
└────────────────────────────────────────┘
```

- 贴纸布局模拟真实桌面拼贴：部分翘起、部分胶带固定。
- 文字可轻微溢出容器边界，但不得超出 `100vh` 幻灯片。
- 每页错位元素 ≤ 3 个。

---

## 6. CSS 效果库

### 手绘 Rough 边框（零依赖 SVG filter）

```html
<svg style="position:absolute;width:0;height:0;" aria-hidden="true">
  <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
  </filter>
</svg>
```

```css
.rough-box {
  filter: url(#rough);
}
```

### 手捏 border-radius 变体

```css
.wobbly-soft {
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
}

.wobbly-wild {
  border-radius: 95% 4% 92% 5% / 4% 95% 6% 95%;
}
```

### 硬边手绘贴纸

```css
.sticker {
  position: relative;
  padding: 1.25rem 1.75rem;
  background: var(--naive-yellow);
  border: 3px solid var(--naive-line);
  box-shadow: 4px 4px 0 var(--naive-line);
  transform: rotate(-2deg);
  transition: transform 0.25s ease;
}

.sticker:hover {
  transform: rotate(0deg) translateY(-2px);
}
```

### 胶带固定效果

```css
.tape {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px;
  height: 24px;
  background: rgba(255, 255, 255, 0.55);
  border: 2px solid var(--naive-line);
  opacity: 0.8;
}
```

### 纸张纹理引用

```css
.paper-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--texture-paper); /* 定义于 textures.css */
  opacity: 0.06;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

---

## 7. 动画建议

| 动画 | 时长 | 触发 | 说明 |
|---|---|---|---|
| `stick-on` 贴纸贴上 | 400 ms | 进入单次 | scale 0.5→1 + 旋转回正 |
| `micro-wobble` 悬停 | 300 ms | hover 单次 | ±1° 微抖 |
| `title-pop` 标题入场 | 500 ms | 进入单次 | translateY + 淡入 |

```css
@keyframes stick-on {
  0%   { opacity: 0; transform: scale(0.6) rotate(-8deg); }
  60%  { transform: scale(1.05) rotate(1deg); }
  100% { opacity: 1; transform: scale(1) rotate(-2deg); }
}

.stick-in {
  animation: stick-on 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.micro-wobble:hover {
  animation: micro-wobble 0.3s ease-in-out;
}

@keyframes micro-wobble {
  0%, 100% { transform: rotate(-2deg); }
  50%      { transform: rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .stick-in, .micro-wobble, .title-pop {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## 8. 完整 HTML 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>天真实验 · Naive Typography</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Caveat:wght@400;700&family=Patrick+Hand&family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --naive-cream: #F7F3E8;
      --naive-paper: #FDF8EC;
      --naive-sand: #EDE5D3;
      --naive-charcoal: #3A3631;
      --naive-coral: #E07A5F;
      --naive-mint: #81B29A;
      --naive-yellow: #F2CC8F;
      --naive-line: #3A3631;

      --font-display: 'Amatic SC', 'Caveat', cursive;
      --font-body: 'Patrick Hand', 'Caveat', 'Noto Sans SC', 'PingFang SC', cursive;

      /* --texture-paper 由 textures.css 提供 */
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; }

    body {
      font-family: var(--font-body);
      color: var(--naive-charcoal);
      background: var(--naive-cream);
      overflow-x: hidden;
    }

    .mixed-text [lang="en"] { margin-inline: 0.125em; }

    .slide {
      position: relative;
      width: 100%;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8vw;
    }

    .slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--texture-paper);
      opacity: 0.05;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    /* Slide 1: 标题页 */
    .slide-title {
      text-align: center;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(6rem, 14vw, 9rem);
      line-height: 0.95;
      color: var(--naive-charcoal);
      display: inline-block;
      transform: rotate(-2deg);
      position: relative;
      animation: title-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .hero-title::before {
      content: attr(data-text);
      position: absolute;
      top: 6px;
      left: 8px;
      color: var(--naive-yellow);
      z-index: -1;
    }

    .hero-subtitle {
      font-family: var(--font-body);
      font-size: clamp(0.95rem, 2vw, 1.2rem);
      margin-top: 1.5rem;
      color: var(--naive-coral);
      transform: rotate(1deg) translateX(1rem);
    }

    @keyframes title-pop {
      0%   { opacity: 0; transform: rotate(-4deg) translateY(20px); }
      100% { opacity: 1; transform: rotate(-2deg) translateY(0); }
    }

    /* Slide 2: 贴纸网格（单页锚点） */
    .sticker-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      max-width: 900px;
    }

    .sticker {
      position: relative;
      width: 260px;
      padding: 1.5rem;
      background: var(--naive-paper);
      border: 3px solid var(--naive-line);
      box-shadow: 5px 5px 0 var(--naive-line);
      opacity: 0;
      animation: stick-on 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .sticker { --r: -2deg; }
    .sticker:nth-child(1) { --r: -2deg; border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; animation-delay: 0.1s; background: var(--naive-paper); }
    .sticker:nth-child(2) { --r: 1deg; border-radius: 20px 5px 30px 10px; animation-delay: 0.2s; background: var(--naive-yellow); }
    .sticker:nth-child(3) { --r: -1deg; border-radius: 95% 4% 92% 5% / 4% 95% 6% 95%; animation-delay: 0.3s; background: var(--naive-mint); }

    .sticker:hover { animation: micro-wobble 0.3s ease-in-out; }

    .tape {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%) rotate(-2deg);
      width: 80px;
      height: 24px;
      background: rgba(255,255,255,0.55);
      border: 2px solid var(--naive-line);
      opacity: 0.8;
    }

    .sticker h3 {
      font-family: var(--font-display);
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .sticker p {
      font-size: 1.1rem;
      line-height: 1.45;
    }

    @keyframes stick-on {
      0%   { opacity: 0; transform: scale(0.6) rotate(-8deg); }
      60%  { opacity: 1; transform: scale(1.05) rotate(1deg); }
      100% { opacity: 1; transform: scale(1) rotate(var(--r)); }
    }

    @keyframes micro-wobble {
      0%, 100% { transform: rotate(var(--r)); }
      50%      { transform: rotate(0deg); }
    }

    /* Slide 3: 引言贴纸 */
    .quote-sticker {
      position: relative;
      max-width: 560px;
      padding: 2.5rem;
      background: var(--naive-coral);
      border: 3px solid var(--naive-line);
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 6px 6px 0 var(--naive-line);
      transform: rotate(1deg);
      font-size: clamp(1.4rem, 3vw, 2rem);
      line-height: 1.4;
      opacity: 0;
      animation: stick-on 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
    }

    .quote-sticker cite {
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
      color: var(--naive-charcoal);
      transform: rotate(-1deg);
    }

    /* 装饰性描边文字（非锚点，仅氛围） */
    .stroke-deco {
      position: absolute;
      font-family: var(--font-display);
      font-size: 6rem;
      color: transparent;
      -webkit-text-stroke: 2px var(--naive-line);
      opacity: 0.08;
      pointer-events: none;
    }

    .stroke-deco.top-right { top: 8%; right: -2%; transform: rotate(12deg); }

    @media (prefers-reduced-motion: reduce) {
      .hero-title, .sticker, .quote-sticker {
        animation: none;
        opacity: 1;
        transform: none;
      }
      .sticker:hover { animation: none; }
    }
  </style>
</head>
<body>
  <svg style="position:absolute;width:0;height:0;" aria-hidden="true">
    <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <section class="slide slide-title">
    <div class="stroke-deco top-right">NAIVE</div>
    <h1 class="hero-title mixed-text" data-text="天真实验">天真实验</h1>
    <p class="hero-subtitle">Naive Design + <span lang="en">Experimental Typography</span></p>
  </section>

  <section class="slide">
    <div class="sticker-grid">
      <div class="sticker">
        <div class="tape"></div>
        <h3>手绘感</h3>
        <p>不规则边框与抖动线条，传递人性的温度。</p>
      </div>
      <div class="sticker">
        <div class="tape"></div>
        <h3>离格排版</h3>
        <p>打破网格，让文字在留白中自由呼吸。</p>
      </div>
      <div class="sticker">
        <div class="tape"></div>
        <h3>真诚不完美</h3>
        <p>每个错位都是深思熟虑的选择。</p>
      </div>
    </div>
  </section>

  <section class="slide">
    <blockquote class="quote-sticker">
      “完美不是目标，真诚才是。让不完美自己说话。”
      <cite>— 天真实验设计哲学</cite>
    </blockquote>
  </section>
</body>
</html>
```

---

## 9. 生图提示词库

```
naive hand-drawn doodle background, cream paper texture,
wobbly black outlines, muted coral and mint accents,
childlike simplicity, generous white space, flat design,
no gradients, no drop shadows
```

```
experimental off-grid typography layout, tilted headlines,
scattered sticker cards, hand-taped corners,
pastel cream paper, imperfect alignment,
anti-perfection aesthetic, editorial collage
```

```
playful sticker elements, doodle arrows, wavy underlines,
marker pen icons, uneven borders, warm charcoal lines,
naive design system, paper craft feel
```

---

## 10. 代表案例与参考来源

- **Kittl Little Jimmy** — 儿童手绘元素库，Naive 美学参考。
- **Anthropic** — 技术品牌中的手绘插画 + 简约排版。
- **Gumroad** — 贴纸式卡片与手绘图标。
- **Stripe** — 实验性排版与手绘元素结合。
- **技术参考**：CSS-Tricks “Sketchy Avatars with CSS clip-path”；MDN `feTurbulence` / `feDisplacementMap`。

---

*文档版本：2.0 | 基于 Falcon-Obsidian-Black-Widow 设计系统升级*
