// Disable automatic scroll restoration
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 250
        });
    }

    // Initialize the Cinematic Timeline
    initializeTimeline();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
                bsCollapse.hide();
            }
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// Work filter functionality
const filterButtons = document.querySelectorAll('.work-filter');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');

        workItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                item.style.display = 'block';     // Reset display first
                setTimeout(() => item.style.opacity = '1', 10); // Fade in
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300); // Wait for fade out
            }
        });
    });
});

// --- UPDATED TIMELINE FUNCTION ---
function initializeTimeline() {
    const timelineYears = document.querySelectorAll('.timeline-year');
    const timelineSlides = document.querySelectorAll('.timeline-slide');
    const timelineDots = document.querySelectorAll('.timeline-dot');
    
    if(!timelineSlides.length) return;

    function showSlide(index) {
        // 1. Activate Slide
        timelineSlides.forEach(slide => slide.classList.remove('active'));
        timelineSlides[index].classList.add('active');
        
        // 2. Activate Year Pill
        // We get the year from the slide we just switched to
        const yearValue = timelineSlides[index].getAttribute('data-year');
        timelineYears.forEach(year => year.classList.remove('active'));
        
        // Find the specific year button that matches the slide's year
        const activeYear = document.querySelector(`.timeline-year[data-year="${yearValue}"]`);
        if(activeYear) activeYear.classList.add('active');
        
        // 3. Activate Dot
        timelineDots.forEach(dot => dot.classList.remove('active'));
        if(timelineDots[index]) timelineDots[index].classList.add('active');
        
        // 4. Move Carousel
        const slidesContainer = document.querySelector('.timeline-slides');
        if(slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    // Event Listener: Click on Year
    timelineYears.forEach(year => {
        year.addEventListener('click', () => {
            const yearValue = year.getAttribute('data-year');
            // Find the index of the slide that has this year
            timelineSlides.forEach((slide, index) => {
                if (slide.getAttribute('data-year') === yearValue) {
                    showSlide(index);
                }
            });
        });
    });

    // Event Listener: Click on Dots (NEW)
    timelineDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

// --- UPDATED PROGRESS LOGIC (Optional) ---
window.addEventListener('scroll', () => {
    const timeline = document.querySelector('.timeline-spine');
    const progressBar = document.querySelector('.scroll-progress');
    
    if (timeline && progressBar) {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // "start" is the distance from the top of viewport to top of timeline
        const start = timelineRect.top;
        const totalHeight = timelineRect.height;
        
        // Calculate how much has been scrolled past the center of the screen
        // Changing 'windowHeight / 2' to 'windowHeight * 0.8' makes the line draw 
        // further down the screen (filling up faster).
        let scrolled = (windowHeight * 0.6) - start; 

        let percentage = (scrolled / totalHeight) * 100;
        
        // Clamp between 0 and 100
        percentage = Math.min(Math.max(percentage, 0), 100);
        
        progressBar.style.height = `${percentage}%`;
    }
});