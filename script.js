
console.log("Script is running!");

// Select the menu toggle button and navigation links
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {  // Prevent errors if elements are missing
        menuToggle.addEventListener("click", function () {
            console.log("Menu button clicked!");  // Debugging log
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav links not found!");
    }
});



// Initialize EmailJS
emailjs.init('YOqjysVXvR36YoH9JZ0');  // Replace with your EmailJS User ID

// Form submission event listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Send the form data to EmailJS
    emailjs.sendForm("service_fs8ih1w", "template_ziqe6wz", form)
    .then(function(response) {
        alert("Message sent successfully!");
        form.reset();  // Reset the form fields
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";  
    }, function(error) {
        alert("Failed to send message. Please try again.");
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";  
    });
});
