function generateManager (arr) {
    let managerCard = ``
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            let name = arr[i].name;
            let id = arr[i].id;
            let email = arr[i].email;
            let officeNum = arr[i].officeNumber;
            
            managerCard += `
            <div class="col-md-4">
              <div class="card">
                <h5 class="card-header text-bg-success text-center name">
                <ion-icon name="cafe-outline"></ion-icon>
                  ${name}
                </h5>
                <div class="card-body">
                  <div class="card-text">
                    <ul>
                      <li><strong>ID:</strong> ${id}</li>
                      <li><strong>Email: </strong><a href="mailto:${email}">${email}</a></li>
                      <li><strong>Office Number:</strong> ${officeNum}</li>
                    </ul>
                  </div>
                </div>
                <div class="card-footer text-bg-success pt-4"></div>
              </div>
            </div>
            `
        }
        return managerCard;
    }          
}

function generateEngineer (arr) {
    let engineerCard = ``
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            let name = arr[i].name;
            let id = arr[i].id;
            let email = arr[i].email;
            let github = arr[i].github;

            engineerCard += `
                <div class="col-md-4">
                <div class="card">
                    <h5 class="card-header text-bg-danger text-center name">
                    <ion-icon name="glasses-outline"></ion-icon>
                    ${name}
                    </h5>
                    <div class="card-body">
                    <div class="card-text">
                        <ul>
                        <li><strong>ID:</strong> ${id}</li>
                        <li><strong>Email: </strong><a href="mailto:${email}">${email}</a></li>
                        <li><strong>GitHub: </strong><a href="https://github.com/${github}" target="_blank">${github}</a> </li>
                        </ul>
                    </div>
                    </div>
                    <div class="card-footer text-bg-danger pt-4"></div>
                </div>
                </div>
                `
        }
        return engineerCard;
    }
}

function generateIntern (arr) {
    let internCard = ``
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            let name = arr[i].name;
            let id = arr[i].id;
            let email = arr[i].email;
            let school = arr[i].school;

            internCard += `
                <div class="col-md-4">
                <div class="card">
                    <h5 class="card-header text-bg-warning text-center name">
                    <ion-icon name="school-outline"></ion-icon>
                    ${name}
                    </h5>
                    <div class="card-body">
                    <div class="card-text">
                        <ul>
                        <li><strong>ID:</strong> ${id}</li>
                        <li><strong>Email: </strong><a href="mailto:${email}">${email}</a></li>
                        <li><strong>School:</strong> ${school}</li>
                        </ul>
                    </div>
                    </div>
                    <div class="card-footer text-bg-warning pt-4"></div>
                </div>
                </div>
                `
        }
        return internCard;
    }
    
}

// create function that takes 3 arguments of arrays and invokes all 3 funcitons above
function generateHtml (managerArray, engineerArray, internArray) {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Page</title>
        <link rel="stylesheet" href="style.css" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
        />
    </head>
    <body>
        <nav class="navbar text-bg-primary p-3">
        <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand text-light text-center mb-0 h1">Navbar</span>
        </div>
        </nav>
        <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
            <div class="row">
                ${generateManager(managerArray)}
                ${generateEngineer(engineerArray)}
                ${generateIntern(internArray)}
            </div>
            </div>
        </div>
        </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>        
    </body>
    </html>

    `
}

module.exports = generateHtml