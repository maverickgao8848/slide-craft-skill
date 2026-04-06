# Delight Library Usage System

## Selection Rule

When applying a style, **randomly select 3 out of 5** Delight Mechanisms to include.

---

## Constraints

### 1. Diversity of Interaction Types

| Rule | Rationale |
|-------|-----------|
| Don't pick 3 hover effects | Overwhelming for cursor movement |
| Ensure at least 1 hover + 1 non-hover | Balance passive and active interactions |
| Never select more than 2 timing-based effects | Avoid sensory overload |

### 2. Avoid Interaction Conflicts

| Conflict Type | Example | Why It's Bad |
|---------------|---------|--------------|
| Same trigger | Two click-based mechanisms on same element | Unpredictable behavior |
| Visual overlap | Two mechanisms affecting same area | Confusing for users |
| Timing clash | Two timing-based with different rhythms | Disorienting |

### 3. Maintain UX Clarity

- Don't obstruct primary content
- Keep navigation accessible
- Don't slow down perceived performance
- Respect `prefers-reduced-motion`

---

## Selection Algorithm

```javascript
function selectMechanisms(styleMechanisms) {
  // Step 1: Categorize by interaction type
  const categorized = {
    hover: styleMechanisms.filter(m => m.interaction.includes('Hover')),
    scroll: styleMechanisms.filter(m => m.interaction.includes('Scroll')),
    click: styleMechanisms.filter(m => m.interaction.includes('Click')),
    timing: styleMechanisms.filter(m => m.interaction.includes('Timing')),
    drag: styleMechanisms.filter(m => m.interaction.includes('Drag'))
  };

  // Step 2: Apply constraints
  const selected = [];

  // Must have at least 1 hover
  if (categorized.hover.length > 0) {
    selected.push(pickRandom(categorized.hover));
  }

  // Must have at least 1 non-hover
  const nonHover = [...categorized.scroll, ...categorized.click, ...categorized.drag];
  if (nonHover.length > 0) {
    selected.push(pickRandom(nonHover));
  }

  // Max 1 timing-based
  const timingOptions = categorized.timing.slice(0, 1);
  if (timingOptions.length > 0 && Math.random() > 0.5) {
    selected.push(timingOptions[0]);
  }

  // Fill remaining slots (up to 3 total)
  const remaining = styleMechanisms.filter(m => !selected.includes(m));
  while (selected.length < 3 && remaining.length > 0) {
    selected.push(pickRandom(remaining));
  }

  return selected.slice(0, 3);
}
```

---

## Interaction Type Distribution

| Style | Hover | Scroll | Click | Timing | Drag | Recommended Combo |
|-------|-------|--------|-------|--------|------|-------------------|
| Y2K | 2 | 0 | 2 | 1 | 0 | 1 hover + 1 click + 1 timing |
| Typography | 3 | 1 | 0 | 1 | 0 | 1 hover + 1 scroll + 1 timing |
| 3D Immersive | 3 | 1 | 0 | 1 | 0 | 1 hover + 1 scroll + 1 timing |
| Grainy Blur | 2 | 0 | 1 | 2 | 0 | 1 hover + 1 click + 1 timing |
| Naive | 2 | 0 | 1 | 2 | 1 | 1 hover + 1 click + 1 timing |
| Vibrant | 2 | 2 | 0 | 1 | 0 | 1 hover + 1 scroll + 1 timing |
| Eco | 1 | 0 | 2 | 2 | 0 | 1 hover + 1 click + 1 timing |
| Neumorphism | 1 | 0 | 1 | 1 | 2 | 1 hover + 1 drag + 1 click/timing |
| Blueprint | 2 | 2 | 1 | 1 | 0 | 1 hover + 1 scroll + 1 click |
| Neo Minimalism | 2 | 1 | 0 | 2 | 0 | 1 hover + 1 scroll + 1 timing |

---

## Content Adaptation Guidelines

### When adapting mechanisms to specific content:

| Do | Don't |
|----|-------|
| Adjust animation duration to match content complexity | Change core interaction type |
| Scale effect intensity based on element importance | Remove the "why it works" aspect |
| Combine with existing brand guidelines | Add competing visual effects |
| Respect cultural context of metaphors | Force mechanisms where they don't fit |

### Example Adaptations

**Original**: "Glitch-on-Idle Cursor" for Y2K
- **Adaptation for e-commerce**: Instead of glitch, product images could show "alternate angles" when idle
- **Adaptation for news site**: Idle could trigger "related article" previews

**Original**: "Breathing Typography" for Eco
- **Adaptation for long-form**: Only breathe paragraph currently being read
- **Adaptation for dashboard**: Breathe only the "attention-needed" metrics

---

## Accessibility Considerations

### Must Implement

1. **`prefers-reduced-motion` media query**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
     }
   }
   ```

2. **Keyboard alternatives**
   - Hover effects should have focus equivalents
   - Timing-based should be pausable

3. **No seizure triggers**
   - Avoid rapid flashing (>3Hz)
   - Provide pause controls for continuous animations

### Should Implement

- Visible focus states alongside delight effects
- Screen reader announcements for state changes
- Sufficient color contrast maintained during effects

---

## Quick Decision Matrix

```
┌─────────────────────────────────────────────────────────┐
│                    SELECTING MECHANISMS                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. What's the primary user action on this page?         │
│     → Reading? → Prioritize timing + subtle hover        │
│     → Scrolling? → Prioritize scroll + timing            │
│     → Interacting? → Prioritize click + hover            │
│                                                          │
│  2. What's the content density?                          │
│     → Dense? → Use subtle, non-distracting mechanisms    │
│     → Sparse? → Can use more prominent effects           │
│                                                          │
│  3. What's the user intent?                              │
│     → Goal-oriented? → Minimize delight, maximize UX     │
│     → Exploration? → Maximize delight, reward curiosity  │
│                                                          │
│  4. What's the brand personality?                        │
│     → Serious? → Subtle, refined mechanisms              │
│     → Playful? → Bold, obvious mechanisms                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Implementation Checklist

Before deploying selected mechanisms:

- [ ] All 3 mechanisms work independently
- [ ] No interaction conflicts between mechanisms
- [ ] `prefers-reduced-motion` respected
- [ ] Performance impact acceptable (<16ms per frame)
- [ ] Mobile equivalents defined where needed
- [ ] Accessibility tested with assistive technology
- [ ] Brand guidelines compliance verified
