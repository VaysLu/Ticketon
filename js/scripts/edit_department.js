//////******* */ Функция вывода в поле input значения из select: selected --------------->
/////***** */ Форма disabled --------------->

const inputEl = document.querySelector('input[name="name-department"]');
const btn = document.querySelector('button[type="submit"]');

inputEl.addEventListener('input', function (event) {
    offDisabled();
})

function offDisabled() {
    const btn = document.querySelector('button[type="submit"]')
    if (inputEl.value !== '') {
        console.log(123);
        btn.removeAttribute('disabled');
    } else {
        btn.disabled = true;
    }
}
function theSelect() {
    const input = document.querySelector('#input-department');
    const option = document.querySelector('.select2-selection__rendered').textContent;

    inputEl.value = option;

    if (input.classList.contains('input-department')) {
        input.classList.remove('input-department');
    }

    if (!input.value) {
        btn.removeAttribute('disabled');
    }
}