function generateManager (arr) {
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].name);
            console.log(arr[i].id);
            console.log(arr[i].email);
            console.log(arr[i].officeNumber);
        }
    }          
}

function generateEngineer (arr) {
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].name);
            console.log(arr[i].id);
            console.log(arr[i].email);
            console.log(arr[i].github);
        }
    }
}

function generateIntern (arr) {
    if (arr === undefined) {
        return "The input array is empty";
    } else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].name);
            console.log(arr[i].id);
            console.log(arr[i].email);
            console.log(arr[i].school);
        }
    }
    
}

// create function that takes 3 arguments of arrays and invokes all 3 funcitons above
function generateHtml (managerArray, engineerArray, internArray) {
    generateManager(managerArray);
    generateEngineer(engineerArray);
    generateIntern(internArray);

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
                <div class="col-md-4">
                <div class="card">
                    <h5 class="card-header text-bg-info text-center name">
                    Card title
                    </h5>
                    <div class="card-body">
                    <div class="card-text">
                        <ul>
                        <li>ID:</li>
                        <li>Email:</li>
                        <li>Office Number:</li>
                        </ul>
                    </div>
                    </div>
                    <div class="card-footer text-bg-info pt-4"></div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="card">
                    <h5 class="card-header name">Card title</h5>
                    <div class="card-body">
                    <p class="card-text">Card content</p>
                    </div>
                    <div class="card-footer">Card footer</div>
                </div>
                </div>
                <div class="col-md-4">
                <div class="card">
                    <h5 class="card-header name">Card title</h5>
                    <div class="card-body">
                    <p class="card-text">Card content</p>
                    </div>
                    <div class="card-footer">Card footer</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </body>
    </html>

    `
}
// module.exports = {
//     generateManager,
//     generateEngineer,
//     generateIntern
// }

module.exports = generateHtml