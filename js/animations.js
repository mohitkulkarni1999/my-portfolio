// Additional animations can be added here
// For example, more complex animations that require JS

// Typing Effect for Hero Text (optional)
function initTypingEffect() {
    const heroText = document.querySelector('.hero-text');
    if (!heroText) return;
    
    const texts = [
        "I create beautiful, responsive websites with clean code",
        "I build interactive web experiences",
        "I turn ideas into digital reality"
    ];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        heroText.textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', initTypingEffect);

// Parallax Effect (optional)
function initParallax() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

// Initialize parallax
initParallax();

// Animate elements when they come into view
function animateElements() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize element animations
animateElements();