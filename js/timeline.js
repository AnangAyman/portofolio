// Timeline "Laser Beam" Scroll Progress Logic
document.addEventListener('DOMContentLoaded', function() {
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
            // Using windowHeight * 0.6 makes the line draw a bit ahead of center
            let scrolled = (windowHeight * 0.6) - start; 
    
            let percentage = (scrolled / totalHeight) * 100;
            
            // Clamp between 0 and 100
            percentage = Math.min(Math.max(percentage, 0), 100);
            
            progressBar.style.height = `${percentage}%`;
        }
    });
});