$(".globalAdvisor").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

$('.country-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

$('.presentaion-poster').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
