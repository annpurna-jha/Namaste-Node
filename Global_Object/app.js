var name = "namste node";
var a = 10;
var b = 20;
console.log(name);
console.log(a+b);

console.log(global); //global object in node js
console.log(this); //this will give an empty object,not a global object like in browser
console.log(globalThis === global); //globalThis is a global object which is a standard way to represent global, window, this, self,frames etc