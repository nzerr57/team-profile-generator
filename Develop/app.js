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

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
};

//Empty array to hold all future team members
const team = [];


// Questions for Manager
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

// Questions for Engineers
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

// Questions for Interns
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

// Function that prompts questions based on employee role. Writes file after done adding employees
const createTeam = (answer) => {
  console.log(answer);
  if (answer.role === 'Manager') {
    inquirer.prompt(managerQuestions)
      .then(function (manager) {

        const newManager = new Manager(
          manager.name,
          manager.id,
          manager.email,
          manager.officeNumber
        );
        team.push(newManager);
        console.log('This manager has been added');
        init();
      })
  } else if (answer.role === 'Engineer') {
    inquirer.prompt(engineerQuestions)
      .then(function (engineer) {

        const newEngineer = new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.gitHub
        );
        team.push(newEngineer);
        console.log('This engineer has been added');
        init();
      })
  } else if (answer.role === 'Intern') {
    inquirer.prompt(internQuestions)
      .then(function (intern) {

        const newIntern = new Intern(
          intern.name,
          intern.id,
          intern.email,
          intern.school
        );
        team.push(newIntern);
        console.log('This intern has been added');
        init();
      })
  } else {
    fs.writeFileSync(outputPath, render(team), (err) => {
      if (err) throw err
    }
    );
    console.log('Check the team.html document in the output folder for your team!');
  }
};
// Allows user to select employee role
const chooseRole = [
  {
    type: "rawlist",
    message: "What type of employee would you like to create?",
    name: "role",
    choices:
      [
        "Manager",
        "Engineer",
        "Intern",
        "Done creating employees"
      ],
  },];

// Starts program and begins to prompt questions
const init = () => {
  inquirer.prompt(chooseRole)
    .then(createTeam);
};

init();

