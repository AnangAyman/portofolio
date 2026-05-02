// Disable automatic scroll restoration
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {

    // ── Initialize AOS ──────────────────────────────────────────────────────
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            easing: 'ease-out',
            once: true,
            offset: 100
        });
    }

    // ── Custom Scroll Spy ─────────────────────────────────────────────────────
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
                const hasActive = [...document.querySelectorAll('.navbar-nav .dropdown-item')]
                    .filter(i => i.closest('.dropdown') === dropdownToggle.closest('.dropdown'))
                    .some(i => i.getAttribute('href') === '#' + id);
                if (!hasActive) {
                    dropdownToggle.classList.remove('active');
                }
            }
        });
    }

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
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(section => scrollSpyObserver.observe(section));

    // ── Leadership & Volunteering Tab Switching ─────────────────────────────
    const tabBtns = document.querySelectorAll('.leadership-tab-btn');
    const panels = document.querySelectorAll('.leadership-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ── Credentials Tab Switching ────────────────────────────────────────────
    const credentialsTabBtns = document.querySelectorAll('.credentials-tab-btn');
    const credentialsPanels = document.querySelectorAll('.credentials-panel');

    credentialsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            credentialsTabBtns.forEach(tab => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });

            credentialsPanels.forEach(panel => panel.classList.remove('active'));

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const targetId = btn.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ── Experience Expandable Cards ──────────────────────────────────────────
    const expandBtns = document.querySelectorAll('.btn-expand');
    expandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const detailsPanel = btn.closest('.experience-body').querySelector('.experience-details');
            
            if (isExpanded) {
                btn.setAttribute('aria-expanded', 'false');
                detailsPanel.classList.remove('open');
                detailsPanel.setAttribute('aria-hidden', 'true');
            } else {
                btn.setAttribute('aria-expanded', 'true');
                detailsPanel.classList.add('open');
                detailsPanel.setAttribute('aria-hidden', 'false');
            }
        });
    });
});

// Smooth scrolling for navigation links (skip dropdown toggles)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});