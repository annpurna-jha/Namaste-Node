// require node core modules
const fs = require("node:fs"); // or require("fs") -same thing
const https = require("https");

// handled by v8 engine
console.log("Hello world");

var a= 103489;
var b = 103489;

// //sync function [it will block main thread] this functionality given by fs module - offloads to Libuv as v8 doesn't have any file system concept, it is not a good practice to use this sync method 
fs.readFileSync("./file.txt","utf-8");
console.log("This will execute only after file read");

//v8 engine offloads these task to Libuv and make sure that main thred should be free
https.get("https://dummyjson.com/products/1",(res)=>{
        console.log("Api data fetched successfully");
});

setTimeout(()=>{
    console.log("Timeout completed after 5 sec");
},5000);

//async function
fs.readFile("./file.txt","utf-8", (error,data) =>{
    console.log("File Data: ",data);
});

//handled by v8 engine
function multiplyFn(a,b){
    const result = a*b;
    return result;
}

var c= multiplyFn(a,b);
console.log("Multiplication result is : ",c);
