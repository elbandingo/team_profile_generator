//start by building an employee constructor class
class Employee {
    constructor (name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //create a function for returning the name input
    getName() {
        return this.name;
    }

    //create a function for returning the ID input
    getId() {
        return this.id;
    }

    //create a function for returning the email from input
    getEmail() {
        return this.email;
    }

    //function to return employee type as 'Employee'
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;