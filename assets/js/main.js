feather.replace();

const toggleSwitch = document.querySelector('#theme-toggle');
const toggleButtons = toggleSwitch.querySelectorAll('svg');

const switchTheme = (e) => {
    e.preventDefault();

    document.body.classList.toggle('theme-light');
    document.body.classList.toggle('theme-dark');

    toggleButtons.forEach((button) => {
        button.classList.toggle('block');
        button.classList.toggle('hidden');
    });

    return false;
}

toggleSwitch.addEventListener('click', switchTheme, false);