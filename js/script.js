// Toggle the sidebar (Hamburger Menu)
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Form submission for authentication (from index.html login)
const authForm = document.getElementById('auth-form');
if (authForm) {
    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            document.getElementById('message').textContent = 'A validation email has been sent.';
            setTimeout(() => {
                window.location.href = 'subscription.html';
            }, 2000);
        }
    });
}

// Subscription management actions (only available on account.html)
const cancelButton = document.querySelector('.cancel-subscription');
if (cancelButton) {
    cancelButton.addEventListener('click', function() {
        const confirmCancel = confirm('Are you sure you want to cancel your subscription?');
        if (confirmCancel) {
            alert('Your subscription has been canceled.');
            // You could add logic here to update the backend if needed.
        }
    });
}

const updateButton = document.querySelector('.update-info');
if (updateButton) {
    updateButton.addEventListener('click', function() {
        alert('Redirecting to update account information.');
        // Redirect or open a form for user to update their details.
    });
}
