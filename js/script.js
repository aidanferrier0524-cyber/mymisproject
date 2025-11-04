document.addEventListener('DOMContentLoaded', () => {
    const navLinks = Array.from(document.querySelectorAll('nav a'));
    if (navLinks.length === 0) return;

    // Highlight the current page in the nav
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    navLinks.forEach((link) => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        if (href === current) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Keyboard arrow navigation between tabs
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                navLinks[(index + 1) % navLinks.length].focus();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                navLinks[(index - 1 + navLinks.length) % navLinks.length].focus();
            }
        });
    });
});


