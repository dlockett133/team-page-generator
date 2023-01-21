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
let createTeam = false
function init() {
    inquirer
        .prompt(questions.managerQuestions)
        .then((data) => {
            let name = data.managerName;
            let id = data.managerId;
            let email = data.managerEmail;
            let officeNum = data.officeNum;
            let addEmployee = data.addEmployee;

            const newManager = new Manager(name, id, email, officeNum);
            console.log(newManager);
            if (createTeam === false) {
                if (addEmployee === `Add an engineer`){
                    inquirer.prompt(questions.engineerQuestions)
                        .then((data)=> {
                            console.log(data)
                            createTeam = true;
                        });
                } else if (addEmployee === `Add an intern`){
                    inquirer.prompt(questions.internQuestions)
                        .then((data)=> {
                            console.log(data)
                            createTeam = true;
                        });
                } else {
                    createTeam = true;
                }       
            } else {
                console.log("finish team")
            }
        })
}

init();


// Manager
// Employee
// inquirer