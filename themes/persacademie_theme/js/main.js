(function ($) {
    $(document).ready(function(){
        // Hamburger menu.
        $('.hamburger-menu').on('click', function(){

            $('.hamburger-menu-icon').toggleClass('is-clicked');
            $('.header').toggleClass('menu-is-open');

            if( $('.navbar-nav').hasClass('is-visible') ) {
                $('.navbar-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                });
                $('body').removeClass('menu-is-open');
            } else {
                $('.navbar-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                });
                $('body').addClass('menu-is-open');
            }
        });

        // Arrow next.
        $(".arrow-next").click(function() {
            $('html, body').animate({
                scrollTop: $("#content-front").offset().top
            }, 800);
        });
    });
}(jQuery));
