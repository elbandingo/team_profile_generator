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

