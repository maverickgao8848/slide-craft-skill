# HTML Presentation Template

Reference architecture for generating slide presentations. Every presentation follows this structure and the design principles in `design-principles.md`.

---

## Base HTML Structure

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentation Title</title>

    <!-- Fonts: use Fontshare or Google Fonts — never system fonts as Display -->
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap">
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <style>
        /* ===========================================
           CSS CUSTOM PROPERTIES (THEME)
           Change these to change the whole look
           =========================================== */
        :root {
            /* Colors — from chosen style preset; NO pure RGB primaries */
            --bg-primary: #0a0f1c;
            --bg-secondary: #111827;
            --text-primary: #ffffff;
            --text-secondary: #9ca3af;
            --accent: #c75b39;
            --accent-on: #ffffff;
            --accent-glow: rgba(199, 91, 57, 0.3);

            /* Typography — MUST use clamp() */
            --font-display: 'Clash Display', 'Anton', sans-serif;
            --font-body: 'Satoshi', 'DM Sans', 'Noto Sans SC', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;

            --h-hero-size: clamp(2.5rem, 10vw, 8rem);
            --h-xl-size: clamp(2rem, 6vw, 5rem);
            --h-sub-size: clamp(1.25rem, 2.5vw, 2rem);
            --lead-size: clamp(1rem, 1.8vw, 1.5rem);
            --body-size: clamp(0.875rem, 1.2vw, 1.125rem);
            --meta-size: clamp(0.65rem, 0.9vw, 0.8rem);

            /* Spacing — MUST use clamp() */
            --slide-padding: clamp(1.5rem, 4vw, 4rem);
            --content-gap: clamp(1rem, 2vw, 2rem);
            --section-gap: clamp(2rem, 5vh, 4rem);

            /* Animation */
            --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
            --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
            --duration-fast: 0.2s;
            --duration-normal: 0.5s;
            --duration-slow: 0.7s;
        }

        /* ===========================================
           BASE STYLES
           =========================================== */
        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* --- PASTE viewport-base.css CONTENTS HERE --- */

        /* ===========================================
           REAL TEXTURE PLACEHOLDERS
           Replace the data-uri with style-specific texture
           from references/textures.css
           =========================================== */
        .texture-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
            opacity: 0.06;
            mix-blend-mode: multiply;
            background-image: var(--texture-paper);
            background-size: 200px 200px;
        }

        /* ===========================================
           ANIMATION RECIPES
           Trigger via data-animate on <section>
           and data-anim on children.
           =========================================== */

        /* Base animated elements */
        [data-anim] {
            opacity: 0;
            transform: translateY(20px);
            transition:
                opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
        }

        .slide.visible [data-anim] {
            opacity: 1;
            transform: translateY(0);
        }

        /* Recipe: cascade (default) */
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(1) { transition-delay: 0.08s; }
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(2) { transition-delay: 0.16s; }
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(3) { transition-delay: 0.24s; }
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(4) { transition-delay: 0.32s; }
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(5) { transition-delay: 0.40s; }
        .slide[data-animate="cascade"].visible [data-anim]:nth-child(6) { transition-delay: 0.48s; }

        /* Recipe: hero (dramatic, slower) */
        .slide[data-animate="hero"] [data-anim] {
            transform: translateY(30px);
            transition-duration: var(--duration-slow);
        }

        .slide[data-animate="hero"].visible [data-anim]:nth-child(1) { transition-delay: 0.12s; }
        .slide[data-animate="hero"].visible [data-anim]:nth-child(2) { transition-delay: 0.24s; }
        .slide[data-animate="hero"].visible [data-anim]:nth-child(3) { transition-delay: 0.36s; }
        .slide[data-animate="hero"].visible [data-anim]:nth-child(4) { transition-delay: 0.48s; }
        .slide[data-animate="hero"].visible [data-anim]:nth-child(5) { transition-delay: 0.60s; }

        /* Recipe: quote (slower stagger for reading) */
        .slide[data-animate="quote"] [data-anim] {
            transform: translateY(10px);
            transition-duration: 0.6s;
        }

        .slide[data-animate="quote"].visible [data-anim]:nth-child(1) { transition-delay: 0.10s; }
        .slide[data-animate="quote"].visible [data-anim]:nth-child(2) { transition-delay: 0.30s; }
        .slide[data-animate="quote"].visible [data-anim]:nth-child(3) { transition-delay: 0.55s; }
        .slide[data-animate="quote"].visible [data-anim]:nth-child(4) { transition-delay: 0.80s; }

        /* Recipe: directional (left/right) */
        .slide[data-animate="directional"] [data-anim][data-dir="left"] {
            transform: translateX(-30px);
        }

        .slide[data-animate="directional"] [data-anim][data-dir="right"] {
            transform: translateX(30px);
        }

        .slide[data-animate="directional"].visible [data-anim] {
            transform: translateX(0);
        }

        /* Recipe: data (numbers + bars) */
        .slide[data-animate="data"] [data-anim="number"] {
            transform: scale(0.9);
        }

        .slide[data-animate="data"].visible [data-anim="number"] {
            transform: scale(1);
        }

        .slide[data-animate="data"] [data-anim="bar"] {
            transform: scaleY(0);
            transform-origin: bottom;
        }

        .slide[data-animate="data"].visible [data-anim="bar"] {
            transform: scaleY(1);
        }

        /* Recipe: pipeline (manual step reveal) */
        .slide[data-animate="pipeline"] [data-anim] {
            opacity: 0;
            transform: translateY(15px);
        }

        .slide[data-animate="pipeline"].visible [data-anim].step-active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Legacy reveal classes (backward compatible) */
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition:
                opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
        }

        .slide.visible .reveal {
            opacity: 1;
            transform: translateY(0);
        }

        .reveal-scale {
            opacity: 0;
            transform: scale(0.96);
            transition:
                opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
        }

        .slide.visible .reveal-scale {
            opacity: 1;
            transform: scale(1);
        }

        .reveal-left {
            opacity: 0;
            transform: translateX(-24px);
            transition:
                opacity var(--duration-normal) var(--ease-out-expo),
                transform var(--duration-normal) var(--ease-out-expo);
        }

        .slide.visible .reveal-left {
            opacity: 1;
            transform: translateX(0);
        }

        /* Stagger children for sequential reveal */
        .reveal:nth-child(1) { transition-delay: 0.08s; }
        .reveal:nth-child(2) { transition-delay: 0.16s; }
        .reveal:nth-child(3) { transition-delay: 0.24s; }
        .reveal:nth-child(4) { transition-delay: 0.32s; }

        /* Hairline extend animation */
        @keyframes line-extend {
            from { transform: scaleX(0); }
            to   { transform: scaleX(1); }
        }

        .line-extend {
            transform-origin: left;
        }

        .slide.visible .line-extend {
            animation: line-extend 0.6s var(--ease-out-expo) forwards;
        }

        /* ... preset-specific styles ... */
    </style>
</head>
<body>
    <!-- WebGL backgrounds (only active in horizontal / hero modes) -->
    <canvas id="bg-dark" class="bg" aria-hidden="true"></canvas>
    <canvas id="bg-light" class="bg" aria-hidden="true"></canvas>

    <!-- Optional: Progress bar -->
    <div class="progress-bar"></div>

    <!-- Optional: Navigation dots -->
    <nav class="nav-dots"><!-- Generated by JS --></nav>

    <!-- Slides -->
    <div id="deck">
        <section class="slide hero dark" data-layout="L01" data-animate="hero">
            <div class="texture-overlay" aria-hidden="true"></div>
            <div class="chrome">
                <div>A Talk · 2026.04.22</div>
                <div>Vol.01</div>
            </div>
            <div class="slide-content mixed-text">
                <div class="kicker" data-anim>封面标签 · Cover Story</div>
                <h1 class="h-hero" data-anim>主标题</h1>
                <h2 class="h-sub" data-anim>副标题说明</h2>
                <p class="lead" data-anim>一句话 lead。</p>
                <div class="meta-row" data-anim>
                    <span>Speaker</span><span>·</span><span>Tagline</span>
                </div>
            </div>
            <div class="foot">
                <div>底部说明</div>
                <div>— 2026 —</div>
            </div>
        </section>

        <section class="slide light" data-layout="L03" data-animate="cascade">
            <div class="texture-overlay" aria-hidden="true"></div>
            <div class="slide-content mixed-text">
                <div class="kicker" data-anim>数据 Data</div>
                <div class="big-num" data-anim>128</div>
                <p class="lead" data-anim>数据说明文字。</p>
            </div>
        </section>

        <!-- More slides... -->
    </div>

    <script>
        /* ===========================================
           WEBGL BACKGROUND (optional, zero dependency)
           Only runs on hero slides. Stops in low-power mode.
           =========================================== */
        class WebGLBackground {
            constructor(canvas, options = {}) {
                this.canvas = canvas;
                this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if (!this.gl) return;

                this.running = true;
                this.options = Object.assign({
                    color1: [0.04, 0.06, 0.12],
                    color2: [0.10, 0.14, 0.22]
                }, options);

                this.init();
                this.resize();
                window.addEventListener('resize', () => this.resize());
                this.render();
            }

            init() {
                const gl = this.gl;

                const vertexSource = `
                    attribute vec2 position;
                    void main() { gl_Position = vec4(position, 0.0, 1.0); }
                `;

                const fragmentSource = `
                    precision mediump float;
                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_color1;
                    uniform vec3 u_color2;

                    float noise(vec2 p) {
                        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
                    }

                    float smoothNoise(vec2 p) {
                        vec2 i = floor(p);
                        vec2 f = fract(p);
                        f = f * f * (3.0 - 2.0 * f);
                        float a = noise(i);
                        float b = noise(i + vec2(1.0, 0.0));
                        float c = noise(i + vec2(0.0, 1.0));
                        float d = noise(i + vec2(1.0, 1.0));
                        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
                    }

                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution;
                        float n = smoothNoise(uv * 3.0 + u_time * 0.05);
                        n += 0.5 * smoothNoise(uv * 6.0 - u_time * 0.03);
                        vec3 color = mix(u_color1, u_color2, n);
                        gl_FragColor = vec4(color, 1.0);
                    }
                `;

                const compile = (type, source) => {
                    const shader = gl.createShader(type);
                    gl.shaderSource(shader, source);
                    gl.compileShader(shader);
                    return shader;
                };

                const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
                const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);

                this.program = gl.createProgram();
                gl.attachShader(this.program, vertexShader);
                gl.attachShader(this.program, fragmentShader);
                gl.linkProgram(this.program);
                gl.useProgram(this.program);

                const buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1, -1, 1, -1, -1, 1,
                    -1, 1, 1, -1, 1, 1
                ]), gl.STATIC_DRAW);

                const position = gl.getAttribLocation(this.program, 'position');
                gl.enableVertexAttribArray(position);
                gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

                this.uTime = gl.getUniformLocation(this.program, 'u_time');
                this.uResolution = gl.getUniformLocation(this.program, 'u_resolution');
                this.uColor1 = gl.getUniformLocation(this.program, 'u_color1');
                this.uColor2 = gl.getUniformLocation(this.program, 'u_color2');

                gl.uniform3fv(this.uColor1, this.options.color1);
                gl.uniform3fv(this.uColor2, this.options.color2);
            }

            resize() {
                if (!this.gl) return;
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
                this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            }

            stop() { this.running = false; }
            start() { if (!this.running) { this.running = true; this.render(); } }

            render() {
                if (!this.running || !this.gl) return;
                this.gl.uniform1f(this.uTime, performance.now() * 0.001);
                this.gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
                this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                requestAnimationFrame(() => this.render());
            }
        }

        /* ===========================================
           SLIDE PRESENTATION CONTROLLER
           =========================================== */
        class SlidePresentation {
            constructor() {
                this.deck = document.getElementById('deck');
                this.slides = document.querySelectorAll('.slide');
                this.currentSlide = 0;
                this.isHorizontal = document.documentElement.dataset.deck === 'horizontal';
                this.webglDark = null;
                this.webglLight = null;

                this.setupIntersectionObserver();
                this.setupKeyboardNav();
                this.setupTouchNav();
                this.setupWheelNav();
                this.setupProgressBar();
                this.setupNavDots();
                this.setupWebGL();
                this.setupLowPower();

                if (this.isHorizontal) {
                    this.setupHorizontal();
                }

                window.addEventListener('load', () => this.fitSlideContent());
                window.addEventListener('resize', () => {
                    this.fitSlideContent();
                    if (this.isHorizontal) this.applyHorizontalTransform();
                });

                // Initial theme update
                this.updateWebGLTheme();
            }

            setupHorizontal() {
                if (!this.deck) return;
                this.deck.style.width = `${this.slides.length * 100}vw`;
                this.applyHorizontalTransform();
            }

            applyHorizontalTransform() {
                if (!this.deck) return;
                this.deck.style.transform = `translateX(-${this.currentSlide * 100}vw)`;
            }

            setupIntersectionObserver() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.35 });

                this.slides.forEach(slide => observer.observe(slide));
            }

            setupKeyboardNav() {
                document.addEventListener('keydown', (e) => {
                    if (e.target.getAttribute('contenteditable')) return;

                    const nextKeys = this.isHorizontal
                        ? ['ArrowRight', 'PageDown', ' ']
                        : ['ArrowDown', 'ArrowRight', 'PageDown', ' '];
                    const prevKeys = this.isHorizontal
                        ? ['ArrowLeft', 'PageUp']
                        : ['ArrowUp', 'ArrowLeft', 'PageUp'];

                    if (nextKeys.includes(e.key)) {
                        e.preventDefault();
                        this.nextSlide();
                    } else if (prevKeys.includes(e.key)) {
                        e.preventDefault();
                        this.prevSlide();
                    } else if (e.key === 'Home') {
                        e.preventDefault();
                        this.goToSlide(0);
                    } else if (e.key === 'End') {
                        e.preventDefault();
                        this.goToSlide(this.slides.length - 1);
                    } else if (e.key.toLowerCase() === 'b') {
                        e.preventDefault();
                        this.toggleLowPower();
                    }
                });
            }

            setupTouchNav() {
                let startX = 0;
                let startY = 0;

                document.addEventListener('touchstart', e => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }, { passive: true });

                document.addEventListener('touchend', e => {
                    const endX = e.changedTouches[0].clientX;
                    const endY = e.changedTouches[0].clientY;
                    const diffX = startX - endX;
                    const diffY = startY - endY;

                    if (this.isHorizontal) {
                        if (Math.abs(diffX) > 50) {
                            diffX > 0 ? this.nextSlide() : this.prevSlide();
                        }
                    } else {
                        if (Math.abs(diffY) > 50) {
                            diffY > 0 ? this.nextSlide() : this.prevSlide();
                        }
                    }
                }, { passive: true });
            }

            setupWheelNav() {
                let wheelLock = false;
                document.addEventListener('wheel', (e) => {
                    if (wheelLock) return;
                    wheelLock = true;
                    setTimeout(() => wheelLock = false, 700);
                    e.deltaY > 0 ? this.nextSlide() : this.prevSlide();
                }, { passive: true });
            }

            setupProgressBar() {
                const bar = document.querySelector('.progress-bar');
                if (!bar) return;

                const update = () => {
                    if (this.isHorizontal) {
                        const pct = this.slides.length > 1
                            ? (this.currentSlide / (this.slides.length - 1)) * 100
                            : 0;
                        bar.style.width = pct + '%';
                    } else {
                        const max = document.documentElement.scrollHeight - window.innerHeight;
                        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
                        bar.style.width = pct + '%';
                    }
                };

                window.addEventListener('scroll', update);
                update();
            }

            setupNavDots() {
                const nav = document.querySelector('.nav-dots');
                if (!nav) return;

                this.slides.forEach((_, i) => {
                    const dot = document.createElement('button');
                    dot.className = 'nav-dot';
                    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    dot.addEventListener('click', () => this.goToSlide(i));
                    nav.appendChild(dot);
                });

                this.updateActiveDot();
            }

            updateActiveDot() {
                const nav = document.querySelector('.nav-dots');
                if (!nav) return;
                const dots = nav.querySelectorAll('.nav-dot');
                dots.forEach((dot, i) => dot.classList.toggle('active', i === this.currentSlide));
            }

            setupWebGL() {
                const darkCanvas = document.getElementById('bg-dark');
                const lightCanvas = document.getElementById('bg-light');
                if (!darkCanvas || !lightCanvas) return;

                this.webglDark = new WebGLBackground(darkCanvas, {
                    color1: [0.04, 0.06, 0.12],
                    color2: [0.10, 0.14, 0.22]
                });

                this.webglLight = new WebGLBackground(lightCanvas, {
                    color1: [0.95, 0.94, 0.90],
                    color2: [0.88, 0.85, 0.78]
                });
            }

            updateWebGLTheme() {
                const current = this.slides[this.currentSlide];
                if (!current) return;
                const isLight = current.classList.contains('light') || current.classList.contains('hero-light');
                document.body.classList.toggle('light-bg', isLight);
                document.body.classList.toggle('dark-bg', !isLight);
            }

            setupLowPower() {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    document.body.classList.add('low-power');
                }
            }

            toggleLowPower() {
                document.body.classList.toggle('low-power');
                const isLow = document.body.classList.contains('low-power');

                if (this.webglDark) isLow ? this.webglDark.stop() : this.webglDark.start();
                if (this.webglLight) isLow ? this.webglLight.stop() : this.webglLight.start();

                if (isLow) {
                    this.slides.forEach(slide => slide.classList.add('visible'));
                }
            }

            nextSlide() {
                this.goToSlide(Math.min(this.currentSlide + 1, this.slides.length - 1));
            }

            prevSlide() {
                this.goToSlide(Math.max(this.currentSlide - 1, 0));
            }

            goToSlide(index) {
                if (index < 0 || index >= this.slides.length) return;
                this.currentSlide = index;

                if (this.isHorizontal) {
                    this.applyHorizontalTransform();
                } else {
                    this.slides[index].scrollIntoView({ behavior: 'smooth' });
                }

                this.updateActiveDot();
                this.updateWebGLTheme();
            }

            fitSlideContent() {
                this.slides.forEach((slide) => {
                    const contents = slide.querySelectorAll('.slide-content');
                    contents.forEach(content => {
                        content.style.transform = '';
                        content.style.transformOrigin = 'center center';
                        void content.offsetHeight;

                        // Account for chrome/foot space in hero slides
                        const chrome = slide.querySelector('.chrome');
                        const foot = slide.querySelector('.foot');
                        let availableHeight = slide.clientHeight;
                        if (chrome) availableHeight -= chrome.offsetHeight;
                        if (foot) availableHeight -= foot.offsetHeight;

                        const isOverflowing = content.scrollHeight > availableHeight;
                        if (isOverflowing) {
                            const scale = availableHeight / content.scrollHeight;
                            const safeScale = Math.max(0.5, scale * 0.95);
                            content.style.transform = `scale(${safeScale})`;
                        }
                    });
                });
            }
        }

        new SlidePresentation();
    </script>
</body>
</html>
```

---

## Horizontal Deck Mode

Add `data-deck="horizontal"` to the `<html>` element to enable horizontal paging:

```html
<html lang="zh" data-deck="horizontal">
```

Without this attribute, the deck uses vertical `scroll-snap` (backward compatible).

**Navigation in horizontal mode:**
- Keyboard: `ArrowRight` / `ArrowLeft`, `PageDown` / `PageUp`, `Space`, `Home`, `End`
- Mouse wheel: scroll up/down advances slides
- Touch: swipe left/right
- Low power: press `B`

---

## Theme Rhythm

Every `<section class="slide">` MUST carry one of these four theme classes:

| Class | Usage |
|-------|-------|
| `light` | Body slide, light background + dark text |
| `dark` | Body slide, dark background + light text |
| `hero light` | Hero/cover/divider, light background with WebGL/texture visible |
| `hero dark` | Hero/cover/divider, dark background with WebGL/texture visible |

**Rules:**
1. No more than 2 consecutive slides with the same theme.
2. Decks with 8+ slides must have at least one `hero dark` and one `hero light`.
3. A deck cannot contain only `light` body slides; include `dark` slides for rhythm.
4. Insert a hero slide every 3–4 pages.
5. Hero slides carry only kicker + headline + one lead sentence + meta. No long body text.

See `references/theme-rhythm.md` for templates.

---

## Layout Catalog

Use the standardized layouts in `references/layout-catalog.md` instead of inventing new structures. Each layout provides a complete `<section>` skeleton with `data-layout` attribute.

| ID | Layout | Usage |
|----|--------|-------|
| L01 | Hero Cover | Opening cover |
| L02 | Section Divider | Chapter break |
| L03 | Big Numbers | Data hero |
| L04 | Quote + Image | Left text, right image |
| L05 | Image Grid | Multi-image grid |
| L06 | Pipeline | Process/timeline |
| L07 | Big Quote | Pull quote page |
| L08 | Before/After | Comparison |
| L09 | Closing | Final slide |

---

## Animation Recipes

Trigger recipes by adding `data-animate="{recipe}"` to the `<section>` and `data-anim` to animated children.

| Recipe | Effect | Best For |
|--------|--------|----------|
| `cascade` | Staggered fade-up, 80ms | Default body slides |
| `hero` | Slower, larger fade-up, 120ms | Covers / section breaks |
| `quote` | Very slow stagger, 550ms | Pull quotes / statements |
| `directional` | Left elements from left, right from right | Split layouts |
| `pipeline` | Manual step reveal on key press | Processes |
| `data` | Number scale + bar grow | Data / KPI slides |

Example:

```html
<section class="slide" data-animate="directional">
    <div class="slide-content mixed-text" style="display:grid; grid-template-columns:1fr 1fr;">
        <div data-anim data-dir="left">左侧内容</div>
        <div data-anim data-dir="right">右侧内容</div>
    </div>
</section>
```

Legacy `.reveal` classes remain supported for backward compatibility.

---

## Required JavaScript Features

Every presentation must include:

1. **SlidePresentation Class** — Main controller with:
   - Keyboard navigation (arrows, space, page up/down, Home, End, B for low power)
   - Touch/swipe support (vertical + horizontal)
   - Mouse wheel navigation with debounce
   - Progress bar updates
   - Navigation dots
   - WebGL background theme switching
   - Low-power / reduced-motion mode
   - **Content overflow detection & auto-fit (`fitSlideContent()`)**

2. **Intersection Observer** — For scroll-triggered animations:
   - Add `.visible` class when slides enter viewport
   - Threshold 0.35 recommended

3. **Optional Enhancements** (match to chosen style, do not overuse):
   - Custom cursor with trail
   - Particle system background (canvas)
   - Parallax effects
   - Magnetic buttons
   - Counter animations

4. **Inline Editing** (only if user opted in during Phase 1 — skip entirely if they said No):
   - Edit toggle button (hidden by default, revealed via hover hotzone or `E` key)
   - Auto-save to localStorage
   - Export/save file functionality
   - See "Inline Editing Implementation" section below

---

## WebGL Background System

- Two canvas elements (`#bg-dark`, `#bg-light`) live at the top of `<body>`.
- The current slide's theme class determines which canvas is visible (`body.light-bg` / `body.dark-bg`).
- WebGL only runs when canvases exist; it is safe to omit them for simple decks.
- In low-power mode, RAF stops and animated elements reveal instantly.
- On `prefers-reduced-motion: reduce`, WebGL canvases are hidden.

---

## Texture Integration

Each style must include a real scanned texture as a `.texture-overlay` layer:

1. Generate texture with `scripts/texture-generator.py` (or reuse style-specific base64 from combo reference).
2. Place `<div class="texture-overlay" aria-hidden="true"></div>` inside every `.slide`.
3. Keep opacity 0.04–0.10 and `pointer-events: none`.
4. Never use SVG `<filter id="noise">` as the primary texture.

---

## Mixed-Language Typography

For Chinese + Latin mixed text, wrap the slide content in `.mixed-text`:

```html
<div class="slide-content mixed-text">
    <h1>设计系统 Design System</h1>
    <p>零依赖 zero-dependency 的幻灯片引擎。</p>
</div>
```

This inserts `0.125em` word-spacing between scripts automatically.

---

## prefers-reduced-motion Global Handling

Include this block in every generated HTML:

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
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
    }
    .bg {
        opacity: 0 !important;
    }
}
```

Also respect the reduced-motion media query for any infinite loops:
- Infinite floating blobs must stop or reduce to a static state.
- One-shot entrance animations remain acceptable.

---

## Content Auto-Fit (CRITICAL)

See the `fitSlideContent()` implementation in the base structure above.

Alternative CSS-only reinforcement (add to slide-content):

```css
.slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 100%;
    overflow: hidden;
    min-height: 0; /* CRITICAL: allows flex shrinking */
}

.slide-content > * {
    flex-shrink: 1;
    min-height: 0;
}
```

---

## Inline Editing Implementation (Opt-In Only)

**If the user chose "No" for inline editing in Phase 1, do NOT generate any edit-related HTML, CSS, or JS.**

**Do NOT use CSS `~` sibling selector for hover-based show/hide.** The CSS-only approach fails because `pointer-events: none` on the toggle button breaks the hover chain.

**Required approach: JS-based hover with 400ms delay timeout.**

HTML:
```html
<div class="edit-hotzone"></div>
<button class="edit-toggle" id="editToggle" title="Edit mode (E)">✏️</button>
```

CSS:
```css
.edit-hotzone {
    position: fixed; top: 0; left: 0;
    width: 80px; height: 80px;
    z-index: 10000;
    cursor: pointer;
}
.edit-toggle {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 10001;
}
.edit-toggle.show,
.edit-toggle.active {
    opacity: 1;
    pointer-events: auto;
}
```

JS:
```javascript
const hotzone = document.querySelector('.edit-hotzone');
const editToggle = document.getElementById('editToggle');
let hideTimeout = null;

hotzone.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    editToggle.classList.add('show');
});
hotzone.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        if (!editor.isActive) editToggle.classList.remove('show');
    }, 400);
});
editToggle.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
editToggle.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        if (!editor.isActive) editToggle.classList.remove('show');
    }, 400);
});
hotzone.addEventListener('click', () => editor.toggleEditMode());
editToggle.addEventListener('click', () => editor.toggleEditMode());

document.addEventListener('keydown', (e) => {
    if ((e.key === 'e' || e.key === 'E') && !e.target.getAttribute('contenteditable')) {
        editor.toggleEditMode();
    }
});
```

---

## Image Pipeline (Skip If No Images)

If user chose "No images" in Phase 1, skip this entirely. If images were provided, process them before generating HTML.

**Dependency:** `pip install Pillow`

```python
from PIL import Image, ImageDraw

def crop_circle(input_path, output_path):
    img = Image.open(input_path).convert('RGBA')
    w, h = img.size
    size = min(w, h)
    left, top = (w - size) // 2, (h - size) // 2
    img = img.crop((left, top, left + size, top + size))
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, size, size], fill=255)
    img.putalpha(mask)
    img.save(output_path, 'PNG')

def resize_max(input_path, output_path, max_dim=1200):
    img = Image.open(input_path)
    img.thumbnail((max_dim, max_dim), Image.LANCZOS)
    img.save(output_path, quality=85)
```

| Situation | Operation |
|-----------|-----------|
| Square logo on rounded aesthetic | `crop_circle()` |
| Image > 1MB | `resize_max(max_dim=1200)` |
| Wrong aspect ratio | Manual crop with `img.crop()` |

Save processed images with `_processed` suffix. Never overwrite originals.

### Image Placement

Use direct file paths — presentations are viewed locally:

```html
<img src="assets/logo_round.png" alt="Logo" class="slide-image logo">
<img src="assets/screenshot.png" alt="Screenshot" class="slide-image screenshot">
```

```css
.slide-image {
    max-width: 100%;
    max-height: min(50vh, 400px);
    object-fit: contain;
    border-radius: 8px;
}
.slide-image.screenshot {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.slide-image.logo {
    max-height: min(30vh, 200px);
}
```

**Prefer the new `.frame-img` system for consistent aspect ratios:**

```html
<figure class="frame-img r-16x9">
    <img src="images/hero.png" alt="描述">
</figure>
```

**Adapt border/shadow colors to match the chosen style's accent.** Never repeat the same image on multiple slides (except logos on title + closing).

**Placement patterns:** Logo centered on title slide. Screenshots in two-column layouts with text. Full-bleed images as slide backgrounds with text overlay (use sparingly).

---

## Code Quality

**Comments:** Every section needs clear comments explaining what it does and how to modify it.

**Accessibility:**
- Semantic HTML (`<section>`, `<nav>`, `<main>`)
- Keyboard navigation works fully
- ARIA labels where needed
- `prefers-reduced-motion` support

**Language:** Set `<html lang="zh">` for Chinese-first presentations; include Latin `lang` attributes where appropriate for screen readers.

---

## File Structure

Single presentations:
```
presentation.html    # Self-contained, all CSS/JS inline
assets/              # Images only, if any
```

Multiple presentations in one project:
```
[name].html
[name]-assets/
```
