# 组合3：极繁实验 (Maximalism + Experimental Typography)

## 设计理念

这个组合创造了一种**视觉爆炸力**的体验——"越多越好"的哲学遇上打破规则的字体实验，创造出令人过目不忘的视觉冲击。

**两层协同机制（无C类滤镜）**：
- **Maximalism (形态层)**：层叠、丰富、视觉饱和，用密度承载信息与情感
- **Experimental Typography (表达层)**：打破传统网格，流体动态排版，字体成为视觉主角

**为什么这个组合有效**：
1. 极繁主义需要强有力的视觉锚点，实验性字体恰好提供这种"视觉主角"
2. 超饱和的色彩需要同样大胆的排版来平衡，避免沦为噪音
3. 不依赖滤镜效果，保持纯粹的视觉冲击力和清晰的层次
4. 信息密度高但不混乱，因为实验性字体本身就具有组织信息的能力
5. 整体传达"大胆、自信、不拘一格"的品牌调性

**2025变体：Minimalistic Maximalism**
- 干净的基础设计作为画布
- 大胆的点缀色和视觉元素作为焦点
- 战略性的丰富感，用留白衬托视觉密度

---

## 角色定义

| 属性 | 描述 |
|------|------|
| **核心气质** | 大胆张扬、视觉冲击、不拘一格、创意爆发 |
| **情感基调** | 兴奋、活力、自由、打破常规、敢于表达 |
| **适用场景** | 创意机构、音乐/艺术平台、时尚品牌、Z世代产品、活动宣传、个人作品集 |
| **品牌人格** | 像一位特立独行的艺术家，叛逆者，潮流引领者 |
| **用户感受** | "这很酷"、"从没见过这样的设计"、"充满能量" |

---

## 风格约束

### 必须遵循

1. **色彩**：使用多巴胺色盘，饱和度 80-100%，大胆撞色组合
2. **字体**：至少使用一种实验性排版技术（变形、重叠、裁切、渐变填充）
3. **布局**：打破传统网格，使用不对称、层叠、自由布局
4. **密度**：保持视觉丰富度，避免大面积空白（战略性留白除外）
5. **层次**：通过大小、颜色、位置建立清晰的视觉层级
6. **动效**：添加丰富的微交互和过渡效果
7. **一致性**：在混乱中保持品牌识别度

### 禁止使用

1. 传统的12列网格布局
2. 低饱和度的安全配色
3. 标准的字间距和行高（要么更紧凑，要么更宽松）
4. 单调的纯色背景
5. 常规的按钮样式（圆角矩形）
6. 过于克制的极简主义
7. 柔和的灰度阴影

---

## 核心要素

### 融合色彩系统 (CSS变量)

```css
:root {
  /* === 多巴胺色盘 (Layer A - Maximalism) === */
  --dopamine-pink: #FF2D92;        /* 电光粉 - 主强调 */
  --dopamine-orange: #FF6B35;      /* 火焰橙 - 次强调 */
  --dopamine-yellow: #FFDE59;      /* 柠檬黄 - 高亮 */
  --dopamine-green: #00F5A0;       /* 荧光绿 - 对比 */
  --dopamine-blue: #00D4FF;        /* 电光蓝 - 冷色调 */
  --dopamine-purple: #9B5DE5;      /* 电光紫 - 神秘感 */

  /* === 中性色基座 === */
  --maxi-black: #0A0A0A;           /* 深黑 - 强对比背景 */
  --maxi-white: #FAFAFA;           /* 纯白 - 文字/高光 */
  --maxi-cream: #FFF8E7;           /* 奶油色 - 温暖基座 */
  --maxi-gray: #2D2D2D;            /* 深灰 - 次背景 */

  /* === 撞色组合预设 === */
  --clash-hot: linear-gradient(135deg, #FF2D92 0%, #FF6B35 100%);
  --clash-cyber: linear-gradient(135deg, #00F5A0 0%, #00D4FF 100%);
  --clash-sunset: linear-gradient(135deg, #FF6B35 0%, #FFDE59 50%, #FF2D92 100%);
  --clash-aurora: linear-gradient(135deg, #9B5DE5 0%, #00F5A0 50%, #00D4FF 100%);
  --clash-fire: linear-gradient(135deg, #FF2D92 0%, #FF6B35 50%, #FFDE59 100%);

  /* === 实验性字体效果色 === */
  --text-gradient-hot: linear-gradient(90deg, #FF2D92, #FF6B35, #FFDE59);
  --text-gradient-cyber: linear-gradient(90deg, #00F5A0, #00D4FF, #9B5DE5);
  --text-gradient-fire: linear-gradient(180deg, #FFDE59 0%, #FF6B35 50%, #FF2D92 100%);

  /* === 功能色 === */
  --text-primary: #FAFAFA;
  --text-secondary: rgba(250, 250, 250, 0.7);
  --text-muted: rgba(250, 250, 250, 0.5);
  --border-bright: rgba(255, 255, 255, 0.2);

  /* === 间距系统 (大胆不规则) === */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* === 实验性圆角 === */
  --radius-blob-1: 60% 40% 30% 70% / 60% 30% 70% 40%;
  --radius-blob-2: 30% 70% 70% 30% / 30% 30% 70% 70%;
  --radius-asymmetric: 4px 48px 4px 48px;
  --radius-fluid: clamp(8px, 2vw, 32px);
}
```

### 字体方案

```css
:root {
  /* === v1.0 核心字体 (保持不变) === */

  /* 实验性展示字体 - 视觉主角 */
  --font-display: "Druk Wide", "Space Grotesk", "Bebas Neue", system-ui, sans-serif;

  /* 几何无衬线 - 现代感 */
  --font-geometric: "Space Grotesk", "Syne", "Outfit", system-ui, sans-serif;

  /* 正文字体 - 清晰可读 */
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;

  /* 等宽字体 - 代码/技术感 */
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* === v2.0 扩展字体 (新增) === */

  /* 衬线展示字体 - 用于标题混搭 */
  --font-serif-display: "Playfair Display", "DM Serif Display", "Libre Bodoni", Georgia, serif;

  /* 复古衬线体 - 剪贴簿效果 */
  --font-serif-vintage: "Special Elite", "Courier Prime", "American Typewriter", monospace;

  /* 手写体/脚本字体 - 拼贴点缀 */
  --font-script: "Caveat", "Kalam", "Dancing Script", "Patrick Hand", cursive;

  /* 像素字体 - 数字复古感 */
  --font-pixel: "VT323", "Press Start 2P", "Silkscreen", monospace;

  /* 等宽展示字体 - 技术美学 */
  --font-mono-display: "Space Mono", "IBM Plex Mono", "Fira Code", monospace;

  /* 中文衬线体 - 印章效果 */
  --font-serif-cn: "Noto Serif SC", "Source Han Serif SC", "ZCOOL XiaoWei", serif;

  /* 字重 */
  --weight-thin: 100;
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;
  --weight-black: 900;

  /* 实验性字号 */
  --text-sm: 0.75rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 3rem;
  --text-4xl: 5rem;
  --text-5xl: 8rem;
  --text-hero: clamp(4rem, 15vw, 12rem);
}

/* 字体特性 */
body {
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  line-height: 1.4;
  letter-spacing: -0.02em; /* 紧凑字距 */
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: var(--weight-black);
  line-height: 0.9; /* 极紧凑行高 */
  letter-spacing: -0.04em;
  text-transform: uppercase;
}
```

### 布局模式

```css
/* 自由层叠布局 */
.maximalist-layout {
  position: relative;
  min-height: 100vh;
  background: var(--maxi-black);
  overflow-x: hidden;
}

/* 不对称网格 */
.asymmetric-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  grid-template-rows: auto;
  gap: var(--space-md);
}

/* 层叠卡片系统 */
.layered-stack {
  position: relative;
  padding: var(--space-xl);
}

.layered-stack > * {
  position: relative;
  z-index: 1;
}

.layered-stack > *:nth-child(2) {
  margin-top: -20%;
  margin-left: 15%;
  z-index: 2;
}

.layered-stack > *:nth-child(3) {
  margin-top: -15%;
  margin-left: 30%;
  z-index: 3;
}

/* 打破网格的浮动元素 */
.floating-accent {
  position: absolute;
  z-index: 10;
}

.floating-accent--top-right {
  top: -5%;
  right: -10%;
}

.floating-accent--bottom-left {
  bottom: 10%;
  left: -5%;
}

/* 密集信息区 */
.info-dense {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  padding: var(--space-lg);
}
```

---

## CSS 效果库

### 实验性字体效果

#### 1. 渐变填充文字

```css
.gradient-text {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  background: var(--text-gradient-hot);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  line-height: 0.9;
}

/* 变体 - 水平渐变 */
.gradient-text--horizontal {
  background: linear-gradient(90deg,
    var(--dopamine-pink),
    var(--dopamine-orange),
    var(--dopamine-yellow),
    var(--dopamine-green)
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

#### 2. 文字描边效果

```css
.outline-text {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: transparent;
  -webkit-text-stroke: 3px var(--dopamine-pink);
  text-transform: uppercase;
}

/* 悬停填充 */
.outline-text--interactive {
  color: transparent;
  -webkit-text-stroke: 2px var(--maxi-white);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.outline-text--interactive:hover {
  color: var(--dopamine-yellow);
  -webkit-text-stroke: 2px var(--dopamine-yellow);
  transform: scale(1.05);
}
```

#### 3. 文字重叠效果

```css
.overlapping-text {
  position: relative;
  display: inline-block;
}

.overlapping-text::before,
.overlapping-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-display);
  font-size: inherit;
  font-weight: var(--weight-black);
  text-transform: uppercase;
}

.overlapping-text::before {
  color: var(--dopamine-pink);
  z-index: -2;
  transform: translate(-8px, -4px);
}

.overlapping-text::after {
  color: var(--dopamine-blue);
  z-index: -1;
  transform: translate(8px, 4px);
}

.overlapping-text span {
  position: relative;
  z-index: 0;
  color: var(--maxi-white);
}
```

#### 4. 裁切/遮罩文字

```css
.clipped-text {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  background: var(--clash-fire);
  -webkit-background-clip: text;
  background-clip: text;
  /* 通过clip-path创造独特形状 */
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 45%,
    85% 55%,
    100% 65%,
    100% 100%,
    0% 100%,
    0% 55%,
    15% 45%
  );
  padding: var(--space-lg);
}

/* 圆形遮罩 */
.circular-mask-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: var(--clash-aurora);
  border-radius: 50%;
  overflow: hidden;
}

.circular-mask-text span {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  text-align: center;
  text-transform: uppercase;
}
```

#### 5. 变形/扭曲文字

```css
.distorted-text {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  text-transform: uppercase;
  /* 倾斜变换 */
  transform: skewX(-10deg) scaleY(1.1);
  letter-spacing: 0.05em;
}

/* 波浪效果 */
.wavy-text {
  display: inline-flex;
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
}

.wavy-text span {
  display: inline-block;
  animation: wave 1.5s ease-in-out infinite;
}

.wavy-text span:nth-child(1) { animation-delay: 0s; }
.wavy-text span:nth-child(2) { animation-delay: 0.1s; }
.wavy-text span:nth-child(3) { animation-delay: 0.2s; }
.wavy-text span:nth-child(4) { animation-delay: 0.3s; }
.wavy-text span:nth-child(5) { animation-delay: 0.4s; }
.wavy-text span:nth-child(6) { animation-delay: 0.5s; }

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

#### 6. 3D 立体文字

```css
.depth-text {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--dopamine-yellow);
  text-transform: uppercase;
  text-shadow:
    /* 多层深度 */
    1px 1px 0 var(--dopamine-orange),
    2px 2px 0 var(--dopamine-orange),
    3px 3px 0 var(--dopamine-orange),
    4px 4px 0 var(--dopamine-pink),
    5px 5px 0 var(--dopamine-pink),
    6px 6px 0 var(--dopamine-pink),
    /* 模糊阴影 */
    7px 7px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.depth-text:hover {
  transform: translate(-3px, -3px);
  text-shadow:
    1px 1px 0 var(--dopamine-orange),
    2px 2px 0 var(--dopamine-orange),
    3px 3px 0 var(--dopamine-orange),
    4px 4px 0 var(--dopamine-pink),
    5px 5px 0 var(--dopamine-pink),
    6px 6px 0 var(--dopamine-pink),
    7px 7px 0 var(--dopamine-purple),
    8px 8px 0 var(--dopamine-purple),
    10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

#### 7. 混合模式文字

```css
.blend-text {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  text-transform: uppercase;
  mix-blend-mode: difference;
  /* 确保背景有对比色 */
  isolation: isolate;
}

/* 排除模式 - 创造镂空效果 */
.knockout-text {
  position: relative;
  background: var(--clash-fire);
  padding: var(--space-xl);
}

.knockout-text h2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--maxi-black);
  background: var(--maxi-black);
  mix-blend-mode: multiply;
  display: inline-block;
  padding: var(--space-sm) var(--space-md);
}
```

---

## 高级字体效果库 (v2.0 新增)

> **设计目标**：字体狂欢，混搭 Serif + Sans + Script + Pixel，制造「剪贴簿」拼贴感

### 8. 字体混搭叠印

**效果描述**：超粗衬线体 + 等宽像素字体的叠印效果，带色差（Chromatic Aberration）

```css
/* 字体混搭叠印 - 衬线体 + 像素体 */
.mixed-type-stack {
  position: relative;
  display: inline-block;
}

.mixed-type-stack__serif {
  font-family: var(--font-serif-display);
  font-size: var(--text-hero);
  font-weight: 900;
  color: var(--maxi-white);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.9;
}

.mixed-type-stack__pixel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-pixel);
  font-size: calc(var(--text-hero) * 0.25);
  color: var(--dopamine-green);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  opacity: 0.9;
  mix-blend-mode: screen;
  white-space: nowrap;
}

/* 色差效果 - Chromatic Aberration */
.chromatic-aberration {
  position: relative;
}

.chromatic-aberration::before,
.chromatic-aberration::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
}

.chromatic-aberration::before {
  color: var(--dopamine-pink);
  transform: translate(-4px, 0);
  opacity: 0.7;
  mix-blend-mode: screen;
  z-index: -1;
}

.chromatic-aberration::after {
  color: var(--dopamine-blue);
  transform: translate(4px, 0);
  opacity: 0.7;
  mix-blend-mode: screen;
  z-index: -2;
}
```

### 9. 手写体拼贴风格

**效果描述**：在正文中随机穿插手写体或复古印刷体，制造「剪贴簿」拼贴感

```css
/* 剪贴簿拼贴效果 */
.collage-text {
  display: inline;
}

/* 手写体点缀 */
.collage-text--script {
  font-family: var(--font-script);
  font-size: 1.2em;
  font-weight: 700;
  color: var(--dopamine-orange);
  transform: rotate(-3deg) translateY(-5px);
  display: inline-block;
  padding: 0 0.1em;
}

/* 复古印刷体 */
.collage-text--vintage {
  font-family: var(--font-serif-vintage);
  font-size: 0.95em;
  color: var(--maxi-cream);
  background: var(--maxi-gray);
  padding: 0.1em 0.3em;
  transform: rotate(1deg);
  display: inline-block;
  box-decoration-break: clone;
}

/* 像素体强调 */
.collage-text--pixel {
  font-family: var(--font-pixel);
  font-size: 0.85em;
  color: var(--dopamine-green);
  background: var(--maxi-black);
  padding: 0.15em 0.4em;
  border: 2px solid var(--dopamine-green);
  transform: rotate(-2deg);
  display: inline-block;
}

/* 等宽体代码感 */
.collage-text--mono {
  font-family: var(--font-mono-display);
  font-size: 0.9em;
  color: var(--dopamine-pink);
  background: rgba(255, 45, 146, 0.1);
  padding: 0.1em 0.3em;
  border-left: 3px solid var(--dopamine-pink);
}
```

### 10. 厚重 3D 挤出效果

**效果描述**：字母 3D 挤出（Extrude），8层渐变阴影 + 环境阴影

```css
/* 厚重 3D 挤出 - 8 层阴影 */
.extrude-text-3d {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--dopamine-yellow);
  text-transform: uppercase;
  text-shadow:
    /* 挤出层 - 橙色 */
    1px 1px 0 var(--dopamine-orange),
    2px 2px 0 var(--dopamine-orange),
    3px 3px 0 var(--dopamine-orange),
    /* 挤出层 - 粉色 */
    4px 4px 0 var(--dopamine-pink),
    5px 5px 0 var(--dopamine-pink),
    6px 6px 0 var(--dopamine-pink),
    /* 挤出层 - 紫色 */
    7px 7px 0 var(--dopamine-purple),
    8px 8px 0 var(--dopamine-purple),
    /* 环境阴影 */
    9px 9px 20px rgba(0, 0, 0, 0.5),
    9px 9px 40px rgba(255, 45, 146, 0.3);
  transform: skewX(-5deg);
  transition: all 0.3s ease;
}

.extrude-text-3d:hover {
  transform: skewX(-5deg) translate(-4px, -4px);
  text-shadow:
    1px 1px 0 var(--dopamine-orange),
    2px 2px 0 var(--dopamine-orange),
    3px 3px 0 var(--dopamine-orange),
    4px 4px 0 var(--dopamine-pink),
    5px 5px 0 var(--dopamine-pink),
    6px 6px 0 var(--dopamine-pink),
    7px 7px 0 var(--dopamine-purple),
    8px 8px 0 var(--dopamine-purple),
    9px 9px 0 var(--dopamine-blue),
    10px 10px 0 var(--dopamine-blue),
    12px 12px 30px rgba(0, 0, 0, 0.6);
}
```

### 11. 硬边阴影 (Y2K 风格)

**效果描述**：厚重的硬边阴影（Hard Shadow）并错位，模仿故障艺术效果

```css
/* 硬边阴影 - Y2K 风格 */
.hard-shadow-text {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  text-transform: uppercase;
  text-shadow:
    4px 4px 0 var(--dopamine-pink),
    8px 8px 0 var(--dopamine-blue);
  transition: all 0.2s ease;
}

.hard-shadow-text:hover {
  text-shadow:
    6px 6px 0 var(--dopamine-pink),
    12px 12px 0 var(--dopamine-blue),
    18px 18px 0 var(--dopamine-green);
  transform: translate(-6px, -6px);
}

/* 大号硬边阴影 */
.hard-shadow-text--lg {
  font-size: var(--text-hero);
  text-shadow:
    8px 8px 0 var(--dopamine-pink),
    16px 16px 0 var(--dopamine-blue),
    24px 24px 0 var(--dopamine-green);
}

/* 负向硬边阴影 */
.hard-shadow-text--invert {
  color: var(--maxi-black);
  background: var(--maxi-white);
  text-shadow:
    -4px -4px 0 var(--dopamine-pink),
    -8px -8px 0 var(--dopamine-blue);
}
```

### 12. 故障艺术文字 (Glitch Art)

**效果描述**：RGB 分离 + clip-path 动画，制造数字故障感

```css
/* Glitch 故障艺术文字 */
.glitch-text {
  position: relative;
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  color: var(--maxi-white);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
}

.glitch-text::before {
  color: var(--dopamine-pink);
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch-text::after {
  color: var(--dopamine-blue);
  animation: glitch-2 3s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(3px, -3px); }
  40% { transform: translate(3px, 3px); }
  60% { transform: translate(-3px, -3px); }
  80% { transform: translate(-3px, 3px); }
}

/* 强烈故障变体 */
.glitch-text--intense::before {
  animation: glitch-intense 0.3s infinite;
}

@keyframes glitch-intense {
  0% { transform: translate(0); clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); }
  20% { transform: translate(-5px, 5px); clip-path: polygon(0 15%, 100% 15%, 100% 40%, 0 40%); }
  40% { transform: translate(5px, -5px); clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); }
  60% { transform: translate(-3px, 3px); clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%); }
  80% { transform: translate(3px, -3px); clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); }
  100% { transform: translate(0); clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%); }
}
```

---

### 层叠布局组件

```css
/* 层叠卡片 */
.stacked-card {
  position: relative;
  background: linear-gradient(135deg, var(--maxi-gray) 0%, var(--maxi-black) 100%);
  border: 2px solid var(--border-bright);
  border-radius: var(--radius-asymmetric);
  padding: var(--space-lg);
  transform: rotate(-2deg);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stacked-card::before {
  content: '';
  position: absolute;
  inset: 8px -8px -8px 8px;
  background: var(--dopamine-pink);
  border-radius: inherit;
  z-index: -1;
  transition: all 0.4s ease;
}

.stacked-card:hover {
  transform: rotate(0deg) translateY(-8px);
}

.stacked-card:hover::before {
  inset: 12px -12px -12px 12px;
}

/* 多层堆叠 */
.multi-stack {
  position: relative;
}

.multi-stack > *:nth-child(1) {
  position: relative;
  z-index: 3;
}

.multi-stack > *:nth-child(2) {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  transform: rotate(3deg);
  opacity: 0.8;
}

.multi-stack > *:nth-child(3) {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 1;
  transform: rotate(-2deg);
  opacity: 0.5;
}
```

---

## 布局层效果库 (v2.0 新增)

> **设计目标**：打破「盒子」的重力系统，制造「画布装不下内容」的丰盛感

### 卡片重叠与旋转

**效果描述**：卡片轻微旋转 3-5 度并边缘重叠 20px，营造「随意堆叠」的桌面感

```css
/* 重叠卡片容器 */
.overlapping-cards {
  position: relative;
  padding: var(--space-xl);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

/* 重叠卡片单项 */
.overlapping-cards__item {
  position: relative;
  flex: 1 1 280px;
  min-height: 200px;
  background: var(--maxi-gray);
  border: 2px solid var(--border-bright);
  border-radius: var(--radius-asymmetric);
  padding: var(--space-lg);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 第一张卡片 - 微左旋 */
.overlapping-cards__item:nth-child(1) {
  z-index: 3;
  transform: rotate(-2deg);
}

/* 第二张卡片 - 右旋 + 偏移 */
.overlapping-cards__item:nth-child(2) {
  z-index: 2;
  margin-top: -20px;
  margin-left: 30px;
  transform: rotate(3deg);
}

/* 第三张卡片 - 微左旋 + 更大偏移 */
.overlapping-cards__item:nth-child(3) {
  z-index: 1;
  margin-top: -10px;
  margin-left: 60px;
  transform: rotate(-1deg);
}

/* 悬停效果 - 拉出到最前 */
.overlapping-cards__item:hover {
  z-index: 10;
  transform: rotate(0deg) translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* 扇形展开变体 */
.fan-cards {
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.fan-cards__item {
  flex: 0 0 200px;
  height: 280px;
  background: var(--maxi-gray);
  border: 2px solid var(--border-bright);
  border-radius: 12px;
  transition: all 0.4s ease;
  transform-origin: bottom center;
}

.fan-cards__item:nth-child(1) { transform: rotate(-15deg) translateX(30px); }
.fan-cards__item:nth-child(2) { transform: rotate(-5deg) translateX(10px); z-index: 2; }
.fan-cards__item:nth-child(3) { transform: rotate(0deg); z-index: 3; }
.fan-cards__item:nth-child(4) { transform: rotate(5deg) translateX(-10px); z-index: 2; }
.fan-cards__item:nth-child(5) { transform: rotate(15deg) translateX(-30px); }

.fan-cards__item:hover {
  transform: rotate(0deg) translateY(-20px) scale(1.05);
  z-index: 10;
}
```

### 溢出设计 (Overflow)

**效果描述**：让标题文字突破屏幕边界，色块出血到屏幕外，制造「装不下」的丰盛感

```css
/* 标题突破边界 - 超大字号溢出 */
.overflow-title {
  font-family: var(--font-display);
  font-size: clamp(8rem, 25vw, 20rem);
  font-weight: var(--weight-black);
  text-transform: uppercase;
  line-height: 0.8;
  white-space: nowrap;
  /* 允许水平溢出 */
  margin-left: -5vw;
  margin-right: -5vw;
  width: calc(100% + 10vw);
  color: var(--maxi-white);
}

/* 溢出容器 - 允许内容超出 */
.overflow-container {
  overflow: visible;
  position: relative;
}

/* 色块出血效果 - 全宽背景 */
.bleed-block {
  position: relative;
  background: var(--clash-fire);
  /* 出血到屏幕边缘 */
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: calc(50vw - 50%);
  padding-right: calc(50vw - 50%);
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

/* 边缘打破效果 */
.edge-break--left {
  margin-left: -20px;
  padding-left: 20px;
}

.edge-break--right {
  margin-right: -20px;
  padding-right: 20px;
}

.edge-break--full {
  margin: 0 -40px;
  padding: 0 40px;
}

/* 底部溢出 */
.overflow-bottom {
  margin-bottom: -50px;
  padding-bottom: 50px;
  z-index: 10;
}

/* 顶部溢出 */
.overflow-top {
  margin-top: -50px;
  padding-top: 50px;
  z-index: 10;
}
```

### Z 轴错位布局

**效果描述**：利用 CSS transform: translate3d 实现卡片的前后层叠

```css
/* 3D 层叠容器 */
.depth-stack {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* 层叠层级 */
.depth-stack__layer {
  position: relative;
  transition: transform 0.4s ease;
}

.depth-stack__layer--front {
  transform: translateZ(50px);
  z-index: 3;
}

.depth-stack__layer--mid {
  transform: translateZ(0);
  z-index: 2;
}

.depth-stack__layer--back {
  transform: translateZ(-50px) scale(0.9);
  z-index: 1;
  opacity: 0.7;
}

/* 悬停时前移 */
.depth-stack__layer:hover {
  transform: translateZ(80px) scale(1.02);
}

/* 倾斜卡片组 */
.tilted-card-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  transform-style: preserve-3d;
}

.tilted-card-group__item {
  background: var(--maxi-gray);
  border: 2px solid var(--border-bright);
  padding: var(--space-lg);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.tilted-card-group__item:nth-child(1) {
  transform: rotateY(5deg) rotateX(2deg);
}

.tilted-card-group__item:nth-child(2) {
  transform: rotateY(0deg) rotateX(0deg);
  z-index: 2;
}

.tilted-card-group__item:nth-child(3) {
  transform: rotateY(-5deg) rotateX(2deg);
}

.tilted-card-group__item:hover {
  transform: rotateY(0deg) rotateX(0deg) translateY(-10px);
  z-index: 10;
}
```

### 不对称网格

**效果描述**：打破传统12列网格，使用不规则比例

```css
/* 不对称网格 - 2:1:1.5 比例 */
.asymmetric-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  grid-template-rows: auto;
  gap: var(--space-md);
}

/* Masonry 风格网格 */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: var(--space-md);
}

.masonry-grid__item--tall {
  grid-row: span 2;
}

.masonry-grid__item--wide {
  grid-column: span 2;
}

.masonry-grid__item--large {
  grid-column: span 2;
  grid-row: span 2;
}

/* 对角线布局 */
.diagonal-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.diagonal-layout > *:nth-child(1) { grid-column: 1; transform: translateY(0); }
.diagonal-layout > *:nth-child(2) { grid-column: 2; transform: translateY(30px); }
.diagonal-layout > *:nth-child(3) { grid-column: 3; transform: translateY(60px); }
.diagonal-layout > *:nth-child(4) { grid-column: 4; transform: translateY(90px); }
```

---

### 撞色组合方案

```css
/* 热力撞色块 */
.clash-block--hot {
  background: var(--clash-hot);
  color: var(--maxi-white);
}

/* 赛博撞色块 */
.clash-block--cyber {
  background: var(--clash-cyber);
  color: var(--maxi-black);
}

/* 日落撞色块 */
.clash-block--sunset {
  background: var(--clash-sunset);
  color: var(--maxi-white);
}

/* 极光撞色块 */
.clash-block--aurora {
  background: var(--clash-aurora);
  color: var(--maxi-white);
}

/* 分割撞色 */
.split-clash {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.split-clash > *:first-child {
  background: var(--dopamine-pink);
  color: var(--maxi-white);
}

.split-clash > *:last-child {
  background: var(--dopamine-green);
  color: var(--maxi-black);
}

/* 棋盘撞色 */
.checkerboard-clash {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.checkerboard-clash > *:nth-child(odd) {
  background: var(--dopamine-yellow);
  color: var(--maxi-black);
}

.checkerboard-clash > *:nth-child(even) {
  background: var(--dopamine-purple);
  color: var(--maxi-white);
}
```

### 两层融合效果 (Maximalism + Experimental Typography)

```css
/* 融合组件：极繁背景 + 实验字体 */
.fusion-maxi-typo {
  position: relative;
  padding: var(--space-2xl);
  background: var(--maxi-black);
  overflow: hidden;
  isolation: isolate;
}

/* 层叠装饰元素 */
.fusion-maxi-typo::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: var(--clash-fire);
  border-radius: var(--radius-blob-1);
  opacity: 0.3;
  filter: blur(80px);
  z-index: -1;
}

.fusion-maxi-typo::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -20%;
  width: 70%;
  height: 100%;
  background: var(--clash-cyber);
  border-radius: var(--radius-blob-2);
  opacity: 0.2;
  filter: blur(100px);
  z-index: -1;
}

/* 实验性标题 */
.fusion-maxi-typo__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  color: transparent;
  background: var(--text-gradient-hot);
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.04em;
  position: relative;
  z-index: 1;
}

/* 重叠装饰字 */
.fusion-maxi-typo__title::before {
  content: attr(data-text);
  position: absolute;
  top: 8px;
  left: 8px;
  color: var(--dopamine-blue);
  opacity: 0.5;
  z-index: -1;
}

/* 副标题 - 对比风格 */
.fusion-maxi-typo__subtitle {
  font-family: var(--font-geometric);
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
  color: var(--maxi-white);
  opacity: 0.8;
  margin-top: var(--space-lg);
  max-width: 50ch;
  position: relative;
  z-index: 1;
}

/* 装饰性标签云 */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.tag-cloud__item {
  padding: var(--space-xs) var(--space-md);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  border: 2px solid;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.tag-cloud__item--pink {
  color: var(--dopamine-pink);
  border-color: var(--dopamine-pink);
}

.tag-cloud__item--pink:hover {
  background: var(--dopamine-pink);
  color: var(--maxi-white);
}

.tag-cloud__item--green {
  color: var(--dopamine-green);
  border-color: var(--dopamine-green);
}

.tag-cloud__item--green:hover {
  background: var(--dopamine-green);
  color: var(--maxi-black);
}
```

### 按钮组件

```css
/* 极繁主义按钮 - 基础 */
.maxi-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--maxi-white);
  background: var(--dopamine-pink);
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.maxi-button::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 2px solid var(--maxi-white);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.maxi-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 10px 40px rgba(255, 45, 146, 0.4),
    0 0 0 4px rgba(255, 45, 146, 0.2);
}

.maxi-button:hover::before {
  opacity: 1;
}

/* 渐变按钮 */
.maxi-button--gradient {
  background: var(--clash-hot);
  background-size: 200% 100%;
  animation: gradient-shift 4s ease infinite;
}

/* 描边按钮 */
.maxi-button--outline {
  background: transparent;
  border: 3px solid var(--dopamine-green);
  color: var(--dopamine-green);
}

.maxi-button--outline:hover {
  background: var(--dopamine-green);
  color: var(--maxi-black);
}

/* 3D 按钮 */
.maxi-button--3d {
  background: var(--dopamine-yellow);
  color: var(--maxi-black);
  box-shadow:
    0 6px 0 var(--dopamine-orange),
    0 8px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
}

.maxi-button--3d:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 var(--dopamine-orange),
    0 12px 30px rgba(0, 0, 0, 0.35);
}

.maxi-button--3d:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 var(--dopamine-orange),
    0 4px 10px rgba(0, 0, 0, 0.3);
}

/* 倾斜按钮 */
.maxi-button--skewed {
  transform: skewX(-10deg);
}

.maxi-button--skewed span {
  display: inline-block;
  transform: skewX(10deg);
}
```

---

## 背景层效果库 (v2.0 新增)

> **设计目标**：从「纯色」到「混沌宇宙」，营造复古未来的 texture 氛围

### 动态胶片颗粒

**效果描述**：叠加动态胶片颗粒，透明度 8-15%，营造复古电影质感

```css
/* 动态胶片颗粒叠加层 */
.film-grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain-shift 0.5s steps(10) infinite;
}

@keyframes grain-shift {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

/* 可调节透明度变体 */
.film-grain-overlay--light { opacity: 0.05; }
.film-grain-overlay--medium { opacity: 0.08; }
.film-grain-overlay--heavy { opacity: 0.12; }
```

### 流体渐变光斑

**效果描述**：2-3 个巨大的、缓慢移动的高斯模糊色块，制造「有毒霓虹」的氛围

```css
/* 流体渐变光斑容器 */
.fluid-gradient-orbs {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* 单个光斑 */
.fluid-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float-orb 20s ease-in-out infinite;
  will-change: transform;
}

/* 粉色光斑 - 右上角 */
.fluid-orb--pink {
  width: 60vw;
  height: 60vw;
  max-width: 800px;
  max-height: 800px;
  background: var(--dopamine-pink);
  top: -20%;
  right: -10%;
  animation-delay: 0s;
}

/* 青色光斑 - 左下角 */
.fluid-orb--cyan {
  width: 50vw;
  height: 50vw;
  max-width: 600px;
  max-height: 600px;
  background: var(--dopamine-blue);
  bottom: -30%;
  left: -15%;
  animation-delay: -7s;
}

/* 黄色光斑 - 中心偏移 */
.fluid-orb--yellow {
  width: 40vw;
  height: 40vw;
  max-width: 500px;
  max-height: 500px;
  background: var(--dopamine-yellow);
  top: 40%;
  left: 30%;
  animation-delay: -14s;
}

/* 绿色光斑 - 边缘 */
.fluid-orb--green {
  width: 35vw;
  height: 35vw;
  max-width: 400px;
  max-height: 400px;
  background: var(--dopamine-green);
  top: 10%;
  left: -10%;
  animation-delay: -10s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(5%, 10%) scale(1.1);
  }
  50% {
    transform: translate(-5%, 5%) scale(0.95);
  }
  75% {
    transform: translate(10%, -5%) scale(1.05);
  }
}

/* 减弱动效（无障碍） */
@media (prefers-reduced-motion: reduce) {
  .fluid-orb {
    animation: none;
  }
  .film-grain-overlay {
    animation: none;
  }
}
```

### 显性网格系统

**效果描述**：极淡的 12 列网格线或点阵（Dot Grid），作为装饰性底层

```css
/* 12列网格线叠加 */
.grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image:
    linear-gradient(to right, var(--maxi-white) 1px, transparent 1px),
    linear-gradient(to bottom, var(--maxi-white) 1px, transparent 1px);
  background-size: calc(100% / 12) 100px;
}

/* 点阵网格 */
.dot-grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.05;
  background-image: radial-gradient(
    circle,
    var(--maxi-white) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* 对角线网格 */
.diagonal-grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.02;
  background-image:
    linear-gradient(45deg, var(--maxi-white) 1px, transparent 1px),
    linear-gradient(-45deg, var(--maxi-white) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### 组合背景系统

**效果描述**：将所有背景层组合使用的完整示例

```css
/* 极繁主义背景系统 - 完整堆叠 */
.maxi-bg-system {
  position: relative;
  min-height: 100vh;
  background: var(--maxi-black);
  overflow-x: hidden;
}

/* 层级顺序（从底到顶）：
   1. 纯色背景 (.maxi-bg-system)
   2. 流体光斑 (.fluid-gradient-orbs)
   3. 显性网格 (.dot-grid-overlay)
   4. 内容层 (z-index: 1+)
   5. 胶片颗粒 (.film-grain-overlay, z-index: 9999)
*/

/* 内容层需要设置 z-index */
.maxi-bg-system > .content {
  position: relative;
  z-index: 1;
}
```

---

## 材质与滤镜效果库 (v2.0 新增)

> **设计目标**：数字奢华（Digital Maximalism），多层材质叠加营造视觉深度

### 液态玻璃滤镜 (Liquid Glass)

**效果描述**：背景模糊 + 噪点纹理 + 高光折射，打造动态半透明质感

```css
/* 液态玻璃基础 */
.liquid-glass {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
  -webkit-backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  overflow: hidden;
}

/* 噪点纹理层 */
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* 高光折射层 */
.liquid-glass::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  border-radius: 24px 24px 0 0;
  pointer-events: none;
}

/* 内容需要相对定位 */
.liquid-glass > * {
  position: relative;
  z-index: 1;
}

/* 彩色液态玻璃变体 */
.liquid-glass--pink {
  background: rgba(255, 45, 146, 0.15);
  border-color: rgba(255, 45, 146, 0.3);
}

.liquid-glass--cyan {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.3);
}

/* 渐变边框液态玻璃 */
.liquid-glass--gradient-border {
  border: none;
  background:
    linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.8)) padding-box,
    linear-gradient(135deg, var(--dopamine-pink), var(--dopamine-blue)) border-box;
  border: 2px solid transparent;
}
```

### 铬金属描边 (Chrome Type)

**效果描述**：渐变描边（从银到金的金属质感）+ 内发光，打造数字奢华感

```css
/* 铬金属渐变文字 */
.chrome-type {
  position: relative;
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    #e8e8e8 0%,
    #ffffff 20%,
    #b8b8b8 40%,
    #ffd700 60%,
    #ff8c00 80%,
    #e8e8e8 100%
  );
  background-size: 100% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: chrome-shine 3s ease-in-out infinite;
  /* 内发光 */
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.5));
}

@keyframes chrome-shine {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
}

/* 铬金属描边版本 */
.chrome-outline {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 3px transparent;
  background: linear-gradient(
    90deg,
    #c0c0c0,
    #ffd700,
    #c0c0c0
  );
  background-clip: text;
  -webkit-background-clip: text;
  filter:
    drop-shadow(2px 2px 0 rgba(255, 215, 0, 0.6))
    drop-shadow(-2px -2px 0 rgba(192, 192, 192, 0.6));
}

/* 全息铬金属 */
.chrome-holographic {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: var(--weight-black);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    #ff00ff,
    #00ffff,
    #ff00ff,
    #ffff00,
    #00ff00,
    #ff00ff
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: holo-shift 4s linear infinite;
}

@keyframes holo-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
```

### Y2K 装饰元素

**效果描述**：复古贴纸元素——蝴蝶、扫描线、像素爱心、中文印章，营造亚文化氛围

```css
/* === Y2K 蝴蝶装饰 === */
.y2k-butterfly {
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    var(--dopamine-pink),
    var(--dopamine-purple)
  );
  clip-path: polygon(
    50% 50%,
    0% 0%,
    25% 50%,
    0% 100%,
    50% 75%,
    100% 100%,
    75% 50%,
    100% 0%
  );
  animation: flutter 2s ease-in-out infinite;
  opacity: 0.8;
}

@keyframes flutter {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(10deg) scale(1.1); }
}

/* 蝴蝶变体 - 不同颜色 */
.y2k-butterfly--cyan {
  background: linear-gradient(135deg, var(--dopamine-blue), var(--dopamine-green));
}

.y2k-butterfly--gold {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
}

/* === 扫描线效果 === */
.scanlines {
  position: relative;
  overflow: hidden;
}

.scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  pointer-events: none;
  animation: scanline-scroll 10s linear infinite;
}

@keyframes scanline-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* CRT 扫描线 - 更强烈 */
.scanlines--crt::after {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.15) 1px,
    rgba(0, 0, 0, 0.15) 2px
  );
}

/* === 像素爱心 === */
.pixel-heart {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: var(--dopamine-pink);
  clip-path: polygon(
    0% 37.5%, 12.5% 25%, 25% 25%, 37.5% 37.5%,
    50% 50%, 62.5% 37.5%, 75% 25%, 87.5% 25%,
    100% 37.5%, 100% 50%, 100% 62.5%, 87.5% 75%,
    50% 100%, 12.5% 75%, 0% 62.5%, 0% 50%
  );
  animation: heartbeat 1s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.25); }
  30% { transform: scale(1); }
  45% { transform: scale(1.15); }
}

/* === 中文印章效果 === */
.chinese-stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 3px solid var(--dopamine-orange);
  border-radius: 8px;
  font-family: var(--font-serif-cn);
  font-size: 14px;
  font-weight: 900;
  color: var(--dopamine-orange);
  transform: rotate(-8deg);
  position: relative;
}

.chinese-stamp::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid var(--dopamine-orange);
  border-radius: 4px;
  opacity: 0.5;
}

/* 印章变体 */
.chinese-stamp--red {
  border-color: #cc0000;
  color: #cc0000;
}

.chinese-stamp--square {
  border-radius: 4px;
}

/* === 星星装饰 === */
.y2k-star {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: var(--dopamine-yellow);
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
    50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
  animation: twinkle 1.5s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.2) rotate(10deg); opacity: 0.8; }
}

/* === 闪光点 === */
.sparkle {
  position: relative;
}

.sparkle::before,
.sparkle::after {
  content: '✦';
  position: absolute;
  font-size: 0.5em;
  color: var(--dopamine-yellow);
  animation: sparkle-float 2s ease-in-out infinite;
}

.sparkle::before {
  top: -10px;
  right: -10px;
  animation-delay: 0s;
}

.sparkle::after {
  bottom: -10px;
  left: -10px;
  animation-delay: 1s;
}

@keyframes sparkle-float {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
  50% { transform: scale(1.3) rotate(180deg); opacity: 1; }
}
```

---

## 生图提示词库

### 核心融合提示词

```
maximalist UI design, bold experimental typography, oversized headlines,
dopamine color palette, neon pink orange yellow green, clashing colors,
layered composition, visual density, breaking the grid, asymmetric layout,
vibrant gradients, text as visual element, dynamic type treatment,
creative agency website, Gen Z aesthetic, bold expressive design
```

### 场景化提示词

**创意机构**：
```
creative agency website, maximalist design, experimental typography,
oversized display text, gradient text effects, overlapping elements,
vibrant color blocks, pink and electric blue, bold visual identity,
cutting-edge design, portfolio showcase, dynamic layout,
art direction, contemporary digital design
```

**音乐/艺术平台**：
```
music platform UI, maximalist aesthetic, experimental type design,
fluid typography, warped text effects, neon color palette,
layered visual elements, album artwork style, bold graphics,
energetic design, youth culture, street art influence,
dynamic composition, visual rhythm
```

**时尚品牌**：
```
fashion brand website, maximalist luxury, editorial typography,
high fashion aesthetic, bold display fonts, clashing colors,
asymmetric layout, avant-garde design, runway energy,
vibrant gradients, oversized headlines, visual drama,
contemporary luxury, trend-setting design
```

**活动宣传**：
```
event poster design, maximalist composition, experimental lettering,
bold type hierarchy, dopamine colors, layered graphics,
dynamic diagonal layout, eye-catching visuals, festival energy,
motion graphics style, promotional design, high energy,
memorable visual impact, contemporary event design
```

**Z世代产品**：
```
Gen Z app design, maximalist interface, experimental typography,
bold color combinations, playful elements, meme culture influence,
dynamic type, clashing neon colors, visual chaos with purpose,
youth-oriented design, social media aesthetic,
attention-grabbing visuals, trend-forward
```

---

## 动画建议

### 关键帧动画

```css
/* 文字入场 - 弹跳缩放 */
@keyframes text-bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-5deg);
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
  70% {
    transform: scale(0.95) rotate(-1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* 文字打字机效果 */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--dopamine-pink); }
}

.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--dopamine-pink);
  animation:
    typewriter 2s steps(30) forwards,
    blink-caret 0.75s step-end infinite;
}

/* 渐变流动 */
@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradient-flow 6s ease infinite;
}

/* 抖动效果 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake-hover:hover {
  animation: shake 0.5s ease-in-out;
}

/* 弹跳浮动 */
@keyframes bounce-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  75% {
    transform: translateY(-8px) rotate(-2deg);
  }
}

.bounce-float {
  animation: bounce-float 3s ease-in-out infinite;
}

/* 色彩闪烁 */
@keyframes color-flash {
  0%, 100% { color: var(--dopamine-pink); }
  25% { color: var(--dopamine-orange); }
  50% { color: var(--dopamine-yellow); }
  75% { color: var(--dopamine-green); }
}

.color-flash {
  animation: color-flash 4s linear infinite;
}

/* 缩放脉冲 */
@keyframes pulse-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* 交错延迟 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

### 丰富微交互

```css
/* 通用过渡 */
.transition-maxi {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-duration: 0.4s;
}

/* 卡片悬停 - 3D翻转 */
.card-3d-flip {
  perspective: 1000px;
}

.card-3d-flip:hover {
  transform: rotateY(5deg) rotateX(5deg);
}

/* 按钮悬停 - 发光效果 */
.glow-button {
  transition: all 0.3s ease;
}

.glow-button:hover {
  box-shadow:
    0 0 20px currentColor,
    0 0 40px currentColor,
    0 0 60px currentColor;
}

/* 链接下划线动画 */
.link-animated {
  position: relative;
  text-decoration: none;
}

.link-animated::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--dopamine-pink);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.link-animated:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* 图标旋转 */
.icon-spin-hover:hover svg {
  animation: spin 0.6s ease-in-out;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 元素弹入 */
.pop-in {
  opacity: 0;
  transform: scale(0.5);
  animation: text-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

---

## 动画库扩展 (v2.0 新增)

> **设计目标**：拒绝静止（Anti-Static），添加视差滚动、故障闪烁、液态扭曲等动态极繁元素

### 故障艺术动画套件

```css
/* === Glitch 故障艺术动画套件 === */

/* 快速闪烁故障 */
@keyframes glitch-flicker {
  0%, 100% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.4; }
  20% { opacity: 1; }
  50% { opacity: 0.9; }
  55% { opacity: 0.2; }
  60% { opacity: 1; }
}

.glitch-flicker {
  animation: glitch-flicker 0.3s infinite;
}

/* 水平撕裂 */
@keyframes glitch-tear {
  0%, 100% {
    clip-path: inset(0 0 0 0);
    transform: translateX(0);
  }
  5% {
    clip-path: inset(10% 0 85% 0);
    transform: translateX(-5px);
  }
  10% {
    clip-path: inset(40% 0 43% 0);
    transform: translateX(5px);
  }
  15% {
    clip-path: inset(80% 0 5% 0);
    transform: translateX(-3px);
  }
  20% {
    clip-path: inset(0 0 0 0);
    transform: translateX(0);
  }
}

.glitch-tear {
  animation: glitch-tear 2s infinite;
}

/* RGB 分离 */
@keyframes rgb-split {
  0%, 100% {
    text-shadow:
      -2px 0 var(--dopamine-pink),
      2px 0 var(--dopamine-blue);
  }
  25% {
    text-shadow:
      -4px 0 var(--dopamine-pink),
      4px 0 var(--dopamine-blue);
  }
  50% {
    text-shadow:
      -2px 0 var(--dopamine-pink),
      2px 0 var(--dopamine-blue);
  }
  75% {
    text-shadow:
      -6px 0 var(--dopamine-pink),
      6px 0 var(--dopamine-blue);
  }
}

.glitch-rgb-split {
  animation: rgb-split 0.5s infinite;
}

/* 数据损坏效果 */
@keyframes data-corrupt {
  0%, 100% {
    transform: translate(0) skew(0);
    filter: hue-rotate(0deg);
  }
  10% {
    transform: translate(-2px, 1px) skew(-2deg);
    filter: hue-rotate(90deg);
  }
  20% {
    transform: translate(2px, -1px) skew(2deg);
    filter: hue-rotate(180deg);
  }
  30% {
    transform: translate(-1px, 2px) skew(-1deg);
    filter: hue-rotate(270deg);
  }
  40% {
    transform: translate(0) skew(0);
    filter: hue-rotate(0deg);
  }
}

.data-corrupt-hover:hover {
  animation: data-corrupt 0.3s ease;
}
```

### 视差滚动动画

```css
/* === 视差滚动系统 === */

/* 视差容器 */
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
  perspective-origin: center center;
}

/* 视差层 */
.parallax-layer {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
}

/* 背景层 - 最慢（移动 1/3） */
.parallax-layer--back {
  transform: translateZ(-2px) scale(3);
}

/* 中间层 - 中速（移动 1/2） */
.parallax-layer--mid {
  transform: translateZ(-1px) scale(2);
}

/* 前景层 - 正常速度 */
.parallax-layer--front {
  transform: translateZ(0);
}

/* 简化版 CSS 视差（基于 fixed） */
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* 滚动触发动画 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 滚动触发 - 左侧滑入 */
.scroll-reveal--left {
  transform: translateX(-100px);
}

.scroll-reveal--left.is-visible {
  transform: translateX(0);
}

/* 滚动触发 - 缩放 */
.scroll-reveal--scale {
  transform: scale(0.8);
}

.scroll-reveal--scale.is-visible {
  transform: scale(1);
}

/* 交错延迟 */
.scroll-reveal--stagger:nth-child(1) { transition-delay: 0.1s; }
.scroll-reveal--stagger:nth-child(2) { transition-delay: 0.2s; }
.scroll-reveal--stagger:nth-child(3) { transition-delay: 0.3s; }
.scroll-reveal--stagger:nth-child(4) { transition-delay: 0.4s; }
.scroll-reveal--stagger:nth-child(5) { transition-delay: 0.5s; }
```

### 液态扭曲动画

```css
/* === 液态扭曲效果 === */

/* 液态波动文字 */
.liquid-text {
  animation: liquid-morph 8s ease-in-out infinite;
}

@keyframes liquid-morph {
  0%, 100% {
    transform: scaleX(1) scaleY(1);
  }
  25% {
    transform: scaleX(1.02) scaleY(0.98);
  }
  50% {
    transform: scaleX(0.98) scaleY(1.02);
  }
  75% {
    transform: scaleX(1.01) scaleY(0.99);
  }
}

/* 液态波动背景 */
.liquid-bg {
  animation: liquid-bg-morph 10s ease-in-out infinite;
}

@keyframes liquid-bg-morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
  }
  75% {
    border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
  }
}

/* 弹性变形 */
.elastic-morph {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.elastic-morph:hover {
  transform: scale(1.05) skewX(-2deg);
}

/* 水波纹效果 */
@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple-effect {
  position: relative;
  overflow: hidden;
}

.ripple-effect::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  animation: ripple 2s ease-out infinite;
}
```

### 鼠标跟随效果

```css
/* === 鼠标跟随效果 === */

/* 自定义光标 */
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background: var(--dopamine-pink);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
}

.custom-cursor--hover {
  transform: scale(2);
}

/* 鼠标跟随光晕 */
.cursor-glow {
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 45, 146, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

/* 卡片鼠标跟踪高光 (需配合 JS) */
.mouse-track-glow {
  position: relative;
  overflow: hidden;
}

.mouse-track-glow::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  /* JS 设置 --mouse-x, --mouse-y */
  left: var(--mouse-x, 50%);
  top: var(--mouse-y, 50%);
}

.mouse-track-glow:hover::after {
  opacity: 1;
}

/* 磁性吸附效果 */
.magnetic-hover {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 需配合 JS 监听 mousemove 事件 */
```

### 逐字弹跳进入

```css
/* === 逐字弹跳进入动画 === */

.stagger-bounce-text {
  display: inline-flex;
  flex-wrap: wrap;
}

.stagger-bounce-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(100px) scale(0);
  animation: stagger-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* 逐字延迟 - 手动设置 */
.stagger-bounce-text span:nth-child(1) { animation-delay: 0.0s; }
.stagger-bounce-text span:nth-child(2) { animation-delay: 0.05s; }
.stagger-bounce-text span:nth-child(3) { animation-delay: 0.1s; }
.stagger-bounce-text span:nth-child(4) { animation-delay: 0.15s; }
.stagger-bounce-text span:nth-child(5) { animation-delay: 0.2s; }
.stagger-bounce-text span:nth-child(6) { animation-delay: 0.25s; }
.stagger-bounce-text span:nth-child(7) { animation-delay: 0.3s; }
.stagger-bounce-text span:nth-child(8) { animation-delay: 0.35s; }
.stagger-bounce-text span:nth-child(9) { animation-delay: 0.4s; }
.stagger-bounce-text span:nth-child(10) { animation-delay: 0.45s; }
.stagger-bounce-text span:nth-child(11) { animation-delay: 0.5s; }
.stagger-bounce-text span:nth-child(12) { animation-delay: 0.55s; }

@keyframes stagger-bounce-in {
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0) rotate(-10deg);
  }
  60% {
    opacity: 1;
    transform: translateY(-20px) scale(1.1) rotate(2deg);
  }
  80% {
    transform: translateY(5px) scale(0.95) rotate(-1deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* 逐字滑入 */
.stagger-slide-text span {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: stagger-slide-in 0.4s ease forwards;
}

.stagger-slide-text span:nth-child(1) { animation-delay: 0.0s; }
.stagger-slide-text span:nth-child(2) { animation-delay: 0.03s; }
.stagger-slide-text span:nth-child(3) { animation-delay: 0.06s; }
.stagger-slide-text span:nth-child(4) { animation-delay: 0.09s; }
.stagger-slide-text span:nth-child(5) { animation-delay: 0.12s; }
.stagger-slide-text span:nth-child(6) { animation-delay: 0.15s; }
.stagger-slide-text span:nth-child(7) { animation-delay: 0.18s; }
.stagger-slide-text span:nth-child(8) { animation-delay: 0.21s; }

@keyframes stagger-slide-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 逐字缩放弹入 */
.stagger-scale-text span {
  display: inline-block;
  opacity: 0;
  transform: scale(0);
  animation: stagger-scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.stagger-scale-text span:nth-child(1) { animation-delay: 0.0s; }
.stagger-scale-text span:nth-child(2) { animation-delay: 0.07s; }
.stagger-scale-text span:nth-child(3) { animation-delay: 0.14s; }
.stagger-scale-text span:nth-child(4) { animation-delay: 0.21s; }
.stagger-scale-text span:nth-child(5) { animation-delay: 0.28s; }
.stagger-scale-text span:nth-child(6) { animation-delay: 0.35s; }

@keyframes stagger-scale-in {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-20deg);
  }
  70% {
    opacity: 1;
    transform: scale(1.15) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* 减弱动效（无障碍） */
@media (prefers-reduced-motion: reduce) {
  .glitch-flicker,
  .glitch-tear,
  .glitch-rgb-split,
  .liquid-text,
  .liquid-bg,
  .ripple-effect::after,
  .stagger-bounce-text span,
  .stagger-slide-text span,
  .stagger-scale-text span {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## 组合应用示例

### 完整HTML页面示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>极繁实验 - 设计系统示例</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- v1.0 核心字体 -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- v2.0 扩展字体 -->
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=DM+Serif+Display&family=IBM+Plex+Mono:wght@400;700&family=JetBrains+Mono:wght@400;700&family=Kalam:wght@400;700&family=Libre+Bodoni:wght@400;700;900&family=Noto+Serif+SC:wght@400;700;900&family=Outfit:wght@400;500;700&family=Patrick+Hand&family=Playfair+Display:wght@400;700;900&family=Press+Start+2P&family=Silkscreen&family=Space+Mono:wght@400;700&family=Special+Elite&family=Syne:wght@400;500;700;800&family=VT323&display=swap" rel="stylesheet">
  <style>
    /* === CSS 变量 === */
    :root {
      --dopamine-pink: #FF2D92;
      --dopamine-orange: #FF6B35;
      --dopamine-yellow: #FFDE59;
      --dopamine-green: #00F5A0;
      --dopamine-blue: #00D4FF;
      --dopamine-purple: #9B5DE5;
      --maxi-black: #0A0A0A;
      --maxi-white: #FAFAFA;
      --maxi-gray: #2D2D2D;
      --text-gradient-hot: linear-gradient(90deg, #FF2D92, #FF6B35, #FFDE59);
      --clash-fire: linear-gradient(135deg, #FF2D92 0%, #FF6B35 50%, #FFDE59 100%);
      --clash-cyber: linear-gradient(135deg, #9B5DE5 0%, #00F5A0 50%, #00D4FF 100%);
      --space-sm: 0.5rem;
      --space-md: 1rem;
      --space-lg: 2rem;
      --space-xl: 4rem;
      --space-2xl: 8rem;
      --font-display: "Bebas Neue", "Space Grotesk", system-ui, sans-serif;
      --font-body: "Space Grotesk", system-ui, sans-serif;
    }

    /* === 全局样式 === */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-body);
      color: var(--maxi-white);
      background: var(--maxi-black);
      line-height: 1.4;
      overflow-x: hidden;
    }

    /* === 主容器 === */
    .maxi-container {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    }

    /* 背景装饰 */
    .maxi-container::before {
      content: '';
      position: fixed;
      top: -20%;
      right: -15%;
      width: 60%;
      height: 80%;
      background: var(--clash-fire);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      opacity: 0.15;
      filter: blur(100px);
      z-index: 0;
    }

    .maxi-container::after {
      content: '';
      position: fixed;
      bottom: -30%;
      left: -20%;
      width: 70%;
      height: 100%;
      background: var(--clash-cyber);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      opacity: 0.1;
      filter: blur(120px);
      z-index: 0;
    }

    .maxi-container > * {
      position: relative;
      z-index: 1;
    }

    /* === 导航栏 === */
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-lg) var(--space-xl);
    }

    .nav-logo {
      font-family: var(--font-display);
      font-size: 2rem;
      letter-spacing: 0.1em;
      background: var(--text-gradient-hot);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: var(--space-lg);
      list-style: none;
    }

    .nav-links a {
      color: var(--maxi-white);
      text-decoration: none;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.875rem;
      position: relative;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--dopamine-pink);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-links a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    .nav-links a:hover {
      color: var(--dopamine-pink);
    }

    /* === Hero 区域 === */
    .hero {
      padding: var(--space-2xl) var(--space-xl);
      max-width: 1400px;
      margin: 0 auto;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(5rem, 18vw, 14rem);
      line-height: 0.85;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      margin-bottom: var(--space-lg);
    }

    .hero-title__line {
      display: block;
    }

    .hero-title__line--gradient {
      background: var(--text-gradient-hot);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-title__line--outline {
      color: transparent;
      -webkit-text-stroke: 2px var(--maxi-white);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(250, 250, 250, 0.7);
      max-width: 50ch;
      margin-bottom: var(--space-xl);
      line-height: 1.6;
    }

    /* === 标签云 === */
    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-xl);
    }

    .tag-cloud__item {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: 2px solid;
      border-radius: 100px;
      transition: all 0.3s ease;
    }

    .tag-cloud__item--pink {
      color: var(--dopamine-pink);
      border-color: var(--dopamine-pink);
    }

    .tag-cloud__item--pink:hover {
      background: var(--dopamine-pink);
      color: var(--maxi-white);
      transform: translateY(-2px);
    }

    .tag-cloud__item--green {
      color: var(--dopamine-green);
      border-color: var(--dopamine-green);
    }

    .tag-cloud__item--green:hover {
      background: var(--dopamine-green);
      color: var(--maxi-black);
      transform: translateY(-2px);
    }

    .tag-cloud__item--yellow {
      color: var(--dopamine-yellow);
      border-color: var(--dopamine-yellow);
    }

    .tag-cloud__item--yellow:hover {
      background: var(--dopamine-yellow);
      color: var(--maxi-black);
      transform: translateY(-2px);
    }

    .tag-cloud__item--blue {
      color: var(--dopamine-blue);
      border-color: var(--dopamine-blue);
    }

    .tag-cloud__item--blue:hover {
      background: var(--dopamine-blue);
      color: var(--maxi-black);
      transform: translateY(-2px);
    }

    /* === 按钮 === */
    .maxi-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-md) var(--space-lg);
      font-family: var(--font-display);
      font-size: 1.25rem;
      letter-spacing: 0.1em;
      color: var(--maxi-white);
      background: var(--dopamine-pink);
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .maxi-button::before {
      content: '';
      position: absolute;
      inset: 4px;
      border: 2px solid var(--maxi-white);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .maxi-button:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow:
        0 10px 40px rgba(255, 45, 146, 0.4),
        0 0 0 4px rgba(255, 45, 146, 0.2);
    }

    .maxi-button:hover::before {
      opacity: 1;
    }

    /* === 卡片网格 === */
    .card-section {
      padding: var(--space-2xl) var(--space-xl);
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-title {
      font-family: var(--font-display);
      font-size: clamp(3rem, 8vw, 6rem);
      text-transform: uppercase;
      margin-bottom: var(--space-xl);
      color: transparent;
      -webkit-text-stroke: 2px var(--maxi-white);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
    }

    .maxi-card {
      position: relative;
      background: var(--maxi-gray);
      border: 2px solid rgba(255, 255, 255, 0.1);
      padding: var(--space-lg);
      transform: rotate(-1deg);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      overflow: hidden;
    }

    .maxi-card::before {
      content: '';
      position: absolute;
      inset: 8px -8px -8px 8px;
      background: var(--dopamine-pink);
      z-index: -1;
      transition: all 0.4s ease;
    }

    .maxi-card:nth-child(2)::before {
      background: var(--dopamine-green);
    }

    .maxi-card:nth-child(3)::before {
      background: var(--dopamine-yellow);
    }

    .maxi-card:hover {
      transform: rotate(0deg) translateY(-8px);
    }

    .maxi-card:hover::before {
      inset: 12px -12px -12px 12px;
    }

    .maxi-card__number {
      font-family: var(--font-display);
      font-size: 4rem;
      line-height: 1;
      background: var(--text-gradient-hot);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: var(--space-md);
    }

    .maxi-card__title {
      font-family: var(--font-display);
      font-size: 1.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: var(--space-sm);
    }

    .maxi-card__desc {
      color: rgba(250, 250, 250, 0.7);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* === 重叠文字效果 === */
    .overlapping-section {
      padding: var(--space-2xl) var(--space-xl);
      text-align: center;
    }

    .overlapping-text {
      position: relative;
      display: inline-block;
      font-family: var(--font-display);
      font-size: clamp(4rem, 12vw, 10rem);
      line-height: 0.9;
      text-transform: uppercase;
    }

    .overlapping-text::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      color: var(--dopamine-pink);
      z-index: -2;
      transform: translate(-12px, -6px);
    }

    .overlapping-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      color: var(--dopamine-blue);
      z-index: -1;
      transform: translate(12px, 6px);
    }

    .overlapping-text span {
      position: relative;
      z-index: 0;
      color: var(--maxi-white);
    }

    /* === 动画 === */
    @keyframes text-bounce-in {
      0% {
        opacity: 0;
        transform: scale(0.3) rotate(-5deg);
      }
      50% {
        transform: scale(1.1) rotate(2deg);
      }
      70% {
        transform: scale(0.95) rotate(-1deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .animate-in {
      animation: text-bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .delay-1 { animation-delay: 0.1s; opacity: 0; }
    .delay-2 { animation-delay: 0.2s; opacity: 0; }
    .delay-3 { animation-delay: 0.3s; opacity: 0; }
    .delay-4 { animation-delay: 0.4s; opacity: 0; }

    /* === Footer === */
    .footer {
      padding: var(--space-xl);
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: var(--space-2xl);
    }

    .footer-text {
      font-family: var(--font-display);
      font-size: 1.5rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(250, 250, 250, 0.5);
    }
  </style>
</head>
<body>
  <div class="maxi-container">
    <!-- 导航 -->
    <nav class="nav">
      <div class="nav-logo">MAXI</div>
      <ul class="nav-links">
        <li><a href="#">作品</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">联系</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <h1 class="hero-title animate-in">
        <span class="hero-title__line hero-title__line--gradient">BREAK</span>
        <span class="hero-title__line hero-title__line--outline">THE</span>
        <span class="hero-title__line hero-title__line--gradient">GRID</span>
      </h1>
      <p class="hero-subtitle">
        极繁主义遇上实验性字体，创造令人过目不忘的视觉冲击。大胆的色彩、层叠的布局、打破规则的排版——让设计成为主角。
      </p>
      <div class="tag-cloud">
        <span class="tag-cloud__item tag-cloud__item--pink">Maximalism</span>
        <span class="tag-cloud__item tag-cloud__item--green">Typography</span>
        <span class="tag-cloud__item tag-cloud__item--yellow">Dopamine</span>
        <span class="tag-cloud__item tag-cloud__item--blue">Experimental</span>
        <span class="tag-cloud__item tag-cloud__item--pink">Bold</span>
        <span class="tag-cloud__item tag-cloud__item--green">2026</span>
      </div>
      <a href="#" class="maxi-button">探索更多</a>
    </section>

    <!-- 卡片区域 -->
    <section class="card-section">
      <h2 class="section-title">What We Do</h2>
      <div class="card-grid">
        <div class="maxi-card animate-in delay-1">
          <div class="maxi-card__number">01</div>
          <h3 class="maxi-card__title">视觉冲击</h3>
          <p class="maxi-card__desc">用大胆的色彩和超饱和的视觉元素，创造令人过目不忘的第一印象。</p>
        </div>
        <div class="maxi-card animate-in delay-2">
          <div class="maxi-card__number">02</div>
          <h3 class="maxi-card__title">字体实验</h3>
          <p class="maxi-card__desc">打破传统排版规则，让文字成为视觉主角，传递品牌个性。</p>
        </div>
        <div class="maxi-card animate-in delay-3">
          <div class="maxi-card__number">03</div>
          <h3 class="maxi-card__title">层叠美学</h3>
          <p class="maxi-card__desc">用丰富的层次和密度，创造视觉深度和探索乐趣。</p>
        </div>
      </div>
    </section>

    <!-- 重叠文字效果 -->
    <section class="overlapping-section">
      <h2 class="overlapping-text" data-text="BOLD">
        <span>BOLD</span>
      </h2>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">More is More / 2026</p>
    </footer>
  </div>
</body>
</html>
```

---

### v2.0 增强版 HTML 示例

> 敼整合所有 v2.0 新效果：背景层、高级字体、材质滤镜、布局效果、动画

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>极繁实验 v2.0 - 数字奢华</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400;700&family=DM+Serif+Display&family=Noto+Serif+SC:wght@400;700;900&family=Playfair+Display:wght@400;700;900&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;700&family=VT323&display=swap" rel="stylesheet">
  <style>
    :root {
      --dopamine-pink: #FF2D92;
      --dopamine-orange: #FF6B35;
      --dopamine-yellow: #FFDE59;
      --dopamine-green: #00F5A0;
      --dopamine-blue: #00D4FF;
      --dopamine-purple: #9B5DE5;
      --maxi-black: #0A0A0A;
      --maxi-white: #FAFAFA;
      --maxi-gray: #2D2D2D;
      --font-display: "Bebas Neue", system-ui, sans-serif;
      --font-serif: "DM Serif Display", "Playfair Display", serif;
      --font-script: "Caveat", cursive;
      --font-pixel: "VT323", "Press Start 2P", monospace;
      --font-body: "Space Grotesk", system-ui, sans-serif;
      --font-serif-cn: "Noto Serif SC", serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-body);
      background: var(--maxi-black);
      color: var(--maxi-white);
      overflow-x: hidden;
    }

    /* === v2.0 背景层系统 === */

    /* 流体光斑 */
    .fluid-orbs {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .fluid-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      animation: float-orb 20s ease-in-out infinite;
    }

    .fluid-orb--pink {
      width: 50vw;
      height: 50vw;
      background: var(--dopamine-pink);
      top: -15%;
      right: -10%;
      opacity: 0.3;
    }

    .fluid-orb--cyan {
      width: 40vw;
      height: 40vw;
      background: var(--dopamine-blue);
      bottom: -20%;
      left: -10%;
      opacity: 0.25;
      animation-delay: -7s;
    }

    .fluid-orb--yellow {
      width: 30vw;
      height: 30vw;
      background: var(--dopamine-yellow);
      top: 30%;
      left: 25%;
      opacity: 0.2;
      animation-delay: -14s;
    }

    @keyframes float-orb {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(5%, 10%) scale(1.1); }
      50% { transform: translate(-5%, 5%) scale(0.95); }
      75% { transform: translate(10%, -5%) scale(1.05); }
    }

    /* 胶片颗粒 */
    .film-grain {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.06;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      animation: grain-shift 0.5s steps(10) infinite;
    }

    @keyframes grain-shift {
      0%, 100% { transform: translate(0, 0); }
      10% { transform: translate(-5%, -10%); }
      20% { transform: translate(-15%, 5%); }
      30% { transform: translate(7%, -25%); }
      40% { transform: translate(-5%, 25%); }
      50% { transform: translate(-15%, 10%); }
      60% { transform: translate(15%, 0%); }
      70% { transform: translate(0%, 15%); }
      80% { transform: translate(3%, 35%); }
      90% { transform: translate(-10%, 10%); }
    }

    /* 点阵网格 */
    .dot-grid {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      opacity: 0.03;
      background-image: radial-gradient(circle, var(--maxi-white) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* === 主内容区 === */
    .content {
      position: relative;
      z-index: 2;
    }

    /* === v2.0 Glitch 标题 === */
    .glitch-hero {
      padding: 10vh 5vw;
      text-align: center;
    }

    .glitch-title {
      font-family: var(--font-display);
      font-size: clamp(6rem, 20vw, 16rem);
      font-weight: 900;
      text-transform: uppercase;
      position: relative;
      color: var(--maxi-white);
      letter-spacing: -0.02em;
      line-height: 0.85;
    }

    .glitch-title::before,
    .glitch-title::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      text-transform: inherit;
      letter-spacing: inherit;
    }

    .glitch-title::before {
      color: var(--dopamine-pink);
      animation: glitch-1 2s infinite linear alternate-reverse;
      clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    }

    .glitch-title::after {
      color: var(--dopamine-blue);
      animation: glitch-2 3s infinite linear alternate-reverse;
      clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    }

    @keyframes glitch-1 {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(-3px, 3px); }
      40% { transform: translate(-3px, -3px); }
      60% { transform: translate(3px, 3px); }
      80% { transform: translate(3px, -3px); }
    }

    @keyframes glitch-2 {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(3px, -3px); }
      40% { transform: translate(3px, 3px); }
      60% { transform: translate(-3px, -3px); }
      80% { transform: translate(-3px, 3px); }
    }

    /* === v2.0 液态玻璃卡片 === */
    .glass-section {
      padding: 5vh 5vw;
      max-width: 1400px;
      margin: 0 auto;
    }

    .liquid-glass-card {
      position: relative;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 24px;
      padding: 3rem;
      margin-bottom: 2rem;
      overflow: hidden;
    }

    .liquid-glass-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      opacity: 0.03;
      mix-blend-mode: overlay;
      pointer-events: none;
    }

    .liquid-glass-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
      border-radius: 24px 24px 0 0;
      pointer-events: none;
    }

    .liquid-glass-card > * {
      position: relative;
      z-index: 1;
    }

    /* === v2.0 字体混搭 === */
    .mixed-type-demo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .mixed-type-demo__serif {
      font-family: var(--font-serif);
      font-size: clamp(4rem, 12vw, 10rem);
      font-weight: 900;
      color: var(--maxi-white);
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }

    .mixed-type-demo__pixel {
      font-family: var(--font-pixel);
      font-size: clamp(1rem, 3vw, 2rem);
      color: var(--dopamine-green);
      letter-spacing: 0.5em;
      text-transform: uppercase;
    }

    /* === v2.0 铬金属文字 === */
    .chrome-text {
      font-family: var(--font-display);
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      text-transform: uppercase;
      background: linear-gradient(180deg, #e8e8e8, #ffffff 20%, #b8b8b8 40%, #ffd700 60%, #ff8c00 80%, #e8e8e8 100%);
      background-size: 100% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: chrome-shine 3s ease-in-out infinite;
      filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.5));
    }

    @keyframes chrome-shine {
      0%, 100% { background-position: 0% 0%; }
      50% { background-position: 0% 100%; }
    }

    /* === v2.0 重叠卡片组 === */
    .overlap-cards-section {
      padding: 10vh 5vw;
      max-width: 1200px;
      margin: 0 auto;
    }

    .overlap-cards {
      position: relative;
      min-height: 400px;
    }

    .overlap-card {
      position: absolute;
      width: 300px;
      padding: 2rem;
      background: var(--maxi-gray);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px 48px 4px 48px;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .overlap-card:nth-child(1) {
      top: 0;
      left: 0;
      transform: rotate(-3deg);
      z-index: 3;
    }

    .overlap-card:nth-child(2) {
      top: 30px;
      left: 80px;
      transform: rotate(2deg);
      z-index: 2;
      border-color: var(--dopamine-pink);
    }

    .overlap-card:nth-child(3) {
      top: 60px;
      left: 160px;
      transform: rotate(-1deg);
      z-index: 1;
      border-color: var(--dopamine-blue);
    }

    .overlap-card:hover {
      z-index: 10;
      transform: rotate(0deg) translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .overlap-card__number {
      font-family: var(--font-display);
      font-size: 4rem;
      background: linear-gradient(90deg, var(--dopamine-pink), var(--dopamine-orange), var(--dopamine-yellow));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .overlap-card__title {
      font-family: var(--font-display);
      font-size: 1.5rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin: 1rem 0 0.5rem;
    }

    .overlap-card__desc {
      color: rgba(250, 250, 250, 0.7);
      font-size: 0.9rem;
    }

    /* === v2.0 Y2K 装饰 === */
    .y2k-decor {
      position: fixed;
      z-index: 100;
    }

    .y2k-butterfly {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--dopamine-pink), var(--dopamine-purple));
      clip-path: polygon(50% 50%, 0% 0%, 25% 50%, 0% 100%, 50% 75%, 100% 100%, 75% 50%, 100% 0%);
      animation: flutter 2s ease-in-out infinite;
    }

    @keyframes flutter {
      0%, 100% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(10deg) scale(1.1); }
    }

    .chinese-stamp {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 2px solid var(--dopamine-orange);
      border-radius: 6px;
      font-family: var(--font-serif-cn);
      font-size: 12px;
      font-weight: 900;
      color: var(--dopamine-orange);
      transform: rotate(-8deg);
    }

    /* === v2.0 逐字弹跳进入 === */
    .stagger-title {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.1em;
    }

    .stagger-title span {
      display: inline-block;
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 4rem);
      text-transform: uppercase;
      opacity: 0;
      transform: translateY(80px) scale(0);
      animation: stagger-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .stagger-title span:nth-child(1) { animation-delay: 0.0s; }
    .stagger-title span:nth-child(2) { animation-delay: 0.05s; }
    .stagger-title span:nth-child(3) { animation-delay: 0.1s; }
    .stagger-title span:nth-child(4) { animation-delay: 0.15s; }
    .stagger-title span:nth-child(5) { animation-delay: 0.2s; }
    .stagger-title span:nth-child(6) { animation-delay: 0.25s; }
    .stagger-title span:nth-child(7) { animation-delay: 0.3s; }
    .stagger-title span:nth-child(8) { animation-delay: 0.35s; }

    @keyframes stagger-bounce {
      0% {
        opacity: 0;
        transform: translateY(80px) scale(0) rotate(-10deg);
      }
      60% {
        opacity: 1;
        transform: translateY(-15px) scale(1.1) rotate(2deg);
      }
      80% {
        transform: translateY(5px) scale(0.95) rotate(-1deg);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1) rotate(0deg);
      }
    }

    /* === Footer === */
    .footer {
      padding: 4rem;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 10vh;
    }

    .footer-text {
      font-family: var(--font-display);
      font-size: 1.5rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(250, 250, 250, 0.5);
    }

    /* === 无障碍：减弱动效 === */
    @media (prefers-reduced-motion: reduce) {
      .fluid-orb,
      .film-grain,
      .glitch-title::before,
      .glitch-title::after,
      .chrome-text,
      .y2k-butterfly,
      .stagger-title span {
        animation: none;
      }
      .stagger-title span {
        opacity: 1;
        transform: none;
      }
    }
  </style>
</head>
<body>
  <!-- v2.0 背景层 -->
  <div class="fluid-orbs">
    <div class="fluid-orb fluid-orb--pink"></div>
    <div class="fluid-orb fluid-orb--cyan"></div>
    <div class="fluid-orb fluid-orb--yellow"></div>
  </div>
  <div class="dot-grid"></div>
  <div class="film-grain"></div>

  <!-- Y2K 装饰元素 -->
  <div class="y2k-decor y2k-butterfly" style="top: 15%; right: 10%;"></div>
  <div class="y2k-decor y2k-butterfly" style="bottom: 20%; left: 5%; animation-delay: -1s;"></div>

  <!-- 主内容 -->
  <div class="content">
    <!-- Glitch 标题区 -->
    <section class="glitch-hero">
      <h1 class="glitch-title" data-text="MAXIMALISM">MAXIMALISM</h1>
      <p style="font-family: var(--font-script); font-size: 2rem; color: var(--dopamine-orange); transform: rotate(-3deg); margin-top: 1rem;">
        more is more · 2026
      </p>
    </section>

    <!-- 液态玻璃区 -->
    <section class="glass-section">
      <div class="liquid-glass-card">
        <div class="mixed-type-demo">
          <span class="mixed-type-demo__serif">Digital</span>
          <span class="mixed-type-demo__pixel">LUXURY</span>
        </div>
        <p style="margin-top: 2rem; font-size: 1.1rem; line-height: 1.6; color: rgba(250, 250, 250, 0.8);">
          极繁主义 2.0 —— <span style="font-family: var(--font-script); color: var(--dopamine-yellow);">打破边界</span>，
          用<span style="font-family: var(--font-pixel); color: var(--dopamine-green);">层叠</span>、
          <span style="font-family: var(--font-serif); color: var(--dopamine-pink);">混搭</span>、
          <span style="text-decoration: underline; text-decoration-color: var(--dopamine-blue);">动效</span>
          创造数字奢华体验。
        </p>
      </div>
    </section>

    <!-- 铬金属标题 -->
    <section style="padding: 5vh 5vw; text-align: center;">
      <h2 class="chrome-text">CHROME</h2>
      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
        <span class="chinese-stamp">酷</span>
        <span class="chinese-stamp">炫</span>
        <span class="chinese-stamp">潮</span>
      </div>
    </section>

    <!-- 重叠卡片组 -->
    <section class="overlap-cards-section">
      <h2 style="font-family: var(--font-display); font-size: clamp(2rem, 5vw, 4rem); text-transform: uppercase; margin-bottom: 3rem; color: transparent; -webkit-text-stroke: 2px var(--maxi-white);">Features</h2>
      <div class="overlap-cards">
        <div class="overlap-card">
          <div class="overlap-card__number">01</div>
          <h3 class="overlap-card__title">液态玻璃</h3>
          <p class="overlap-card__desc">背景模糊 + 噪点 + 高光折射</p>
        </div>
        <div class="overlap-card">
          <div class="overlap-card__number">02</div>
          <h3 class="overlap-card__title">故障艺术</h3>
          <p class="overlap-card__desc">RGB 分离 + clip-path 动画</p>
        </div>
        <div class="overlap-card">
          <div class="overlap-card__number">03</div>
          <h3 class="overlap-card__title">字体混搭</h3>
          <p class="overlap-card__desc">Serif + Sans + Script + Pixel</p>
        </div>
      </div>
    </section>

    <!-- 逐字弹跳 -->
    <section style="padding: 10vh 5vw; text-align: center;">
      <h2 class="stagger-title">
        <span>B</span><span>O</span><span>U</span><span>N</span><span>C</span><span>E</span><span>!</span>
      </h2>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">Maximalism v2.0 · More is More</p>
    </footer>
  </div>

  <script>
    // 鼠标跟随光晕（可选增强）
    document.addEventListener('mousemove', (e) => {
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    // 滚动触发动画
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  </script>
</body>
</html>
```

---

## 代表案例

### 知名应用

1. **Spotify Wrapped** - 年度总结页面，大胆配色 + 实验性排版
2. **Figma** - 品牌页面使用层叠设计和大胆字体
3. **Apple Music** - 播放界面动态字体效果
4. **Vogue** - 时尚杂志网站，编辑式排版 + 大胆视觉
5. **Awwwards** - 获奖网站展示，前沿实验性设计
6. **Cycling '74** - Max/MSP官网，技术感 + 实验性排版

### 设计参考

- [Dribbble: Maximalism](https://dribbble.com/search/maximalism)
- [Behance: Experimental Typography](https://www.behance.net/search/experimental-typography)
- [Awwwards: Digital Design](https://www.awwwards.com/)
- [Typography.com](https://www.typography.com/)
- [Fonts In Use](https://fontsinuse.com/)

---

## 参考来源

### 极繁主义设计 (Maximalism)

- [Maximalism in Web Design - Design Shack](https://designshack.net/articles/trends/maximalism-in-web-design/)
- [The Rise of Maximalism - 99designs](https://99designs.com/blog/trends/maximalism-design/)
- [Maximalism Design Trend - Envato](https://envato.com/blog/maximalism-design-trend/)
- [Dopamine Decor - architecturaldigest](https://www.architecturaldigest.com/story/dopamine-decor-trend)

### 实验性字体 (Experimental Typography)

- [Experimental Typography - Awwwards](https://www.awwwards.com/experimental-typography/)
- [Breaking the Grid - Smashing Magazine](https://www.smashingmagazine.com/)
- [Typography Trends 2025 - Creative Bloq](https://www.creativebloq.com/typography/)
- [Variable Fonts - Google Fonts](https://fonts.google.com/variable-fonts)
- [CSS Typography Effects - CSS-Tricks](https://css-tricks.com/snippets/css/)

### 字体资源

- [Google Fonts](https://fonts.google.com/)
- [Fontshare](https://www.fontshare.com/)
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [Syne](https://fonts.google.com/specimen/Syne)

### 色彩灵感

- [Color Hunt - Palettes](https://colorhunt.co/)
- [Coolors - Generator](https://coolors.co/)
- [Happy Hues](https://www.happyhues.co/)
- [Dopamine Colors - Pinterest](https://pinterest.com/search/dopamine-colors)

### 动画与交互

- [Cubic-bezier Generator](https://cubic-bezier.com/)
- [Animate.css](https://animate.style/)
- [Hover.css](https://ianlunn.github.io/Hover/)
- [Motion One](https://motion.dev/)
