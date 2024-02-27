if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = "/mobile/index.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  function updateColors() {
    let isDarkMode = !toggle.checked;

    const daytime = '#edd2d2';
    const nighttime = '#202020';
    const fontnight = '#a914fe';
    const fontday = '#f21b32';
    document.documentElement.style.backgroundColor = isDarkMode ? nighttime : daytime;
    document.body.style.backgroundColor = isDarkMode ? nighttime : daytime;

    const elementsWithColor = document.querySelectorAll('pre, .prompt');
    elementsWithColor.forEach(el => {
      el.style.color = isDarkMode ? fontnight : fontday;
    });

    // Update terminal card outline color
    const terminalCard = document.querySelector('.terminalcard');
    if (terminalCard) {
      terminalCard.style.boxShadow = isDarkMode ? `0 0 0 4px ${fontnight}` : `0 0 0 4px ${fontday}`;
    }

    const githubIcon = document.querySelector('.fa-github');
    const linkedinIcon = document.querySelector('.fa-linkedin');
    const resumeIcon = document.querySelector('.fa-file-pdf-o');
    if (resumeIcon) {
      resumeIcon.style.color = isDarkMode ? fontnight : fontday;
    }
    if (githubIcon) {
      githubIcon.style.color = isDarkMode ? fontnight : fontday;
    }
    if (linkedinIcon) {
      linkedinIcon.style.color = isDarkMode ? fontnight : fontday;
    }
  }

  // Check and apply on load
  updateColors();

  // Toggle change listener
  toggle.addEventListener('change', function () {
    updateColors();
  });
});



