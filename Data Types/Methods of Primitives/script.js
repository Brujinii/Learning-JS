// Methods of Primitives
// Primitve types: string, number, bigint, boolean, symbol, null, and undefined

// Objects can store a function as one of its properties
let john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy!");
    }
};
  
john.sayHi(); // Hi buddy!

// Many builin objects exist, and allow working with dates, errors, html elements, etc.

// Ex.
let str = "Hello"

console.log( str.toUpperCase() );  // HELLO