document.querySelectorAll('.footer-nav a, .hero-buttons a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active class
                document.querySelectorAll('.footer-nav a').forEach(link => link.classList.remove('active'));
                this.closest('.footer-nav') ? this.classList.add('active') : null;
            }
        }
    });
});

// Simple Intersection Observer to highlight the active section in the bottom nav
const sections = document.querySelectorAll('section, header.hero-section');
const navLinks = document.querySelectorAll('.footer-nav a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});