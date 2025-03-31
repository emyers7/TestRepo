// Toggle the sidebar (Hamburger Menu)
document.getElementById('menu-toggle').addEventListener('click', function() {
     const sidebar = document.getElementById('sidebar');
     const isActive = sidebar.classList.toggle('active');
     
     if (!isActive) {
         sidebar.classList.add('hidden');
     } else {
         sidebar.classList.remove('hidden');
     }
});

// Update Account Information
document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const securityQuestion = document.getElementById('security-question').value;
    const securityAnswer = document.getElementById('security-answer').value;

    // Validate inputs
    if (!name || !email || !phone || !securityAnswer) {
        alert('Please fill out all fields before updating your account.');
        return;
    }

    // Display success message
    alert(`Your account information has been updated successfully!
    \nName: ${name}
    \nEmail: ${email}
    \nPhone: ${phone}
    \nSecurity Question: ${securityQuestion}
    \nAnswer: ${securityAnswer}`);
});

// Change Password
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get password values
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert('New passwords do not match. Please try again.');
        return;
    }

    // Validate inputs
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill out all password fields before updating.');
        return;
    }

    // Display success message
    alert('Your password has been updated successfully!');
});

// Cancel Subscription Confirmation
const cancelButton = document.querySelector('.cancel-subscription');
if (cancelButton) {
    cancelButton.addEventListener('click', function() {
        const confirmCancel = confirm('Are you sure you want to cancel your subscription?');

        if (confirmCancel) {
            alert('Your subscription has been canceled.');
            // In a real-world app, this would trigger a request to the server to cancel the subscription.
        }
    });

// Function to handle plan selection
function selectPlan(planName) {
    alert(`You selected the ${planName}. Redirecting to checkout...`);
    window.location.href = "checkout.html"; // This page will be created later
}
