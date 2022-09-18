    const searchBtn = document.querySelector('.header__search');
    const searchForm = document.querySelector('.header__search-form');
    const searchCls = document.querySelector('.header__search-cls');
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__menu');
    const burgerCls = document.querySelector('.header__menu-cls');
    const menuLinks = document.querySelectorAll('.header__link');
    const inputSearch = document.querySelector('.header__input');

    searchBtn.onclick = (e) => {
        e.preventDefault();
        searchForm.classList.add('active');
    }
    searchCls.onclick = (e) => {
        e.preventDefault();
        searchForm.classList.remove('active');
        inputSearch.value = '';
    }
    burgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        burgerMenu.classList.add('active');
    })
    menuLinks.forEach(event => {
        event.addEventListener('click', (e) => {
        // e.preventDefault();
        burgerMenu.classList.remove('active');
    })})
    burgerCls.addEventListener('click', (e) => {
        e.preventDefault();
        burgerMenu.classList.remove('active');
    });