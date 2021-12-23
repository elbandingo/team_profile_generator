//first, we require to import the Employee constructor
const Employee = require ("./Employee");

//create the engineer class that extends from the employee constructor
class Engineer extends Employee {
    constructor (name,id,email,github) {
        //leverage the parent object with super, to get the fist 3 main details, the set github
        super (name,id,email);
        this.github = github;
    }

    //return the github account from the inquirer prompt
    getGithub() {
        return this.github;
    }

    //set the role text to equal engineer
    getRole() {
        return "Engineer";
    }
}

//export the Engineer module
module.exports = Engineer;