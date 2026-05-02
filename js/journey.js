// Journey Page — Explorer's Journal JS
// Handles: AOS init, chapter divider animations, navbar scroll effect

document.addEventListener('DOMContentLoaded', function () {

    // ── Init AOS ──────────────────────────────────────────────
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }

    // ── Navbar scroll effect ──────────────────────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ── Chapter divider reveal on scroll ─────────────────────
    // Adds a CSS class that triggers a line-draw animation on the divider underline
    const chapterDividers = document.querySelectorAll('.chapter-divider');

    if ('IntersectionObserver' in window) {
        const dividerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    dividerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        chapterDividers.forEach(divider => dividerObserver.observe(divider));
    } else {
        // Fallback: just show all
        chapterDividers.forEach(d => d.classList.add('is-visible'));
    }

    // ── Subtle parallax on fullbleed hero ────────────────────
    const journeyHero = document.querySelector('.journey-hero');
    if (journeyHero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroInner = journeyHero.querySelector('.journey-hero-inner');
            if (heroInner && scrolled < window.innerHeight) {
                heroInner.style.transform = `translateY(${scrolled * 0.25}px)`;
                heroInner.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
        }, { passive: true });
    }
});
