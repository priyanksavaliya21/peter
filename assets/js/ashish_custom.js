$(document).ready(function() {
    //Menu Active Js
    $(".menu_block ul li").click(function() {
        $(".menu_block ul li").removeClass("active");
        $(this).addClass("active");
    });
    //Menu Js
    $('.menu_toggle_btn').click(function() {
        $('.header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });
    //video
    $("#play_1").click(function() {
        $(this).prev('.gr_1').find('video').get(0).play();
        $(this).hide();
    });
    $(".gr_1").click(function() {
        $(this).find('video').get(0).pause();
        $("#play_1").show();
    });
    //Slider 1
    $('.owl-product').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        center: true,
        autoHeight: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: false,
            },
            360: {
                items: 1,
                stagePadding:20,
                margin: 16,
            },
            700: {
                items:1,
                stagePadding:220,
                margin: 16,
            },
            992: {
                items: 3,
                stagePadding: false,
                margin: 20,
            },
            1200: {
                items: 3,
                stagePadding: 200,
                margin: 30,
            }
        }
    });
    //FAQ
     $('.faq_inner_block').slideUp();
        $('.faq_header').click(function(){
        $(this).parent().toggleClass('active').find('.faq_inner_block').slideToggle();
        $(this).parent().siblings().removeClass('active').find('.faq_inner_block').slideUp();
    });
});