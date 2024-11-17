function showLogin() {
    document.getElementById('signup-form').classList.remove('active-form');
    document.getElementById('login-form').classList.add('active-form');
    document.getElementById('signup-tab').classList.remove('active-tab');
    document.getElementById('login-tab').classList.add('active-tab');
}

function showSignup() {
    document.getElementById('login-form').classList.remove('active-form');
    document.getElementById('signup-form').classList.add('active-form');
    document.getElementById('login-tab').classList.remove('active-tab');
    document.getElementById('signup-tab').classList.add('active-tab');
}

function redirectToHome(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    window.location.href = "home.html"; // Redirects to the home page
    return false; // Stops further execution
}
