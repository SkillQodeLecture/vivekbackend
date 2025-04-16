let http = require('http');
let fs = require('fs');
let port = 4000;
const requestUrl = (req, res) => {
  let filename = "";
  console.log(req.url);
  switch (req.url) {
    case '/':
      filename = './src/index.html';
      break;
    case '/home':
      filename = './src/home.html';
      break;
  }
  fs.readFile(filename, (error, result) => {
    if (!error) {
      res.end(result);
    }
  });
};
const server = http.createServer(requestUrl);
server.listen(port, error => {
  if (!error) {
    console.log(`nodejs server start on port ${port}`);
    return false;
  }
  console.log('nodejs server not start');
})
