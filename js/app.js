const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', e => {
    if(document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log('changing dark to light');
    } else {
        console.log('changing light to dark');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    transition();
});

function transition() {
    document.documentElement.classList.add('smooth');
    window.setTimeout(() => {
        document.documentElement.classList.remove('smooth');
    }, 1000);
}