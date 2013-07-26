var express = require('express');
var app = express();
app.use(express.logger());

/*app.get('/', function(request, response) {
  response.send('Hello World 2!');
});
*/

var websiteBuffer = new Buffer(8);
websiteBuffer = fs.readFileSync(index.html);
//var website
//website = websiteBuffer.toString();
app.get('/', function(request, response) {
    websiteBuffer.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
