var http = require('http')
var url = require('url')
var fs = require('fs')


var server = http.createServer(handelServer)


server.listen(4000, ()=> console.log('Server Start'))