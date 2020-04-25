var http = require('http')
var url = require('url')
var fs = require('fs')


var server = http.createServer(handelServer)


function handelServer(req, res){

    if(req.url === '/') {
        res.writeHead(201, {'content-Type': 'text/html'})
        fs.createReadStream("./index.html").pipe(res)
    }

    if(req.url === '/assets/stylesheet/style.css'){
        res.writeHead(201, {'content-Type' : 'text/css'})
        fs.createReadStream('./assets/stylesheet/style.css').pipe(res)
    }

}

server.listen(3000, ()=> console.log('Server Start'))