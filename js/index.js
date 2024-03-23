///////////// Скрытие сайдбара ////////////

const showSidebarBtn = document.querySelector('#btn__show-sidebar');
const sidebar = document.querySelector('.page-sidebar');


showSidebarBtn.addEventListener('click', function () {
    showSidebarBtn.classList.toggle('active');
    const body = document.querySelector('body');

    if (body.classList.contains('nav-function-minify')) {
        body.classList.remove('nav-function-minify');
    } else {
        body.classList.add('nav-function-minify');
    }
})

////////////////////////////////////////////

//////////// Открытие списка ссылок в сайдбаре /////////////


const navMenuBtn = document.querySelector('.nav-menu__btn');
const navMenuList = document.querySelector('.nav-menu__list');


navMenuBtn.addEventListener('click', (e) => {
    navMenuList.classList.toggle('active');

    const navMenuArrow = document.querySelector('em.fal');

    if (navMenuArrow.classList.contains('fa-angle-down')) {
        navMenuArrow.classList.remove('fa-angle-down');
        navMenuArrow.classList.add('fa-angle-up');
    } else {
        navMenuArrow.classList.remove('fa-angle-up');
        navMenuArrow.classList.add('fa-angle-down');
    }
})

////////////////////////////////////////////

//////////////// Открытие меню пользователя ////////////////////

const headerIcon = document.querySelector('.ml-auto__block>button');
const headerIconBlock = document.querySelector('.ml-auto__block');

headerIcon.addEventListener('click', (e) => {
    if (!headerIconBlock.classList.contains('show')) {
        headerIconBlock.classList.add('show');
    } else {
        headerIconBlock.classList.remove('show');
    }

    if (headerIcon.getAttribute('aria-expanded') === 'true') {
        headerIcon.setAttribute('aria-expanded', 'false');
    } else {
        headerIcon.setAttribute('aria-expanded', 'true');
    }

})

window.addEventListener('click', function (e) {
    if (document.getElementById('clickbox').contains(e.target)) {
        console.log('click');
    } else {
        headerIconBlock.classList.remove('show');
        headerIcon.setAttribute('aria-expanded', 'false');
    }
});

////////////////////////////////////////////

//////////////// Открытие сайдбара в мобильном режиме ////////////////////

const burgerBtn = document.querySelector('.hidden-lg-up');

burgerBtn.addEventListener('click', (e) => {
    document.body.classList.add('mobile-nav-on');

    window.addEventListener('click', function (e) {
        if (document.querySelector('aside').contains(e.target) || burgerBtn.contains(e.target)) {
            console.log('click');
        } else {
            document.body.classList.remove('mobile-nav-on');
        }
    });
})

////////////////////////////////////////////

//////////////// Открытие фильтра меню ////////////////////

const filterBtn = document.querySelector('.pull-trigger-btn');

filterBtn.addEventListener('click', (e) => {
    sidebar.classList.add('list-filter-active');
})

const searchCloseBtn = document.querySelector('.btn-search-close');

searchCloseBtn.addEventListener('click', (e) => {
    sidebar.classList.remove('list-filter-active');
})

////////////////////////////////////////////


var filterField = document.getElementById("nav_filter_input");



filterField.onkeyup = function showMessage() {
    const cap = (n, min, max) => Math.max(min, Math.min(n, max));
    const str = document.getElementById("nav_filter_input").value;
    const n = str.split('').map(v => `${v}`).join('');

    const links = document.querySelector('.nav-menu__link');
    const link = links.getAttribute('data-filter-tags');

    const lenLink = [];

    for (let i = 0; i < link.length; i++) {
        lenLink.push(link[i]);
        
    }
    console.log(lenLink);

    for (let i = 0; i < lenLink.length; i++) {
        if(n === lenLink[i]) {
            console.log('yes');
            break
        } else {
            console.log('no');
            break
        }
        
    }

    
};

// const link = document.querySelector('.nav-menu__link');
// const f = "У";

// for (const key in link.getAttribute('data-filter-tags')) {
//     if (key === f) {
//         console.log('yes');
//     } else {
//         console.log('No');
//     }
// }
// link.getAttribute('data-filter-tags');
    
    // console.log(link.getAttribute('data-filter-tags'));






