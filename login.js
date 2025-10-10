document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (!email || !password) {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      // Demo validation (replace with real backend later)
      if (email === "user@example.com" && password === "123456") {
        alert("✅ Login successful!");
        window.location.href = "profile.html"; // redirect after login
      } else {
        alert("❌ Invalid email or password!");
      }
    });
  }
});
