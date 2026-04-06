# 蓝图风格 (Blueprint)

源于建筑和工程制图的技术美学，以深蓝背景、精确线条和网格系统为特征，传达专业、精准、技术性的视觉感受。

---

## 角色定义

你是一位专精于 Blueprint（蓝图）设计风格的前端设计大师。你深谙建筑制图、工程图纸和技术插画的传统，
对精确性、网格系统、等距投影和结构可视化有深刻理解。

**适用场景**：
- 建筑/工程/技术类演示
- 产品设计展示和设计系统文档
- 科技公司技术分享
- 教育/培训类技术内容

**情感表达**：专业、精确、技术、透明、可信赖

---

## 专业能力

### 视觉层次构建
通过线条粗细、颜色亮度和标注层级来建立视觉层次。主要结构使用较粗的白色线条（2-3px），
次要元素使用细线（1px）或虚线，背景网格使用极淡的线条营造深度感。

### 色彩理论应用
以深蓝色为主调，配合白色/浅青色线条形成高对比度。使用发光效果（glow）强调关键元素，
营造数字蓝图的现代感而非传统印刷蓝图的复古感。

### 排版与字体选择
选择等宽字体（Monospace）强化技术属性。标题使用粗体等宽字体，正文使用常规等重，
标注和测量值使用小字号等宽字体，形成统一的工程图纸感。

### 交互设计思维
悬停效果模拟"绘制中"的动画，元素入场时带有线条绘制动画（stroke-dashoffset），
点击反馈使用发光脉冲效果，整体营造"实时绘制"的交互体验。

---

## 设计哲学

蓝图风格的核心价值观是**透明性与精确性**。它源自建筑和工程领域的技术图纸传统，
通过展示"结构本身"而非"装饰表面"来传达信息。这种风格相信：

- **过程即美学** — 网格、标注、测量线不是需要隐藏的辅助元素，而是设计的一部分
- **精确即信任** — 每个元素都有明确的位置和尺寸，传达专业和可靠
- **技术即艺术** — 工程制图的视觉语言本身就是一种美学表达

---

## 风格约束

### 必须遵循
- 深蓝色背景（#0A1628 至 #1A2B4C 范围）
- 网格系统必须可见（至少在背景层）
- 所有线条使用精确的像素值，避免模糊
- 字体必须使用等宽字体家族
- 元素边缘保持锐利，圆角不超过 4px

### 禁止使用
- 渐变填充（纯色 + 发光效果代替）
- 柔和阴影（使用硬边投影或发光）
- 大圆角（>8px）和有机曲线
- 彩色照片（使用线稿、图标或技术插画）
- 装饰性图案和无功能性的元素

---

## 核心要素

### 色彩系统

```css
:root {
  /* 主色调 - 深蓝背景 */
  --primary: #0A1628;
  --primary-light: #152238;
  --primary-dark: #050D18;

  /* 线条色 */
  --line-primary: #FFFFFF;
  --line-secondary: #4A90D9;
  --line-accent: #00D4FF;
  --line-dim: rgba(255, 255, 255, 0.3);

  /* 辅助色 */
  --cyan-glow: #00FFFF;
  --blueprint-blue: #0041BA;

  /* 文字色 */
  --text-primary: #FFFFFF;
  --text-secondary: #8BA4C7;
  --text-dim: #5A7A9E;

  /* 强调/标注色 */
  --accent: #FF6B35;
  --accent-secondary: #FFD700;

  /* 网格色 */
  --grid-major: rgba(255, 255, 255, 0.15);
  --grid-minor: rgba(255, 255, 255, 0.05);

  /* 发光效果 */
  --glow-cyan: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3);
  --glow-white: 0 0 8px rgba(255, 255, 255, 0.4);
}
```

### 字体方案

| 类型 | 字体名 | 来源 | 备选 |
|------|--------|------|------|
| Display | Space Grotesk | Google Fonts | JetBrains Mono |
| Body | Space Mono | Google Fonts | IBM Plex Mono |
| Annotation | JetBrains Mono | Google Fonts | Fira Code |

**引入代码**：
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
```

**字体使用规则**：
```css
.font-display {
  font-family: 'Space Grotesk', 'JetBrains Mono', monospace;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.font-body {
  font-family: 'Space Mono', 'IBM Plex Mono', monospace;
  font-weight: 400;
  line-height: 1.6;
}

.font-annotation {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

### 布局模式

**标题页布局**：
```
┌─────────────────────────────────────────────────────────────┐
│ ┌─ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ─┐ │
│ │                        网格背景                          │ │
│ │                                                          │ │
│ │     ┌──────────────────────────────────┐                │ │
│ │     │                                  │ ◄─ 标注        │ │
│ │     │         主标题                    │                │ │
│ │     │         ━━━━━━━━━━━━━━           │                │ │
│ │     │         副标题                    │                │ │
│ │     │                                  │                │ │
│ │     └──────────────────────────────────┘                │ │
│ │              │                                          │ │
│ │              └── 测量线 (1200px)                        │ │
│ │                                                          │ │
│ └─ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ─┘ │
└─────────────────────────────────────────────────────────────┘
```

**内容页布局**：
```
┌─────────────────────────────────────────────────────────────┐
│ ┌───────────────┐  ┌───────────────────────────────────┐   │
│ │               │  │                                   │   │
│ │   章节编号     │  │   ○ 要点一                        │   │
│ │   01          │  │     └── 详细说明                  │   │
│ │               │  │                                   │   │
│ │   章节标题     │  │   ○ 要点二                        │   │
│ │   ━━━━━━━━   │  │     └── 详细说明                  │   │
│ │               │  │                                   │   │
│ │               │  │   ┌─────────────────┐             │   │
│ │  [等距图形]    │  │   │   示意图区域    │             │   │
│ │               │  │   └─────────────────┘             │   │
│ └───────────────┘  └───────────────────────────────────┘   │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │
│ ◄─────────────────────────────────────────────────────────► │
└─────────────────────────────────────────────────────────────┘
```

### 装饰元素

- **网格背景**：主网格（大格 80px）+ 次网格（小格 20px）
- **测量线**：带端点的尺寸标注线
- **标注框**：虚线边框 + 引线 + 文字说明
- **等距图形**：30° 倾斜的立体几何图形
- **连接线**：正交折线连接相关元素
- **剖面符号**：填充斜线图案表示剖面

---

## CSS 效果库

### 方案A：网格背景

**效果描述**：经典蓝图网格背景，主次双层网格，营造技术图纸感

```css
/* 蓝图网格背景 */
.blueprint-grid {
  background-color: #0A1628;
  background-image:
    /* 次网格 - 20px */
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    /* 主网格 - 80px */
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size:
    20px 20px,
    20px 20px,
    80px 80px,
    80px 80px;
}

/* 带发光的主网格 */
.blueprint-grid-glow {
  background-color: #0A1628;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  box-shadow: inset 0 0 60px rgba(0, 212, 255, 0.1);
}
```

### 方案B：线条绘制动画

**效果描述**：SVG 线条描边动画，模拟"实时绘制"效果

```css
/* 线条绘制动画 */
.draw-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* 发光线条 */
.glow-line {
  stroke: #00D4FF;
  stroke-width: 2;
  filter: drop-shadow(0 0 4px rgba(0, 212, 255, 0.8));
}

/* 虚线动画 */
.dashed-animated {
  stroke-dasharray: 8 4;
  animation: dash-move 20s linear infinite;
}

@keyframes dash-move {
  to {
    stroke-dashoffset: -240;
  }
}
```

### 方案C：标注框与测量线

**效果描述**：技术图纸风格的标注元素

```css
/* 标注框 */
.annotation-box {
  border: 1px dashed rgba(255, 255, 255, 0.4);
  padding: 12px 16px;
  position: relative;
  background: rgba(10, 22, 40, 0.8);
}

.annotation-box::before {
  content: attr(data-label);
  position: absolute;
  top: -10px;
  left: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #00D4FF;
  background: #0A1628;
  padding: 0 8px;
}

/* 测量线 */
.dimension-line {
  position: relative;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

.dimension-line::before,
.dimension-line::after {
  content: '';
  position: absolute;
  top: -6px;
  width: 1px;
  height: 13px;
  background: rgba(255, 255, 255, 0.5);
}

.dimension-line::before { left: 0; }
.dimension-line::after { right: 0; }

.dimension-value {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #8BA4C7;
  background: #0A1628;
  padding: 0 8px;
}
```

### 方案D：等距投影

**效果描述**：使用 CSS 3D 变换创建等距视图效果

```css
/* 等距投影容器 */
.isometric-container {
  transform: rotateX(60deg) rotateZ(-45deg);
  transform-style: preserve-3d;
}

/* 等距立方体 */
.isometric-cube {
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
}

.isometric-cube .face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 212, 255, 0.6);
  background: rgba(0, 212, 255, 0.05);
}

.isometric-cube .top {
  transform: translateZ(100px);
}

.isometric-cube .front {
  transform: rotateX(-90deg) translateZ(50px);
}

.isometric-cube .right {
  transform: rotateY(90deg) rotateX(-90deg) translateZ(50px);
}
```

---

## 动画建议

### 入场动画

| 元素 | 动画效果 | 时长 | 延迟 |
|------|----------|------|------|
| 网格背景 | 淡入 + 轻微缩放 | 0.8s | 0s |
| 主标题 | 线条绘制 + 发光脉冲 | 1.2s | 0.3s |
| 副标题 | 从左滑入 + 淡入 | 0.6s | 0.8s |
| 标注框 | 逐个淡入 | 0.4s | 1.2s |
| 图形元素 | 线条绘制动画 | 1.5s | 0.5s |

### 强调动画

- **发光脉冲**：关键元素的 box-shadow 周期性增强
- **线条流动**：虚线边框的 stroke-dashoffset 动画
- **标注闪烁**：重要标注的 opacity 周期变化
- **测量线延伸**：尺寸线从中心向两端延伸

### 过渡效果

- **页面切换**：整体缩小淡出 + 新页面放大淡入
- **元素揭示**：clip-path 从上到下揭示
- **数据更新**：数字滚动更新效果

### CSS 动画代码

```css
/* 发光脉冲 */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 5px rgba(0, 212, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3);
  }
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

/* 线条揭示 */
@keyframes line-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.line-reveal {
  animation: line-reveal 0.8s ease-out forwards;
}

/* 打字机效果 */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 1s steps(30) forwards;
}

/* 标注框入场 */
@keyframes annotation-enter {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.annotation-enter {
  animation: annotation-enter 0.4s ease-out forwards;
}
```

---

## 完整示例

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blueprint Style Presentation</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #0A1628;
      --primary-light: #152238;
      --line-primary: #FFFFFF;
      --line-secondary: #4A90D9;
      --line-accent: #00D4FF;
      --line-dim: rgba(255, 255, 255, 0.3);
      --text-primary: #FFFFFF;
      --text-secondary: #8BA4C7;
      --accent: #FF6B35;
      --grid-major: rgba(255, 255, 255, 0.08);
      --grid-minor: rgba(255, 255, 255, 0.03);
      --glow-cyan: 0 0 20px rgba(0, 212, 255, 0.5);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Space Mono', monospace;
      background: var(--primary);
      color: var(--text-primary);
      min-height: 100vh;
    }

    .slide {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem;
      position: relative;
      background-color: var(--primary);
      background-image:
        linear-gradient(var(--grid-minor) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-minor) 1px, transparent 1px),
        linear-gradient(var(--grid-major) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-major) 1px, transparent 1px);
      background-size: 20px 20px, 20px 20px, 80px 80px, 80px 80px;
    }

    .corner-mark {
      position: absolute;
      width: 24px;
      height: 24px;
      border-color: var(--line-dim);
      border-style: solid;
      border-width: 0;
    }
    .corner-mark.tl { top: 20px; left: 20px; border-top-width: 2px; border-left-width: 2px; }
    .corner-mark.tr { top: 20px; right: 20px; border-top-width: 2px; border-right-width: 2px; }
    .corner-mark.bl { bottom: 20px; left: 20px; border-bottom-width: 2px; border-left-width: 2px; }
    .corner-mark.br { bottom: 20px; right: 20px; border-bottom-width: 2px; border-right-width: 2px; }

    .title-container {
      text-align: center;
      position: relative;
      padding: 3rem 4rem;
      border: 1px solid var(--line-dim);
      background: rgba(10, 22, 40, 0.6);
    }

    .title-label {
      position: absolute;
      top: -12px;
      left: 24px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--line-accent);
      background: var(--primary);
      padding: 0 12px;
    }

    .title {
      font-family: 'Space Grotesk', monospace;
      font-size: clamp(2.5rem, 8vw, 5rem);
      font-weight: 700;
      letter-spacing: 0.02em;
      margin-bottom: 1rem;
      text-shadow: var(--glow-cyan);
    }

    .subtitle {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(0.875rem, 2vw, 1.125rem);
      font-weight: 300;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
    }

    .divider {
      width: 200px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--line-accent), transparent);
      margin: 1.5rem auto;
    }

    .dimension {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .dimension::before,
    .dimension::after {
      content: '';
      width: 60px;
      height: 1px;
      background: var(--line-dim);
    }

    .footer-info {
      position: absolute;
      bottom: 40px;
      right: 40px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    /* 动画 */
    @keyframes draw-border {
      from { clip-path: inset(0 100% 100% 0); }
      to { clip-path: inset(0 0 0 0); }
    }

    .title-container {
      animation: draw-border 1s ease-out forwards;
    }

    @keyframes glow-pulse {
      0%, 100% { text-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
      50% { text-shadow: 0 0 40px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.3); }
    }

    .title {
      animation: glow-pulse 3s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <section class="slide">
    <div class="corner-mark tl"></div>
    <div class="corner-mark tr"></div>
    <div class="corner-mark bl"></div>
    <div class="corner-mark br"></div>

    <div class="title-container">
      <span class="title-label">Section 01</span>
      <h1 class="title">BLUEPRINT</h1>
      <div class="divider"></div>
      <p class="subtitle">TECHNICAL DESIGN AESTHETIC</p>
      <div class="dimension">1200px</div>
    </div>

    <div class="footer-info">
      Rev. 01 | Scale 1:1 | 2024
    </div>
  </section>
</body>
</html>
```

---

## 代表案例

1. **Palantir Blueprint UI Toolkit** - [GitHub](https://github.com/palantir/blueprint)
   - 特点：完整的设计系统，虽非视觉蓝图风格，但命名源于此概念

2. **Dribbble Blueprint UI 搜索结果** - [Dribbble](https://dribbble.com/search/blueprint-ui)
   - 特点：大量蓝图风格的 UI 设计灵感

3. **LobeHub Blueprint UI Skill** - [LobeHub](https://lobehub.com/skills/superhq-ai-shuru-blueprint-ui)
   - 特点：专门用于生成蓝图风格网页的 AI 技能

---

## 参考来源

- [Blueprint Color Scheme - SchemeColor](https://www.schemecolor.com/blueprint.php)
- [Blueprint Blue - Icons8 Colors](https://icons8.com/colors/blueprint-blue)
- [Space Mono - Google Fonts](https://fonts.google.com/specimen/Space+Mono)
- [CSS Isometric Examples - FreeFrontend](https://freefrontend.com/css-isometric/)
- [Blueprint UI Design Inspiration - Dribbble](https://dribbble.com/search/blueprint-ui)
- [Isometric Design Guide - Linearity](https://www.linearity.io/blog/isometric-design/)
