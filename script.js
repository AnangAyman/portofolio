// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu when a link is clicked
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Work filter functionality
const filterButtons = document.querySelectorAll('.work-filter');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        workItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 2rem';
    } else {
        navbar.style.padding = '1rem 2rem';
    }
});

// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    const enterButton = document.querySelector('.preloader-enter');
    const body = document.querySelector('body');

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Auto-hide preloader after 5 seconds (fallback)
    const autoHideTimer = setTimeout(() => {
        showMainContent();
    }, 5000);
    
    // Enter button click handler
    enterButton.addEventListener('click', () => {
        clearTimeout(autoHideTimer);
        showMainContent();
    });
    
    function showMainContent() {
        if (preloader) {
            preloader.classList.add('hide-preloader');
        }
        if (mainContent) {
            mainContent.classList.add('show-content');
        }
        if (body) {
            body.style.overflowY = 'auto'; // Re-enable scrolling
        }
        initializeTimeline();
    }
});

// Timeline functionality
function initializeTimeline() {
    const timelineYears = document.querySelectorAll('.timeline-year');
    const timelineSlides = document.querySelectorAll('.timeline-slide');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const timelineDots = document.querySelectorAll('.timeline-dot');
    
    let currentIndex = 0;
    const slideCount = timelineSlides.length;
    
    // Year click handler
    timelineYears.forEach(year => {
        year.addEventListener('click', () => {
            const yearValue = year.getAttribute('data-year');
            
            // Find the index of the slide with matching year
            timelineSlides.forEach((slide, index) => {
                if (slide.getAttribute('data-year') === yearValue) {
                    showSlide(index);
                }
            });
        });
    });
    
    // Next button handler
    nextButton.addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            showSlide(currentIndex + 1);
        }
    });
    
    // Previous button handler
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    });
    
    // Dot click handler
    timelineDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    function showSlide(index) {
        // Update slide visibility
        timelineSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        timelineSlides[index].classList.add('active');
        
        // Update years selection
        timelineYears.forEach(year => {
            year.classList.remove('active');
        });
        const yearValue = timelineSlides[index].getAttribute('data-year');
        document.querySelector(`.timeline-year[data-year="${yearValue}"]`).classList.add('active');
        
        // Update dots
        timelineDots.forEach(dot => {
            dot.classList.remove('active');
        });
        timelineDots[index].classList.add('active');
        
        // Update navigation buttons
        prevButton.disabled = index === 0;
        nextButton.disabled = index === slideCount - 1;
        
        // Update current index
        currentIndex = index;
        
        // Update slides position
        const slidesContainer = document.querySelector('.timeline-slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
}