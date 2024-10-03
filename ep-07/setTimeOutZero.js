console.log("Hello world");

var a= 103489;
var b = 103489;

// this is supposed to be called immediately but this is not happen this way
// because it is an async operation and it goes to libuv and libuv can only get this callstack is empty.once the call stack finished executing all the code then it will be empty
setTimeout(()=>{
    console.log("Executed immediately");
},0);//called only after 0ms after call stack of main thred is empty

setTimeout(()=>{
    console.log("Executed after 3 sec");
},3000);

function multiplyFn(a,b){
    const result = a*b;
    return result;
}

var c= multiplyFn(a,b);
console.log("Multiplication result is : ",c);