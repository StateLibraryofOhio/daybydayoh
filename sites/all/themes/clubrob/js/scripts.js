(function ($) {
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100);
    });

    //SCROLL BUTTON TO FOOTER
    $('#footer-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000);
    });
}(jQuery));
