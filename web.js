var express = require('express');
var app = express();
var fs = require('fs');
var file = "index.html";
app.use(express.logger());

/*app.get('/', function(request, response) {
  response.send('Hello World 2!');
});
*/

//var websiteBuffer = new Buffer(8);
//websiteBuffer = fs.readFileSync(file);
//var website
//website = websiteBuffer.toString();
app.get('/', function(request, response) {
    var websiteBuffer = fs.readFileSync(file).toString;
    response.send(websiteBuffer);
});

/*var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/

