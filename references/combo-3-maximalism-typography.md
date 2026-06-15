# 组合3：极繁实验（Maximalism + Typography）

## 1. 设计理念 / 角色定义

**设计理念**：以字体为绝对主角，通过超大尺度、出血、叠印和不对称网格制造“编辑爆炸”。每页只设 1 个主导文字元素（占 50–70% 面积），其余信息作为辅助层存在。色彩克制在 3 种以内，用低饱和颜料感避免廉价彩虹渐变。

**角色定义**：

| 属性 | 描述 |
|------|------|
| 核心气质 | 大胆张扬、视觉冲击、不拘一格 |
| 情感基调 | 兴奋、活力、自由、打破常规 |
| 适用场景 | 创意机构、音乐/艺术平台、时尚品牌、活动宣传、个人作品集 |
| 品牌人格 | 特立独行的艺术家、叛逆者、潮流引领者 |
| 用户感受 | “这很酷”、“从没见过这样的设计”、“充满能量” |

## 2. 风格约束（必须 / 禁止）

### 必须

1. 每页定义 1 个主导文字元素，占 50–70% 面积。
2. 每页最多 3 种颜色：主色 60%、辅色 30%、点缀 10%。
3. 使用 12 列不对称网格（5:3:4、7:5 等）。
4. Display 使用 `Druk Wide` / `Formula Condensed`，降级到 `Clash Display`。
5. Body 使用 `Neue Montreal` / `Satoshi`。
6. Script Accent 仅允许一处使用 `Permanent Marker`。
7. 出血、叠印、裁切效果每页最多 2 种。
8. 中西文混排使用 `.mixed-text`。
9. 动画时长 200–600 ms，提供 `prefers-reduced-motion` 降级。

### 禁止

1. 同时使用衬线 + 像素 + 手写 + 等宽作为 display。
2. 高饱和彩虹渐变作为文字或背景主色。
3. 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
4. SVG `feTurbulence` 作为纹理。
5. 每页颜色超过 3 种。
6. Inter / Space Grotesk / Nunito / Orbitron 作为默认 Display。

## 3. 色彩系统

```css
:root {
  --maxi-black: #0F0F0F;
  --maxi-cream: #F4F1EA;
  --maxi-pink: #D65A7A;    /* 降调电光粉 */
  --maxi-orange: #E08E45;  /* 陶土橙 */
  --maxi-yellow: #E8C547;  /* 芥末黄 */
  --maxi-green: #5A9A7F;   /* 鼠尾草绿 */
  --maxi-blue: #4A7C9B;    /* 钢蓝 */
  --maxi-purple: #7D6B9E;  /* 灰紫 */
}
```

## 4. 字体方案

- **Display**：`Druk Wide` / `Formula Condensed` / `Clash Display`（Fontshare）
- **Body**：`Neue Montreal` / `Satoshi`
- **Script Accent**：`Permanent Marker`（仅一处）
- **Data**：`JetBrains Mono`
- **中文**：`Noto Sans SC`

```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Druk Wide', 'Formula Condensed', 'Clash Display', sans-serif;
  --font-body: 'Neue Montreal', 'Satoshi', 'Noto Sans SC', sans-serif;
  --font-script: 'Permanent Marker', cursive;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 5. 布局模式

```css
/* 12 列编辑网格 */
.maxi-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(0.75rem, 1.5vw, 1.5rem);
  padding: clamp(1.5rem, 4vw, 4rem);
  height: 100%;
  align-content: center;
}

/* 不对称比例 */
.maxi-span-7 { grid-column: span 7; }
.maxi-span-5 { grid-column: span 5; }
.maxi-span-5-3-4 { grid-column: span 5; }
.maxi-span-3 { grid-column: span 3; }
.maxi-span-4 { grid-column: span 4; }

/* 主导文字层 */
.maxi-hero-type {
  grid-column: 1 / -1;
  font-size: clamp(4rem, 14vw, 11rem);
  line-height: 0.85;
  letter-spacing: -0.02em;
  z-index: 2;
}

/* 出血容器 */
.maxi-bleed {
  margin-left: -4vw;
  margin-right: -4vw;
}
```

## 6. CSS 效果库

### 渐变文字（subtle）

```css
.maxi-gradient-text {
  font-family: var(--font-display);
  font-weight: 700;
  background: linear-gradient(135deg, var(--maxi-pink), var(--maxi-orange));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 描边文字

```css
.maxi-outline-text {
  font-family: var(--font-display);
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px var(--maxi-cream);
}
```

### 叠印文字

```css
.maxi-overprint {
  position: relative;
  display: inline-block;
}

.maxi-overprint::before,
.maxi-overprint::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}

.maxi-overprint::before {
  color: var(--maxi-pink);
  z-index: -1;
  transform: translate(-4px, -2px);
  opacity: 0.85;
}

.maxi-overprint::after {
  color: var(--maxi-blue);
  z-index: -2;
  transform: translate(4px, 2px);
  opacity: 0.75;
}
```

### 胶带/撕边装饰

```css
.maxi-tape {
  position: absolute;
  width: clamp(80px, 12vw, 160px);
  height: 28px;
  background: rgba(232, 197, 71, 0.85);
  transform: rotate(-12deg);
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.maxi-torn-edge {
  clip-path: polygon(0% 0%, 100% 2%, 98% 100%, 2% 98%);
}
```

### 真实纹理层

```css
.texture-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.07;
  mix-blend-mode: multiply;
  background-image: var(--texture-paper);
  background-size: 200px 200px;
}
```

## 7. 动画建议

| 元素 | 动画 | 时长 | 说明 |
|------|------|------|------|
| 主导文字 | 从左侧 30 px 滑入 + 透明度 | 500 ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 辅助文字 | 错位淡入 | 400 ms | delay 0.1–0.3 s |
| 装饰胶带 | 轻微旋转入场 | 300 ms | 一次性 |
| 悬停卡片 | 轻微上浮 + 阴影 | 250 ms | 非必须 |

```css
@keyframes maxi-enter-left {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.reveal {
  opacity: 0;
  animation: maxi-enter-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.reveal:nth-child(2) { animation-delay: 0.1s; }
.reveal:nth-child(3) { animation-delay: 0.2s; }
.reveal:nth-child(4) { animation-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.2s !important; }
  .reveal { opacity: 1; transform: none; }
}
```

## 8. 完整 HTML 示例

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>极繁实验 Maximalism + Typography</title>
  <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --maxi-black: #0F0F0F;
      --maxi-cream: #F4F1EA;
      --maxi-pink: #D65A7A;
      --maxi-orange: #E08E45;
      --maxi-yellow: #E8C547;
      --maxi-green: #5A9A7F;
      --maxi-blue: #4A7C9B;
      --maxi-purple: #7D6B9E;
      --font-display: 'Druk Wide', 'Formula Condensed', 'Clash Display', sans-serif;
      --font-body: 'Neue Montreal', 'Satoshi', 'Noto Sans SC', sans-serif;
      --font-script: 'Permanent Marker', cursive;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-body);
      background: var(--maxi-black);
      color: var(--maxi-cream);
      overflow-x: hidden;
    }

    .slide {
      position: relative;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding: clamp(1.5rem, 4vw, 4rem);
    }

    .texture-overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      opacity: 0.07;
      mix-blend-mode: multiply;
      background-image: var(--texture-paper);
      background-size: 200px 200px;
    }

    .slide-content {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 1400px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    .maxi-hero-type {
      font-family: var(--font-display);
      font-size: clamp(4rem, 14vw, 11rem);
      font-weight: 700;
      line-height: 0.85;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      margin-left: -0.05em;
    }

    .maxi-gradient-text {
      background: linear-gradient(135deg, var(--maxi-pink), var(--maxi-orange));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .maxi-outline-text {
      color: transparent;
      -webkit-text-stroke: 2px var(--maxi-cream);
    }

    .maxi-overprint {
      position: relative;
      display: inline-block;
    }

    .maxi-overprint::before,
    .maxi-overprint::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      text-transform: inherit;
      letter-spacing: inherit;
      line-height: inherit;
    }

    .maxi-overprint::before {
      color: var(--maxi-pink);
      z-index: -1;
      transform: translate(-4px, -2px);
      opacity: 0.85;
    }

    .maxi-overprint::after {
      color: var(--maxi-blue);
      z-index: -2;
      transform: translate(4px, 2px);
      opacity: 0.75;
    }

    .maxi-script-accent {
      font-family: var(--font-script);
      font-size: clamp(1.25rem, 2.5vw, 2rem);
      color: var(--maxi-yellow);
      transform: rotate(-3deg);
      display: inline-block;
      margin-top: 1rem;
    }

    .maxi-body {
      font-family: var(--font-body);
      font-size: clamp(0.875rem, 1.3vw, 1.1rem);
      line-height: 1.5;
      max-width: 55ch;
      margin-top: 2rem;
      color: rgba(244, 241, 234, 0.8);
    }

    .maxi-mono {
      font-family: var(--font-mono);
      font-size: clamp(0.75rem, 1vw, 0.875rem);
      color: var(--maxi-green);
      margin-bottom: 1rem;
      letter-spacing: 0.05em;
    }

    .maxi-tape {
      position: absolute;
      top: 8%;
      right: 10%;
      width: clamp(80px, 12vw, 160px);
      height: 28px;
      background: rgba(232, 197, 71, 0.85);
      transform: rotate(-12deg);
      mix-blend-mode: multiply;
      opacity: 0.9;
      z-index: 3;
    }

    .maxi-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: clamp(0.75rem, 1.5vw, 1.5rem);
      margin-top: 3rem;
    }

    .maxi-card {
      background: rgba(244, 241, 234, 0.06);
      border: 1px solid rgba(244, 241, 234, 0.15);
      padding: clamp(1rem, 2vw, 2rem);
    }

    .maxi-card-title {
      font-family: var(--font-display);
      font-size: clamp(1.25rem, 2vw, 2rem);
      color: var(--maxi-orange);
      margin-bottom: 0.5rem;
    }

    .maxi-card-body {
      font-size: clamp(0.75rem, 1.1vw, 0.95rem);
      line-height: 1.5;
      color: rgba(244, 241, 234, 0.7);
    }

    @keyframes maxi-enter-left {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .reveal {
      opacity: 0;
      animation: maxi-enter-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .reveal:nth-child(2) { animation-delay: 0.1s; }
    .reveal:nth-child(3) { animation-delay: 0.2s; }
    .reveal:nth-child(4) { animation-delay: 0.3s; }

    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 6px;
      background: var(--maxi-pink);
      z-index: 100;
      width: 0%;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.2s !important; }
      html { scroll-behavior: auto; }
      .reveal { opacity: 1; transform: none; }
    }
  </style>
</head>
<body>
  <div class="progress-bar" aria-hidden="true"></div>

  <section class="slide">
    <div class="texture-overlay"></div>
    <div class="maxi-tape"></div>
    <div class="slide-content mixed-text">
      <p class="maxi-mono reveal">03 / MAXIMALISM</p>
      <h1 class="maxi-hero-type maxi-gradient-text maxi-overprint reveal" data-text="MORE IS MORE">MORE IS MORE</h1>
      <p class="maxi-script-accent reveal">— 但每一页只有一个主角</p>
      <p class="maxi-body reveal">极繁不是混乱，而是有焦点的饱和。我们用 12 列不对称网格、叠印文字和真实纸张纹理，让信息密度成为风格本身。</p>
    </div>
  </section>

  <section class="slide">
    <div class="texture-overlay"></div>
    <div class="slide-content mixed-text">
      <p class="maxi-mono reveal">04 / GRID</p>
      <h2 class="maxi-hero-type maxi-outline-text reveal" style="font-size: clamp(3rem, 9vw, 7rem);">Asymmetric<br>Grid</h2>
      <div class="maxi-grid">
        <div class="maxi-card reveal" style="grid-column: span 5;">
          <div class="maxi-card-title">01 Type</div>
          <div class="maxi-card-body">主导文字占据视觉面积的 50–70%，其余信息作为辅助层。</div>
        </div>
        <div class="maxi-card reveal" style="grid-column: span 4;">
          <div class="maxi-card-title">02 Color</div>
          <div class="maxi-card-body">每页最多 3 种颜色，主色 60%、辅色 30%、点缀 10%。</div>
        </div>
        <div class="maxi-card reveal" style="grid-column: span 3;">
          <div class="maxi-card-title">03 Motion</div>
          <div class="maxi-card-body">动画仅用于入场强调，时长不超过 600 ms。</div>
        </div>
      </div>
    </div>
  </section>

  <script>
    class SlidePresentation {
      constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.setupObserver();
        this.setupKeyboard();
        this.setupWheel();
        this.setupProgress();
        window.addEventListener('load', () => this.fitContent());
        window.addEventListener('resize', () => this.fitContent());
      }
      setupObserver() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.35 });
        this.slides.forEach(s => observer.observe(s));
      }
      setupKeyboard() {
        document.addEventListener('keydown', (e) => {
          if (['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); this.next(); }
          else if (['ArrowUp','ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); this.prev(); }
        });
      }
      setupWheel() {
        let lock = false;
        document.addEventListener('wheel', (e) => {
          if (lock) return;
          lock = true;
          setTimeout(() => lock = false, 700);
          e.deltaY > 0 ? this.next() : this.prev();
        }, { passive: true });
      }
      setupProgress() {
        const bar = document.querySelector('.progress-bar');
        if (!bar) return;
        const update = () => {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
        };
        window.addEventListener('scroll', update);
        update();
      }
      next() { this.goTo(Math.min(this.currentSlide + 1, this.slides.length - 1)); }
      prev() { this.goTo(Math.max(this.currentSlide - 1, 0)); }
      goTo(i) { this.currentSlide = i; this.slides[i].scrollIntoView({ behavior: 'smooth' }); }
      fitContent() {
        this.slides.forEach(slide => {
          const c = slide.querySelector('.slide-content');
          if (!c) return;
          c.style.transform = '';
          if (c.scrollHeight > c.clientHeight) {
            c.style.transform = `scale(${Math.max(0.5, c.clientHeight / c.scrollHeight * 0.95)})`;
          }
        });
      }
    }
    new SlidePresentation();
  </script>
</body>
</html>
```

## 9. 生图提示词库

### 核心提示词

```
maximalist typography poster, bold experimental lettering,
asymmetric editorial grid, muted dopamine palette,
collage texture, torn paper edges, washi tape accents,
overprint color separation, large scale type,
no pure RGB, no rainbow gradient, art direction
```

### 场景化提示词

**创意机构**
```
creative agency maximalist poster, oversized typography,
muted pink orange yellow palette, editorial 12-column grid,
collage paper texture, tape details, layered type,
experimental layout, no generic gradients
```

**音乐/艺术平台**
```
maximalist music festival poster, bold condensed type,
collage elements, muted neon accents, torn edges,
asymmetric composition, photocopy texture,
artistic rebellion, high energy
```

**时尚品牌**
```
fashion brand maximalist campaign, oversized serif and sans mix,
mustard yellow and clay orange, editorial grid,
collage cutouts, paper tape, raw texture,
luxury streetwear attitude
```

## 10. 代表案例与参考来源

- **David Rudnick** — 音乐海报与极繁排版
- **M/M (Paris)** — 艺术指导与字体实验
- **It's Nice That** — 当代编辑设计
- **《Eye Magazine》** — 实验排版与视觉文化
- **来源**：SlideCraft Falcon-Obsidian-Black-Widow 设计系统升级方案 §4.3
