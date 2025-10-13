// =======================
// Scroll Functionality
// =======================
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const courseList = document.querySelector('.course-list');
const scrollAmount = 320; // Width of each card + gap

rightBtn.addEventListener('click', () => {
  courseList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  courseList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// =======================
// Enroll Button Redirects with Animation
// =======================
const enrollButtons = document.querySelectorAll('.enroll-btn');

// Create loading overlay element
const loadingOverlay = document.createElement('div');
loadingOverlay.id = 'loadingOverlay';
loadingOverlay.innerHTML = `<h2>🚀 Loading your course...</h2>`;
document.body.appendChild(loadingOverlay);

enrollButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Show loading overlay
    loadingOverlay.classList.add('active');

    // Delay before redirect for animation effect
    setTimeout(() => {
      switch (index) {
        case 0:
          window.location.href = "course1.html"; // Web Development
          break;
        case 1:
          window.location.href = "course2.html"; // Data Science
          break;
        case 2:
          window.location.href = "course3.html"; // AI & ML
          break;
        case 3:
          window.location.href = "course4.html"; // Programming Languages
          break;
        case 4:
          window.location.href = "course5.html"; // UI/UX Design
          break;
        default:
          alert("Course page not found!");
      }
    }, 1800); // 1.8s animation delay
  });
});
