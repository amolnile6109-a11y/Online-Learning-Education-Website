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
// Enroll Button Redirects
// =======================
const enrollButtons = document.querySelectorAll('.enroll-btn');

enrollButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Redirect each course to its unique detailed page
    switch (index) {
      case 0:
        window.location.href = "course-pages/course1.html"; // Web Development
        break;
      case 1:
        window.location.href = "course-pages/course2.html"; // Data Science
        break;
      case 2:
        window.location.href = "course-pages/course3.html"; // AI & ML
        break;
      case 3:
        window.location.href = "course-pages/course4.html"; // Programming Languages
        break;
      case 4:
        window.location.href = "course-pages/course5.html"; // UI/UX Design
        break;
      default:
        alert("Course page not found!");
    }
  });
});
