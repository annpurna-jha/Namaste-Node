const crypto = require("node:crypto");

console.log("Hello World");

var a= 103489;
var b = 103489;

//pbkdf2 - Password base key derivative function 
// this is taking lot of time because pbkdf2 is a very cpu intensive task.
//v8 engine offloads this task to Libuv This function helps in crypt the paasword

//sync func - block main thred never use it, until it is not completed v8 can't move forward
crypto.pbkdf2Sync("password","salt",500000,50,"sha512"); 
console.log("First key is generated");

//async func
crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key) =>{
    console.log("second Key is generated");
});

function multiplyFn(a,b){
    const result = a*b;
    return result;
}

var c= multiplyFn(a,b);
console.log("Multiplication result is : ",c);
