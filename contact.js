document.addEventListener("DOMContentLoaded", function() {
    // Get the contact info and contact form elements
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    setTimeout(function() {
        contactInfo.classList.add('fade-in');
        contactForm.classList.add('fade-in');
    }, 100);
});
