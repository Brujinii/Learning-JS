// Data Types
// Number
// Numbers represent both floating point numbers and integers. 

let n = 213;
n = 12.345;

// Operations line multiplication, division, addition, and subraction work on these types. *, /, +, and -, respectively.
// Special values like infinity, -infinity, and NaN belong to number type

// Infinity represents the mathematical infinity. Can get as a result of dividing by 0
alert( 1 / 0 );  // Infinity

// NaN is a computational error, such as dividing a number by a string
alert( "not a number" / 2 ) // Nan, not possible

// Bigint is used for numbers greater than 9007199254740991
const Bigint = 123456789123456789123456789n;    // Denoted by the 'n' at the end of the number

// Strings
// Surrounded by quotes


// No practical diffence between double and single quotes
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `Can embed another ${str}`

// Backticks are used to embed other information into strings
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

// Boolean, Logical 
// Has only two values, true or false

let nameFieldChecked = true;  // Yes, the name field is checked
let ageFieldChecked = false;  // No, the age field has not been checked

// Boolean come as a result of comparisons
let isGreater = 4 > 1

// Null Type
// Does not belong to any type, describes a value of nothing
let age = null;

// Undefined
// Occurs when a variable is declared but not assigned a value

let age;
alert(age);  // Shows undefined