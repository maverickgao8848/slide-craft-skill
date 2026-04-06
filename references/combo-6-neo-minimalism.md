# Neo Minimalism + Grainy Blur + Liquid Glass 完整组合

**组合公式**：A类(主风格) + B类(维度增强) + C类(质感滤镜)

新极简主义的克制精致 + 颗粒模糊的温暖复古 + 液态玻璃的现代质感 = **高端温暖的未来感**

---

## 1. 角色定义

你是一位精通三种设计语言融合的前端设计大师。你深谙如何将 Neo Minimalism 的克制哲学、Grainy Blur 的有机温度、Liquid Glass 的流动质感融为一炉，创造出既现代又温暖、既克制又富有层次的独特视觉体验。

**组合定位**：

- **Neo Minimalism** 提供骨架：极端比例、大量留白、克制配色、温暖中性色
- **Grainy Blur** 注入灵魂：胶片颗粒、柔和渐变、发光边缘、温暖质感
- **Liquid Glass** 赋予生命：动态模糊、光线折射、有机边缘、苹果风格

**融合结果**：克制但不冷漠，现代但有温度，精致但不疏离——这是"高端温暖的未来感"。

**适用场景**：

- 高端品牌官网与产品展示
- 奢侈品数字体验
- 设计机构作品集
- 科技公司品牌页面
- 苹果生态应用推广
- 需要传达精致感的演示文稿

**情感表达**：克制、精致、温暖、现代、未来感、有机

---

## 2. 组合理念

### 为什么这三种风格能融合？

三种风格看似独立，实则共享核心设计价值观：

| 价值观 | Neo Minimalism | Grainy Blur | Liquid Glass |
|--------|----------------|-------------|--------------|
| 克制 | 极端元素控制 | 有机的模糊 | 不滥用玻璃 |
| 温度 | 暖中性色 | 胶片颗粒 | 光线质感 |
| 层次 | 留白与比例 | 模糊深度 | 半透明叠层 |
| 现代 | 几何形态 | 数字质感 | 动态材质 |

### 各风格的贡献

**Neo Minimalism（骨架）**：
- 提供极端的视觉比例（120px vs 16px）
- 定义克制的色彩系统（暖中性色）
- 确立大量留白的空间节奏
- 建立极端字重对比（100 vs 900）
- 带来"Less but Better"的设计哲学

**Grainy Blur（温度）**：
- 注入胶片颗粒的温暖质感
- 软化极简的"冷感"
- 创造柔和的视觉过渡
- 增加数字界面的"物质性"
- 带来有机的情绪氛围

**Liquid Glass（生命）**：
- 赋予界面动态的光线质感
- 创造流动的视觉体验
- 提供苹果风格的现代感
- 增加层次间的有机连接
- 带来未来感的科技美学

### 融合的核心原则

1. **克制是基础** - Neo Minimalism 的元素控制是底层逻辑
2. **温度是灵魂** - Grainy Blur 的颗粒质感注入人性温度
3. **流动是生命** - Liquid Glass 的动态效果赋予生命力
4. **平衡是关键** - 三者相互制衡，任何一方过度都会破坏整体

---

## 3. 融合色彩系统

```css
:root {
  /* ============================================
   * Neo Minimalism 主色系统（暖中性色）
   * ============================================ */
  --primary: #1A1A1A;              /* 深黑 - 主文字/关键元素 */
  --primary-light: #333333;        /* 浅黑 - 次级强调 */
  
  --background: #FAFAF8;           /* 暖白 - 主背景 */
  --background-alt: #F5F5F3;       /* 次级背景 */
  
  --text-primary: #1A1A1A;         /* 主文字 */
  --text-secondary: #666666;       /* 次级文字 */
  --text-tertiary: #999999;        /* 辅助文字 */
  
  --border: #E5E5E3;               /* 极淡边框 */
  --border-dark: #1A1A1A;          /* 深色边框 */

  /* ============================================
   * Grainy Blur 效果色（温暖质感）
   * ============================================ */
  --grain-overlay: rgba(0, 0, 0, 0.03);      /* 浅色背景噪点 */
  --grain-overlay-dark: rgba(255, 255, 255, 0.02); /* 深色背景噪点 */
  
  --glow-edge: rgba(255, 255, 255, 0.6);     /* 发光边缘 - 亮色 */
  --glow-edge-warm: rgba(250, 240, 230, 0.4); /* 温暖发光 */
  
  /* 渐变基础 - 用于背景 */
  --gradient-warm-bg: linear-gradient(
    135deg,
    #FAFAF8 0%,
    #F5F0E8 50%,
    #FAFAF8 100%
  );
  
  /* 柔和光斑渐变 */
  --gradient-soft-blob: radial-gradient(
    ellipse at 30% 20%,
    rgba(250, 240, 230, 0.3) 0%,
    transparent 50%
  );

  /* ============================================
   * Liquid Glass 效果色（现代质感）
   * ============================================ */
  /* 浅色模式玻璃 */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-bg-subtle: rgba(255, 255, 255, 0.5);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-highlight: rgba(255, 255, 255, 0.8);
  --glass-shadow: rgba(0, 0, 0, 0.06);
  
  /* 深色模式玻璃 */
  --glass-bg-dark: rgba(26, 26, 26, 0.6);
  --glass-border-dark: rgba(255, 255, 255, 0.08);
  --glass-highlight-dark: rgba(255, 255, 255, 0.15);

  /* ============================================
   * 融合效果色（三者结合）
   * ============================================ */
  /* 玻璃 + 颗粒 卡片 */
  --combo-glass-grain: rgba(255, 255, 255, 0.65);
  
  /* 温暖玻璃边框 */
  --combo-glass-border: rgba(26, 26, 26, 0.08);
  
  /* 液态高光 */
  --combo-liquid-highlight: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );

  /* ============================================
   * 撞色系统 (Pop Colors) - 克制使用
   * ============================================ */
  /* 6 种撞色 - 仅用于强调和分类 */
  --pink: #FF6B9D;           /* A类标签、温暖强调 */
  --orange: #FF7A45;         /* B类标签、活力 */
  --green: #52C41A;          /* C类标签、积极 */
  --purple: #722ED1;         /* 特殊强调、创新 */
  --blue: #1890FF;           /* 链接、信息 */
  --cyan: #13C2C2;           /* 数据、科技 */

  /* 撞色使用原则（CRITICAL）：
   * 1. 每页撞色元素不超过 3-4 处
   * 2. 主标题保持黑色，仅副标题/章节编号可用淡彩
   * 3. 正文文字保持中性色，仅强调词用撞色
   * 4. 列表点撞色仅在高密度信息页使用
   * 5. 撞色是点缀，克制是底色
   */
}
```

---

## 3.5 撞色系统 (Pop Colors) - 克制使用

### 设计哲学

**核心理念**：Neo Minimalism 的克制是底色，撞色是点缀而非主角。

撞色系统的目的是在保持整体克制感的同时，为关键信息提供视觉锚点，而非制造视觉噪音。

### 使用场景（仅限以下情况）

| 场景 | 推荐颜色 | 示例 |
|------|----------|------|
| 分类标签（A/B/C） | pink/orange/green | `<span class="tag tag-a">A类</span>` |
| 章节副标题 | pink/orange/green/purple | `<p class="subtitle subtitle-pink">` |
| 大号章节编号 | pink/orange/green/purple | `<span class="chapter-num chapter-num-pink">01</span>` |
| 关键数据强调 | pink/orange/green | `<span class="text-pink">35+</span>` |
| 进度条渐变 | linear-gradient(pink→orange→green) | 多色渐变 |
| 列表点（高密度页） | pink/orange/green/blue | `<span class="list-dot list-dot-pink">` |

### 克制原则（CRITICAL）

```
❌ 错误：撞色过多
- 主标题用撞色
- 所有正文都用撞色
- 每个列表点都用不同颜色
- 背景装饰用撞色

✅ 正确：撞色克制
- 主标题保持黑色
- 仅副标题/章节编号用淡彩（opacity: 0.3）
- 每页撞色元素 3-4 处以内
- 正文保持中性色，仅强调词用撞色
```

### 彩色组件 CSS

```css
/* ============================================
 * 彩色标签 - 分类系统
 * ============================================ */
.tag {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
}

/* A类 - Pink（主风格、核心） */
.tag-a {
  background: rgba(255, 107, 157, 0.15);
  color: var(--pink);
  border: 1px solid rgba(255, 107, 157, 0.3);
}

/* B类 - Orange（增强、维度） */
.tag-b {
  background: rgba(255, 122, 69, 0.15);
  color: var(--orange);
  border: 1px solid rgba(255, 122, 69, 0.3);
}

/* C类 - Green（滤镜、质感） */
.tag-c {
  background: rgba(82, 196, 26, 0.15);
  color: var(--green);
  border: 1px solid rgba(82, 196, 26, 0.3);
}

/* ============================================
 * 彩色副标题 - 克制使用
 * ============================================ */
.subtitle-pink { color: var(--pink); }
.subtitle-orange { color: var(--orange); }
.subtitle-green { color: var(--green); }
.subtitle-purple { color: var(--purple); }
.subtitle-blue { color: var(--blue); }
.subtitle-cyan { color: var(--cyan); }

/* ============================================
 * 彩色章节编号 - 淡彩（opacity: 0.3）
 * ============================================ */
.chapter-num {
  font-size: clamp(64px, 12vw, 180px);
  font-weight: 100;
  position: absolute;
  top: 4vw;
  right: 8vw;
  user-select: none;
  z-index: 0;
  line-height: 1;
  opacity: 0.15;  /* 默认极淡 */
}

.chapter-num-pink { color: var(--pink); opacity: 0.3; }
.chapter-num-orange { color: var(--orange); opacity: 0.3; }
.chapter-num-green { color: var(--green); opacity: 0.3; }
.chapter-num-purple { color: var(--purple); opacity: 0.3; }
.chapter-num-blue { color: var(--blue); opacity: 0.3; }
.chapter-num-cyan { color: var(--cyan); opacity: 0.3; }

/* ============================================
 * 彩色列表点 - 高密度页使用
 * ============================================ */
.list-dot {
  width: 6px;
  height: 6px;
  background: var(--text-primary);
  border-radius: 50%;
  margin-top: 10px;
  flex-shrink: 0;
}

.list-dot-pink { background: var(--pink); }
.list-dot-orange { background: var(--orange); }
.list-dot-green { background: var(--green); }
.list-dot-purple { background: var(--purple); }
.list-dot-blue { background: var(--blue); }
.list-dot-cyan { background: var(--cyan); }

/* ============================================
 * 彩色强调文字 - 仅用于关键词
 * ============================================ */
.text-pink { color: var(--pink); font-weight: 600; }
.text-orange { color: var(--orange); font-weight: 600; }
.text-green { color: var(--green); font-weight: 600; }
.text-purple { color: var(--purple); font-weight: 600; }
.text-blue { color: var(--blue); font-weight: 600; }
.text-cyan { color: var(--cyan); font-weight: 600; }

/* ============================================
 * 渐变进度条 - 多色渐变
 * ============================================ */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--pink), var(--orange), var(--green));
  z-index: 1000;
  transition: width 0.1s ease-out;
}

/* ============================================
 * 彩色光斑装饰 - 柔和背景
 * ============================================ */
.blob-pink {
  background: radial-gradient(circle, rgba(255, 107, 157, 0.4) 0%, transparent 70%);
}

.blob-orange {
  background: radial-gradient(circle, rgba(255, 122, 69, 0.35) 0%, transparent 70%);
}

.blob-green {
  background: radial-gradient(circle, rgba(82, 196, 26, 0.3) 0%, transparent 70%);
}

.blob-purple {
  background: radial-gradient(circle, rgba(114, 46, 209, 0.3) 0%, transparent 70%);
}

.blob-cyan {
  background: radial-gradient(circle, rgba(19, 194, 194, 0.3) 0%, transparent 70%);
}
```

---

## 4. 融合字体方案

继承 Neo Minimalism 的字体选择，提供三套可选方案：

### 4.1 基础字体方案（无衬线）

| 类型 | 字体名 | 来源 | 备选 |
|------|--------|------|------|
| Display | **Inter** | Google Fonts | DM Sans, Sora |
| Body | **Inter** | Google Fonts | IBM Plex Sans |

### 4.2 衬线体方案（人文气息）

| 类型 | 字体名 | 来源 | 适用场景 |
|------|--------|------|----------|
| Display | **Noto Serif SC** | Google Fonts | 品牌感强的标题 |
| Display | **PingFang SC** | 系统字体 | macOS 备选 |
| Body | **Noto Serif SC** | Google Fonts | 长文阅读 |

### 4.3 等宽字体方案（数据信息）

| 类型 | 字体名 | 来源 | 适用场景 |
|------|--------|------|----------|
| Mono | **JetBrains Mono** | Google Fonts | 数据、代码、规格 |
| Mono | **SF Mono** | 系统字体 | macOS 备选 |

**引入代码**：
```html
<!-- 基础：Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;900&display=swap" rel="stylesheet">

<!-- 可选：衬线体 + 等宽 -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Noto+Serif+SC:wght@200;900&display=swap" rel="stylesheet">
```

**融合字体使用规则**：
```css
/* ============================================
 * 基础无衬线方案 - Inter
 * ============================================ */
/* Display 字体 - 极端字重对比 */
.font-display {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 900;  /* 极粗 - Neo Minimalism 特征 */
  letter-spacing: -0.04em;
  line-height: 1.0;
}

/* 极细字重变体 - Neo Minimalism 极端对比 */
.font-display-thin {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 100;  /* 极细 */
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Body 字体 - 保持可读性 */
.font-body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.7;
}

/* ============================================
 * 衬线体方案 - Noto Serif SC（人文气息）
 * ============================================ */
/* 衬线标题 - 极粗 */
.font-display-serif {
  font-family: 'Noto Serif SC', 'PingFang SC', serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

/* 衬线标题 - 极细 */
.font-display-serif-thin {
  font-family: 'Noto Serif SC', 'PingFang SC', serif;
  font-weight: 200;
  letter-spacing: 0.08em;
}

/* 衬线正文 */
.font-body-serif {
  font-family: 'Noto Serif SC', 'PingFang SC', serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.8;
}

/* ============================================
 * 等宽字体方案 - JetBrains Mono（数据信息）
 * ============================================ */
/* 数据信息展示 */
.font-mono {
  font-family: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
}

/* 数据标签 */
.data-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  color: var(--text-tertiary);
  letter-spacing: 0.05em;
}

/* 数据值 */
.data-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
}

/* ============================================
 * 字号策略 - 极端比例
 * ============================================ */
.title-xl {
  font-size: clamp(64px, 12vw, 120px);  /* Neo Minimalism 极端比例 */
}

.body-md {
  font-size: clamp(16px, 1.5vw, 18px);
}
```

---

## 5. 核心CSS效果库（融合版）

### 方案A：液态玻璃卡片 + 颗粒质感

**融合元素**：
- Neo Minimalism: 大量留白、细边框、极端比例
- Liquid Glass: 半透明模糊、边缘高光、动态光泽
- Grainy Blur: 噪点叠加、温暖质感

```css
/* 液态玻璃颗粒卡片 - 融合三种风格 */
.combo-glass-grain-card {
  /* Neo Minimalism 基础 */
  position: relative;
  padding: 48px;
  border: 1px solid var(--combo-glass-border);
  border-radius: 24px;
  
  /* Liquid Glass 效果 */
  background: var(--combo-glass-grain);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px var(--glass-shadow),
    inset 0 1px 0 var(--glass-highlight);
  
  /* 过渡效果 */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 顶部高光边缘 - Liquid Glass */
.combo-glass-grain-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 24px;
  right: 24px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--glass-highlight),
    transparent
  );
}

/* 噪点纹理层 - Grainy Blur */
.combo-glass-grain-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.025;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* 悬停效果 */
.combo-glass-grain-card:hover {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(24px) saturate(200%);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}
```

### 方案B：极端比例标题 + 发光边缘

**融合元素**：
- Neo Minimalism: 极端字号对比(120px vs 16px)、极端字重(100 vs 900)
- Grainy Blur: 文字边缘微光、温暖质感
- Liquid Glass: 动态光泽流动

```css
/* 极端比例标题 - Neo Minimalism 核心 */
.combo-title-monumental {
  font-family: 'Inter', sans-serif;
  font-size: clamp(64px, 12vw, 120px);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--text-primary);
  margin: 0;
  position: relative;
  
  /* Grainy Blur - 微妙文字阴影模拟发光 */
  text-shadow: 
    0 0 1px rgba(26, 26, 26, 0.1),
    0 2px 4px rgba(26, 26, 26, 0.05);
}

/* 极细副标题 - Neo Minimalism 极端对比 */
.combo-subtitle-thin {
  font-family: 'Inter', sans-serif;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 100;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-top: 24px;
}

/* 发光边缘容器 - Grainy Blur + Liquid Glass */
.combo-glow-container {
  position: relative;
  padding: 64px 48px;
}

/* 发光边缘效果 */
.combo-glow-container::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 4px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 40%,
    transparent 60%,
    rgba(250, 240, 230, 0.2) 100%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.combo-glow-container:hover::before {
  opacity: 1;
}

/* 动态光泽流动 - Liquid Glass */
.combo-shimmer-text {
  background: linear-gradient(
    90deg,
    var(--text-primary) 0%,
    var(--text-primary) 40%,
    #444444 50%,
    var(--text-primary) 60%,
    var(--text-primary) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 4s ease-in-out infinite;
}

@keyframes text-shimmer {
  0%, 100% { background-position: 200% center; }
  50% { background-position: 0% center; }
}
```

### 方案C：温暖留白空间

**融合元素**：
- Neo Minimalism: 40%+留白、极端比例、细线分隔
- Grainy Blur: 温暖颗粒背景、柔和光斑
- Liquid Glass: 光斑装饰、流动动画

```css
/* 温暖留白空间 - 三种风格融合 */
.combo-warm-space {
  /* Neo Minimalism 基础 */
  min-height: 100vh;
  padding: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* Grainy Blur - 温暖渐变背景 */
  background: var(--gradient-warm-bg);
  position: relative;
  overflow: hidden;
}

/* 噪点纹理覆盖 - Grainy Blur */
.combo-warm-space::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* 柔和光斑装饰 - Liquid Glass + Grainy Blur */
.combo-blob-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}

.combo-blob-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(250, 240, 230, 0.5) 0%,
    transparent 70%
  );
  top: -100px;
  right: -100px;
  animation: blob-float 20s ease-in-out infinite;
}

.combo-blob-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(245, 235, 220, 0.4) 0%,
    transparent 70%
  );
  bottom: -50px;
  left: -50px;
  animation: blob-float 25s ease-in-out infinite reverse;
}

@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

/* 内容区域 - 保持清晰 */
.combo-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

/* 细线分隔 - Neo Minimalism */
.combo-divider {
  width: 60px;
  height: 1px;
  background: var(--border-dark);
  margin: 32px 0;
}
```

---

## 6. 动画系统

### 入场动画

融合三种风格的入场效果：

| 元素 | 动画效果 | 时长 | 延迟 | 风格来源 |
|------|----------|------|------|----------|
| 主标题 | 淡入上移 + 光泽流动 | 0.6s | 0s | NM + LG |
| 副标题 | 淡入 + 颗粒渐现 | 0.4s | 0.2s | NM + GB |
| 玻璃卡片 | 模糊度增加 + 缩放 | 0.7s | 0.4s | LG |
| 光斑装饰 | 缓慢淡入 + 位移 | 1.5s | 0s | GB + LG |
| 噪点层 | 瞬间出现 | - | 0s | GB |

### CSS 动画代码

```css
/* 融合入场动画 - 淡入上移 + 光泽 */
@keyframes combo-enter {
  0% {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* 主标题动画 */
.combo-animate-title {
  animation: combo-enter 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* 副标题延迟动画 */
.combo-animate-subtitle {
  opacity: 0;
  animation: combo-enter 0.4s ease-out 0.2s forwards;
}

/* 玻璃卡片入场 */
@keyframes combo-glass-enter {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.97);
    backdrop-filter: blur(0) saturate(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    backdrop-filter: blur(20px) saturate(180%);
  }
}

.combo-animate-card {
  opacity: 0;
  animation: combo-glass-enter 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
}

/* 强调动画 - 微妙位移 + 边框显现 */
@keyframes combo-emphasis {
  0%, 100% {
    transform: translateX(0);
    border-color: var(--combo-glass-border);
  }
  50% {
    transform: translateX(4px);
    border-color: var(--border-dark);
  }
}

.combo-hover-link {
  display: inline-block;
  transition: transform 0.2s ease-out, border-color 0.3s ease;
}

.combo-hover-link:hover {
  transform: translateX(4px);
}

/* 光泽流动 - Liquid Glass */
@keyframes combo-liquid-shine {
  0%, 100% {
    background-position: -200% center;
  }
  50% {
    background-position: 200% center;
  }
}

.combo-shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: combo-liquid-shine 4s ease-in-out infinite;
}

/* 呼吸光斑 - Grainy Blur + Liquid Glass */
@keyframes combo-breathe {
  0%, 100% {
    opacity: 0.25;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.08);
  }
}

.combo-breathing-blob {
  animation: combo-breathe 8s ease-in-out infinite;
}

/* ============================================
 * 微交互动效（诊断报告新增）
 * ============================================ */

/* 3.1 滚动触发淡入上移 - Intersection Observer 触发 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 延迟变体 - 用于列表项依次出现 */
.scroll-reveal-delay-1 { transition-delay: 0.1s; }
.scroll-reveal-delay-2 { transition-delay: 0.2s; }
.scroll-reveal-delay-3 { transition-delay: 0.3s; }
.scroll-reveal-delay-4 { transition-delay: 0.4s; }

/* 3.2 悬停抬升效果 - 诊断报告推荐的阴影 */
.hover-lift {
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.hover-lift:hover {
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* 3.3 描边绘制动画 - 章节数字 */
.stroke-draw {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: stroke-draw 1.5s ease-out forwards;
}

@keyframes stroke-draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* SVG 轮廓数字容器 */
.chapter-num-outline {
  font-size: 12vw;
  fill: none;
  stroke: var(--border);
  stroke-width: 1px;
}

/* 尊重减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .combo-animate-title,
  .combo-animate-subtitle,
  .combo-animate-card,
  .combo-shimmer,
  .combo-breathing-blob,
  .scroll-reveal,
  .hover-lift,
  .stroke-draw {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
```

---

## 7. 布局模式

### 标题页布局

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░ 温暖渐变背景 + 颗粒纹理 ░░░                             │
│  ○ ○ ○ 柔和光斑装饰（流动） ○ ○ ○                           │
│                                                             │
│                    ┌─────────────────┐                      │
│                    │ ░░░ 玻璃质感 ░░░│                      │
│                    │                 │                      │
│                    │    主标题        │  ← 120px, 900      │
│                    │                 │                      │
│                    │    副标题        │  ← 16px, 100      │
│                    │                 │                      │
│                    └─────────────────┘                      │
│                         ↓                                   │
│              边缘高光 + 噪点质感                             │
│                                                             │
│  ════════════════  细线分隔  ════════════════              │
│                                                             │
│                    40%+ 留白空间                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 内容页布局

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────┐  ┌─────────────────────────────┐    │
│  │                   │  │                             │    │
│  │   01              │  │   核心观点                   │    │
│  │   极细数字        │  │   48px, 900                 │    │
│  │                   │  │                             │    │
│  │   章节标题        │  │   ┌─────────────────────┐   │    │
│  │   24px            │  │   │ ░░░ 玻璃卡片 ░░░    │   │    │
│  │                   │  │   │                     │   │    │
│  │                   │  │   │  ▸ 要点一           │   │    │
│  │                   │  │   │  ▸ 要点二           │   │    │
│  │                   │  │   │  ▸ 要点三           │   │    │
│  │                   │  │   │                     │   │    │
│  │                   │  │   └─────────────────────┘   │    │
│  └───────────────────┘  └─────────────────────────────┘    │
│                                                             │
│  ═══════════════════════════════════════════════════════   │
│                                                             │
│  ○ 光斑装饰                                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. 完整示例（含新增效果）

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neo Minimalism + Grainy Blur + Liquid Glass</title>
  <!-- 基础 + 衬线 + 等宽字体 -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;900&family=JetBrains+Mono:wght@400&family=Noto+Serif+SC:wght@200;900&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Neo Minimalism 主色 */
      --primary: #1A1A1A;
      --background: #FAFAF8;
      --background-alt: #F5F5F3;
      --text-primary: #1A1A1A;
      --text-secondary: #666666;
      --text-tertiary: #999999;
      --border: #E5E5E3;
      --border-dark: #1A1A1A;

      /* Grainy Blur 效果色 */
      --grain-overlay: rgba(0, 0, 0, 0.03);
      --glow-edge-warm: rgba(250, 240, 230, 0.4);

      /* Liquid Glass 效果色 */
      --glass-bg: rgba(255, 255, 255, 0.7);
      --glass-border: rgba(26, 26, 26, 0.08);
      --glass-highlight: rgba(255, 255, 255, 0.8);
      --glass-shadow: rgba(0, 0, 0, 0.06);

      /* 融合效果色 */
      --combo-glass-grain: rgba(255, 255, 255, 0.65);

      /* 响应式间距变量 */
      --space-unit: 8px;
      --space-xs: calc(var(--space-unit) * 1);
      --space-sm: calc(var(--space-unit) * 2);
      --space-md: calc(var(--space-unit) * 3);
      --space-lg: calc(var(--space-unit) * 6);
      --space-xl: calc(var(--space-unit) * 8);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: var(--background);
      color: var(--text-primary);
      line-height: 1.7;
      overflow-x: hidden;
    }

    /* ============================================
     * Slide 1: 标题页 - 温暖留白空间
     * ============================================ */
    .slide {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 8vw;
      position: relative;
      background: linear-gradient(
        135deg,
        #FAFAF8 0%,
        #F5F0E8 50%,
        #FAFAF8 100%
      );
      overflow: hidden;
    }

    /* 噪点纹理覆盖 */
    .noise-overlay {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      opacity: 0.03;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    /* 柔和光斑 */
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      pointer-events: none;
    }

    .blob-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(250, 240, 230, 0.5) 0%, transparent 70%);
      top: -100px;
      right: -100px;
      animation: blob-float 20s ease-in-out infinite;
    }

    .blob-2 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(245, 235, 220, 0.4) 0%, transparent 70%);
      bottom: -50px;
      left: -50px;
      animation: blob-float 25s ease-in-out infinite reverse;
    }

    @keyframes blob-float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.05); }
      66% { transform: translate(-20px, 20px) scale(0.95); }
    }

    /* 内容容器 */
    .content {
      position: relative;
      z-index: 1;
      max-width: 900px;
    }

    /* 极端比例标题 */
    .title {
      font-size: clamp(64px, 12vw, 120px);
      font-weight: 900;
      line-height: 1.0;
      letter-spacing: -0.04em;
      color: var(--text-primary);
      animation: combo-enter 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .title-thin {
      font-weight: 100;
      font-size: clamp(48px, 8vw, 80px);
    }

    /* 极细副标题 */
    .subtitle {
      font-size: clamp(14px, 2vw, 18px);
      font-weight: 100;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-secondary);
      margin-top: 24px;
      opacity: 0;
      animation: combo-enter 0.4s ease-out 0.2s forwards;
    }

    @keyframes combo-enter {
      0% {
        opacity: 0;
        transform: translateY(24px);
        filter: blur(4px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }

    /* 细线分隔 */
    .divider {
      width: 60px;
      height: 1px;
      background: var(--border-dark);
      margin: 40px 0;
      opacity: 0;
      animation: combo-enter 0.4s ease-out 0.4s forwards;
    }

    /* 描述文字 */
    .description {
      font-size: 18px;
      color: var(--text-secondary);
      max-width: 480px;
      line-height: 1.8;
      opacity: 0;
      animation: combo-enter 0.4s ease-out 0.5s forwards;
    }

    /* ============================================
     * Slide 2: 玻璃卡片展示
     * ============================================ */
    .slide-alt {
      background: var(--background-alt);
    }

    .slide-alt .noise-overlay {
      opacity: 0.025;
    }

    /* 章节编号 */
    .chapter-num {
      font-size: 12vw;
      font-weight: 100;
      color: var(--border);
      position: absolute;
      top: 4vw;
      right: 8vw;
      user-select: none;
      z-index: 0;
    }

    /* 章节标题 */
    .chapter-title {
      font-size: clamp(36px, 6vw, 64px);
      font-weight: 900;
      letter-spacing: -0.03em;
      margin-bottom: 48px;
      position: relative;
      z-index: 1;
    }

    /* 液态玻璃颗粒卡片 */
    .glass-card {
      position: relative;
      padding: 48px;
      border: 1px solid var(--glass-border);
      border-radius: 24px;
      background: var(--combo-glass-grain);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      box-shadow:
        0 8px 32px var(--glass-shadow),
        inset 0 1px 0 var(--glass-highlight);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      animation: combo-glass-enter 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
      max-width: 600px;
    }

    @keyframes combo-glass-enter {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.97);
        backdrop-filter: blur(0) saturate(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        backdrop-filter: blur(20px) saturate(180%);
      }
    }

    /* 顶部高光 */
    .glass-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 24px;
      right: 24px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--glass-highlight), transparent);
    }

    /* 噪点纹理 */
    .glass-card::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      opacity: 0.025;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    .glass-card:hover {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(24px) saturate(200%);
      transform: translateY(-2px);
      box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }

    .glass-card h3 {
      font-size: 24px;
      font-weight: 900;
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .glass-card p {
      color: var(--text-secondary);
      line-height: 1.7;
      position: relative;
      z-index: 1;
    }

    /* 列表项 */
    .list-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .list-dot {
      width: 6px;
      height: 6px;
      background: var(--text-primary);
      border-radius: 50%;
      margin-top: 10px;
      flex-shrink: 0;
    }

    .list-text {
      font-size: 18px;
      color: var(--text-secondary);
    }

    /* ============================================
     * Slide 3: 融合效果展示
     * ============================================ */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
      margin-top: 48px;
      position: relative;
      z-index: 1;
    }

    .feature-card {
      padding: 32px;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      border-color: var(--border-dark);
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .feature-num {
      font-size: 48px;
      font-weight: 100;
      color: var(--border);
      margin-bottom: 16px;
    }

    .feature-title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 12px;
    }

    .feature-desc {
      font-size: 16px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    /* ============================================
     * 新增：滚动触发动画
     * ============================================ */
    .scroll-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition:
        opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .scroll-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-reveal-delay-1 { transition-delay: 0.1s; }
    .scroll-reveal-delay-2 { transition-delay: 0.2s; }
    .scroll-reveal-delay-3 { transition-delay: 0.3s; }

    /* ============================================
     * 新增：悬停抬升效果
     * ============================================ */
    .hover-lift {
      transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    }

    .hover-lift:hover {
      box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    /* ============================================
     * 新增：线稿图标
     * ============================================ */
    .line-icon {
      stroke: var(--text-primary);
      stroke-width: 1.5px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
      width: 32px;
      height: 32px;
    }

    .line-icon-muted {
      stroke: var(--text-tertiary);
    }

    /* ============================================
     * 新增：时间轴
     * ============================================ */
    .timeline {
      position: relative;
      padding-left: 40px;
      margin-top: 48px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background: var(--border-dark);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -34px;
      top: 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--text-primary);
      transition: transform 0.2s ease;
    }

    .timeline-item:hover::before {
      transform: scale(1.3);
    }

    .timeline-time {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }

    .timeline-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .timeline-content {
      font-size: 16px;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    /* ============================================
     * 新增：等宽数据展示
     * ============================================ */
    .data-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
    }

    .data-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      color: var(--text-primary);
    }

    /* ============================================
     * 新增：响应式适配
     * ============================================ */
    @media (max-width: 768px) {
      :root {
        --space-unit: 5px;
      }

      .slide {
        padding: 6vw;
      }

      .glass-card {
        padding: 32px;
      }

      .chapter-title {
        margin-bottom: 32px;
      }

      .features-grid {
        gap: 24px;
      }

      .timeline {
        padding-left: 32px;
      }

      .timeline-item::before {
        left: -26px;
      }
    }

    /* 减少动画偏好 */
    @media (prefers-reduced-motion: reduce) {
      .title, .subtitle, .divider, .description, .glass-card,
      .blob, .feature-card, .scroll-reveal, .hover-lift {
        animation: none;
        opacity: 1;
        transform: none;
        filter: none;
        transition: none;
      }
    }
  </style>
</head>
<body>
  <!-- Slide 1: 标题页 -->
  <section class="slide">
    <div class="noise-overlay"></div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="content">
      <h1 class="title">Neo<br><span class="title-thin">Minimalism</span></h1>
      <p class="subtitle">Grainy Blur + Liquid Glass</p>
      <div class="divider"></div>
      <p class="description">
        克制但不冷漠，现代但有温度。
        新极简主义的克制精致，颗粒模糊的温暖质感，液态玻璃的流动美学。
      </p>
    </div>
  </section>

  <!-- Slide 2: 玻璃卡片展示（含悬停抬升） -->
  <section class="slide slide-alt">
    <div class="noise-overlay"></div>
    <span class="chapter-num">01</span>

    <div class="content">
      <h2 class="chapter-title scroll-reveal">核心原则</h2>

      <div class="glass-card hover-lift scroll-reveal scroll-reveal-delay-1">
        <h3>Less but Better</h3>
        <p>更少但更好——每一个保留的元素都经过深思熟虑，每一处留白都有明确目的。</p>

        <div class="list-item">
          <span class="list-dot"></span>
          <span class="list-text">克制是力量，而非限制</span>
        </div>
        <div class="list-item">
          <span class="list-dot"></span>
          <span class="list-text">留白是内容，而非空缺</span>
        </div>
        <div class="list-item">
          <span class="list-dot"></span>
          <span class="list-text">温度感让极简有人性</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Slide 3: 融合效果展示（含线稿图标） -->
  <section class="slide">
    <div class="noise-overlay"></div>
    <div class="blob blob-1"></div>
    <span class="chapter-num">02</span>

    <div class="content">
      <h2 class="chapter-title scroll-reveal">三种风格的融合</h2>

      <div class="features-grid">
        <div class="feature-card hover-lift scroll-reveal scroll-reveal-delay-1">
          <!-- 线稿图标：方形 - 结构 -->
          <svg class="line-icon line-icon-lg" viewBox="0 0 48 48" style="margin-bottom: 16px;">
            <rect x="8" y="8" width="32" height="32" rx="4"/>
          </svg>
          <div class="data-label">A 类 · 主风格</div>
          <h3 class="feature-title">Neo Minimalism</h3>
          <p class="feature-desc">极端比例、大量留白、克制配色、温暖中性色</p>
        </div>

        <div class="feature-card hover-lift scroll-reveal scroll-reveal-delay-2">
          <!-- 线稿图标：波浪 - 流动 -->
          <svg class="line-icon line-icon-lg" viewBox="0 0 48 48" style="margin-bottom: 16px;">
            <path d="M 4 24 Q 12 12, 20 24 T 36 24 T 52 24" fill="none"/>
          </svg>
          <div class="data-label">B 类 · 维度增强</div>
          <h3 class="feature-title">Grainy Blur</h3>
          <p class="feature-desc">胶片颗粒、柔和渐变、发光边缘、温暖质感</p>
        </div>

        <div class="feature-card hover-lift scroll-reveal scroll-reveal-delay-3">
          <!-- 线稿图标：环形 - 透明 -->
          <svg class="line-icon line-icon-lg" viewBox="0 0 48 48" style="margin-bottom: 16px;">
            <circle cx="24" cy="24" r="18"/>
            <circle cx="24" cy="24" r="10"/>
          </svg>
          <div class="data-label">C 类 · 质感滤镜</div>
          <h3 class="feature-title">Liquid Glass</h3>
          <p class="feature-desc">动态模糊、光线折射、有机边缘、苹果风格</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Slide 4: 时间轴展示（新增） -->
  <section class="slide slide-alt">
    <div class="noise-overlay"></div>
    <span class="chapter-num">03</span>

    <div class="content">
      <h2 class="chapter-title scroll-reveal">设计趋势 2026</h2>

      <div class="timeline">
        <div class="timeline-item scroll-reveal scroll-reveal-delay-1">
          <div class="timeline-time">TREND 01</div>
          <h4 class="timeline-title">反 AI 完美主义</h4>
          <p class="timeline-content">刻意保留手工痕迹和不对称，打破数字设计的过度精致感。</p>
        </div>

        <div class="timeline-item scroll-reveal scroll-reveal-delay-2">
          <div class="timeline-time">TREND 02</div>
          <h4 class="timeline-title">8 个主风格体系</h4>
          <p class="timeline-content">从 Neo Brutalism 到 Memphis Revival，覆盖当代设计主流。</p>
        </div>

        <div class="timeline-item scroll-reveal scroll-reveal-delay-3">
          <div class="timeline-time">TREND 03</div>
          <h4 class="timeline-title">4 个维度增强</h4>
          <p class="timeline-content">3D 沉浸、实验字体、动态字体、颗粒模糊，为主风格注入深度。</p>
        </div>

        <div class="timeline-item scroll-reveal scroll-reveal-delay-4">
          <div class="timeline-time">TREND 04</div>
          <h4 class="timeline-title">3 个质感滤镜</h4>
          <p class="timeline-content">玻璃拟态、新拟态、液态玻璃，作为视觉调味料点缀。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Intersection Observer 滚动触发 -->
  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
  </script>
</body>
</html>
```

---

## 9. 使用场景

### 最佳适用场景

1. **高端品牌官网**
   - 奢侈品、珠宝、高端生活方式品牌
   - 需要传达精致感和品牌调性

2. **科技产品展示**
   - 苹果生态应用推广
   - SaaS 产品落地页
   - 创意工具/设计软件

3. **设计机构作品集**
   - 建筑事务所、设计工作室
   - 需要展示设计能力和品味

4. **演示文稿**
   - 投资人路演
   - 品牌发布会
   - 设计评审

### 不推荐场景

- 电商大促页面（需要强视觉冲击）
- 儿童产品（需要活泼色彩）
- 信息密集型后台（需要高效率）

---

## 10. 注意事项

### 设计平衡

1. **保持克制动效**
   - 动效时长控制在 200-600ms
   - 避免过度动画分散注意力
   - 始终尊重 `prefers-reduced-motion`

2. **颗粒质感不要喧宾夺主**
   - 噪点透明度控制在 0.02-0.04
   - 使用 `mix-blend-mode: multiply` 融合
   - 避免影响文字可读性

3. **玻璃效果保持微妙**
   - 避免玻璃叠加玻璃（glass on glass）
   - 主要用于导航层和关键卡片
   - 确保背景有足够层次

### 性能优化

1. **blur 消耗**
   - `backdrop-filter: blur()` GPU 消耗大
   - 限制同时使用模糊的元素数量
   - 考虑静态降级方案

2. **SVG 噪点**
   - 使用 `baseFrequency: 0.7-0.9` 减少计算
   - 噪点层设为 `pointer-events: none`
   - 避免动态噪点动画（除非必要）

3. **浏览器兼容**
   - Safari 需要 `-webkit-backdrop-filter`
   - Firefox 对 SVG backdrop-filter 支持有限
   - 提供不依赖模糊的降级方案

### 可访问性

1. **对比度检查**
   - 半透明背景可能导致对比度不足
   - 使用工具验证 WCAG AA 标准
   - 必要时增加底层模糊强度

2. **减少动画偏好**
   - 始终提供 `@media (prefers-reduced-motion)` 规则
   - 动画元素在该模式下应立即可见

---

## 11. 响应式间距系统

诊断报告建议：桌面端保持宽松呼吸感，移动端压缩至 60-70%。

### 间距变量系统

```css
/* 响应式间距变量 - 基于 8px 单位 */
:root {
  --space-unit: 8px;
  --space-xs: calc(var(--space-unit) * 1);   /* 8px */
  --space-sm: calc(var(--space-unit) * 2);   /* 16px */
  --space-md: calc(var(--space-unit) * 3);   /* 24px */
  --space-lg: calc(var(--space-unit) * 6);   /* 48px */
  --space-xl: calc(var(--space-unit) * 8);   /* 64px */
  --space-2xl: calc(var(--space-unit) * 12); /* 96px */
  --space-3xl: calc(var(--space-unit) * 16); /* 128px */
}
```

### 移动端适配（768px 以下）

```css
/* 平板端 - 间距压缩至 75% */
@media (max-width: 1024px) {
  :root {
    --space-unit: 6px;
  }
}

/* 移动端 - 间距压缩至 62.5%（约 60-70%） */
@media (max-width: 768px) {
  :root {
    --space-unit: 5px;
  }

  /* Slide 内边距压缩 */
  .slide,
  .combo-warm-space {
    padding: 6vw;  /* 从 8vw 压缩 */
  }

  /* 卡片内边距压缩 */
  .combo-glass-grain-card,
  .glass-card {
    padding: 32px;  /* 从 48px 压缩 */
  }

  /* 章节标题间距调整 */
  .chapter-title {
    margin-bottom: 32px;  /* 从 48px 压缩 */
  }

  /* 网格间距压缩 */
  .features-grid {
    gap: 24px;  /* 从 32px 压缩 */
  }

  /* 字号响应式调整 */
  .title-xl {
    font-size: clamp(48px, 10vw, 80px);  /* 移动端更小 */
  }
}

/* 小屏手机 - 进一步压缩 */
@media (max-width: 480px) {
  :root {
    --space-unit: 4px;
  }

  .slide {
    padding: 5vw;
  }

  .combo-glass-grain-card {
    padding: 24px;
  }
}
```

### 间距使用指南

| 场景 | 变量 | 桌面值 | 移动值 |
|------|------|--------|--------|
| 紧凑元素间距 | `--space-xs` | 8px | 5px |
| 相关元素间距 | `--space-sm` | 16px | 10px |
| 段落间距 | `--space-md` | 24px | 15px |
| 卡片内边距 | `--space-lg` | 48px | 32px |
| 章节间距 | `--space-xl` | 64px | 40px |
| 页面边距 | `--space-2xl` | 96px | 60px |

---

## 12. 视觉锚点系统

诊断报告建议：为每个风格添加极简图标或抽象几何图形，采用线稿风格（Line Art），粗细 1.5px。

### 线稿图标基础样式

```css
/* 线稿图标基础 - 1.5px 粗细 */
.line-icon {
  stroke: var(--text-primary);
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

/* 图标尺寸变体 */
.line-icon-xs { width: 16px; height: 16px; }
.line-icon-sm { width: 24px; height: 24px; }
.line-icon-md { width: 32px; height: 32px; }
.line-icon-lg { width: 48px; height: 48px; }
.line-icon-xl { width: 64px; height: 64px; }

/* 次级颜色变体 */
.line-icon-muted {
  stroke: var(--text-tertiary);
}

/* 悬停效果 */
.line-icon-hover {
  transition: stroke 0.2s ease, transform 0.2s ease;
}

.line-icon-hover:hover {
  stroke: var(--text-primary);
  transform: scale(1.1);
}
```

### 几何图标 SVG 示例

```html
<!-- 圆形 - 柔和、包容 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="12"/>
</svg>

<!-- 方形 - 稳定、结构 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <rect x="6" y="6" width="20" height="20" rx="2"/>
</svg>

<!-- 三角 - 动态、方向 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <polygon points="16,4 28,28 4,28"/>
</svg>

<!-- 菱形 - 精致、焦点 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <polygon points="16,2 30,16 16,30 2,16"/>
</svg>

<!-- 十字 - 平衡、交汇 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <line x1="16" y1="4" x2="16" y2="28"/>
  <line x1="4" y1="16" x2="28" y2="16"/>
</svg>

<!-- 环形 - 循环、连续 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="12"/>
  <circle cx="16" cy="16" r="6"/>
</svg>

<!-- 半圆 - 开放、流动 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <path d="M 4 16 A 12 12 0 0 1 28 16"/>
</svg>

<!-- 波浪 - 节奏、韵律 -->
<svg class="line-icon line-icon-md" viewBox="0 0 32 32">
  <path d="M 2 16 Q 8 8, 14 16 T 26 16 T 38 16"/>
</svg>
```

### 风格图标映射

| 风格 | 推荐图标 | 含义 |
|------|----------|------|
| Neo Minimalism | 十字、方形 | 平衡、结构 |
| Grainy Blur | 波浪、半圆 | 流动、温度 |
| Liquid Glass | 环形、圆形 | 透明、流动 |

---

## 13. 信息密度梯度

诊断报告建议：使用字号大小区分要点层级，或引入竖线时间轴视觉元素。

### 字号层级系统

```css
/* 要点层级：递减字号 + 递减字重 */
.point-primary {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.point-secondary {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.point-tertiary {
  font-size: 18px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .point-primary { font-size: 20px; }
  .point-secondary { font-size: 18px; }
  .point-tertiary { font-size: 16px; }
}
```

### 时间轴视觉

```css
/* 竖线时间轴 */
.timeline {
  position: relative;
  padding-left: 40px;
}

/* 时间轴竖线 */
.timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: var(--border-dark);
}

/* 时间轴项目 */
.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* 时间轴节点 */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-primary);
  transition: transform 0.2s ease;
}

/* 节点悬停放大 */
.timeline-item:hover::before {
  transform: scale(1.3);
}

/* 时间轴标题 */
.timeline-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

/* 时间轴内容 */
.timeline-content {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 时间轴时间标签 */
.timeline-time {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text-tertiary);
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}
```

### 时间轴 HTML 示例

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-time">STEP 01</div>
    <h4 class="timeline-title">反 AI 完美主义</h4>
    <p class="timeline-content">刻意保留手工痕迹和不对称，打破数字设计的过度精致感。</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-time">STEP 02</div>
    <h4 class="timeline-title">8 个主风格体系</h4>
    <p class="timeline-content">从 Neo Brutalism 到 Memphis Revival，覆盖当代设计主流。</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-time">STEP 03</div>
    <h4 class="timeline-title">4 个维度增强</h4>
    <p class="timeline-content">3D 沉浸、实验字体、动态字体、颗粒模糊，为主风格注入深度。</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-time">STEP 04</div>
    <h4 class="timeline-title">3 个质感滤镜</h4>
    <p class="timeline-content">玻璃拟态、新拟态、液态玻璃，作为视觉调味料点缀。</p>
  </div>
</div>
```

---

## 14. 内容溢出防护（CRITICAL）

### 问题背景

当幻灯片内容过多时（如 4+ 个卡片、长列表、多段落），内容高度可能超过 100vh，导致部分内容被裁切在视口外。

### 解决方案：JS 自动适配 + CSS 兜底

#### 方案 A：fitSlideContent() 自动缩放（推荐）

```javascript
/**
 * 在 SlidePresentation 类中添加
 * 自动检测内容溢出并缩放适配
 */
fitSlideContent() {
  this.slides.forEach((slide, index) => {
    const content = slide.querySelector('.slide-content');
    if (!content) return;

    // 重置 transform
    content.style.transform = '';
    content.style.transformOrigin = 'center center';

    // 强制重排获取准确尺寸
    void content.offsetHeight;

    // 检测是否溢出
    const isOverflowing = content.scrollHeight > content.clientHeight;

    if (isOverflowing) {
      // 计算缩放比例，保留 5% 安全边距
      const scale = Math.max(0.5, (content.clientHeight / content.scrollHeight) * 0.95);
      content.style.transform = `scale(${scale})`;
      console.log(`Slide ${index + 1}: scaled to ${(scale * 100).toFixed(0)}%`);
    }
  });
}

// 在构造函数中调用
constructor() {
  // ... 现有代码 ...

  // 页面加载和窗口调整时自动适配
  window.addEventListener('load', () => this.fitSlideContent());
  window.addEventListener('resize', () => this.fitSlideContent());
}
```

#### 方案 B：CSS 兜底（基础防护）

```css
/* ============================================
 * 内容溢出防护 - CSS 基础层
 * ============================================ */

/* Slide 严格限制在视口内 */
.slide {
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* 移动端动态视口 */
  overflow: hidden; /* CRITICAL: 禁止滚动 */
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* 内容容器 - 允许内部滚动检测 */
.slide-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  overflow: hidden; /* 双重保护 */
  padding: var(--slide-padding);
  min-height: 0; /* CRITICAL: 允许 flex 收缩 */
}

/* 子元素允许收缩 */
.slide-content > * {
  flex-shrink: 1;
  min-height: 0;
}

/* 高密度页面特殊处理 */
.slide-dense .slide-content {
  padding: clamp(0.75rem, 3vw, 2rem);
  gap: clamp(0.5rem, 1.5vw, 1rem);
}

/* 卡片网格限制高度 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: clamp(0.5rem, 1.5vw, 1rem);
  max-height: min(60vh, 500px); /* 限制最大高度 */
  overflow: hidden;
}

/* 单个卡片防止过高 */
.feature-card {
  padding: clamp(16px, 2vw, 24px);
  max-height: 200px;
  overflow: hidden;
}

/* Glass Card 限制内容 */
.glass-card {
  max-height: min(70vh, 600px);
  overflow: hidden;
}
```

### 高密度页面设计建议

**问题页面特征**：
- 4+ 个 feature-card 的 grid
- glass-card 内有 3+ 个 list-item
- 多段落 + 底部说明文字

**解决方案**：

1. **压缩间距**：使用 `clamp()` 减小 padding 和 gap
2. **限制卡片高度**：为 `.feature-card` 设置 `max-height`
3. **精简内容**：控制每页要点数量（4-6 个最佳）
4. **使用 slide-dense 类**：为高密度页面应用紧凑样式

```html
<!-- 高密度页面示例 -->
<section class="slide slide-dense" id="slide-13">
  <!-- 内容会更紧凑地显示 -->
</section>
```

### 验证方法

1. 打开 HTML 文件，逐页检查内容是否完整显示
2. 在 DevTools 中切换不同视口尺寸（1920×1080, 1366×768, 375×667）
3. 检查控制台是否有 "scaled to XX%" 的日志输出

---

## 参考来源

### Neo Minimalism
- [Nielsen Norman Group - Characteristics of Minimalism](https://www.nngroup.com/articles/characteristics-minimalism/)
- [99designs - Neo-minimalism in Graphic Design](https://99designs.com/blog/trends/neo-minimalism-graphic-design/)

### Grainy Blur
- [Grainy Gradients - CSS-Tricks](https://css-tricks.com/grainy-gradients/)
- [Glassmorphism Definition - NN/g](https://www.nngroup.com/articles/glassmorphism/)

### Liquid Glass
- [Apple WWDC 2025 - Liquid Glass Introduction](https://developer.apple.com/videos/play/wwdc2025/356/)
- [Getting Clarity on Apple's Liquid Glass - CSS-Tricks](https://css-tricks.com/getting-clarity-on-apples-liquid-glass/)
