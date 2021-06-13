// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const newEngineer = new Engineer ('name', 544, 'email', 'gitHub');
    expect(newEngineer.gitHub).toEqual('gitHub');
});

test("getRole() should return \"Engineer\"", () => {
    const newEngineer = new Engineer ();
    expect(newEngineer.getRole()).toBe('Engineer');
});

test("Can get GitHub username via getGithub()", () => {
    const newEngineer = new Engineer('name', 544, 'email', 'gitHub');
    expect(newEngineer.getGithub()).toEqual('gitHub');
});
