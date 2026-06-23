document.addEventListener('DOMContentLoaded', function() {
    // Если куки уже приняты — выходим
    if (localStorage.getItem('cookieAccepted')) return;

    var banner = document.getElementById('cookie-banner');
    var btn = document.getElementById('cookie-accept');

    if (!banner || !btn) {
        console.error('Cookie banner: не найдены элементы #cookie-banner или #cookie-accept');
        return;
    }

    // Показываем баннер
    banner.style.display = 'flex';
    console.log('Cookie banner: показан');

    btn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        banner.style.display = 'none';
        console.log('Cookie banner: скрыт, localStorage установлен');
    });
});