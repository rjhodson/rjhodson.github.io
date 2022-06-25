/**
 * icons
 */
feather.replace();

/**
 * establish theme toggle
 */
const toggleSwitch = document.querySelector('#theme-toggle');

const switchTheme = (e) => {
    if(e) e.preventDefault();

    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');

    if(document.body.classList.contains('theme-light')) {
        window.localStorage.setItem("theme", 'light');
    } else {
        window.localStorage.setItem("theme", 'dark');
    }

    return false;
}

toggleSwitch.addEventListener('click', switchTheme, false);

/**
 * set theme to dark on page load if saved dark
 */
if (window.localStorage.getItem("theme") == 'dark') {
    document.body.classList.remove('content-wrapper');
    switchTheme();
    document.body.classList.add('content-wrapper');
}

/**
 * unhide page
 */
document.body.classList.remove('hidden');