// Profile Page Script
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Guest";
  const email = localStorage.getItem("email") || "Not logged in";

  const profileValues = document.querySelectorAll(".profile-value");
  if (profileValues.length > 1) {
    profileValues[0].textContent = username;
    profileValues[1].textContent = email;
  }

  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  }
});
