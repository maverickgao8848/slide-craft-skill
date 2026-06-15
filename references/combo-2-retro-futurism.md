# 组合2：80年代未来（Retro-Futurism）

## 1. 设计理念 / 角色定义

**设计理念**：复刻“过去人眼中的未来”——深空黑底、日落渐变、霓虹灯管与 CRT 荧光点阵。通过降调霓虹、4 层光晕和一次性扫描线动画，营造怀旧而浪漫的太空时代氛围，而非高饱和的廉价 synthwave。

**角色定义**：

| 属性 | 描述 |
|------|------|
| 核心气质 | 怀旧科幻、浪漫技术主义、太空时代 |
| 情感基调 | 乐观未来主义、电子浪漫、复古情怀 |
| 适用场景 | 科技发布会、游戏界面、音乐/娱乐、科幻主题活动 |
| 品牌人格 | 80 年代科幻片主角，驾驶发光跑车驶向霓虹都市 |
| 用户感受 | “像穿越时空”、“充满未来感又很温暖” |

## 2. 风格约束（必须 / 禁止）

### 必须

1. 深色背景（深空蓝/纯黑），搭配降调霓虹强调色。
2. Display 字体使用 `Outrun Future`，`Orbitron` 仅作降级。
3. Body / Data 使用 `JetBrains Mono` 或 `Share Tech Mono`。
4. 霓虹发光使用 4 层 `text-shadow`（内层 white，外层 color）。
5. 标题字重 700–900，避免所有文字全大写。
6. CRT 磷光点阵背景使用 tiny radial-gradient，透明度 0.08。
7. 胶片颗粒使用真实 35 mm 扫描 PNG（`--texture-film`）。
8. `flicker` 与扫描线动画仅在页面进入时触发一次，不循环。
9. 中西文混排使用 `.mixed-text`。

### 禁止

1. 纯白或浅色主背景。
2. 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
3. 8 层以上 text-shadow 霓虹。
4. 无限循环的闪烁、扫描线、故障动画。
5. SVG `feTurbulence` 作为胶片颗粒。
6. Inter / Space Grotesk / Nunito / Orbitron 作为默认 Display。

## 3. 色彩系统

```css
:root {
  --space-black: #0B0D17;
  --space-deep: #15182B;
  --sunset-coral: #C75B39;
  --sunset-amber: #D4A373;
  --sunset-gold: #E9C46A;
  --neon-pink: #E86BA8;   /* 降调霓虹粉 */
  --neon-cyan: #4ECDC4;   /* 降调青 */
  --chrome: #A8A29E;
}
```

## 4. 字体方案

- **Display**：`Outrun Future`（首选） / `Orbitron`（Google Fonts 降级）
- **Body / Data**：`JetBrains Mono` / `Share Tech Mono`
- **中文正文**：`Noto Sans SC`

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=JetBrains+Mono:wght@400;500&family=Share+Tech+Mono&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Outrun Future', 'Orbitron', sans-serif;
  --font-body: 'JetBrains Mono', 'Share Tech Mono', 'Noto Sans SC', monospace;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 5. 布局模式

```css
/* 深空舞台 */
.retro-stage {
  position: relative;
  min-height: 100vh;
  background: var(--space-black);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 透视网格地平线 */
.retro-grid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background:
    linear-gradient(transparent 0%, var(--space-black) 100%),
    repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(78, 205, 196, 0.08) 80px, rgba(78, 205, 196, 0.08) 82px),
    repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(78, 205, 196, 0.08) 80px, rgba(78, 205, 196, 0.08) 82px);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
}

/* 放射状居中构图 */
.retro-radial {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 90vw;
}
```

## 6. CSS 效果库

### 4 层霓虹发光

```css
.neon-text {
  font-family: var(--font-display);
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 21px var(--neon-pink),
    0 0 42px var(--neon-pink),
    0 0 80px rgba(232, 107, 168, 0.5);
}

.neon-text--cyan {
  text-shadow:
    0 0 7px #fff,
    0 0 21px var(--neon-cyan),
    0 0 42px var(--neon-cyan),
    0 0 80px rgba(78, 205, 196, 0.5);
}
```

### CRT 磷光点阵

```css
.crt-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.08;
  background-image: radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px);
  background-size: 4px 4px;
}
```

### 真实胶片颗粒层

```css
.film-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: var(--texture-film);
  background-size: 200px 200px;
}
```

### 一次性扫描线

```css
.scanline {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.12) 2px,
    rgba(0, 0, 0, 0.12) 4px
  );
}

.scanline::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: scan-once 2s ease-out forwards;
}

@keyframes scan-once {
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
```

### 日落渐变光晕

```css
.sunset-glow {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 120vw;
  height: 60vh;
  background: radial-gradient(ellipse at center, rgba(199, 91, 57, 0.35) 0%, rgba(212, 163, 115, 0.15) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```

## 7. 动画建议

| 元素 | 动画 | 时长 | 说明 |
|------|------|------|------|
| 主标题 | 霓虹亮起 + 单次 flicker | 600 ms | 进入时触发一次 |
| 副标题 | 淡入 + 轻微发光增强 | 500 ms | delay 0.2 s |
| 透视网格 | 从底部向上展开 | 1 s | 进入时触发一次 |
| 扫描线 | 垂直穿过 | 2 s | 一次性 |
| 漂浮装饰 | 极低幅度浮动 | ≥ 8 s | 可循环，幅度 ≤ 8 px |

```css
@keyframes neon-turn-on {
  0% { opacity: 0.5; text-shadow: none; }
  30% { opacity: 0.8; text-shadow: 0 0 5px #fff, 0 0 10px var(--neon-pink); }
  60% { opacity: 0.5; text-shadow: none; }
  100% { opacity: 1; text-shadow: 0 0 7px #fff, 0 0 21px var(--neon-pink), 0 0 42px var(--neon-pink), 0 0 80px rgba(232,107,168,0.5); }
}

@keyframes grid-expand {
  0% { transform: perspective(500px) rotateX(60deg) scaleY(0); opacity: 0; }
  100% { transform: perspective(500px) rotateX(60deg) scaleY(1); opacity: 1; }
}

@keyframes flicker-once {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.7; }
}

.reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
.slide.visible .reveal { opacity: 1; transform: translateY(0); }

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
  <title>80年代未来 Retro-Futurism</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=JetBrains+Mono:wght@400;500&family=Share+Tech+Mono&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --space-black: #0B0D17;
      --space-deep: #15182B;
      --sunset-coral: #C75B39;
      --sunset-amber: #D4A373;
      --sunset-gold: #E9C46A;
      --neon-pink: #E86BA8;
      --neon-cyan: #4ECDC4;
      --chrome: #A8A29E;
      --font-display: 'Outrun Future', 'Orbitron', sans-serif;
      --font-body: 'JetBrains Mono', 'Share Tech Mono', 'Noto Sans SC', monospace;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-body);
      background: var(--space-black);
      color: #fff;
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
    }

    .crt-dots {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      opacity: 0.08;
      background-image: radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px);
      background-size: 4px 4px;
    }

    .film-grain {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 3;
      opacity: 0.06;
      mix-blend-mode: overlay;
      background-image: var(--texture-film);
      background-size: 200px 200px;
    }

    .scanline {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px);
    }

    .retro-grid {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 55%;
      background:
        linear-gradient(transparent 0%, var(--space-black) 100%),
        repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(78, 205, 196, 0.08) 80px, rgba(78, 205, 196, 0.08) 82px),
        repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(78, 205, 196, 0.08) 80px, rgba(78, 205, 196, 0.08) 82px);
      transform: perspective(500px) rotateX(60deg);
      transform-origin: bottom;
      opacity: 0;
    }

    .slide.visible .retro-grid {
      animation: grid-expand 1s ease-out forwards;
    }

    .sunset-glow {
      position: absolute;
      bottom: -20%;
      left: 50%;
      transform: translateX(-50%);
      width: 120vw;
      height: 60vh;
      background: radial-gradient(ellipse at center, rgba(199, 91, 57, 0.35) 0%, rgba(212, 163, 115, 0.15) 40%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .slide-content {
      position: relative;
      z-index: 4;
      text-align: center;
      max-width: 90vw;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    .retro-title {
      font-family: var(--font-display);
      font-size: clamp(3rem, 10vw, 8rem);
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0.02em;
      color: #fff;
      text-shadow:
        0 0 7px #fff,
        0 0 21px var(--neon-pink),
        0 0 42px var(--neon-pink),
        0 0 80px rgba(232, 107, 168, 0.5);
    }

    .slide.visible .retro-title {
      animation: neon-turn-on 0.6s ease-out forwards, flicker-once 2s ease-out 0.6s forwards;
    }

    .retro-subtitle {
      font-family: var(--font-mono);
      font-size: clamp(0.875rem, 1.5vw, 1.25rem);
      color: var(--neon-cyan);
      margin-top: 1.5rem;
      letter-spacing: 0.1em;
    }

    .retro-body {
      font-family: var(--font-body);
      font-size: clamp(0.8rem, 1.2vw, 1rem);
      color: rgba(255,255,255,0.75);
      max-width: 55ch;
      margin: 2rem auto 0;
      line-height: 1.6;
    }

    .retro-tag {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--sunset-gold);
      border: 1px solid var(--sunset-gold);
      padding: 0.3em 0.8em;
      margin-top: 2rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    @keyframes neon-turn-on {
      0% { opacity: 0.5; text-shadow: none; }
      30% { opacity: 0.8; text-shadow: 0 0 5px #fff, 0 0 10px var(--neon-pink); }
      60% { opacity: 0.5; text-shadow: none; }
      100% { opacity: 1; text-shadow: 0 0 7px #fff, 0 0 21px var(--neon-pink), 0 0 42px var(--neon-pink), 0 0 80px rgba(232,107,168,0.5); }
    }

    @keyframes flicker-once {
      0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
      20%, 24%, 55% { opacity: 0.7; }
    }

    @keyframes grid-expand {
      0% { transform: perspective(500px) rotateX(60deg) scaleY(0); opacity: 0; }
      100% { transform: perspective(500px) rotateX(60deg) scaleY(1); opacity: 1; }
    }

    .reveal {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .slide.visible .reveal { opacity: 1; transform: translateY(0); }
    .reveal:nth-child(2) { transition-delay: 0.15s; }
    .reveal:nth-child(3) { transition-delay: 0.3s; }

    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 4px;
      background: var(--neon-pink);
      box-shadow: 0 0 10px var(--neon-pink);
      z-index: 100;
      width: 0%;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.2s !important; }
      html { scroll-behavior: auto; }
      .reveal, .slide.visible .retro-title { opacity: 1; transform: none; animation: none; }
      .slide.visible .retro-grid { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="progress-bar" aria-hidden="true"></div>

  <section class="slide">
    <div class="sunset-glow"></div>
    <div class="crt-dots"></div>
    <div class="film-grain"></div>
    <div class="scanline"></div>
    <div class="retro-grid"></div>
    <div class="slide-content mixed-text">
      <h1 class="retro-title">霓虹远征<br>Neon Odyssey</h1>
      <p class="retro-subtitle reveal">198X — A FUTURE THAT NEVER HAPPENED</p>
      <p class="retro-body reveal">我们不是在预测未来，而是在修复一段被胶片颗粒包裹的旧梦。降调的霓虹、深空黑底、一次性扫描线——欢迎来到 80 年代的未来。</p>
      <span class="retro-tag reveal">Retro-Future</span>
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
retro futurism UI, 80s sci-fi aesthetic, muted neon glow,
sunset coral and amber gradient, deep space black background,
CRT phosphor dot pattern, film grain texture,
perspective grid floor, chrome metallic accents,
nostalgic technology, synthwave atmosphere, no pure RGB
```

### 场景化提示词

**科技发布会**
```
retro futuristic tech keynote, muted neon stage,
sunset gradient horizon, chrome geometric structures,
floating holographic text, film grain overlay,
80s sci-fi conference atmosphere
```

**游戏界面**
```
retro sci-fi game HUD, neon HUD display,
scanline CRT monitor, cyan and pink muted glow,
perspective grid, chrome health bars,
80s arcade aesthetic
```

**音乐/娱乐**
```
synthwave album cover, muted neon sunset,
retro future cityscape, film grain,
chrome spheres, VHS subtle glitch,
electronic music poster
```

## 10. 代表案例与参考来源

- **Stranger Things** — 标题设计与霓虹复古美学
- **Blade Runner 2049** — 日落霓虹与深空调色
- **Synthwave / Retrowave** 专辑封面（如 The Midnight、FM-84）
- **NASA 80s Posters** — 太空时代浪漫技术主义
- **来源**：SlideCraft Falcon-Obsidian-Black-Widow 设计系统升级方案 §4.2
