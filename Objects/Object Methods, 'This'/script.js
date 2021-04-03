// Objects are created to represent real world, like users, orders, and so on:
let user = {
    name: "John",
    age: 30
};

// Create a Method 

user.sayHi = function() {
    console.log("Hello");
};

user.sayHi();  // Hello

// Just created a function expression to create a function and assign it to the property user.sayHi
// Can also use a pre-declared function

// Create function
function sayBye () {
    console.log("Goodbye");
};

// Then add as a method
user.sayBye = sayBye;

user.sayBye();  // "Goodbye"

// "This" in Methods
// Used when object needs to access information about itself in order to do a job

let person = {
    name: "Kevin",
    age: 15,

    sayHi() {
        // "this" is the current object in which the method is running
        console.log(this.name);
    }
};

person.sayHi();  // "Kevin"
