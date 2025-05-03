document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const applyColorButton = document.getElementById('applyColor');
    const textButton = document.getElementById('changeTextButton');
    const textContainer = document.getElementById('textContainer');
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const formFeedback = document.getElementById('formFeedback');

    // Apply color to the body
    applyColorButton.addEventListener('click', () => {
        const color = colorInput.value;
        document.body.style.backgroundColor = color;
    });

    // Change the text of the text container
    textButton.addEventListener('click', () => {
        textContainer.textContent = 'Welcome to the world of Colors!!';
    });

    // Form submission handling and validation
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Password validation rules
        const passwordRules = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        formFeedback.innerHTML = ''; // Clear previous feedback

        if (!name || !email) {
            formFeedback.textContent = 'Please fill out all fields.';
            formFeedback.style.color = 'red';
        } else if (!passwordRules.test(password)) {
            formFeedback.textContent = 'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.';
            formFeedback.style.color = 'red';
        } else {
            formFeedback.textContent = 'Form submitted successfully!';
            formFeedback.style.color = 'green';
            contactForm.reset(); // Clear the form
        }
    });
});