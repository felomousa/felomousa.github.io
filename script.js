if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = "/mobile/index.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  function updateColors(isDarkMode) {
    const daytime = '#FFA30E';
    const nighttime = '#202020';
    const fontColor = isDarkMode ? '#8900f2' : daytime;
    document.documentElement.style.backgroundColor = isDarkMode ? nighttime : daytime;
    document.body.style.backgroundColor = isDarkMode ? nighttime : daytime;

    document.querySelectorAll('pre, .prompt').forEach(el => {
      el.style.color = fontColor;
    });

    const terminalCard = document.querySelector('.terminalcard');
    if (terminalCard) {
      terminalCard.style.boxShadow = `0 0 0 4px ${fontColor}`;
    }

    document.querySelectorAll('.fa-github, .fa-linkedin, .fa-file-pdf-o').forEach(icon => {
      icon.style.color = fontColor;
    });
  }

  function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const userPrefersDark = prefersDarkMode();
  toggle.checked = !userPrefersDark;
  updateColors(userPrefersDark);

  toggle.addEventListener('change', function () {
    updateColors(!toggle.checked);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    toggle.checked = !event.matches;
    updateColors(event.matches);
  });
});
