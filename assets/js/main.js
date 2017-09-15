(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            loop: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
            autoplay: true
        });
        $(".case-studies-carousel").owlCarousel({
            items: 3,
            margin: 30,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true
        });
        $(".logo-carousel").owlCarousel({
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });


        $(".menu-trigger").on('click', function () {
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".show-off-canvas-menu-shade").addClass("active");
        });
        $(".menu-close, .show-off-canvas-menu-shade").on('click', function () {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".show-off-canvas-menu-shade").removeClass("active");
        });


        $(".boxed-layout").on('click', function () {
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
            $(".site").addClass("active");
        });
        $(".wide-layout").on('click', function () {
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
            $(".site").removeClass("active");
        });

        $(".search-trigger").on('click', function () {
            $(".search-bar-wrap").addClass("active");
        });
        $(".search-close").on('click', function () {
            $(".search-bar-wrap").removeClass("active");
        });

        $(".single-testimonial-box").hover(function () {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });
        
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        $('.video-play-btn').hover(function () {
            $(this).find('img').attr('src', function (i, src) {
                return src.replace('play-btn.png', 'play-btn-hover.png')
            })
        }, function () {
            $(this).find('img').attr('src', function (i, src) {
                return src.replace('play-btn-hover.png', 'play-btn.png')
            })
        });

        $("#traffic-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });

    });

    jQuery(window).load(function () {

    });

}(jQuery));