// Nav Clone

$('.tnav').clone().prependTo('.main-nav ');

//Main Menu
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});

$('.slider-01').slick({
    appendArrows: $('.slide-01-nav'),
    prevArrow: "<button class='prev'></button>",
    nextArrow: "<button class='next'></button>"
});

$('.slider-02').slick({
    appendArrows: $('.slide-02-nav'),
    prevArrow: "<button class='prev'></button>",
    nextArrow: "<button class='next'></button>"
});

$('.client-c').slick({
    arrows:false,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
    ]
});
