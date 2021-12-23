//first, we require to import the Employee constructor
const Employee = require ("./Employee");

//create the Manager class that extends from the employee constructor
class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
        //leverage the parent object with super, to get the fist 3 main details, the set officeNumber
        super (name,id,email);
        this.officeNumber = officeNumber;
    }

    //return the github account from the inquirer prompt
    getOfficeNumber() {
        return this.officeNumber;
    }

    //set the role text to equal Manager
    getRole() {
        return "Manager";
    }
}

//export the Engineer module
module.exports = Manager;