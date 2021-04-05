// Arrays
// Like list in Python
let fruits = ["Apple", "Orange", "Plum"];

// Elements numbered, starting at 0

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Replace and element

fruits[2] = "Pear";  // Now ["Apple", "Orange", "Pear"]

// Total count of elements in an array is the length
console.log(fruits.length);

// Can store elements of every type
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

// Methods: pop, push, shift, unshift
// Push appends element to the end 
// Shift gets an element from the beginning, advancing the queue, so that the second element is now the first element
// pop takes an element from the end
console.log(fruits.pop() );

fruits.push("Banana");

fruits.shift();
console.log(fruits);

fruits.unshift("Blueberry");

// Loops
for (let fruit of fruits) {  // Iterates over elements of array
    console.log(fruit);
}