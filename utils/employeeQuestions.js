const managerQuestions = [
    {
        type: `input`,
        name: `managerName`,
        message: `What is the team manager's name?`
    },
    
    {
        type: `input`,
        name: `managerId`,
        message: `What is the team manager employee's ID?`
    },

    {
        type: `input`,
        name: `managerEmail`,
        message: `What is the team manager's email?`
    },

    {
        type: `input`,
        name: `officeNum`,
        message: `What is the team's office number?`
    },

    {
        type: `list`,
        name: `addEmployee`,
        message: `Would you like to:`,
        choices: [`Add an engineer?`, `Add an intern?` `Or to finish building my team?`]
    }
]

const engineerQuestions = [
    {
        type: `input`,
        name: `engineerName`,
        message: `What is the employee's name?`
    },
    
    {
        type: `input`,
        name: `engineerId`,
        message: `What is the employee's ID?`
    },

    {
        type: `input`,
        name: `engineerEmail`,
        message: `What is the employee's email?`
    },

    {
        type: `input`,
        name: `githubUsername`,
        message: `What is the employee's GitHub username?`
    },
]

const internQuestions = [
    {
        type: `input`,
        name: `internName`,
        message: `What is the employee's name?`
    },
    
    {
        type: `input`,
        name: `internId`,
        message: `What is the employee's ID?`
    },

    {
        type: `input`,
        name: `internEmail`,
        message: `What is the employee's email?`
    },

    {
        type: `input`,
        name: `school`,
        message: `What school does the intern attend?`
    }
]
module.exports = questions
