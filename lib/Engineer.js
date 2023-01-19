const Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, githubUserName) {
        super(name, id, email);
        this.github = githubUserName;
    }

    getGithub() {return this.github}
    getRole() {return `Engineer`}
}

// const Nerd = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
// console.log(Nerd)
// console.log(Nerd.gitHub == "GitHubUser")
module.exports = Engineer;