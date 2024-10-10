const fs = require('fs');

setImmediate(()=>console.log("set Immediate"));

setTimeout(()=>console.log("Timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
});

process.nextTick(()=>{
    process.nextTick(()=>console.log("Inner tick"));
    console.log("Process.nextTick");
});
    
console.log("Last line of the file");