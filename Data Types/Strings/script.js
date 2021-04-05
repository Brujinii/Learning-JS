// Quotes
// Single quotes
let single = 'single-quoted';

// Double quotes
let double = "double-quoted";

// Backticks
let backticks = `backticks`;

// Backticks let other expressions be embedded into the string using ${expression}
let num = 3
console.log(`The chosen number is ${num}`);

// Backticks allow a string to span multiple lines
let guestList = `Guests:
* John
* Maria
* Pete 
`;

console.log(guestList);  // Log mutliple lines

// Special Characters
/*

Character	Description
\n	New line
\r	Carriage return: not used alone. Windows text files use a combination of two characters \r\n to represent a line break.
\', \"	Quotes
\\	Backslash
\t	Tab
\b, \f, \v	Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays.
\xXX	Unicode character with the given hexadecimal Unicode XX, e.g. '\x7A' is the same as 'z'.
\uXXXX	A Unicode symbol with the hex code XXXX in UTF-16 encoding, for instance \u00A9 – is a Unicode for the copyright symbol ©. It must be exactly 4 hex digits.
\u{X…XXXXXX} (1 to 6 hex characters)	A Unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two Unicode symbols, taking 4 bytes. This way we can insert long codes.
*/

// String Length
// Length is a property of a string

let len = "four".length;
console.log(len);

// Accessing Characters
let str = "Hello";
console.log(str[1])  // Can access using square brackets and the index of the character, starting at 0. Same as python

// Iterating over Strings
for (let char of "Hello") {
    console.log(char)
}

// Strings are Immutable, can not be changed in place