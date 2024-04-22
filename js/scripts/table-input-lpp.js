/////////*******************      Скрипт на внесение изменений в таблице -------------->

const infoEl = document.querySelectorAll('.info');

infoEl.forEach((item) => {
    item.addEventListener('click', () => {
        const spanEl = item.querySelector('.info__text');
        const inputEl = item.querySelector('.info__input');

        const text = spanEl.textContent;
        inputEl.value = text;

        if (inputEl.classList.contains('input-department')) {
            item.classList.add('info-active');
            inputEl.classList.remove('input-department');
            spanEl.classList.add('input-department');
            inputEl.focus();
        }

        inputBlur();
    })
})

function inputBlur() {

    const inputEl = document.querySelector('.info__input:focus');
    const infoEl = document.querySelector('.info.info-active');

    inputEl.onblur = function () {

        const spanEl = document.querySelector('.info__text.input-department');
        // const spanEl = document.querySelector('.info__text');

        spanEl.innerText = inputEl.value;
        infoEl.classList.remove('info-active');
        spanEl.classList.remove('input-department');
        inputEl.classList.add('input-department');

    }
}

$(document).on("input", "textarea", function () {

    $(this).outerHeight(38).outerHeight(this.scrollHeight);
    
    });