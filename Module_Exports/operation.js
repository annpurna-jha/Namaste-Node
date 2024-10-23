const add = (a,b) => {
    return a+b;
} 
const multiply = (a,b) =>{
    return a*b;
}

//export like this when single function  or variable to be used in another module multiple times
// module.exports = add;


//export like this when multiple function or variable will be used in another modules 
// module.exports ={ 
//     add:add,
//     multiply:multiply,
// };

// we can also export like this when multiple function or variable will be used in another modules  -> node automatically do x:x like this
module.exports ={ 
    add,
    multiply,
};

console.log(module.exports);//empty object

// // another way to export
// module.exports.add = add;
// module.exports.multiply = multiply;