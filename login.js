document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  const messageDiv = document.createElement("div");
  messageDiv.style.marginBottom = "15px";
  messageDiv.style.padding = "10px";
  messageDiv.style.borderRadius = "8px";
  messageDiv.style.fontWeight = "500";
  messageDiv.style.display = "none";
  loginForm.prepend(messageDiv);

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (!email || !password) {
        messageDiv.textContent = "⚠️ Please fill in all fields!";
        messageDiv.style.background = "#ffcccc";
        messageDiv.style.color = "#900";
        messageDiv.style.display = "block";
        return;
      }

      if (email === "user@example.com" && password === "123456") {
        messageDiv.textContent = "✅ Login successful! Redirecting...";
        messageDiv.style.background = "#ccffcc";
        messageDiv.style.color = "#090";
        messageDiv.style.display = "block";
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 1000);
      } else {
        messageDiv.textContent = "❌ Invalid email or password!";
        messageDiv.style.background = "#ffcccc";
        messageDiv.style.color = "#900";
        messageDiv.style.display = "block";
      }
    });
  }
});
