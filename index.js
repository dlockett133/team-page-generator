const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/employeeQuestions");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./utils/generateHtml");
const style = require("./utils/style");
const css  = style();
const managerArray = []
const engineerArray = []
const internArray = []
let createTeam = false

function init() {
    inquirer.prompt(questions.managerQuestions)
        .then((data) => {
            let name = data.managerName;
            let id = data.managerId;
            let email = data.managerEmail;
            let officeNumber = data.officeNumber;
            const newManager = new Manager(name, id, email, officeNumber);
            managerArray.push(newManager);
            addTeammate();
        })
}

function writeToFile (fileName, data){
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Your index.html has been generated")
    })
}

function addTeammate() {
    inquirer
    .prompt(questions.createTeam)
    .then((data) => {
        let addEmployee = data.addEmployee
        // console.log(addEmployee);
        
        if (createTeam === false) {
            if (addEmployee === `Add an engineer`){
                inquirer.prompt(questions.engineerQuestions)
                    .then((data)=> {
                        let name = data.engineerName;
                        let id = data.engineerId;
                        let email = data.engineerEmail;
                        let github = data.githubUsername;
                        const newEngineer = new Engineer(name, id, email, github);
                        engineerArray.push(newEngineer)
                        // console.log(myNewArray);
                        addTeammate();
                    });
            } else if (addEmployee === `Add an intern`){
                inquirer.prompt(questions.internQuestions)
                    .then((data)=> {
                        let name = data.internName;
                        let id = data.internId;
                        let email = data.internEmail;
                        let school = data.school;
                        const newIntern = new Intern(name, id, email, school);
                        internArray.push(newIntern)
                        // console.log(myNewArray);
                        addTeammate();
                    });
            } else {
                createTeam = true;
                const html = generateHtml(managerArray, engineerArray, internArray)
                writeToFile("index.html", html);
                writeToFile("style.css", css);
            }       
        } 
    })
}

init();


// Manager
// Employee
// inquirer