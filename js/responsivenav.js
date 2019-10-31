(function () {
    'use strict';

    $('.nav-toggler').click(function () {
        const isExpanded = $(this).attr('aria-expanded') === 'false' ? false : true;

        $('#main-nav-menu').toggleClass('active');

        $(this).attr('aria-expanded', !isExpanded);
    });
    
})();