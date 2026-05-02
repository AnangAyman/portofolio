# Portfolio Design Revamp — Clean Modern Redesign

## The Problem

The current design leans into a **"terminal/hacker" aesthetic** — emerald glows, monospace prompts, aurora blobs, scanlines, shimmer effects. While technically well-built, this style:
- Feels visually **busy** and "gamery" rather than professional
- Is **dated** — terminal-themed portfolios peaked around 2022-2023
- Has too much **visual noise** competing for attention (glow effects everywhere, decorative dividers, overlapping bento photos)
- Creates **inconsistency** — the terminal hero and editorial contact section feel like different websites

## The Vision

Shift to a **"quiet confidence" aesthetic** — the kind used by top engineers at companies like Stripe, Vercel, Linear. Think:
- **Lots of whitespace**, letting content breathe
- **Soft, muted dark palette** — less "neon cyberpunk", more "midnight professional"
- **Typography as the primary design element** — not glow effects
- **Subtle interactions** — gentle opacity fades on hover, not bright pulses
- **Content-first** — let the work speak, don't wrap it in decoration

### Reference Points
- [Brittany Chiang](https://brittanychiang.com) — Split-screen layout, content-focused, minimal decoration
- [Lee Robinson](https://leerob.io) — Blog-style, clean typography, zero visual noise
- [Linear.app](https://linear.app) — Dark theme done right, subtle gradients, professional

---

## Proposed Changes

### 1. Color & Visual Foundation

> [!IMPORTANT]
> **The biggest change**: Strip all emerald glows, aurora blobs, and neon effects. Replace with a softer, more refined palette.

**Current → New:**
| Element | Current | Proposed |
|---|---|---|
| Primary accent | `#4ade80` (bright emerald) | `#e2956a` (warm amber), used **sparingly** |
| Glow effects | Everywhere (borders, buttons, pills, nav) | **Remove 90%** of glows. Only accent on active states |
| Backgrounds | Solid dark + aurora blobs | Clean, deep gradient or solid dark background |
| Card style | Glassy with blur + bright borders | Subtle solid cards with `border: 1px solid rgba(255,255,255,0.05)` |
| Shadows | Colored glows | Soft `rgba(0,0,0,0.3)` shadows only |

#### [MODIFY] [variables.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/variables.css)
- Implement warm amber accent colors
- Remove glass effect variables
- Add softer shadow tokens

#### [MODIFY] [global.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/global.css)
- Remove entrance animation system (too dramatic for clean aesthetic)
- Remove section dividers (ghost numbers, glow lines)
- Remove magnetic button effect
- Simplify nav to clean text with subtle active state
- Clean up footer styles

---

### 2. Hero Section — Modernized Layout with Profile Picture

**Current:** Text-focused hero with `whoami` prompt.
**Proposed:** Keep the current clean layout and the `~$ whoami` terminal nod, but introduce a modern, simple circular profile picture on the right side of the hero section.

- **Left Side**: `~$ whoami`, Name, Subtitle, Bio, Socials, Action Buttons.
- **Right Side**: Clean, modern circular frame containing the profile picture.

#### [MODIFY] [index.html](file:///Users/anangayman/Downloads/Personal/portofolio/index.html)
- Add image element for the profile picture within the hero container.
- Update hero structure to a flex/grid layout supporting a two-column design on desktop.

#### [MODIFY] [hero.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/hero.css)
- Complete rewrite — remove legacy terminal/bento styles if any remain.
- Add styles for the modern circular profile picture (subtle border, soft shadow).
- Implement responsive layout to stack the image nicely on mobile.

---

### 3. Experience Section — Expandable "Deep Dive" Cards

**Current:** Git-log metaphor with commit hashes, branches, `MERGED` badges. Content feels less smooth and lacks detail density.
**Proposed:** **The Expandable "Deep Dive" Card**.

- **Clean Initial View**: Just the Date, Role, Company, and a concise 1-sentence summary of the role.
- **Smooth Interaction**: Add a buttery-smooth `+ View Impact` button that triggers an accordion drop-down.
- **Rich Detail Density**: The drop-down reveals detailed bullet points highlighting impact and metrics, the tech stack, and the CEO's review/recommendation letter. This provides massive detail without cluttering the initial scan.

#### [MODIFY] [experience.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/experience.css)
- Replace git-log styling with the expandable card layout.
- Implement smooth CSS transitions for the accordion expand/collapse action.

#### [MODIFY] [index.html](file:///Users/anangayman/Downloads/Personal/portofolio/index.html)
- Restructure experience entries to separate the "summary view" and "details pane".
- Update text to include detailed bullet points instead of a single dense paragraph.
- Add toggle buttons.

#### [NEW/MODIFY] [js/main.js](file:///Users/anangayman/Downloads/Personal/portofolio/js/main.js)
- Add logic to handle the accordion toggle for the experience cards.

---

### 4. Projects Section — Content-First

**Current:** Browser mockups with colored backgrounds
**Proposed:** Clean project cards with image + description. On hover, subtle lift.

- Remove the browser chrome (dots + header)
- Just the project image + title + description + tech pills
- Much cleaner, less "demo-ey"

#### [MODIFY] [work.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/work.css)
- Remove browser mockup styles
- Simple card with image, clean hover

---

### 5. Credentials — Simplified

**Current:** Tier-1/tier-2 with brand-colored borders and shimmer effects
**Proposed:** Clean grid, all cards equal weight. Brand logo provides the color.

- Remove shimmer effect
- Remove tier system (colored borders)
- Simple hover: slight lift + lighter border

#### [MODIFY] [credentials.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/credentials.css)

---

### 6. Contact & Footer — Modern 3-Column "Hero" Footer

**Current:** Editorial split with form + 3-column footer
**Proposed:** Remove the contact form entirely. Replace the section with a clean, high-contrast, modern 3-column "Hero Footer". This provides a definitive, content-first end to the page without the clutter of input fields.

- **Column 1 (Left - Brand & Contact):** Just your name, copyright, and a clickable email address.
- **Column 2 (Middle - Navigation):** Internal page links (Experience, Work, Academics, etc.).
- **Column 3 (Right - Socials):** External links (GitHub, LinkedIn, Twitter, Resume).

#### [MODIFY] [index.html](file:///Users/anangayman/Downloads/Personal/portofolio/index.html)
- Delete the contact form structure.
- Build the new 3-column `<footer>` layout.

#### [MODIFY] [contact.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/contact.css) & [global.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/global.css)
- Delete all form-related styles.
- Add styles for the new 3-column footer grid, refined typography, and clean text-only hover states without glows.

---



## Verification Plan

### Manual Verification
- Side-by-side before/after screenshots of every section
- Mobile responsiveness check
- Ensure all links and functionality still work
- Typography hierarchy check (scannable at a glance)
