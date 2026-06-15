# 组合6：新极简温暖 (Neo-Minimalism + Grainy Blur + Liquid Glass)

> 升级后风格：克制留白 · 单一点缀 · 静态颗粒 · 温暖玻璃

---

## 1. 设计理念 / 角色定义

**新极简温暖风格专家**：用极端的克制与大量留白传递精致，用静态胶片颗粒注入温度，用单一点缀色建立视觉锚点。

- **Neo-Minimalism**：骨架——极端比例、暖中性色、极少元素。
- **Grainy Blur**：温度——真实胶片/手工纸纹理，静态颗粒层。
- **Liquid Glass**：层次——半透明磨砂卡片、柔和光斑、边缘高光。
- **一页一锚点**：每页仅 1 个标题 + 1 段描述 + 1 个玻璃卡片，其余交给留白。

---

## 2. 风格约束（必须 / 禁止）

### 必须

- [x] 仅保留 1 个低饱和点缀色（陶土粉 `#C97B6D`）。
- [x] 删除旧版 6 个高饱和 pop colors。
- [x] 颗粒层为静态，使用 `textures.css` 中的 `--texture-grain` / `--texture-paper`。
- [x] 页边距基于黄金比例：`padding: 8vw 10vw`（桌面）。
- [x] 不对称布局：标题居左、内容偏右、大号章节编号作为背景层。
- [x] 每页最多 1 个玻璃卡片 + 1 个标题 + 1 段描述。
- [x] 标题:正文字号比 ≥ 5:1；中西文混排使用 `.mixed-text`。
- [x] 动画 200–600 ms，提供 `prefers-reduced-motion` 降级。

### 禁止

- [ ] 6 个 pop colors（粉/橙/绿/紫/蓝/青）同时出现。
- [ ] 纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）。
- [ ] 动态噪点动画或闪烁颗粒。
- [ ] 光斑装饰超过 2 个，或透明度超过 0.2。
- [ ] Display 默认使用 Inter / Space Grotesk / Nunito / Orbitron。
- [ ] 中文标题使用字重 200 或过大负 letter-spacing。
- [ ] 在 markdown 中内联 base64 纹理。

---

## 3. 色彩系统

```css
:root {
  --nm-bg: #FAF9F6;
  --nm-bg-alt: #F2F0EA;
  --nm-text: #1A1A1A;
  --nm-text-secondary: #6B6B6B;
  --nm-border: #E5E3DD;
  --nm-accent: #C97B6D; /* 陶土粉，唯一点缀 */
}
```

- 主色 60%：`--nm-bg`
- 文字 30%：`--nm-text` / `--nm-text-secondary`
- 点缀 10%：`--nm-accent`

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Söhne** / **GT America** / **Neue Montreal** | 授权字体 / Fontshare | Satoshi, DM Sans |
| 中文 Display | **Noto Serif SC** 600–700 | Google Fonts | 'PingFang SC', 'Songti SC', serif |
| Body | **Suisse Int'l** / **Satoshi** | Fontshare / 授权 | 'DM Sans', 'Noto Sans SC', sans-serif |
| 中文 Body | **Noto Sans SC** 400 | Google Fonts | 'PingFang SC', 'Microsoft YaHei', sans-serif |
| Data | **JetBrains Mono** | Google Fonts | monospace |

```html
<link rel="preconnect" href="https://api.fontshare.com">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;700&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Noto Serif SC', 'Söhne', 'GT America', 'Neue Montreal', 'Satoshi', 'DM Sans', serif;
  --font-body: 'Satoshi', 'Suisse Int\'l', 'DM Sans', 'Noto Sans SC', 'PingFang SC', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

.mixed-text [lang="en"] { margin-inline: 0.125em; }
```

---

## 5. 布局模式

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  01                                       ┌───────────┐ │
│  极淡背景编号                                │ 玻璃卡片  │ │
│  z-index: 0                                  │  内容     │ │
│                                              │          │ │
│  主标题                                       └───────────┘ │
│  48–96px                                                  │
│                                                          │
│  ───────── 细线分隔                                       │
│                                                          │
│  描述段落（偏右）                                          │
│                                                          │
│                                                          │
│            大面积留白                                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- 桌面页边距：`padding: 8vw 10vw`。
- 标题居左，玻璃卡片偏右，形成不对称张力。
- 章节编号作为背景层，颜色极淡（`opacity: 0.08`），不抢锚点。

---

## 6. CSS 效果库

### 静态颗粒覆盖

```css
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--texture-grain); /* textures.css */
  opacity: 0.05;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### 温暖磨砂玻璃卡片

```css
.nm-glass {
  position: relative;
  padding: 2.5rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nm-glass:hover {
  transform: translateY(-4px);
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
```

### 单一点缀光斑（最多 2 个，opacity ≤ 0.2）

```css
.nm-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.18;
  background: radial-gradient(circle, rgba(201, 123, 109, 0.35) 0%, transparent 70%);
}
```

### 细线分隔

```css
.nm-hairline {
  width: 60px;
  height: 1px;
  background: var(--nm-border);
  margin: 2rem 0;
}
```

---

## 7. 动画建议

| 动画 | 时长 | 触发 | 说明 |
|---|---|---|---|
| 标题淡入上移 | 500 ms | 进入单次 | `translateY(20px)` + opacity |
| 描述淡入 | 400 ms | 进入单次 | 延迟 150 ms |
| 玻璃卡片入场 | 600 ms | 进入单次 | 延迟 250 ms，带轻微模糊淡入 |
| 光斑呼吸 | 10 s | 循环 | 低幅度 `scale(1.02)`，opacity 0.15→0.18 |

```css
@keyframes nm-enter {
  0%   { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes nm-glass-enter {
  0%   { opacity: 0; transform: translateY(24px); backdrop-filter: blur(0) saturate(100%); }
  100% { opacity: 1; transform: translateY(0); backdrop-filter: blur(20px) saturate(150%); }
}

@keyframes nm-breathe {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50%      { opacity: 0.18; transform: scale(1.03); }
}

.nm-animate-title   { animation: nm-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.nm-animate-body    { opacity: 0; animation: nm-enter 0.4s ease-out 0.15s forwards; }
.nm-animate-glass   { opacity: 0; animation: nm-glass-enter 0.6s ease-out 0.25s forwards; }
.nm-blob            { animation: nm-breathe 10s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .nm-animate-title, .nm-animate-body, .nm-animate-glass, .nm-blob {
    animation: none;
    opacity: 1;
    transform: none;
    backdrop-filter: blur(20px) saturate(150%);
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
  <title>新极简温暖 · Neo Minimalism</title>
  <link rel="preconnect" href="https://api.fontshare.com">
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@600;700&family=Noto+Sans+SC:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --nm-bg: #FAF9F6;
      --nm-bg-alt: #F2F0EA;
      --nm-text: #1A1A1A;
      --nm-text-secondary: #6B6B6B;
      --nm-border: #E5E3DD;
      --nm-accent: #C97B6D;

      --font-display: 'Noto Serif SC', 'Satoshi', 'DM Sans', serif;
      --font-body: 'Satoshi', 'Noto Sans SC', 'PingFang SC', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      /* --texture-grain / --texture-paper 由 textures.css 提供 */
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; }

    body {
      font-family: var(--font-body);
      color: var(--nm-text);
      background: var(--nm-bg);
      overflow-x: hidden;
    }

    .mixed-text [lang="en"] { margin-inline: 0.125em; }

    .slide {
      position: relative;
      width: 100%;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      padding: 8vw 10vw;
      display: grid;
      align-items: center;
    }

    .slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--texture-grain);
      opacity: 0.05;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    .nm-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      opacity: 0.18;
      background: radial-gradient(circle, rgba(201, 123, 109, 0.35) 0%, transparent 70%);
      animation: nm-breathe 10s ease-in-out infinite;
    }

    .nm-blob-1 { width: 360px; height: 360px; top: -120px; right: -80px; }
    .nm-blob-2 { width: 260px; height: 260px; bottom: -80px; left: 10vw; animation-delay: -5s; }

    .chapter-num {
      position: absolute;
      top: 4vw;
      right: 8vw;
      font-family: var(--font-mono);
      font-size: clamp(4rem, 12vw, 10rem);
      font-weight: 400;
      color: var(--nm-text);
      opacity: 0.08;
      line-height: 1;
      user-select: none;
      z-index: 0;
    }

    .nm-content {
      position: relative;
      z-index: 1;
      max-width: 720px;
    }

    .nm-title {
      font-family: var(--font-display);
      font-size: clamp(5rem, 10vw, 8rem);
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: 0.02em;
      color: var(--nm-text);
      animation: nm-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .nm-subtitle {
      font-family: var(--font-body);
      font-size: clamp(0.9rem, 1.5vw, 1.1rem);
      color: var(--nm-text-secondary);
      margin-top: 1.25rem;
      opacity: 0;
      animation: nm-enter 0.4s ease-out 0.15s forwards;
    }

    .nm-hairline {
      width: 60px;
      height: 1px;
      background: var(--nm-border);
      margin: 2rem 0;
      opacity: 0;
      animation: nm-enter 0.4s ease-out 0.25s forwards;
    }

    .nm-glass {
      position: relative;
      padding: 2.5rem;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.55);
      backdrop-filter: blur(20px) saturate(150%);
      -webkit-backdrop-filter: blur(20px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
      max-width: 520px;
      opacity: 0;
      animation: nm-glass-enter 0.6s ease-out 0.3s forwards;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .nm-glass:hover {
      transform: translateY(-4px);
      box-shadow:
        0 16px 40px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }

    .nm-glass h3 {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--nm-text);
    }

    .nm-glass p, .nm-glass li {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--nm-text-secondary);
    }

    .nm-glass ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .nm-glass li::before {
      content: '·';
      color: var(--nm-accent);
      margin-right: 0.5rem;
      font-weight: 700;
    }

    .nm-accent-text { color: var(--nm-accent); }

    @keyframes nm-enter {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes nm-glass-enter {
      0%   { opacity: 0; transform: translateY(24px); backdrop-filter: blur(0) saturate(100%); }
      100% { opacity: 1; transform: translateY(0); backdrop-filter: blur(20px) saturate(150%); }
    }

    @keyframes nm-breathe {
      0%, 100% { opacity: 0.15; transform: scale(1); }
      50%      { opacity: 0.18; transform: scale(1.03); }
    }

    @media (max-width: 768px) {
      .slide { padding: 10vw 6vw; }
      .nm-title { font-size: clamp(3.5rem, 12vw, 5rem); }
      .nm-glass { padding: 1.75rem; }
      .nm-glass p, .nm-glass li { font-size: 0.85rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .nm-title, .nm-subtitle, .nm-hairline, .nm-glass, .nm-blob {
        animation: none;
        opacity: 1;
        transform: none;
        backdrop-filter: blur(20px) saturate(150%);
      }
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="nm-blob nm-blob-1"></div>
    <div class="nm-blob nm-blob-2"></div>
    <span class="chapter-num">01</span>

    <div class="nm-content">
      <h1 class="nm-title mixed-text">少即是暖<br><span lang="en">Less but Warmer</span></h1>
      <p class="nm-subtitle">克制、温度、精致 —— 新极简主义的三种态度。</p>
      <div class="nm-hairline"></div>
      <div class="nm-glass">
        <h3>核心原则</h3>
        <ul>
          <li>每页仅保留一个视觉锚点</li>
          <li>用静态颗粒替代动态噪点</li>
          <li>以陶土粉作为<span class="nm-accent-text">唯一点缀</span></li>
        </ul>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## 9. 生图提示词库

```
warm minimalist interior, cream paper texture,
soft terracotta accent, single geometric object,
generous white space, natural daylight,
editorial photography, muted palette
```

```
neo-minimal brand identity, grainy film texture,
low saturation, warm beige background,
terracotta detail, clean typography,
quiet luxury aesthetic
```

```
liquid glass card on handmade paper,
soft shadow, single warm highlight,
minimal composition, subtle grain,
Aesop-inspired product photography
```

---

## 10. 代表案例与参考来源

- **Aesop** — 极简留白、温暖中性色、克制排版的标杆。
- **Cereal Magazine** — 编辑式留白与真实纸纹理参考。
- **Hideki Nakajima** — 日本极简主义与“间”之构图。
- **Maison Margiela / Jil Sander** — 高端时尚中的温暖极简色板。
- **Apple Design** — Liquid Glass 材质与层次语言来源。

---

*文档版本：2.0 | 基于 Falcon-Obsidian-Black-Widow 设计系统升级*
