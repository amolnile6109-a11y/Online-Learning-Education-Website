// Handle contact form submission
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.style.display = "block";
  form.reset();

  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
});
