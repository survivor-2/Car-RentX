// When the login form is submitted
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the entered values for username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded credentials (replace with actual authentication process)
    const validUsername = "user123";
    const validPassword = "password123";

    // Check if the entered username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        // If login is successful, redirect to the homepage
        window.location.href = "index.html";
    } else {
        // Show an error if the login credentials are incorrect
        alert("Invalid username or password. Please try again.");
    }
});
