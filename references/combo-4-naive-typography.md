# 组合5：天真实验 (Naive + Experimental Typography)

> A+B 融合文档 | 2026 UI Aesthetics Collection
> 主风格(A): Naive Design | 维度增强(B): Experimental Typography
> 质感滤镜(C): **无** - 保持纯粹不加滤镜

---

## 设计理念

### 为什么不加滤镜？

**"保持纯粹"** 是这个组合的核心哲学。

Naive Design 的手绘感与 Experimental Typography 的离格排版，两者本身就具有强烈的视觉个性。添加玻璃质感、模糊滤镜或阴影效果，反而会：

1. **削弱手绘感的真诚** - 手绘的魅力在于"直接"和"不加修饰"
2. **干扰排版的张力** - 实验性排版依靠位置、角度、大小创造冲击，滤镜是干扰
3. **违背 Anti-Perfection 精神** - Naive Design 是对过度修饰的反叛

**设计信条**：让不完美自己说话，不需要滤镜来"美化"。

---

## 角色定义

你是 **天真实验风格专家**，融合 Naive Design 的"故意不完美"与 Experimental Typography 的"打破网格"。

**双重特质**：

| Naive 贡献 | Experimental 贡献 |
|------------|-------------------|
| 手绘感线条和形状 | 离格、不对称的排版 |
| 明快、童真的色彩 | 字体大小、角度的戏剧化 |
| 贴纸式卡片布局 | 字符级别的错位和旋转 |
| 温暖、人性化的触感 | 视觉张力和动感 |

**核心信念**：
- 完美不是目标，真诚才是
- 规则是用来打破的——但要"有意地"打破
- 每一个"不完美"都应该是深思熟虑的选择

---

## 风格约束

### 必须遵循

- [x] **保持手绘/手作感的视觉语言** - 边框不规则、线条抖动
- [x] **使用大胆、扁平的色彩** - 明快原色，拒绝渐变
- [x] **元素有意识地"错位"** - 轻微旋转、不对称布局
- [x] **保留充足的留白** - 让"粗糙"有呼吸空间
- [x] **文字与图形保持清晰可读** - 装饰性文字可以极端，正文必须清晰
- [x] **使用原生 CSS 能力** - transform, mix-blend-mode, border-radius
- [x] **一个页面最多 1-2 个实验性排版元素** - 适度使用

### 禁止使用

- [ ] **渐变填充**（Gradient fills）
- [ ] **复杂阴影**（Drop shadows - 除非手绘风格的硬边阴影）
- [ ] **光泽/高光效果**
- [ ] **完美的几何对称**
- [ ] **网格严格对齐**
- [ ] **CSS filter 属性**（blur, contrast, brightness 等）
- [ ] **noise/grain 纹理叠加**
- [ ] **玻璃质感效果**（glassmorphism）
- [ ] **任何形式的"美化"滤镜**

---

## 核心要素

### 融合色彩系统 (CSS变量)

明快原色系，不加灰度滤镜，保持纯粹的饱和度：

```css
:root {
  /* ===== 主色系 - 明亮、大胆、略带童真 ===== */
  --naive-primary: #FF6B6B;       /* 珊瑚红 - 温暖活力 */
  --naive-secondary: #4ECDC4;     /* 薄荷绿 - 清新对比 */
  --naive-accent: #FFE66D;        /* 柠檬黄 - 阳光感 */
  --naive-highlight: #95E1D3;     /* 浅薄荷 - 柔和点缀 */

  /* ===== 功能色 ===== */
  --naive-success: #A8E6CF;
  --naive-warning: #FFD93D;
  --naive-error: #FF8B94;

  /* ===== 中性色 - 温暖的米色系 ===== */
  --naive-cream: #FFF8E7;         /* 奶油白 - 主背景 */
  --naive-sand: #F5E6D3;          /* 沙色 - 次背景 */
  --naive-paper: #FDF6E3;         /* 纸张色 - 卡片背景 */
  --naive-charcoal: #2D3436;      /* 炭黑 - 主要文字 */

  /* ===== 边框/线条色 ===== */
  --naive-line: #2D3436;          /* 手绘线条 */
  --naive-line-light: #636E72;    /* 浅色线条 */

  /* ===== 实验性排版专用 ===== */
  --type-shadow: #FFE66D;         /* 文字阴影/叠影 */
  --type-outline: #2D3436;        /* 描边色 */
}
```

### 字体方案

手写字体 + 实验性排版的组合：

```css
:root {
  /* ===== 主字体 - 手写感 ===== */
  --font-display: 'Caveat', 'Patrick Hand', 'Indie Flower', cursive;

  /* ===== 辅助字体 - 略带不规则的 sans ===== */
  --font-body: 'Nunito', 'Quicksand', 'Baloo 2', sans-serif;

  /* ===== 强调字体 - 粗犷的手绘感 ===== */
  --font-accent: 'Bangers', 'Luckiest Guy', 'Fredoka One', cursive;

  /* ===== 可变字体 - 用于动态效果 ===== */
  --font-variable: 'Inter Variable', 'Roboto Flex', system-ui;
}

/* Google Fonts 引入 */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Patrick+Hand&family=Bangers&family=Nunito:wght@400;700&family=Inter:wght@300;400;700;900&display=swap');
```

### 布局模式

离格、不对称、手绘感的布局：

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         ╭──────────────────╮                    │
│    ←───→│  略微倾斜的标题  │←── 有意的错位     │
│         ╰──────────────────╯                    │
│                                                 │
│    ┌─────────────┐   ┌─────────────┐            │
│    │  贴纸卡片1  │   │  贴纸卡片2  │ ← 不对齐   │
│    │  rotate(-2) │   │  rotate(1)  │            │
│    └─────────────┘   └─────────────┘            │
│                                                 │
│              ┌────────────────────┐             │
│              │                    │  ← 离格元素 │
│      ────────│     内容区域       │             │
│      手绘波浪│                    │             │
│      分隔线  └────────────────────┘             │
│                                                 │
│   字     母     级     别     错     位         │
│   ↓     ↓      ↓      ↓      ↓      ↓          │
│   字   母       级      别    错      位        │
│                                                 │
└─────────────────────────────────────────────────┘
```

**布局特点**：
- 使用不对称的边距和间距
- 元素可以有轻微旋转（-5° ~ 5°）
- 贴纸式卡片布局（随机错落感）
- 充足的留白
- 文字可以"溢出"容器边界

---

## 自动适应机制 (CRITICAL)

**问题**：Naive Design 的手绘风格元素（不规则边框、阴影、旋转）占用额外空间，容易导致内容溢出 slide 边界。

**解决方案**：使用 JavaScript 自动检测并缩放内容。

### 方案 A：Slide 内容自动缩放（推荐）

在 HTML 的 `<script>` 中添加以下代码：

```javascript
// 在 SlidePresentation 类中添加
fitSlideContent() {
    this.slides.forEach(slide => {
        const content = slide.querySelector('.slide-content');
        if (!content) return;

        // 重置缩放
        content.style.transform = '';
        content.style.transformOrigin = 'center center';

        // 检测是否溢出
        const isOverflowing = content.scrollHeight > content.clientHeight;

        if (isOverflowing) {
            // 计算需要的缩放比例
            const scale = content.clientHeight / content.scrollHeight;
            // 保留 5% 安全边距
            const safeScale = Math.max(0.5, scale * 0.95);

            content.style.transform = `scale(${safeScale})`;
            console.log(`Slide scaled to ${(safeScale * 100).toFixed(0)}%`);
        }
    });
}

// 在构造函数中调用
constructor() {
    // ... 现有代码 ...

    // 页面加载完成后执行自适应
    window.addEventListener('load', () => this.fitSlideContent());
    window.addEventListener('resize', () => this.fitSlideContent());
}
```

### 方案 B：CSS Flexbox 收缩策略

在 naive design 风格的 CSS 中添加：

```css
/* 让内容可以自动收缩 */
.slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 100%;
    overflow: hidden;
    min-height: 0; /* CRITICAL: 允许 flex 收缩 */
}

/* 子元素可收缩 */
.slide-content > * {
    flex-shrink: 1;
    min-height: 0;
}

/* 卡片网格自动收缩 */
.sticker-grid {
    flex-shrink: 1;
    min-height: 0;
}

/* 卡片内容可收缩 */
.sticker-card {
    flex-shrink: 1;
    min-height: min-content;
}

.sticker-card p {
    flex-shrink: 1;
}
```

### 方案 C：紧凑模式（用于高密度内容页）

对于内容特别多的 slide，添加 `compact` class：

```html
<section class="slide" data-slide="12">
    <div class="slide-content compact">
        <!-- 高密度内容 -->
    </div>
</section>
```

```css
/* 紧凑模式 CSS */
.slide-content.compact {
    --slide-padding: clamp(1rem, 2.5vw, 2rem);
    --content-gap: clamp(0.5rem, 1.2vw, 1rem);
    --element-gap: clamp(0.3rem, 0.8vw, 0.6rem);
}

.slide-content.compact .sticker-card {
    padding: clamp(0.6rem, 1.2vw, 1rem);
}

.slide-content.compact .sticker-card h3 {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
}

.slide-content.compact .sticker-card p {
    font-size: clamp(0.7rem, 1.2vw, 0.9rem);
    line-height: 1.3;
}
```

---

## CSS 效果库

### 手绘离格标题 (A+B融合)

不规则边框 + 打破网格的排版：

```css
/* ===== 基础手绘离格标题 ===== */
.naive-off-grid-title {
  /* 手绘边框 */
  background: var(--naive-cream);
  border: 3px solid var(--naive-line);
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  padding: 1rem 2rem;

  /* 离格排版 */
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 10vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: var(--naive-charcoal);

  /* 打破网格 */
  transform: rotate(-2deg) translateX(-10px);
  display: inline-block;
}

/* ===== 带叠影的离格标题 ===== */
.off-grid-shadow {
  position: relative;
}

.off-grid-shadow::before {
  content: attr(data-text);
  position: absolute;
  top: 5px;
  left: 8px;
  color: var(--type-shadow);
  z-index: -1;
  font-family: inherit;
  font-size: inherit;
}

/* ===== 极端手绘效果 ===== */
.sketchy-title {
  border-radius: 2% 96% 1% 99% / 99% 2% 98% 1%;
  border: 3px solid var(--naive-line);
  transform: rotate(-3deg);
}
```

### 歪斜字行效果

实验性字体变形，通过 transform 实现（不用 filter）：

```css
/* ===== 整体歪斜字行 ===== */
.skewed-line {
  transform: skewX(-5deg);
  display: inline-block;
  font-family: var(--font-accent);
  font-size: clamp(1.5rem, 6vw, 4rem);
}

/* ===== 反向歪斜保持可读 ===== */
.skewed-line span {
  display: inline-block;
  transform: skewX(5deg); /* 抵消父元素歪斜 */
}

/* ===== 字母级别随机旋转 ===== */
.chaotic-letters span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.chaotic-letters span:nth-child(3n+1) {
  transform: rotate(-2deg) translateY(3px);
}

.chaotic-letters span:nth-child(3n+2) {
  transform: rotate(1.5deg) translateY(-2px);
}

.chaotic-letters span:nth-child(3n) {
  transform: rotate(-1deg) translateX(2px);
}

.chaotic-letters span:hover {
  transform: rotate(0deg) scale(1.3);
}

/* ===== 波浪字行 ===== */
.wavy-text span {
  display: inline-block;
  animation: wave 1.5s ease-in-out infinite;
}

.wavy-text span:nth-child(1) { animation-delay: 0s; }
.wavy-text span:nth-child(2) { animation-delay: 0.1s; }
.wavy-text span:nth-child(3) { animation-delay: 0.2s; }
.wavy-text span:nth-child(4) { animation-delay: 0.3s; }
.wavy-text span:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-3deg); }
}
```

### 纯粹贴纸效果

不加滤镜的手绘贴纸：

```css
/* ===== 基础贴纸 ===== */
.pure-sticker {
  position: relative;
  padding: 1rem 1.5rem;
  background: var(--naive-accent);
  border: 3px solid var(--naive-line);
  
  /* 硬边阴影 - 手绘风格 */
  box-shadow: 4px 4px 0 var(--naive-line);
  
  transform: rotate(-2deg);
  transition: transform 0.2s ease;
  display: inline-block;
}

.pure-sticker:hover {
  transform: rotate(0deg) scale(1.02);
}

/* ===== 多层贴纸堆叠 ===== */
.sticker-stack {
  position: relative;
  background: var(--naive-primary);
  border: 3px solid var(--naive-line);
  box-shadow: 4px 4px 0 var(--naive-line);
}

.sticker-stack::before,
.sticker-stack::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--naive-line);
  z-index: -1;
}

.sticker-stack::before {
  top: 5px;
  left: 5px;
  transform: rotate(2deg);
  background: var(--naive-secondary);
}

.sticker-stack::after {
  top: 10px;
  left: 10px;
  transform: rotate(4deg);
  background: var(--naive-highlight);
}

/* ===== 便签贴纸 ===== */
.note-sticker {
  background: var(--naive-paper);
  border: 2px solid var(--naive-line);
  box-shadow: 3px 3px 0 var(--naive-line);
  transform: rotate(1deg);
  padding: 1.5rem;
  position: relative;
}

/* 折角效果 */
.note-sticker::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, 
    var(--naive-paper) 50%, 
    var(--naive-sand) 50%
  );
  border-left: 2px solid var(--naive-line);
  border-bottom: 2px solid var(--naive-line);
}
```

### 描边文字效果

纯粹的描边效果，不使用 filter：

```css
/* ===== 纯描边文字 ===== */
.stroke-text {
  color: transparent;
  -webkit-text-stroke: 3px var(--naive-line);
  font-size: clamp(4rem, 15vw, 10rem);
  font-family: var(--font-accent);
  font-weight: 700;
  line-height: 0.85;
}

/* ===== 填充 + 描边 ===== */
.filled-stroke-text {
  color: var(--naive-primary);
  -webkit-text-stroke: 3px var(--naive-line);
  paint-order: stroke fill;
  font-size: clamp(3rem, 12vw, 8rem);
  font-family: var(--font-accent);
}

/* ===== 描边 + 离格 ===== */
.off-grid-stroke {
  color: transparent;
  -webkit-text-stroke: 2px var(--naive-line);
  transform: rotate(-3deg) translateX(-20px);
  display: inline-block;
}

/* ===== 混合模式文字 ===== */
.blended-text {
  mix-blend-mode: multiply;
  color: var(--naive-secondary);
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 5rem);
}
```

### 手绘边框变体

```css
/* ===== 波浪边框 ===== */
.wavy-border {
  border: 3px solid var(--naive-line);
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
}

/* ===== 极端不规则 ===== */
.wild-border {
  border: 3px solid var(--naive-line);
  border-radius: 95% 4% 92% 5% / 4% 95% 6% 95%;
}

/* ===== 柔和不规则 ===== */
.soft-wobble {
  border: 2px solid var(--naive-line);
  border-radius: 68% 32% 66% 34% / 35% 61% 39% 65%;
}

/* ===== 圆角不对称 ===== */
.asymmetric-round {
  border: 2px solid var(--naive-line);
  border-radius: 20px 5px 30px 10px;
}
```

---

## 生图提示词库

### 手绘风格背景

```
naive hand-drawn doodle background, cream paper texture,
scattered geometric shapes, wobbly lines, pastel colors,
childlike simplicity, minimal composition, white space,
flat design, no gradients, no shadows
```

```
playful hand-drawn pattern, uneven polka dots, scribbled circles,
primary colors on kraft paper, organic imperfect shapes,
whimsical texture, bold black outlines, flat colors,
anti-perfection aesthetic
```

### 离格排版元素

```
experimental typography layout, off-grid text placement,
scattered letters, tilted headlines, hand-drawn style,
playful composition, asymmetric design, primary colors,
no filters, pure flat design
```

```
broken grid typography, scattered sticker text elements,
wobbly hand-drawn borders, childlike lettering,
bold colors, uneven spacing, chaotic but balanced composition,
marker pen aesthetic
```

### 贴纸装饰元素

```
hand-drawn sticker elements, doodle arrows, wavy underlines,
sketchy stars and hearts, uneven borders, marker-style icons,
playful illustration style, bold black outlines, flat colors,
naive design aesthetic
```

```
naive style decorative stickers, hand-scribbled frames,
wobbly rectangle shapes, childlike drawing aesthetic,
crayon-like texture, simple geometric doodles, cheerful colors,
paper craft feel, no drop shadows
```

### 场景组合

```
naive experimental design landing page, hand-drawn UI elements,
off-grid typography, scattered sticker cards, cream background,
whimsical composition, imperfect alignment, warm friendly vibe,
pure flat design without filters
```

```
childlike web interface design, doodle-style buttons,
scribbled icons, uneven grid layout, pastel color palette,
paper-like texture, tilted text blocks, hand-drawn borders,
authentic imperfect aesthetic
```

---

## 动画建议

### 抖动效果

```css
/* ===== 轻微抖动 ===== */
@keyframes wobble {
  0%, 100% { transform: rotate(-0.5deg); }
  25% { transform: rotate(0.5deg); }
  50% { transform: rotate(-0.3deg); }
  75% { transform: rotate(0.3deg); }
}

.wobble {
  animation: wobble 0.5s ease-in-out infinite;
}

/* ===== iOS 风格抖动 ===== */
@keyframes jiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
}

.jiggle {
  animation: jiggle 0.15s ease-in-out infinite;
}
```

### 弹跳效果

```css
/* ===== 贴纸"贴上"效果 ===== */
@keyframes stick-on {
  0% {
    transform: scale(0.5) rotate(-10deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.1) rotate(1deg);
  }
  100% {
    transform: scale(1) rotate(-2deg);
    opacity: 1;
  }
}

.stick-in {
  animation: stick-on 0.4s ease-out forwards;
}

/* ===== 弹跳悬停 ===== */
@keyframes bounce-hover {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(0deg); }
}

.bounce-hover:hover {
  animation: bounce-hover 0.4s ease;
}
```

### 可变字体动画

```css
/* ===== 字重脉动 ===== */
@keyframes type-pulse {
  0%, 100% {
    font-variation-settings: 'wght' 400;
    letter-spacing: -0.02em;
  }
  50% {
    font-variation-settings: 'wght' 700;
    letter-spacing: 0.03em;
  }
}

.pulsing-type {
  font-family: var(--font-variable);
  animation: type-pulse 2s ease-in-out infinite;
}

/* ===== 字宽呼吸 ===== */
@keyframes width-breathe {
  0%, 100% { font-variation-settings: 'wdth' 100; }
  50% { font-variation-settings: 'wdth' 115; }
}

.breathing-type {
  font-family: var(--font-variable);
  animation: width-breathe 3s ease-in-out infinite;
}
```

### 手绘"画出来"效果

```css
/* SVG 线条绘制动画 */
@keyframes draw {
  to { stroke-dashoffset: 0; }
}

.draw-in path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 1.5s ease-out forwards;
}
```

---

## 组合应用示例

### 完整 HTML/CSS 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>天真实验 - Naive + Experimental Typography</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Bangers&family=Nunito:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --naive-primary: #FF6B6B;
      --naive-secondary: #4ECDC4;
      --naive-accent: #FFE66D;
      --naive-highlight: #95E1D3;
      --naive-cream: #FFF8E7;
      --naive-paper: #FDF6E3;
      --naive-charcoal: #2D3436;
      --naive-line: #2D3436;

      --font-display: 'Caveat', cursive;
      --font-accent: 'Bangers', cursive;
      --font-body: 'Nunito', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-body);
      background: var(--naive-cream);
      color: var(--naive-charcoal);
      min-height: 100vh;
      padding: 2rem;
    }

    /* ===== 离格标题区 ===== */
    .hero {
      text-align: center;
      padding: 4rem 1rem;
      position: relative;
    }

    .hero-title {
      font-family: var(--font-accent);
      font-size: clamp(3rem, 15vw, 8rem);
      line-height: 0.85;
      color: var(--naive-charcoal);
      transform: rotate(-2deg);
      display: inline-block;
      position: relative;
    }

    .hero-title::before {
      content: '天真实验';
      position: absolute;
      top: 6px;
      left: 8px;
      color: var(--naive-accent);
      z-index: -1;
    }

    .hero-subtitle {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      margin-top: 1rem;
      transform: rotate(1deg) translateX(20px);
      color: var(--naive-secondary);
    }

    /* ===== 波浪字母效果 ===== */
    .wavy-letters {
      display: flex;
      justify-content: center;
      gap: 0.1em;
      margin: 2rem 0;
      font-family: var(--font-display);
      font-size: 2rem;
    }

    .wavy-letters span {
      display: inline-block;
      animation: wave 1.5s ease-in-out infinite;
    }

    .wavy-letters span:nth-child(1) { animation-delay: 0s; }
    .wavy-letters span:nth-child(2) { animation-delay: 0.1s; }
    .wavy-letters span:nth-child(3) { animation-delay: 0.2s; }
    .wavy-letters span:nth-child(4) { animation-delay: 0.3s; }
    .wavy-letters span:nth-child(5) { animation-delay: 0.4s; }
    .wavy-letters span:nth-child(6) { animation-delay: 0.5s; }
    .wavy-letters span:nth-child(7) { animation-delay: 0.6s; }

    @keyframes wave {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
    }

    /* ===== 贴纸卡片网格 ===== */
    .sticker-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .sticker-card {
      background: var(--naive-paper);
      border: 3px solid var(--naive-line);
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      padding: 2rem;
      width: 280px;
      position: relative;
      box-shadow: 5px 5px 0 var(--naive-line);
      transition: transform 0.2s ease;
    }

    .sticker-card:nth-child(1) { transform: rotate(-2deg); }
    .sticker-card:nth-child(2) { transform: rotate(1deg); background: var(--naive-accent); }
    .sticker-card:nth-child(3) { transform: rotate(-1deg); background: var(--naive-secondary); }

    .sticker-card:hover {
      transform: rotate(0deg) scale(1.02);
    }

    .sticker-card h3 {
      font-family: var(--font-display);
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      transform: rotate(-1deg);
    }

    .sticker-card p {
      font-size: 1rem;
      line-height: 1.5;
    }

    /* ===== 描边装饰文字 ===== */
    .stroke-deco {
      position: absolute;
      font-family: var(--font-accent);
      font-size: 8rem;
      color: transparent;
      -webkit-text-stroke: 2px var(--naive-line);
      opacity: 0.15;
      pointer-events: none;
      z-index: -1;
    }

    .stroke-deco.left {
      top: 20%;
      left: -5%;
      transform: rotate(-90deg);
    }

    .stroke-deco.right {
      bottom: 10%;
      right: -5%;
      transform: rotate(90deg);
    }

    /* ===== 纯粹贴纸按钮 ===== */
    .naive-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: var(--naive-primary);
      border: 3px solid var(--naive-line);
      box-shadow: 4px 4px 0 var(--naive-line);
      font-family: var(--font-display);
      font-size: 1.5rem;
      color: var(--naive-charcoal);
      cursor: pointer;
      transform: rotate(-1deg);
      transition: all 0.1s ease;
    }

    .naive-button:hover {
      transform: rotate(0deg) translateY(-2px);
      box-shadow: 6px 6px 0 var(--naive-line);
    }

    .naive-button:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 var(--naive-line);
    }

    /* ===== 手绘分隔线 ===== */
    .hand-divider {
      border: none;
      height: 3px;
      background: var(--naive-line);
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      margin: 3rem auto;
      max-width: 300px;
      transform: rotate(-1deg);
    }

    /* ===== 离格引用 ===== */
    .off-grid-quote {
      background: var(--naive-accent);
      border: 3px solid var(--naive-line);
      border-radius: 20px 5px 25px 5px;
      padding: 2rem;
      margin: 2rem;
      transform: rotate(1deg) translateX(-10px);
      box-shadow: 4px 4px 0 var(--naive-line);
      max-width: 500px;
    }

    .off-grid-quote blockquote {
      font-family: var(--font-display);
      font-size: 1.5rem;
      line-height: 1.4;
      font-style: normal;
    }

    .off-grid-quote cite {
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
      transform: rotate(-1deg);
    }
  </style>
</head>
<body>

  <!-- 装饰性描边文字 -->
  <div class="stroke-deco left">NAIVE</div>
  <div class="stroke-deco right">PURE</div>

  <!-- 主标题区 -->
  <section class="hero">
    <h1 class="hero-title" data-text="天真实验">天真实验</h1>
    <p class="hero-subtitle">Naive Design + Experimental Typography</p>
  </section>

  <!-- 波浪字母 -->
  <div class="wavy-letters" aria-hidden="true">
    <span>保</span><span>持</span><span>纯</span><span>粹</span><span>不</span><span>加</span><span>滤镜</span>
  </div>

  <hr class="hand-divider">

  <!-- 贴纸卡片 -->
  <div class="sticker-grid">
    <div class="sticker-card">
      <h3>手绘感</h3>
      <p>不规则的边框、抖动的线条，传递人性的温度。每个"不完美"都是深思熟虑的选择。</p>
    </div>
    <div class="sticker-card">
      <h3>离格排版</h3>
      <p>打破网格的束缚，让文字自由呼吸。轻微旋转、有意错位，创造视觉张力。</p>
    </div>
    <div class="sticker-card">
      <h3>纯粹色彩</h3>
      <p>明快原色，不加灰度滤镜。让颜色自己说话，不需要"美化"。</p>
    </div>
  </div>

  <hr class="hand-divider">

  <!-- 离格引用 -->
  <div class="off-grid-quote">
    <blockquote>
      "完美不是目标，真诚才是。让不完美自己说话，不需要滤镜来美化。"
    </blockquote>
    <cite>— 天真实验设计哲学</cite>
  </div>

  <!-- 按钮 -->
  <div style="text-align: center; margin: 3rem 0;">
    <button class="naive-button">开始探索</button>
  </div>

</body>
</html>
```

---

## 为什么不加滤镜

### 设计哲学解读

**1. 对 Anti-Perfection 的尊重**

Naive Design 的核心是"故意不完美"——这是对过度修饰、过度自动化设计的反叛。添加滤镜（即使是最微妙的模糊或光泽）都违背了这个初衷。

**2. 手绘感的真实性**

手绘的魅力在于"直接"——笔触就是笔触，不需要后期处理。滤镜会让手绘感变得"数字化"，反而削弱了它的力量。

**3. 排版的张力来自结构**

Experimental Typography 的视觉冲击来自位置、角度、大小、对比——这些都是结构性元素。滤镜是表面处理，会干扰结构性张力。

**4. Wabi-Sabi 美学**

日本"侘寂"哲学强调接受短暂和不完美。不修饰、不遮掩，让事物以本来的面貌呈现——这正是"保持纯粹"的精神内核。

### 技术层面

```css
/* ===== 我们不使用这些 ===== */
.no-filter-design {
  /* ❌ 不用 blur */
  filter: blur(0px);  /* 永远是 0 */
  
  /* ❌ 不用 drop-shadow */
  filter: drop-shadow(none);
  
  /* ❌ 不用 brightness/contrast */
  filter: none;
  
  /* ❌ 不用 glassmorphism */
  backdrop-filter: none;
  
  /* ❌ 不叠加 noise 纹理 */
  /* 没有 background-image: url('noise.png') */
}

/* ===== 我们使用这些替代 ===== */
.pure-design {
  /* ✓ 使用 transform 创造动感 */
  transform: rotate(-2deg) skewX(-3deg);
  
  /* ✓ 使用 mix-blend-mode 创造层次 */
  mix-blend-mode: multiply;
  
  /* ✓ 使用硬边阴影（手绘风格允许） */
  box-shadow: 4px 4px 0 var(--naive-line);
  
  /* ✓ 使用不规则 border-radius */
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  
  /* ✓ 使用原生 CSS 变量控制色彩 */
  color: var(--naive-primary);
}
```

---

## 代表案例

### 品牌/网站

| 案例 | 特点 | 链接 |
|------|------|------|
| **Kittl Little Jimmy** | 儿童手绘元素库，完美诠释 Naive 美学 | [kittl.com](https://www.kittl.com) |
| **Anthropic** | 技术品牌中的 Naive 应用，手绘插画 + 简约排版 | [anthropic.com](https://www.anthropic.com) |
| **Gumroad** | 手绘风格图标和贴纸式卡片 | [gumroad.com](https://gumroad.com) |
| **Stripe (部分页面)** | 实验性排版与手绘元素结合 | [stripe.com](https://stripe.com) |

### 设计资源

| 资源 | 用途 | 链接 |
|------|------|------|
| **Rough.js** | 手绘风格 Canvas/SVG 库 | [roughjs.com](https://roughjs.com) |
| **DoodleCSS** | 手绘风格 CSS 主题 | [GitHub](https://github.com/chr15m/DoodleCSS) |
| **CSS-Tricks Sketchy Avatars** | clip-path 手绘效果教程 | [css-tricks.com](https://css-tricks.com/sketchy-avatars-css-clip-path/) |

---

## 参考来源

### Naive Design

- [Kittl - Why Naive Design Leads the Anti-Perfection Trend of 2026](https://www.kittl.com/blogs/naive-design-trend-stl/)
- [ELLE India - How Naive Design Is Rewriting Fashion's Visual Code](https://elle.in/fashion/naive-design-is-rewriting-fashions-visual-code-10940240)
- [It's Nice That - The Graphic Trends for 2026](https://www.itsnicethat.com/features/forward-thinking-graphic-trends-2026-graphic-design-120126)
- [Zeka Graphic - Naive Graphic Design Explained](https://www.zekagraphic.com/naive-graphic-design-explained/)

### Experimental Typography

- [Damien Kloot - Top 25 Web Design Trends 2025](https://damienkloot.com/top-25-web-design-trends-2025/)
- [Medium - 25 Web Design Trends to Watch in 2025](https://medium.com/@watzon/25-web-design-trends-to-watch-in-2025-978f0c545684)
- [Coursera - Experimental Typography: Breaking the Rules](https://www.coursera.org/articles/experimental-typography)
- [Bryan L Robinson - Use Rotate and Skew for Punk Rock Design](https://bryanlrobinson.com/blog/tip-use-rotate-and-skew-together-to-introduce-punk-rock-design/)
- [RWT.io - Skewed, Rotated, and Styled](https://rwt.io/typography-tips/skewed-rotated-and-styled/)

### CSS 技术

- [CSS-Tricks - Sketchy Avatars with CSS clip-path](https://css-tricks.com/sketchy-avatars-css-clip-path/)
- [DEV Community - Hand-drawn border animation](https://dev.to/thormeier/hand-drawn-border-animation-using-clip-path-and-border-radius-36ln)
- [MDN Web Docs - Variable Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)

---

*文档版本: 1.0 | 更新日期: 2026-04-04*
*组合5 - Naive Design (A) + Experimental Typography (B) | 质感滤镜: 无 (保持纯粹)*
