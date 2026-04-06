---
name: slidecraft
description: Create stunning, animation-rich HTML presentations from scratch or by converting PowerPoint files. Use when the user wants to build a presentation, convert a PPT/PPTX to web, or create slides for a talk/pitch. Helps non-designers discover their aesthetic through visual exploration rather than abstract choices.
---

# SlideCraft

Create zero-dependency, animation-rich HTML presentations that run entirely in the browser.

## Core Principles

1. **Zero Dependencies** — Single HTML files with inline CSS/JS. No npm, no build tools.
2. **Show, Don't Tell** — Generate visual previews, not abstract choices.
3. **Distinctive Design** — No generic "AI slop." Every presentation must feel custom-crafted.
4. **Viewport Fitting (NON-NEGOTIABLE)** — Every slide MUST fit exactly within 100vh. No scrolling within slides.

详细设计指南参见 [references/design-principles.md](references/design-principles.md)

## Viewport Fitting Rules

- Every `.slide` must have `height: 100vh; height: 100dvh; overflow: hidden;`
- ALL sizes use `clamp(min, preferred, max)` — never fixed px/rem
- Content Density: Title (1 heading + 1 subtitle), Content (4-6 bullets), Grid (6 cards max)
- Images: `max-height: min(50vh, 400px)`
- Include `prefers-reduced-motion` support

**详细规范参见 [references/viewport-base.css](references/viewport-base.css)**

---

## Phase 0: Detect Mode

- **Mode A: New Presentation** — Create from scratch. Go to Phase 1.
- **Mode B: PPT Conversion** — Convert a .pptx file. Go to Phase 4.
- **Mode C: Enhancement** — Improve existing HTML. Read, understand, enhance.

### Mode C Rules

1. Before adding content: Check against density limits
2. Adding images: Must have `max-height: min(50vh, 400px)`. Split slide if full
3. Adding text: Max 4-6 bullets. Split if exceeds
4. After modification: Verify `overflow: hidden`, `clamp()` usage, viewport max-height

---

## Phase 1: Content Discovery

**Ask ALL questions in a single AskUserQuestion call:**

| Header | Question | Options |
|--------|----------|---------|
| Purpose | What is this presentation for? | Pitch deck / Teaching-Tutorial / Conference talk / Internal |
| Length | Approximately how many slides? | Short 5-10 / Medium 10-20 / Long 20+ |
| Content | Do you have content ready? | All ready / Rough notes / Topic only |
| Editing | Need browser editing? | Yes (Recommended) / No |

Remember the editing choice — determines if edit-related code is included in Phase 3.

### Step 1.2: Image Evaluation (if images provided)

1. Scan — List all image files
2. View each — Use Read tool (multimodal)
3. Evaluate — USABLE or NOT, concept, colors
4. Co-design outline — Design around images + text together
5. Confirm — AskUserQuestion: "Does this outline look right?"

---

## Phase 2: Style Discovery

### Step 2.1: Style Selection

**直接输出以下风格组合列表，让用户回复序号或名称：**

```
请选择视觉风格组合（回复序号或名称）：
1.🧱 数字粗野建筑 Neo-Brutalism + 3D — 粗犷几何+立体深度|最适合:创意机构、Web3、科技初创
2.🚀 80年代未来 Retro-Futurism — 霓虹渐变+复古科技感|最适合:科技发布会、游戏、音乐娱乐
3.🎭 极繁实验 Maximalism + Typography — 大胆混搭+实验字体|最适合:创意机构、音乐艺术、时尚品牌
4.🖍️ 天真实验 Naive + Typography — 手绘质感+ playful字体|最适合:教育、儿童产品、手工品牌
5.💎 高端SaaS Bento + 3D + Glass — 卡片布局+精致质感|最适合:SaaS产品、数据仪表板、产品展示
6.☁️ 新极简温暖 Neo-Minimalism — 克制留白+温暖细节|最适合:高端品牌、奢侈品、科技公司
7.🎉 孟菲斯派对 Memphis — 几何图形+明快撞色|最适合:创业公司、潮流品牌、教育产品、社区平台
8.📐 蓝图设计 Blueprint — 精确线条+技术美学|最适合:建筑/工程、技术分享、产品设计
```

**风格组合公式**: A类(主风格) + B类(维度增强) + C类(质感滤镜) — 每个组合包包含完整的设计系统、配色方案、字体搭配和动画预设。

### Step 2.2: Load Style Reference

用户选择后，加载对应的 reference 文件：

| 序号 | 风格组合 | Reference 文件 |
|------|----------|----------------|
| 1 | 数字粗野建筑 | [references/combo-1-neo-brutalism-3d.md](references/combo-1-neo-brutalism-3d.md) |
| 2 | 80年代未来 | [references/combo-2-retro-futurism.md](references/combo-2-retro-futurism.md) |
| 3 | 极繁实验 | [references/combo-3-maximalism-typography.md](references/combo-3-maximalism-typography.md) |
| 4 | 天真实验 | [references/combo-4-naive-typography.md](references/combo-4-naive-typography.md) |
| 5 | 高端SaaS | [references/combo-5-bento-3d-glass.md](references/combo-5-bento-3d-glass.md) |
| 6 | 新极简温暖 | [references/combo-6-neo-minimalism.md](references/combo-6-neo-minimalism.md) |
| 7 | 孟菲斯派对 | [references/combo-7-memphis.md](references/combo-7-memphis.md) |
| 8 | 蓝图设计 | [references/combo-8-blueprint.md](references/combo-8-blueprint.md) |

**同时加载 Delight Library**（为选定风格增加微交互趣味性）：
- [references/delight-library/delight-library.md](references/delight-library/delight-library.md) — 45种微交互机制（每个风格组合5个专属机制）
- [references/delight-library/usage-system.md](references/delight-library/usage-system.md) — 选择规则与约束（每实现随机选择3个）

---

## Phase 3: Generate Presentation

### Step 3.0: Image Requirement Check

Ask (header: "配图"): 是否需要为演示文稿添加配图？
- 不需要配图 — 纯 CSS 视觉效果，跳到 Step 3.2
- 我有配图 — 用户自行准备图片，继续 Step 3.0.1

---

### Step 3.0.1: User Image Guide (仅当选择"我有配图"时)

**引导用户放置图片**：

```
📁 请将图片放到与 HTML 同目录的 images/ 文件夹：

{presentation-name}/
├── index.html（即将生成）
└── images/
    ├── bg-1.png
    ├── hero.png
    └── ...

建议命名规则：
- 背景图：bg-1.png, bg-2.png ...
- Hero 图：hero.png, hero-2.png ...
- 其他图片：使用有意义的名称

放置完成后回复「已就绪」。
```

**用户确认后，进入 Phase 2.5。**

---

## Phase 2.5: Content Preview

生成 ASCII 预览让用户审核（如果用户有配图，预览中包含图片占位符）：

```
╔══════════════════════════════════════════════════════════════╗
║  SLIDE 1: [幻灯片标题]                                         ║
║  ─────────────────────────────────────────                   ║
║  [副标题/说明文字]                                             ║
║  [IMAGE: hero.png] ← 如果用户有配图                           ║
╚══════════════════════════════════════════════════════════════╝
```

Ask (header: "内容预览"): 是否需要调整？ Options: 确认生成 / 修改文字

---

### Step 3.2: Generate HTML

**Before generating, read:**
- [references/html-template.md](references/html-template.md) — HTML architecture and JS features
- [references/viewport-base.css](references/viewport-base.css) — Mandatory CSS (include in full)
- [references/animation-patterns.md](references/animation-patterns.md) — Animation reference
- 风格 reference 文件：`references/[风格名].md`
- **Delight Library**: [references/delight-library/delight-library.md](references/delight-library/delight-library.md)

**Delight Mechanism Selection (IMPORTANT):**
根据选定风格，从 Delight Library 中选择 **3 个微交互机制** 加入 HTML：
1. 参考 [usage-system.md](references/delight-library/usage-system.md) 的选择规则
2. 确保交互类型多样性（至少 1 hover + 1 非 hover）
3. 避免交互冲突（同一元素不绑定多个相同触发器）
4. 实现 `prefers-reduced-motion` 支持

**Key requirements:**
- Single self-contained HTML file, all CSS/JS inline
- Include FULL contents of viewport-base.css
- Use fonts from Fontshare or Google Fonts — never system fonts
- Add clear section comments: `/* === SECTION NAME === */`
- 风格一致性：CSS 变量、字体、动画与选定风格 reference 一致
- **趣味性**：融入 3 个 Delight Mechanisms，增强交互体验
- **CRITICAL - 内容自适应**：SlidePresentation 类必须包含 `fitSlideContent()` 方法，检测内容溢出并自动缩放（详见 [references/html-template.md](references/html-template.md#content-auto-fit)）

**图片引用（如果用户提供了配图）**：
- 使用相对路径：`images/{filename}`
- 背景图：`background-image: url('images/bg-1.png')`
- 内容图片：`<img src="images/hero.png" alt="描述">`
- 确保 HTML 文件与 images/ 目录同级

---

## Phase 4: PPT Conversion

1. **Extract** — `python scripts/extract-pptx.py <input.pptx> <output_dir>` (install: `pip install python-pptx`)
2. **Confirm** — Present extracted slide titles, content, image counts
3. **Style** — Go to Phase 2
4. **Generate** — Convert to chosen style, preserve text, images, order, notes

---

## Phase 5: Delivery

1. **Clean up** — Delete `.claude-design/slide-previews/` if exists
2. **Open** — `open [filename].html`
3. **Summarize** — File location, style name, slide count, navigation (Arrow keys/Space/click), customization (`:root` variables)

---

## Phase 6: Share & Export (Optional)

Ask: "Would you like to share this? I can deploy to URL or export PDF."

Options: Deploy to URL / Export to PDF / Both / No thanks

### 6A: Deploy to URL (Vercel)

1. Check Vercel CLI: `npx vercel --version`
2. Login: `npx vercel login` (首次需要账号)
3. Deploy: `bash scripts/deploy.sh <path-to-presentation>`

**注意**: 本地图片必须与 HTML 同目录；文件名避免空格；重新部署更新同一 URL

### 6B: Export to PDF

```bash
bash scripts/export-pdf.sh <path-to-html> [output.pdf]
```

**注意**: 首次运行安装 Playwright (~150MB)；Slides 必须用 `class="slide"`；大文件加 `--compact`

---

## Supporting Files
| File | Purpose | When |
|------|---------|------|
| [references/combo-1-neo-brutalism-3d.md](references/combo-1-neo-brutalism-3d.md) | 数字粗野建筑风格 | Phase 2 |
| [references/combo-2-retro-futurism.md](references/combo-2-retro-futurism.md) | 80年代未来风格 | Phase 2 |
| [references/combo-3-maximalism-typography.md](references/combo-3-maximalism-typography.md) | 极繁实验风格 | Phase 2 |
| [references/combo-4-naive-typography.md](references/combo-4-naive-typography.md) | 天真实验风格 | Phase 2 |
| [references/combo-5-bento-3d-glass.md](references/combo-5-bento-3d-glass.md) | 高端SaaS风格 | Phase 2 |
| [references/combo-6-neo-minimalism.md](references/combo-6-neo-minimalism.md) | 新极简温暖风格 | Phase 2 |
| [references/combo-7-memphis.md](references/combo-7-memphis.md) | 孟菲斯派对风格 | Phase 2 |
| [references/combo-8-blueprint.md](references/combo-8-blueprint.md) | 蓝图风格 | Phase 2 |
| [references/delight-library/](references/delight-library/) | 45种微交互机制 | Phase 2 & 3 |
| [references/viewport-base.css](references/viewport-base.css) | 响应式 CSS（必须包含） | Phase 3 |
| [references/html-template.md](references/html-template.md) | HTML 结构和 JS | Phase 3 |
| [references/animation-patterns.md](references/animation-patterns.md) | 动画参考 | Phase 3 |
| [scripts/](scripts/) | PPT/部署/导出 | Phase 4 & 6 |

**全部8个风格组合包已实现** ✅
