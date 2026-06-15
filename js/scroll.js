const header = document.querySelector('header');

function onScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(onScroll);
});
