var fs = require('fs');

app.use('/users', function(req, res){
    fs.readFile('./data1.json', 'utf-8', function(err, data){
        res.send(data);
    });
});