// Going to use inquire to prompt manager.js variable for class arguments
// then will ask if we would like to add an engineer or intern
// then will use inquirer to get information from prompts to inter in either intern or engineer class
// if chosen neither, it will exit out of script
// will generate html after script is done

// I need to create ADDEMPLOYEE Choice options as a function and not a part of manager qeustions

const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/employeeQuestions");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generate = require("./utils/generateHtml");
let createTeam = false
const managerArray = []
const engineerArray = []
const internArray = []
function init() {
    inquirer
        .prompt(questions.managerQuestions)
        .then((data) => {
            let name = data.managerName;
            let id = data.managerId;
            let email = data.managerEmail;
            let officeNumber = data.officeNumber;
            const newManager = new Manager(name, id, email, officeNumber);
            // console.log(newManager);
            managerArray.push(newManager);
            // console.log(myNewArray);
            addTeammate();
            // console.log(myNewArray)
        })
        // console.log("myNewArray")

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
                generate.generateManager(managerArray)
                generate.generateEngineer(engineerArray)
                generate.generateIntern(internArray)
            }       
        } 
    })
}

init();


// Manager
// Employee
// inquirer