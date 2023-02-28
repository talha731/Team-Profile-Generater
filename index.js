const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const promptForManager = () =>{
inquirer.prompt([{
    type: "input",
    name: "Name",
    message: "What is your team manager's name?"
},
{
    type: "input",
    name: "Office Number",
    message: "What is your team manager's office number?"
},{
    type: "input",
    name: "Email",
    message: "What is your team manager's email?"
},{
    type: "input",
    name: "Github account",
    message: "What is your team manager's Github user name?"
},{
    type: "input",
    name: "ID",
    message: "What is your team manager's ID number?"
},
]).then(response => {
    // populate manager info
    // promptForNexEMployee ()
})}
promptForManager();

const promptForNextEmployee = () => {
    inquirer.prompt([{
        
            type: "checkbox",
            message: "Which type of team member would you like to add next.",
            choices: ["Engineer", "Intern", "Thats all",],
          
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}
promptForNextEmployee();
const promptForEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the engineer's name?"
        },{
            type: "input",
            name: "ID",
            message: "What is the engineer's id?"
        },{
            type: "input",
            name: "Email",
            message: "What is the engineer's email?"
        },{
            type: "input",
            name: "Github user",
            message: "What is the engineer's Github username?"
        },
    ]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}
// promptForEngineer();

const promptForIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the intern's name?"
        },{
            type: "input",
            name: "ID",
            message: "What is the intern's ID?"
        },{
            type: "input",
            name: "Email",
            message: "What is the intern's email?"
        },{
            type: "input",
            name: "School",
            message: "What is the intern's School?"
        }
    ]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}
promptForIntern();

const buildPage = () => {

}
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
// creating the HTML
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Your Team Profile File...");
      writeToFile("./output/Team.html", generateTeam({ ...responses }));
    });
  }
  init();