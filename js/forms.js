// Enquiry Form Validation
const enquiryForm = document.getElementById('enquiry-form');
const enquiryFeedback = document.getElementById('enquiry-feedback');

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !service || !message) {
        enquiryFeedback.textContent = "Please fill in all fields correctly.";
        enquiryFeedback.style.color = "red";
        return;
    }

    enquiryFeedback.textContent = `Thank you, ${name}! Your enquiry about "${service}" has been received.`;
    enquiryFeedback.style.color = "green";

    // Reset form
    enquiryForm.reset();
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const type = document.getElementById('contact-type').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !type || !message) {
        contactFeedback.textContent = "Please fill in all fields correctly.";
        contactFeedback.style.color = "red";
        return;
    }

    contactFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    contactFeedback.style.color = "green";

    // Here you could integrate with email backend if needed
    contactForm.reset();
});
