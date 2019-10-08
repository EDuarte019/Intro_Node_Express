var fs = require('fs');
var jsonString = { "name" : 'Evi'};

fs.writeFile('data2.json', jsonString, function(err){
    if(err){
        console.log(err);
    }
});