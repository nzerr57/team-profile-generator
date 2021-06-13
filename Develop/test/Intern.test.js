// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const newIntern = new Intern ('name', 544, 'email', 'school');
    expect(newIntern.school).toBe('school');
});

test("getRole() should return \"Intern\"", () => {
    const newIntern = new Intern ();
    expect(newIntern.getRole()).toBe('Intern');
});

test("Can get school via getSchool()", () => {
    const school = 'Purdue';
    const newIntern = new Intern('name',544, 'email', school);
    expect(newIntern.getSchool()).toBe(school);
});
