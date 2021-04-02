// Objects
// Are like a dictionary in python
let visitor = new Object();  // "object constructor" syntax
let user = {
    name: "John",
    age: 30,
    "likes birds": true,  // Can use quotes for multiword property names. Can end line with comma
}  // "object liter" syntax. This is the more commonly used syntax
console.log( user.name );
console.log( user.age );
user.isAdmin = true;  // Add a key and value to the user object
delete user.age;
// Square Brackets
// This would give error -> user.likes birds = true
// Need to use square brackets
user["goes to gym"] = true

console.log(user["goes to gym"])

delete user["goes to gym"]
// Using square brackets you can do anything that you would with "."

let key = "name"

console.log( user[key] )

// Computed Properties
// Means property name should be taken from that property
let fruit = "apple";

let bag = {
    [fruit]: 5
}

console.log( bag.apple )

// Property Value Shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,  // same as name: name
        // ...other properties
    }
}
// Property existence test
// Can check if key is in object using syntax '"key" in object'

console.log( "name" in user );  // true, user.age exists
console.log( "bbllalal" in user ); // false, does not exist
// "for...in" loop
// Iterates over all the keys of an object
for (let key in user) {
    console.log( key );  // name, age, isAdmin
    console.log( user[key] ) // values for keys
}