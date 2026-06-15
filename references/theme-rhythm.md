# Theme Rhythm

SlideCraft × Guizang 主题节奏规范。

---

## 四类主题

每个 `<section class="slide">` 必须带以下四类之一：

| Class | 含义 | 用途 |
|-------|------|------|
| `light` | 正文页，浅色底深色字 | 数据、列表、图文 |
| `dark` | 正文页，深色底浅色字 | 故事、引用、对比、呼吸页 |
| `hero light` | hero 页，浅色底，WebGL/纹理透出 | 封面、幕封、大引用 |
| `hero dark` | hero 页，深色底，WebGL/纹理透出 | 封面、幕封、收尾 |

> 注意：不要只写 `hero`，必须同时带 `light` 或 `dark`。

---

## 硬规则

1. **禁止连续 3 页相同主题**（包括 light 堆叠、dark 堆叠、hero 堆叠）。
2. **8 页以上 deck 必须至少有 1 个 `hero dark` 和 1 个 `hero light`**。
3. **整个 deck 不能只有 `light` 正文页**，必须有 `dark` 正文页制造呼吸。
4. **每 3–4 页插入 1 个 hero 页**（封面/幕封/问题/大引用）。
5. **hero 页不堆叠大段正文**，只放 kicker + 大标题 + 一句 lead + meta。

---

## 节奏模板

### 8 页标准节奏

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

### 12 页扩展节奏

| 页 | 主题 | 布局 | 备注 |
|---|---|---|---|
| 1 | hero dark | L01 Cover | 开场 |
| 2 | light | L03 Big Numbers | 数据 |
| 3 | dark | L04 Quote + Image | 故事 |
| 4 | light | L05 Image Grid | 实证 |
| 5 | hero light | L02 Section | 第一幕封 |
| 6 | dark | L07 Big Quote | 金句 |
| 7 | light | L06 Pipeline | 流程 |
| 8 | dark | L04 Quote + Image | 案例 |
| 9 | hero dark | L02 Section | 第二幕封 |
| 10 | light | L03 Big Numbers | 数据 |
| 11 | dark | L08 Before/After | 对比 |
| 12 | hero light | L09 Closing | 收尾 |

### 6 页短节奏

| 页 | 主题 | 布局 | 备注 |
|---|---|---|---|
| 1 | hero dark | L01 Cover | 开场 |
| 2 | light | L03 Big Numbers | 数据 |
| 3 | dark | L04 Quote + Image | 故事 |
| 4 | hero light | L02 Section | 幕封 |
| 5 | light | L06 Pipeline | 流程 |
| 6 | hero dark | L09 Closing | 收尾 |

---

## hero 页内容约束

hero 页只应包含：

```html
<section class="slide hero dark" data-layout="L01" data-animate="hero">
    <div class="texture-overlay" aria-hidden="true"></div>
    <div class="chrome">...</div>
    <div class="slide-content mixed-text">
        <div class="kicker" data-anim>...</div>
        <h1 class="h-hero" data-anim>...</h1>
        <h2 class="h-sub" data-anim>...</h2> <!-- 可选 -->
        <p class="lead" data-anim>...</p>
        <div class="meta-row" data-anim>...</div>
    </div>
    <div class="foot">...</div>
</section>
```

禁止在 hero 页放置：
- 超过 2 段的正文
- 复杂图表或表格
- 多图网格
- 超过 6 个动画元素

---

## 常见错误

| 错误 | 修正 |
|------|------|
| `<section class="slide hero">` | 改为 `hero light` 或 `hero dark` |
| 连续 3 页 `light` | 中间插入一页 `dark` 或 `hero dark` |
| 8 页以上只有 `hero dark` | 至少加一页 `hero light` |
| hero 页塞满正文 | 拆分到正文页，hero 页只留标题 + lead |
| 主题类写在 `.slide-content` 上 | 必须写在 `<section class="slide ...">` 上 |

---

## 校验

生成后运行：

```bash
node scripts/validate-deck.mjs path/to/index.html
```

校验脚本会检查主题类存在性、连续同主题、布局属性等。
