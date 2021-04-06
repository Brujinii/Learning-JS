/*
Array Methods
Add / remove items
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/

// Splice - delete an element from an array
// Syntax of splic:
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Modifies array starting from the index start, then removes deletecount elements and then insterts elem1, ..., elemN in their place and returns the modified array
let arr = ["I", "study", "JavaScript"];

arr.splice(1,1);  // From index 1 remove 1 element

console.log(arr);

arr = ["I", "study", "JS", "right", "now"];

// Remove 3 elemetns and replace them with the other 2
arr.splice(0, 3, "Let's", "dance");

console.log(arr);  // now ["Let's", "dance", "right", "now"]

// Splice returns an array of the removed elements

let removed = arr.splice(0, 2);

console.log(removed);

// Iterate: forEach
// Allows a function to be run for each element of an array

// For each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log)

