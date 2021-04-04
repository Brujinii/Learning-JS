// Numbers
// Two types of numbers: 1. Regular numbers stored in 64 bit format "IEEE-754" 2. Bigint numbers, to represent numbers of arbitrary length

// More ways to write a number
let billion = 1000000000;

// Can also use underscore (_) as a separator
let betterbillion = 1_000_000_000;

// Use e(number) to specify the amount of 0s after that number
let num = 1e3; // 1000 (three zeroes)

// Can also use negatives
let ms = 1e-6; // 0.000001 (Moves decimal to the left 6 places)

// Hex, binary, and octal numbers
console.log( 0xff );  // 255 -> Use "0x" before the given number in hex

console.log( 0b11111111);  // 255 -> Use "0b" before the given number in binary

console.log(0o377);  // 255 -> Use "0o" before the given number in octal

// toString(base)
// Returns a string representation of any number in the given numerical system

let num = 255;
console.log( num.toString(16) );  // ff, return in hex since it is base 16
console.log( num.toString(2) );  // 11111111, return in binary since is is base 2

// Rounding

// Rounds down
num = 1.4;
Math.floor( num );  // 1
 
// Rounds up
Math.ceil( num );  // 2

// Rounds to the nearest int
Math.round( num );  // 1

// Removes anything after the decimal point
Math.trunc( num );  // 1

// toFixed(n) rounds number to n digits after the decimal and returns a string
let number = 12.34;
console.log(number.toFixed(1) );  // "12.3"

number = 12.36
console.log(number.toFixed(1) ); // "12.4"