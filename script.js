
function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Store user data in localStorage
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('Sign up successful!');
        toggleLogin();
    } else {
        alert('Please enter both username and password.');
    }
}

// Login logic
function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Fetch stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Login successful! Redirecting to quiz...');

        window.location.href = 'index.html'; 
    } else {
        alert('Invalid username or password.');
    }
}

// Toggle between login and signup forms
function toggleSignup() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

function toggleLogin() {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

