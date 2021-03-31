// Arrow Functions
// Concise syntax for creating functions
// Syntax:
// let func = (arg1, arg2, ..., argN) => expression


// Example:
let sum = (a, b) => a + b;
alert( sum(1,2) )

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

// Multiline Functions are Available for Use with Curly Braces
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
alert( sum(1, 2) ); // 3