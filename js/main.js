// Disable automatic scroll restoration
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {

    // ── Page Entrance Animation ─────────────────────────────────────────────
    // Trigger the staggered reveal sequence
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });

    // ── Initialize AOS ──────────────────────────────────────────────────────
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 250
        });
    }

    // ── Custom Scroll Spy ─────────────────────────────────────────────────────
    // Uses IntersectionObserver so it always reflects current section positions,
    // even if the layout shifts after page load (AOS, lazy images, etc.)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

    function setActiveLink(id) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Also check dropdown-items and activate their parent dropdown-toggle
        document.querySelectorAll('.navbar-nav .dropdown-item').forEach(item => {
            const href = item.getAttribute('href');
            const dropdownToggle = item.closest('.dropdown')?.querySelector('.dropdown-toggle');
            if (!dropdownToggle) return;
            if (href === '#' + id) {
                dropdownToggle.classList.add('active');
            } else {
                // Only remove if no sibling dropdown-item is active
                const anyActive = item.closest('.dropdown-menu')
                    .querySelectorAll('.dropdown-item')
                    .values();
                const hasActive = [...document.querySelectorAll('.navbar-nav .dropdown-item')]
                    .filter(i => i.closest('.dropdown') === dropdownToggle.closest('.dropdown'))
                    .some(i => i.getAttribute('href') === '#' + id);
                if (!hasActive) {
                    dropdownToggle.classList.remove('active');
                }
            }
        });
    }

    // Track which sections are currently intersecting and pick the topmost one
    const visibleSections = new Map();

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSections.set(entry.target.id, entry.boundingClientRect.top);
            } else {
                visibleSections.delete(entry.target.id);
            }
        });

        if (visibleSections.size > 0) {
            // Activate the section whose top is closest to (but not above) the navbar
            let activeId = null;
            let closestTop = Infinity;
            visibleSections.forEach((top, id) => {
                if (top < closestTop) {
                    closestTop = top;
                    activeId = id;
                }
            });
            if (activeId) setActiveLink(activeId);
        }
    }, {
        // A section is "active" when its top 20% reaches the top quarter of the viewport
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(section => scrollSpyObserver.observe(section));

    // ── Section Title Dash Animation ────────────────────────────────────────
    // Animate the ::after underline width when section titles scroll into view
    const sectionTitles = document.querySelectorAll('.section-title');

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1
    });

    sectionTitles.forEach(title => titleObserver.observe(title));

    // ── Terminal Typing Animation ───────────────────────────────────────────
    const typingEl = document.getElementById('typing-animation');
    if (typingEl) {
        const commands = [
            'hire --me',
            'make collaboration',
            'echo "hello world"',
            'git push origin future',
            'npm run build-dreams',
        ];
        let cmdIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let pauseTimeout = null;

        const TYPING_SPEED = 80;
        const DELETING_SPEED = 40;
        const PAUSE_AFTER_TYPE = 2200;
        const PAUSE_AFTER_DELETE = 500;

        function typeLoop() {
            const currentCmd = commands[cmdIndex];

            if (!isDeleting) {
                // Typing
                typingEl.textContent = currentCmd.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex >= currentCmd.length) {
                    // Done typing — pause then start deleting
                    isDeleting = true;
                    pauseTimeout = setTimeout(typeLoop, PAUSE_AFTER_TYPE);
                    return;
                }
                pauseTimeout = setTimeout(typeLoop, TYPING_SPEED + Math.random() * 40);
            } else {
                // Deleting
                typingEl.textContent = currentCmd.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex <= 0) {
                    // Done deleting — move to next command
                    isDeleting = false;
                    cmdIndex = (cmdIndex + 1) % commands.length;
                    pauseTimeout = setTimeout(typeLoop, PAUSE_AFTER_DELETE);
                    return;
                }
                pauseTimeout = setTimeout(typeLoop, DELETING_SPEED);
            }
        }

        // Start typing after the page entrance animation completes
        setTimeout(typeLoop, 1200);
    }

    // ── Magnetic Button Effect ──────────────────────────────────────────────
    // Buttons with [data-magnetic] subtly follow the cursor on hover
    const magneticBtns = document.querySelectorAll('[data-magnetic]');
    const MAGNETIC_STRENGTH = 0.3; // Max 5px movement at strength 0.3

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * MAGNETIC_STRENGTH}px, ${y * MAGNETIC_STRENGTH}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ── Leadership & Volunteering Tab Switching ─────────────────────────────
    const tabBtns = document.querySelectorAll('.leadership-tab-btn');
    const panels = document.querySelectorAll('.leadership-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// Smooth scrolling for navigation links (skip dropdown toggles)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Let Bootstrap handle dropdown toggles — don't intercept them
        if (this.getAttribute('data-bs-toggle') === 'dropdown') return;
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
                bsCollapse.hide();
            }
        }
    });
});

// Navbar scroll effect with glassmorphism enhancement
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('shadow-sm');
    }
});