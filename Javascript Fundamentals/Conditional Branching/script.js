// Following syntax can only be used for single lines of code
let year = prompt("In was Kevin Gonci born?");
if (year == 2005) alert('You are right!');

// Must use parentheses around the comparison, unlike python

if (year == 2005) {
    alert("That is correct");
    alert("You are so smart!");
} else if (year < 2005) {
    alert('Too early!');
} else if (year > 2005) {
    alert("Too late!")
}else {  // Else is used after the if code block
    alert("How can you be so wrong?");
}
// Goes through each code block and checks if the else if condition is true, once it finishes one in the chain it will skip the rest
// If none are found to be true, js will execute the else block

// Conditional operator '?'
// Sometimes a value needs to be assigned based on a conditions, for instance:
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// However, this can be shortened with the ?. The syntax is as follows:
// let result = condition ? value1 : value2;
// The conditions is evaluated, if it is truthy value 1 is returned, otherwise value 2 is returned.

accessAllowed = (age > 18) ? true : false;

// Using a sequence of '?' operators return a value which depends on more than 1 condition
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
