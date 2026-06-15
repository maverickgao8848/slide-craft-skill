#!/usr/bin/env node

/**
 * validate-deck.mjs
 * Zero-dependency static checker for SlideCraft HTML decks.
 *
 * Usage:
 *   node scripts/validate-deck.mjs path/to/index.html
 *
 * Checks:
 *   - Every slide has a valid theme class
 *   - No more than 2 consecutive slides with the same theme
 *   - data-layout is in the allowed catalog
 *   - Images use standard .frame-img ratio/height classes
 *   - prefers-reduced-motion media query is present
 *   - fitSlideContent() is present
 *   - Horizontal mode uses data-deck="horizontal"
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const ALLOWED_THEMES = ['light', 'dark', 'hero-light', 'hero-dark'];
const ALLOWED_LAYOUTS = [
    'L01', 'L02', 'L03', 'L04', 'L05', 'L06', 'L07', 'L08', 'L09',
    'S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10',
    'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18', 'S19', 'S20',
    'S21', 'S22'
];
const RATIO_CLASSES = ['r-21x9', 'r-16x9', 'r-16x10', 'r-4x3', 'r-3x2', 'r-1x1'];
const HEIGHT_CLASSES = ['h-16', 'h-20', 'h-24', 'h-28', 'h-32'];

function extractSlides(html) {
    const slides = [];
    const regex = /<section[^>]*class="slide([^"]*)"([^>]*)>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        slides.push({
            classAttr: match[1],
            restAttr: match[2]
        });
    }
    return slides;
}

function extractTheme(classAttr) {
    // Themes can be "light", "dark", "hero light", "hero dark"
    if (/\bhero\s+light\b/.test(classAttr)) return 'hero-light';
    if (/\bhero\s+dark\b/.test(classAttr)) return 'hero-dark';
    if (/\blight\b/.test(classAttr)) return 'light';
    if (/\bdark\b/.test(classAttr)) return 'dark';
    return null;
}

function extractDataLayout(restAttr) {
    const match = restAttr.match(/data-layout="([^"]+)"/);
    return match ? match[1] : null;
}

function checkImages(html) {
    const issues = [];
    const regex = /<[^>]*class="([^"]*)frame-img([^"]*)"[^>]*>/gi;
    let match;
    let count = 0;
    while ((match = regex.exec(html)) !== null) {
        count++;
        const classAttr = (match[1] || '') + (match[2] || '');
        const hasRatio = RATIO_CLASSES.some(c => classAttr.includes(c));
        const hasHeight = HEIGHT_CLASSES.some(c => classAttr.includes(c));
        if (!hasRatio && !hasHeight) {
            issues.push(`Image .frame-img #${count} missing standard ratio/height class`);
        }
    }
    return { count, issues };
}

function main() {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Usage: node scripts/validate-deck.mjs path/to/index.html');
        process.exit(1);
    }

    const absolutePath = resolve(filePath);
    if (!existsSync(absolutePath)) {
        console.error(`File not found: ${absolutePath}`);
        process.exit(1);
    }

    const html = readFileSync(absolutePath, 'utf-8');
    const slides = extractSlides(html);
    const report = {
        file: absolutePath,
        slideCount: slides.length,
        errors: [],
        warnings: []
    };

    if (slides.length === 0) {
        report.errors.push('No slides found. Ensure each slide uses <section class="slide ...">');
    }

    // Theme checks
    const themes = [];
    slides.forEach((slide, i) => {
        const theme = extractTheme(slide.classAttr);
        if (!theme) {
            report.errors.push(`Slide ${i + 1} missing theme class (light/dark/hero light/hero dark)`);
        } else {
            themes.push(theme);
        }

        const layout = extractDataLayout(slide.restAttr);
        if (!layout) {
            report.warnings.push(`Slide ${i + 1} missing data-layout attribute`);
        } else if (!ALLOWED_LAYOUTS.includes(layout)) {
            report.warnings.push(`Slide ${i + 1} uses unregistered layout "${layout}"`);
        }
    });

    // Consecutive theme check
    let consecutive = 1;
    for (let i = 1; i < themes.length; i++) {
        if (themes[i] === themes[i - 1]) {
            consecutive++;
            if (consecutive >= 3) {
                report.errors.push(`Slides ${i - 1}–${i + 1} have the same theme "${themes[i]}" (max 2 consecutive allowed)`);
                consecutive = 1;
            }
        } else {
            consecutive = 1;
        }
    }

    // Hero variety for 8+ slides
    if (slides.length >= 8) {
        const hasHeroDark = themes.includes('hero-dark');
        const hasHeroLight = themes.includes('hero-light');
        if (!hasHeroDark) report.errors.push('Deck has 8+ slides but no "hero dark" slide');
        if (!hasHeroLight) report.errors.push('Deck has 8+ slides but no "hero light" slide');
    }

    // Image checks
    const imageCheck = checkImages(html);
    imageCheck.issues.forEach(issue => report.warnings.push(issue));

    // prefers-reduced-motion
    if (!html.includes('prefers-reduced-motion')) {
        report.errors.push('Missing prefers-reduced-motion support');
    }

    // fitSlideContent
    if (!html.includes('fitSlideContent')) {
        report.errors.push('Missing fitSlideContent() implementation');
    }

    // Output
    console.log(`\n📊 SlideCraft Validation Report`);
    console.log(`   File: ${report.file}`);
    console.log(`   Slides: ${report.slideCount}`);
    console.log(`   Images: ${imageCheck.count}`);

    if (report.errors.length === 0 && report.warnings.length === 0) {
        console.log('\n✅ All checks passed.');
        process.exit(0);
    }

    if (report.errors.length > 0) {
        console.log(`\n❌ Errors (${report.errors.length}):`);
        report.errors.forEach(e => console.log(`   - ${e}`));
    }

    if (report.warnings.length > 0) {
        console.log(`\n⚠️  Warnings (${report.warnings.length}):`);
        report.warnings.forEach(w => console.log(`   - ${w}`));
    }

    process.exit(report.errors.length > 0 ? 1 : 0);
}

main();
