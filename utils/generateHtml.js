function generateManager (arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].name);
        console.log(arr[i].id);
        console.log(arr[i].email);
        console.log(arr[i].officeNumber);
    }
}

module.exports = generateManager