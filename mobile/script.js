document.addEventListener('DOMContentLoaded', function () {
    function applyPreferredColorScheme() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const bodyElement = document.body;
        const textElements = document.querySelectorAll('.name, .description, .hey, .work, h1, p'); // Targeting text elements
        // Exclude buttons from the global text color change, as they have specific inline styles

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

        // Apply background color to body
        bodyElement.style.backgroundColor = themeStyles.backgroundColor;
        bodyElement.style.color = themeStyles.textColor;

        // Apply text color to all targeted text elements, excluding buttons with specific colors
        textElements.forEach(element => {
            element.style.color = themeStyles.textColor;
        });

        // Apply background and border styles to buttons, but not text color
        document.querySelectorAll('.button').forEach(button => {
            button.style.backgroundColor = themeStyles.buttonBackgroundColor;
            button.style.border = themeStyles.buttonBorderColor;
            // Not changing the button text color as per user requirement
        });
    }

    applyPreferredColorScheme();

    // Re-apply theme when the preferred color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPreferredColorScheme);
});
