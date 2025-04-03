// Toggle the sidebar (Hamburger Menu)
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});

// Update Account Information
const accountForm = document.getElementById('account-form');
if (accountForm) {
    accountForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const securityQuestion = document.getElementById('security-question').value;
        const securityAnswer = document.getElementById('security-answer').value;

        if (!name || !email || !phone || !securityAnswer) {
            alert('Please fill out all fields before updating your account.');
            return;
        }

        alert(`Your account information has been updated successfully!
\nName: ${name}
\nEmail: ${email}
\nPhone: ${phone}
\nSecurity Question: ${securityQuestion}
\nAnswer: ${securityAnswer}`);
    });
}

// Change Password
const passwordForm = document.getElementById('password-form');
if (passwordForm) {
    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('New passwords do not match. Please try again.');
            return;
        }

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Please fill out all password fields before updating.');
            return;
        }

        alert('Your password has been updated successfully!');
    });
}

// Cancel Subscription Confirmation
const cancelButton = document.querySelector('.cancel-subscription');
if (cancelButton) {
    cancelButton.addEventListener('click', function () {
        const confirmCancel = confirm('Are you sure you want to cancel your subscription?');
        if (confirmCancel) {
            alert('Your subscription has been canceled.');
        }
    });
}

// Function to handle plan selection
function selectPlan(planName) {
    alert(`You selected the ${planName}. Redirecting to checkout...`);
    window.location.href = "checkout.html";
}

// Toggle the credit/debit card form
const cardToggle = document.getElementById('card-toggle');
const cardForm = document.getElementById('card-form');

if (cardToggle && cardForm) {
    cardToggle.addEventListener('click', () => {
        cardForm.classList.toggle('hidden');
    });
}

// FAQ toggle logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Track login state after sign-up
document.getElementById('auth-form')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.text())
    .then(message => {
      document.getElementById('message').textContent = message;

      // If signup was successful, store user state
      if (message.includes("Signup complete")) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email);
        showLogoutButton();
      }
    })
    .catch(err => {
      document.getElementById('message').textContent = 'Something went wrong.';
      console.error(err);
    });
});

// Logout functionality
function logoutUser() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('userEmail');
  window.location.href = 'index.html'; // Redirect anywhere you want
}

// Show logout button if user is logged in
function showLogoutButton() {
  const logoutBtn = document.getElementById('logout-btn');
  if (localStorage.getItem('loggedIn') === 'true') {
    logoutBtn.style.display = 'block';
  } else {
    logoutBtn.style.display = 'none';
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', showLogoutButton);
