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
