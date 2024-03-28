//////********** */ Функция вывода в консоль обьекта (Группа и значение) Селекта Сотрудник --------------->
//////******* */ Форма disabled --------------->

function theSelect() {
    // $.post("test2.php", {
    //         action: "test_1",
    //         // data: $('#form').serialize()
    //         // name: $("input[name='name']").val(),
    //         // number: $("input[name='number']").val(),
    //     },
    //         function (data) {
    //             console.log(data);
    //             const fio = document.querySelector('#fio');
    //             fio.value = data.fio;
    //             // console.log(data.otvet.name);
    //         }, "json"
    //     );
    const fileUpload = document.querySelector('.file-upload').classList.remove('disabled');
    const inputFile = document.querySelector('.file-upload-input').removeAttribute("disabled");
    const inputEll = document.querySelector('input[name="fio"]').removeAttribute("disabled");
    const departmentEll = document.querySelector('select[name="department"]').removeAttribute("disabled");
    const dataInWorkEll = document.querySelector('input[name="date-in-work"]').removeAttribute("disabled");
    const wagesEll = document.querySelector('input[name="wages"]').removeAttribute("disabled");
    const btnEll = document.querySelector('button[type="submit"]').removeAttribute("disabled");

    var releasearr = {};
    var theSelect = document.getElementById('employee-select');
    var optgroups = theSelect.getElementsByTagName('optgroup');
    var arr = {};// object for selected options

    for (var i = 0; i < optgroups.length; i++) {
        l = optgroups[i].getAttribute('label');
        releasearr[l] = [];
        var options = optgroups[i].getElementsByTagName('option');
        for (var j = 0; j < options.length; j++) {
            releasearr[l].push(options[j].innerHTML);
            if (options[j].selected) { // check if options is selected
                arr[l] = [];// making array of optgroup
                arr[l].push(options[j].innerHTML);
            }
        }
    }
    console.log(arr);

}
