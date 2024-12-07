// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Predefined valid username
    const validUsername = "admin";

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = "";

    // Regular expression for password validation:
    // - At least 8 characters one uppercase letter one number one special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate username
    if (username !== validUsername) {
        errorMessage.textContent = "Invalid username. Please try again.";
        return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 
            "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.";
        return;
    }

    // If both username and password are valid
    alert("Login successful!");
});
