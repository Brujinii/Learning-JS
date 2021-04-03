// Constructor
// Constructor functions create a new object, similar to a previous one

// Technically regular functions, with a few conventions: 1. Should be named with capital letter 2. Should be executed with new operator

// Example
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);

// When a function is executed with "new" it does the following steps:
// 1. A new object is created and assigned to "this"
// 2. The function body executes. Usually it modifies "this", adds new properties to it
// 3. The value of "this" is returned