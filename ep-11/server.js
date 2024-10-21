const http = require("node:http");

const server = http.createServer(function(req,res){
    //
    res.end("Hellow world");
});

server.listen(7777); //port number inside listen method
