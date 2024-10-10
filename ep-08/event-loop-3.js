const fs = require('fs');

setImmediate(()=>console.log("set Immediate"));

setTimeout(()=>console.log("Timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{ // event loop waits in poll phase when file read operation will completed it will again start from poll phase not from timer phase

    setTimeout(()=>console.log("2nd Timer expired"),0);
    process.nextTick(()=>console.log("2nd Process.nextTick"));
    setImmediate(()=>console.log("2nd set Immediate"));
    console.log("File Reading CB");
});

process.nextTick(()=>console.log("Process.nextTick"));

console.log("Last line of the file");