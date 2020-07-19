$('.brands-content__scroll').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true
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