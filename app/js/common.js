$('.brands-content__scroll').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    speed: 1000,
    dots: true,
    variableWidth: true,
});

function setProgress(index) {
    const calc = ((index) / ($slider.slick('getSlick').slideCount)) * 100;

    $progressBar
        .css('width', calc + '%');

}

const $slider = $('.brands-content__scroll');
const $progressBar = $('.progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
});

setProgress(0);

// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [56.922583, 23.979178],
        zoom: 14
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [56.922583, 23.979178] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/marker.png',  // картинка иконки
            iconImageSize: [60, 71],                                      // размеры картинки
            iconImageOffset: [0, 0],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}

$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
            $('.mobile-menu').slideUp();
        }
        return false;
    });
});

$('.btn-burger').click(function () {
   $('.mobile-menu').slideDown();
});

$('.btn-close').click(function () {
    $('.mobile-menu').slideUp();
});