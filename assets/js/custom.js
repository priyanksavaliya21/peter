$(window).resize(function() {
    /*--------- rewards slider Js ----------*/
    rewards();
});
$(document).ready(function() {
    rewards();
    // WOW js
    new WOW().init();
    //Menu Active Js
    $(".menu_block ul li").click(function() {
        $(".menu_block ul li").removeClass("active");
        $(this).addClass("active");
    });
    //Menu Js
    $('.menu_toggle_btn').click(function() {
        $('.in_header_wrapper').toggleClass('open_menu');
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
                stagePadding: 20,
                margin: 16,
            },
            481: {
                items: 2,
                stagePadding: 20,
                margin: 16,
            },
            700: {
                items: 1,
                stagePadding: 225,
                margin: 16,
            },
            992: {
                items: 3,
                stagePadding: false,
                margin: 20,
            },
            1200: {
                items: 3,
                stagePadding: 160,
                margin: 30,
            },
            1600: {
                items: 3,
                stagePadding: 200,
                margin: 30,
            }
        }
    });
    //FAQ
    $('.faq_inner_block').slideUp();
    $('.faq_header').click(function() {
        $(this).parent().toggleClass('active').find('.faq_inner_block').slideToggle();
        $(this).parent().siblings().removeClass('active').find('.faq_inner_block').slideUp();
    });
    //Copy Text
    function CopyToClipBoard(element) {
        var $blankInput = $("<input>");
        $("body").append($blankInput);
        $blankInput.val($(element).attr("data-link")).select();
        document.execCommand("copy");
        $blankInput.remove();
    }
    $(".copy_ic").click(function() {
        CopyToClipBoard(this);
        $(this).next().toggleClass("active")
        setTimeout(function() {
            $(".clipboard").removeClass("active");
        }, 1000);
    });
    /*--------- minus and plus Js ----------*/
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
     $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
            count = count < 4 ? count :3;
            $input.val(count);
            $input.change();
            return false;
        });

    /*--------- copy text js ----------*/
    function CopyToClipBoard(element) {
        var $blankInput = $("<input>");
        $("body").append($blankInput);
        $blankInput.val($(element).attr("data-link")).select();
        document.execCommand("copy");
        $blankInput.remove();
    }
    $(".copy_ic").click(function() {
        CopyToClipBoard(this);
        $(this).next().toggleClass("active")
        setTimeout(function() {
            $(".clipboard").removeClass("active");
        }, 1000);
    });
    /*--------- rewards slider Js ----------*/
});
/*--------- rewards slider Js ----------*/
function rewards() {
    var checkWidth = $(window).width();
    var owlPost = $(".rewards_warp");
    if (checkWidth >= 768) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel owl-theme');
    } else if (checkWidth <= 767) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            navText: false,
            loop: true,
            dots: true,
            margin: 10,
            nav: false,
            stagePadding: 20,
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                576: {
                    items: 2
                },
            }
        });
    }
}