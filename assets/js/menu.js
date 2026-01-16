document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circles__circle'); // круглые элементы
    const menuList = document.querySelector('.menu__list');
    const heroContent = document.querySelector('.hero__content');
    const heroCircle = document.querySelector('.hero__circle');
    const heroPlanet = document.querySelector('.hero__planet');

    function closeMenu() {
        menuList.classList.remove('menu__list--active');
        heroContent.classList.remove('hero__content--hidden');
        heroCircle.classList.remove('hero__circle--hidden');
        heroPlanet.classList.remove('hero__planet--hidden');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        menuList.classList.toggle('menu__list--active');
        heroContent.classList.toggle('hero__content--hidden');
        heroCircle.classList.toggle('hero__circle--hidden');
        heroPlanet.classList.toggle('hero__planet--hidden');

        document.body.style.overflow = menuList.classList.contains('menu__list--active')
            ? 'hidden'
            : '';
    }

    // Добавляем обработчик на каждый круглый элемент
    circles.forEach(circle => {
        circle.addEventListener('click', function(event) {
            event.stopPropagation(); // предотвращаем всплытие
            toggleMenu();
        });
    });

    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const allButtons = document.querySelectorAll('button, .button, [type="button"], [type="submit"]');
    allButtons.forEach(button => {
        button.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 640) {
            closeMenu();
        }
    });

    // Закрытие меню при клике вне меню и вне круглых элементов
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menuList.contains(event.target);
        const isClickOnCircle = Array.from(circles).some(circle => 
            circle.contains(event.target)
        );
        
        if (menuList.classList.contains('menu__list--active') &&
            !isClickInsideMenu &&
            !isClickOnCircle) {
            closeMenu();
        }
    });
});