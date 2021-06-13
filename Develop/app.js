// Starter file provided by Instructor (03/09/2021) AC
const path = require("path");
const fs = require("fs");

const inquirer = require("inquirer");

// Variables for requiring various employee files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

console.log(outputPath);

const render = require("./lib/htmlRenderer");
const { type } = require("os");

if (!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR);
};

fs.writeFileSync(outputPath, render([]));

// const addAnother = () => {
//   inquirer.prompt([
//     {
//       type: "confirm",
//       message: "Would like to add another Employee",
//       name: "confirm"
//     }
//   ]).then((answers) => {
//     if (answers.confirm) {
//       createEmployees();
//     } else {
//       process.exit();
//     }
//   });
// }

//Empty array to hold all future team members
const team = [];

const managerQuestions = [
  {
    type: 'input',
    message: 'What is the manager\'s name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is the manager\'s employee ID?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is the manager\'s email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the manager\'s office Number?',
    name: 'officeNumber'
  }
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the engineer\'s name',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s employee ID?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the engineer\'s GitHub username?',
    name: 'gitHub'
  },
];

const internQuestions = [
  {
    type: 'input',
    message: 'What is the intern\'s name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'What is the intern\'s employee ID?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What is the intern\'s email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the intern\'s school?',
    name: 'school'
  },
];

const createEmployees = () => {
  //inquirer.prompt([
    {
      type: "rawlist",
      message: "What type of employee would you like to create?",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Done creating employees"
      ]
    },
    if (type.choices==='Manager') {

    }







const init = () => {
  inquirer.prompt(createEmployees)




  

init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
