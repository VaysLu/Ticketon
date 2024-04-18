////////********* */ Подключение виджета filter select2 ----------------->

$(function () {
    // delete $.tablesorter.filter.types.fuzzy;

    $('#myTable').tablesorter({
        sortList : [[ 0 , 0 ], [ 1 , 0 ]],
        theme: 'blue',
        widgets: ['zebra', 'filter'],
        widgetOptions: {
            filter_reset: '.reset'
        },
        headers: {
            '.no-sorter': {
                sorter: false,
            },
        },
        
    });

    const selectEl = document.querySelectorAll('select.tablesorter-filter');

    selectEl.forEach(element => {
        element.classList.add('js-hide-search', 'form-control');
    });

    // const col = document.querySelectorAll('.info-col');

    // col.forEach(element => {
    //     element.classList.add('th-white-green-n')
    // });

    const selectTd = document.querySelector('td[data-column="0"]');
    selectTd.classList.add('select-wrapper');

    const inputSearch = document.querySelectorAll('.tablesorter-filter');

    inputSearch.forEach(elSearch => {
        elSearch.classList.add('display-none');
    });
});

/////////********* */ Инициализация плагина Select2 ------------->

$(document).ready(function () {
    $(function () {
        $(".js-hide-search").select2(
            {
                dropdownParent: $('.select-wrapper'),
                minimumResultsForSearch: 1 / 0
            });
    });

    const tdEl = document.querySelector('td[data-column="0"]');
    tdEl.classList.add('position-relativ');
});



///////////******************* */  Скрипт календаря по месяцам ----------------------->

const firstD = document.querySelector('.first-date');

flatpickr('.date', {
    plugins: [
        new monthSelectPlugin({
            shorthand: true,
            dateFormat: "m.y",
            altFormat: "F Y",
            theme: "white"
        })
    ],
    "locale": "ru",
    disableMobile: "true",
    onClose: function (selectedDates, dateStr, instance) {

        // Получаем первую выбранную дату
        let firstDate = selectedDates[0];
        // Получаем месяц первой даты
        let firstMonth = firstDate.getMonth() + 1;
        // Получаем год первой даты
        let firstYear = firstDate.getFullYear();

        let firstSelect = `${compilateMonth(firstMonth)}-${firstYear}`;
        
        firstD.value = firstSelect;

        $("#task_scheduler-form").submit();

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


///////////////////   Скрипт на отправку формы ------------------>

function formAjax(result) {
    if (result.length > 0)
        $("input[name='date-work']").val(result.join('-'));
    $("#task_scheduler-form").submit();
}

