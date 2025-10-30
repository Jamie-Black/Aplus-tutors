// script.js

// Check login persistence
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
  // Redirect to dashboard if already logged in
  if (user && window.location.pathname.includes("index.html")) {
    window.location.href = "dashboard.html";
  }
  
  // Show user data if on dashboard
  if (user && window.location.pathname.includes("dashboard.html")) {
    document.getElementById("studentName").textContent = user.fullName;
    document.getElementById("studentEmail").textContent = user.email;
  }
  
  // If not logged in but trying to access dashboard
  if (!user && window.location.pathname.includes("dashboard.html")) {
    window.location.href = "index.html";
  }
};

// Handle login
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("errorMessage");
    
    const user = registeredUsers.find(
      (u) => u.fullName.toLowerCase() === fullName.toLowerCase() && u.email.toLowerCase() === email.toLowerCase()
    );
    
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid credentials or unregistered user.";
    }
  });
}

// Handle navigation
function goTo(page) {
  alert("Redirecting to " + page);
  // window.location.href = page;
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}