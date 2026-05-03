document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('leadership-track');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.leadership-card'));
    const prevBtn = document.querySelector('.carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn.next-btn');
    const dotsContainer = document.getElementById('carousel-dots');
    const modal = document.getElementById('leadership-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalHero = document.getElementById('modal-hero');
    const modalHeroContent = document.getElementById('modal-hero-content');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalContentWrapper = document.querySelector('.modal-content-wrapper');

    let currentIndex = 0;

    // Initialize dots
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

    function updateCarousel() {
        cards.forEach((card, index) => {
            // Remove all classes
            card.className = 'leadership-card';
            
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
                card.classList.add('prev');
            } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
                card.classList.add('next');
            } else {
                // Hide others
                if (index < currentIndex) {
                    card.classList.add('hidden-left');
                } else {
                    card.classList.add('hidden-right');
                }
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Initial setup
    updateCarousel();

    // Modal Expansion Logic (App Store Style)
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                // If clicking a peek card, navigate to it
                goToSlide(index);
                return;
            }

            // Expanding the active card
            openModal(card);
        });
    });

    // List Expansion Logic
    const listItems = Array.from(document.querySelectorAll('.leadership-list-item'));
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item);
        });
    });


    function openModal(card) {
        // 1. Populate Content
        const heroContent = card.querySelector('.card-hero-content').innerHTML;
        const expandedContent = card.querySelector('.card-expanded-content').innerHTML;
        
        // Copy background
        const cardHero = card.querySelector('.card-hero');
        const bgImage = cardHero.style.backgroundImage;
        if (bgImage && bgImage !== 'none') {
            modalHero.style.backgroundImage = bgImage;
            modalHero.className = 'modal-hero';
        } else {
            // It might have an abstract class
            modalHero.style.backgroundImage = 'none';
            modalHero.className = 'modal-hero';
            const classes = Array.from(cardHero.classList);
            const abstractClass = classes.find(c => c.startsWith('abstract-bg-'));
            if (abstractClass) {
                modalHero.classList.add(abstractClass);
            }
        }

        modalHeroContent.innerHTML = heroContent;
        modalBodyContent.innerHTML = expandedContent;

        // 2. Animate Opening
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        
        // Clear content after animation
        setTimeout(() => {
            modalHeroContent.innerHTML = '';
            modalBodyContent.innerHTML = '';
        }, 500);
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('open') && e.key === 'Escape') {
            closeModal();
        } else if (!modal.classList.contains('open')) {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        }
    });
});
