// Primitives are copied by value, objects are copied by reference

// Directly copied
let message = "Hello!";
let phrase = message;

// Copied reference
let user = {
    name: "John"
};
let admin = user;

admin.name = "Pete"  // changed by the admin reference

console.log(user.name)

// Comparison by Reference
let a = {};
let b = a  // copy the reference

console.log( a == b )  // true, reference the same object
