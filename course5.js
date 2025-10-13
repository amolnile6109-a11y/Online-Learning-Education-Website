// Select elements
const downloadBtn = document.querySelector('button');
const backBtn = document.querySelector('.back-btn');

// Log download button click
downloadBtn.addEventListener('click', () => {
  console.log('UI/UX Design course PDF download initiated.');
  // Optional: show a temporary alert
  // alert('Your download will start shortly.');
});

// Add hover effect for back button
backBtn.addEventListener('mouseenter', () => {
  backBtn.style.color = '#ffffff';
  backBtn.style.backgroundColor = '#007BFF';
  backBtn.style.transition = '0.3s';
});

backBtn.addEventListener('mouseleave', () => {
  backBtn.style.color = '';
  backBtn.style.backgroundColor = '';
});
