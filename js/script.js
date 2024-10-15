// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once - while scrolling down
});

// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic Validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you can integrate with a backend service or email API to send the form data.
    // For demonstration, we'll just show an alert and reset the form.

    alert('Thank you for your message! I will get back to you soon.');

    // Reset the form
    document.getElementById('contactForm').reset();
});
