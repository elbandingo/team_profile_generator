//first we require and import the createHTML element, which is the final output
const createHTML = require('./src/createHTML');
//import the team constuctors, and node modules needed
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const { create } = require('domain');

//create an empty array for the team, this will have values pushed to it later once the prompts are done!
const teamArr = [];

//function for creating a manager for the team, and pushing it to the team array when done
const createMgr = () => {
    return inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: 'Who is the manager of this team?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Manager employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email for the Manager'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number?'
    }
    //then move the data to an object, and push it to the team array.
]).then(managerData => {
    const {name,id,email,officeNumber} = managerData;
    const manager = new Manager (name,id,email,officeNumber);
    teamArr.push(manager);
    console.log(teamArr);
});

};

//function for creating employees for the team. This will go until the user decides to NOT add any more employees
const createEmployee = () => {
    console.log("Begin adding members to your team.");
    console.log("==================================");
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'what type of employee is this?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the employees email?'
        },
//end of common shared traits of an employee, the next two prompts are based on if they are intern or engineer
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school for the intern',
            when: (userInput) => userInput.role === "Intern"
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github username for the Engineer',
            when: (userInput) => userInput.role === "Engineer"
        },
        //end of employee choices, prompt the user if they are done adding employees to their team
        {
            type: 'confirm',
            name: 'employeeConfirm',
            message: 'are there more employees to add to this team?',
            default: false
        }
    ]).then(employeeInfo => {
        //reconstruct an object to equal the employeeInfo object
        let {role, name, id, email, school, github, employeeConfirm} = employeeInfo;
        //declare an empty variable to be reused when each employee is created (acts as a placeholder)
        let employee;

        //if the employee is an intern, push the data to the team array with only that info
        if(role === 'Intern'){
            employee = new Intern(name,id,email,school);
        } else {
            employee = new Engineer(name,id,email,github);
        }
        //push the new employee information to the object
        teamArr.push(employee);

        //if the user decided to add more employees, run the function again, ensuring you pass through your current team, so that it can be built upon. if they chose NO, then return the current team array
        if(employeeConfirm) {
            return createEmployee(teamArr);
        } else {
            console.log(teamArr);
            return teamArr;
        }
    })
};


//create a function to write the team array data to a file, where it will be sent to ./dist/index.html
const createIndexPage = teamData => {
    fs.writeFile('./dist/index.html', teamData, error => {
        if(error){
            console.log(error);
            return;
        } else {
            console.log("You have successfully created your team profile page! you can find the index.html file inside the dist folder");
        }
    })
};




//run the functions to create your page. first create the manager, then build the team. after that is done build the HTML, and write it to the filesystem
createMgr()
.then(createEmployee)
.then(teamArr => {
    return createHTML(teamArr);
})
.then(generatedHTML => {
    return createIndexPage(generatedHTML);
})
.catch(error => {
    console.log(error);
});




