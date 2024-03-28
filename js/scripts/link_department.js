function theSelet1() {
    const department = document.querySelector('select[name="department"]').value;
    if (department) {
        employee.removeAttribute('disabled');
    }
}

function theSelet2() {
    const employee = document.querySelector('select[name="employee"]').value;
    const btn = document.querySelector('button[type="submit"]')

    if (employee) {
        btn.removeAttribute('disabled');
    }
}