document.addEventListener('DOMContentLoaded', function () {
    function applyPreferredColorScheme() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const bodyElement = document.body;
        const textElements = document.querySelectorAll('.text, h1, p');
        const profileImage = document.querySelector('.profile-image');
        const buttons = document.querySelectorAll('.button');
        const buttonIcons = document.querySelectorAll('.button i');

        const darkThemeStyles = {
            backgroundColor: '#202020',
            textColor: 'white',
            buttonBackgroundColor: 'rgba(255, 255, 255, 1)',
            buttonTextColor: 'black',
            buttonBorderColor: '3px solid rgba(16, 16, 16, 0.5)',
        };

        const lightThemeStyles = {
            backgroundColor: '#FFA30E',
            textColor: 'black',
            buttonBackgroundColor: 'rgba(255, 255, 255, 1)',
            buttonTextColor: 'black',
            buttonBorderColor: '3px solid rgba(191, 118, 0, 1)',
        };

        const themeStyles = prefersDarkMode ? darkThemeStyles : lightThemeStyles;

        bodyElement.style.backgroundColor = themeStyles.backgroundColor;
        bodyElement.style.color = themeStyles.textColor;
        profileImage.style.filter = themeStyles.profileImageFilter;

        textElements.forEach(element => {
            element.style.color = themeStyles.textColor;
        });

        buttons.forEach(button => {
            button.style.backgroundColor = themeStyles.buttonBackgroundColor;
            button.style.color = themeStyles.buttonTextColor;
            button.style.border = themeStyles.buttonBorderColor;
        });
        buttonIcons.forEach(icon => {
            icon.style.color = themeStyles.iconColor;
        });
    }

    applyPreferredColorScheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPreferredColorScheme);
});
