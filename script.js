
console.log("Script is running!");

// Select the menu toggle button and navigation links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the visibility of nav links when the hamburger button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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

    // Send email using EmailJS
    emailjs.send('service_fs8ih1w', 'template_ziqe6wz', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log('Success:', response);
        alert('Your message has been sent successfully!');
        // Clear form
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.error('Error:', error);
        alert('Something went wrong, please try again.');
    });
});

form.reset(); 
