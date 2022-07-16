$(document).ready(function(){
    $('.popular__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.svg"></button>',
        autoplay: true,
        autoplaySpeed: 1000
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

new WOW().init();