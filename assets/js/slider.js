document.addEventListener("DOMContentLoaded", function () {

    const whySliders = document.querySelectorAll('.why__item--slider');

    whySliders.forEach((sliderElement, index) => {
        const whySwiper = new Swiper(sliderElement, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoHeight: false,
            height: 300,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            effect: 'slide',
            speed: 600,


            simulateTouch: true,
            grabCursor: true,
            touchRatio: 1,
            touchAngle: 45,
            allowTouchMove: true,


            resistance: true,
            resistanceRatio: 0.6,


            breakpoints: {
                320: {
                    enabled: true,
                    slidesPerView: 1,
                },
                768: {
                    enabled: true,
                    slidesPerView: 1,
                },
                1024: {
                    enabled: true,
                    slidesPerView: 1,
                }
            },


            freeMode: {
                enabled: true,
                momentum: true,
                momentumRatio: 2,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 2,
                sticky: false,
            },

            on: {
                init: function () {
                    console.log(`Why slider ${index + 1} initialized`);
                },
                slideChange: function () {
                    console.log(`Why slider ${index + 1} changed to slide:`, this.realIndex);
                }
            }
        });


        sliderElement.addEventListener('mouseenter', function () {
            whySwiper.autoplay.stop();
            console.log(`Why slider ${index + 1} autoplay stopped`);
        });

        sliderElement.addEventListener('mouseleave', function () {
            whySwiper.autoplay.start();
            console.log(`Why slider ${index + 1} autoplay started`);
        });
    });

    console.log("Why section sliders initialized");

    console.log("1: перед speakersSwiper");

    const speakersSwiper = new Swiper(".speakers__slider", {
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
            1080: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1360: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
        },
    });
    const scheduleSwiper = new Swiper(".schedule__slider", {
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
            1080: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1360: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1300: {
                slidesPerView: 4,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1500: {
                slidesPerView: 5,
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
            1080: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1360: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
        },
    });
    console.log("3: перед newsSwiper");
    const newsSwiper = new Swiper(".news__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,

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
            640: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            1000: {
                slidesPerView: 3,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
        },
    });
    console.log("4: перед advantagesSwiper");
    const advantagesSwiper = new Swiper(".advantages__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,

        effect: "slide",
        speed: 800,
        threshold: 5,

        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,

        shortSwipes: true,
        followFinger: true,

        preventInteractionOnTransition: false,
        resistance: true,
        resistanceRatio: 0.6,

        on: {
            init: function () {
                console.log("Swiper инициализирован");
            },
            slideChange: function () {
                console.log("Текущий слайд:", this.realIndex);
            },
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });

    const scheduleCardsSwiper = new Swiper(".schedule__mobile-cards", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,

        navigation: {
            nextEl: '.schedule__slider-next',
            prevEl: '.schedule__slider-prev',
        },

        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,

        speed: 600,
        resistance: true,
        resistanceRatio: 0.6,

        breakpoints: {
            320: {
                enabled: true,
                slidesPerView: 1,
            },
            1024: {
                enabled: false,
            }
        }
    });

    // Слайдер для schedule__table (создаем слайды динамически)
    function initScheduleTableSlider() {
        const desktopTable = document.querySelector('.schedule__table');
        const tableSlider = document.querySelector('.schedule__table-slider .swiper-wrapper');

        if (!desktopTable || !tableSlider) return;

        // Очищаем существующие слайды
        tableSlider.innerHTML = '';

        // Берем все строки из десктопной таблицы
        const rows = desktopTable.querySelectorAll('.schedule__row');

        rows.forEach(row => {
            const time = row.querySelector('.schedule__cell--time')?.textContent || '';
            const description = row.querySelector('.schedule__cell--description')?.textContent || '';

            const slide = document.createElement('div');
            slide.className = 'swiper-slide schedule__table-slide';
            slide.innerHTML = `
                <div class="schedule__table-item">
                    <div class="schedule__cell--time" style="font-weight: bold; font-size: 18px; margin-bottom: 10px;">
                        ${time}
                    </div>
                    <div class="schedule__cell--description" style="font-size: 16px;">
                        ${description}
                    </div>
                </div>
            `;
            tableSlider.appendChild(slide);
        });

        // Инициализируем слайдер
        if (rows.length > 0) {
            const scheduleTableSwiper = new Swiper(".schedule__mobile-table", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoHeight: true,

                navigation: {
                    nextEl: '.schedule__table-slider .schedule__slider-next',
                    prevEl: '.schedule__table-slider .schedule__slider-prev',
                },

                simulateTouch: true,
                grabCursor: true,
                touchRatio: 1,
                touchAngle: 45,
                allowTouchMove: true,

                speed: 600,
                resistance: true,
                resistanceRatio: 0.6,

                breakpoints: {
                    320: {
                        enabled: true,
                        slidesPerView: 1,
                    },
                    1024: {
                        enabled: false,
                    }
                }
            });
        }
    }

    // Слайдер для organizer__grid (создаем слайды динамически)
    function initOrganizerSlider() {
        const desktopGrid = document.querySelector('.organizer__grid');
        const organizerSlider = document.querySelector('.organizer__mobile-grid .swiper-wrapper');

        if (!desktopGrid || !organizerSlider) return;

        // Очищаем существующие слайды
        organizerSlider.innerHTML = '';

        // Берем все элементы из десктопной сетки
        const items = desktopGrid.querySelectorAll('.organizer__item');

        items.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide organizer__slide';
            slide.innerHTML = item.outerHTML;
            organizerSlider.appendChild(slide);
        });

        // Инициализируем слайдер
        if (items.length > 0) {
            const organizerGridSwiper = new Swiper(".organizer__mobile-grid", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoHeight: true,

                navigation: {
                    nextEl: '.organizer__slider .organizer__slider-next',
                    prevEl: '.organizer__slider .organizer__slider-prev',
                },

                simulateTouch: true,
                grabCursor: true,
                touchRatio: 1,
                touchAngle: 45,
                allowTouchMove: true,

                speed: 600,
                resistance: true,
                resistanceRatio: 0.6,

                breakpoints: {
                    320: {
                        enabled: true,
                        slidesPerView: 1,
                    },
                    1024: {
                        enabled: false,
                    }
                }
            });
        }
    }

    // Инициализируем слайдеры
    initScheduleTableSlider();
    initOrganizerSlider();

    // Обновляем при изменении размера окна
    window.addEventListener('resize', function () {
        if (window.innerWidth < 1024) {
            initScheduleTableSlider();
            initOrganizerSlider();
        }
    });
    
    console.log("5: после advantagesSwiper");
    console.log("Слайдер создан, создаем слушатель");

    // Обработчик клика по врапперу
    document.addEventListener("click", function (e) {
        // Проверяем, кликнули ли на элемент с классом advantages__wrapper или его дочерний элемент
        if (e.target.closest(".advantages__wrapper")) {
            console.log("Клик по врапперу, переключаем слайд");
            advantagesSwiper.slideNext();
        }
    });

    console.log("Слушатель создан");
});
