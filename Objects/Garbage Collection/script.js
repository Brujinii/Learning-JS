// Memory Management in JS
// Meant to be reachable and abel to be accessed with the program
// Garbage collector monitors all objects and removes those that are no longer reachable


// Simple Example
let user = {
    name: "John"
};
// Variable user accesses the reference to the object
// If the value of user is overwritten the object is no longer able to be accessed

user = null;
// Now there is no way to reach the object previously referenced by "user" and the garbage collector will junk the data and free up the memory

// Two References
user = {
    name: "John"
};

let admin = user  // This copies the reference and now the object is referenced by two different names

user = null  // Now the object is no longer reachable by the reference "user" but can still be referenced using "admin"
// Only when admin is overwritten will the garbage collector remove it

// Interlinked Objects
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});
// Function "marry" links to objects by giving them references to each other and returns a new object that contains both
// All objects are reachable

// Remove some references
delete family.father;
delete family.mother.husband;
// Removes references from the object with man
