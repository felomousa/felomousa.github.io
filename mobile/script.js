document.addEventListener('DOMContentLoaded', function () {
    function applyPreferredColorScheme() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const bodyElement = document.body;
        const textElements = document.querySelectorAll('.name, .description, .hey, .work, h1, p'); // Targeting text elements

        const darkThemeStyles = {
            backgroundColor: '#202020',
            textColor: '#FFA500',
            buttonBackgroundColor: 'white',
        };

        const lightThemeStyles = {
            backgroundColor: '#FFA500',
            textColor: 'black',
            buttonBackgroundColor: 'white',
        };

        const themeStyles = prefersDarkMode ? darkThemeStyles : lightThemeStyles;

        bodyElement.style.backgroundColor = themeStyles.backgroundColor;
        bodyElement.style.color = themeStyles.textColor;
        textElements.forEach(element => {
            element.style.color = themeStyles.textColor;
        });
        document.querySelectorAll('.button').forEach(button => {
            button.style.backgroundColor = themeStyles.buttonBackgroundColor;
            button.style.border = themeStyles.buttonBorderColor;
        });
    }

    applyPreferredColorScheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPreferredColorScheme);
});
