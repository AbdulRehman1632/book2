
$('.brands-main-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
    }, {
        breakpoint: 600,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    }]
});
$(".clickbutton").click(function () {
    $('.floatbutton').toggleClass("active");
    $('.crossplus').toggleClass("rotate");
});
$(window).on('load', function () {
    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 4000);
});

window.onload = function () {
    setTimeout(function () {
        setButtonURL();
    }, 3000);
};

function setButtonURL() {
    var swiper = new Swiper(".banner-book-slider", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: true,

    });
    $(".clickbutton").click(function () {
        $('.floatbutton').toggleClass("active");
        $('.crossplus').toggleClass("rotate");
    });
    $(window).on('load', function () {
        setTimeout(function () {
            $('#exampleModal').modal('show');
        }, 4000);
    });
}


(function ($) {
    "use strict";

    var bindToClass = 'carousel',
        containerWidth = 0,
        scrollWidth = 0,
        posFromLeft = 0,
        stripePos = 0,
        animated = null,
        $slide, $carousel, el, $el, ratio, scrollPos, nextMore, prevMore, pos, padding;

    function calc(e) {
        $el = $(this).find(' > .wrap');
        el = $el[0];
        $carousel = $el.parent();
        $slide = $el.prev('.slide');

        nextMore = prevMore = false;

        containerWidth = el.clientWidth;
        scrollWidth = el.scrollWidth;
        padding = 0.2 * containerWidth;
        posFromLeft = $el.offset().left;
        stripePos = e.pageX - padding - posFromLeft;
        pos = stripePos / (containerWidth - padding * 2);
        scrollPos = (scrollWidth - containerWidth) * pos;

        if (scrollPos < 0)
            scrollPos = 0;
        if (scrollPos > (scrollWidth - containerWidth))
            scrollPos = scrollWidth - containerWidth;

        $el.animate({
            scrollLeft: scrollPos
        }, 200, 'swing');

        if ($slide.length)
            $slide.css({
                width: (containerWidth / scrollWidth) * 100 + '%',
                left: (scrollPos / scrollWidth) * 100 + '%'
            });

        clearTimeout(animated);
        animated = setTimeout(function () {
            animated = null;
        }, 200);

        return this;
    }

    function move(e) {
        if (animated) return;

        ratio = scrollWidth / containerWidth;
        stripePos = e.pageX - padding - posFromLeft;

        if (stripePos < 0)
            stripePos = 0;

        pos = stripePos / (containerWidth - padding * 2);

        scrollPos = (scrollWidth - containerWidth) * pos;

        el.scrollLeft = scrollPos;
        if ($slide[0] && scrollPos < (scrollWidth - containerWidth))
            $slide[0].style.left = (scrollPos / scrollWidth) * 100 + '%';

        prevMore = el.scrollLeft > 0;
        nextMore = el.scrollLeft < (scrollWidth - containerWidth);

        $carousel.toggleClass('left', prevMore);
        $carousel.toggleClass('right', nextMore);
    }

    $.fn.carousel = function (options) {
        $(document)
            .on('mouseenter.carousel', '.' + bindToClass, calc)
            .on('mousemove.carousel', '.' + bindToClass, move);
    };

    $.fn.carousel();

})(jQuery);
$('.client-logo-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    Swiping: true,
    slidesToShow: 5,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1601,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.sliderserv').slick({
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 4,
    pauseOnHover: false,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// testimonal sec js

$('.testislider').slick({
    centerMode: true,
    autoplay: true,
    centerPadding: '60px',
    dots: true,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            dots: true,
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            dots: true,
            centerPadding: '40px',
            slidesToShow: 1,
        }
    }
    ]
});

$('.portslider').slick({
    autoplay: true,
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 5,
    pauseOnHover: false,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.amazonslide').slick({
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 2,
    pauseOnHover: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// portfolio book js
(function ($) {
    $(".book-1, .book-2, .book-3, .book-4, .book-5, .book-6, .book-7, .book-8, .book-9, .book-10, .book-11, .book-12, .book-13, .book-14, .book-15, .book-16, .book-17, .book-18, .book-19, .book-20, .book-21, .book-22, .book-23, .book-24, .book-25, .book-26, .book-27, .book-28, .book-29, .book-30, .book-31, .book-32, .book-33")
        .mouseenter(function () {
            $(this).parent(
                ".book-flip-1, .book-flip-2, .book-flip-3, .book-flip-4, .book-flip-5, .book-flip-6, .book-flip-7, .book-flip-8, .book-flip-9, .book-flip-10, .book-flip-11, .book-flip-12, .book-flip-13, .book-flip-14, .book-flip-15, .book-flip-16, .book-flip-17, .book-flip-18, .book-flip-19, .book-flip-20, .book-flip-21, .book-flip-22, .book-flip-23, .book-flip-24, .book-flip-25, .book-flip-26, .book-flip-27, .book-flip-28, .book-flip-29, .book-flip-30, .book-flip-31, .book-flip-32, .book-flip-33"
            ).addClass("rotate");
        });

    $(".book-1, .book-2, .book-3, .book-4, .book-5, .book-6, .book-7, .book-8, .book-9, .book-10, .book-11, .book-12, .book-13, .book-14, .book-15, .book-16, .book-17, .book-18, .book-19, .book-20, .book-21, .book-22, .book-23, .book-24, .book-25, .book-26, .book-27, .book-28, .book-29, .book-30, .book-31, .book-32, .book-33")
        .mouseleave(function () {
            $(this).parent(
                ".book-flip-1, .book-flip-2, .book-flip-3, .book-flip-4, .book-flip-5, .book-flip-6, .book-flip-7, .book-flip-8, .book-flip-9, .book-flip-10, .book-flip-11, .book-flip-12, .book-flip-13, .book-flip-14, .book-flip-15, .book-flip-16, .book-flip-17, .book-flip-18, .book-flip-19, .book-flip-20, .book-flip-21, .book-flip-22, .book-flip-23, .book-flip-24, .book-flip-25, .book-flip-26, .book-flip-27, .book-flip-28, .book-flip-29, .book-flip-30, .book-flip-31, .book-flip-32, .book-flip-33"
            ).removeClass("rotate");
        });
})(jQuery);

$(".clickbutton").click(function() {
    $('.floatbutton').toggleClass("active");
    $('.crossplus').toggleClass("rotate");
});
$(window).on('load', function() {
    setTimeout(function() {
        $('#exampleModal').modal('show');
    }, 4000);
});

