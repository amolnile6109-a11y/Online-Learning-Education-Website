// ============================
// Course 1 - Web Dev Bootcamp
// ============================

// PDF Download
document.getElementById('download-btn').addEventListener('click', () => {
  window.open('pdfs/course1.pdf', '_blank');
});

// Back to Courses
document.getElementById('back-btn').addEventListener('click', () => {
  window.location.href = '../course.html';
});
