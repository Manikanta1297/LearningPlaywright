console.log(a); // output undefined
var a = 10;
console.log(a); // output 10

// Phase1 : memory creation phase

var a = undefined; // memory is allocated and initialized with undefined
var b = undefined; // memory is allocated and initialized with undefined

//phase2: code execution phase

console.log(a); // output undefined
var a = 10; // assignment happens here
console.log(a); // output 10

// hoisting does not physically move the code but it is a concept that explains 
// how JavaScript handles variable and function declarations during the compilation phase before code execution
// it is mental model to understand how  the JS engine handles declarations during compilation 
console.log(a); // output undefined
var a = 10; // assignment happens here
console.log(a); // output 10