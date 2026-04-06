# SlideCraft

> **零依赖、动画丰富的 HTML 演示文稿生成器**
> Zero-dependency, animation-rich HTML presentation generator

[中文](#中文文档) | [English](#english-docs)

---

## 致谢 / Credits

本项目的设计系统基于 Zara Zhang 的 [frontend-slides](https://github.com/zarazhangrui/frontend-slides) 进行了大量改进和扩展。

The design system of this project is derived from Zara Zhang's [frontend-slides](https://github.com/zarazhangrui/frontend-slides), with significant enhancements including:

- **8 种精心设计的风格组合** — 采用 A+B+C 组合公式（主风格 + 维度增强 + 质感滤镜）
- **40 种微交互机制（Delight Library）** — 每种风格 5 个专属机制
- **完善的 6 阶段工作流程** — 内容发现 → 风格选择 → 预览确认 → 生成 → 交付 → 分享
- **内容自适应系统** — `fitSlideContent()` 防止内容溢出
- **中文支持** — 完整的中文界面和文档

---

<a name="中文文档"></a>

## 中文文档

### 这是什么？

**SlideCraft** 是一个 Claude Code skill，帮助你创建零依赖、动画丰富的 HTML 演示文稿。你不需要懂 CSS 或 JavaScript，只需要告诉 Claude 你想要什么内容，它会帮你生成精美的网页演示。

### 核心特色

| 特性 | 说明 |
|------|------|
| **零依赖** | 单个 HTML 文件，所有 CSS/JS 内联，无需 npm、构建工具、框架 |
| **视觉探索** | 不需要用语言描述设计偏好，直接从视觉预览中选择 |
| **PPT 转换** | 将现有 PowerPoint 转换为网页，保留所有图片和内容 |
| **反 AI 同质化** | 精选的独特风格，避免通用 AI 美学（告别紫色渐变） |
| **微交互系统** | 40 种精心设计的微交互机制，让演示"活起来" |
| **生产级质量** | 可访问、响应式、代码注释完善，可自由定制 |

### 8 种风格组合

| 序号 | 风格组合 | 核心气质 | 适用场景 |
|------|----------|----------|----------|
| 1 | 🧱 **数字粗野建筑** Neo-Brutalism + 3D | 粗犷几何+立体深度 | 创意机构、Web3、科技初创 |
| 2 | 🚀 **80年代未来** Retro-Futurism | 霓虹渐变+复古科技感 | 科技发布会、游戏、音乐娱乐 |
| 3 | 🎭 **极繁实验** Maximalism + Typography | 大胆混搭+实验字体 | 创意机构、音乐艺术、时尚品牌 |
| 4 | 🖍️ **天真实验** Naive + Typography | 手绘质感+playful字体 | 教育、儿童产品、手工品牌 |
| 5 | 💎 **高端SaaS** Bento + 3D + Glass | 卡片布局+精致质感 | SaaS产品、数据仪表板、产品展示 |
| 6 | ☁️ **新极简温暖** Neo-Minimalism | 克制留白+温暖细节 | 高端品牌、奢侈品、科技公司 |
| 7 | 🎉 **孟菲斯派对** Memphis | 几何图形+明快撞色 | 创业公司、潮流品牌、教育产品 |
| 8 | 📐 **蓝图设计** Blueprint | 精确线条+技术美学 | 建筑/工程、技术分享、产品设计 |

**风格组合公式**: `A类(主风格) + B类(维度增强) + C类(质感滤镜)` — 每个组合包包含完整的设计系统、配色方案、字体搭配和动画预设。

<img width="2841" height="1597" alt="65928c234fe1c01af4c24746b9333251" src="https://github.com/user-attachments/assets/878e6608-338e-4031-a2d0-a2bd7827d051" />
<img width="2806" height="1598" alt="52bfd681dc465b38df4ad44a00488229" src="https://github.com/user-attachments/assets/66fbd7e8-07c9-4c8e-ae3c-daf3bd3f83d0" />
<img width="2819" height="1440" alt="ef896a5608013562a2fd66eca332deb6" src="https://github.com/user-attachments/assets/7fc4e14d-4a88-4921-9a3c-c8d4bde56302" />
<img width="2706" height="1423" alt="5c5c1525046b53673bbcbd6044cc0dfe" src="https://github.com/user-attachments/assets/538a79fb-e68a-44bb-806d-8fb60bd1a127" />
<img width="2781" height="1389" alt="f697850a84319446fe795404e942d2ec" src="https://github.com/user-attachments/assets/15e88540-7b05-4880-9030-d585dcd85be5" />
<img width="2824" height="1499" alt="b6cca638a82d0ab30dc11bbf762ac843" src="https://github.com/user-attachments/assets/a49152a4-03ef-46fa-aea5-6a546d2f2d1c" />
<img width="2746" height="1481" alt="69ef24783f13368c1991acf012150453" src="https://github.com/user-attachments/assets/d8f51c9f-a2a2-4056-b268-7e67f9ad647a" />
<img width="2799" height="1516" alt="7b6d72610741ff1efa040f8a5beee6c2" src="https://github.com/user-attachments/assets/df734a93-e5a0-4cbf-8351-9cfc8ed4d019" />




### 微交互系统（Delight Library）

每种风格组合配备 5 个专属微交互机制，生成演示时随机选择 3 个加入：

| 风格组合 | 示例微交互 |
|----------|-----------|
| 新极简温暖 | 章节犹豫、留白凝视、字重欺骗、光标雕塑、错误对称 |
| 孟菲斯派对 | 弹跳字符、几何追随、撞色闪烁、波浪字行、图案脉冲 |
| 蓝图设计 | 线条绘制、测量延伸、发光脉冲、网格追踪、标注揭示 |
| 数字粗野建筑 | 硬边弹跳、3D翻转、阴影位移、堆叠揭示、透视倾斜 |
| 80年代未来 | 霓虹脉动、打字机、网格波动、颗粒漂移、色分离 |
| 极繁实验 | 渐变流动、重叠字影、字符爆炸、描边填充、旋转标签 |
| 天真实验 | 手绘入场、抖动悬停、贴纸弹跳、涂鸦光标、排版反抗 |
| 高端SaaS | 模块抬升、玻璃光泽、网格重排、深度层叠、数据脉动 |

### 使用方法

#### 创建新演示

```
/slidecraft

> "我想为我的 AI 创业公司做一个 Pitch Deck"
```

Skill 会：

1. 询问内容（幻灯片数量、核心信息、图片）
2. 展示 8 种风格组合供选择
3. 生成 ASCII 预览确认内容
4. 创建完整的演示文稿
5. 在浏览器中打开

#### 转换 PowerPoint

```
/slidecraft

> "把我的 presentation.pptx 转换成网页"
```

Skill 会：

1. 提取 PPT 中的所有文本、图片和备注
2. 展示提取的内容供确认
3. 让你选择视觉风格
4. 生成包含所有原始素材的 HTML 演示

### 分享演示

#### 部署到 URL

```bash
bash scripts/deploy.sh ./my-deck/
```

使用 [Vercel](https://vercel.com)（免费）部署到永久可分享的 URL。

#### 导出为 PDF

```bash
bash scripts/export-pdf.sh ./presentation.html ./output.pdf
```

使用 [Playwright](https://playwright.dev) 截图并合成 PDF（动画不会被保留）。

### 架构

采用**渐进式披露**设计 — 主 `SKILL.md` 是简洁的地图（~250 行），支持文件按需加载：

| 文件 | 用途 | 加载时机 |
|------|------|----------|
| `SKILL.md` | 核心工作流程和规则 | 始终加载 |
| `references/viewport-base.css` | 必须包含的响应式 CSS | Phase 3（生成时） |
| `html-template.md` | HTML 结构和 JS 功能 | Phase 3 |
| `animation-patterns.md` | CSS/JS 动画参考 | Phase 3 |
| `references/combo-*.md` | 8 个视觉风格组合 | Phase 2（风格选择） |
| `references/delight-library/` | 40 个微交互模式 | Phase 2 & 3 |
| `scripts/extract-pptx.py` | PPT 内容提取 | Phase 4（转换） |
| `scripts/deploy.sh` | Vercel 部署 | Phase 6（分享） |
| `scripts/export-pdf.sh` | 导出 PDF | Phase 6（分享） |

### 安装

#### 前置要求

- [Claude Code CLI](https://claude.ai/claude-code)
- （可选）Python 3.8+ 用于 PPT 转换
- （可选）Node.js 18+ 用于 Vercel 部署和 PDF 导出

#### macOS / Linux

```bash
# 克隆仓库
git clone https://github.com/maverickgao8848/slidecraft.git
cd slidecraft

# 安装到 Claude Code
mkdir -p ~/.claude/skills/slidecraft
cp -r ./* ~/.claude/skills/slidecraft/
```

#### Windows (PowerShell)

```powershell
# 克隆仓库
git clone https://github.com/maverickgao8848/slidecraft.git
cd slidecraft

# 安装到 Claude Code
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills\slidecraft"
Copy-Item -Recurse -Force .\* "$env:USERPROFILE\.claude\skills\slidecraft\"
```

#### 验证安装

在 Claude Code 中输入 `/slidecraft`，应该看到 skill 激活。

#### 可选依赖

**PPT 转换：**

```bash
pip install -r requirements.txt
```

**Vercel 部署：**

```bash
npm install -g vercel
vercel login
```

### 系统要求

| 功能 | 要求 |
|------|------|
| 核心功能 | Claude Code CLI |
| PPT 转换 | Python 3.8+ + `python-pptx` |
| URL 部署 | Node.js 18+ + Vercel 账号（免费）|
| PDF 导出 | Node.js 18+（Playwright 自动安装）|
| 运行脚本 | macOS/Linux 终端 或 Windows Git Bash/WSL |

---

<a name="english-docs"></a>

## English Docs

### What is this?

**SlideCraft** is a Claude Code skill that helps you create zero-dependency, animation-rich HTML presentations. No CSS or JavaScript knowledge required — just tell Claude what content you want, and it generates beautiful web slides for you.

### Key Features

| Feature | Description |
|---------|-------------|
| **Zero Dependencies** | Single HTML files with inline CSS/JS. No npm, no build tools, no frameworks. |
| **Visual Exploration** | Don't need to describe design preferences in words — pick from visual previews. |
| **PPT Conversion** | Convert existing PowerPoint files to web, preserving all images and content. |
| **Anti-AI-Slop** | Curated distinctive styles that avoid generic AI aesthetics (bye-bye, purple gradients). |
| **Delight Library** | 40 carefully designed micro-interaction mechanisms to make presentations "alive". |
| **Production Quality** | Accessible, responsive, well-commented code you can customize freely. |

### 8 Style Combos

| # | Style Combo | Core Vibe | Best For |
|---|-------------|-----------|----------|
| 1 | 🧱 **Neo-Brutalism + 3D** | Bold geometry + depth | Creative agencies, Web3, tech startups |
| 2 | 🚀 **Retro-Futurism** | Neon gradients + retro-tech | Tech launches, gaming, music/entertainment |
| 3 | 🎭 **Maximalism + Typography** | Bold mix + experimental type | Creative agencies, music/art, fashion brands |
| 4 | 🖍️ **Naive + Typography** | Hand-drawn feel + playful type | Education, kids' products, artisan brands |
| 5 | 💎 **Bento + 3D + Glass** | Card layout + refined texture | SaaS products, dashboards, product showcases |
| 6 | ☁️ **Neo-Minimalism** | Restrained whitespace + warm details | Premium brands, luxury, tech companies |
| 7 | 🎉 **Memphis** | Geometric shapes + bold colors | Startups, trendy brands, educational products |
| 8 | 📐 **Blueprint** | Precise lines + technical aesthetic | Architecture/engineering, tech talks, product design |

**Combo Formula**: `Style A + Dimension B + Texture C` — each combo includes a complete design system, color palette, typography pairing, and animation presets.

### Delight Library (Micro-Interactions)

Each style combo comes with 5 unique micro-interaction mechanisms. When generating a presentation, 3 are randomly selected:

| Style Combo | Example Mechanisms |
|-------------|-------------------|
| Neo-Minimalism | Hesitating Numbers, Gazing Whitespace, Weight Deception, Cursor Sculpture, False Symmetry |
| Memphis | Bouncing Characters, Geometry Follower, Color Flash, Wavy Line, Pattern Pulse |
| Blueprint | Line Draw Animation, Dimension Line Extend, Glow Pulse, Grid Tracking, Annotation Reveal |
| Neo-Brutalism 3D | Hard Edge Bounce, 3D Flip Card, Shadow Shift, Stack Reveal, Perspective Tilt |
| Retro-Futurism | Neon Pulse, Typewriter Effect, Grid Wave, Grain Drift, Chromatic Aberration |
| Maximalism Typography | Gradient Flow Text, Overlapping Shadow, Character Explosion, Stroke Fill, Spinning Tags |
| Naive Typography | Hand-drawn Enter, Wobble Hover, Sticker Bounce, Doodle Cursor, Layout Rebellion |
| Bento 3D Glass | Module Lift, Glass Shine, Grid Shuffle, Depth Stack, Data Pulse |

### Usage

#### Create a New Presentation

```
/slidecraft

> "I want to create a pitch deck for my AI startup"
```

The skill will:

1. Ask about your content (slides, messages, images)
2. Show 8 style combos to choose from
3. Generate ASCII preview for content confirmation
4. Create the full presentation
5. Open it in your browser

#### Convert a PowerPoint

```
/slidecraft

> "Convert my presentation.pptx to a web slideshow"
```

The skill will:

1. Extract all text, images, and notes from your PPT
2. Show extracted content for confirmation
3. Let you pick a visual style
4. Generate an HTML presentation with all original assets

### Sharing Your Presentations

#### Deploy to a Live URL

```bash
bash scripts/deploy.sh ./my-deck/
```

Uses [Vercel](https://vercel.com) (free tier) to deploy to a permanent, shareable URL.

#### Export to PDF

```bash
bash scripts/export-pdf.sh ./presentation.html ./output.pdf
```

Uses [Playwright](https://playwright.dev) to screenshot and combine into a PDF. Animations are not preserved (static snapshot).

### Architecture

Uses **progressive disclosure** — the main `SKILL.md` is a concise map (~250 lines), with supporting files loaded on-demand:

| File | Purpose | Loaded When |
|------|---------|-------------|
| `SKILL.md` | Core workflow and rules | Always |
| `references/viewport-base.css` | Mandatory responsive CSS | Phase 3 (generation) |
| `html-template.md` | HTML structure and JS features | Phase 3 |
| `animation-patterns.md` | CSS/JS animation reference | Phase 3 |
| `references/combo-*.md` | 8 visual style combinations | Phase 2 (style selection) |
| `references/delight-library/` | 40 micro-interaction patterns | Phase 2 & 3 |
| `scripts/extract-pptx.py` | PPT content extraction | Phase 4 (conversion) |
| `scripts/deploy.sh` | Deploy to Vercel | Phase 6 (sharing) |
| `scripts/export-pdf.sh` | Export slides to PDF | Phase 6 (sharing) |

### Installation

#### Prerequisites

- [Claude Code CLI](https://claude.ai/claude-code)
- (Optional) Python 3.8+ for PPT conversion
- (Optional) Node.js 18+ for Vercel deployment and PDF export

#### macOS / Linux

```bash
# Clone the repository
git clone https://github.com/maverickgao8848/slidecraft.git
cd slidecraft

# Install to Claude Code
mkdir -p ~/.claude/skills/slidecraft
cp -r ./* ~/.claude/skills/slidecraft/
```

#### Windows (PowerShell)

```powershell
# Clone the repository
git clone https://github.com/maverickgao8848/slidecraft.git
cd slidecraft

# Install to Claude Code
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills\slidecraft"
Copy-Item -Recurse -Force .\* "$env:USERPROFILE\.claude\skills\slidecraft\"
```

#### Verify Installation

In Claude Code, type `/slidecraft` — you should see the skill activate.

#### Optional Dependencies

**For PPT conversion:**

```bash
pip install -r requirements.txt
```

**For Vercel deployment:**

```bash
npm install -g vercel
vercel login
```

### Requirements

| Feature | Requirement |
|---------|-------------|
| Core functionality | Claude Code CLI |
| PPT conversion | Python 3.8+ + `python-pptx` |
| URL deployment | Node.js 18+ + Vercel account (free) |
| PDF export | Node.js 18+ (Playwright installs automatically) |
| Running scripts | macOS/Linux terminal or Windows Git Bash/WSL |

---

## Philosophy / 设计哲学

This skill was born from the belief that:

1. **You don't need to be a designer to make beautiful things.** You just need to react to what you see.

2. **Dependencies are debt.** A single HTML file will work in 10 years. A React project from 2019? Good luck.

3. **Generic is forgettable.** Every presentation should feel custom-crafted, not template-generated.

4. **Delight matters.** Micro-interactions transform a static presentation into an experience.

---

## License / 许可证

MIT — Use it, modify it, share it.
