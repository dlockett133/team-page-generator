// Going to use inquire to prompt manager.js variable for class arguments
// then will ask if we would like to add an engineer or intern
// then will use inquirer to get information from prompts to inter in either intern or engineer class
// if chosen neither, it will exit out of script
// will generate html after script is done


const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/employeeQuestions");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

function init() {
    inquirer
        .prompt(questions.managerQuestions)
}

init();


// Manager
// Employee
// inquirer