# 组合1：数字粗野建筑 (Neo Brutalism + 3D Immersive)

## 设计理念

这个组合创造了一种**数字粗野建筑**的视觉体验——仿佛在虚拟空间中建造粗野主义的混凝土纪念碑，硬朗的几何边框与深邃的空间感形成强烈的视觉张力。

**三层协同机制**：
- **Neo Brutalism (形态层)**：高对比度、粗黑边框、大胆配色，定义视觉骨架
- **3D Immersive (空间层)**：通过透视、阴影位移、Z轴变换创造建筑般的深度感
- **融合张力**：硬边与深度的碰撞，让扁平的粗野主义元素在空间中"站立起来"

**为什么这个组合有效**：
1. Neo Brutalism的硬边阴影本身就具有"伪3D"特性，3D变换将其升级为真实空间感
2. 粗黑边框在3D空间中成为"建筑结构线"，强化空间认知
3. 高饱和度原色在深度变化中产生戏剧性的光影效果
4. 整体传达"大胆、直接、不妥协、前卫建筑感"的品牌调性

---

## 角色定义

| 属性 | 描述 |
|------|------|
| **核心气质** | 大胆、前卫、建筑感、不妥协、功能性优先 |
| **情感基调** | 震撼、冲击、直接、真实、反装饰 |
| **适用场景** | 创意机构、Web3项目、科技初创、设计师作品集、反叛品牌 |
| **品牌人格** | 像一位前卫建筑师，敢于打破常规，用结构表达态度 |
| **用户感受** | "这个品牌很有态度"、"不玩虚的"、"数字世界的粗野美学" |

---

## 风格约束

### 必须遵循

1. **边框**：所有主要元素必须有明显的黑色边框 (3-5px solid #000)
2. **阴影**：硬边偏移阴影，使用 `steps()` 动画模拟机械感
3. **色彩**：高饱和度原色 + 荧光冲突色点缀（Acid Green #39FF14、Hot Pink #FF00AA）
4. **字体**：极端尺度对比（12px 正文 vs 60px+ 标题），`line-height: 1.1`，字间距挤压
5. **错位**：元素轻微倾斜（1-2度），打破完美对齐，创造「贴标签」粗糙感
6. **交互**：物理位移反馈，非变色，使用机械感曲线 `cubic-bezier(0.1, 0.8, 0.2, 1)`
7. **融合**：使用 `mix-blend-mode: multiply` 创造印刷套色偏差效果
8. **3D变换**：使用 perspective 和 transform 创造空间深度
9. **质感**：背景使用纸浆质感或轻微噪点，拒绝纯平数字感

### 禁止使用

1. 柔和的模糊阴影 (box-shadow blur)
2. 平滑的 `ease-in-out` 过渡（使用 `steps()` 或机械曲线）
3. 悬停变色效果（使用物理位移代替）
4. 完美居中对齐（必须有刻意错位）
5. 舒适的行高（> 1.2）
6. 低饱和度/灰调配色
7. 细线条边框 (< 2px)
8. 圆润的衬线字体
9. 渐变过渡效果
10. 装饰性的花纹或图案

---

## 核心要素

### 融合色彩系统 (CSS变量)

```css
:root {
  /* === Neo Brutalism 原色系统 (Layer A) === */
  --brutal-yellow: #FFE135;       /* 经典粗野黄 - 主色 */
  --brutal-blue: #0066FF;         /* 电光蓝 - 交互色 */
  --brutal-pink: #FF6B9D;         /* 霓虹粉 - 强调色 */
  --brutal-red: #FF3333;          /* 警示红 - 错误/警告 */
  --brutal-green: #00CC66;        /* 成功绿 - 确认状态 */
  --brutal-orange: #FF9933;       /* 活力橙 - 次强调 */

  /* === 荧光冲突色 (不安全色彩 - 激进点缀) === */
  --brutal-acid-green: #39FF14;   /* 荧光绿 - 冲突点缀 */
  --brutal-hot-pink: #FF00AA;     /* 热粉红 - 激进强调 */
  --brutal-cyan: #00FFFF;         /* 青色 - 印刷套色偏差 */

  /* === 基础色 === */
  --brutal-black: #000000;        /* 纯黑 - 边框/文字 */
  --brutal-white: #FFFFFF;        /* 纯白 - 背景/文字 */
  --brutal-cream: #FFF8E7;        /* 奶油色 - 次背景 */

  /* === 3D 空间深度色 (Layer B) === */
  --shadow-offset-x: 6px;
  --shadow-offset-y: 6px;
  --shadow-color: #000000;

  /* === 3D 变换参数 === */
  --perspective-near: 400px;
  --perspective-normal: 1000px;
  --perspective-far: 2000px;
  --rotate-x-subtle: 5deg;
  --rotate-y-subtle: 8deg;
  --translate-z-near: 50px;
  --translate-z-far: 100px;

  /* === 融合色 (A+B) === */
  --fusion-shadow-yellow: rgba(0, 0, 0, 1);  /* 硬边阴影始终纯黑 */
  --fusion-depth-blue: #0052CC;              /* 深度面色彩 */

  /* === 功能色 === */
  --text-primary: #000000;
  --text-inverse: #FFFFFF;
  --border-brutal: 4px solid #000000;

  /* === 印刷融合模式 === */
  --blend-print: multiply;

  /* === 间距系统 (粗犷节奏) === */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;

  /* === 圆角系统 (微圆角或直角) === */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

### 字体方案

```css
:root {
  /* 主字体 - 粗犷有力（更粗暴选项优先） */
  --font-display: "Arial Black", "Oswald", "Inter", "思源黑体 Heavy", "站酷高端黑", "Space Grotesk", system-ui, sans-serif;

  /* 正文字体 - 清晰可读 */
  --font-body: "Inter", "思源黑体", "Space Grotesk", system-ui, sans-serif;

  /* 等宽字体 - 代码/数据 */
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* 字重 - 粗体优先 */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;
  --weight-black: 900;

  /* 字号 (极端尺度对比 - Typography Combat) */
  --text-micro: 0.75rem;          /* 12px - 正文压缩，制造功能性压迫 */
  --text-sm: 0.875rem;            /* 14px */
  --text-base: 1rem;              /* 16px */
  --text-lg: 1.25rem;             /* 20px */
  --text-xl: 1.5rem;              /* 24px */
  --text-2xl: 2rem;               /* 32px */
  --text-3xl: 2.5rem;             /* 40px */
  --text-4xl: 3.5rem;             /* 56px */
  --text-5xl: 5rem;               /* 80px */
  --text-giant: clamp(4rem, 12vw, 8rem);  /* 标题突破边界 */

  /* 行高 (紧凑压迫) */
  --line-height-tight: 1.1;       /* 标题和压缩正文 */
  --line-height-normal: 1.4;      /* 正常正文 */
}

/* 字体特性 */
body {
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: var(--weight-black);
  line-height: var(--line-height-tight);
  text-transform: uppercase;
  letter-spacing: -0.05em;        /* 字间距挤压 */
  overflow: visible;               /* 允许突破容器边界 */
}

/* 粗野主义标题 - 极端尺度 */
.brutal-heading {
  font-weight: var(--weight-black);
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: var(--line-height-tight);
}

/* 压缩正文 - 与标题形成极端对比 */
.brutal-text--compressed {
  font-size: var(--text-micro);
  line-height: var(--line-height-tight);
}
```

### 布局模式

```css
/* 粗野主义网格 - 不对称块状 */
.brutal-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-md);
  padding: var(--space-lg);
}

/* 块状卡片网格 */
.brutal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
}

/* 3D 空间容器 */
.brutal-3d-container {
  perspective: var(--perspective-normal);
  perspective-origin: center center;
}

/* 不对称区块 */
.brutal-block--large {
  grid-column: span 8;
  grid-row: span 2;
}

.brutal-block--medium {
  grid-column: span 4;
}

.brutal-block--small {
  grid-column: span 2;
}
```

---

## CSS 效果库

### 硬边阴影系统 (Neo Brutalism 核心)

```css
/* 基础硬边阴影 */
.brutal-shadow {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) 0 var(--shadow-color);
  border: var(--border-brutal);
}

/* 大阴影 - 强调 */
.brutal-shadow--lg {
  box-shadow: 10px 10px 0 #000000;
  border: 5px solid #000000;
}

/* 超大阴影 - 标题级（印刷错位质感） */
.brutal-shadow--xl {
  box-shadow: 16px 16px 0 #000000;
  border: 6px solid #000000;
}

/* 小阴影 - 辅助元素 */
.brutal-shadow--sm {
  box-shadow: 4px 4px 0 #000000;
  border: 3px solid #000000;
}

/* 悬停阴影位移 - 机械感过渡 */
.brutal-shadow-hover {
  transition: transform 0.1s steps(2), box-shadow 0.1s steps(2);
  cursor: pointer;
}

.brutal-shadow-hover:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0 #000000;
}

.brutal-shadow-hover:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000000;
}

/* 机械感长按效果 */
.brutal-shadow--mechanical {
  transition: transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1),
              box-shadow 0.15s cubic-bezier(0.1, 0.8, 0.2, 1);
}
```

### 3D 空间变换

```css
/* 3D 卡片基础 */
.brutal-3d-card {
  /* 基础粗野样式 */
  border: var(--border-brutal);
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) 0 #000000;

  /* 3D 变换 */
  transform-style: preserve-3d;
  transform: rotateX(var(--rotate-x-subtle)) rotateY(var(--rotate-y-subtle));
  transition: transform 0.3s ease-out;
}

/* 3D 卡片容器 */
.brutal-3d-wrapper {
  perspective: var(--perspective-normal);
  perspective-origin: center center;
}

/* 3D 悬停效果 */
.brutal-3d-card:hover {
  transform:
    rotateX(0deg)
    rotateY(0deg)
    translateZ(var(--translate-z-near));
}

/* 3D 翻转卡片 */
.brutal-3d-flip {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.brutal-3d-flip:hover {
  transform: rotateY(180deg);
}

.brutal-3d-flip__front,
.brutal-3d-flip__back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border: var(--border-brutal);
}

.brutal-3d-flip__back {
  transform: rotateY(180deg);
}

/* 3D 堆叠效果 */
.brutal-3d-stack {
  position: relative;
  transform-style: preserve-3d;
}

.brutal-3d-stack::before,
.brutal-3d-stack::after {
  content: '';
  position: absolute;
  inset: 0;
  border: var(--border-brutal);
  background: var(--brutal-cream);
}

.brutal-3d-stack::before {
  transform: translateZ(-20px) translateY(10px) translateX(-10px);
  z-index: -1;
}

.brutal-3d-stack::after {
  transform: translateZ(-40px) translateY(20px) translateX(-20px);
  z-index: -2;
}
```

### 刻意错位系统 (Intentional Misalignment)

```css
/* === 刻意错位 - 打破完美对齐 === */

/* 轻微倾斜 - 贴标签粗糙感 */
.brutal-tilt {
  transform: rotate(-1.5deg);
}

.brutal-tilt--alt {
  transform: rotate(1.2deg);
}

.brutal-tilt--subtle {
  transform: rotate(-0.8deg);
}

/* 印刷套色偏差效果 */
.brutal-misprint {
  position: relative;
  mix-blend-mode: var(--blend-print);
}

.brutal-misprint::before {
  content: '';
  position: absolute;
  inset: 3px -2px -2px 3px;
  background: var(--brutal-cyan);
  opacity: 0.3;
  z-index: -1;
}

.brutal-misprint::after {
  content: '';
  position: absolute;
  inset: -2px 3px 3px -2px;
  background: var(--brutal-hot-pink);
  opacity: 0.2;
  z-index: -2;
}

/* 纸浆质感背景 */
.brutal-paper-texture {
  background-color: var(--brutal-cream);
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-blend-mode: overlay;
}

/* 标签贴附效果 */
.brutal-label {
  display: inline-block;
  padding: 0.25em 0.75em;
  background: var(--brutal-yellow);
  border: 3px solid var(--brutal-black);
  transform: rotate(-2deg);
  box-shadow: 3px 3px 0 var(--brutal-black);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
}
```

### 完整两层融合效果 (A+B)

```css
/* 终极融合组件：数字粗野建筑 */
.fusion-brutal-3d {
  position: relative;
  isolation: isolate;

  /* Layer A: Neo Brutalism 形态 */
  border: 5px solid var(--brutal-black);
  padding: var(--space-lg);

  /* 硬边阴影 */
  box-shadow: 8px 8px 0 #000000;

  /* Layer B: 3D 空间变换 */
  transform-style: preserve-3d;
  transform:
    perspective(var(--perspective-normal))
    rotateX(3deg)
    rotateY(5deg);

  /* 过渡 */
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease-out;
}

/* 3D 阴影层 (伪元素) */
.fusion-brutal-3d::before {
  content: '';
  position: absolute;
  inset: -8px -8px -8px -8px;
  border: 5px solid var(--brutal-black);
  background: var(--brutal-yellow);
  z-index: -1;
  transform: translateZ(-30px);
}

/* 深度层 */
.fusion-brutal-3d::after {
  content: '';
  position: absolute;
  inset: -16px -16px -16px -16px;
  border: 5px solid var(--brutal-black);
  background: var(--brutal-blue);
  z-index: -2;
  transform: translateZ(-60px);
  opacity: 0.7;
}

/* 悬停状态 - 空间翻转 */
.fusion-brutal-3d:hover {
  transform:
    perspective(var(--perspective-normal))
    rotateX(0deg)
    rotateY(0deg)
    translateZ(30px);
  box-shadow: 12px 12px 0 #000000;
}

/* 点击状态 - 压入效果 */
.fusion-brutal-3d:active {
  transform:
    perspective(var(--perspective-normal))
    rotateX(-2deg)
    rotateY(-3deg)
    translateZ(-10px);
  box-shadow: 4px 4px 0 #000000;
}
```

### 粗野按钮组件

```css
/* 基础粗野按钮 */
.brutal-button {
  /* 粗野形态 */
  border: 4px solid var(--brutal-black);
  padding: var(--space-sm) var(--space-lg);

  /* 硬边阴影 */
  box-shadow: 6px 6px 0 #000000;

  /* 背景 */
  background: var(--brutal-yellow);

  /* 文字 */
  color: var(--brutal-black);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;

  /* 过渡 */
  transition: all 0.15s ease-out;
  cursor: pointer;
  display: inline-block;
}

.brutal-button:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 #000000;
  background: var(--brutal-blue);
  color: var(--brutal-white);
}

.brutal-button:active {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 #000000;
}

/* 3D 粗野按钮 */
.brutal-button--3d {
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(5deg);
  box-shadow:
    6px 6px 0 #000000,
    0 10px 20px rgba(0, 0, 0, 0.2);
}

.brutal-button--3d:hover {
  transform: perspective(500px) rotateX(0deg) translateY(-4px);
  box-shadow:
    8px 8px 0 #000000,
    0 15px 30px rgba(0, 0, 0, 0.25);
}

/* 次要按钮 */
.brutal-button--secondary {
  background: var(--brutal-white);
  box-shadow: 4px 4px 0 #000000;
}

.brutal-button--secondary:hover {
  background: var(--brutal-cream);
}

/* 危险按钮 */
.brutal-button--danger {
  background: var(--brutal-red);
  color: var(--brutal-white);
}

.brutal-button--danger:hover {
  background: #CC0000;
}
```

---

## 生图提示词库

### 核心融合提示词

```
neo brutalism UI design, bold black borders, hard edge shadows,
high contrast colors, yellow blue pink palette, blocky layout,
3D immersive design, spatial depth, perspective transformation,
digital brutalist architecture, raw geometric forms,
chunky buttons, impact typography, no gradients,
pure saturated colors, architectural UI, structural honesty
```

### 场景化提示词

**创意机构官网**：
```
creative agency website, neo brutalism style, bold typography,
3D floating cards, hard edge drop shadows, black outlines,
vibrant yellow accents, asymmetric grid layout,
digital architecture, avant-garde design portfolio,
chunky UI elements, perspective depth, raw aesthetics
```

**Web3/加密项目**：
```
web3 landing page, brutalist crypto UI, bold geometric shapes,
3D spatial elements, neon pink and electric blue,
black borders, hard shadows, futuristic blockchain aesthetic,
decentralized design language, raw digital architecture,
impact headings, high contrast interface
```

**科技初创公司**：
```
tech startup homepage, neo brutalism meets 3D design,
clean bold typography, floating brutalist cards,
yellow and black color scheme, hard edge shadows,
architectural UI components, perspective depth,
modern avant-garde, no-nonsense design
```

**设计师作品集**：
```
designer portfolio, brutalist gallery layout,
3D card stack effect, bold black frames,
saturated color blocks, asymmetric composition,
digital architecture showcase, raw UI aesthetics,
typography-driven design, hard shadow depth
```

---

## 动画建议

### 硬边弹跳动画

```css
/* 定义关键帧 */
@keyframes brutal-bounce {
  0% {
    transform: translateY(0) scale(1);
    box-shadow: 6px 6px 0 #000000;
  }
  30% {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 10px 18px 0 #000000;
  }
  50% {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 8px 14px 0 #000000;
  }
  70% {
    transform: translateY(-2px) scale(1);
    box-shadow: 7px 9px 0 #000000;
  }
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 6px 6px 0 #000000;
  }
}

@keyframes brutal-press {
  0%, 100% {
    transform: translateY(0);
    box-shadow: 6px 6px 0 #000000;
  }
  50% {
    transform: translateY(4px);
    box-shadow: 2px 2px 0 #000000;
  }
}

@keyframes brutal-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

/* 应用动画 */
.animate-brutal-bounce {
  animation: brutal-bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.animate-brutal-press {
  animation: brutal-press 0.3s ease-out;
}

.animate-brutal-shake {
  animation: brutal-shake 0.5s ease-out;
}
```

### 3D 空间动画

```css
/* 3D 翻转入场 */
@keyframes brutal-3d-enter {
  0% {
    opacity: 0;
    transform:
      perspective(1000px)
      rotateX(-30deg)
      rotateY(-45deg)
      translateZ(-100px);
  }
  100% {
    opacity: 1;
    transform:
      perspective(1000px)
      rotateX(3deg)
      rotateY(5deg)
      translateZ(0);
  }
}

/* 3D 浮动 */
@keyframes brutal-3d-float {
  0%, 100% {
    transform:
      perspective(1000px)
      rotateX(3deg)
      rotateY(5deg)
      translateY(0);
  }
  50% {
    transform:
      perspective(1000px)
      rotateX(5deg)
      rotateY(8deg)
      translateY(-10px);
  }
}

/* 3D 深度脉冲 */
@keyframes brutal-3d-pulse {
  0%, 100% {
    transform:
      perspective(1000px)
      rotateX(3deg)
      rotateY(5deg)
      translateZ(0);
  }
  50% {
    transform:
      perspective(1000px)
      rotateX(3deg)
      rotateY(5deg)
      translateZ(30px);
  }
}

/* 应用动画 */
.animate-brutal-3d-enter {
  animation: brutal-3d-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-brutal-3d-float {
  animation: brutal-3d-float 4s ease-in-out infinite;
}

.animate-brutal-3d-pulse {
  animation: brutal-3d-pulse 2s ease-in-out infinite;
}

/* 交错延迟 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
```

### 过渡效果

```css
/* 通用过渡 - 快速有力 */
.transition-brutal {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-duration: 0.2s;
}

/* 卡片悬停 */
.brutal-card-hover {
  transition:
    transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.15s ease-out;
}

/* 按钮交互 */
.brutal-btn-transition {
  transition:
    transform 0.15s ease-out,
    box-shadow 0.15s ease-out,
    background-color 0.15s ease-out,
    color 0.15s ease-out;
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
  <title>数字粗野建筑 - Neo Brutalism + 3D</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* === CSS 变量 === */
    :root {
      --brutal-yellow: #FFE135;
      --brutal-blue: #0066FF;
      --brutal-pink: #FF6B9D;
      --brutal-red: #FF3333;
      --brutal-black: #000000;
      --brutal-white: #FFFFFF;
      --brutal-cream: #FFF8E7;
      --space-sm: 1rem;
      --space-md: 1.5rem;
      --space-lg: 2.5rem;
      --space-xl: 4rem;
      --font-display: "Inter", "Space Grotesk", system-ui, sans-serif;
      --font-body: "Inter", system-ui, sans-serif;
      --perspective-normal: 1000px;
    }

    /* === 全局样式 === */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-body);
      color: var(--brutal-black);
      line-height: 1.4;
      background: var(--brutal-cream);
      overflow-x: hidden;
    }

    /* === 导航栏 === */
    .nav {
      padding: var(--space-md) var(--space-xl);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 5px solid var(--brutal-black);
      background: var(--brutal-white);
    }

    .nav-logo {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.03em;
      color: var(--brutal-black);
    }

    .nav-links {
      display: flex;
      gap: var(--space-md);
      list-style: none;
    }

    .nav-links a {
      color: var(--brutal-black);
      text-decoration: none;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      border: 3px solid transparent;
      transition: all 0.15s ease-out;
    }

    .nav-links a:hover {
      border-color: var(--brutal-black);
      background: var(--brutal-yellow);
    }

    /* === Hero 区域 === */
    .hero {
      padding: var(--space-xl) var(--space-xl);
      perspective: var(--perspective-normal);
    }

    .hero-content {
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
    }

    .hero h1 {
      font-family: var(--font-display);
      font-size: clamp(3rem, 10vw, 6rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.04em;
      line-height: 1;
      margin-bottom: var(--space-md);

      /* 3D 文字效果 */
      transform-style: preserve-3d;
      transform: perspective(500px) rotateX(5deg);
      text-shadow:
        4px 4px 0 var(--brutal-blue),
        8px 8px 0 var(--brutal-pink);
    }

    .hero h1 span {
      display: inline-block;
      background: var(--brutal-yellow);
      padding: 0 0.2em;
      border: 4px solid var(--brutal-black);
      box-shadow: 6px 6px 0 var(--brutal-black);
    }

    .hero p {
      font-size: 1.5rem;
      font-weight: 400;
      max-width: 600px;
      margin: 0 auto var(--space-lg);
    }

    /* === 3D 卡片网格 === */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-md);
      padding: var(--space-xl);
      max-width: 1400px;
      margin: 0 auto;
      perspective: var(--perspective-normal);
    }

    /* === 粗野 3D 卡片 === */
    .brutal-3d-card {
      border: 5px solid var(--brutal-black);
      box-shadow: 8px 8px 0 var(--brutal-black);
      padding: var(--space-lg);
      background: var(--brutal-white);

      /* 3D 变换 */
      transform-style: preserve-3d;
      transform:
        perspective(1000px)
        rotateX(3deg)
        rotateY(5deg);

      /* 过渡 */
      transition:
        transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
        box-shadow 0.25s ease-out;

      position: relative;
    }

    .brutal-3d-card:nth-child(1) { background: var(--brutal-yellow); }
    .brutal-3d-card:nth-child(2) { background: var(--brutal-blue); color: var(--brutal-white); }
    .brutal-3d-card:nth-child(3) { background: var(--brutal-pink); }

    .brutal-3d-card::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: 10px;
      bottom: 10px;
      border: 5px solid var(--brutal-black);
      background: var(--brutal-cream);
      z-index: -1;
      transform: translateZ(-20px);
    }

    .brutal-3d-card:hover {
      transform:
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(30px);
      box-shadow: 12px 12px 0 var(--brutal-black);
    }

    .brutal-3d-card h3 {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: var(--space-sm);
    }

    .brutal-3d-card p {
      font-size: 1rem;
      line-height: 1.5;
    }

    /* === 粗野按钮 === */
    .brutal-button {
      border: 4px solid var(--brutal-black);
      padding: var(--space-sm) var(--space-lg);
      box-shadow: 6px 6px 0 var(--brutal-black);
      background: var(--brutal-yellow);
      color: var(--brutal-black);
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      transition: all 0.15s ease-out;
    }

    .brutal-button:hover {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 var(--brutal-black);
      background: var(--brutal-blue);
      color: var(--brutal-white);
    }

    .brutal-button:active {
      transform: translate(3px, 3px);
      box-shadow: 3px 3px 0 var(--brutal-black);
    }

    /* === 特色区块 === */
    .feature-section {
      padding: var(--space-xl);
      perspective: var(--perspective-normal);
    }

    .feature-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
      max-width: 1200px;
      margin: 0 auto;
      align-items: center;
    }

    .feature-text {
      border: 5px solid var(--brutal-black);
      box-shadow: 8px 8px 0 var(--brutal-black);
      padding: var(--space-lg);
      background: var(--brutal-white);
      transform-style: preserve-3d;
      transform: perspective(800px) rotateY(-5deg);
      transition: transform 0.3s ease-out;
    }

    .feature-text:hover {
      transform: perspective(800px) rotateY(0deg);
    }

    .feature-text h2 {
      font-family: var(--font-display);
      font-size: 2.5rem;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: var(--space-sm);
    }

    .feature-visual {
      border: 5px solid var(--brutal-black);
      box-shadow: 8px 8px 0 var(--brutal-black);
      padding: var(--space-lg);
      background: var(--brutal-yellow);
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      transform: perspective(800px) rotateY(5deg);
      transition: transform 0.3s ease-out;
    }

    .feature-visual:hover {
      transform: perspective(800px) rotateY(0deg);
    }

    /* === 统计区块 === */
    .stats-section {
      padding: var(--space-xl);
      background: var(--brutal-black);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-md);
      max-width: 1200px;
      margin: 0 auto;
    }

    .stat-card {
      border: 4px solid var(--brutal-white);
      padding: var(--space-md);
      text-align: center;
      background: var(--brutal-black);
      color: var(--brutal-white);
      transform-style: preserve-3d;
      transition: transform 0.2s ease-out;
    }

    .stat-card:hover {
      transform: translateY(-8px) scale(1.02);
      background: var(--brutal-blue);
    }

    .stat-number {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 900;
      color: var(--brutal-yellow);
    }

    .stat-label {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 0.5rem;
    }

    /* === 动画 === */
    @keyframes brutal-3d-enter {
      0% {
        opacity: 0;
        transform: perspective(1000px) rotateX(-30deg) rotateY(-45deg) translateZ(-100px);
      }
      100% {
        opacity: 1;
        transform: perspective(1000px) rotateX(3deg) rotateY(5deg) translateZ(0);
      }
    }

    .animate-in {
      animation: brutal-3d-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .delay-1 { animation-delay: 0.1s; opacity: 0; }
    .delay-2 { animation-delay: 0.2s; opacity: 0; }
    .delay-3 { animation-delay: 0.3s; opacity: 0; }

    /* === 响应式 === */
    @media (max-width: 768px) {
      .feature-block {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .nav {
        flex-direction: column;
        gap: 1rem;
      }
    }
  </style>
</head>
<body>
  <!-- 导航 -->
  <nav class="nav">
    <div class="nav-logo">BRUTAL</div>
    <ul class="nav-links">
      <li><a href="#">作品</a></li>
      <li><a href="#">服务</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">联系</a></li>
    </ul>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-content animate-in">
      <h1><span>数字粗野建筑</span></h1>
      <p>当粗野主义的硬边遇上3D空间深度，创造令人震撼的数字建筑体验。大胆、直接、不妥协。</p>
      <a href="#" class="brutal-button">开始探索</a>
    </div>
  </section>

  <!-- 特色卡片 -->
  <section class="card-grid">
    <div class="brutal-3d-card animate-in delay-1">
      <h3>硬边美学</h3>
      <p>粗黑边框、硬边阴影、高对比度配色。不妥协的视觉语言，直接传达品牌态度。</p>
    </div>
    <div class="brutal-3d-card animate-in delay-2">
      <h3>空间深度</h3>
      <p>3D变换将扁平元素升级为空间建筑。透视、旋转、位移创造沉浸式体验。</p>
    </div>
    <div class="brutal-3d-card animate-in delay-3">
      <h3>数字张力</h3>
      <p>硬边与深度的碰撞，粗野主义在虚拟空间中站立起来，形成独特的视觉张力。</p>
    </div>
  </section>

  <!-- 特色区块 -->
  <section class="feature-section">
    <div class="feature-block">
      <div class="feature-text">
        <h2>结构诚实</h2>
        <p>Neo Brutalism的核心原则是"结构诚实"——不隐藏、不装饰、直接呈现。每一个边框、每一个阴影都是结构的一部分，而非装饰。当这种诚实遇上3D空间，我们得到的是数字世界的粗野建筑——真实、有力、令人难忘。</p>
      </div>
      <div class="feature-visual">
        <span style="font-size: 4rem; font-weight: 900;">3D</span>
      </div>
    </div>
  </section>

  <!-- 统计区块 -->
  <section class="stats-section">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">85%</div>
        <div class="stat-label">品牌识别度提升</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">3x</div>
        <div class="stat-label">用户参与度</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">2.5s</div>
        <div class="stat-label">平均停留时间</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">100%</div>
        <div class="stat-label">态度表达</div>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## 代表案例

### 知名应用

1. **Gumroad** - 电商平台的粗野主义设计，大胆配色和硬边阴影
2. **Stripe (部分页面)** - 支付页面使用粗野主义元素
3. **Figma** - 设计工具的某些营销页面采用粗野风格
4. **Various Web3 Projects** - 大量加密项目采用Neo Brutalism

### 设计参考

- [Dribbble: Neo Brutalism](https://dribbble.com/search/neo-brutalism)
- [Behance: Brutalist Web Design](https://www.behance.net/search/brutalist%20web)
- [Brutalist Websites](https://brutalistwebsites.com/)
- [Awwwards: Brutalism](https://www.awwwards.com/websites/brutalist/)

---

## 参考来源

### Neo Brutalism 核心资源
- [NN/G Neubrutalism Definition and Best Practices](https://www.nngroup.com/articles/neobrutalism/)
- [Neubrutalism.com - The Definitive Guide](https://neubrutalism.com/)
- [Brutalism.plus - 12 Design Principles](https://brutalism.plus/)
- [History of Neo Brutalism - Dribbble](https://dribbble.com/stories/2022/04/08/what-is-neo-brutalism)

### 3D Immersive 设计
- [Uni Agency - UI/UX and 3D Design Trends 2025](https://www.uni.agency/post/ui-ux-and-3d-design-trends-in-2025-elevating-user-experience)
- [CSS 3D Transforms - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [The Art of CSS 3D](https://3dtransforms.desandro.com/)

### 融合设计
- [Figma - Top Web Design Trends for 2026](https://www.figma.com/resource-library/web-design-trends/)
- [UX Collective - Experience Design Trends 2026](https://uxdesign.cc/the-most-popular-experience-design-trends-of-2026-3ca85c8a3e3d)
- [CortexDM - UI Design Trends 2025](https://www.cortexdm.com/blog/ui-design-trends-for-2025-explore-the-most-popular-ui-ux-styles)

### 工具与生成器
- [Fancy Border Radius Generator](https://9elements.github.io/fancy-border-radius/)
- [CSS Box Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)
- [3D CSS Transform Tool](https://css3gen.com/css-3d-transform-tool/)

---

*本风格文档基于 2026 UI审美风格研究报告生成*
*组合公式：Neo Brutalism (A) + 3D Immersive (B)*
*核心理念：数字粗野建筑*
