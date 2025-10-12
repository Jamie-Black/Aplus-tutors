// Load user data (if any)
const user = JSON.parse(localStorage.getItem("registeredUser")) || { fullName: "Student" };
document.getElementById("userName").textContent = user.fullName.split(" ")[0];

// Mock dashboard data
const dashboardData = {
  subjects: 5,
  completedTests: 3,
  averageScore: 82,
  progress: [75, 80, 85, 90, 88, 92, 95] // weekly progress scores
};

document.getElementById("subjectsCount").textContent = dashboardData.subjects;
document.getElementById("testsCount").textContent = dashboardData.completedTests;
document.getElementById("averageScore").textContent = `${dashboardData.averageScore}%`;

// Chart.js chart
const ctx = document.getElementById("progressChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Progress %",
      data: dashboardData.progress,
      borderColor: "crimson",
      fill: false,
      tension: 0.3,
      pointBackgroundColor: "crimson"
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// Logout function
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("registeredUser");
  alert("You have been logged out.");
  window.location.href = "register.html";
});