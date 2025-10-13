// course3.js - Introduction to AI & ML page logic
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-btn');
  const backBtn = document.getElementById('back-btn');

  // PDF Path relative to this HTML file
  const pdfPath = '../pdfs/course3.pdf';

  // Download / Open PDF
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const pdfUrl = new URL(pdfPath, location.href).href;
      window.open(pdfUrl, '_blank'); // opens in new tab
    });
  }

  // Back to main courses page
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      location.href = '../../course.html';
    });
  }
});
