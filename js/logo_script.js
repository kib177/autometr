document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    if (!header || !logo) return;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    let lastShrink = false;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShrink = isMobile() && scrollY > 50;

        if (shouldShrink === lastShrink) return;

        if (shouldShrink) {
            header.classList.add('shrink');
            logo.classList.add('hide-on-scroll');
        } else {
            header.classList.remove('shrink');
            logo.classList.remove('hide-on-scroll');
        }
        lastShrink = shouldShrink;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', function() {
        // При ресайзе сразу обновляем без троттлинга
        updateHeader();
    });

    // Первичная установка
    updateHeader();
});
