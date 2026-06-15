# Combo 7 — 孟菲斯派对（Memphis Revival + Experimental Typography）

## 1. 设计理念 / 角色定义

孟菲斯 Revival 的俏皮几何 + 实验性排版的字体游戏。用**真实 Memphis Milano 降调色板**替代纯 RGB 原色，把 80 年代的反叛精神控制在“一张幻灯片 1 个视觉锚点”的叙事节奏里。

**角色**：一位会把几何装饰当作标点符号使用的前端视觉设计师。每页只讲一件事，标题可以破界，但仅限 1 个元素破界。

**适用场景**：潮流品牌发布、创意活动、Z 世代产品、教育/儿童内容、需要强烈记忆点的开场或章节页。

---

## 2. 风格约束（必须 / 禁止）

**必须**：
- 使用 4.7 节给出的真实 Memphis Milano 色板。
- Display 使用 `Archivo Black`（Google Fonts），Body 使用 `Jost`。
- 每页几何装饰控制在 **5–7 个**，并遵循大小节奏（2 大 / 3 中 / 2 小）。
- 每页仅 1 个视觉锚点；标题:正文字号比 ≥ 5:1。
- 标题字符弹跳动画只触发一次，不无限循环。
- 引用 `references/textures.css` 中的 `--texture-paper` 作为轻纹理层。

**禁止**：
- 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
- 将 Inter / Space Grotesk / Nunito / Orbitron 作为 Display 默认字体。
- 全屏低透明图案铺底、SVG `feTurbulence` 噪点。
- 每页装饰超过 7 个或全用同一尺寸。
- 无 `prefers-reduced-motion` 降级。

---

## 3. 色彩系统

```css
:root {
  --memphis-pink:    #E89CAC;
  --memphis-yellow:  #E8C547;
  --memphis-blue:    #4A6FA5;
  --memphis-green:   #7FB069;
  --memphis-orange:  #E08E45;
  --memphis-purple:  #9B7EBD;
  --memphis-black:   #1E1E1E;
  --memphis-cream:   #FDF6E3;
  --memphis-stroke:  3px;
}
```

**配色比例**：主色 60%（cream / black）、辅色 30%（pink / yellow / blue / green / orange / purple 中选 1–2 个）、点缀 10%（剩余 1 个）。

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Archivo Black** | Google Fonts | `'Anton', sans-serif` |
| Body | **Jost** | Google Fonts | `'Nunito', 'Noto Sans SC', sans-serif` |
| Accent（仅一处强调） | **Bangers** | Google Fonts | `'Anton', cursive` |
| 中文正文 | **Noto Sans SC** | Google Fonts | `system-ui, sans-serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Jost:wght@400;600;700&family=Bangers&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Archivo Black', 'Anton', sans-serif;
  --font-body:    'Jost', 'Nunito', 'Noto Sans SC', sans-serif;
  --font-accent:  'Bangers', 'Anton', cursive;
}
```

---

## 5. 布局模式

### 标题页
- 超大标题居中或偏左，允许 1 个字符/单词突破边界。
- 3 个小型内容卡片或 1 行副标题。
- 几何装饰围绕锚点散布，大小按 2:3:2 分布。

### 内容页
- 左：超大章节编号/关键词（占 40–50% 宽度）。
- 右：3 个卡片清单，卡片使用粗边框 + 错位阴影。
- 背景使用浅色纯色，纹理仅叠加 6–8% 透明度。

---

## 6. CSS 效果库

```css
/* 孟菲斯卡片：粗边框 + 硬阴影 */
.geo-card {
  background: var(--memphis-cream);
  border: var(--memphis-stroke) solid var(--memphis-black);
  border-radius: 18px;
  padding: clamp(1rem, 2vw, 1.5rem);
  box-shadow: 6px 6px 0 var(--memphis-black);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.geo-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 var(--memphis-black);
}

/* 几何装饰大小节奏 */
.deco-xl { width: clamp(80px, 10vw, 140px); }
.deco-md { width: clamp(40px, 6vw, 80px); }
.deco-sm { width: clamp(16px, 3vw, 32px); }
.deco-circle { border-radius: 50%; border: 3px solid var(--memphis-black); }
.deco-triangle {
  width: 0; height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 52px solid var(--memphis-pink);
  filter: drop-shadow(2px 2px 0 var(--memphis-black));
}
.deco-diamond { transform: rotate(45deg); border: 3px solid var(--memphis-black); }
.deco-stripes {
  background: repeating-linear-gradient(
    45deg,
    var(--memphis-yellow),
    var(--memphis-yellow) 6px,
    var(--memphis-cream) 6px,
    var(--memphis-cream) 12px
  );
  border: 3px solid var(--memphis-black);
}

/* 标题单次弹跳 */
@keyframes memphis-bounce {
  0%   { opacity: 0; transform: translateY(-40px) rotate(-8deg) scale(0.85); }
  60%  { opacity: 1; transform: translateY(6px) rotate(2deg) scale(1.02); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
}
.bounce-once {
  animation: memphis-bounce 0.55s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

/* 真实扫描纸纹理层 */
.texture-overlay {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
  opacity: 0.06;
  mix-blend-mode: multiply;
  background-image: var(--texture-paper);
  background-size: 200px 200px;
}

/* 中西文混排 */
.mixed-text { word-spacing: 0.125em; }
.mixed-text > * { word-spacing: normal; }
```

---

## 7. 动画建议

| 元素 | 效果 | 时长 | 触发 |
|---|---|---|---|
| 主标题 | 单次弹跳 + 轻微旋转 | 500–600 ms | 进入视口一次 |
| 几何装饰 | 缩放弹入 | 300–400 ms | 交错 60 ms |
| 内容卡片 | 从下滑入 + 回弹 | 400 ms | 交错 80 ms |
| 悬停卡片 | `translate(-3px, -3px)` + 阴影加深 | 200 ms | 悬停 |

```css
@media (prefers-reduced-motion: reduce) {
  .bounce-once,
  .deco-pop,
  .card-slide {
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
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Memphis Revival</title>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Jost:wght@400;600;700&family=Bangers&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --memphis-pink:   #E89CAC;
      --memphis-yellow: #E8C547;
      --memphis-blue:   #4A6FA5;
      --memphis-green:  #7FB069;
      --memphis-orange: #E08E45;
      --memphis-purple: #9B7EBD;
      --memphis-black:  #1E1E1E;
      --memphis-cream:  #FDF6E3;
      --memphis-stroke: 3px;

      --font-display: 'Archivo Black', 'Anton', sans-serif;
      --font-body:    'Jost', 'Nunito', 'Noto Sans SC', sans-serif;
      --font-accent:  'Bangers', 'Anton', cursive;

      --title-size: clamp(3rem, 11vw, 7.5rem);
      --body-size:  clamp(0.9rem, 1.4vw, 1.15rem);
      --slide-padding: clamp(1.5rem, 4vw, 4rem);
      --ease-pop: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; overflow-x: hidden; }
    html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }

    .slide {
      width: 100vw; height: 100vh; height: 100dvh;
      overflow: hidden; scroll-snap-align: start;
      position: relative; display: flex; flex-direction: column;
      background: var(--memphis-cream);
      color: var(--memphis-black);
      font-family: var(--font-body);
    }

    .slide-content {
      flex: 1; display: flex; flex-direction: column;
      justify-content: center; padding: var(--slide-padding);
      position: relative; z-index: 2;
      max-height: 100%;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    /* 纹理层：真实扫描纸，值来自 references/textures.css --texture-paper */
    .texture-overlay {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      opacity: 0.06; mix-blend-mode: multiply;
      background-image: var(--texture-paper);
      background-size: 200px 200px;
    }

    /* 几何装饰 */
    .deco {
      position: absolute; z-index: 1;
      border: var(--memphis-stroke) solid var(--memphis-black);
    }
    .deco-xl { width: clamp(80px, 10vw, 140px); height: clamp(80px, 10vw, 140px); }
    .deco-md { width: clamp(40px, 6vw, 80px);  height: clamp(40px, 6vw, 80px); }
    .deco-sm { width: clamp(16px, 3vw, 32px);  height: clamp(16px, 3vw, 32px); }
    .circle { border-radius: 50%; }
    .diamond { transform: rotate(45deg); }
    .triangle {
      width: 0; height: 0; border: none;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 52px solid var(--memphis-pink);
      filter: drop-shadow(2px 2px 0 var(--memphis-black));
    }

    /* 标题 */
    .title {
      font-family: var(--font-display);
      font-size: var(--title-size);
      line-height: 0.95;
      letter-spacing: 0.01em;
      text-align: center;
      color: var(--memphis-black);
    }
    .title .accent {
      display: inline-block;
      color: var(--memphis-cream);
      background: var(--memphis-pink);
      padding: 0 0.15em;
      border: var(--memphis-stroke) solid var(--memphis-black);
      border-radius: 0.1em;
      transform: rotate(-3deg);
    }

    .subtitle {
      font-family: var(--font-accent);
      font-size: clamp(1.2rem, 3vw, 2rem);
      text-align: center;
      margin-top: 1rem;
      letter-spacing: 0.04em;
    }

    /* 卡片 */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1rem, 2vw, 1.5rem);
      margin-top: 2rem;
    }
    .geo-card {
      background: var(--memphis-cream);
      border: var(--memphis-stroke) solid var(--memphis-black);
      border-radius: 18px;
      padding: clamp(1rem, 2vw, 1.5rem);
      box-shadow: 6px 6px 0 var(--memphis-black);
      font-size: var(--body-size);
    }
    .geo-card strong {
      font-family: var(--font-display);
      display: block;
      font-size: clamp(1.2rem, 2.2vw, 1.6rem);
      margin-bottom: 0.3em;
    }

    /* 动画 */
    .reveal {
      opacity: 0; transform: translateY(20px);
      transition: opacity 0.5s var(--ease-pop), transform 0.5s var(--ease-pop);
    }
    .slide.visible .reveal { opacity: 1; transform: translateY(0); }
    .slide.visible .title { animation: memphis-bounce 0.55s var(--ease-pop) forwards; }

    @keyframes memphis-bounce {
      0%   { opacity: 0; transform: translateY(-40px) rotate(-6deg) scale(0.9); }
      60%  { opacity: 1; transform: translateY(6px) rotate(2deg) scale(1.02); }
      100% { transform: translateY(0) rotate(0deg) scale(1); }
    }

    @media (max-width: 700px) {
      .cards { grid-template-columns: 1fr; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.2s !important;
      }
      html { scroll-behavior: auto; }
      .reveal { opacity: 1; transform: none; }
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>

    <!-- 5–7 个几何装饰，大小节奏 2 大 / 3 中 / 2 小 -->
    <div class="deco deco-xl circle" style="background:var(--memphis-yellow); top:8%; left:6%;"></div>
    <div class="deco triangle" style="top:12%; right:10%;"></div>
    <div class="deco deco-md diamond" style="background:var(--memphis-blue); top:55%; left:4%;"></div>
    <div class="deco deco-md square" style="background:var(--memphis-green); top:70%; right:8%;"></div>
    <div class="deco deco-sm circle" style="background:var(--memphis-orange); top:20%; right:30%;"></div>
    <div class="deco deco-sm diamond" style="background:var(--memphis-purple); bottom:18%; left:25%;"></div>
    <div class="deco deco-md" style="background:repeating-linear-gradient(45deg,var(--memphis-yellow),var(--memphis-yellow) 6px,var(--memphis-cream) 6px,var(--memphis-cream) 12px); bottom:12%; right:20%; width:60px; height:16px;"></div>

    <div class="slide-content mixed-text">
      <h1 class="title reveal">孟菲斯 <span class="accent">Memphis</span></h1>
      <p class="subtitle reveal">用几何与字体开一场视觉派对</p>
    </div>
  </section>

  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text">
      <h2 class="title reveal" style="font-size:clamp(2.5rem,8vw,5rem); text-align:left;">01 <span style="color:var(--memphis-pink);">规则</span></h2>
      <div class="cards reveal">
        <article class="geo-card">
          <strong>5–7 个装饰</strong>
          控制几何数量，避免贴满廉价感。
        </article>
        <article class="geo-card">
          <strong>1 个锚点</strong>
          每页只让眼睛停在一个地方。
        </article>
        <article class="geo-card">
          <strong>单次弹跳</strong>
          动画进入一次，不再循环打扰。
        </article>
      </div>
    </div>
  </section>

  <script>
    const slides = document.querySelectorAll('.slide');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.35 });
    slides.forEach(s => obs.observe(s));

    let idx = 0;
    const go = i => { if (i >= 0 && i < slides.length) slides[i].scrollIntoView({ behavior: 'smooth' }); };
    document.addEventListener('keydown', e => {
      if (['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); go(++idx); }
      else if (['ArrowUp','ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); go(--idx); }
    });
  </script>
</body>
</html>
```

---

## 9. 生图提示词库

| 场景 | 提示词 |
|---|---|
| 封面 | Memphis Milano color blocks, oversized Archivo Black typography, scattered circles triangles diamonds, cream paper texture, 1980s playful rebellion, editorial poster |
| 章节页 | flat geometric decorations, muted pink yellow blue green, bold black outlines, single visual anchor, lots of negative space |
| 背景纹理 | scanned cream paper texture, subtle fiber grain, seamless tile, 6% opacity |

---

## 10. 代表案例与参考来源

- **Memphis Milano** — Ettore Sottsass 原始色板与几何语言。
- **Dropbox “Hello Sign” 品牌活动** — 孟菲斯几何在数字演示中的克制用法。
- **Pinterest / Are.na “Memphis Revival”** — 当代对 Memphis 的降调重译。

