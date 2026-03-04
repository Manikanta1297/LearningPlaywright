console.log(greeting); // output undefined
var greeting = "Hello, World!";
console.log(greeting); // output "Hello, World!"

// Behind the scenes, JavaScript hoists the variable declaration 0(var greeting)
//  to the top of the scope, but not the assignment (greeting = "Hello,

//Var greeting  <-- hoisted declaration with undefined
//Console.log(greeting) // undefined
//greeting = "Hello, World!"  <-- assignment happens here in place of code
//Console.log(greeting) // "Hello, World!"
