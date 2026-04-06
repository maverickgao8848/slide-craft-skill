# Scripts

Utility scripts for SlideCraft presentations.

## Overview

| Script | Purpose | Requirements |
|--------|---------|--------------|
| `deploy.sh` | Deploy to Vercel | Node.js, Vercel CLI |
| `export-pdf.sh` | Export slides to PDF | Node.js, Playwright |
| `extract-pptx.py` | Extract content from PPTX | Python, python-pptx |

---

## Platform Compatibility

These scripts require a **Unix-like shell** (bash).

### macOS / Linux

Use directly:
```bash
bash scripts/deploy.sh ./my-presentation.html
```

### Windows

**Option 1: Git Bash** (Recommended)

Git Bash is included with [Git for Windows](https://git-scm.com/download/win).

```bash
# In Git Bash terminal
bash scripts/deploy.sh ./my-presentation.html
```

**Option 2: WSL** (Windows Subsystem for Linux)

If you have WSL installed:

```bash
# In WSL terminal
bash scripts/deploy.sh ./my-presentation.html
```

**Option 3: Manual Commands**

If you can't use bash, run the commands manually. Each script contains comments explaining what it does.

---

## Script Details

### deploy.sh — Deploy to Vercel

Deploys your presentation to a public URL via Vercel (free tier).

**Usage:**
```bash
bash scripts/deploy.sh <path-to-html-or-folder>
```

**Examples:**
```bash
# Deploy a single HTML file
bash scripts/deploy.sh ./presentation.html

# Deploy a folder with assets
bash scripts/deploy.sh ./my-deck/
```

**Requirements:**
- Node.js 18+
- Vercel account (free at https://vercel.com)

**First-time setup:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login
```

---

### export-pdf.sh — Export to PDF

Converts your presentation to a PDF file (static snapshot, animations not preserved).

**Usage:**
```bash
bash scripts/export-pdf.sh <path-to-html> [output.pdf] [--compact]
```

**Examples:**
```bash
# Export with auto-named output
bash scripts/export-pdf.sh ./presentation.html

# Export with custom name
bash scripts/export-pdf.sh ./presentation.html ./slides.pdf

# Compact mode (smaller file, 1280×720)
bash scripts/export-pdf.sh ./presentation.html --compact
```

**Requirements:**
- Node.js 18+
- Playwright (auto-installs on first run, ~150MB)

**Notes:**
- First run takes longer (Playwright downloads Chromium)
- Animations are NOT preserved (static screenshots)
- Default resolution: 1920×1080 (Full HD)

---

### extract-pptx.py — Extract PPT Content

Extracts text, images, and notes from a PowerPoint file.

**Usage:**
```bash
python scripts/extract-pptx.py <input.pptx> [output_dir]
```

**Examples:**
```bash
# Extract to current directory
python scripts/extract-pptx.py ./presentation.pptx

# Extract to specific folder
python scripts/extract-pptx.py ./presentation.pptx ./output/
```

**Requirements:**
```bash
pip install python-pptx Pillow
```

**Output:**
- `extracted-slides.json` — Structured content data
- `assets/` — Extracted images

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "bash: command not found" | Install Git Bash or use WSL |
| "vercel: command not found" | Run `npm install -g vercel` |
| Playwright download fails | Run `npx playwright install chromium` manually |
| Python script fails | Ensure `pip install python-pptx Pillow` succeeded |
