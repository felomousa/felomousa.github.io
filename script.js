document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  function updateColors() {
    let isDarkMode = !toggle.checked;


    document.documentElement.style.backgroundColor = isDarkMode ? '#0f1138' : '#FFA30E';
    document.body.style.backgroundColor = isDarkMode ? '#0f1138' : '#FFA30E';

    const elementsWithColor = document.querySelectorAll('pre, .prompt');
    elementsWithColor.forEach(el => {
      el.style.color = isDarkMode ? '#8f82ff' : '#FFA30E';
    });


    // Optionally, update other icons as needed
    const githubIcon = document.querySelector('.fa-github');
    const linkedinIcon = document.querySelector('.fa-linkedin');
    const resumeIcon = document.querySelector('.fa-file-pdf-o');
    if (githubIcon) {
      githubIcon.style.color = isDarkMode ? '#FFFFFF' : 'initial'; // Assuming you want white in dark mode, and default in light
    }
    if (linkedinIcon) {
      linkedinIcon.style.color = isDarkMode ? '#0077b5' : '#0077b5';
    }
    if (resumeIcon) {
      resumeIcon.style.color = isDarkMode ? '#8f82ff' : '#FFA30E';
    }
  }

  // Check and apply on load
  updateColors();

  // Toggle change listener
  toggle.addEventListener('change', function () {
    updateColors();
  });
});
