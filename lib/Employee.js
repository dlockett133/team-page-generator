const Inquirer = require("inquirer");
const questions = require("../utils/employeeQuestions");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        Inquirer.prompt(questions.getName)
        .then((data) => console.log(data))
    }
}

const Daikeen = new Employee();

module.exports = Employee;