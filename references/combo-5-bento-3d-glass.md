# 组合5：高端 SaaS (Bento + 3D + Liquid Glass)

> 升级后风格：Bento 模块化 · 磨砂亚克力玻璃 · 克制的高级感

---

## 1. 设计理念 / 角色定义

**高端 SaaS 包装师**：用 Bento Grid 组织复杂信息，用磨砂亚克力玻璃提升质感，用克制的深度暗示产品定位。

- **Bento**：内容的模块化骨架，一眼即懂。
- **3D Immersive**：仅通过抬升与阴影制造 Z 轴层次，不抢内容。
- **Liquid Glass / Frosted Acrylic**：苹果级别的材质感，让前景与背景自然融合。
- **一页一锚点**：每页只有 1 个主导模块（2×2 大卡片或一句核心数据），其余卡片辅助阅读。

---

## 2. 风格约束（必须 / 禁止）

### 必须

- [x] 提供 3 套预定义色板：Fintech / Creative Tool / Enterprise。
- [x] 使用“磨砂亚克力”玻璃效果：渐变背景 + `backdrop-filter: blur() saturate()` + 顶部高光 + 内阴影。
- [x] Bento 网格引入不规则比例：`2×2 anchor` + `1×1` + `1×2` 竖条。
- [x] 背景退后，前景卡片为视觉焦点。
- [x] 每页 1 个视觉锚点；标题:正文字号比 ≥ 5:1。
- [x] 中西文混排使用 `.mixed-text`。
- [x] 引用 `textures.css` 真实纹理变量。
- [x] 动画 200–600 ms，提供 `prefers-reduced-motion` 降级。

### 禁止

- [ ] Display 默认使用 Inter / Space Grotesk / Nunito / Orbitron / system-ui。
- [ ] 纯 RGB 主色、高饱和蓝紫渐变背景。
- [ ] 纯白半透明卡片；必须使用奶油/乳白色。
- [ ] 悬停使用 `rotateX/Y`；只允许 `translateY(-4px)` + 阴影加深。
- [ ] “玻璃上玻璃”的过度透明。
- [ ] 无限循环动画。
- [ ] 在 markdown 中内联 base64 纹理。

---

## 3. 色彩系统

```css
:root {
  /* 默认 Enterprise */
  --saas-bg: #FAF8F5;
  --saas-card: rgba(252, 250, 247, 0.95);
  --saas-accent: #B45309;
  --saas-text: #1F2937;
  --saas-text-secondary: #6B7280;
  --saas-border: rgba(255, 255, 255, 0.5);
  --saas-highlight: rgba(255, 255, 255, 0.6);
}

[data-theme="fintech"] {
  --saas-bg: #F5F5F5;
  --saas-card: rgba(255, 255, 255, 0.92);
  --saas-accent: #10B981;
  --saas-text: #111827;
  --saas-text-secondary: #6B7280;
}

[data-theme="creative"] {
  --saas-bg: #0F0F12;
  --saas-card: rgba(30, 30, 35, 0.85);
  --saas-accent: #8B5CF6;
  --saas-text: #F3F4F6;
  --saas-text-secondary: #9CA3AF;
  --saas-border: rgba(255, 255, 255, 0.12);
  --saas-highlight: rgba(255, 255, 255, 0.1);
}

[data-theme="enterprise"] {
  --saas-bg: #FAF8F5;
  --saas-card: rgba(252, 250, 247, 0.95);
  --saas-accent: #B45309;
  --saas-text: #1F2937;
  --saas-text-secondary: #6B7280;
}
```

- 主色 60%：背景
- 卡片 30%：奶油/乳白玻璃
- 点缀 10%：`--saas-accent`

---

## 4. 字体方案

| 层级 | 字体 | 来源 | Fallback |
|---|---|---|---|
| Display | **Neue Montreal** / **Object Sans** | Fontshare（若可用） | Satoshi, DM Sans |
| Body | **Switzer** / **Satoshi** | Fontshare | DM Sans, Noto Sans SC |
| 中文 | **Noto Sans SC** | Google Fonts | PingFang SC, Microsoft YaHei |
| Data | **JetBrains Mono** | Google Fonts | monospace |

```html
<link rel="preconnect" href="https://api.fontshare.com">
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Neue Montreal', 'Object Sans', 'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
  --font-body: 'Switzer', 'Satoshi', 'DM Sans', 'Noto Sans SC', 'PingFang SC', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

.mixed-text [lang="en"] { margin-inline: 0.125em; }
```

---

## 5. 布局模式

```
┌──────────────────────────────────────────────────────┐
│  2×2 Anchor                                          │
│  ┌────────────────────┐  ┌────────┐  ┌────────┐     │
│  │                    │  │  1×1   │  │  1×2   │     │
│  │   核心信息 / 数据   │  │  辅助  │  │  竖条  │     │
│  │                    │  │  卡片  │  │        │     │
│  │                    │  └────────┘  │        │     │
│  │                    │              │        │     │
│  └────────────────────┘              └────────┘     │
└──────────────────────────────────────────────────────┘
```

- 使用 `grid-template-columns: repeat(4, 1fr)`，不规则跨度制造节奏。
- 卡片间距 `gap: 1rem`（桌面）/ `0.75rem`（移动）。
- 一页一锚点：Anchor 卡片承载主标题与核心数据。

---

## 6. CSS 效果库

### 磨砂亚克力玻璃卡片（Frosted Acrylic）

```css
.glass-card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.65) 100%
  );
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 24px -6px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
```

### 暗色主题玻璃适配

```css
[data-theme="creative"] .glass-card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
```

### 真实纹理叠加

```css
.texture-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--texture-paper);
  opacity: 0.04;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### 强调标签（语义化）

```css
.label-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: color-mix(in srgb, var(--saas-accent) 12%, transparent);
  color: var(--saas-accent);
  border-radius: 9999px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}
```

---

## 7. 动画建议

| 动画 | 时长 | 触发 | 说明 |
|---|---|---|---|
| 卡片淡入抬升 | 400 ms | 进入单次 | `translateY(16px)` + opacity |
| Anchor 卡片入场 | 500 ms | 进入单次 | 稍晚 100 ms |
| 悬停抬升 | 300 ms | hover | `translateY(-4px)` |
| 主题切换 | 300 ms | click | 背景色/文字色过渡 |

```css
@keyframes card-enter {
  0%   { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}

.card-enter {
  opacity: 0;
  animation: card-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .card-enter {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .glass-card { transition: none; }
}
```

---

## 8. 完整 HTML 示例

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="enterprise">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>高端 SaaS · Bento Glass</title>
  <link rel="preconnect" href="https://api.fontshare.com">
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --saas-bg: #FAF8F5;
      --saas-card: rgba(252, 250, 247, 0.95);
      --saas-accent: #B45309;
      --saas-text: #1F2937;
      --saas-text-secondary: #6B7280;
      --saas-border: rgba(255, 255, 255, 0.5);
      --saas-highlight: rgba(255, 255, 255, 0.6);

      --font-display: 'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
      --font-body: 'Satoshi', 'DM Sans', 'Noto Sans SC', 'PingFang SC', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    [data-theme="fintech"] {
      --saas-bg: #F5F5F5;
      --saas-card: rgba(255, 255, 255, 0.92);
      --saas-accent: #10B981;
      --saas-text: #111827;
      --saas-text-secondary: #6B7280;
    }

    [data-theme="creative"] {
      --saas-bg: #0F0F12;
      --saas-card: rgba(30, 30, 35, 0.85);
      --saas-accent: #8B5CF6;
      --saas-text: #F3F4F6;
      --saas-text-secondary: #9CA3AF;
      --saas-border: rgba(255, 255, 255, 0.12);
      --saas-highlight: rgba(255, 255, 255, 0.1);
    }

    [data-theme="enterprise"] {
      --saas-bg: #FAF8F5;
      --saas-card: rgba(252, 250, 247, 0.95);
      --saas-accent: #B45309;
      --saas-text: #1F2937;
      --saas-text-secondary: #6B7280;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body { height: 100%; }

    body {
      font-family: var(--font-body);
      color: var(--saas-text);
      background: var(--saas-bg);
      transition: background 0.3s ease, color 0.3s ease;
      overflow-x: hidden;
    }

    .mixed-text [lang="en"] { margin-inline: 0.125em; }

    .slide {
      position: relative;
      width: 100%;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      padding: 6vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slide::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--texture-paper);
      opacity: 0.04;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    .theme-switcher {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 100;
      display: flex;
      gap: 0.5rem;
    }

    .theme-switcher button {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      padding: 0.4rem 0.7rem;
      border: 1px solid color-mix(in srgb, var(--saas-text) 20%, transparent);
      background: var(--saas-card);
      color: var(--saas-text);
      border-radius: 999px;
      cursor: pointer;
      backdrop-filter: blur(10px);
    }

    .bento {
      position: relative;
      width: 100%;
      max-width: 1200px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(120px, auto);
      gap: 1rem;
    }

    .glass-card {
      position: relative;
      padding: 1.5rem;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%);
      backdrop-filter: blur(20px) saturate(140%);
      -webkit-backdrop-filter: blur(20px) saturate(140%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.05),
        0 1px 2px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
      animation: card-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--saas-highlight), transparent);
    }

    .glass-card:hover {
      transform: translateY(-4px);
      box-shadow:
        0 12px 24px -6px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    [data-theme="creative"] .glass-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%);
      border-color: rgba(255,255,255,0.12);
      box-shadow:
        0 4px 6px -1px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.1);
    }

    .card-anchor {
      grid-column: span 2;
      grid-row: span 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      animation-delay: 0.1s;
    }

    .card-tall { grid-row: span 2; animation-delay: 0.2s; }
    .card-wide { grid-column: span 2; animation-delay: 0.25s; }

    .card-label {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--saas-text-secondary);
      margin-bottom: 0.75rem;
    }

    .card-title {
      font-family: var(--font-display);
      font-size: clamp(5rem, 6vw, 5.5rem);
      font-weight: 700;
      line-height: 1.05;
      margin-bottom: 1rem;
    }

    .card-body {
      font-size: clamp(0.85rem, 1.2vw, 1rem);
      line-height: 1.6;
      color: var(--saas-text-secondary);
    }

    .metric {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      color: var(--saas-accent);
    }

    .accent-line {
      width: 40px;
      height: 3px;
      background: var(--saas-accent);
      border-radius: 2px;
      margin-top: 1rem;
    }

    @keyframes card-enter {
      0%   { opacity: 0; transform: translateY(16px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .bento { grid-template-columns: repeat(2, 1fr); }
      .card-anchor, .card-wide { grid-column: span 2; }
      .card-tall { grid-row: span 1; }
    }

    @media (prefers-reduced-motion: reduce) {
      .glass-card { animation: none; opacity: 1; transform: none; transition: none; }
      body { transition: none; }
    }
  </style>
</head>
<body>
  <div class="theme-switcher">
    <button onclick="setTheme('fintech')">Fintech</button>
    <button onclick="setTheme('creative')">Creative</button>
    <button onclick="setTheme('enterprise')">Enterprise</button>
  </div>

  <section class="slide">
    <div class="bento">
      <div class="glass-card card-anchor">
        <div>
          <div class="card-label">Enterprise Suite</div>
          <h1 class="card-title mixed-text">增长设计 <span lang="en">Scale</span></h1>
        </div>
        <p class="card-body">模块化信息架构 + 克制玻璃质感，让复杂 SaaS 显得可信而高级。</p>
      </div>

      <div class="glass-card">
        <div class="card-label">Uptime</div>
        <div class="metric">99.99%</div>
        <div class="accent-line"></div>
      </div>

      <div class="glass-card card-tall">
        <div class="card-label">Highlights</div>
        <ul class="card-body" style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem;">
          <li>· 一键部署</li>
          <li>· 实时协作</li>
          <li>· 企业级安全</li>
        </ul>
      </div>

      <div class="glass-card card-wide">
        <div class="card-label">Roadmap</div>
        <p class="card-body">下一季度重点：AI 助手、权限矩阵、开放 API。所有功能都以清晰模块呈现。</p>
      </div>
    </div>
  </section>

  <script>
    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  </script>
</body>
</html>
```

---

## 9. 生图提示词库

```
premium fintech dashboard UI, frosted acrylic glass cards,
bento grid layout, muted green accent, off-white background,
subtle paper texture, clean data visualization,
minimal shadows, editorial photography
```

```
dark creative tool interface, bento grid modules,
purple accent, liquid glass panels, soft glow,
modular UI design, professional SaaS aesthetic,
no text, cinematic lighting
```

```
enterprise software landing page, warm stone background,
cream glass cards, brown accent, bento grid,
human-centered tech design, generous whitespace,
real paper texture, premium editorial
```

---

## 10. 代表案例与参考来源

- **Linear** — Bento Grid + 深色玻璃质感的数据产品界面。
- **Apple Design** — Frosted Acrylic / Liquid Glass 材质语言来源。
- **Notion** — 模块化信息组织与克制排版。
- **Vercel** — 高端 SaaS 页面与不规则 Bento 布局参考。
- **Stripe Press** — 企业级温暖中性色与编辑式留白。

---

*文档版本：2.0 | 基于 Falcon-Obsidian-Black-Widow 设计系统升级*
