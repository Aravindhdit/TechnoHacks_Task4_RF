document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        // Perform form submission actions here
    }
});
