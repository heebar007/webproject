document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in nav
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // You can add more interactive functionality here
    console.log('WOK website loaded');
    
    // Mobile menu toggle functionality could be added here
});