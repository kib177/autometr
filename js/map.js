// Инициализация Яндекс Карты
ymaps.ready(initMap);

function initMap() {
    var myMap = new ymaps.Map("map", {
        center: [53.778878, 27.648851],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    var myPlacemark = new ymaps.Placemark([53.778878, 27.648851], {
        hintContent: 'АвтоМэтр СТО',
        balloonContent: '<strong>АвтоМэтр СТО</strong><br>аг. Гатово, ул. Фрунзе, 8<br>Тел: +375 33 913-14-30'
    }, {
        preset: 'islands#blueAutoIcon'
    });
    
    myMap.geoObjects.add(myPlacemark);
}
