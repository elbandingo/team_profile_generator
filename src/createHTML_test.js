//create a function to create a card for the manager, whichs is the main card
const createMgr = function (manager) {
    return `
    <div class="col-10 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create a function that makes an Engineer's HTML content, which is a smaller card
const createEng = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create a function that makes an intern's HTML content, which is a smaller card
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// call a function that creates the HTML content, based on the employee object array
createHTML = (employeeInfo) => {

    // create an empty array for the card HTML data, this will be an array that will be joined together to make 1 concatenated HTML string
    cardArray = []; 
    //loop through the content, and set each cards value, push it to the array
    for (let i = 0; i < employeeInfo.length; i++) {
        const employee = employeeInfo[i];
        const role = employee.getRole(); 


        // if manager, push the HTML to the array
        if (role === 'Manager') {
            const mgrCard = createMgr(employee);
            cardArray.push(mgrCard);
        }

        // ifEngineer, push the HTML to the array
        if (role === 'Engineer') {
            const engineerCard = createEng(employee);

            cardArray.push(engineerCard);
        }

        // if Intern, push to the Array
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            cardArray.push(internCard);
        }
        
    }

    // create a new variable where the contents of the cardArray are joined
    const employeeCards = cardArray.join('')

    // generate the team output in HTML by combining the premade HTML template, and the dynamic team created in other function
    const generateTeam = teamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const teamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  </head>
  <body>
      <header>
          <nav class="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = createHTML; 