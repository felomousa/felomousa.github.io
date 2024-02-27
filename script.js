document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  function updateColors() {
    let isDarkMode = !toggle.checked;

    const daytime = '#eddcd2';
    const nighttime = '#1E1E1E';
    const fontnight = '#a914fe';
    const fontday = '#fd142c';
    document.documentElement.style.backgroundColor = isDarkMode ? nighttime : daytime;
    document.body.style.backgroundColor = isDarkMode ? nighttime : daytime;

    const elementsWithColor = document.querySelectorAll('pre, .prompt');
    elementsWithColor.forEach(el => {
      el.style.color = isDarkMode ? fontnight : fontday;
    });

<<<<<<< HEAD
=======
    // Update terminal card outline color
    const terminalCard = document.querySelector('.terminalcard');
    if (terminalCard) {
      terminalCard.style.boxShadow = isDarkMode ? `0 0 0 4px ${fontnight}` : `0 0 0 4px ${fontday}`;
    }
>>>>>>> dev

    const githubIcon = document.querySelector('.fa-github');
    const linkedinIcon = document.querySelector('.fa-linkedin');
    const resumeIcon = document.querySelector('.fa-file-pdf-o');
<<<<<<< HEAD
=======
    if (resumeIcon) {
      resumeIcon.style.color = isDarkMode ? fontnight : fontday;
    }
>>>>>>> dev
    if (githubIcon) {
      githubIcon.style.color = isDarkMode ? fontnight : fontday;
    }
    if (linkedinIcon) {
<<<<<<< HEAD
      linkedinIcon.style.color = isDarkMode ? '#0077b5' : '#0077b5';
    }
    if (resumeIcon) {
      resumeIcon.style.color = isDarkMode ? '#8f82ff' : '#FFA30E';
=======
      linkedinIcon.style.color = isDarkMode ? fontnight : fontday;
>>>>>>> dev
    }
  }

  // Check and apply on load
  updateColors();

  // Toggle change listener
  toggle.addEventListener('change', function () {
    updateColors();
  });
});
