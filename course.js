const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const courseList = document.querySelector('.course-list');

const scrollAmount = 320; // Each card width + gap

rightBtn.addEventListener('click', () => {
  courseList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  courseList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
