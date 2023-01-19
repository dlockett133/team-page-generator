const Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, githubUserName) {
        super(name, id, email);
        this.github = githubUserName;
    }

    getGithub() {return this.github}
    getRole() {return `Engineer`}
}

module.exports = Engineer;