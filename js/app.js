const themeButton = document.querySelector('.theme-toggle');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
})

let currentTheme = localStorage.getItem('data-theme');
console.log(currentTheme);
if(!currentTheme) {
    localStorage.setItem('data-theme', 'light');
}

applyTheme(currentTheme);

themeButton.addEventListener('click', e => {
    if(document.documentElement.getAttribute('data-theme') === 'light') {
        applyTheme("dark");
        localStorage.setItem('data-theme', 'dark');
    } else {
        localStorage.setItem('data-theme', 'light');
        applyTheme('light');
    }
    transition();
});

function applyTheme(theme) {
    if(theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
}

function transition() {
    document.documentElement.classList.add('smooth');
    window.setTimeout(() => {
        document.documentElement.classList.remove('smooth');
    }, 1000);
}