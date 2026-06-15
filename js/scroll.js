// Эффект сжатия шапки при прокрутке
const header = document.querySelector('header');
let lastScrollY = 0;

function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {           // срабатывает после 50px прокрутки
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
}

// Оптимизация – запуск не чаще 60 fps
window.addEventListener('scroll', () => {
    requestAnimationFrame(onScroll);
});
