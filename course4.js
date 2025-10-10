// Select elements
const downloadBtn = document.querySelector('button');
const backBtn = document.querySelector('.back-btn');

// Add click event for download button (optional: log or alert)
downloadBtn.addEventListener('click', () => {
  console.log('Course PDF download initiated.');
  // You can add more logic here if needed
});

// Add hover effect for back button
backBtn.addEventListener('mouseenter', () => {
  backBtn.style.color = '#ffffff';
  backBtn.style.backgroundColor = '#007BFF';
});

backBtn.addEventListener('mouseleave', () => {
  backBtn.style.color = '';
  backBtn.style.backgroundColor = '';
});
