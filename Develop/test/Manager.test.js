// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
    const newManager = new Manager ('name', 544, 'email', 523);
    expect(newManager.officeNumber).toEqual(523);
});

test('getRole() should return "Manager"', () => {
    const newManager = new Manager ();
    expect(newManager.getRole()).toEqual('Manager');
});

test("Can get office number via getOffice()", () => {
    const newManager = new Manager('name', 544, 'email', 523);
    expect(newManager.getOfficeNumber()).toEqual(523);
});
