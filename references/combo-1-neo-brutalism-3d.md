# 组合1：数字粗野建筑（Neo-Brutalism + 3D）

## 1. 设计理念 / 角色定义

**设计理念**：把粗野主义建筑移植到数字空间——混凝土、锈钢、铜绿与黄铜的真实材料感，通过等轴测投影和挤压阴影制造“可触摸”的厚重结构。视觉语言大胆、直接、不妥协，像一份贴在数字墙上的宣言。

**角色定义**：

| 属性 | 描述 |
|------|------|
| 核心气质 | 大胆、建筑感、功能性优先、反装饰 |
| 情感基调 | 震撼、真实、结构诚实 |
| 适用场景 | 创意机构、Web3 项目、设计师作品集、反叛品牌、建筑/城市主题 |
| 品牌人格 | 敢于打破常规的前卫建筑师 |
| 用户感受 | “这个品牌很有态度”、“不玩虚的” |

## 2. 风格约束（必须 / 禁止）

### 必须

1. 所有主要元素使用 3–5 px 实色硬边边框（`--brutal-charcoal`）。
2. 阴影使用多层挤压面模拟厚度，禁止单一 blur 阴影。
3. 使用等轴测投影或正交投影呈现 3D 卡片/结构。
4. 每页幻灯片只允许 1 个元素突破边界。
5. 内容卡片最多 3 个，采用不对称网格（2:1 或 8:4）。
6. 标题使用 Risograph 套色偏移效果（`text-shadow` 2 px copper / -2 px steel）。
7. 中文标题避免过大负字距；中西文混排使用 `.mixed-text`。
8. 动画时长控制在 200–600 ms，提供 `prefers-reduced-motion` 降级。

### 禁止

1. 柔和模糊阴影、圆角过大、渐变过渡铺满背景。
2. 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
3. SVG `feTurbulence` 噪点作为纹理。
4. 标题与正文字号比 < 5:1。
5. 完美居中对齐且无刻意错位。
6. Inter / Space Grotesk / Nunito / Orbitron 作为默认 Display 字体。

## 3. 色彩系统

```css
:root {
  --brutal-bg: #E8E4DC;        /* raw concrete */
  --brutal-concrete: #D4D0C8;  /* 次背景 */
  --brutal-charcoal: #2B2B2B;  /* 边框/文字 */
  --brutal-steel: #B7410E;     /* rusted steel */
  --brutal-brass: #C9A227;     /* brass */
  --brutal-copper: #3D5A6C;    /* oxidized copper */
  --brutal-cream: #F5F1E8;     /* 纸张 */
  --brutal-safety: #39FF14;    /* 可选安全警示点缀，面积 ≤ 2% */
}
```

## 4. 字体方案

- **Display**：`Clash Display`（Fontshare）或 `Anton`（Google Fonts 降级）
- **Body**：`Satoshi`（Fontshare）或 `Switzer` / `DM Sans`
- **Accent / Data**：`JetBrains Mono`
- **中文正文**：`Noto Sans SC`

```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Clash Display', 'Anton', sans-serif;
  --font-body: 'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 5. 布局模式

```css
/* 12 列不对称网格 */
.brutal-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 2vw, 2rem);
  padding: clamp(1.5rem, 4vw, 4rem);
  height: 100%;
}

/* 2:1 主内容区 */
.brutal-block--large { grid-column: span 8; }
.brutal-block--small { grid-column: span 4; }

/* 等轴测 3D 舞台 */
.brutal-3d-stage {
  perspective: 1200px;
  perspective-origin: center center;
  transform-style: preserve-3d;
}
```

## 6. CSS 效果库

### 多层挤压阴影

```css
.brutal-3d-card {
  background: var(--brutal-cream);
  border: 4px solid var(--brutal-charcoal);
  box-shadow:
    1px 1px 0 var(--brutal-charcoal),
    2px 2px 0 var(--brutal-charcoal),
    3px 3px 0 var(--brutal-charcoal),
    4px 4px 0 var(--brutal-charcoal),
    8px 8px 0 rgba(43, 43, 43, 0.15);
  transform: rotateX(2deg) rotateY(-3deg);
  transform-style: preserve-3d;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.brutal-3d-card:hover {
  transform: rotateX(0) rotateY(0) translateZ(20px);
}
```

### Risograph 套色偏移标题

```css
.brutal-riso-title {
  font-family: var(--font-display);
  color: var(--brutal-charcoal);
  text-shadow:
    2px 0 0 var(--brutal-copper),
    -2px 0 0 var(--brutal-steel);
  line-height: 0.95;
  letter-spacing: -0.02em;
}
```

### 真实纹理层

```css
.texture-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.08;
  mix-blend-mode: multiply;
  background-image: var(--texture-paper);
  background-size: 200px 200px;
}
```

### 粗野按钮

```css
.brutal-button {
  display: inline-block;
  padding: 0.75em 1.5em;
  font-family: var(--font-display);
  font-size: clamp(0.875rem, 1.4vw, 1rem);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--brutal-charcoal);
  background: var(--brutal-brass);
  border: 3px solid var(--brutal-charcoal);
  box-shadow: 4px 4px 0 var(--brutal-charcoal);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
}

.brutal-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--brutal-charcoal);
}

.brutal-button:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--brutal-charcoal);
}
```

## 7. 动画建议

| 元素 | 动画 | 时长 | 说明 |
|------|------|------|------|
| 标题 | 从下方 20 px 滑入 + 透明度 | 500 ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 3D 卡片 | 等轴测轻微回正 | 400 ms | hover 触发 |
| 按钮 | 位移 + 阴影加深 | 200 ms | 物理反馈 |
| 纹理层 | 静态 | - | 禁止持续噪点动画 |

```css
@keyframes brutal-enter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  animation: brutal-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.reveal:nth-child(2) { animation-delay: 0.1s; }
.reveal:nth-child(3) { animation-delay: 0.2s; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.2s !important;
  }
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
  <title>数字粗野建筑 Neo-Brutalism + 3D</title>
  <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --brutal-bg: #E8E4DC;
      --brutal-concrete: #D4D0C8;
      --brutal-charcoal: #2B2B2B;
      --brutal-steel: #B7410E;
      --brutal-brass: #C9A227;
      --brutal-copper: #3D5A6C;
      --brutal-cream: #F5F1E8;
      --brutal-safety: #39FF14;
      --font-display: 'Clash Display', 'Anton', sans-serif;
      --font-body: 'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      /* --texture-paper base64 from references/textures.css — paste here when rendering final HTML */
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-body);
      background: var(--brutal-bg);
      color: var(--brutal-charcoal);
      overflow-x: hidden;
    }

    .slide {
      position: relative;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(1.5rem, 4vw, 4rem);
    }

    .texture-overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      opacity: 0.08;
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

    .brutal-riso-title {
      font-family: var(--font-display);
      font-size: clamp(3rem, 9vw, 7rem);
      font-weight: 700;
      line-height: 0.92;
      letter-spacing: -0.02em;
      color: var(--brutal-charcoal);
      text-shadow: 2px 0 0 var(--brutal-copper), -2px 0 0 var(--brutal-steel);
      margin-bottom: clamp(1rem, 2vw, 2rem);
      /* 唯一允许突破边界的元素 */
      margin-left: -0.1em;
    }

    .brutal-body {
      font-family: var(--font-body);
      font-size: clamp(0.875rem, 1.3vw, 1.1rem);
      line-height: 1.5;
      max-width: 55ch;
      margin-bottom: clamp(1.5rem, 3vw, 3rem);
    }

    .brutal-mono {
      font-family: var(--font-mono);
      font-size: clamp(0.75rem, 1vw, 0.875rem);
      color: var(--brutal-steel);
      margin-bottom: 0.5rem;
    }

    .brutal-button {
      display: inline-block;
      align-self: flex-start;
      padding: 0.75em 1.5em;
      font-family: var(--font-display);
      font-size: clamp(0.875rem, 1.4vw, 1rem);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--brutal-charcoal);
      background: var(--brutal-brass);
      border: 3px solid var(--brutal-charcoal);
      box-shadow: 4px 4px 0 var(--brutal-charcoal);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      cursor: pointer;
      text-decoration: none;
    }

    .brutal-button:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--brutal-charcoal); }
    .brutal-button:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--brutal-charcoal); }

    .brutal-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: clamp(1rem, 2vw, 2rem);
      width: 100%;
      height: 60%;
      perspective: 1200px;
    }

    .brutal-3d-card {
      background: var(--brutal-cream);
      border: 4px solid var(--brutal-charcoal);
      box-shadow:
        1px 1px 0 var(--brutal-charcoal),
        2px 2px 0 var(--brutal-charcoal),
        3px 3px 0 var(--brutal-charcoal),
        4px 4px 0 var(--brutal-charcoal),
        8px 8px 0 rgba(43, 43, 43, 0.15);
      transform: rotateX(2deg) rotateY(-3deg);
      transform-style: preserve-3d;
      transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      padding: clamp(1.5rem, 3vw, 3rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brutal-3d-card:hover { transform: rotateX(0) rotateY(0) translateZ(20px); }
    .brutal-3d-card.accent { background: var(--brutal-copper); color: var(--brutal-cream); }

    .card-title {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      line-height: 1;
      letter-spacing: -0.01em;
    }

    .card-body {
      font-family: var(--font-body);
      font-size: clamp(0.8rem, 1.2vw, 1rem);
      line-height: 1.45;
      margin-top: 1rem;
    }

    @keyframes brutal-enter {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .reveal {
      opacity: 0;
      animation: brutal-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .reveal:nth-child(2) { animation-delay: 0.1s; }
    .reveal:nth-child(3) { animation-delay: 0.2s; }
    .reveal:nth-child(4) { animation-delay: 0.3s; }

    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 6px;
      background: var(--brutal-steel);
      border-bottom: 2px solid var(--brutal-charcoal);
      z-index: 100;
      width: 0%;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.2s !important;
      }
      html { scroll-behavior: auto; }
      .reveal { opacity: 1; transform: none; }
    }
  </style>
</head>
<body>
  <div class="progress-bar" aria-hidden="true"></div>

  <section class="slide">
    <div class="texture-overlay"></div>
    <div class="slide-content mixed-text">
      <p class="brutal-mono reveal">01 / MANIFESTO</p>
      <h1 class="brutal-riso-title reveal">结构即态度<br>Structure is Attitude</h1>
      <p class="brutal-body reveal">粗野主义不是粗糙，而是诚实。我们用真实的材料、硬边的边框和等轴测的深度，把每一页幻灯片变成一座可站立的数字建筑。</p>
      <a class="brutal-button reveal" href="#" onclick="return false;">Enter the Grid</a>
    </div>
  </section>

  <section class="slide">
    <div class="texture-overlay"></div>
    <div class="slide-content mixed-text">
      <p class="brutal-mono reveal">02 / SYSTEM</p>
      <div class="brutal-grid">
        <div class="brutal-3d-card reveal">
          <div>
            <div class="card-title">Raw Concrete</div>
            <div class="card-body">背景取自未加工的混凝土色，拒绝数字感的纯灰，让页面拥有工地现场的颗粒与温度。</div>
          </div>
        </div>
        <div class="brutal-3d-card accent reveal">
          <div>
            <div class="card-title">Copper Patina</div>
            <div class="card-body">氧化铜绿作为强调色，仅用于数据和标签，面积控制在 10% 以内。</div>
          </div>
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
neo brutalist architecture, raw concrete texture, rusted steel beams,
obrutalist color palette, brass and oxidized copper accents,
hard black outlines, layered extruded shadows, isometric perspective,
Risograph print texture, structural honesty, no gradients,
editorial typography, bold graphic poster, digital monument
```

### 场景化提示词

**创意机构**
```
creative agency manifesto slide, neo-brutalist 3D typography,
raw concrete background, rusted steel frames, brass accent blocks,
hard-edge shadows, asymmetric 12-column grid, architectural poster
```

**Web3 / 加密**
```
web3 landing page, brutalist crypto UI, oxidized copper cards,
concrete texture, hard black borders, isometric depth,
Risograph color offset, raw digital structure, no blur shadows
```

**设计师作品集**
```
designer portfolio cover, brutalist gallery layout,
3D isometric cards, concrete and brass palette,
black structural frames, layered shadow depth, editorial typography
```

## 10. 代表案例与参考来源

- **Brutalism in Web Design** — brutalistwebsites.com
- **Risograph Print Aesthetic** — Color Library / Riso Kagaku
- **David Rudnick** — 音乐海报与粗野排版
- **Brutalist Architecture** — Le Corbusier, Alison & Peter Smithson
- **来源**：SlideCraft Falcon-Obsidian-Black-Widow 设计系统升级方案 §4.1
