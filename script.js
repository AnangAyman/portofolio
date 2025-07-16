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
    }
});