# SlideCraft Quality Checklist

生成幻灯片后逐项对照。P0 问题不通过不能交付。

---

## P0（不通过不能交付）

- [ ] 每页 `.slide` 都有 `light` / `dark` / `hero light` / `hero dark` 之一
- [ ] 横向模式 deck 有 `<html data-deck="horizontal">`
- [ ] 无连续 3 页同主题
- [ ] 所有图片使用标准比例类 `.frame-img.r-*` 或 `.frame-img.h-*`
- [ ] 所有动画提供 `prefers-reduced-motion` 降级
- [ ] 无内容溢出（通过 `fitSlideContent()` 或校验脚本）
- [ ] 每页只有 1 个视觉锚点
- [ ] 标题与正文字号比 ≥ 5:1
- [ ] 零依赖：除 Fontshare/Google Fonts CDN 外无外部 npm/build 依赖
- [ ] WebGL / canvas 不影响低功耗模式：按 `B` 键能停止动画并显示最终态

---

## P1

- [ ] `.chrome` 与 `.kicker` 内容不重复
- [ ] 8 页以上 deck 至少有 1 个 `hero dark` 和 1 个 `hero light`
- [ ] WebGL 背景仅在 hero 页透出（普通页背景不透明）
- [ ] 一份 deck 只使用一套 accent 色
- [ ] 所有 slide 都标注 `data-layout`
- [ ] `.frame-img` 图片使用 `object-position: top center`，容器背景占位
- [ ] 中西文混排容器使用 `.mixed-text`
- [ ] 字体已加载并显示正确（检查 Fontshare/Google Fonts URL）

---

## P2/P3

- [ ] 纹理层透明度在 0.04–0.10 之间
- [ ] 页边距统一使用 clamp token（`--slide-padding`、`--content-gap`）
- [ ] 动画时长在 200–600 ms 范围内
- [ ] 无纯 RGB 主色（`#FF0000`、`#0000FF`、`#00FF00`）
- [ ] 无 SVG `feTurbulence` 作为主要纹理
- [ ] 键盘导航完整（上下左右/空格/PageUp/PageDown/Home/End/B）
- [ ] 移动端触摸翻页可用
- [ ] 图片不重复（logo 除外）

---

## 风格专项检查

### Editorial Magazine / 杂志风

- [ ] Display 使用衬线（Oranienbaum / Tiempos Headline / Noto Serif SC）
- [ ] 正文使用非衬线（Satoshi / DM Sans / Noto Sans SC）
- [ ] 元数据使用等宽（JetBrains Mono）
- [ ] 留白 ≥ 40%
- [ ] 使用 `--texture-paper` 纹理
- [ ] 图片网格使用固定高度 `h-*`，不用 `aspect-ratio`
- [ ] hero 页启用 WebGL fluid 背景

### Swiss / 瑞士风

- [ ] 全程无衬线
- [ ] 只有一个 accent 色
- [ ] 无渐变 / 阴影 / 圆角
- [ ] 主标题与正文比例 ≥ 8:1
- [ ] 大字号双约束限高 `min(Xvw, Yvh)`
- [ ] 每个 slide 写 `data-layout="Sxx"`

---

## 交付前命令

```bash
# 校验主题节奏、布局、图片比例
node scripts/validate-deck.mjs path/to/index.html

# 打开浏览器预览
open path/to/index.html
```
