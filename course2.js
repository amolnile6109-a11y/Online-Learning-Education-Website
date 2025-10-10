// course2.js - behaviour for Data Science & Analytics page
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-btn');
  const backBtn = document.getElementById('back-btn');

  // Build a reliable path to the PDF relative to this page
  // e.g. if this page is at backend/course-pages/course2.html
  // the PDF sits at backend/pdfs/course2.pdf -> "../pdfs/course2.pdf"
  const pdfRelativePath = '../pdfs/course2.pdf';
  const pdfUrl = new URL(pdfRelativePath, location.href).href;

  // Download / open PDF (opens in new tab)
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // To force download in browsers that respect download attribute we can create an <a> with download.
      // But some browsers block cross-origin download attribute; opening in new tab is safer.
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.target = '_blank';
      // a.download = pdfUrl.split('/').pop(); // optional — some browsers ignore for cross-origin
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // Back to courses
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // If course.html is two levels up from /backend/course-pages/ -> ../../course.html
      // but your structure uses course.html at project root, so go up two levels
      // Use relative path that works from this page location:
      location.href = '../../course.html';
    });
  }
});
