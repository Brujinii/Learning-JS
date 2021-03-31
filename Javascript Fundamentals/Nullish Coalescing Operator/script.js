// Nullish coescing operator is written as two question marks, '??'
// Result of 'a ?? b' is if a is defined, then if a is not defined b.
// Common use case is to provide a value for a potentially undefined variable

let user;

alert(user ?? "Anonymous");  // "Anonymous", user not defined yet

let user = "John";

alert(user ?? "Anonymous"); // John (user defined)