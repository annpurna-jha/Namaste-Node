// creating a server

const http = require("node:http");

// this createServer() method gives back a instance of a server
const server = http.createServer( function(req,res){
    res.end("Hello world!"); //replies to the request
});

server.listen(7777); //pass port number inside listen() method