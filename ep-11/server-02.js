// handle differenet responses for url
// localhost:7777/getSecretData
const http = require("node:http");

const server = http.createServer(function(req,res){
    if(req.url === "/getsScretData"){
        res.end("There is no secret data");
    }else{

        res.end("Hello world");
    }
});

server.listen(7777); 
