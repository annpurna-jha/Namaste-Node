const fs = require("fs");
const crypto = require("crypto");

// order of execution is not guaranteed
// by default size of thread pool is 4

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) =>{
    console.log("1 - cryptoPBKDF2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) =>{
    console.log("2 - cryptoPBKDF2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) =>{
    console.log("3 - cryptoPBKDF2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) =>{
    console.log("4 - cryptoPBKDF2 done")
});

