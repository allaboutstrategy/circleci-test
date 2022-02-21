const http = require('http');

http.createServer(function (req, res) {
  res.write('Hallo Rene, CICD geht und wie');
  res.end();
}).listen(8080, '0.0.0.0');
