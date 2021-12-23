//first, we need to require and import the employee constructor
const Employee = require('./Employee');

//create the intern class that extends from Employee object
class Intern extends Employee {
    constructor (name,id,email,school){
    //leverage the parent object with super, to obtain the previously entered details
    super (name,id,email)
    this.school = school;
    }

    //return the school text from the inquirer prompt
    getSchool() {
        return this.school;
    }

    //override the role to be the Intern role
    getRole() {
        return "Intern";
    }

}

module.exports = Intern;