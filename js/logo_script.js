document.addEventListener('DOMContentLoaded', function() {
    function isMobile() {
        return window.innerWidth <= 768;
    }

    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    if (!header || !logo) return;

    let lastState = false;   // true – шапка сжата
    let ticking = false;

    function updateHeaderState(forceShrink) {
        const shouldShrink = forceShrink && isMobile();
        if (shouldShrink === lastState) return;

        if (shouldShrink) {
            header.classList.add('shrink');
            logo.classList.add('hide-on-scroll');
        } else {
            header.classList.remove('shrink');
            logo.classList.remove('hide-on-scroll');
        }
        lastState = shouldShrink;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const shouldShrink = scrollTop > 50;   // порог прокрутки
                updateHeaderState(shouldShrink);
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            updateHeaderState(false);
        } else {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            updateHeaderState(scrollTop > 50);
        }
    });

    // Инициализация при загрузке
    if (isMobile() && (window.pageYOffset || document.documentElement.scrollTop) > 50) {
        updateHeaderState(true);
    } else {
        updateHeaderState(false);
    }
});
