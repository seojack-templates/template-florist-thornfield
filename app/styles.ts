/**
 * Scoped design language for the florist-thornfield template.
 * Tokens hand-translated from the "premium" design brief (tokens.css).
 *
 * EVERY selector must be prefixed with ".florist-thornfield-demo" so the styles
 * cannot leak when the source is seeded into the SEOJack builder.
 *
 * Palette:
 *   --bg        #faf8f4  warm white canvas
 *   --surface   #ffffff  elevated card surfaces
 *   --fg        #1c1b19  near-black graphite
 *   --accent    #a06a3b  muted bronze
 *   --muted     #746d63  warm mid-grey
 *   --border    #ded6c9  warm light border
 *
 * Fonts:  "Cormorant Garamond" (display) / "Inter" (body)  — Google Fonts
 */
export const FLORIST_THORNFIELD_CSS = `

/* ── Design tokens ──────────────────────────────────────────────────── */
.florist-thornfield-demo {
  /* Color */
  --bg:              #faf8f4;
  --surface:         #ffffff;
  --surface-warm:    #f0e7d8;
  --fg:              #1c1b19;
  --fg-2:            #4b4740;
  --muted:           #746d63;
  --meta:            #a06a3b;
  --border:          #ded6c9;
  --border-soft:     #eee7dc;
  --accent:          #a06a3b;
  --accent-on:       #ffffff;
  --success:         #3f8f5f;
  --warn:            #c4872c;
  --danger:          #b84a4a;

  /* Typography */
  --font-display:  'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body:     'Inter', system-ui, sans-serif;
  --font-mono:     'IBM Plex Mono', ui-monospace, Menlo, monospace;
  --text-xs:       12px;
  --text-sm:       14px;
  --text-base:     16px;
  --text-lg:       19px;
  --text-xl:       26px;
  --text-2xl:      40px;
  --text-3xl:      60px;
  --text-4xl:      84px;
  --leading-body:  1.58;
  --leading-tight: 1.02;
  --tracking-display: -0.02em;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --section-y-desktop: 112px;
  --section-y-tablet:  80px;
  --section-y-phone:   56px;

  /* Radii */
  --radius-sm:   10px;
  --radius-md:   16px;
  --radius-lg:   28px;
  --radius-pill: 9999px;

  /* Elevation */
  --elev-flat:   none;
  --elev-ring:   0 0 0 1px var(--border);
  --elev-raised: 0 24px 64px rgba(28, 27, 25, 0.12);
  --focus-ring:  0 0 0 4px rgba(160, 106, 59, 0.24);

  /* Motion */
  --motion-fast: 170ms;
  --motion-base: 280ms;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);

  /* Layout */
  --container-max:              1160px;
  --container-gutter-desktop:   36px;
  --container-gutter-tablet:    24px;
  --container-gutter-phone:     16px;

  /* Base */
  font-family:      var(--font-body);
  font-size:        var(--text-base);
  line-height:      var(--leading-body);
  color:            var(--fg);
  background-color: var(--bg);
  -webkit-font-smoothing: antialiased;
}

/* ── Reset ───────────────────────────────────────────────────────────── */
.florist-thornfield-demo *,
.florist-thornfield-demo *::before,
.florist-thornfield-demo *::after {
  box-sizing: border-box;
  margin:     0;
  padding:    0;
}

/* ── Typography ──────────────────────────────────────────────────────── */
.florist-thornfield-demo h1,
.florist-thornfield-demo h2,
.florist-thornfield-demo h3,
.florist-thornfield-demo h4 {
  font-family:    var(--font-display);
  font-weight:    400;
  line-height:    var(--leading-tight);
  letter-spacing: var(--tracking-display);
  color:          var(--fg);
}

.florist-thornfield-demo h1 { font-size: clamp(2.8rem, 6vw, var(--text-4xl)); }
.florist-thornfield-demo h2 { font-size: clamp(2rem,  4vw, var(--text-3xl)); }
.florist-thornfield-demo h3 { font-size: clamp(1.4rem, 2.5vw, var(--text-2xl)); }
.florist-thornfield-demo h4 { font-size: var(--text-xl); }

.florist-thornfield-demo p {
  font-size:   var(--text-base);
  line-height: var(--leading-body);
  color:       var(--fg-2);
  max-width:   64ch;
}

.florist-thornfield-demo small,
.florist-thornfield-demo .ft-meta {
  font-size:      var(--text-sm);
  color:          var(--muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ── Layout helpers ──────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-container {
  max-width:   var(--container-max);
  margin-left:  auto;
  margin-right: auto;
  padding-left:  var(--container-gutter-desktop);
  padding-right: var(--container-gutter-desktop);
}

@media (max-width: 1023px) {
  .florist-thornfield-demo .ft-container {
    padding-left:  var(--container-gutter-tablet);
    padding-right: var(--container-gutter-tablet);
  }
}

@media (max-width: 639px) {
  .florist-thornfield-demo .ft-container {
    padding-left:  var(--container-gutter-phone);
    padding-right: var(--container-gutter-phone);
  }
}

.florist-thornfield-demo .ft-section {
  padding-top:    var(--section-y-desktop);
  padding-bottom: var(--section-y-desktop);
}

@media (max-width: 1023px) {
  .florist-thornfield-demo .ft-section {
    padding-top:    var(--section-y-tablet);
    padding-bottom: var(--section-y-tablet);
  }
}

@media (max-width: 639px) {
  .florist-thornfield-demo .ft-section {
    padding-top:    var(--section-y-phone);
    padding-bottom: var(--section-y-phone);
  }
}

/* ── Buttons ─────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-btn {
  display:          inline-flex;
  align-items:      center;
  gap:              var(--space-2);
  font-family:      var(--font-body);
  font-size:        var(--text-sm);
  font-weight:      500;
  letter-spacing:   0.03em;
  text-transform:   uppercase;
  text-decoration:  none;
  padding:          14px 20px;
  border-radius:    var(--radius-sm);
  border:           none;
  cursor:           pointer;
  transition:       background var(--motion-fast) var(--ease-standard),
                    color       var(--motion-fast) var(--ease-standard),
                    box-shadow  var(--motion-fast) var(--ease-standard);
}

.florist-thornfield-demo .ft-btn-primary {
  background: var(--accent);
  color:      var(--accent-on);
}

.florist-thornfield-demo .ft-btn-primary:hover {
  background: color-mix(in oklab, var(--accent), black 8%);
  box-shadow: var(--elev-raised);
}

.florist-thornfield-demo .ft-btn-primary:focus-visible {
  outline:    none;
  box-shadow: var(--focus-ring);
}

.florist-thornfield-demo .ft-btn-ghost {
  background: transparent;
  color:      var(--fg);
  border:     1px solid var(--border);
}

.florist-thornfield-demo .ft-btn-ghost:hover {
  border-color: var(--fg);
  background:   rgba(28, 27, 25, 0.04);
}

/* ── Cards ───────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-card {
  background:    var(--surface);
  border:        1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding:       var(--space-8);
  transition:    box-shadow var(--motion-base) var(--ease-standard),
                 transform  var(--motion-base) var(--ease-standard);
}

.florist-thornfield-demo .ft-card:hover {
  box-shadow: var(--elev-raised);
  transform:  translateY(-2px);
}

/* ── Divider ─────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-divider {
  border:     none;
  border-top: 1px solid var(--border);
  margin:     var(--space-8) 0;
}

/* ── Motion utilities (required by shared primitives) ────────────────── */

/* .reveal / .in — fade-up on scroll */
.florist-thornfield-demo .reveal {
  opacity:   0;
  transform: translateY(22px);
  transition: opacity  0.7s var(--ease-standard),
              transform 0.7s var(--ease-standard);
}
.florist-thornfield-demo .reveal.in {
  opacity:   1;
  transform: translateY(0);
}

/* .mask-line — text reveal via clip */
.florist-thornfield-demo .mask-line {
  overflow:        hidden;
  display:         inline-block;
}
.florist-thornfield-demo .mask-line > span {
  display:   inline-block;
  transform: translateY(110%);
  transition: transform 0.65s var(--ease-standard);
}
.florist-thornfield-demo .reveal.in .mask-line > span {
  transform: translateY(0);
}

/* .marquee — horizontal scroll strip */
.florist-thornfield-demo .marquee {
  display:   flex;
  overflow:  hidden;
  gap:       var(--space-8);
  white-space: nowrap;
}
.florist-thornfield-demo .marquee-track {
  display:   flex;
  gap:       var(--space-8);
  animation: ft-marquee 28s linear infinite;
  will-change: transform;
}
@keyframes ft-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* .cursor-dot / .cursor-ring — custom cursor (pointer only) */
.florist-thornfield-demo .cursor-dot {
  position:       fixed;
  top:            0; left: 0;
  width:          6px; height: 6px;
  border-radius:  50%;
  background:     var(--accent);
  pointer-events: none;
  z-index:        9999;
  transform:      translate(-50%, -50%);
  transition:     transform 80ms var(--ease-standard);
}
.florist-thornfield-demo .cursor-ring {
  position:       fixed;
  top:            0; left: 0;
  width:          36px; height: 36px;
  border-radius:  50%;
  border:         1.5px solid var(--accent);
  pointer-events: none;
  z-index:        9998;
  transform:      translate(-50%, -50%);
  transition:     transform 220ms var(--ease-standard),
                  width 220ms var(--ease-standard),
                  height 220ms var(--ease-standard);
}

/* ── Link style ──────────────────────────────────────────────────────── */
.florist-thornfield-demo a {
  color:           var(--accent);
  text-decoration: underline;
  text-decoration-color: rgba(160, 106, 59, 0.35);
  transition: text-decoration-color var(--motion-fast) var(--ease-standard),
              background             var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo a:hover {
  text-decoration:       none;
  background:            rgba(160, 106, 59, 0.08);
  border-radius:         3px;
}

/* ════════════════════════════════════════════════════════════════════════
   BUILDER ADDITIONS — bespoke section styling
   ════════════════════════════════════════════════════════════════════════ */

.florist-thornfield-demo {
  position: relative;
  overflow-x: hidden;
}
.florist-thornfield-demo main { display: block; }

/* serif numerals helper — for prices & the founding year */
.florist-thornfield-demo .ft-numeral {
  font-family: var(--font-display);
  font-weight: 400;
  font-feature-settings: 'lnum' 1;
  letter-spacing: 0;
}

/* eyebrow — plain uppercase tracked text, NO pill */
.florist-thornfield-demo .ft-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  display: inline-block;
}
.florist-thornfield-demo .ft-eyebrow--accent { color: var(--accent); }

/* section heading composition */
.florist-thornfield-demo .ft-lede {
  font-size: var(--text-lg);
  color: var(--fg-2);
  line-height: 1.5;
  max-width: 52ch;
}

/* ── NAV ─────────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 80;
  transition: background var(--motion-base) var(--ease-standard),
              border-color var(--motion-base) var(--ease-standard),
              backdrop-filter var(--motion-base) var(--ease-standard);
  border-bottom: 1px solid transparent;
}
.florist-thornfield-demo .ft-nav.is-scrolled {
  background: rgba(250, 248, 244, 0.82);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom-color: var(--border);
}
.florist-thornfield-demo .ft-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}
.florist-thornfield-demo .ft-logo {
  font-family: var(--font-display);
  font-size: 23px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--fg);
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
}
.florist-thornfield-demo .ft-logo:hover { background: none; }
.florist-thornfield-demo .ft-logo .ft-logo-mark {
  font-size: 15px;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.florist-thornfield-demo .ft-nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
  list-style: none;
}
.florist-thornfield-demo .ft-nav-links a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--fg-2);
  text-decoration: none;
  letter-spacing: 0.01em;
}
.florist-thornfield-demo .ft-nav-links a:hover { color: var(--fg); background: none; }
.florist-thornfield-demo .ft-nav-cta {
  display: inline-flex;
}
.florist-thornfield-demo .ft-nav-burger {
  display: none;
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  width: 42px; height: 42px;
  align-items: center; justify-content: center;
  color: var(--fg);
  cursor: pointer;
}
.florist-thornfield-demo .ft-mobile-menu {
  position: fixed;
  inset: 76px 0 auto 0;
  z-index: 79;
  background: rgba(250, 248, 244, 0.97);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: var(--space-6) var(--container-gutter-phone) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.florist-thornfield-demo .ft-mobile-menu a {
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--fg);
  text-decoration: none;
  padding: var(--space-2) 0;
}
.florist-thornfield-demo .ft-mobile-menu a:hover { background: none; color: var(--accent); }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-nav-links,
  .florist-thornfield-demo .ft-nav-cta { display: none; }
  .florist-thornfield-demo .ft-nav-burger { display: inline-flex; }
}

/* ── HERO ────────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-hero {
  padding-top: 168px;
  padding-bottom: 96px;
  position: relative;
}
.florist-thornfield-demo .ft-hero-grid {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
}
.florist-thornfield-demo .ft-hero h1 {
  font-size: clamp(3rem, 7.2vw, 6.4rem);
  line-height: 0.98;
  letter-spacing: -0.025em;
  max-width: 13ch;
}
.florist-thornfield-demo .ft-hero h1 em {
  font-style: italic;
  font-weight: 300;
}
.florist-thornfield-demo .ft-hero-aside {
  padding-bottom: 8px;
}
.florist-thornfield-demo .ft-hero-aside p {
  font-size: var(--text-lg);
  color: var(--fg-2);
  max-width: 34ch;
}
.florist-thornfield-demo .ft-hero-ctas {
  margin-top: var(--space-8);
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}
.florist-thornfield-demo .ft-hero-meta {
  margin-top: clamp(48px, 7vw, 92px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  border-top: 1px solid var(--border);
  padding-top: var(--space-8);
}
.florist-thornfield-demo .ft-hero-meta dt {
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}
.florist-thornfield-demo .ft-hero-meta dd {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--fg);
  line-height: 1.1;
}
.florist-thornfield-demo .ft-hero-meta dd span {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--muted);
  display: block;
  margin-top: 2px;
  letter-spacing: 0;
  text-transform: none;
}

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-hero { padding-top: 132px; }
  .florist-thornfield-demo .ft-hero-grid { grid-template-columns: 1fr; gap: 32px; align-items: start; }
  .florist-thornfield-demo .ft-hero-meta { grid-template-columns: repeat(2, 1fr); gap: var(--space-6) var(--space-4); }
}

/* ── STORY ───────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-story-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(36px, 6vw, 96px);
  align-items: center;
}
.florist-thornfield-demo .ft-story-figure {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  aspect-ratio: 4 / 5;
}
.florist-thornfield-demo .ft-story-figure img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.florist-thornfield-demo .ft-story-figure figcaption {
  position: absolute;
  left: 0; bottom: 0; right: 0;
  padding: var(--space-6);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(to top, rgba(28,27,25,0.55), rgba(28,27,25,0));
}
.florist-thornfield-demo .ft-story-body h2 { margin-bottom: var(--space-6); max-width: 16ch; }
.florist-thornfield-demo .ft-story-body p + p { margin-top: var(--space-5); }
.florist-thornfield-demo .ft-story-sign {
  margin-top: var(--space-8);
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
.florist-thornfield-demo .ft-story-sign .ft-sign-name {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 28px;
  color: var(--fg);
  line-height: 1;
}
.florist-thornfield-demo .ft-story-sign .ft-sign-role {
  font-size: var(--text-sm);
  color: var(--muted);
}

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-story-grid { grid-template-columns: 1fr; gap: 36px; }
}

/* ── FULL-BLEED EDITORIAL SPREAD (the memorable element) ─────────────── */
.florist-thornfield-demo .ft-spread {
  position: relative;
  width: 100%;
  min-height: clamp(440px, 78vh, 760px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: #2a2620;
}
.florist-thornfield-demo .ft-spread img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.florist-thornfield-demo .ft-spread-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(28,27,25,0.62) 0%, rgba(28,27,25,0.28) 42%, rgba(28,27,25,0.05) 70%);
}
.florist-thornfield-demo .ft-spread-content {
  position: relative;
  z-index: 2;
  padding-top: 92px;
  padding-bottom: 92px;
  width: 100%;
}
.florist-thornfield-demo .ft-spread-content .ft-eyebrow {
  color: rgba(255,255,255,0.72);
}
.florist-thornfield-demo .ft-spread h2 {
  color: #fff;
  font-size: clamp(2.4rem, 5.2vw, 4.6rem);
  max-width: 18ch;
  margin-top: var(--space-5);
}
.florist-thornfield-demo .ft-spread h2 em { font-style: italic; font-weight: 300; }
.florist-thornfield-demo .ft-spread p {
  color: rgba(255,255,255,0.82);
  max-width: 42ch;
  margin-top: var(--space-6);
  font-size: var(--text-lg);
}
.florist-thornfield-demo .ft-spread-credit {
  position: absolute;
  right: var(--container-gutter-desktop);
  top: 40px;
  z-index: 2;
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  writing-mode: vertical-rl;
}
@media (max-width: 639px) {
  .florist-thornfield-demo .ft-spread-credit { display: none; }
  .florist-thornfield-demo .ft-spread-content { padding-top: 64px; padding-bottom: 64px; }
}

/* ── COLLECTIONS ─────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-8);
  margin-bottom: var(--space-12);
  flex-wrap: wrap;
}
.florist-thornfield-demo .ft-section-head h2 { max-width: 16ch; }
.florist-thornfield-demo .ft-section-head .ft-eyebrow { margin-bottom: var(--space-4); }

.florist-thornfield-demo .ft-filterbar {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
.florist-thornfield-demo .ft-filter-chip {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.01em;
  padding: 9px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: transparent;
  color: var(--fg-2);
  cursor: pointer;
  transition: all var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-filter-chip:hover { border-color: var(--fg); color: var(--fg); }
.florist-thornfield-demo .ft-filter-chip.is-active {
  background: var(--fg);
  border-color: var(--fg);
  color: var(--bg);
}

.florist-thornfield-demo .ft-collections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 2.4vw, 36px);
}
.florist-thornfield-demo .ft-collection {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: var(--space-6);
  align-items: center;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  background: var(--surface);
  padding: var(--space-6);
  transition: box-shadow var(--motion-base) var(--ease-standard),
              transform var(--motion-base) var(--ease-standard);
}
.florist-thornfield-demo .ft-collection:hover {
  box-shadow: var(--elev-raised);
  transform: translateY(-3px);
}
.florist-thornfield-demo .ft-collection-img {
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-warm);
}
.florist-thornfield-demo .ft-collection-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 600ms var(--ease-standard);
}
.florist-thornfield-demo .ft-collection:hover .ft-collection-img img { transform: scale(1.04); }
.florist-thornfield-demo .ft-collection-season {
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.florist-thornfield-demo .ft-collection h3 { margin: 10px 0 12px; font-size: var(--text-2xl); }
.florist-thornfield-demo .ft-collection p { font-size: var(--text-sm); color: var(--fg-2); }
.florist-thornfield-demo .ft-collection-foot {
  margin-top: var(--space-5);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
  border-top: 1px solid var(--border-soft);
  padding-top: var(--space-4);
}
.florist-thornfield-demo .ft-collection-price {
  font-family: var(--font-display);
  font-size: 26px;
  color: var(--fg);
}
.florist-thornfield-demo .ft-collection-link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.florist-thornfield-demo .ft-collection-link:hover { background: none; gap: 10px; }
.florist-thornfield-demo .ft-collection-empty {
  grid-column: 1 / -1;
  text-align: left;
  padding: var(--space-12);
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  color: var(--muted);
}

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-collections-grid { grid-template-columns: 1fr; }
}
@media (max-width: 479px) {
  .florist-thornfield-demo .ft-collection { grid-template-columns: 1fr; }
  .florist-thornfield-demo .ft-collection-img { aspect-ratio: 16 / 11; }
}

/* ── EVENT SERVICES ──────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-events {
  background: var(--surface-warm);
}
.florist-thornfield-demo .ft-events-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(36px, 6vw, 88px);
  align-items: start;
}
.florist-thornfield-demo .ft-events-list { display: flex; flex-direction: column; }
.florist-thornfield-demo .ft-event-row {
  border-top: 1px solid var(--border);
  padding: var(--space-8) 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-6);
  align-items: baseline;
  cursor: pointer;
  transition: padding-left var(--motion-base) var(--ease-standard);
}
.florist-thornfield-demo .ft-event-row:last-child { border-bottom: 1px solid var(--border); }
.florist-thornfield-demo .ft-event-row:hover { padding-left: var(--space-3); }
.florist-thornfield-demo .ft-event-row.is-open { padding-left: var(--space-3); }
.florist-thornfield-demo .ft-event-no {
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
}
.florist-thornfield-demo .ft-event-main h3 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  transition: color var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-event-row:hover .ft-event-main h3 { color: var(--accent); }
.florist-thornfield-demo .ft-event-detail {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height var(--motion-base) var(--ease-standard),
              opacity var(--motion-base) var(--ease-standard),
              margin var(--motion-base) var(--ease-standard);
}
.florist-thornfield-demo .ft-event-row.is-open .ft-event-detail {
  max-height: 240px;
  opacity: 1;
  margin-top: var(--space-4);
}
.florist-thornfield-demo .ft-event-detail p { max-width: 56ch; font-size: var(--text-base); }
.florist-thornfield-demo .ft-event-typical {
  margin-top: var(--space-3);
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--fg);
}
.florist-thornfield-demo .ft-event-toggle {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--fg);
  background: var(--bg);
  flex-shrink: 0;
  transition: transform var(--motion-base) var(--ease-standard),
              background var(--motion-fast) var(--ease-standard),
              color var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-event-row.is-open .ft-event-toggle {
  transform: rotate(45deg);
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.florist-thornfield-demo .ft-events-aside h2 { margin-bottom: var(--space-5); }
.florist-thornfield-demo .ft-events-aside .ft-btn { margin-top: var(--space-6); }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-events-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 479px) {
  .florist-thornfield-demo .ft-event-row { grid-template-columns: auto 1fr; }
  .florist-thornfield-demo .ft-event-toggle { grid-column: 2; justify-self: end; margin-top: var(--space-3); }
}

/* ── TEAM ────────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 3vw, 44px);
}
.florist-thornfield-demo .ft-team-card .ft-team-img {
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-warm);
  margin-bottom: var(--space-5);
}
.florist-thornfield-demo .ft-team-card img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: grayscale(1) contrast(1.02);
  transition: filter 500ms var(--ease-standard), transform 600ms var(--ease-standard);
}
.florist-thornfield-demo .ft-team-card:hover img { filter: grayscale(0); transform: scale(1.03); }
.florist-thornfield-demo .ft-team-card h3 { font-size: var(--text-xl); margin-bottom: 4px; }
.florist-thornfield-demo .ft-team-role {
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-4);
}
.florist-thornfield-demo .ft-team-card p { font-size: var(--text-sm); }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-team-grid { grid-template-columns: 1fr; max-width: 420px; }
}

/* ── TESTIMONIALS ────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-testimonials { background: var(--fg); color: var(--bg); }
.florist-thornfield-demo .ft-testimonials .ft-eyebrow { color: rgba(250,248,244,0.55); }
.florist-thornfield-demo .ft-testimonials h2 { color: var(--bg); }
.florist-thornfield-demo .ft-testi-stage {
  margin-top: var(--space-12);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}
.florist-thornfield-demo .ft-testi-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(1.8rem, 3.6vw, 3rem);
  line-height: 1.22;
  color: var(--bg);
  max-width: 22ch;
  letter-spacing: -0.01em;
}
.florist-thornfield-demo .ft-testi-quote::before { content: '\\201C'; color: var(--accent); margin-right: 2px; }
.florist-thornfield-demo .ft-testi-quote::after { content: '\\201D'; color: var(--accent); }
.florist-thornfield-demo .ft-testi-meta {
  margin-top: var(--space-8);
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
.florist-thornfield-demo .ft-testi-author { font-weight: 600; font-size: var(--text-base); color: var(--bg); }
.florist-thornfield-demo .ft-testi-context { font-size: var(--text-sm); color: rgba(250,248,244,0.6); }
.florist-thornfield-demo .ft-testi-nav {
  margin-top: var(--space-12);
  display: flex;
  align-items: center;
  gap: var(--space-6);
}
.florist-thornfield-demo .ft-testi-dots { display: flex; gap: var(--space-2); }
.florist-thornfield-demo .ft-testi-dot {
  width: 30px; height: 2px;
  background: rgba(250,248,244,0.25);
  border: none; padding: 0; cursor: pointer;
  transition: background var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-testi-dot.is-active { background: var(--accent); }
.florist-thornfield-demo .ft-testi-arrows { display: flex; gap: var(--space-2); margin-left: auto; }
.florist-thornfield-demo .ft-testi-arrow {
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(250,248,244,0.25);
  background: transparent;
  color: var(--bg);
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--motion-fast) var(--ease-standard),
              background var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-testi-arrow:hover { border-color: var(--accent); background: rgba(160,106,59,0.18); }

/* ── ENQUIRY FORM ────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-enquiry-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(36px, 6vw, 88px);
  align-items: start;
}
.florist-thornfield-demo .ft-enquiry-intro h2 { margin-bottom: var(--space-5); max-width: 14ch; }
.florist-thornfield-demo .ft-contact-list {
  margin-top: var(--space-8);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}
.florist-thornfield-demo .ft-contact-list li {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}
.florist-thornfield-demo .ft-contact-list .ft-ci {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 2px;
}
.florist-thornfield-demo .ft-contact-list dt {
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 3px;
}
.florist-thornfield-demo .ft-contact-list dd { font-size: var(--text-base); color: var(--fg); }
.florist-thornfield-demo .ft-contact-list a { color: var(--fg); text-decoration: none; }
.florist-thornfield-demo .ft-contact-list a:hover { color: var(--accent); background: none; }

.florist-thornfield-demo .ft-form {
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding: clamp(24px, 4vw, 44px);
}
.florist-thornfield-demo .ft-field { margin-bottom: var(--space-6); }
.florist-thornfield-demo .ft-field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}
.florist-thornfield-demo .ft-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--fg);
  margin-bottom: var(--space-2);
}
.florist-thornfield-demo .ft-label .ft-req { color: var(--accent); }
.florist-thornfield-demo .ft-input,
.florist-thornfield-demo .ft-select,
.florist-thornfield-demo .ft-textarea {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--fg);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 13px 14px;
  transition: border-color var(--motion-fast) var(--ease-standard),
              box-shadow var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-textarea { resize: vertical; min-height: 116px; line-height: 1.5; }
.florist-thornfield-demo .ft-input::placeholder,
.florist-thornfield-demo .ft-textarea::placeholder { color: #a8a195; }
.florist-thornfield-demo .ft-input:focus,
.florist-thornfield-demo .ft-select:focus,
.florist-thornfield-demo .ft-textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}
.florist-thornfield-demo .ft-input.has-error,
.florist-thornfield-demo .ft-select.has-error,
.florist-thornfield-demo .ft-textarea.has-error {
  border-color: var(--danger);
}
.florist-thornfield-demo .ft-error {
  display: block;
  margin-top: 6px;
  font-size: var(--text-sm);
  color: var(--danger);
}
.florist-thornfield-demo .ft-select { appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23746d63' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center; padding-right: 38px;
}
.florist-thornfield-demo .ft-service-pick {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
}
.florist-thornfield-demo .ft-service-opt {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  text-align: center;
  padding: 11px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: var(--fg-2);
  cursor: pointer;
  transition: all var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-service-opt:hover { border-color: var(--fg); }
.florist-thornfield-demo .ft-service-opt.is-active {
  border-color: var(--accent);
  background: rgba(160,106,59,0.08);
  color: var(--accent);
}
.florist-thornfield-demo .ft-form .ft-btn-primary { width: 100%; justify-content: center; margin-top: var(--space-2); }
.florist-thornfield-demo .ft-form-note { margin-top: var(--space-4); font-size: var(--text-xs); color: var(--muted); text-align: center; }

.florist-thornfield-demo .ft-form-success {
  text-align: left;
  padding: var(--space-8) 0;
}
.florist-thornfield-demo .ft-form-success .ft-success-mark {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: rgba(63,143,95,0.12);
  color: var(--success);
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: var(--space-6);
}
.florist-thornfield-demo .ft-form-success h3 { margin-bottom: var(--space-4); }
.florist-thornfield-demo .ft-form-success .ft-btn { margin-top: var(--space-6); }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-enquiry-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 479px) {
  .florist-thornfield-demo .ft-field-row { grid-template-columns: 1fr; gap: var(--space-6); }
  .florist-thornfield-demo .ft-service-pick { grid-template-columns: 1fr; }
}

/* ── FAQ ─────────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-faq-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: clamp(36px, 6vw, 88px);
  align-items: start;
}
.florist-thornfield-demo .ft-faq-list { border-top: 1px solid var(--border); }
.florist-thornfield-demo .ft-faq-item { border-bottom: 1px solid var(--border); }
.florist-thornfield-demo .ft-faq-q {
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: var(--space-6) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.2vw, 1.6rem);
  color: var(--fg);
  transition: color var(--motion-fast) var(--ease-standard);
}
.florist-thornfield-demo .ft-faq-q:hover { color: var(--accent); }
.florist-thornfield-demo .ft-faq-icon {
  flex-shrink: 0;
  color: var(--accent);
  transition: transform var(--motion-base) var(--ease-standard);
}
.florist-thornfield-demo .ft-faq-item.is-open .ft-faq-icon { transform: rotate(180deg); }
.florist-thornfield-demo .ft-faq-a {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height var(--motion-base) var(--ease-standard),
              opacity var(--motion-base) var(--ease-standard),
              padding var(--motion-base) var(--ease-standard);
}
.florist-thornfield-demo .ft-faq-item.is-open .ft-faq-a {
  max-height: 320px;
  opacity: 1;
  padding-bottom: var(--space-6);
}
.florist-thornfield-demo .ft-faq-a p { font-size: var(--text-base); max-width: 62ch; }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-faq-grid { grid-template-columns: 1fr; gap: 32px; }
}

/* ── CTA BAND ────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-cta {
  text-align: left;
}
.florist-thornfield-demo .ft-cta-inner {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: clamp(56px, 9vw, 120px) 0;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-12);
  align-items: center;
}
.florist-thornfield-demo .ft-cta h2 {
  font-size: clamp(2.4rem, 5.5vw, 4.4rem);
  max-width: 16ch;
}
.florist-thornfield-demo .ft-cta h2 em { font-style: italic; font-weight: 300; }
.florist-thornfield-demo .ft-cta-aside p { margin-bottom: var(--space-6); }
@media (max-width: 859px) {
  .florist-thornfield-demo .ft-cta-inner { grid-template-columns: 1fr; gap: var(--space-8); }
}

/* ── FOOTER ──────────────────────────────────────────────────────────── */
.florist-thornfield-demo .ft-footer {
  padding-top: var(--section-y-tablet);
  padding-bottom: var(--space-12);
}
.florist-thornfield-demo .ft-footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: var(--space-8);
  padding-bottom: var(--space-12);
}
.florist-thornfield-demo .ft-footer-brand .ft-logo { font-size: 30px; margin-bottom: var(--space-5); }
.florist-thornfield-demo .ft-footer-brand p { font-size: var(--text-sm); max-width: 34ch; }
.florist-thornfield-demo .ft-footer-col h4 {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-5);
}
.florist-thornfield-demo .ft-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: var(--space-3); }
.florist-thornfield-demo .ft-footer-col a {
  font-size: var(--text-sm);
  color: var(--fg-2);
  text-decoration: none;
}
.florist-thornfield-demo .ft-footer-col a:hover { color: var(--accent); background: none; }
.florist-thornfield-demo .ft-footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.florist-thornfield-demo .ft-footer-bottom p { font-size: var(--text-xs); color: var(--muted); margin: 0; }
.florist-thornfield-demo .ft-footer-newsletter { display: flex; gap: var(--space-2); margin-top: var(--space-4); max-width: 320px; }
.florist-thornfield-demo .ft-footer-newsletter input {
  flex: 1;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  color: var(--fg);
}
.florist-thornfield-demo .ft-footer-newsletter input:focus { outline: none; border-color: var(--accent); }
.florist-thornfield-demo .ft-footer-newsletter button {
  background: var(--fg);
  color: var(--bg);
  border: none;
  border-radius: var(--radius-sm);
  padding: 0 16px;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.florist-thornfield-demo .ft-footer-newsletter button:hover { background: var(--accent); }
.florist-thornfield-demo .ft-footer-newsletter.is-done input { border-color: var(--success); }

@media (max-width: 859px) {
  .florist-thornfield-demo .ft-footer-top { grid-template-columns: 1fr 1fr; gap: var(--space-12) var(--space-8); }
  .florist-thornfield-demo .ft-footer-brand { grid-column: 1 / -1; }
}
@media (max-width: 479px) {
  .florist-thornfield-demo .ft-footer-top { grid-template-columns: 1fr; }
}

/* ── reveal stagger via data-delay ───────────────────────────────────── */
.florist-thornfield-demo .reveal[data-delay="1"] { transition-delay: 80ms; }
.florist-thornfield-demo .reveal[data-delay="2"] { transition-delay: 160ms; }
.florist-thornfield-demo .reveal[data-delay="3"] { transition-delay: 240ms; }
.florist-thornfield-demo .reveal[data-delay="4"] { transition-delay: 320ms; }

/* mask-line stagger */
.florist-thornfield-demo .mask-line .d1 { transition-delay: 0ms; }
.florist-thornfield-demo .mask-line .d2 { transition-delay: 90ms; }
.florist-thornfield-demo .mask-line .d3 { transition-delay: 180ms; }

@media (prefers-reduced-motion: reduce) {
  .florist-thornfield-demo .reveal,
  .florist-thornfield-demo .mask-line > span { transition: none !important; transform: none !important; opacity: 1 !important; }
  .florist-thornfield-demo .marquee-track { animation: none !important; }
}
`;
