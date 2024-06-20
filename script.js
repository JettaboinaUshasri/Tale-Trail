// Example JavaScript for form validation and submission

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Validate username and password (example)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or do something after login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Register Form Validation
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Basic validation (you may want to add more)
    if (fullname && email && username && password) {
        alert('Registration successful!');
        // Redirect or do something after registration
    } else {
        alert('Please fill in all fields.');
    }
});
