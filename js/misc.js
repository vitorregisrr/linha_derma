(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    //scroll top
    var scrollTopBtn = $('.scroll-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //Smooth Scrooling
    $('a[href*=\\#]:not([href$=\\#])').click(function () {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href'))
                .offset()
                .top - 80
        }, 500);
    });

    // Linha completa mobile dropdowns
    $('.linha-completa-pg-mob__item').click( function(){
        $('.linha-completa-pg-mob__item-content').removeClass('active');
        $(this).find('.linha-completa-pg-mob__item-content').addClass('active');
    })

    // Redirect modal scripts
    $('a[target="_blank"]').click( function(){
        event.preventDefault();
        event.stopPropagation();
        $('#redirect-modal').addClass('active');

        const link = $(this).attr('href');

        setTimeout( function(link){
            window.open(link);
        }, 1300, link);
    });

    $('[data-toggle="redirect-modal"]').click( function(event){
        $('#redirect-modal').addClass('active');
        $('#redirect-modal').toggleClass('active');
    });


    // Internet Explorer warning scripts
    function isIE() {
        var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
        var msie = ua.indexOf('MSIE '); // IE 10 or older
        var trident = ua.indexOf('Trident/'); //IE 11
    
        return (msie > 0 || trident > 0);
    }
    if(isIE()){
        $('#modal-explorer').addClass('active');
     }
    
    $('[data-toggle="modal-explorer"]').click( function(event){
        $('#modal-explorer').addClass('active');
        $('#modal-explorer').toggleClass('active');
    });

    window.dispatchEvent(new Event('resize'));

})();