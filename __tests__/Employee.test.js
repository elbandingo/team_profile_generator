//first, require the Employee constructor
const Employee = require('../lib/Employee');

//test that the employee object is created
test('check to see if employee object is created', () => {
    const employee = new Employee('Adam', 90, 'elbandingo@protonmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//the Employee constructor has 3 arguments, run a test to see if all 3 arguments exist or have been passed through
test('check to see if name, email and ID are being returned', () => {
    const employee = new Employee("Adam", 1, 'mail@mail.com');
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(employee.getName(), employee.getId(), employee.getEmail());
});

//test that the role of employee is getting captured
test('Ensure the role is returned as employee', () => {
    const employee = new Employee('Adam', 1, 'Mail@mail.com');
    expect(employee.getRole()).toEqual("Employee");
});