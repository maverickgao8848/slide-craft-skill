# 组合2：80年代未来 (Retro Futurism + Kinetic Typography + Grainy Blur)

## 设计理念

这个组合创造了一种完整的**"80年代未来"氛围**——过去人眼中的未来，怀旧与创新的完美交汇。霓虹灯光在胶片颗粒中闪烁，动态文字讲述着科幻故事。

**三层协同机制**：
- **Retro Futurism (形态层 - A类)**：定义整体视觉语言，金属质感、霓虹色彩、科幻美学
- **Kinetic Typography (表达层 - B类)**：文字动画化，增强叙事性，让标题成为动态焦点
- **Grainy Blur (质感层 - C类)**：胶片颗粒 + 柔和光晕，为数字设计注入温暖的电影质感

**为什么这个组合有效**：
1. Retro Futurism 提供了完整的视觉框架，但静态呈现容易显得"博物馆化"
2. Kinetic Typography 注入生命力，让霓虹灯真正"亮起来"，符合80年代动态广告的回忆
3. Grainy Blur 模拟 CRT 显示器和胶片电影的质感，消除数字设计的"过于干净"感
4. 三者结合创造沉浸式体验：不是"看"80年代未来，而是"进入"那个时代
5. 整体传达"浪漫技术主义、太空时代梦想、怀旧科幻"的情感基调

---

## 角色定义

| 属性 | 描述 |
|------|------|
| **核心气质** | 怀旧科幻、浪漫技术主义、太空时代、霓虹梦境 |
| **情感基调** | 乐观未来主义、电子浪漫、复古情怀、冒险精神 |
| **适用场景** | 科技产品发布会、游戏界面、音乐/娱乐产业、创新实验室品牌、科幻主题活动 |
| **品牌人格** | 像一位80年代科幻电影中的主角，怀揣对未来的美好憧憬，驾驶着发光的跑车驶向霓虹都市 |
| **用户感受** | "这让我想起童年看过的科幻片"、"充满未来感又很温暖"、"像穿越时空" |

---

## 风格约束

### 必须遵循

1. **色彩**：深色背景（深空蓝/纯黑）+ 霓虹强调色（电光粉、青色、紫色）
2. **字体**：使用科幻感几何字体（Orbitron, Exo 2），避免衬线体
3. **动效**：关键文字必须有动画（闪烁、脉动、扫描线等）
4. **质感**：添加胶片颗粒纹理，opacity 0.03-0.08
5. **光效**：霓虹发光效果使用多层 text-shadow 叠加
6. **构图**：动态斜切、放射状、透视网格
7. **一致性**：保持80年代未来主义的视觉语言统一

### 禁止使用

1. 纯白或浅色背景（破坏霓虹效果）
2. 衬线字体和手写字体
3. 扁平无光效的设计元素
4. 高饱和度但无发光效果的配色
5. 过于现代的极简主义
6. 干净无纹理的渐变
7. 静态无动画的标题文字

---

## 核心要素

### 融合色彩系统 (CSS变量)

```css
:root {
  /* === 霓虹色盘 (Layer A - Retro Futurism) === */
  --neon-pink: #FF2D92;           /* 电光粉 - 主强调 */
  --neon-cyan: #00F5FF;           /* 电光青 - 科技感 */
  --neon-purple: #BC13FE;         /* 电光紫 - 神秘感 */
  --neon-green: #0FA;             /* 荧光绿 - 终端感 */
  --neon-orange: #FF6B35;         /* 火焰橙 - 暖色点缀 */
  --neon-yellow: #FFDE59;         /* 柠檬黄 - 高亮 */

  /* === 金属色 (Chrome/Metallic) === */
  --chrome-silver: #C0C0C0;
  --chrome-light: #E8E8E8;
  --chrome-dark: #808080;
  --metallic-gradient: linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #808080 100%);

  /* === 深空背景色 === */
  --space-black: #0A0A0F;
  --deep-blue: #0D1B2A;
  --midnight: #1B263B;
  --cosmic-purple: #1A0A2E;

  /* === 渐变组合 (Grainy Blur 柔和渐变) === */
  --gradient-sunset: linear-gradient(135deg, #FF2D92 0%, #FF6B35 50%, #FFDE59 100%);
  --gradient-aurora: linear-gradient(135deg, #00F5FF 0%, #BC13FE 50%, #FF2D92 100%);
  --gradient-cosmic: linear-gradient(135deg, #0D1B2A 0%, #1A0A2E 50%, #BC13FE 100%);
  --gradient-neon-dream: linear-gradient(180deg, #0A0A0F 0%, #1A0A2E 50%, #0D1B2A 100%);

  /* === 发光效果色 (用于 text-shadow/box-shadow) === */
  --glow-pink: 0 0 10px #FF2D92, 0 0 20px #FF2D92, 0 0 40px #FF2D92;
  --glow-cyan: 0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 40px #00F5FF;
  --glow-purple: 0 0 10px #BC13FE, 0 0 20px #BC13FE, 0 0 40px #BC13FE;
  --glow-green: 0 0 10px #0FA, 0 0 20px #0FA, 0 0 40px #0FA;

  /* === 功能色 === */
  --text-primary: #FAFAFA;
  --text-secondary: rgba(250, 250, 250, 0.7);
  --text-muted: rgba(250, 250, 250, 0.5);
  --border-glow: rgba(255, 45, 146, 0.3);

  /* === 间距系统 === */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* === 动画时长 === */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.6s;
  --duration-glow: 1.5s;
}
```

### 字体方案

```css
:root {
  /* 科幻展示字体 - 视觉主角 */
  --font-display: "Orbitron", "Exo 2", "Audiowide", system-ui, sans-serif;

  /* 几何无衬线 - 现代感 */
  --font-geometric: "Exo 2", "Rajdhani", "Orbitron", system-ui, sans-serif;

  /* 正文字体 - 清晰可读 */
  --font-body: "Exo 2", "Rajdhani", "Inter", system-ui, sans-serif;

  /* 等宽字体 - 终端/代码感 */
  --font-mono: "JetBrains Mono", "Fira Code", "Share Tech Mono", monospace;

  /* 字重 */
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;
  --weight-black: 900;

  /* 科幻字号 */
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

/* 字体引入 */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;700&family=Rajdhani:wght@400;500;700&family=Share+Tech+Mono&display=swap');

/* 字体特性 */
body {
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  line-height: 1.5;
  letter-spacing: 0.02em;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  line-height: 1.1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

### 布局模式

```css
/* 复古未来主义主布局 */
.retro-future-layout {
  position: relative;
  min-height: 100vh;
  background: var(--space-black);
  overflow-x: hidden;
}

/* 透视网格背景 */
.perspective-grid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background:
    linear-gradient(transparent 0%, var(--space-black) 100%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 80px,
      rgba(0, 245, 255, 0.1) 80px,
      rgba(0, 245, 255, 0.1) 82px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 80px,
      rgba(0, 245, 255, 0.1) 80px,
      rgba(0, 245, 255, 0.1) 82px
    );
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  opacity: 0.5;
}

/* 动态斜切布局 */
.diagonal-section {
  position: relative;
  padding: var(--space-2xl) var(--space-xl);
  transform: skewY(-3deg);
}

.diagonal-section > * {
  transform: skewY(3deg); /* 反向修正内容 */
}

/* 放射状构图 */
.radial-composition {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

/* 日落构图 */
.sunset-layout {
  position: relative;
  background: linear-gradient(
    180deg,
    var(--space-black) 0%,
    var(--cosmic-purple) 40%,
    var(--neon-pink) 60%,
    var(--neon-orange) 80%,
    var(--neon-yellow) 100%
  );
  min-height: 100vh;
}

/* 扫描线叠加层 */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  z-index: 100;
}
```

---

## CSS 效果库

### 1. 霓虹发光文字效果 (Layer A + B 融合)

```css
/* 基础霓虹文字 */
.neon-text {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  color: #fff;
  text-transform: uppercase;
  text-shadow:
    /* 内层白光 */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    /* 外层霓虹 */
    0 0 42px var(--neon-pink),
    0 0 82px var(--neon-pink),
    0 0 92px var(--neon-pink),
    0 0 102px var(--neon-pink),
    0 0 151px var(--neon-pink);
}

/* 青色霓虹变体 */
.neon-text--cyan {
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px var(--neon-cyan),
    0 0 82px var(--neon-cyan),
    0 0 92px var(--neon-cyan),
    0 0 102px var(--neon-cyan),
    0 0 151px var(--neon-cyan);
}

/* 紫色霓虹变体 */
.neon-text--purple {
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px var(--neon-purple),
    0 0 82px var(--neon-purple),
    0 0 92px var(--neon-purple),
    0 0 102px var(--neon-purple),
    0 0 151px var(--neon-purple);
}
```

### 2. 动态字体动画 (Layer B - Kinetic Typography)

```css
/* 闪烁效果 - 模拟霓虹灯老化 */
@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px var(--neon-pink),
      0 0 80px var(--neon-pink),
      0 0 90px var(--neon-pink),
      0 0 100px var(--neon-pink),
      0 0 150px var(--neon-pink);
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}

.neon-flicker {
  animation: flicker 1.5s infinite alternate;
}

/* 脉动效果 - 呼吸式发光 */
@keyframes pulsate {
  0% {
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px var(--neon-cyan),
      0 0 45px var(--neon-cyan),
      0 0 55px var(--neon-cyan),
      0 0 70px var(--neon-cyan),
      0 0 80px var(--neon-cyan);
  }
  100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px var(--neon-cyan),
      0 0 80px var(--neon-cyan),
      0 0 90px var(--neon-cyan),
      0 0 100px var(--neon-cyan),
      0 0 150px var(--neon-cyan);
  }
}

.neon-pulsate {
  animation: pulsate 2.5s ease-in-out infinite alternate;
}

/* 扫描线动画 - CRT 显示器效果 */
@keyframes scanline-move {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.scanline-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: scanline-move 8s linear infinite;
  pointer-events: none;
}

/* 故障效果 - Glitch */
@keyframes glitch {
  0% {
    transform: translate(0);
    text-shadow:
      -2px 0 var(--neon-cyan),
      2px 0 var(--neon-pink);
  }
  25% {
    transform: translate(-2px, 2px);
    text-shadow:
      -4px 0 var(--neon-cyan),
      4px 0 var(--neon-pink);
  }
  50% {
    transform: translate(2px, -2px);
    text-shadow:
      2px 0 var(--neon-cyan),
      -2px 0 var(--neon-pink);
  }
  75% {
    transform: translate(-1px, 1px);
    text-shadow:
      -3px 0 var(--neon-cyan),
      3px 0 var(--neon-pink);
  }
  100% {
    transform: translate(0);
    text-shadow:
      -2px 0 var(--neon-cyan),
      2px 0 var(--neon-pink);
  }
}

.glitch-text {
  animation: glitch 0.3s infinite;
}

.glitch-text:hover {
  animation: glitch 0.1s infinite;
}

/* 打字机效果 */
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--neon-green); }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--neon-green);
  animation:
    typewriter 3s steps(40) forwards,
    blink-caret 0.75s step-end infinite;
  font-family: var(--font-mono);
}
```

### 3. 胶片颗粒质感 (Layer C - Grainy Blur)

```css
/* 胶片颗粒叠加 */
.grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* CSS 纯代码颗粒效果 */
.grain-overlay--css {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.04;
  background: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* 柔和发光边缘 - Glow Blur */
.glow-blur-bg {
  position: relative;
  overflow: hidden;
}

.glow-blur-bg::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    rgba(188, 19, 254, 0.15) 0%,
    rgba(255, 45, 146, 0.1) 30%,
    transparent 70%
  );
  filter: blur(60px);
  animation: glow-drift 10s ease-in-out infinite alternate;
}

@keyframes glow-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(10%, 10%) scale(1.1);
  }
}

/* 柔和渐变背景 + 颗粒 */
.grainy-gradient-bg {
  position: relative;
  background: var(--gradient-cosmic);
}

.grainy-gradient-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.08;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* 镜头光晕效果 */
.lens-flare {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(0, 245, 255, 0.2) 20%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  filter: blur(20px);
}
```

### 4. 三层融合组件 (A + B + C)

```css
/* 融合组件：复古未来 + 动态文字 + 胶片质感 */
.retro-future-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--space-black);
  overflow: hidden;
}

/* 透视网格 (Layer A) */
.retro-future-hero::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background:
    linear-gradient(transparent 0%, var(--space-black) 100%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 100px,
      rgba(0, 245, 255, 0.15) 100px,
      rgba(0, 245, 255, 0.15) 102px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 100px,
      rgba(0, 245, 255, 0.15) 100px,
      rgba(0, 245, 255, 0.15) 102px
    );
  transform: perspective(400px) rotateX(60deg);
  transform-origin: bottom;
  opacity: 0.4;
}

/* 光晕背景 (Layer C) */
.retro-future-hero::after {
  content: '';
  position: absolute;
  top: 20%;
  right: 10%;
  width: 60%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(188, 19, 254, 0.2) 0%,
    rgba(255, 45, 146, 0.15) 30%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
}

/* 主标题 (Layer A + B) */
.retro-future-hero__title {
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  color: #fff;
  text-transform: uppercase;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px var(--neon-pink),
    0 0 82px var(--neon-pink),
    0 0 92px var(--neon-pink),
    0 0 102px var(--neon-pink),
    0 0 151px var(--neon-pink);
  animation: flicker 3s infinite alternate;
  letter-spacing: 0.1em;
}

/* 副标题 */
.retro-future-hero__subtitle {
  position: relative;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
  margin-top: var(--space-lg);
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

/* 扫描线叠加 (Layer A) */
.scanline-overlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 10;
}

/* 胶片颗粒叠加 (Layer C) */
.grain-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

### 5. 霓虹按钮组件

```css
/* 霓虹按钮 - 基础 */
.neon-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--neon-pink);
  background: transparent;
  border: 2px solid var(--neon-pink);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow:
    0 0 5px var(--neon-pink),
    0 0 10px var(--neon-pink),
    inset 0 0 5px rgba(255, 45, 146, 0.2);
}

.neon-button:hover {
  color: var(--space-black);
  background: var(--neon-pink);
  box-shadow:
    0 0 10px var(--neon-pink),
    0 0 20px var(--neon-pink),
    0 0 40px var(--neon-pink),
    0 0 80px var(--neon-pink);
  transform: translateY(-2px);
}

/* 青色变体 */
.neon-button--cyan {
  color: var(--neon-cyan);
  border-color: var(--neon-cyan);
  box-shadow:
    0 0 5px var(--neon-cyan),
    0 0 10px var(--neon-cyan),
    inset 0 0 5px rgba(0, 245, 255, 0.2);
}

.neon-button--cyan:hover {
  color: var(--space-black);
  background: var(--neon-cyan);
  box-shadow:
    0 0 10px var(--neon-cyan),
    0 0 20px var(--neon-cyan),
    0 0 40px var(--neon-cyan),
    0 0 80px var(--neon-cyan);
}

/* 脉动按钮 */
.neon-button--pulse {
  animation: button-pulse 2s ease-in-out infinite;
}

@keyframes button-pulse {
  0%, 100% {
    box-shadow:
      0 0 5px var(--neon-pink),
      0 0 10px var(--neon-pink);
  }
  50% {
    box-shadow:
      0 0 10px var(--neon-pink),
      0 0 20px var(--neon-pink),
      0 0 30px var(--neon-pink);
  }
}
```

### 6. 霓虹卡片组件

```css
/* 霓虹边框卡片 */
.neon-card {
  position: relative;
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid rgba(0, 245, 255, 0.3);
  padding: var(--space-lg);
  transition: all 0.4s ease;
  overflow: hidden;
}

.neon-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 245, 255, 0.1) 0%,
    transparent 50%,
    rgba(188, 19, 254, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.neon-card:hover {
  border-color: var(--neon-cyan);
  box-shadow:
    0 0 10px rgba(0, 245, 255, 0.3),
    0 0 20px rgba(0, 245, 255, 0.2),
    inset 0 0 20px rgba(0, 245, 255, 0.05);
  transform: translateY(-5px);
}

.neon-card:hover::before {
  opacity: 1;
}

.neon-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
  margin-bottom: var(--space-md);
}

.neon-card__content {
  color: var(--text-secondary);
  font-family: var(--font-body);
  line-height: 1.6;
}
```

---

## 生图提示词库

### 核心融合提示词

```
retro futurism UI design, 80s sci-fi aesthetic, neon glow effects,
kinetic typography, animated text, film grain texture,
synthwave color palette, pink cyan purple neon lights,
chrome metallic accents, perspective grid background,
CRT scanlines, holographic elements, futuristic interface,
nostalgic technology, vintage future vision
```

### 场景化提示词

**科技产品发布会**：
```
retro futuristic tech presentation, neon holographic display,
80s sci-fi conference stage, purple pink cyan light beams,
geometric chrome structures, floating kinetic typography,
film grain overlay, synthwave atmosphere,
product launch event, futuristic announcement
```

**游戏界面**：
```
retro game UI, cyberpunk interface elements, neon HUD display,
scanline effects, pixel art influence, glowing buttons,
health bars with neon edges, futuristic gaming dashboard,
80s arcade aesthetic, synthwave color scheme
```

**音乐/娱乐**：
```
synthwave album cover design, retro futuristic music visual,
neon sunset with palm trees, grid landscape,
vaporwave aesthetic, pink purple gradient sky,
chromatic aberration, VHS glitch effects,
electronic music poster, 80s nostalgia
```

**创新实验室品牌**：
```
futuristic lab branding, retro futurism corporate identity,
neon light installations, chrome and glass materials,
holographic projections, innovation center design,
sci-fi research facility, tomorrow's technology today
```

### 背景图提示词

```
synthwave grid landscape, retro sunset gradient,
pink purple orange sky, neon horizon line,
perspective grid floor, 80s retro future cityscape,
chrome buildings, flying cars silhouettes,
film grain texture, dreamy atmospheric glow
```

### 装饰元素提示词

```
neon light tubes, glowing geometric shapes,
chrome spheres with reflections, holographic interfaces,
scanline texture overlay, CRT monitor frame,
retro computer terminal, pixel grid pattern,
laser light beams, prism rainbow effects
```

---

## 动画建议

### 入场动画

| 元素 | 动画效果 | 时长 | 延迟 |
|------|----------|------|------|
| 主标题 | 霓虹闪烁 + 打字机 | 2s | 0s |
| 副标题 | 淡入 + 发光增强 | 1s | 0.5s |
| 透视网格 | 从底部向上展开 | 1.5s | 0.2s |
| 霓虹按钮 | 脉动 + 发光 | 持续 | 1s |
| 扫描线 | 垂直移动 | 8s | 0s |
| 胶片颗粒 | 始终存在 | - | - |

### 强调动画

- **霓虹闪烁**：模拟老化霓虹灯的随机闪烁
- **故障效果**：色分离 + 位移的 glitch 动画
- **脉动发光**：呼吸式的光晕扩张收缩
- **扫描线移动**：CRT 显示器的扫描效果
- **透视网格波动**：网格的轻微起伏动画

### 过渡效果

- **页面切换**：故障闪烁 + 淡出
- **元素进入**：从模糊到清晰 + 霓虹亮起
- **悬停状态**：发光增强 + 轻微上浮
- **点击反馈**：霓虹闪烁确认

### CSS 动画代码合集

```css
/* 霓虹亮起动画 */
@keyframes neon-turn-on {
  0% {
    text-shadow: none;
    opacity: 0.5;
  }
  30% {
    text-shadow:
      0 0 5px #fff,
      0 0 10px var(--neon-pink);
    opacity: 0.8;
  }
  60% {
    text-shadow: none;
    opacity: 0.5;
  }
  100% {
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px var(--neon-pink),
      0 0 82px var(--neon-pink),
      0 0 92px var(--neon-pink),
      0 0 102px var(--neon-pink),
      0 0 151px var(--neon-pink);
    opacity: 1;
  }
}

.neon-turn-on {
  animation: neon-turn-on 0.8s ease-out forwards;
}

/* 网格展开 */
@keyframes grid-expand {
  0% {
    transform: perspective(400px) rotateX(60deg) scaleY(0);
    opacity: 0;
  }
  100% {
    transform: perspective(400px) rotateX(60deg) scaleY(1);
    opacity: 0.4;
  }
}

.perspective-grid {
  animation: grid-expand 1.5s ease-out forwards;
}

/* 漂浮动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

/* 色分离故障 */
@keyframes chromatic-glitch {
  0% {
    text-shadow: -2px 0 var(--neon-cyan), 2px 0 var(--neon-pink);
  }
  25% {
    text-shadow: -4px 0 var(--neon-cyan), 4px 0 var(--neon-pink);
  }
  50% {
    text-shadow: 2px 0 var(--neon-cyan), -2px 0 var(--neon-pink);
  }
  75% {
    text-shadow: -3px 0 var(--neon-cyan), 3px 0 var(--neon-pink);
  }
  100% {
    text-shadow: -2px 0 var(--neon-cyan), 2px 0 var(--neon-pink);
  }
}

.chromatic {
  animation: chromatic-glitch 0.2s infinite;
}

/* 交错延迟 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
```

---

## 完整 HTML 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>80年代未来 - Retro Futurism</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <style>
    /* === CSS 变量 === */
    :root {
      --neon-pink: #FF2D92;
      --neon-cyan: #00F5FF;
      --neon-purple: #BC13FE;
      --neon-green: #0FA;
      --space-black: #0A0A0F;
      --cosmic-purple: #1A0A2E;
      --font-display: "Orbitron", "Exo 2", system-ui, sans-serif;
      --font-body: "Exo 2", system-ui, sans-serif;
      --font-mono: "Share Tech Mono", monospace;
    }

    /* === 全局样式 === */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-body);
      color: #FAFAFA;
      background: var(--space-black);
      line-height: 1.5;
      overflow-x: hidden;
    }

    /* === 胶片颗粒叠加 === */
    .grain-layer {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1000;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* === Hero 区域 === */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: linear-gradient(180deg, var(--space-black) 0%, var(--cosmic-purple) 100%);
    }

    /* 透视网格 */
    .hero::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background:
        linear-gradient(transparent 0%, var(--space-black) 100%),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 100px,
          rgba(0, 245, 255, 0.15) 100px,
          rgba(0, 245, 255, 0.15) 102px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 100px,
          rgba(0, 245, 255, 0.15) 100px,
          rgba(0, 245, 255, 0.15) 102px
        );
      transform: perspective(400px) rotateX(60deg);
      transform-origin: bottom;
      opacity: 0.4;
      animation: grid-expand 1.5s ease-out forwards;
    }

    /* 光晕 */
    .hero::after {
      content: '';
      position: absolute;
      top: 20%;
      right: 10%;
      width: 50%;
      height: 50%;
      background: radial-gradient(
        ellipse at center,
        rgba(188, 19, 254, 0.2) 0%,
        rgba(255, 45, 146, 0.15) 30%,
        transparent 70%
      );
      filter: blur(80px);
      pointer-events: none;
    }

    @keyframes grid-expand {
      0% {
        transform: perspective(400px) rotateX(60deg) scaleY(0);
        opacity: 0;
      }
      100% {
        transform: perspective(400px) rotateX(60deg) scaleY(1);
        opacity: 0.4;
      }
    }

    /* 扫描线 */
    .scanlines {
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px
      );
      pointer-events: none;
      z-index: 10;
    }

    /* === 主标题 === */
    .hero-title {
      position: relative;
      z-index: 1;
      font-family: var(--font-display);
      font-size: clamp(4rem, 15vw, 12rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #fff;
      text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px var(--neon-pink),
        0 0 82px var(--neon-pink),
        0 0 92px var(--neon-pink),
        0 0 102px var(--neon-pink),
        0 0 151px var(--neon-pink);
      animation: flicker 3s infinite alternate;
    }

    @keyframes flicker {
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow:
          0 0 4px #fff,
          0 0 11px #fff,
          0 0 19px #fff,
          0 0 40px var(--neon-pink),
          0 0 80px var(--neon-pink),
          0 0 90px var(--neon-pink),
          0 0 100px var(--neon-pink),
          0 0 150px var(--neon-pink);
      }
      20%, 24%, 55% {
        text-shadow: none;
      }
    }

    /* === 副标题 === */
    .hero-subtitle {
      position: relative;
      z-index: 1;
      font-family: var(--font-mono);
      font-size: 1.25rem;
      color: var(--neon-cyan);
      text-shadow: 0 0 10px var(--neon-cyan);
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-top: 1.5rem;
    }

    /* === 标签 === */
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 2rem;
      position: relative;
      z-index: 1;
    }

    .tag {
      padding: 0.5rem 1rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border: 1px solid;
      transition: all 0.3s ease;
    }

    .tag--pink {
      color: var(--neon-pink);
      border-color: var(--neon-pink);
      box-shadow: 0 0 5px rgba(255, 45, 146, 0.3);
    }

    .tag--pink:hover {
      background: var(--neon-pink);
      color: var(--space-black);
      box-shadow: 0 0 15px var(--neon-pink);
    }

    .tag--cyan {
      color: var(--neon-cyan);
      border-color: var(--neon-cyan);
      box-shadow: 0 0 5px rgba(0, 245, 255, 0.3);
    }

    .tag--cyan:hover {
      background: var(--neon-cyan);
      color: var(--space-black);
      box-shadow: 0 0 15px var(--neon-cyan);
    }

    .tag--purple {
      color: var(--neon-purple);
      border-color: var(--neon-purple);
      box-shadow: 0 0 5px rgba(188, 19, 254, 0.3);
    }

    .tag--purple:hover {
      background: var(--neon-purple);
      color: #fff;
      box-shadow: 0 0 15px var(--neon-purple);
    }

    /* === 霓虹按钮 === */
    .neon-button {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      margin-top: 2rem;
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      text-decoration: none;
      color: var(--neon-cyan);
      background: transparent;
      border: 2px solid var(--neon-cyan);
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow:
        0 0 5px var(--neon-cyan),
        0 0 10px var(--neon-cyan),
        inset 0 0 5px rgba(0, 245, 255, 0.2);
    }

    .neon-button:hover {
      color: var(--space-black);
      background: var(--neon-cyan);
      box-shadow:
        0 0 10px var(--neon-cyan),
        0 0 20px var(--neon-cyan),
        0 0 40px var(--neon-cyan),
        0 0 80px var(--neon-cyan);
      transform: translateY(-2px);
    }

    /* === 内容区域 === */
    .content {
      position: relative;
      padding: 6rem 2rem;
      background: var(--space-black);
    }

    .content-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 6vw, 4rem);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
      color: var(--neon-purple);
      text-shadow: 0 0 20px var(--neon-purple);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .neon-card {
      position: relative;
      background: rgba(10, 10, 15, 0.8);
      border: 1px solid rgba(0, 245, 255, 0.3);
      padding: 2rem;
      transition: all 0.4s ease;
      overflow: hidden;
    }

    .neon-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(0, 245, 255, 0.1) 0%,
        transparent 50%,
        rgba(188, 19, 254, 0.1) 100%
      );
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .neon-card:hover {
      border-color: var(--neon-cyan);
      box-shadow:
        0 0 10px rgba(0, 245, 255, 0.3),
        0 0 20px rgba(0, 245, 255, 0.2),
        inset 0 0 20px rgba(0, 245, 255, 0.05);
      transform: translateY(-5px);
    }

    .neon-card:hover::before {
      opacity: 1;
    }

    .neon-card__number {
      font-family: var(--font-display);
      font-size: 3rem;
      color: var(--neon-pink);
      text-shadow: 0 0 15px var(--neon-pink);
      margin-bottom: 1rem;
    }

    .neon-card__title {
      font-family: var(--font-display);
      font-size: 1.25rem;
      color: var(--neon-cyan);
      text-shadow: 0 0 10px var(--neon-cyan);
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .neon-card__desc {
      color: rgba(250, 250, 250, 0.7);
      line-height: 1.6;
    }

    /* === Footer === */
    .footer {
      padding: 3rem 2rem;
      text-align: center;
      background: var(--cosmic-purple);
      border-top: 1px solid rgba(0, 245, 255, 0.2);
    }

    .footer-text {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: rgba(250, 250, 250, 0.5);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* === 响应式 === */
    @media (max-width: 768px) {
      .hero-title {
        font-size: clamp(2.5rem, 12vw, 6rem);
      }

      .hero-subtitle {
        font-size: 0.875rem;
        letter-spacing: 0.15em;
      }

      .tags {
        justify-content: center;
      }
    }

    /* === 减少动画偏好 === */
    @media (prefers-reduced-motion) {
      .hero-title {
        animation: none;
      }

      .neon-button {
        transition: none;
      }
    }
  </style>
</head>
<body>
  <!-- 胶片颗粒层 -->
  <div class="grain-layer"></div>

  <!-- Hero 区域 -->
  <section class="hero">
    <div class="scanlines"></div>
    <h1 class="hero-title">NEON</h1>
    <p class="hero-subtitle">The Future Was Bright</p>
    <div class="tags">
      <span class="tag tag--pink">Retro Futurism</span>
      <span class="tag tag--cyan">Kinetic Type</span>
      <span class="tag tag--purple">Grainy Blur</span>
      <span class="tag tag--cyan">80s Aesthetic</span>
      <span class="tag tag--pink">Synthwave</span>
    </div>
    <a href="#" class="neon-button">Enter The Future</a>
  </section>

  <!-- 内容区域 -->
  <section class="content">
    <h2 class="content-title">Features</h2>
    <div class="card-grid">
      <div class="neon-card">
        <div class="neon-card__number">01</div>
        <h3 class="neon-card__title">Neon Glow</h3>
        <p class="neon-card__desc">多层 text-shadow 叠加，创造真实的霓虹灯光效果。支持粉、青、紫三种主色调。</p>
      </div>
      <div class="neon-card">
        <div class="neon-card__number">02</div>
        <h3 class="neon-card__title">Kinetic Type</h3>
        <p class="neon-card__desc">动态文字动画：闪烁、脉动、故障效果。让标题成为页面的动态焦点。</p>
      </div>
      <div class="neon-card">
        <div class="neon-card__number">03</div>
        <h3 class="neon-card__title">Film Grain</h3>
        <p class="neon-card__desc">胶片颗粒质感叠加，为数字设计注入温暖的电影感。opacity 0.04 最佳。</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p class="footer-text">Back To The Future / 2026</p>
  </footer>
</body>
</html>
```

---

## 代表案例

### 知名应用

1. **Cyberpunk 2077 UI** - 游戏界面，霓虹 + 故障效果 + 动态元素
2. **Stranger Things** - Netflix 剧集品牌，80年代复古未来风格
3. **Tron Legacy** - 电影界面设计，霓虹光效 + 透视网格
4. **Blade Runner 2049** - 电影 UI，橙粉色霓虹 + 工业质感
5. **Synthwave 音乐封面** - 科幻日落 + 网格景观

### 设计参考

- [Dribbble: Synthwave](https://dribbble.com/search/synthwave)
- [Behance: Retro Futurism](https://www.behance.net/search/retro%20futurism)
- [Awwwards: Experimental Typography](https://www.awwwards.com/experimental-typography/)
- [Retro Futurism UI - LogRocket](https://blog.logrocket.com/ux-design/retro-futuristic-ux-designs-bringing-back-the-future/)

---

## 参考来源

### Retro Futurism (A类)

- [LogRocket - Retro-futuristic UX Designs](https://blog.logrocket.com/ux-design/retro-futuristic-ux-designs-bringing-back-the-future/)
- [Lummi - Retro Futurism Comeback](https://www.lummi.ai/blog/retro-futurism-and-why-its-making-a-comeback-in-design)
- [Figma - Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/)

### Kinetic Typography (B类)

- [Upskillist - 7 Kinetic Typography Trends 2025](https://www.upskillist.com/blog/top-7-kinetic-typography-trends-2025/)
- [CSS-Tricks - How to Create Neon Text](https://css-tricks.com/how-to-create-neon-text-with-css/)
- [SuperAGI - AI-Powered Text Animation](https://web.superagi.com/mastering-ai-powered-text-animation-trends-tools-and-techniques-for-kinetic-typography-in-2025/)

### Grainy Blur (C类)

- [Kittl - Grainy Blur Effect 2026](https://www.kittl.com/blogs/grainy-blur-effect-stl/)
- [ibelick - Grainy Backgrounds with CSS](https://ibelick.com/blog/create-grainy-backgrounds-with-css)
- [Reddit - Grain Texture Tips](https://www.reddit.com/r/web_design/comments/1o7ji6o/simple_trick_use_grain_texture_to_make_site_feel/)

### 字体资源

- [Google Fonts - Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts - Exo 2](https://fonts.google.com/specimen/Exo+2)
- [Figma - 32 Futuristic Fonts](https://www.figma.com/resource-library/futuristic-fonts/)

### 动画与效果

- [FreeFrontend - CSS Neon Effects](https://freefrontend.com/css-neon-effects/)
- [DEV Community - Retro CRT Terminal](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh)
- [Subframe - CSS Glow Text Effects](https://www.subframe.com/tips/css-glow-text-effect-examples)
