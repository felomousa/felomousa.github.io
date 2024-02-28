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
            buttonBackgroundColor: 'rgba(255, 163, 14, 0.1)',
            buttonTextColor: 'white',
            buttonBorderColor: '2px solid rgba(255, 163, 14, 0.8)',
        };

        const lightThemeStyles = {
            backgroundColor: '#FFA30E',
            textColor: 'black',
            buttonBackgroundColor: 'rgba(0, 0, 0, 0.12)',
            buttonTextColor: 'black',
            buttonBorderColor: '2px solid rgba(0, 0, 0, 0.6)',
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
