//create a function to create the HTML content for the manager
const createMgrHtml = function(managerInfo) {
    return `
    <div class="col-4 mt-6">
    <div class="card h-100">
        <div class="card-header">
            <h2>${managerInfo.name}</h2>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${managerInfo.id}</p>
            <p class="email">Email: <a href="mailto:${managerInfo.email}">${managerInfo.email}</a></p>
            <p class="office">Office Number: ${managerInfo.officeNumber}</p>
        </div>
    </div>
</div>
    `
};

const createInternHtml = function(intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
</div>
</div>
    `
};

const createEngineerHtml = function(engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `
};

//create a function that creates the entire HTML content, based on the cards created in functions above
const createHTML = function(teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Team Profile Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar">
                <span class="mb-0 h1 w-100 text-right">Employee Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <!--INSERT THE TEAM ARRAY OF HTML CONTENT HERE-->
                    ${teamCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
    `
}

//create a function that puts all card HTML into an array, so that when we generate the final content, it concatenates all the data.
joinEmployees = (employeeInfo) => {
    //set an empty array for the cards, to be filled in based on data input passed from inquirer object
    cardArr = [];
    //loop through the data that has been passed through, and use if statements to determine the role being captured to put into the array
    for (let i = 0; i = employeeInfo.length; i++) {
        const employee = employeeInfo[i];
        const role = employee.getRole();

        //if its a manager, get the manager information, and call the function. push it to the cardArr
        if (role === "Manager") {
            cardArr.push(createMgrHtml(employee));
        }

        //if its an intern, call the intern function, and push to the array
        if (role === "Intern") {
            cardArr.push(createInternHtml(employee));
        }

        //if its an engineer, call the engineer function, push it to the array
        if(role === "Engineer"){
            cardArr.push(createEngineerHtml(employee));
        }


    }
    //join the array data
    const teamCards = cardArr.join('');

    //return the array data to the function createHTML, so our content is complete
    return createHTML(teamCards);


}




module.exports = createHTML;