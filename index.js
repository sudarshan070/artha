var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(handelServer);

function handelServer(req, res) {

  var arr = ["png", "jpg"];
//   var parsedUrl = parse(req.url)

  if (req.url.includes("html")) {
    res.writeHead(201, { "content-Type": "text/html" });
    fs.createReadStream(`.${req.url}`).pipe(res);
  }

  if (req.url === "/assets/stylesheet/style.css") {
    res.writeHead(201, { "content-Type": "text/css" });
    fs.createReadStream("./assets/stylesheet/style.css").pipe(res);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (req.url.endsWith(arr[i])) {
        res.writeHead(201, { "content-Type": "images/*" });
        fs.createReadStream(`.${req.url}`).pipe(res);
        break;
      }
    }
  }
}

server.listen(3000, () => console.log("Server Start"));
