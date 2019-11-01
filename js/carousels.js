(function () {
    'use strict';

    // Home Carousel //
    const homeCarousel = $(".home-slider__carousel");
    homeCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        nav: true,
        dots: true,
        autoHeight: true,
        navText: [
            "<i class='fa fa-chevron-left'>", "<i class='fa fa-chevron-right'>"
        ],
        slideBy: "page",
        startPosition: 0
    });
    homeCarousel.find('.home-slider__bar-next').click( function(){
        homeCarousel.trigger('next.owl.carousel');
    });

    homeCarousel.on('change.owl.carousel', function (event) {
        var captions = $(this).find('[data-animated="true"]');
        captions.removeClass('animated fadeInUp');
        setTimeout(() => {
            captions.addClass('animated fadeInUp');
        }, 2)
    });

    window.dispatchEvent(new Event('resize'));
})();