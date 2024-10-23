console.log("Hello from index file");

// import like this when one function or variable to be used multiple times
// const addFunc = require('./operation') ;
// console.log(addFunc(2,3));


//import like this when multiple function or variable to be import from another module
// const obj = require('./operation');

// const sum = obj.add(5,6);
// console.log(obj.add(7,6)) ;
// console.log(obj.multiply(2,5));
// console.log(sum);


//use desturcturing when import multiple function or variable to be import from another module
const{add,multiply} = require('./operation');

console.log(multiply(2,7));
console.log(add(4,0));
