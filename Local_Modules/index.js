// in node each file is a module
// require function is used to load module into another file
require('./add'); 
console.log("Hello from index file");

// reuire function can only execute that module but can't access their function or variable bcz  that is isolated by default

// console.log(x); // here x can't be accessd present inside add.js file 
// console.log(add(6,3)); // same in this case 

// it prints 5 when we require add.js file, bcz it is executed in add.js file but can't access add function in this file.


