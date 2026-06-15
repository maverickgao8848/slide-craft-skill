# Animation Patterns Reference

Use this reference when generating presentations. Match animations to the intended feeling. All patterns must respect the design iron rules in `design-principles.md`.

---

## Core Animation Rules

1. **Duration**: Default 200–600 ms. One-shot entrance effects should complete within this range.
2. **Amplitude**: Reduce default movement by 50% compared to typical web animation. Prefer `translateY(20px)` over `translateY(40px–60px)`.
3. **Easing**: Use `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) or `cubic-bezier(0.4, 0, 0.2, 1)`.
4. **Infinite loops**: Avoid or keep extremely subtle (period ≥ 8 s, opacity/scale changes ≤ 10%).
5. **Reduced motion**: Every animation must have a `prefers-reduced-motion` fallback.
6. **One visual anchor**: Animate the anchor element first; secondary elements stagger in.

---

## Animation Recipes

Recipes are triggered by `data-animate="{recipe}"` on `<section class="slide">`. Animated children receive `data-anim`.

| Recipe | Stagger | Movement | Best For |
|--------|---------|----------|----------|
| `cascade` | 80 ms | fade + `translateY(20px)` | Default body slides |
| `hero` | 120 ms | fade + `translateY(30px)` | Covers / section breaks |
| `quote` | 550 ms | fade + `translateY(10px)` | Pull quotes / statements |
| `directional` | 100 ms | left from `-30px`, right from `+30px` | Split layouts |
| `pipeline` | manual | fade + `translateY(15px)` | Process / timeline |
| `data` | 80 ms | number `scale(0.9→1)`, bar `scaleY(0→1)` | Data / KPI slides |

### Recipe Configuration

```javascript
const recipes = {
    cascade: {
        selector: '[data-anim]',
        stagger: 80,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        duration: 500
    },
    hero: {
        selector: '[data-anim]',
        stagger: 120,
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
        duration: 700
    },
    quote: {
        selector: '[data-anim]',
        stagger: 550,
        from: { opacity: 0, y: 10 },
        to: { opacity: 1, y: 0 },
        duration: 600
    },
    directional: {
        left: { from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0 } },
        right: { from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0 } }
    },
    pipeline: {
        manual: true,
        selector: '[data-anim]'
    },
    data: {
        number: { from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 } },
        bar: { from: { scaleY: 0 }, to: { scaleY: 1 } }
    }
};
```

### CSS Implementation (Zero Dependency)

```css
[data-anim] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-out-expo);
}

.slide.visible [data-anim] {
    opacity: 1;
    transform: translateY(0);
}

/* Cascade */
.slide[data-animate="cascade"].visible [data-anim]:nth-child(1) { transition-delay: 0.08s; }
.slide[data-animate="cascade"].visible [data-anim]:nth-child(2) { transition-delay: 0.16s; }
.slide[data-animate="cascade"].visible [data-anim]:nth-child(3) { transition-delay: 0.24s; }
.slide[data-animate="cascade"].visible [data-anim]:nth-child(4) { transition-delay: 0.32s; }

/* Hero */
.slide[data-animate="hero"] [data-anim] {
    transform: translateY(30px);
    transition-duration: 0.7s;
}
.slide[data-animate="hero"].visible [data-anim]:nth-child(1) { transition-delay: 0.12s; }
.slide[data-animate="hero"].visible [data-anim]:nth-child(2) { transition-delay: 0.24s; }

/* Directional */
.slide[data-animate="directional"] [data-anim][data-dir="left"] { transform: translateX(-30px); }
.slide[data-animate="directional"] [data-anim][data-dir="right"] { transform: translateX(30px); }
.slide[data-animate="directional"].visible [data-anim] { transform: translateX(0); }

/* Data */
.slide[data-animate="data"] [data-anim="number"] { transform: scale(0.9); }
.slide[data-animate="data"].visible [data-anim="number"] { transform: scale(1); }
.slide[data-animate="data"] [data-anim="bar"] { transform: scaleY(0); transform-origin: bottom; }
.slide[data-animate="data"].visible [data-anim="bar"] { transform: scaleY(1); }
```

### Usage Example

```html
<section class="slide" data-animate="hero">
    <div class="slide-content mixed-text">
        <div class="kicker" data-anim>封面标签</div>
        <h1 class="h-hero" data-anim>主标题</h1>
        <p class="lead" data-anim>一句话说明。</p>
    </div>
</section>
```

---

## Effect-to-Feeling Guide

| Feeling | Animations | Visual Cues |
|---------|-----------|-------------|
| **Dramatic / Cinematic** | Slow fade-ins (400–600 ms), moderate scale (0.95 to 1), parallax scrolling | Dark backgrounds, spotlight effects, full-bleed images |
| **Techy / Futuristic** | Neon glow (box-shadow, 4 layers max), grid reveals, subtle flicker (one-shot) | Particle systems (canvas), grid patterns, monospace accents, muted cyan/magenta |
| **Playful / Friendly** | Bouncy easing (spring physics), floating/bobbing | Rounded corners, muted pastels, hand-drawn elements |
| **Professional / Corporate** | Subtle fast animations (200–300 ms), clean slides | Navy/slate/charcoal, precise spacing, data visualization focus |
| **Calm / Minimal** | Very slow subtle motion, gentle fades | High whitespace, muted palette, serif typography, generous padding |
| **Editorial / Magazine** | Staggered text reveals, image-text interplay | Strong type hierarchy, pull quotes, grid-breaking layouts, serif headlines + sans body |

---

## Entrance Animations (Legacy, Backward Compatible)

```css
/* Fade + Slide Up — default, amplitude reduced */
.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition:
        opacity var(--duration-normal) var(--ease-out-expo),
        transform var(--duration-normal) var(--ease-out-expo);
}

.visible .reveal {
    opacity: 1;
    transform: translateY(0);
}

/* Scale In — subtle */
.reveal-scale {
    opacity: 0;
    transform: scale(0.96);
    transition:
        opacity var(--duration-normal) var(--ease-out-expo),
        transform var(--duration-normal) var(--ease-out-expo);
}

/* Slide from Left — short distance */
.reveal-left {
    opacity: 0;
    transform: translateX(-24px);
    transition:
        opacity var(--duration-normal) var(--ease-out-expo),
        transform var(--duration-normal) var(--ease-out-expo);
}

/* Blur In — restrained */
.reveal-blur {
    opacity: 0;
    filter: blur(6px);
    transition:
        opacity 0.6s var(--ease-out-expo),
        filter 0.6s var(--ease-out-expo);
}

/* Stagger children */
.reveal:nth-child(1) { transition-delay: 0.08s; }
.reveal:nth-child(2) { transition-delay: 0.16s; }
.reveal:nth-child(3) { transition-delay: 0.24s; }
.reveal:nth-child(4) { transition-delay: 0.32s; }
```

---

## Background Effects

```css
/* Gradient Mesh — layered radial gradients for depth */
.gradient-bg {
    background:
        radial-gradient(ellipse at 20% 80%, rgba(120, 0, 255, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(0, 255, 200, 0.08) 0%, transparent 50%),
        var(--bg-primary);
}

/* Real scanned texture — use var() from textures.css */
.texture-bg {
    background-image: var(--texture-paper); /* or concrete / grain / leather / washi / film */
    background-size: 200px 200px;
    opacity: 0.06;
    mix-blend-mode: multiply;
    pointer-events: none;
}

/* Grid Pattern — subtle structural lines */
.grid-bg {
    background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
}
```

---

## Interactive Effects

```css
/* Hover lift — preferred over 3D tilt for most styles */
.hover-lift {
    transition:
        transform 0.3s var(--ease-out-expo),
        box-shadow 0.3s var(--ease-out-expo);
}
.hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

/* 3D Tilt on Hover — use sparingly, only when style calls for it */
.tilt-card {
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: transform 0.3s var(--ease-out-expo);
}
```

```javascript
class TiltEffect {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            this.element.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        });
        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'rotateY(0) rotateX(0)';
        });
    }
}
```

---

## Reduced Motion Fallback

Include this in every generated presentation:

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.2s !important;
    }
    html { scroll-behavior: auto; }
    .reveal,
    .reveal-scale,
    .reveal-left,
    .reveal-blur,
    [data-anim] {
        opacity: 1;
        transform: none;
        filter: none;
    }
}
```

Also support manual low-power mode via `B` key:

```javascript
toggleLowPower() {
    document.body.classList.toggle('low-power');
    const isLow = document.body.classList.contains('low-power');
    if (this.webglDark) isLow ? this.webglDark.stop() : this.webglDark.start();
    if (this.webglLight) isLow ? this.webglLight.stop() : this.webglLight.start();
    if (isLow) {
        this.slides.forEach(slide => slide.classList.add('visible'));
    }
}
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Fonts not loading | Check Fontshare/Google Fonts URL; ensure font names match in CSS; provide Google Fonts fallback for Fontshare |
| Animations not triggering | Verify Intersection Observer is running; check `.visible` class is being added |
| Scroll snap not working | Ensure `scroll-snap-type: y mandatory` on html; each slide needs `scroll-snap-align: start` |
| Horizontal mode not paging | Verify `<html data-deck="horizontal">` and `#deck` width is set by JS |
| WebGL not showing | Check canvas z-index, body theme classes, and that hero slides have transparent background |
| Mobile issues | Disable heavy effects at 768px breakpoint; test touch events; reduce particle count |
| Performance issues | Use `will-change` sparingly; prefer `transform`/`opacity` animations; throttle scroll handlers; limit `backdrop-filter` to ≤ 2 elements per slide |
| Texture looks harsh | Lower opacity to 0.04–0.08; use `mix-blend-mode: multiply` on light bg, `overlay` on dark bg |
