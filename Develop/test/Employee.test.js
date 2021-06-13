// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee ();
    expect(typeof(newEmployee)).toBe('object');
});

test("Can set name via constructor arguments", () => {
    const newEmployee = new Employee ('name');
    expect(newEmployee.name).toBe('name');
});

test("Can set id via constructor argument", () => {
    const newEmployee = new Employee ('name', 543);
    expect(newEmployee.id).toBe(543);
});

test("Can set email via constructor argument", () => {
    const newEmployee = new Employee ('name', 543, 'email');
    expect(newEmployee.email).toBe('email');
});

test("Can get name via getName()", () => {
    const newEmployee = new Employee ('name');
    expect(newEmployee.getName()).toBe('name');
});

test("Can get id via getId()", () => {
    const newEmployee = new Employee ('name', 543);
    expect(newEmployee.getId()).toBe(543);
});

test("Can get email via getEmail()", () => {
    const newEmployee = new Employee ('name', 543, 'email');
    expect(newEmployee.getEmail()).toBe('email');
});

test("getRole() should return \"Employee\"", () => {
    const newEmployee = new Employee ();
    expect(newEmployee.getRole()).toBe("Employee");
});
