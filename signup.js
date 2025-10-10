document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!username || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // You can add backend logic later (e.g., save to server)
    alert(`✅ Account created successfully for ${username}!`);
    form.reset();

    // Redirect to login page after signup
    window.location.href = "login.html";
  });
});
