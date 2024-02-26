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

    // Update icon colors
    const resumeIcon = document.querySelector('.fa-file-pdf-o');
    if (resumeIcon) {
      resumeIcon.style.color = isDarkMode ? '#FFFFFF' : '#FFA30E'; // Change to white in dark mode, back to orange in light mode
    }

    // Optionally, update other icons as needed
    const githubIcon = document.querySelector('.fa-github');
    const linkedinIcon = document.querySelector('.fa-linkedin');
    if (githubIcon) {
      githubIcon.style.color = isDarkMode ? '#FFFFFF' : 'initial'; // Assuming you want white in dark mode, and default in light
    }
    if (linkedinIcon) {
      linkedinIcon.style.color = isDarkMode ? '#FFFFFF' : '#0077b5'; // LinkedIn blue in light mode, white in dark mode
    }
  }

  // Check and apply on load
  updateColors();

  // Toggle change listener
  toggle.addEventListener('change', function () {
    updateColors();
  });
});
