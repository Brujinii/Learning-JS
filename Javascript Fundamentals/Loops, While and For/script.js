// While Loop
/*
Syntax for a while loop:
while (condition) {
  // code
  // so-called "loop body"
}
If the condition is truthy, the loop continues to execute
*/
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
// The condition check can be moved below the loop using the 'do while' syntax
/*
do {
  // loop body
} while (condition);
*/
// Will execute body, then check condition and if it is truthy the loop will execute again
let i = 0;
do {
    alert(i);
    i++;
} while (i < 3);
/*
Syntax for 'for' loop:
for (begin; condition; step) {
    // ... loop body ...
} 
*/
for (let i = 0; i < 3; i++) {  // shows 0, then 1, then 2
    alert(i);
}
/*
Dissection of for statement part by part:
begin: i = 0: executes upon entering the loop
condition: i<3: checked before every loop iteration, if false the loop stops
step: i++: executes after the body on each iteration
*Note: any part of the loop can be skipped, no need for step, begin, or even condition. This creates and infinite loop
*/

// Can use the "break" keyword to exit a loop
let sum = 0;

while (true) {  // creates an infinite loop, similar to in python
    let value = +prompt("Enter a number", '');
    if (!value) break; // Exits the loop if the user did not enter a value
    sum += value
}
alert('Sum: ' + sum );

// The 'continue' keyword is used to skip the rest of a loop and go to the beginning of the loop
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

// Labels for break/continue
// Labels indentify a loop and can be used to stop the execution of other loops
// Syntax is 'break LabelName' to exit from a specific loop
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  alert('Done!');