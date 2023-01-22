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
}
// module.exports = {
//     generateManager,
//     generateEngineer,
//     generateIntern
// }

module.exports = generateHtml