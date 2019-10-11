var fs = require('fs');

function phoneNumber(err,data){
    console.log('data:', data);
}

fs.readdirSync('../', phoneNumber);
console.log("This code is last");

// fs.readFile('./data1.json', 'utf-8', function(err,data){
//     console.log(data);
//     console.log(data.name);
// });
// fs.readdir('c:/', function(err,data){
//     console.log(data);
// });