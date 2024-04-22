///////********************    Инициализация плагина Select2    -------------->
$(document).ready(function () {
    $(function () {
        $('.select2').select2();

        $(".select2-placeholder-multiple").select2(
            {
                placeholder: "Select State"
            });
        $(".js-hide-search").select2(
            {
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
});

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

        spanEl.innerText = inputEl.value;
        infoEl.classList.remove('info-active');
        spanEl.classList.remove('input-department');
        inputEl.classList.add('input-department');

    }
}


///////////******************* */  Скрипт календаря по месяцам ----------------------->

flatpickr('.date', {
    altInput: true,
    // altFormat: "F j, Y",
    // dateFormat: "Y-m-d",
    dateFormat: "d-m-Y",
    "locale": "ru",
    disableMobile: "true"
});

const tableDate = document.querySelector('.panel-hdr__date'); // Получаем строку с датой в таблице

// Получаем текущую дату и записываем в строку таблицы
var date = new Date();
var currentDate = date.toISOString().substring(0, 10);
//tableDate.textContent = currentDate.split('-').reverse().join('.');

const prevMonth = document.querySelector('.flatpickr-prev-month');
const nextMonth = document.querySelector('.flatpickr-next-month');
const selectFlat = document.querySelector('.flatpickr-monthDropdown-months');
const arrowUp = document.querySelector('.arrowUp');
const arrowDown = document.querySelector('.arrowDown');
const inputYear = document.querySelector('.cur-year');

inputYear.disabled = true;
selectFlat.disabled = true;
selectFlat.classList.add('no-click');
arrowUp.classList.add('display-none');
arrowDown.classList.add('display-none');

prevMonth.addEventListener('click', () => {
    setTimeout(calendar, 500);
});
nextMonth.addEventListener('click', () => {
    setTimeout(calendar, 500);
});

calendar();

function calendar() {
    let container = document.querySelector('.dayContainer');

    container.addEventListener('click', (e) => {
        let date = e.target.getAttribute('aria-label');
        // console.log(e.target);

        const year = date.split(' ')[2];

        const dayNum = date.split(' ')[1];
        const dayArr = dayNum.split('');
        dayArr.pop();
        const day = dayArr.join('');

        const month = date.split(' ')[0];

        const result = [];

        translateMonth();

        function translateMonth() {
            if (month === 'Январь') {
                const numberMonth = '01';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Февраль') {
                const numberMonth = '02';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Март') {
                const numberMonth = '03';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Апрель') {
                const numberMonth = '04';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Май') {
                const numberMonth = '05';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Июнь') {
                const numberMonth = '06';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Июль') {
                const numberMonth = '07';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Август') {
                const numberMonth = '08';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Сентябрь') {
                const numberMonth = '09';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Октябрь') {
                const numberMonth = '10';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Ноябрь') {
                const numberMonth = '11';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            } else if (month === 'Декабрь') {
                const numberMonth = '12';
                result.push(day);
                result.push(numberMonth);
                result.push(year);
            }
        }

        tableDate.textContent = result.join('.')
        // console.log(result.join('.'));

        setTimeout(calendar, 500);
        formAjax(result);
    })
}

//////////**************  Вывод в консоль выбранного значения из селекта ----------------->

function theSelect() {

    var list = [];
    var theSelect = document.getElementById('department-select');
    // var arr = [];
    // var sel;
    let department;

    var options = theSelect.getElementsByTagName('option');
    for (var j = 0; j < options.length; j++) {
        // arr.push(options[j].innerHTML);
        list.push(options[j].value)
        if (options[j].selected) {
            // sel = (options[j].innerHTML);
            department = (options[j].value)
        }
    }
    // console.log(sel);
    // console.log(result);


    return department;
}

function formAjax(result) {
    if (result.length > 0)
        $("input[name='date-work']").val(result.join('-'));
    $("#task_scheduler-form").submit();
    // console.log(theSelect());
    /* 
        $.post("task_scheduler.html", {
            action: "task_scheduler.html",
            department: theSelect(),
            date: tableDate.textContent,
            // data: $('#form').serialize()
            // name: $("input[name='name']").val(),
            // number: $("input[name='number']").val(),
        },
            function (data) {
                console.log(data.department);
                console.log(data.date);
                // const fio = document.querySelector('#fio');
                // fio.value = data.fio;
                // console.log(data.otvet.name);
            }, "json"
        ); */
}



///////////////////   Скрипт на отправку формы ------------------>

// $.post("test2.php", {
//             action: "test_1",
//             // data: $('#form').serialize()
//             // name: $("input[name='name']").val(),
//             // number: $("input[name='number']").val(),
//         },
//             function (data) {
//                 console.log(data);
//                 const fio = document.querySelector('#fio');
//                 fio.value = data.fio;
//                 // console.log(data.otvet.name);
//             }, "json"
//         );



// Кнопка сохранения всех элементов и значений
// (document.querySelectorAll('.table-employee-data') || []).forEach((cBlock, i) => {
//     cBlock.id = 'catalogBlock-' + i;
// });

function saveData() {
    let dataObj = [];

    $('.table-employee-data').each(function () {

        let employeeObj = {};

        $(this).find('.data-name').each(function () {
            employeeObj.name_employee = $(this).text();
        })

        let planForDay = employeeObj.plan_for_day = [];
        let plannedTime = employeeObj.planned_time = [];
        let factOfDay = employeeObj.fact_of_day = [];
        let factTime = employeeObj.fact_time = [];

        employeeObj.overtime_hours = {
            overtime_planned_time: $(this).find('.overtime-planned-time').text(),
            overtime_fact_time: $(this).find('.overtime-fact-time').text()
        };

        employeeObj.total_minute = {
            total_planned_time: $(this).find('.total-minutes-planned-time').text(),
            total_fact_time: $(this).find('.total-minutes-fact-time').text()
        };

        employeeObj.total_hours = {
            total_planned_time: $(this).find('.total-hours-planned-time').text(),
            total_fact_time: $(this).find('.total-hours-fact-time').text()
        };


        $(this).find('.plan-for-day').each(function () {
            planForDay.push($(this).text());
        })

        $(this).find('.planned-time').each(function () {
            plannedTime.push($(this).text());
        })
        $(this).find('.fact-of-day').each(function () {
            factOfDay.push($(this).text());
        })
        $(this).find('.fact-time').each(function () {
            factTime.push($(this).text());
        })

        dataObj.push(employeeObj);
    })


    console.log(dataObj);

    $.post("ajax.php", {
        act: "task_scheduler",
        dataObj: dataObj
    },
        function (dataObj) {
            console.log(dataObj);

        }, "json"
    );
}