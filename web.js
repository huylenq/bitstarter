var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var data = require('fs').readFileSync('index.html');
  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
