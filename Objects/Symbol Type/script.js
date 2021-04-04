// Symbols
// Represent a unique identifier

// id is a new symbol
let id1 = Symbol("id");  // can also give a symbol name or description, used for debugging
let id2 = Symbol("id")  // symbols are guaranteed to be unique, even if there are many symbols with the same description

// "Hidden" properties
// Allows to create hidden properties of objects, no code can overwrite or access

let user = {  // belongs to other code 
    name: "John"
};

let id = Symbol("id");

user[id] = 1;

console.log( user[id] )

// Note: symbols are skipped by for loops