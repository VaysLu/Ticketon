////////************* */ Скрипт на текст-ареа -------------->

document.addEventListener("DOMContentLoaded", () => {
    const tableComment = document.querySelectorAll('.info__comment');

    tableComment.forEach((item) => {
        if (item.textContent !== '') {
            item.classList.remove('opacity');
        } else {
            item.classList.add('opacity');
        }
    })
});


////////////********* */        Скрипт календаря по месяцам ----------------------->
const dateUTC = new Date();
const yearUTC = dateUTC.getFullYear();
const monthUTC = dateUTC.getMonth() + 1;
const monthYear = document.querySelector('.month-Year-first');
const table = document.querySelector('#myTable');
const firstD = document.querySelector('.first-date');
const lastD = document.querySelector('.last-date');

flatpickr('.date', {
    plugins: [
        new monthSelectPlugin({
            shorthand: true,
            dateFormat: "m.y",
            altFormat: "F Y",
            theme: "white"
        })
    ],
    mode: 'range',
    "locale": "ru",
    disableMobile: "true",
    onClose: function (selectedDates, dateStr, instance) {

        // Получаем первую выбранную дату
        let firstDate = selectedDates[0];
        // Получаем месяц первой даты
        let firstMonth = firstDate.getMonth() + 1;
        // Получаем год первой даты
        let firstYear = firstDate.getFullYear();

        // Получаем вторую выбранную дату
        let lastDate = selectedDates[1];
        // Получаем месяц последней даты
        let lastMonth = lastDate.getMonth() + 1;
        // Получаем год последней даты
        let lastYear = lastDate.getFullYear();

        let firstSelect = `${compilateMonth(firstMonth)}-${firstYear}`;
        let lastSelect = `${compilateMonth(lastMonth)}-${lastYear}`;
        
        firstD.value = firstSelect;
        lastD.value = lastSelect;

        $("#formDate").submit();

    }
});

// // Функция компиляции месяца ()
function compilateMonth(month) {
    if (month === 10 || month === 11 || month === 12) {
        return month;
    } else {
        return `0${month}`;
    }
}


    ////////********* */ Подключение виджета filter select2 ----------------->

$(function () {

    $('#myTable').tablesorter({
        theme: 'blue',
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset'
        },
        headers: {
            'no-sorter': {
                sorter: false,
            },
        },
    });

    const selectEl = document.querySelectorAll('select.tablesorter-filter');

    selectEl.forEach(element => {
        element.classList.add('js-hide-search', 'form-control');
    });
    

    const thEl1 = document.querySelector('td[data-column="11"]');
    const thEl2 = document.querySelector('td[data-column="21"]');
    const thEl3 = document.querySelector('td[data-column="25"]');
    const thEl4 = [
        document.querySelector('td[data-column="26"]'),
        document.querySelector('td[data-column="27"]'),
        document.querySelector('td[data-column="28"]'),
        document.querySelector('td[data-column="29"]'),
        document.querySelector('td[data-column="30"]')
    ]

    thEl1.classList.add('th-white-green-n');
    thEl2.classList.add('th-white-blue');
    thEl3.classList.add('th-red');

    thEl4.forEach(element => {
        element.classList.add('th-yellow-n');
    });

    const selectTd = document.querySelector('td[data-column="0"]');
    selectTd.classList.add('select-wrapper');
});


/////////********* */ Инициализация плагина Select2 ------------->

$(document).ready(function () {
    $(function () {
        $('.select2').select2({
            dropdownParent: $('.select-wrapper')
        });

        $(".select2-placeholder-multiple").select2(
            {
                placeholder: "Select State"
            });
        $(".js-hide-search").select2(
            {
                dropdownParent: $('.select-wrapper'),
                minimumResultsForSearch: 1 / 0
            });
        $(".js-max-length").select2(
            {
                maximumSelectionLength: 2,
                placeholder: "Select maximum 2 items"
            });
        $(".select2-placeholder").select2(
            {
                placeholder: "Select a state",
                allowClear: true
            });
        $(".js-select2-icons").select2(
            {
                minimumResultsForSearch: 1 / 0,
                templateResult: icon,
                templateSelection: icon,
                escapeMarkup: function (elm) {
                    return elm
                }
            });

        function icon(elm) {
            elm.element;
            return elm.id ? "<i class='" + $(elm.element).data("icon") + " mr-2'></i>" + elm.text : elm.text
        }

    });
    
    const tdEl = document.querySelector('td[data-column="0"]');
    tdEl.classList.add('position-relativ');
});


