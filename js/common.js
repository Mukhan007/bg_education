$(document).ready(function () {
    $('.call-menu').click(function(){
        $(this).toggleClass('open');
        $('body').toggleClass('scroll-locked');
        $('.nav-side').toggleClass('nav-show');
    });

});







