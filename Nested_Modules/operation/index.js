// this is the file where all modules are taken from different file and then export it from here 
// name of this file should be index.js so when we import module we can directly write the folder not the path of all files bcz './operation/index.js' nd './operation' is equal

const {multiply} = require('./multiply'); //desturcture
const {x,add} = require('./add');

module.exports = {
    multiply,
    x,
    add
};