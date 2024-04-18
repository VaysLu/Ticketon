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