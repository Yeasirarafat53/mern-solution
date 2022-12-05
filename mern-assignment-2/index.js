var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req,res){


    if (req.url=="/") {
       let data = fs.readFileSync("home.html", "utf8");
       res.writeHead(200, {"Content-Type":"text/html"});
       res.write(data)
       res.end()
        
    }else if(req.url=="/country"){
        let data = fs.readFileSync("country.html", "utf8");
       res.writeHead(200, {"Content-Type":"text/html"});
       res.write(data)
       res.end()
    }else if(req.url=="/office"){
        let data = fs.readFileSync("office.html", "utf8");
       res.writeHead(200, {"Content-Type":"text/html"});
       res.write(data)
       res.end()
    }else if(req.url=="/school"){
        let data = fs.readFileSync("school.html", "utf8");
       res.writeHead(200, {"Content-Type":"text/html"});
       res.write(data)
       res.end()
    }

});

server.listen(5000);
console.log("server run successfull");