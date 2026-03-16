// Typing Effect
const typingText = document.getElementById('typing-text');
const words = ["QA Engineer", "Automation Specialist", "Technical Specialist"]; // User's actual titles
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', type);

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark', 'shadow');
        navbar.classList.remove('bg-transparent');
    } else {
        // Keep it dark for better visibility or make transparent if desired
        // navbar.classList.add('bg-transparent');
        // navbar.classList.remove('bg-dark', 'shadow');
    }
});

// Close mobile menu on click
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    })
})
