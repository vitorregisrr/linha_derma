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

    // Categorias Carousel //
    const categoriasCarousel = $(".categorias-thumbs__carousel");
    categoriasCarousel.owlCarousel({
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
    
    // Linha completa Carousel //
    const linhaCompletaCarousel = $(".linha-completa__carousel");
    
    const setPrev = function(){
        setTimeout( () => {
            $('.not-overlayed').removeClass('not-overlayed');
            $('.owl-item.center').prev().addClass('not-overlayed');
        }, 100)
    }
    
    linhaCompletaCarousel.on('initialized.owl.carousel', setPrev);
    linhaCompletaCarousel.on('changed.owl.carousel', setPrev);

    linhaCompletaCarousel.owlCarousel({
        loop: false,
        margin: 20,
        center: true,
        nav: true,
        dots: true,
        navText: [
            "<i class='fa fa-chevron-left'>", "<i class='fa fa-chevron-right'>"
        ],
        slideBy: "page",
        startPosition: 0,
        mouseDrag: true,
        startPosition: 2,
        responsive:{
            0:{
                items: 1
            },

            768:{
                items: 2,
                margin: 80
            },

            920: {
                items: 3,
                margin: 110
            },

            1200:{
                items: 4,
                margin: 80
            },

            1300:{
                items: 4,
                margin: 100
            }
        }
    });

    window.dispatchEvent(new Event('resize'));
})();