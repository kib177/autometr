document.addEventListener('DOMContentLoaded', function() {
    
    const logo = document.querySelector('.logo');
    if (!header || !logo) return;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    let lastShrink = false;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShrink = isMobile() && scrollY > 5;

        if (shouldShrink === lastShrink) return;
        
        if (shouldShrink) {
            logo.classList.add('hide-on-scroll');
        } else {
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
        updateHeader();
    });
    updateHeader();
});
