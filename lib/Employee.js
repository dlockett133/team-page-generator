const Inquirer = require("inquirer");
const questions = require("../utils/employeeQuestions");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {return this.name};
    getId() {return this.id};
}

const Daikeen = new Employee();
Daikeen.getName()
module.exports = Employee;