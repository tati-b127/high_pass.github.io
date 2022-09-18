ymaps.ready(init);
function init (ymaps) {
    var myMap = new ymaps.Map("map", {
        center: [55.77, 37.634],
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([55.770801, 37.635754], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin-map.png',
        iconImageSize: [12, 12],
        iconImageOffset: [-5, -5]
    });
    myMap.geoObjects.add(myPlacemark);
    // myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('trafficControl');
    // myMap.controls.remove('geolocationControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.behaviors.disable('scrollZoom'); 

}

const contactsBlock = document.querySelector('.contacts__block');
const contactsBtnCls = document.querySelector('.contacts__btn-cls');

contactsBtnCls.addEventListener('click', (e) => {
    contactsBlock.classList.add('inactive');
});