# Redesign: Leadership & Volunteering Carousel

Transform the current tabbed leadership section into a modern, interactive "Centered Peek Carousel" with a seamless full-screen expansion animation (App Store style).

## User Review Required

> [!IMPORTANT]
> The expansion animation relies on JavaScript to calculate positions dynamically. We will use a "FLIP" technique (First, Last, Invert, Play) to ensure the animation is smooth and high-performance.

> [!TIP]
> We will use glassmorphism for the expanded view header to maintain the "premium" editorial feel of the rest of your portfolio.

## Open Questions

*   **Close Action**: Should clicking outside the expanded card also close it, or only the explicit 'X' button?
*   **Mobile Behavior**: On very small screens, should we keep the "peek" effect (which makes cards smaller) or transition to a standard full-width slider?

## Proposed Changes

### [Leadership Component]

#### [MODIFY] [index.html](file:///Users/anangayman/Downloads/Personal/portofolio/index.html)
*   Replace `.split-view-container` with `.leadership-carousel-wrapper`.
*   Implement the carousel structure with "center", "left-peek", and "right-peek" logic.
*   Add minimalist navigation arrows and "growing" dots.
*   Define the "Expanded View" modal structure that will be populated via JS.

#### [MODIFY] [leadership.css](file:///Users/anangayman/Downloads/Personal/portofolio/css/leadership.css)
*   Implement the Centered Peek Carousel styles:
    *   Center card: `scale(1)`, `opacity: 1`, `z-index: 10`.
    *   Side cards: `scale(0.75)`, `opacity: 0.4`, `filter: blur(2px) grayscale(50%)`.
    *   Layout: `display: flex`, `justify-content: center`, `align-items: center`.
*   Style navigation dots (pill-shaped active state).
*   Implement Expanded View styles:
    *   Fixed/Sticky header with glassmorphism.
    *   Hero image anchor.
    *   Grid layout for secondary images.
    *   Staggered entry animations for content.

#### [NEW] [carousel.js](file:///Users/anangayman/Downloads/Personal/portofolio/js/carousel.js)
*   Handle carousel navigation (arrows/dots).
*   Implement the expansion logic:
    *   Calculate start position of the clicked card.
    *   Animate to final full-screen state.
    *   Populate expanded content from the card's data attributes or hidden content.

## Verification Plan

### Automated Tests
*   Verify carousel navigation cycles correctly.
*   Verify expansion trigger opens the correct content.
*   Check responsiveness on mobile viewports.

### Manual Verification
*   Test the "feel" of the expansion animation (smoothness, easing).
*   Verify close button functionality.
*   Ensure navigation dots reflect the current active card.
