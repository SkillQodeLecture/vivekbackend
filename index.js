let http = require('http');
let fs = require('fs');
let port = 4000

const request = (req , res) => {
   let filename = "";
   switch(req.url){
    case '/' : filename = './index.html';
    break
    case '/home':filename = './home.html';
    break
   }
   fs.readFile(filename , (error , result) => {
    if(!error){
        res.end(result)
    }
   })
}

const server = http.createServer(request)

server.listen(port , (error) => {
    if(!error){
        console.log(`nodejs server start on port ${port}`)
        return false
    }
    console.log('nodejs server not start')
})
