# Combo 10 — 深色学院（Dark Academia）

## 1. 设计理念 / 角色定义

古典图书馆、皮革装帧、天文图谱与炼金术手稿的数字化重译。深棕背景、羊皮纸色文字、金色点缀，让知识本身成为视觉主角。

**角色**：一位在羊皮纸与皮革之间工作的古籍装帧师。每页幻灯片都像一本打开的书：左页标题，右页内容，角饰与双线框守住边界。

**适用场景**：知识型演讲、历史/文化内容、深度研究发布、个人品牌故事、文学/哲学主题。

---

## 2. 风格约束（必须 / 禁止）

**必须**：
- 使用 5.2 节给出的深色学院色板。
- Display 使用 `Cinzel` 或 `Oranienbaum`；Body 使用 `Crimson Text` 或 `Source Serif 4`。
- 每页使用装饰性首字下沉（drop cap）。
- 边框使用双线框（double border）+ 角饰。
- 图表/数据使用手绘天文图/植物图鉴风格线条。
- 使用 `references/textures.css` 中的 `--texture-leather` 作为背景纹理，`--texture-paper` 作为内容区纹理。

**禁止**：
- 纯黑背景（`#000000`）、纯 RGB 主色。
- 现代 sans-serif 作为 Display 默认。
- 圆角大于 2px、柔和投影、渐变背景。
- 无 rights/source 注记的素材图片。

---

## 3. 色彩系统

```css
:root {
  --academia-bg:      #1A1816;
  --academia-paper:   #2B2622;
  --academia-ink:     #E8DCC4;
  --academia-gold:    #C5A572;
  --academia-oxblood: #6B2737;
  --academia-sage:    #6B7F59;
}
```

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Cinzel** | Google Fonts | `'Oranienbaum', 'Noto Serif SC', serif` |
| Body | **Crimson Text** | Google Fonts | `'Source Serif 4', 'Noto Serif SC', serif` |
| Annotation | **JetBrains Mono** | Google Fonts | `'Source Serif 4', serif` |
| 中文标题 | **Noto Serif SC** | Google Fonts | `'Source Han Serif SC', serif` |
| 中文正文 | **Noto Sans SC** | Google Fonts | `system-ui, sans-serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;700&family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Cinzel', 'Oranienbaum', 'Noto Serif SC', serif;
  --font-body:    'Crimson Text', 'Source Serif 4', 'Noto Sans SC', serif;
  --font-mono:    'JetBrains Mono', 'Source Serif 4', serif;
}
```

---

## 5. 布局模式

### 标题页
- 全页皮革纹理背景。
- 中央：双层双线框内的标题，四角放置小型角饰。
- 标题使用金色烫印渐变 + 阴影。

### 内容页
- 两栏“打开的书”布局：左侧标题/章节号，右侧正文。
- 正文首段使用首字下沉（drop cap）。
- 页边使用细双线框。

### 数据/图谱页
- 使用 SVG 手绘风格线条（植物/天文图鉴）。
- 线条颜色：`--academia-ink` 或 `--academia-gold`。
- 数字使用等宽注释字体。

---

## 6. CSS 效果库

```css
/* 皮革背景 + 纸张内容区 */
.academia-slide {
  background-color: var(--academia-bg);
  color: var(--academia-ink);
}
.paper-panel {
  background: var(--academia-paper);
  border: 1px solid rgba(197,165,114,0.25);
  box-shadow: inset 0 0 60px rgba(0,0,0,0.35);
}

/* 双线框 */
.double-border {
  border: 4px double var(--academia-gold);
  padding: clamp(1.5rem, 4vw, 3rem);
  position: relative;
}

/* 角饰 */
.corner-ornament {
  position: absolute; width: 24px; height: 24px;
  border: 1px solid var(--academia-gold);
}
.corner-ornament.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
.corner-ornament.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
.corner-ornament.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
.corner-ornament.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

/* 首字下沉 */
.drop-cap::first-letter {
  float: left;
  font-family: var(--font-display);
  font-size: 3.6em;
  line-height: 0.85;
  padding-right: 0.1em;
  color: var(--academia-gold);
}

/* 金色烫印 */
.gold-foil {
  background: linear-gradient(135deg, #C5A572 0%, #E8DCC4 40%, #C5A572 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.6));
}

/* 纹理层 */
.texture-leather {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  opacity: 0.12; mix-blend-mode: multiply;
  background-image: var(--texture-leather);
  background-size: 250px 250px;
}
.texture-paper {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  opacity: 0.05; mix-blend-mode: multiply;
  background-image: var(--texture-paper);
  background-size: 200px 200px;
}
```

---

## 7. 动画建议

| 元素 | 效果 | 时长 | 触发 |
|---|---|---|---|
| 标题 | 淡入 + 轻微上移 | 500 ms | 进入 |
| 双线框 | 从中心向四周展开 | 600 ms | 进入 |
| 角饰 | 依次淡入 | 300 ms | 交错 80 ms |
| Drop cap | 缩放入场 | 500 ms | 进入 |
| 手绘线 | stroke-dashoffset 绘制 | 600 ms | 进入 |

```css
@keyframes frame-expand {
  from { clip-path: inset(50% 50% 50% 50%); }
  to   { clip-path: inset(0 0 0 0); }
}
.frame-expand { animation: frame-expand 0.6s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .reveal, .frame-expand { animation: none; opacity: 1; transform: none; clip-path: none; }
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
  <title>Dark Academia</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;700&family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --academia-bg:      #1A1816;
      --academia-paper:   #2B2622;
      --academia-ink:     #E8DCC4;
      --academia-gold:    #C5A572;
      --academia-oxblood: #6B2737;
      --academia-sage:    #6B7F59;

      --font-display: 'Cinzel', 'Oranienbaum', 'Noto Serif SC', serif;
      --font-body:    'Crimson Text', 'Source Serif 4', 'Noto Sans SC', serif;
      --font-mono:    'JetBrains Mono', 'Source Serif 4', serif;

      --title-size: clamp(2.8rem, 7vw, 5.5rem);
      --body-size:  clamp(0.9rem, 1.4vw, 1.15rem);
      --slide-padding: clamp(2rem, 5vw, 5rem);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; overflow-x: hidden; background: var(--academia-bg); }
    html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }

    .slide {
      width: 100vw; height: 100vh; height: 100dvh;
      overflow: hidden; scroll-snap-align: start;
      position: relative; display: flex; flex-direction: column;
      background: var(--academia-bg);
      color: var(--academia-ink);
      font-family: var(--font-body);
    }

    .slide-content {
      flex: 1; display: flex; flex-direction: column;
      justify-content: center; padding: var(--slide-padding);
      position: relative; z-index: 2; max-height: 100%;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    .texture-leather {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      opacity: 0.12; mix-blend-mode: multiply;
      background-image: var(--texture-leather);
      background-size: 250px 250px;
    }
    .texture-paper {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      opacity: 0.05; mix-blend-mode: multiply;
      background-image: var(--texture-paper);
      background-size: 200px 200px;
    }

    .double-border {
      border: 4px double var(--academia-gold);
      padding: clamp(2rem, 5vw, 4rem);
      position: relative;
      align-self: center;
      text-align: center;
      max-width: min(80vw, 900px);
    }
    .corner-ornament {
      position: absolute; width: 24px; height: 24px;
      border: 1px solid var(--academia-gold);
    }
    .corner-ornament.tl { top: -4px; left: -4px; border-right: none; border-bottom: none; }
    .corner-ornament.tr { top: -4px; right: -4px; border-left: none; border-bottom: none; }
    .corner-ornament.bl { bottom: -4px; left: -4px; border-right: none; border-top: none; }
    .corner-ornament.br { bottom: -4px; right: -4px; border-left: none; border-top: none; }

    .title {
      font-family: var(--font-display);
      font-size: var(--title-size);
      line-height: 1.1;
      letter-spacing: 0.08em;
    }
    .gold-foil {
      background: linear-gradient(135deg, #C5A572 0%, #E8DCC4 45%, #C5A572 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 1px 1px rgba(0,0,0,0.6));
    }

    .book-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }
    .book-left {
      font-family: var(--font-display);
      font-size: clamp(3rem, 9vw, 6rem);
      color: var(--academia-gold);
      line-height: 1;
    }
    .book-right {
      border-left: 1px solid rgba(197,165,114,0.35);
      padding-left: clamp(1.5rem, 3vw, 3rem);
    }
    .book-right p {
      font-size: var(--body-size);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    .drop-cap::first-letter {
      float: left;
      font-family: var(--font-display);
      font-size: 3.6em;
      line-height: 0.85;
      padding-right: 0.1em;
      color: var(--academia-gold);
    }

    .reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .slide.visible .reveal { opacity: 1; transform: translateY(0); }

    @keyframes frame-expand {
      from { clip-path: inset(50% 50% 50% 50%); }
      to   { clip-path: inset(0 0 0 0); }
    }
    .slide.visible .double-border { animation: frame-expand 0.6s ease-out forwards; }

    @media (max-width: 800px) {
      .book-layout { grid-template-columns: 1fr; }
      .book-right { border-left: none; padding-left: 0; border-top: 1px solid rgba(197,165,114,0.35); padding-top: 1.5rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.2s !important; }
      html { scroll-behavior: auto; }
      .reveal, .double-border { opacity: 1; transform: none; clip-path: none; }
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="texture-leather" aria-hidden="true"></div>
    <div class="slide-content mixed-text">
      <div class="double-border reveal">
        <div class="corner-ornament tl"></div><div class="corner-ornament tr"></div>
        <div class="corner-ornament bl"></div><div class="corner-ornament br"></div>
        <h1 class="title gold-foil">DARK<br>ACADEMIA</h1>
        <p style="margin-top:1.5rem; font-family:var(--font-mono); font-size:0.75rem; letter-spacing:0.15em; color:var(--academia-gold);">LIBER · RERUM · COGNITIO</p>
      </div>
    </div>
  </section>

  <section class="slide">
    <div class="texture-paper" aria-hidden="true"></div>
    <div class="slide-content mixed-text">
      <div class="book-layout">
        <div class="book-left reveal">II</div>
        <div class="book-right reveal">
          <p class="drop-cap">知识的视觉应当是沉重的。深色学院风格用皮革、金箔与双线框，把每一页都变成可以翻阅的章节。</p>
          <p>首字下沉如同古籍的开端；角饰守住边界；羊皮纸色的文字在深色背景上低声讲述。</p>
        </div>
      </div>
    </div>
  </section>

  <script>
    const slides = document.querySelectorAll('.slide');
    let idx = 0;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.35 });
    slides.forEach(s => obs.observe(s));
    document.addEventListener('keydown', e => {
      if (['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); idx = Math.min(idx+1, slides.length-1); slides[idx].scrollIntoView({behavior:'smooth'}); }
      else if (['ArrowUp','ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); idx = Math.max(idx-1,0); slides[idx].scrollIntoView({behavior:'smooth'}); }
    });
  </script>
</body>
</html>
```

---

## 9. 生图提示词库

| 场景 | 提示词 |
|---|---|
| 封面 | dark academia book cover, leather texture background, gold foil serif title, double border with corner ornaments, oxblood accents, candlelight mood |
| 内页 | aged parchment page, drop cap initial, crimson text, botanical illustration line art, gold ink diagrams, classical library atmosphere |
| 纹理 | scanned leather book cover texture, warm brown, subtle creases, seamless tile, 12% opacity |

---

## 10. 代表案例与参考来源

- **古典装帧与炼金术手稿** — 首字下沉、角饰、金箔的视觉源头。
- **《哈利·波特》/《指环王》书籍设计** — 当代深色学院意象的大众参考。
- **Cinzel / Oranienbaum** — Google Fonts 古典 Display 字体。

