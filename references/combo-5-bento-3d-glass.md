# 组合6：高端SaaS (Bento + 3D + Liquid Glass)

## 设计理念

**高端SaaS首选** - 这个组合将三大设计趋势完美融合，创造出既专业又现代的视觉体验：

1. **Bento Grid (便当盒网格)** - 提供模块化的组织结构，让复杂信息变得清晰有序
2. **3D Immersive (3D沉浸式)** - 通过透视和深度创造空间层次感
3. **Liquid Glass (液态玻璃)** - 苹果WWDC 2025最新设计语言，带来高端质感

### 三层协同效应

```
┌─────────────────────────────────────────────────────────┐
│                    Liquid Glass (C)                      │
│     透明感 + 折射效果 + 动态响应 + 苹果生态原生          │
├─────────────────────────────────────────────────────────┤
│                   3D Immersive (B)                       │
│     Z轴层次 + 透视变换 + 空间深度 + 悬浮效果            │
├─────────────────────────────────────────────────────────┤
│                    Bento Grid (A)                        │
│     模块化布局 + CSS Grid + 视觉层级 + 响应式          │
└─────────────────────────────────────────────────────────┘
```

**为什么是高端SaaS首选？**
- Bento Grid 让数据密集型界面保持清晰（如Linear、Notion）
- 3D效果暗示产品的高级定位和技术实力
- Liquid Glass 传达苹果级别的品质感和精致度
- **暖石沙色背景**：低饱和、弱对比，类似高级纸张（Munken Paper）、陶瓷质感，营造Aesop护肤品、Cereal杂志般的人文高级感
- **背景退后原则**：前景卡片始终是视觉焦点，背景绝不喧宾夺主
- **去AI化质感**：微噪点纹理避免"过于干净"的AI感
- 三者结合 = 专业 + 现代 + 高端 + 人文温度

---

## 角色定义

### Bento Grid 的角色（结构层）
- **内容组织者**：将复杂功能模块化为易于消化的单元
- **视觉引导者**：通过不同尺寸的卡片建立信息优先级
- **响应式基础**：天然适配各种屏幕尺寸

### 3D Immersive 的角色（空间层）
- **深度创造者**：为平面界面添加Z轴层次
- **交互增强者**：悬停和点击时的3D变换增强反馈感
- **视觉吸引力**：创造令人印象深刻的视觉冲击

### Liquid Glass 的角色（质感层）
- **品质传达者**：苹果级别的精致材质感
- **内容融合者**：透明效果让前景背景自然融合
- **品牌一致性**：在苹果生态中保持原生体验

---

## 风格约束

### 必须遵循

1. **模块化优先**：所有内容必须组织在清晰的模块中
2. **背景退后原则**：背景必须使用低饱和暖色调（暖石沙色），绝不能抢夺前景卡片视觉焦点
3. **透明度层次**：使用多层透明度创造深度（不是单一模糊）
4. **3D适度原则**：3D效果服务于内容，不喧宾夺主
5. **可读性保障**：奶油玻璃卡片（rgba(252,250,247,0.9)）确保文字对比度符合WCAG标准
6. **去AI化质感**：添加微噪点纹理（Noise）提升真实感，避免"过于干净"的AI感
7. **响应式网格**：使用CSS Grid实现自适应布局

### 禁止使用

1. **高饱和渐变背景**：严禁使用蓝紫渐变（AI感）、亮青粉渐变（赛博感），背景应退后
2. **纯白半透明卡片**：必须使用乳白色（rgba(252,250,247,0.9)）营造奶油玻璃效果
3. **过度透明**：避免"玻璃上玻璃"（glass on glass）
4. **纯装饰性3D**：所有3D效果必须有功能目的
5. **硬边框**：使用圆角和模糊边缘，避免生硬边界
6. **高饱和强调色**：避免亮蓝(#0066ff)、亮紫(#7c3aed)，使用低饱和暖棕色系
7. **静态卡片**：每个模块应有微妙的交互反馈
8. **过于干净的背景**：必须通过微噪点纹理增加材质感

---

## 核心要素

### 融合色彩系统 (CSS变量)

```css
:root {
  /* === 基础色调 (暖石沙色系 - 人文高级感) === */
  /* 设计原则：低饱和、弱对比、类似高级纸张(Munken Paper)、陶瓷质感 */
  --base-50: #faf9f7;
  --base-100: #f5f3f0;
  --base-200: #e8e4de;
  --base-300: #d4cfc7;
  --base-400: #a8a39c;
  --base-500: #7a756f;
  --base-600: #5c5852;
  --base-700: #47443f;
  --base-800: #2d2b28;
  --base-900: #1a1917;
  --base-950: #0d0c0b;

  /* === 强调色 (去AI化 - 低饱和暖色调) === */
  /* 避免高饱和蓝紫(AI感)、亮青粉(赛博感过重) */
  --accent-primary: #8b7355;
  --accent-primary-soft: rgba(139, 115, 85, 0.12);
  --accent-secondary: #a08060;
  --accent-tertiary: #6b8e6b;

  /* === 玻璃效果色 (奶油玻璃 - Cream Glass) === */
  /* 使用乳白色而非纯白，营造"奶油玻璃"效果 */
  --glass-white: rgba(252, 250, 247, 0.92);
  --glass-white-hover: rgba(252, 250, 247, 0.98);
  --glass-dark: rgba(0, 0, 0, 0.35);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-highlight: rgba(255, 255, 255, 0.6);
  --glass-shadow: rgba(0, 0, 0, 0.08);

  /* === 3D层次阴影 === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.20);
  --shadow-3d: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  --shadow-3d-hover:
    0 20px 25px -5px rgba(0, 0, 0, 0.15),
    0 8px 10px -6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);

  /* === 模糊与透明 === */
  --blur-sm: 8px;
  --blur-md: 16px;
  --blur-lg: 24px;
  --blur-xl: 40px;

  /* === 动画缓动 === */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* === 圆角系统 === */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
}

/* 暗色模式 - 深暖灰而非纯黑 */
.dark {
  --glass-white: rgba(252, 250, 247, 0.06);
  --glass-white-hover: rgba(252, 250, 247, 0.1);
  --glass-dark: rgba(26, 25, 23, 0.85);
  --glass-border: rgba(255, 255, 255, 0.06);
  --glass-highlight: rgba(255, 255, 255, 0.08);
}
```

### 语义化色彩降级

> **设计理念**：避免"标签化"的廉价感。将高饱和彩色标签改为灰度基底 + 彩色边框/下划线，让内容本身的色板成为视觉焦点。

```css
/* === 灰度基底 + 彩色左侧边框（替代高饱和标签） === */
.label-semantic {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: var(--base-100);
  border-left: 4px solid var(--accent-primary);
  border-radius: 0 6px 6px 0;
  color: var(--base-700);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
}

.label-semantic--a { border-left-color: #10b981; } /* A类 - 绿 */
.label-semantic--b { border-left-color: #f59e0b; } /* B类 - 黄 */
.label-semantic--c { border-left-color: #ec4899; } /* C类 - 粉 */

/* === 灰度基底 + 彩色下划线 === */
.label-underline {
  position: relative;
  padding-bottom: 2px;
  background: transparent;
  color: var(--base-700);
}

.label-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
  border-radius: 1px;
}

.label-underline--a::after { background: #10b981; }
.label-underline--b::after { background: #f59e0b; }
.label-underline--c::after { background: #ec4899; }

/* === 动态色彩提取（环境光晕） === */
.bento-glow-dynamic {
  position: relative;
}

.bento-glow-dynamic::before {
  content: '';
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at center,
    var(--card-accent-color, rgba(0, 102, 255, 0.1)) 0%,
    transparent 70%
  );
  opacity: 0.5;
  z-index: -1;
  border-radius: inherit;
  filter: blur(20px);
}

/* 具体风格的环境光晕 */
.bento-glow--cyberpunk { --card-accent-color: rgba(236, 72, 153, 0.2); }  /* 洋红 */
.bento-glow--memphis { --card-accent-color: rgba(249, 115, 22, 0.2); }   /* 珊瑚红 */
.bento-glow--organic { --card-accent-color: rgba(34, 197, 94, 0.2); }    /* 自然绿 */
.bento-glow--retro { --card-accent-color: rgba(139, 92, 246, 0.2); }     /* 复古紫 */
.bento-glow--minimal { --card-accent-color: rgba(100, 116, 139, 0.15); } /* 极简灰 */
```

### 字体方案

```css
:root {
  /* === 主字体 (现代无衬线) === */
  --font-sans: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               'Inter', 'Noto Sans SC', sans-serif;
  
  /* === 代码字体 === */
  --font-mono: 'SF Mono', 'Fira Code', 'JetBrains Mono', monospace;

  /* === 字号系统 === */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  /* === 字重 === */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* === 行高 === */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

#### 字重梯度优化

> **设计理念**：中文标题字重普遍偏粗，在小尺寸 Bento 单元格中略显臃肿。通过字重梯度建立垂直节奏，增加"空气感"。

```css
/* === 主标题 - 保持 Bold，增加字间距 === */
.heading-primary {
  font-weight: var(--font-bold);
  letter-spacing: 0.02em;
}

/* === 副标题/描述 - 使用 Regular/Medium，提升行高 === */
.body-text {
  font-weight: var(--font-normal);
  line-height: 1.6;
  color: var(--base-600);
}

/* === 标签文字 - SemiBold + 全大写 === */
.label-text {
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--base-500);
}

/* === 小型大写（Small Caps） === */
.label-small-caps {
  font-variant: small-caps;
  font-weight: var(--font-medium);
}

/* === 等宽字体点缀 === */

/* 技术属性关键词 */
.tech-keyword {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--base-100);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--base-700);
}

/* 代码片段 */
.code-inline {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: rgba(0, 102, 255, 0.1);
  color: var(--accent-primary);
  padding: 2px 8px;
  border-radius: 4px;
}

/* === 垂直节奏（Vertical Rhythm） === */
.bento-rhythm {
  --rhythm-base: 1.5rem;
}

.bento-rhythm > * + * {
  margin-top: var(--rhythm-base);
}

.bento-rhythm--compact {
  --rhythm-base: 0.75rem;
}

.bento-rhythm--loose {
  --rhythm-base: 2rem;
}
```

### 布局模式

```css
/* === Bento Grid 基础网格 === */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: 16px;
  padding: 16px;
}

/* 响应式断点 */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}

/* === Bento 卡片尺寸变体 === */
.bento-card {
  /* 默认 1x1 */
  grid-column: span 1;
  grid-row: span 1;
}

.bento-card--wide {
  grid-column: span 2;
}

.bento-card--tall {
  grid-row: span 2;
}

.bento-card--large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-card--hero {
  grid-column: span 3;
  grid-row: span 2;
}

.bento-card--full {
  grid-column: 1 / -1;
}
```

### 高级布局模式

> **设计理念**：打破均匀网格的沉闷，通过非对称布局制造视觉张力。引入"超大锚点卡片"建立呼吸感对比。

```css
/* === 不规则 Bento 布局（打破均匀网格） === */

/* 超大锚点卡片 - 2x2 */
.bento-card--anchor {
  grid-column: span 2;
  grid-row: span 2;
}

/* 横跨三列的 hero 卡片 */
.bento-card--hero-wide {
  grid-column: span 3;
  grid-row: span 2;
}

/* 层叠展示（Overlap）- 模拟玻璃材质的通透与折射 */
.bento-card--overlap {
  position: relative;
  z-index: 2;
  margin-left: -24px;
  margin-top: 24px;
}

/* 封面页不规则布局 */
.bento-cover-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;
}

.bento-cover--data { grid-column: span 2; } /* 2x1 横条展示数据源 */
.bento-cover--count { grid-column: span 1; } /* 1x1 方形展示计数 */
.bento-cover--combo { grid-row: span 2; } /* 1x2 竖条展示组合公式 */

/* 杂志式布局（图文穿插） */
.bento-magazine {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 20px;
}

.bento-magazine--featured { grid-column: span 1; grid-row: span 2; }
```

---

## CSS 效果库

### 3D玻璃卡片 (A+B+C融合)

```css
/* === 基础玻璃卡片 === */
.glass-card {
  position: relative;
  background: var(--glass-white);
  backdrop-filter: blur(var(--blur-md)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--blur-md)) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-3d);
  overflow: hidden;
  transition: all 0.4s var(--ease-out-expo);
}

/* 高光层 (Liquid Glass核心) */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    var(--glass-highlight) 0%,
    transparent 100%
  );
  pointer-events: none;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

/* === 3D透视容器 === */
.bento-container {
  perspective: 1200px;
  perspective-origin: center center;
}

/* === 3D玻璃卡片 (完整融合) === */
.bento-3d-card {
  position: relative;
  background: var(--glass-white);
  backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-3d);
  overflow: hidden;
  
  /* 3D变换准备 */
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 
    transform 0.5s var(--ease-out-expo),
    box-shadow 0.5s var(--ease-out-expo);
}

/* 高光层 */
.bento-3d-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
}

/* 内容层 */
.bento-3d-card > * {
  position: relative;
  z-index: 2;
}

/* 悬停3D效果 */
.bento-3d-card:hover {
  transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
  box-shadow: var(--shadow-3d-hover);
}

/* 光追效果 (可选高级效果) */
.bento-3d-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.15) 0%,
    transparent 50%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 3;
}

.bento-3d-card:hover::after {
  opacity: 1;
}
```

### 模块悬停效果

```css
/* === 3D抬升 + 玻璃高光 === */
.bento-card-hover {
  transition: 
    transform 0.4s var(--ease-out-expo),
    box-shadow 0.4s var(--ease-out-expo),
    background 0.3s;
}

.bento-card-hover:hover {
  transform: translateY(-4px) scale(1.02);
  background: var(--glass-white-hover);
  box-shadow: 
    0 20px 40px -12px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* === 强调卡片 (带色彩边框) === */
.bento-card-accent {
  position: relative;
}

.bento-card-accent::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    var(--accent-secondary) 100%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.bento-card-accent:hover::before {
  opacity: 1;
}

/* === 内部发光效果 === */
.bento-card-glow {
  position: relative;
}

.bento-card-glow::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    var(--accent-primary-soft),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}

.bento-card-glow:hover::after {
  opacity: 1;
}
```

### 分层阴影系统（Elevation Levels）

> **设计理念**：2026 年趋势要求空间 UI（Spatial UI）纵深感。告别单一的模糊阴影，采用多层阴影系统创造 Z 轴层次。

```css
/* === 基础层 - 背景微噪点纹理 (暖石沙色基调) === */
.bento-background-texture {
  position: relative;
}

.bento-background-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

/* === 悬浮层 - 双色阴影（主阴影 + 接触阴影） === */
.shadow-elevated {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),   /* 主阴影 - 柔和扩散 */
    0 1px 2px rgba(0, 0, 0, 0.1),          /* 接触阴影 - 紧密锐利 */
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.shadow-elevated-hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2); /* 顶部内发光 */
}

/* === 强调层 - 交互元素阴影 === */
.shadow-interactive {
  box-shadow:
    0 0 20px rgba(0, 102, 255, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.1);
}

/* === Z轴微位移（视差滚动） === */
.bento-parallax-container {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.bento-parallax-layer {
  will-change: transform;
  transition: transform 0.1s linear;
}

.bento-parallax-back {
  transform: translateZ(-50px) scale(1.1);
}

.bento-parallax-front {
  transform: translateZ(20px);
}
```

### 完整三层融合网格

```css
/* === 完整的高端SaaS风格网格 === */
.bento-saas-container {
  /* 背景层 - 暖石沙色 + 微噪点纹理 (去AI化) */
  /* 设计原则：背景应退后，低饱和暖灰营造人文高级感 */
  background: 
    linear-gradient(160deg, #f5f1eb 0%, #e8e4de 50%, #d4cfc7 100%);
  min-height: 100vh;
  
  /* 3D透视 */
  perspective: 1500px;
  perspective-origin: center top;
}

/* === 微纹理注入 (关键去AI技巧) === */
/* AI生成图像往往"过于干净"，添加噪点能瞬间提升真实感 */
.bento-saas-container::before {
  content: "";
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}

.bento-saas-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(80px, auto);
  gap: 20px;
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
  
  /* 3D空间 */
  transform-style: preserve-3d;
}

/* === 网格项定位 === */
.bento-item--hero {
  grid-column: span 8;
  grid-row: span 3;
}

.bento-item--stats {
  grid-column: span 4;
  grid-row: span 1;
}

.bento-item--feature {
  grid-column: span 4;
  grid-row: span 2;
}

.bento-item--cta {
  grid-column: span 6;
  grid-row: span 2;
}

.bento-item--testimonials {
  grid-column: span 6;
  grid-row: span 2;
}

/* === 响应式 === */
@media (max-width: 1024px) {
  .bento-saas-grid {
    grid-template-columns: repeat(8, 1fr);
  }
  
  .bento-item--hero {
    grid-column: span 8;
  }
}

@media (max-width: 768px) {
  .bento-saas-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 20px;
  }
  
  .bento-item--hero,
  .bento-item--stats,
  .bento-item--feature,
  .bento-item--cta,
  .bento-item--testimonials {
    grid-column: span 4;
  }
}

/* === 玻璃卡片基础样式 === */
.bento-glass-item {
  position: relative;
  background: var(--glass-white);
  backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-3d);
  overflow: hidden;
  padding: 24px;
  
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 
    transform 0.5s var(--ease-out-expo),
    box-shadow 0.5s var(--ease-out-expo);
}

/* 顶部高光 */
.bento-glass-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--glass-highlight),
    transparent
  );
}

/* 悬停效果 */
.bento-glass-item:hover {
  transform: translateY(-6px) translateZ(20px);
  box-shadow: var(--shadow-3d-hover);
}

/* === 内容层级 === */
.bento-content {
  position: relative;
  z-index: 2;
}

.bento-label {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--base-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.bento-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--base-900);
  margin-bottom: 12px;
  line-height: var(--leading-tight);
}

.bento-description {
  font-size: var(--text-base);
  color: var(--base-600);
  line-height: var(--leading-relaxed);
}

.bento-value {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--base-900);
  line-height: 1;
}

.bento-change {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: #10b981; /* green-500 */
}

.bento-change--negative {
  color: #ef4444; /* red-500 */
}
```

### 信息图表化（Information Graphics）

> **设计理念**：Bento Grid 的核心是"一眼即懂"（Glanceable）。用图标化、数据可视化替代纯文字描述，强化数字感知。

```css
/* === 动态计数器样式 === */
.bento-counter {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.bento-counter__value {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: 1;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bento-counter__unit {
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  color: var(--base-500);
}

/* === 迷你图标矩阵（强化数字感知） === */
.bento-dot-matrix {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.bento-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--base-200);
  transition: all 0.3s var(--ease-out-expo);
}

.bento-dot--active {
  background: var(--accent-primary);
  box-shadow: 0 0 8px var(--accent-primary);
}

/* === 网络图缩略图（可视化组合关系） === */
.bento-network-graph {
  position: relative;
  width: 100%;
  height: 120px;
}

.bento-network-node {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: var(--font-semibold);
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.3);
}

.bento-network-line {
  position: absolute;
  height: 2px;
  background: var(--base-200);
  transform-origin: left center;
}

/* === 图标化展示（替代纯文字描述） === */
.bento-icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
}

.bento-icon-card__icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-primary-soft);
  border-radius: var(--radius-lg);
  margin-bottom: 16px;
  font-size: 28px;
}

/* === 实际 Glassmorphism 效果展示（非静态图片） === */
.bento-glass-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 24px;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

.bento-glass-demo__overlay {
  background: var(--glass-white);
  backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 20px;
}

/* === 进度条可视化 === */
.bento-progress {
  height: 8px;
  background: var(--base-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.bento-progress__bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: var(--radius-full);
  transition: width 0.6s var(--ease-out-expo);
}

/* === 迷你柱状图 === */
.bento-mini-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 40px;
}

.bento-mini-bar {
  flex: 1;
  background: var(--accent-primary);
  border-radius: 2px 2px 0 0;
  transition: height 0.4s var(--ease-out-expo);
}

.bento-mini-bar:nth-child(1) { height: 60%; }
.bento-mini-bar:nth-child(2) { height: 80%; }
.bento-mini-bar:nth-child(3) { height: 45%; }
.bento-mini-bar:nth-child(4) { height: 90%; }
.bento-mini-bar:nth-child(5) { height: 70%; }
```

---

## 生图提示词库

### 暖石沙色人文风格（推荐 - 去AI化）

```
Premium SaaS dashboard interface, bento grid layout with cream glass cards, 
3D depth and perspective, warm stone sand color palette, Munken paper texture, 
ceramic material aesthetic, off-white cream glass panels, warm beige gradients,
soft shadows, low saturation earth tones, Aesop skincare aesthetic, 
Cereal magazine minimalism, Japanese minimalism, clean typography, 
humanistic high-end design, screenshot, UI design

--ar 16:9 --style raw --v 6
```

### 模块化仪表板 - 暖调极简

```
Modern SaaS analytics dashboard, bento box grid layout, multiple widget cards 
of varying sizes, 3D floating effect, cream glass material, warm stone background,
Munken paper texture, soft blur background, premium warm light mode, 
taupe and beige accent highlights, low saturation earth tones, 
data charts and metrics, Aesop aesthetic, clean professional design, 8k UI screenshot

--ar 16:9 --style raw --v 6
```

### 产品展示页 - 人文高级感

```
Premium product landing page, bento grid hero section, large feature cards 
with 3D hover effects, cream glass material, warm off-white translucent backgrounds,
Japanese minimalism aesthetic, soft ambient lighting, warm stone sand gradient,
ceramic texture, modern sans-serif typography, SaaS marketing page, 
humanistic high-end aesthetic, Cereal magazine style

--ar 16:9 --style raw --v 6
```

### 移动端界面 - 暖调奶油玻璃

```
iOS app interface design, bento grid home screen, cream glass cards with 
depth effect, 3D parallax layers, warm taupe translucent navigation bar, 
humanistic design language, premium SaaS mobile app, soft shadows and highlights,
warm stone color palette, clean minimalist UI, Aesop aesthetic, iPhone mockup

--ar 9:16 --style raw --v 6
```

### 数据可视化 - 暖调专业

```
Financial dashboard with bento layout, cream glass data cards, 3D charts 
and graphs, warm stone panels, premium fintech aesthetic, real-time metrics 
display, translucent widgets, Japanese minimalism inspired, warm light theme 
with taupe accents, professional trading interface, Munken paper texture

--ar 16:9 --style raw --v 6
```

### 团队协作工具 - 人文温暖

```
Team collaboration workspace, Notion-style bento grid, cream glass effect cards, 
3D depth layers, warm humanistic design, kanban boards, document previews, 
cream white warm theme, ceramic texture, modern productivity tool, 
premium SaaS interface, Aesop aesthetic, Cereal magazine minimalism

--ar 16:9 --style raw --v 6
```

---

## 动画建议

### 3D入场动画

```css
/* === 交错入场动画 === */
@keyframes bento-enter {
  0% {
    opacity: 0;
    transform: translateY(40px) rotateX(-10deg) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
  }
}

.bento-animate-in {
  animation: bento-enter 0.8s var(--ease-out-expo) forwards;
  opacity: 0;
}

/* 交错延迟 */
.bento-animate-in:nth-child(1) { animation-delay: 0ms; }
.bento-animate-in:nth-child(2) { animation-delay: 80ms; }
.bento-animate-in:nth-child(3) { animation-delay: 160ms; }
.bento-animate-in:nth-child(4) { animation-delay: 240ms; }
.bento-animate-in:nth-child(5) { animation-delay: 320ms; }
.bento-animate-in:nth-child(6) { animation-delay: 400ms; }
```

### 空间过渡动画

```css
/* === 视差滚动效果 === */
.bento-parallax-container {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.bento-parallax-layer {
  transition: transform 0.1s linear;
}

.bento-parallax-back {
  transform: translateZ(-100px) scale(1.1);
}

.bento-parallax-front {
  transform: translateZ(50px);
}

/* === 滚动触发动画 === */
@keyframes bento-reveal {
  0% {
    clip-path: inset(100% 0 0 0);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
}

.bento-scroll-reveal {
  animation: bento-reveal 1s var(--ease-out-expo) forwards;
  animation-play-state: paused;
}

.bento-scroll-reveal.is-visible {
  animation-play-state: running;
}
```

### 材质动画

```css
/* === 玻璃折射动画 === */
@keyframes glass-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.bento-shimmer {
  position: relative;
  overflow: hidden;
}

.bento-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: glass-shimmer 3s ease-in-out infinite;
  pointer-events: none;
}

/* === 脉冲发光 === */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 0 0 0 rgba(0, 102, 255, 0.4),
      var(--shadow-3d);
  }
  50% {
    box-shadow: 
      0 0 20px 10px rgba(0, 102, 255, 0),
      var(--shadow-3d);
  }
}

.bento-pulse {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* === 悬浮呼吸 === */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bento-float {
  animation: float 4s ease-in-out infinite;
}
```

### 交互暗示（Interactive Hints）

> **设计理念**：作为 HTML PPT，需要通过视觉暗示传达可交互性。微交互标签、磁吸效果、3D 倾斜、光泽扫过等效果邀请用户探索。

```css
/* === 微交互标签（可点击提示） === */
.bento-interactive-tag {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--base-200);
  border-radius: 50%;
  color: var(--base-600);
  font-size: 12px;
  opacity: 0.6;
  transition: all 0.3s var(--ease-out-expo);
}

.bento-card:hover .bento-interactive-tag {
  opacity: 1;
  transform: translateX(4px);
  background: var(--accent-primary);
  color: white;
}

/* === 磁吸效果（Magnetic Hover） === */
.bento-magnetic {
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s var(--ease-out-expo);
}

.bento-magnetic:hover {
  transform: translateY(-4px) scale(1.02);
  z-index: 10;
  box-shadow: var(--shadow-3d-hover);
}

/* === 3D 倾斜（3D Tilt） === */
.bento-tilt {
  transform-style: preserve-3d;
  transition: transform 0.5s var(--ease-out-expo);
}

.bento-tilt:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px);
}

/* === 光泽扫过（Sheen Effect） === */
.bento-sheen {
  position: relative;
  overflow: hidden;
}

.bento-sheen::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.bento-sheen:hover::after {
  left: 150%;
}

/* === 分层展示（组合方案页） === */
.bento-combo-layers {
  position: relative;
  transform-style: preserve-3d;
}

.bento-combo-layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.4s var(--ease-out-expo),
    transform 0.4s var(--ease-out-expo);
}

.bento-combo-layers:hover .bento-combo-layer {
  opacity: 1;
  transform: translateY(0);
}

.bento-combo-layer--b {
  transform: translateY(10px) translateZ(10px);
}

.bento-combo-layer--c {
  transform: translateY(0) translateZ(20px);
}

/* === 手风琴（Accordion）- 组合方案 === */
.bento-accordion {
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.bento-accordion__item {
  border-bottom: 1px solid var(--base-200);
}

.bento-accordion__header {
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--glass-white);
  transition: background 0.3s;
}

.bento-accordion__header:hover {
  background: var(--glass-white-hover);
}

.bento-accordion__icon {
  transition: transform 0.3s var(--ease-out-expo);
}

.bento-accordion__item.is-open .bento-accordion__icon {
  transform: rotate(180deg);
}

.bento-accordion__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out-expo);
}

.bento-accordion__item.is-open .bento-accordion__content {
  max-height: 500px;
}
```

---

## 组合应用示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>高端SaaS - Bento + 3D + Liquid Glass</title>
  <style>
    /* === 重置与基础 === */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* 色彩系统 - 暖石沙色系（去AI化） */
      --base-50: #faf9f7;
      --base-100: #f5f3f0;
      --base-200: #e8e4de;
      --base-500: #7a756f;
      --base-600: #5c5852;
      --base-900: #1a1917;
      
      /* 强调色 - 低饱和暖色调 */
      --accent-primary: #8b7355;
      --accent-secondary: #a08060;
      --accent-primary-soft: rgba(139, 115, 85, 0.12);
      
      /* 玻璃效果 - 奶油玻璃 */
      --glass-white: rgba(252, 250, 247, 0.92);
      --glass-white-hover: rgba(252, 250, 247, 0.98);
      --glass-border: rgba(255, 255, 255, 0.5);
      --glass-highlight: rgba(255, 255, 255, 0.6);
      
      /* 阴影 - 柔和暖调 */
      --shadow-3d: 
        0 4px 6px -1px rgba(60, 50, 40, 0.08),
        0 2px 4px -2px rgba(60, 50, 40, 0.06),
        0 0 0 1px rgba(255, 255, 255, 0.4);
      --shadow-3d-hover:
        0 20px 25px -5px rgba(60, 50, 40, 0.12),
        0 8px 10px -6px rgba(60, 50, 40, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.5);
      
      /* 其他 */
      --blur-lg: 24px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    }

    body {
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      /* 暖石沙色背景 - 低饱和、弱对比、人文高级感 */
      background: 
        linear-gradient(160deg, #f5f1eb 0%, #e8e4de 50%, #d4cfc7 100%);
      min-height: 100vh;
      color: var(--base-900);
      perspective: 1500px;
    }

    /* 微纹理注入 - 提升真实感 */
    body::after {
      content: "";
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
    }

    /* === Bento 网格 === */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: minmax(80px, auto);
      gap: 20px;
      padding: 40px;
      max-width: 1440px;
      margin: 0 auto;
    }

    /* === 玻璃卡片 === */
    .glass-card {
      position: relative;
      background: var(--glass-white);
      backdrop-filter: blur(var(--blur-lg)) saturate(180%);
      -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(180%);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-3d);
      overflow: hidden;
      padding: 24px;
      
      transform-style: preserve-3d;
      transform: translateZ(0);
      transition: 
        transform 0.5s var(--ease-out-expo),
        box-shadow 0.5s var(--ease-out-expo);
    }

    .glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 100%
      );
      pointer-events: none;
      z-index: 1;
    }

    .glass-card:hover {
      transform: translateY(-6px) translateZ(20px);
      box-shadow: var(--shadow-3d-hover);
    }

    .glass-card > * {
      position: relative;
      z-index: 2;
    }

    /* === 卡片尺寸 === */
    .span-8 { grid-column: span 8; }
    .span-4 { grid-column: span 4; }
    .span-6 { grid-column: span 6; }
    .span-3 { grid-column: span 3; }
    .row-2 { grid-row: span 2; }
    .row-3 { grid-row: span 3; }

    /* === 内容样式 === */
    .label {
      font-size: 12px;
      font-weight: 500;
      color: var(--base-500);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      color: var(--base-900);
      margin-bottom: 12px;
      line-height: 1.25;
    }

    .description {
      font-size: 16px;
      color: var(--base-600);
      line-height: 1.75;
    }

    .value {
      font-size: 36px;
      font-weight: 700;
      color: var(--base-900);
      line-height: 1;
    }

    .change {
      font-size: 14px;
      font-weight: 500;
      color: #10b981;
      margin-top: 4px;
    }

    .change.negative { color: #ef4444; }

    /* === Hero 特殊样式 === */
    .hero-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-title {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .hero-description {
      font-size: 18px;
      max-width: 600px;
    }

    /* === 按钮 === */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s var(--ease-out-expo);
    }

    .btn-primary {
      background: var(--accent-primary);
      color: white;
    }

    .btn-primary:hover {
      background: #6b5a45;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: var(--glass-white);
      backdrop-filter: blur(10px);
      color: var(--base-900);
      border: 1px solid var(--glass-border);
    }

    .btn-secondary:hover {
      background: var(--glass-white-hover);
    }

    /* === 统计网格 === */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-top: 24px;
    }

    .stat-item {
      padding: 16px;
      background: rgba(252, 250, 247, 0.6);
      border-radius: 12px;
    }

    /* === 特性图标 === */
    .feature-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-primary-soft);
      border-radius: 12px;
      margin-bottom: 16px;
      font-size: 24px;
    }

    /* === 动画 === */
    @keyframes bento-enter {
      0% {
        opacity: 0;
        transform: translateY(40px) rotateX(-10deg) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0) scale(1);
      }
    }

    .glass-card {
      animation: bento-enter 0.8s var(--ease-out-expo) forwards;
      opacity: 0;
    }

    .glass-card:nth-child(1) { animation-delay: 0ms; }
    .glass-card:nth-child(2) { animation-delay: 80ms; }
    .glass-card:nth-child(3) { animation-delay: 160ms; }
    .glass-card:nth-child(4) { animation-delay: 240ms; }
    .glass-card:nth-child(5) { animation-delay: 320ms; }
    .glass-card:nth-child(6) { animation-delay: 400ms; }
    .glass-card:nth-child(7) { animation-delay: 480ms; }

    /* === 响应式 === */
    @media (max-width: 1024px) {
      .bento-grid {
        grid-template-columns: repeat(8, 1fr);
      }
      .span-8 { grid-column: span 8; }
      .span-4 { grid-column: span 4; }
      .span-6 { grid-column: span 4; }
      .span-3 { grid-column: span 4; }
    }

    @media (max-width: 768px) {
      .bento-grid {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 20px;
      }
      .span-8, .span-4, .span-6, .span-3 {
        grid-column: span 1;
      }
      .hero-title {
        font-size: 32px;
      }
    }
  </style>
</head>
<body>
  <div class="bento-grid">
    <!-- Hero Card -->
    <div class="glass-card hero-card span-8 row-3">
      <span class="label">全新发布</span>
      <h1 class="hero-title">打造下一代<br>高端 SaaS 产品</h1>
      <p class="description hero-description">
        融合 Bento Grid 模块化布局、3D 沉浸式体验和苹果 Liquid Glass 设计语言，
        为您的产品带来前所未有的视觉体验。
      </p>
      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-primary">立即开始</button>
        <button class="btn btn-secondary">了解更多</button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="glass-card span-4">
      <span class="label">月活用户</span>
      <div class="value">2.4M</div>
      <div class="change">+12.5% 较上月</div>
    </div>

    <div class="glass-card span-4">
      <span class="label">收入增长</span>
      <div class="value">$8.2M</div>
      <div class="change">+28.3% 年同比</div>
    </div>

    <!-- Feature Cards -->
    <div class="glass-card span-4 row-2">
      <div class="feature-icon">📊</div>
      <h3 class="title">实时数据分析</h3>
      <p class="description">
        强大的数据可视化引擎，支持实时监控和智能洞察。
      </p>
    </div>

    <div class="glass-card span-4 row-2">
      <div class="feature-icon">🔐</div>
      <h3 class="title">企业级安全</h3>
      <p class="description">
        SOC 2 Type II 认证，端到端加密，满足最严格的安全要求。
      </p>
    </div>

    <div class="glass-card span-4 row-2">
      <div class="feature-icon">⚡</div>
      <h3 class="title">极速部署</h3>
      <p class="description">
        5 分钟完成集成，支持主流框架和云平台。
      </p>
    </div>

    <!-- Testimonial Card -->
    <div class="glass-card span-6 row-2">
      <span class="label">客户评价</span>
      <p class="description" style="font-size: 18px; font-style: italic; margin: 16px 0;">
        "这是我们用过最好的 SaaS 产品。界面设计令人惊叹，
        团队协作效率提升了 3 倍。"
      </p>
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 40px; height: 40px; background: var(--base-200); border-radius: 50%;"></div>
        <div>
          <div style="font-weight: 600;">张明</div>
          <div style="font-size: 14px; color: var(--base-500);">CTO, 科技创新公司</div>
        </div>
      </div>
    </div>

    <!-- CTA Card -->
    <div class="glass-card span-6 row-2" style="background: linear-gradient(135deg, rgba(139, 115, 85, 0.08), rgba(160, 128, 96, 0.08));">
      <span class="label">限时优惠</span>
      <h3 class="title">新用户专享 30 天免费试用</h3>
      <p class="description">
        无需信用卡，即刻体验全部功能。专业团队 1 对 1 支持。
      </p>
      <button class="btn btn-primary" style="margin-top: 16px;">免费试用</button>
    </div>
  </div>

  <script>
    // 鼠标追踪光效
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  </script>
</body>
</html>
```

---

## 苹果生态适配

### Liquid Glass 在苹果设备上的表现

```css
/* === Safari 特定优化 === */
@supports (-webkit-backdrop-filter: blur(1px)) {
  .glass-card {
    -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(180%);
    backdrop-filter: blur(var(--blur-lg)) saturate(180%);
  }
}

/* === 减少动态效果 (辅助功能) === */
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    animation: none;
    opacity: 1;
    transform: none !important;
    transition: none !important;
  }
}

/* === 高对比度模式 === */
@media (prefers-contrast: high) {
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid var(--base-900);
  }
  
  .description {
    color: var(--base-900);
  }
}

/* === 暗色模式适配 === */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-white: rgba(252, 250, 247, 0.06);
    --glass-white-hover: rgba(252, 250, 247, 0.1);
    --glass-border: rgba(255, 255, 255, 0.06);
    --glass-highlight: rgba(255, 255, 255, 0.08);
  }
  
  body {
    /* 深色模式：深暖灰而非纯黑，保持低饱和温暖调性 */
    background: 
      linear-gradient(160deg, #2d2b28 0%, #1a1917 50%, #0d0c0b 100%);
    color: #f5f3f0;
  }
  
  .title, .hero-title, .value {
    color: #fafafa;
  }
  
  .description {
    color: #a3a3a3;
  }
}

/* === visionOS 适配 (Vision Pro) === */
@supports (environment(vision-inset)) {
  .glass-card {
    /* 增强透明度以适应空间计算 */
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}

/* === 触摸设备优化 === */
@media (hover: none) {
  .glass-card:hover {
    transform: none;
    box-shadow: var(--shadow-3d);
  }
  
  .glass-card:active {
    transform: scale(0.98);
  }
}
```

### 苹果设备特定增强

```css
/* === iPhone 刘海屏安全区域 === */
@supports (padding: env(safe-area-inset-top)) {
  .bento-grid {
    padding-top: calc(40px + env(safe-area-inset-top));
    padding-bottom: calc(40px + env(safe-area-inset-bottom));
    padding-left: calc(40px + env(safe-area-inset-left));
    padding-right: calc(40px + env(safe-area-inset-right));
  }
}

/* === iPad 分屏模式 === */
@media (max-width: 768px) and (aspect-ratio < 1/1) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* === Mac Retina 优化 === */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .glass-card {
    border-width: 0.5px;
  }
}
```

---

## 代表案例

### Apple 官网
- **网址**: apple.com
- **特点**: Bento Grid 布局展示产品，Liquid Glass 导航栏
- **学习要点**: 模块尺寸变化、留白控制、图片与文字的平衡

### Linear
- **网址**: linear.app
- **特点**: 极简 Bento 布局，微妙 3D 效果，深色主题
- **学习要点**: 高对比度设计、功能导向的模块划分

### Notion
- **网址**: notion.so
- **特点**: 卡片式布局，玻璃效果，渐进式功能展示
- **学习要点**: 内容层次、模板展示、团队协作界面

### Raycast
- **网址**: raycast.com
- **特点**: 暗色主题 Bento，3D 悬浮效果，开发者工具美学
- **学习要点**: 命令面板设计、快捷键展示、扩展生态

### Vercel
- **网址**: vercel.com
- **特点**: 技术感 Bento 布局，渐变背景，部署状态展示
- **学习要点**: 开发者友好设计、实时状态、技术文档集成

---

## 页面重构建议

基于设计诊断报告，以下是具体页面的重构方案：

| 页面 | 现状 | 建议重构 |
|------|------|----------|
| **封面页** | 右侧 3 个等大数据卡片 | **不规则 Bento**："35+"做成 2x1 横条（数据源 Logo 墙），"8"做成 1x1 方形（微缩色板），"15+"做成 1x2 竖条（组合公式） |
| **核心发现** | 2x2 网格，纯文字 | **杂志式布局**：左大图（Naive Design 手绘示例）+ 右三小图（Liquid Glass、Y2K、3D UI），图文穿插 |
| **C类滤镜库** | 3 列等宽 | **层叠展示**：Glassmorphism 和 Liquid Glass 卡片部分重叠（Overlap），模拟玻璃材质的通透与折射 |
| **组合方案** | 2x2 网格 | **交互式手风琴**：默认收起，点击展开详细组合逻辑，节省空间并增加参与感 |

### 封面页重构示例

```
┌─────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────┐  ┌─────────────────┐ │
│  │                                   │  │       8         │ │
│  │     35+ 信息源 Logo 墙            │  │   [●●●●]       │ │
│  │     [logo][logo][logo][logo]      │  │   [●●●●]       │ │
│  │                                   │  └─────────────────┘ │
│  └───────────────────────────────────┘  ┌─────────────────┐ │
│                                         │                 │ │
│                                         │   15+ 组合      │ │
│                                         │   A + B = ?     │ │
│                                         │   A + B + C = ? │ │
│                                         │                 │ │
│                                         └─────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### C类滤镜库层叠示例

```
┌─────────────────────────────────────────┐
│                                         │
│   ┌─────────────────────────────┐       │
│   │                             │   ┌─────────────────────┐
│   │   Glassmorphism            │   │                     │
│   │   毛玻璃 + 透明度           │   │   Liquid Glass      │
│   │                             │   │   动态折射          │
│   └─────────────────────────────┘   │                     │
│                                     └─────────────────────┘
│                                         ↑ 部分重叠      │
└─────────────────────────────────────────┘
```

---

## 参考来源

### 官方文档
- [Apple WWDC 2025 - Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)
- [Apple Developer - Liquid Glass Documentation](https://developer.apple.com/design/human-interface-guidelines/liquid-glass)
- [CSS-Tricks - Getting Clarity on Apple's Liquid Glass](https://css-tricks.com/getting-clarity-on-apples-liquid-glass/)

### Bento Grid 资源
- [Speckyboy - 8 CSS Snippets for Bento Grid Layouts](https://speckyboy.com/css-bento-grid-layouts/)
- [Senorit - Bento Grid Design Trend 2026](https://senorit.de/en/blog/bento-grid-design-trend-2025)
- [Prototypr - Embracing the Bento Grid](https://blog.prototypr.io/embracing-the-bento-grid-a-modern-approach-to-ui-layouts-4a15f618e751)

### 3D 与 Glassmorphism
- [Josh Comeau - Next-level Frosted Glass](https://www.joshwcomeau.com/css/backdrop-filter/)
- [LogRocket - Liquid Glass Effects with CSS and SVG](https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/)
- [OpenReplay - Create 3D Magic with CSS Grid](https://blog.openreplay.com/transform-your-website--create-3d-magic-with-css-grid/)

### 设计趋势
- [Damien Kloot - Top 25 Web Design Trends 2025](https://damienkloot.com/top-25-web-design-trends-2025/)
- [Mukesh K Designs - Bento Grid Design Inspiration](https://mukeshkdesigns.com/blogs/bento-grid-design-inspiration/)
- [WriterDock - 7 UI Trends Dominating Web Design 2026](https://writerdock.in/blog/bento-grids-and-beyond-7-ui-trends-dominating-web-design-2026)

---

*文档生成日期: 2026-04-04*
*版本: 1.0*
*适用场景: 高端 SaaS 产品、数据仪表板、产品展示页*
