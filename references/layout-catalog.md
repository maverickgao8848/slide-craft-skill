# Layout Catalog

跨 combo 的通用布局骨架。生成幻灯片时优先从本目录选取，并标注 `data-layout` 属性，不要随意发明新结构。

---

## 使用说明

1. 每个 `<section class="slide">` 必须带 `data-layout="Lxx"`。
2. 每个 slide 必须同时带主题类：`light` / `dark` / `hero light` / `hero dark`。
3. 通过 `data-animate="{recipe}"` 选择动画配方：`cascade` / `hero` / `quote` / `directional` / `pipeline` / `data`。
4. 内容容器使用 `.slide-content.mixed-text`。
5. 图片使用 `.frame-img.r-*` 标准比例系统。

---

## L01 · Hero Cover

**用途**：开场封面
**推荐主题**：`hero dark` / `hero light`
**必选元素**：`.chrome`、`.kicker`、`.h-hero`、`.lead`、`.foot`
**图片槽位**：无，或使用全出血背景图

```html
<section class="slide hero dark" data-layout="L01" data-animate="hero">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="chrome">
        <div>A Talk · 2026.04.22</div>
        <div>Vol.01</div>
    </div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap); align-content:center; min-height:70vh;">
        <div class="kicker" data-anim>私享会 · Speaker</div>
        <h1 class="h-hero" data-anim>一人公司</h1>
        <h2 class="h-sub" data-anim>被 AI 折叠的组织</h2>
        <p class="lead" style="max-width:60vw;" data-anim>
            一个 AI 创作者 —— 在 64 天里做了 11 万行代码、在 9 个平台上持续输出。
        </p>
        <div class="meta-row" data-anim>
            <span>品牌</span><span>·</span><span>独立创作者</span>
        </div>
    </div>
    <div class="foot">
        <div>一场关于 AI · 组织 · 个体的分享</div>
        <div>— 2026 —</div>
    </div>
</section>
```

---

## L02 · Section Divider

**用途**：章节幕封
**推荐主题**：`hero dark` / `hero light`
**必选元素**：`.kicker`、`.h-xl`、`.lead`
**图片槽位**：可选背景图或编号装饰

```html
<section class="slide hero dark" data-layout="L02" data-animate="hero">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap); align-content:center;">
        <div class="kicker" data-anim>Chapter 01</div>
        <h1 class="h-xl" data-anim>问题的提出</h1>
        <p class="lead" style="max-width:55vw;" data-anim>
            当 AI 能够承担执行层，组织的形态会发生什么变化？
        </p>
        <div class="hairline line-extend" data-anim></div>
    </div>
</section>
```

---

## L03 · Big Numbers

**用途**：数据大字报
**推荐主题**：`light` / `dark`
**必选元素**：`.kicker`、`.big-num`、`.lead`
**图片槽位**：无

```html
<section class="slide light" data-layout="L03" data-animate="data">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap); align-content:center;">
        <div class="kicker" data-anim>数据 Data</div>
        <div class="big-num" data-anim data-anim-type="number">64</div>
        <p class="lead" data-anim>
            天完成 11 万行代码，覆盖 9 个内容平台。
        </p>
        <div class="meta-row" data-anim>
            <span>Source</span><span>·</span><span>2026 Q1 内部统计</span>
        </div>
    </div>
</section>
```

---

## L04 · Quote + Image

**用途**：左文右图 / 故事页
**推荐主题**：`light` / `dark`
**必选元素**：`.kicker`、`.h-xl`、`.lead` / `.body`、`.frame-img`
**图片槽位**：右侧主图，推荐 `r-16x10` / `r-4x3`

```html
<section class="slide light" data-layout="L04" data-animate="directional">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; grid-template-columns:1fr 1fr; gap:var(--section-gap); align-items:center;">
        <div data-anim data-dir="left">
            <div class="kicker">故事 Story</div>
            <h2 class="h-xl" style="margin-bottom:var(--content-gap);">一个人的军队</h2>
            <p class="body">
                过去需要一整个团队的工作，现在由一个人加上 AI 完成。这不是效率的简单提升，而是生产关系的重构。
            </p>
        </div>
        <figure class="frame-img r-16x10" data-anim data-dir="right">
            <img src="images/04-story.png" alt="一个人的工作流">
        </figure>
    </div>
</section>
```

---

## L05 · Image Grid

**用途**：多图网格 / 截图实证
**推荐主题**：`light`
**必选元素**：`.kicker`、`.h-xl`、网格 `.frame-img.h-*`
**图片槽位**：2–6 张统一高度图

```html
<section class="slide light" data-layout="L05" data-animate="cascade">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap);">
        <div data-anim>
            <div class="kicker">实证 Evidence</div>
            <h2 class="h-xl">多平台内容矩阵</h2>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:var(--content-gap);">
            <figure class="frame-img h-24" data-anim>
                <img src="images/05-a.png" alt="平台 A">
            </figure>
            <figure class="frame-img h-24" data-anim>
                <img src="images/05-b.png" alt="平台 B">
            </figure>
            <figure class="frame-img h-24" data-anim>
                <img src="images/05-c.png" alt="平台 C">
            </figure>
        </div>
        <p class="body" style="max-width:70vw;" data-anim>
            同一内容资产在多个平台以不同形态复用。
        </p>
    </div>
</section>
```

---

## L06 · Pipeline

**用途**：流程 / 时间线
**推荐主题**：`light`
**必选元素**：`.kicker`、`.h-xl`、步骤列表
**图片槽位**：无

```html
<section class="slide light" data-layout="L06" data-animate="pipeline">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap);">
        <div data-anim>
            <div class="kicker">流程 Pipeline</div>
            <h2 class="h-xl">从想法到发布</h2>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:var(--content-gap); align-items:start;">
            <div class="body" data-anim>
                <strong>01</strong><br>研究选题
            </div>
            <div class="body" data-anim>
                <strong>02</strong><br>脚本撰写
            </div>
            <div class="body" data-anim>
                <strong>03</strong><br>视觉包装
            </div>
            <div class="body" data-anim>
                <strong>04</strong><br>多平台分发
            </div>
        </div>
        <div class="hairline line-extend" data-anim></div>
    </div>
</section>
```

---

## L07 · Big Quote

**用途**：大引用页 / 金句
**推荐主题**：`dark` 优先
**必选元素**：引用文字、来源 `.meta-row`
**图片槽位**：无

```html
<section class="slide dark" data-layout="L07" data-animate="quote">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap); align-content:center;">
        <div class="kicker" data-anim>Quote</div>
        <blockquote class="h-xl" style="font-family:var(--font-display); line-height:1.1;" data-anim>
            "AI 不会替代人，但会用 AI 的人会替代不会用的人。"
        </blockquote>
        <div class="meta-row" data-anim>
            <span>—</span><span>某人</span><span>·</span><span>某处</span>
        </div>
    </div>
</section>
```

---

## L08 · Before / After

**用途**：对比页
**推荐主题**：`light`
**必选元素**：两列对比、`.hairline` 分隔
**图片槽位**：可选两侧各一张

```html
<section class="slide light" data-layout="L08" data-animate="directional">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="slide-content mixed-text" style="display:grid; grid-template-columns:1fr 1fr; gap:var(--section-gap); align-items:center;">
        <div data-anim data-dir="left">
            <div class="kicker">Before</div>
            <h2 class="h-xl">团队协作</h2>
            <p class="body">角色分工明确，但沟通成本高，反馈周期长。</p>
        </div>
        <div data-anim data-dir="right" style="border-left:1px solid rgba(127,127,127,0.25); padding-left:var(--section-gap);">
            <div class="kicker">After</div>
            <h2 class="h-xl">人机协作</h2>
            <p class="body">一个人指挥多个 AI agent，迭代速度指数级提升。</p>
        </div>
    </div>
</section>
```

---

## L09 · Closing

**用途**：收尾页
**推荐主题**：`hero dark` / `hero light`
**必选元素**：`.chrome`、`.h-hero` / `.h-xl`、CTA `.lead`、`.foot`
**图片槽位**：无

```html
<section class="slide hero dark" data-layout="L09" data-animate="hero">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="chrome">
        <div>Thanks</div>
        <div>End</div>
    </div>
    <div class="slide-content mixed-text" style="display:grid; gap:var(--content-gap); align-content:center; min-height:70vh;">
        <div class="kicker" data-anim>结语</div>
        <h1 class="h-hero" data-anim>开始你的<br>一人公司</h1>
        <p class="lead" style="max-width:60vw;" data-anim>
            工具已经ready，唯一的问题是：你准备好了吗？
        </p>
    </div>
    <div class="foot">
        <div>name@example.com</div>
        <div>— 2026 —</div>
    </div>
</section>
```

---

## 节奏模板

8 页 deck 的推荐主题与布局节奏：

| 页 | 主题 | 布局 | 备注 |
|---|---|---|---|
| 1 | hero dark | L01 Cover | 开场 |
| 2 | light | L03 Big Numbers | 数据 |
| 3 | dark | L04 Quote + Image | 故事 |
| 4 | light | L06 Pipeline | 流程 |
| 5 | hero light | L02 Section | 幕封 |
| 6 | dark | L07 Big Quote | 金句 |
| 7 | light | L08 Before/After | 对比 |
| 8 | hero dark | L09 Closing | 收尾 |

---

## 瑞士风格子目录

对于 Swiss/数据驱动风格，可额外参考 `references/swiss-layout-catalog.md`（可选），包含 S01–S22 等 22 个登记版式。
