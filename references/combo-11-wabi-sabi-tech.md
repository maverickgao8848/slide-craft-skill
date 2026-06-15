# Combo 11 — 侘寂科技（Wabi-Sabi Tech）

## 1. 设计理念 / 角色定义

日本极简主义 × 科技人文：强调“间（ma）”、不对称、自然材料与墨渍边缘。不是冷淡的北欧极简，而是有温度、有痕迹、有呼吸的科技表达。

**角色**：一位在京都工坊里写代码的设计师。相信缺陷之美、材料之真、留白之力。

**适用场景**：科技产品的人文叙事、可持续设计、东方美学品牌、Aesop 风格发布会、慢科技主题。

---

## 2. 风格约束（必须 / 禁止）

**必须**：
- 使用 5.3 节给出的侘寂科技色板。
- Display 使用 `Zen Kaku Gothic New` / `Noto Sans JP`；Body 使用 `Zen Old Mincho` / `Noto Serif JP`。
- 大量留白（≥45%），不对称构图。
- 至少一处竖排文字装饰（仅标题旁）。
- 使用 `references/textures.css` 中的 `--texture-washi`。
- 墨渍边缘效果通过不规则 border-radius 或渐变遮罩实现。

**禁止**：
- 纯 RGB 主色、纯黑/纯白背景。
- 对称居中、均等网格、复制式卡片。
- 现代几何无衬线作为 Display 默认。
- 锐利直角、均匀阴影、高饱和渐变。

---

## 3. 色彩系统

```css
:root {
  --wabi-bg:        #F0EDE8;
  --wabi-paper:     #FAF8F5;
  --wabi-ink:       #2C2C2C;
  --wabi-stone:     #A8A39A;
  --wabi-clay:      #B07C6B;
  --wabi-moss:      #6B7C5A;
  --wabi-charcoal:  #3A3632;
}
```

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Zen Kaku Gothic New** | Google Fonts | `'Noto Sans JP', 'Noto Sans SC', sans-serif` |
| Body | **Zen Old Mincho** | Google Fonts | `'Noto Serif JP', 'Noto Serif SC', serif` |
| Accent / Data | **JetBrains Mono** | Google Fonts | `'Zen Kaku Gothic New', sans-serif` |
| 中文标题 | **Noto Sans SC** | Google Fonts | `'Noto Sans JP', sans-serif` |
| 中文正文 | **Noto Serif SC** | Google Fonts | `'Noto Serif JP', serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700;900&family=Zen+Old+Mincho:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Serif+SC:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Zen Kaku Gothic New', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
  --font-body:    'Zen Old Mincho', 'Noto Serif JP', 'Noto Serif SC', serif;
  --font-mono:    'JetBrains Mono', 'Zen Kaku Gothic New', sans-serif;
}
```

---

## 5. 布局模式

### 标题页
- 元素刻意偏置：标题居左上方，细线从右上方斜穿至左下方。
- 右侧竖排小字作为装饰（`writing-mode: vertical-rl`）。
- 底部大面积留白。

### 内容页
- 不对称两栏：左窄右宽或左宽右窄。
- 纤细装饰线（1px stone 色）划分空间。
- 文字块使用 clay/moss 色微点缀，面积不超过 10%。

### 图片/材质页
- 单张主图偏置，边缘带墨渍效果。
- 图片说明置于对角远处，形成张力。

---

## 6. CSS 效果库

```css
/* 和纸背景 */
.wabi-slide {
  background: var(--wabi-bg);
  color: var(--wabi-ink);
}

/* 墨渍边缘 */
.ink-bleed {
  border-radius: 45% 55% 52% 48% / 38% 42% 58% 62%;
  box-shadow: inset 0 0 30px rgba(58,54,50,0.08);
}

/* 竖排装饰文字 */
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  color: var(--wabi-stone);
}

/* 纤细张力线 */
.tension-line {
  height: 1px;
  background: var(--wabi-stone);
  opacity: 0.4;
  transform-origin: left center;
}

/* 陶土/苔藓点缀块 */
.accent-clay { background: var(--wabi-clay); color: var(--wabi-paper); }
.accent-moss { background: var(--wabi-moss); color: var(--wabi-paper); }

/* 和纸纹理 */
.texture-overlay {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  opacity: 0.08; mix-blend-mode: multiply;
  background-image: var(--texture-washi);
  background-size: 220px 220px;
}
```

---

## 7. 动画建议

| 元素 | 效果 | 时长 | 触发 |
|---|---|---|---|
| 标题 | 从偏置位置淡入 | 500 ms | 进入 |
| 竖排文字 | 从上到下淡入 | 400 ms | 延迟 150 ms |
| 张力线 | 宽度从 0 延伸 | 600 ms | 进入 |
| 墨渍块 | 轻微缩放 + 淡入 | 500 ms | 进入 |
| 内容块 | 依次淡入 | 350 ms | 交错 100 ms |

```css
@keyframes line-stretch {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.line-stretch { transform-origin: left; animation: line-stretch 0.6s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .reveal, .line-stretch { animation: none; opacity: 1; transform: none; }
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
  <title>Wabi-Sabi Tech</title>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700;900&family=Zen+Old+Mincho:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Serif+SC:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --wabi-bg:       #F0EDE8;
      --wabi-paper:    #FAF8F5;
      --wabi-ink:      #2C2C2C;
      --wabi-stone:    #A8A39A;
      --wabi-clay:     #B07C6B;
      --wabi-moss:     #6B7C5A;
      --wabi-charcoal: #3A3632;

      --font-display: 'Zen Kaku Gothic New', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
      --font-body:    'Zen Old Mincho', 'Noto Serif JP', 'Noto Serif SC', serif;
      --font-mono:    'JetBrains Mono', 'Zen Kaku Gothic New', sans-serif;

      --title-size: clamp(2.5rem, 8vw, 6rem);
      --body-size:  clamp(0.85rem, 1.3vw, 1.05rem);
      --slide-padding: clamp(2rem, 6vw, 6rem);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; overflow-x: hidden; background: var(--wabi-bg); }
    html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }

    .slide {
      width: 100vw; height: 100vh; height: 100dvh;
      overflow: hidden; scroll-snap-align: start;
      position: relative; display: flex; flex-direction: column;
      background: var(--wabi-bg);
      color: var(--wabi-ink);
      font-family: var(--font-body);
    }

    .slide-content {
      flex: 1; display: flex; flex-direction: column;
      justify-content: center; padding: var(--slide-padding);
      position: relative; z-index: 2; max-height: 100%;
    }

    .mixed-text { word-spacing: 0.125em; }
    .mixed-text > * { word-spacing: normal; }

    .texture-overlay {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      opacity: 0.08; mix-blend-mode: multiply;
      background-image: var(--texture-washi);
      background-size: 220px 220px;
    }

    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      letter-spacing: 0.35em;
      font-size: 0.7rem;
      color: var(--wabi-stone);
      font-family: var(--font-display);
    }

    .title {
      font-family: var(--font-display);
      font-size: var(--title-size);
      line-height: 1.05;
      letter-spacing: 0.02em;
      font-weight: 700;
    }
    .title span { color: var(--wabi-clay); }

    .subtitle {
      font-family: var(--font-body);
      font-size: clamp(0.9rem, 1.6vw, 1.25rem);
      line-height: 1.7;
      color: var(--wabi-charcoal);
      margin-top: 1.5rem;
      max-width: 28ch;
    }

    .tension-line {
      height: 1px;
      background: var(--wabi-stone);
      opacity: 0.4;
      transform-origin: left center;
      margin-top: 2rem;
      width: min(40vw, 320px);
    }

    .ink-bleed {
      border-radius: 45% 55% 52% 48% / 38% 42% 58% 62%;
      box-shadow: inset 0 0 40px rgba(58,54,50,0.07);
    }

    .asymmetric-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: clamp(2rem, 5vw, 5rem);
      align-items: end;
    }
    .asymmetric-layout .left {
      padding-right: clamp(1rem, 3vw, 3rem);
      border-right: 1px solid rgba(168,163,154,0.3);
    }
    .accent-block {
      display: inline-block;
      padding: 0.6em 1em;
      background: var(--wabi-moss);
      color: var(--wabi-paper);
      font-family: var(--font-display);
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      margin-top: 2rem;
    }

    .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .slide.visible .reveal { opacity: 1; transform: translateY(0); }

    @keyframes line-stretch {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    .slide.visible .tension-line { animation: line-stretch 0.6s ease-out forwards; }

    @media (max-width: 800px) {
      .asymmetric-layout { grid-template-columns: 1fr; }
      .asymmetric-layout .left { border-right: none; padding-right: 0; border-bottom: 1px solid rgba(168,163,154,0.3); padding-bottom: 1.5rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.2s !important; }
      html { scroll-behavior: auto; }
      .reveal, .tension-line { opacity: 1; transform: none; }
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="vertical-text reveal" style="position:absolute; top:var(--slide-padding); right:var(--slide-padding); z-index:3;">侘び寂び · Wabi-Sabi</div>
    <div class="slide-content mixed-text">
      <h1 class="title reveal">不完美<br><span>的科技</span></h1>
      <p class="subtitle reveal">在留白的张力中，让材料与时间说话。</p>
      <div class="tension-line reveal"></div>
    </div>
  </section>

  <section class="slide">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text">
      <div class="asymmetric-layout">
        <div class="left reveal">
          <p style="font-family:var(--font-display); font-size:clamp(1.2rem,2.5vw,1.8rem); line-height:1.5; margin-bottom:1rem;">间 · Ma</p>
          <p style="font-size:var(--body-size); line-height:1.9; color:var(--wabi-charcoal);">
            不对称不是失衡，而是让视线在空白与实体之间移动。竖排文字是装饰，不是正文；墨渍边缘提醒我们：科技也可以有手作的痕迹。
          </p>
        </div>
        <div class="reveal" style="text-align:right;">
          <div class="ink-bleed" style="width:min(30vw,220px); height:min(30vw,220px); background:var(--wabi-clay); margin-left:auto; opacity:0.85;"></div>
          <div class="accent-block">NATURAL MATERIAL</div>
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
| 封面 | Japanese wabi-sabi tech aesthetic, washi paper texture, asymmetric layout, vertical typography, clay and moss accents, generous negative space, hand-torn edges |
| 内页 | ink bleed edge card, natural fiber paper, thin stone-colored line, off-center composition, muted earth tones, Aesop-style minimalism |
| 纹理 | scanned handmade washi paper, subtle fiber texture, warm off-white, seamless tile, 8% opacity |

---

## 10. 代表案例与参考来源

- **日本“间（Ma）”美学** — 留白作为积极的空间。
- **Aesop 品牌视觉** — 材料、留白与竖排文字的克制运用。
- **Hideki Nakajima 中岛英树** — 日本实验排版与自然材料。
- **Zen Kaku Gothic New / Zen Old Mincho** — Google Fonts 日文字体。

