# Design Principles

详细设计指南，从 SKILL.md 提取。

---

## Design Aesthetics

你容易生成通用、平庸的输出。在前端设计中，这会产生用户所说的"AI slop"美学。避免这种情况：创造独特、令人惊喜的前端设计。

**重点关注**：

- **Typography**：选择美观、独特、有趣的字体。避免 Arial、Inter 等通用字体；选择能提升前端美感的独特字体。
- **Color & Theme**：坚持统一的美学。使用 CSS 变量保持一致性。主导色配锐利强调色优于 timid、均匀分布的调色板。从 IDE 主题和文化美学中汲取灵感。
- **Motion**：使用动画增加效果和微交互。HTML 优先使用 CSS-only 方案。React 可用时使用 Motion 库。专注于高影响力时刻：一个精心编排的页面加载配合交错显示（animation-delay）比分散的微交互更能带来愉悦感。
- **Backgrounds**：营造氛围和深度，而非默认纯色。叠加 CSS 渐变、使用几何图案或添加与整体美学匹配的上下文效果。

---

## Avoid Generic AI Patterns

**Fonts**: Inter, Roboto, Arial, system fonts as display

**Colors**: `#6366f1` (generic indigo), purple gradients on white

**Layouts**: Everything centered, generic hero sections, identical card grids

**Cookie-cutter design** that lacks context-specific character

---

## Creative Interpretation

创造性地诠释，做出真正为上下文设计的意外选择。在明暗主题、不同字体、不同美学之间变化。你仍然倾向于收敛到常见选择（如 Space Grotesk）。避免这种情况：跳出框框思考！

---

*来源：SKILL.md Design Aesthetics 部分*
