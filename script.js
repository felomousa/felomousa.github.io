if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = "/mobile/index.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  function updateColors() {
    let isDarkMode = !toggle.checked;
    const daytime = '#FFA30E';
    const nighttime = '#202020';
    const fontColor = '#FFA30E';
    document.documentElement.style.backgroundColor = isDarkMode ? nighttime : daytime;
    document.body.style.backgroundColor = isDarkMode ? nighttime : daytime;

    const elementsWithColor = document.querySelectorAll('pre, .prompt');
    elementsWithColor.forEach(el => {
      el.style.color = isDarkMode ? fontColor : fontColor;
    });

    const terminalCard = document.querySelector('.terminalcard');
    if (terminalCard) {
      terminalCard.style.boxShadow = isDarkMode ? `0 0 0 4px ${fontColor}` : `0 0 0 4px ${fontColor}`;
    }

    const icons = document.querySelectorAll('.fa-github, .fa-linkedin, .fa-file-pdf-o');
    icons.forEach(icon => {
      icon.style.color = isDarkMode ? fontColor : fontColor;
    });
  }

  updateColors();
  toggle.addEventListener('change', updateColors);
});