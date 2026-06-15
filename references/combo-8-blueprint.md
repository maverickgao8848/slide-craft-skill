# Combo 8 — 蓝图设计（Blueprint）

## 1. 设计理念 / 角色定义

源于建筑和工程制图的技术美学：深蓝底、白线网格、精确标注。升级为“数字工程蓝图”，在保留制图精确感的同时加入工程标题栏、比例尺、折叠线、修订号和带箭头端点的尺寸线。

**角色**：一位把每张幻灯片都当作一张“可施工图纸”的技术美术。结构即装饰，标注即叙事。

**适用场景**：技术架构分享、产品设计文档、工程/建筑提案、开发者大会、设计系统规范。

---

## 2. 风格约束（必须 / 禁止）

**必须**：
- 使用 4.8 节给出的蓝图色板。
- Display/Annotation 首选 `OCR-B` 或 `DIN 1451`，并提供等宽降级。
- Body 使用 `Sono` 或 `Fragment Mono`。
- 每页包含：工程标题栏、比例尺、修订号/日期、至少一条带箭头端点的尺寸线。
- 30° 等轴测投影用于立体示意图。
- 使用 `references/textures.css` 中的 `--texture-grain` 作为极淡屏幕颗粒层。

**禁止**：
- 渐变填充、柔和阴影、大圆角（>4px）。
- 彩色照片、装饰性无功能元素。
- 纯 RGB 主色、默认 Display 字体（Inter / Space Grotesk / Nunito / Orbitron）。
- 线条绘制动画未分阶段。

---

## 3. 色彩系统

```css
:root {
  --blueprint-bg:       #0A1628;
  --blueprint-grid-major: rgba(255,255,255,0.08);
  --blueprint-grid-minor: rgba(255,255,255,0.03);
  --blueprint-line:     #FFFFFF;
  --blueprint-line-secondary: #4A90D9;
  --blueprint-accent:   #F4A261;     /* 琥珀，关键标注 */
  --blueprint-dim:      rgba(255,255,255,0.35);
}
```

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display / Annotation | **OCR-B** / **DIN 1451** | 工程字体 | `'JetBrains Mono', monospace` |
| Body | **Sono** | Google Fonts | `'Fragment Mono', 'Noto Sans SC', monospace` |
| Data / 标注 | **JetBrains Mono** | Google Fonts | `'Fragment Mono', monospace` |
| 中文 | **Noto Sans SC** | Google Fonts | `system-ui, sans-serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Sono:wght@400;600&family=Fragment+Mono&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'OCR-B', 'DIN 1451', 'JetBrains Mono', monospace;
  --font-body:    'Sono', 'Fragment Mono', 'Noto Sans SC', monospace;
  --font-mono:    'JetBrains Mono', 'Fragment Mono', monospace;
}
```

---

## 5. 布局模式

### 标题页
- 网格背景铺满（主网格 80px，次网格 20px）。
- 中央：带边框的标题容器，四周有角标。
- 标题容器下方：水平尺寸线，两端箭头。
- 右下角：工程标题栏（项目名称、比例、修订号、日期）。

### 内容页
- 左侧 30%：大章节编号 + 等轴测示意图。
- 右侧 70%：要点列表，使用虚线标注框。
- 底部：折叠线（长虚线从一边到另一边）。

---

## 6. CSS 效果库

```css
/* 蓝图网格背景 */
.blueprint-grid {
  background-color: var(--blueprint-bg);
  background-image:
    linear-gradient(var(--blueprint-grid-minor) 1px, transparent 1px),
    linear-gradient(90deg, var(--blueprint-grid-minor) 1px, transparent 1px),
    linear-gradient(var(--blueprint-grid-major) 1px, transparent 1px),
    linear-gradient(90deg, var(--blueprint-grid-major) 1px, transparent 1px);
  background-size: 20px 20px, 20px 20px, 80px 80px, 80px 80px;
}

/* 角标 */
.corner-mark {
  position: absolute; width: 24px; height: 24px;
  border: 2px solid var(--blueprint-dim);
}
.corner-mark.tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
.corner-mark.tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
.corner-mark.bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
.corner-mark.br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

/* 尺寸线带箭头端点 */
.dimension-line {
  position: relative; height: 1px;
  background: var(--blueprint-line);
}
.dimension-line::before,
.dimension-line::after {
  content: ''; position: absolute; top: -5px;
  width: 0; height: 0; border-style: solid;
}
.dimension-line::before {
  left: -6px;
  border-width: 5px 6px 5px 0;
  border-color: transparent var(--blueprint-line) transparent transparent;
}
.dimension-line::after {
  right: -6px;
  border-width: 5px 0 5px 6px;
  border-color: transparent transparent transparent var(--blueprint-line);
}

/* 工程标题栏 */
.title-block {
  position: absolute; bottom: 24px; right: 24px;
  border: 1px solid var(--blueprint-line);
  background: rgba(10, 22, 40, 0.85);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.title-block td { padding: 6px 10px; border: 1px solid var(--blueprint-dim); color: var(--blueprint-line); }
.title-block td.label { color: var(--blueprint-line-secondary); }

/* 折叠线 */
.fold-line {
  position: absolute; left: 0; right: 0;
  border-top: 1px dashed var(--blueprint-dim);
}

/* 标注框 */
.annotation-box {
  border: 1px dashed var(--blueprint-dim);
  padding: 12px 16px; position: relative;
  background: rgba(10, 22, 40, 0.7);
}
.annotation-box::before {
  content: attr(data-label);
  position: absolute; top: -10px; left: 12px;
  font-family: var(--font-mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--blueprint-accent); background: var(--blueprint-bg);
  padding: 0 8px;
}

/* 真实扫描颗粒 */
.texture-overlay {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  opacity: 0.04; mix-blend-mode: overlay;
  background-image: var(--texture-grain);
  background-size: 200px 200px;
}
```

---

## 7. 动画建议

| 元素 | 效果 | 时长 | 触发 |
|---|---|---|---|
| 网格 | 淡入 | 400 ms | 进入 |
| 标题容器边框 | clip-path 从左上展开 | 500 ms | 进入 |
| 标题文字 | 透明度淡入 | 400 ms | 边框后 |
| 尺寸线 | 宽度从 0 到 100% | 400 ms | 进入 |
| 标注框 | 按顺序淡入 | 300 ms | 交错 100 ms |

```css
@keyframes border-reveal {
  from { clip-path: inset(0 100% 100% 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.border-reveal { animation: border-reveal 0.5s ease-out forwards; }

@keyframes line-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.line-grow { transform-origin: center; animation: line-grow 0.4s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .border-reveal, .line-grow, .reveal { animation: none; opacity: 1; transform: none; }
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
  <title>Blueprint</title>
  <link href="https://fonts.googleapis.com/css2?family=Sono:wght@400;600&family=Fragment+Mono&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --blueprint-bg:       #0A1628;
      --blueprint-grid-major: rgba(255,255,255,0.08);
      --blueprint-grid-minor: rgba(255,255,255,0.03);
      --blueprint-line:     #FFFFFF;
      --blueprint-line-secondary: #4A90D9;
      --blueprint-accent:   #F4A261;
      --blueprint-dim:      rgba(255,255,255,0.35);

      --font-display: 'OCR-B', 'DIN 1451', 'JetBrains Mono', monospace;
      --font-body:    'Sono', 'Fragment Mono', 'Noto Sans SC', monospace;
      --font-mono:    'JetBrains Mono', 'Fragment Mono', monospace;

      --title-size: clamp(2.5rem, 8vw, 5.5rem);
      --body-size:  clamp(0.8rem, 1.3vw, 1rem);
      --slide-padding: clamp(1.5rem, 4vw, 4rem);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; overflow-x: hidden; background: var(--blueprint-bg); }
    html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }

    .slide {
      width: 100vw; height: 100vh; height: 100dvh;
      overflow: hidden; scroll-snap-align: start;
      position: relative; display: flex; flex-direction: column;
      color: var(--blueprint-line);
      font-family: var(--font-body);
      background-color: var(--blueprint-bg);
      background-image:
        linear-gradient(var(--blueprint-grid-minor) 1px, transparent 1px),
        linear-gradient(90deg, var(--blueprint-grid-minor) 1px, transparent 1px),
        linear-gradient(var(--blueprint-grid-major) 1px, transparent 1px),
        linear-gradient(90deg, var(--blueprint-grid-major) 1px, transparent 1px);
      background-size: 20px 20px, 20px 20px, 80px 80px, 80px 80px;
    }

    .slide-content {
      flex: 1; display: flex; flex-direction: column;
      justify-content: center; padding: var(--slide-padding);
      position: relative; z-index: 2; max-height: 100%;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    /* 真实扫描颗粒，值来自 references/textures.css --texture-grain */
    .texture-overlay {
      position: absolute; inset: 0; pointer-events: none; z-index: 1;
      opacity: 0.04; mix-blend-mode: overlay;
      background-image: var(--texture-grain);
      background-size: 200px 200px;
    }

    .corner-mark {
      position: absolute; width: 24px; height: 24px;
      border: 2px solid var(--blueprint-dim); z-index: 3;
    }
    .corner-mark.tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
    .corner-mark.tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
    .corner-mark.bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
    .corner-mark.br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

    .title-container {
      position: relative; align-self: center;
      border: 1px solid var(--blueprint-line);
      padding: clamp(2rem, 5vw, 4rem) clamp(2.5rem, 7vw, 5rem);
      text-align: center;
      background: rgba(10, 22, 40, 0.65);
    }

    .title-label {
      position: absolute; top: -12px; left: 24px;
      font-family: var(--font-mono); font-size: 11px;
      text-transform: uppercase; letter-spacing: 0.15em;
      color: var(--blueprint-accent); background: var(--blueprint-bg);
      padding: 0 12px;
    }

    .title {
      font-family: var(--font-display);
      font-size: var(--title-size);
      font-weight: 400;
      letter-spacing: 0.04em;
      line-height: 1;
    }
    .subtitle {
      font-family: var(--font-mono);
      font-size: clamp(0.8rem, 1.6vw, 1.1rem);
      color: var(--blueprint-line-secondary);
      letter-spacing: 0.1em;
      margin-top: 1rem;
      text-transform: uppercase;
    }

    .dimension-wrap {
      position: absolute; bottom: -36px; left: 50%;
      transform: translateX(-50%); width: 80%;
    }
    .dimension-line {
      position: relative; height: 1px;
      background: var(--blueprint-line);
      transform-origin: center;
    }
    .dimension-line::before,
    .dimension-line::after {
      content: ''; position: absolute; top: -5px;
      width: 0; height: 0; border-style: solid;
    }
    .dimension-line::before {
      left: -6px;
      border-width: 5px 6px 5px 0;
      border-color: transparent var(--blueprint-line) transparent transparent;
    }
    .dimension-line::after {
      right: -6px;
      border-width: 5px 0 5px 6px;
      border-color: transparent transparent transparent var(--blueprint-line);
    }
    .dimension-value {
      position: absolute; top: 6px; left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-mono); font-size: 11px;
      color: var(--blueprint-line-secondary); background: var(--blueprint-bg);
      padding: 0 8px;
    }

    .title-block {
      position: absolute; bottom: 24px; right: 24px; z-index: 4;
      border: 1px solid var(--blueprint-line);
      background: rgba(10, 22, 40, 0.85);
      font-family: var(--font-mono);
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-collapse: collapse;
    }
    .title-block td { padding: 6px 10px; border: 1px solid var(--blueprint-dim); color: var(--blueprint-line); }
    .title-block td.label { color: var(--blueprint-line-secondary); }

    .fold-line {
      position: absolute; left: 8%; right: 8%;
      border-top: 1px dashed var(--blueprint-dim); z-index: 0;
    }

    .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.4s ease, transform 0.4s ease; }
    .slide.visible .reveal { opacity: 1; transform: translateY(0); }

    @keyframes border-reveal {
      from { clip-path: inset(0 100% 100% 0); }
      to   { clip-path: inset(0 0 0 0); }
    }
    .slide.visible .title-container { animation: border-reveal 0.5s ease-out forwards; }

    @keyframes line-grow {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    .slide.visible .dimension-line { animation: line-grow 0.4s ease-out 0.4s forwards; }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.2s !important; }
      html { scroll-behavior: auto; }
      .reveal, .title-container, .dimension-line { opacity: 1; transform: none; clip-path: none; }
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="corner-mark tl"></div><div class="corner-mark tr"></div>
    <div class="corner-mark bl"></div><div class="corner-mark br"></div>

    <div class="slide-content mixed-text">
      <div class="title-container reveal">
        <span class="title-label">Section 01</span>
        <h1 class="title">BLUEPRINT</h1>
        <p class="subtitle">技术图纸 / Technical Drawing</p>
        <div class="dimension-wrap">
          <div class="dimension-line"></div>
          <span class="dimension-value">1200 px</span>
        </div>
      </div>
    </div>

    <table class="title-block">
      <tr><td class="label">Project</td><td>System Arch</td></tr>
      <tr><td class="label">Scale</td><td>1:1</td></tr>
      <tr><td class="label">Rev</td><td>02</td></tr>
      <tr><td class="label">Date</td><td>2026-06-15</td></tr>
    </table>
  </section>

  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="fold-line" style="bottom:28%;"></div>
    <div class="slide-content mixed-text">
      <div style="display:grid; grid-template-columns: 1fr 2fr; gap: 4vw; align-items:center;">
        <div class="reveal" style="font-family:var(--font-display); font-size:clamp(4rem,12vw,8rem); color:var(--blueprint-line-secondary); line-height:1;">02</div>
        <div>
          <div class="annotation-box reveal" data-label="Layer 1" style="margin-bottom:1rem;">
            服务层 Service Layer：负责路由、认证与限流。
          </div>
          <div class="annotation-box reveal" data-label="Layer 2" style="margin-bottom:1rem;">
            业务层 Business Layer：领域模型与用例编排。
          </div>
          <div class="annotation-box reveal" data-label="Layer 3">
            数据层 Data Layer：仓储、缓存与事件持久化。
          </div>
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
| 封面 | dark blueprint paper, white technical grid, engineering title block, amber accent annotations, dimension lines with arrowheads, precise monospace typography |
| 架构图 | isometric cube wireframes on blueprint grid, 30-degree projection, dashed fold lines, OCR-B labels, dark navy background |
| 纹理 | scanned 35mm film grain, subtle grey noise, seamless tile, 4% opacity, technical blueprint screen texture |

---

## 10. 代表案例与参考来源

- **Palantir Blueprint** — 命名来源，强调系统化的技术图纸美学。
- **Dribbble “blueprint UI”** — 工程标注、标题栏、尺寸线的当代演绎。
- **ISO 5455 / DIN 1451** — 工程制图字体与标注规范。

