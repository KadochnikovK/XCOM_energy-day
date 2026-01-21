document.addEventListener("DOMContentLoaded", function () {


    const speakersSwiper = new Swiper(".speakers__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,
        // autoHeight: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        simulateTouch: true,
        grabCursor: true,

        touchRatio: 0.6,
        touchAngle: 45,

        freeMode: {
            enabled: true,
            momentum: true,
            momentumRatio: 2,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 2,
            sticky: true,
        },

        speed: 600,
        resistanceRatio: 0.6,

        breakpoints: {
            320: {
                slidesPerView: 1.05,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 3,
                    sticky: true,
                },
                speed: 800,
            },
            850: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1200: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
        },
    });

    console.log("2: перед partnersSwiper");
    const partnersSwiper = new Swiper(".partners__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        simulateTouch: true,
        grabCursor: true,

        touchRatio: 0.6,
        touchAngle: 45,
        navigation: {
            nextEl: '.partners__slider .navigation__nav-next',
            prevEl: '.partners__slider .navigation__nav-prev',
        },
        freeMode: {
            enabled: true,
            momentum: true,
            momentumRatio: 2,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 2,
            sticky: true,
        },

        speed: 600,
        resistanceRatio: 0.6,

        breakpoints: {
            320: {
                slidesPerView: 1.05,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 3,
                    sticky: true,
                },
                speed: 800,
            },
            850: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1200: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
        },
    });


    document.addEventListener("click", function (e) {

        if (e.target.closest(".advantages__wrapper")) {
            console.log("Клик по врапперу, переключаем слайд");
            advantagesSwiper.slideNext();
        }
    });

    console.log("Слушатель создан");

    const scheduleSwiper = new Swiper(".schedule__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        speed: 600,


        navigation: {
            nextEl: '.schedule__slider .navigation__nav-next',
            prevEl: '.schedule__slider .navigation__nav-prev',
        },


        effect: 'slide',


        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,


        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },

        on: {
            init: function () {
                console.log("Schedule slider initialized");


            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);


            }
        }
    });


    const scheduleSliderElement = document.querySelector('.schedule__slider');
    if (scheduleSliderElement) {
        scheduleSliderElement.addEventListener('mouseenter', function () {
            if (scheduleSwiper.autoplay && scheduleSwiper.autoplay.running) {
                scheduleSwiper.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        scheduleSliderElement.addEventListener('mouseleave', function () {
            if (scheduleSwiper.autoplay && !scheduleSwiper.autoplay.running) {
                scheduleSwiper.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }

    console.log("Schedule slider initialized");


    const scheduleTableSwiper = new Swiper(".schedule__table-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,


        navigation: {
            nextEl: '.schedule__table-slider .navigation__nav-next',
            prevEl: '.schedule__table-slider .navigation__nav-prev',
        },


        effect: 'slide',


        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },


        on: {
            init: function () {
                console.log("Schedule slider initialized");
            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);
            }
        }
    });


    const scheduleTableSliderElement = document.querySelector('.schedule__table-slider');
    if (scheduleSliderElement) {
        scheduleSliderElement.addEventListener('mouseenter', function () {
            if (scheduleTableSwiper.autoplay && scheduleTableSwiper.autoplay.running) {
                scheduleTableSwiper.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        scheduleTableSliderElement.addEventListener('mouseleave', function () {
            if (scheduleTableSwiper.autoplay && !scheduleTableSwiper.autoplay.running) {
                scheduleTableSwiper.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }

    const organizerSwiper = new Swiper(".organizer__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,


        navigation: {
            nextEl: '.organizer__swiper .navigation__nav-next',
            prevEl: '.organizer__swiper .navigation__nav-prev',
        },


        effect: 'slide',


        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },


        on: {
            init: function () {
                console.log("Schedule slider initialized");
            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);
            }
        }
    });


    const organizerSliderElement = document.querySelector('.organizer__swiper');
    if (scheduleSliderElement) {
        scheduleSliderElement.addEventListener('mouseenter', function () {
            if (organizerSwiper.autoplay && organizerSwiper.autoplay.running) {
                organizerSwiper.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        organizerSliderElement.addEventListener('mouseleave', function () {
            if (organizerSwiper.autoplay && !organizerSwiper.autoplay.running) {
                organizerSwiper.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }
});
